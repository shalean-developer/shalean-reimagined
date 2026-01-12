#!/usr/bin/env python3
"""
Transform bookings seed data from old schema to new schema format.
Fixes amounts by dividing by 100 and transforms to match current bookings table structure.
"""

import re
import json
import sys
from pathlib import Path

def parse_sql_insert(sql_content):
    """Parse SQL INSERT statement and extract data."""
    # Extract INSERT INTO statement
    match = re.search(r'INSERT INTO\s+"public"\."bookings"\s*\(([^)]+)\)\s*VALUES\s*(.+)', sql_content, re.DOTALL | re.IGNORECASE)
    if not match:
        return None, None
    
    columns_str = match.group(1)
    values_str = match.group(2)
    
    # Parse columns
    columns = [col.strip().strip('"') for col in columns_str.split(',')]
    
    # Parse values - this is complex because values can contain nested quotes
    # We'll use a simpler approach: find all value tuples
    values = []
    current_value = []
    in_string = False
    string_char = None
    paren_depth = 0
    current_field = []
    
    i = 0
    while i < len(values_str):
        char = values_str[i]
        
        if char in ("'", '"') and (i == 0 or values_str[i-1] != '\\'):
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char:
                in_string = False
                string_char = None
            current_field.append(char)
        elif char == '(' and not in_string:
            if paren_depth > 0:
                current_field.append(char)
            paren_depth += 1
            if paren_depth == 1:
                current_value = []
        elif char == ')' and not in_string:
            paren_depth -= 1
            if paren_depth == 0:
                if current_field:
                    field = ''.join(current_field).strip()
                    current_value.append(field)
                values.append(current_value)
                current_value = []
                current_field = []
                # Skip comma if present
                while i + 1 < len(values_str) and values_str[i+1] in (',', ' ', '\n'):
                    i += 1
            else:
                current_field.append(char)
        elif char == ',' and not in_string and paren_depth == 1:
            field = ''.join(current_field).strip()
            current_value.append(field)
            current_field = []
        else:
            current_field.append(char)
        
        i += 1
    
    return columns, values

def extract_value(val_str):
    """Extract value from SQL value string, handling quotes and nulls."""
    val_str = val_str.strip()
    if val_str.upper() == 'NULL' or val_str == 'null':
        return None
    if val_str.startswith("'") and val_str.endswith("'"):
        return val_str[1:-1].replace("''", "'")
    if val_str.startswith('"') and val_str.endswith('"'):
        return val_str[1:-1].replace('""', '"')
    try:
        # Try to parse as number
        if '.' in val_str:
            return float(val_str)
        return int(val_str)
    except:
        return val_str

def transform_booking(old_data, columns_map):
    """Transform a booking from old schema to new schema."""
    new_booking = {}
    
    # Map old columns to new structure
    id_value = old_data.get('id')
    if not id_value:
        return None
    
    # Booking number is the ID
    new_booking['booking_number'] = id_value
    
    # Customer name - split into first and last
    customer_name = old_data.get('customer_name', '')
    name_parts = customer_name.split(' ', 1)
    new_booking['customer_first_name'] = name_parts[0] if name_parts else ''
    new_booking['customer_last_name'] = name_parts[1] if len(name_parts) > 1 else ''
    
    # Direct mappings
    new_booking['customer_email'] = old_data.get('customer_email', '')
    new_booking['customer_phone'] = old_data.get('customer_phone', '').strip()
    new_booking['service_type'] = old_data.get('service_type', 'Standard')
    
    # Map cleaner_id to preferred_cleaner_id
    new_booking['preferred_cleaner_id'] = old_data.get('cleaner_id')
    
    # Dates
    new_booking['service_date'] = old_data.get('booking_date')
    new_booking['service_time'] = old_data.get('booking_time', '09:00:00')
    new_booking['created_at'] = old_data.get('created_at')
    new_booking['updated_at'] = old_data.get('updated_at', old_data.get('created_at'))
    
    # Address fields
    new_booking['service_address'] = old_data.get('address_line1', '')
    new_booking['service_apt_unit'] = None
    new_booking['service_suburb'] = old_data.get('address_suburb', '')
    new_booking['service_city'] = old_data.get('address_city', '')
    
    # Status and payment
    new_booking['status'] = old_data.get('status', 'pending')
    new_booking['payment_status'] = 'paid' if old_data.get('payment_reference') else 'pending'
    new_booking['paystack_reference'] = old_data.get('payment_reference')
    new_booking['paystack_transaction_id'] = None
    
    # User ID
    new_booking['user_id'] = old_data.get('customer_id')
    
    # Amounts - divide by 100 for seed data
    total_amount = old_data.get('total_amount', '0')
    if isinstance(total_amount, str):
        try:
            total_amount = float(total_amount)
        except:
            total_amount = 0
    
    # Fix amounts (divide by 100 if >= 10000)
    if total_amount >= 10000:
        total_amount = total_amount / 100
    
    new_booking['total_amount'] = round(total_amount, 2)
    new_booking['amount_paid'] = round(total_amount, 2) if new_booking['payment_status'] == 'paid' else 0
    new_booking['service_fee'] = float(old_data.get('service_fee', '0') or 0)
    
    # Frequency
    frequency = old_data.get('frequency', 'one-time')
    if frequency == 'custom-weekly':
        frequency = 'weekly'
    new_booking['cleaning_frequency'] = frequency or 'one-time'
    
    # Price snapshot parsing
    price_snapshot = old_data.get('price_snapshot', '{}')
    if isinstance(price_snapshot, str):
        try:
            price_snapshot = json.loads(price_snapshot)
        except:
            price_snapshot = {}
    
    # Extract from price snapshot if available
    service_info = price_snapshot.get('service', {})
    new_booking['bedrooms'] = str(service_info.get('bedrooms', '1'))
    new_booking['bathrooms'] = str(service_info.get('bathrooms', '1'))
    
    extras = price_snapshot.get('extras', [])
    new_booking['additional_services'] = json.dumps(extras) if extras else '[]'
    
    # Calculate prices from snapshot
    base_total = price_snapshot.get('total', total_amount)
    if isinstance(base_total, (int, float)) and base_total >= 10000:
        base_total = base_total / 100
    
    new_booking['base_price'] = round(base_total, 2)
    new_booking['additional_services_price'] = 0
    new_booking['equipment_supply_price'] = 0
    new_booking['frequency_discount_percent'] = float(price_snapshot.get('frequency_discount', 0) or 0)
    new_booking['frequency_discount_amount'] = 0
    new_booking['subtotal'] = round(base_total, 2)
    new_booking['discount_code'] = None
    new_booking['discount_amount'] = 0
    new_booking['tip_amount'] = float(old_data.get('tip_amount', '0') or 0)
    if new_booking['tip_amount'] >= 10000:
        new_booking['tip_amount'] = new_booking['tip_amount'] / 100
    
    # Defaults
    new_booking['cleaning_equipment'] = 'customer'
    new_booking['service_duration'] = 3
    new_booking['special_instructions'] = None
    new_booking['referral_code'] = None
    new_booking['number_of_cleaners'] = 1
    new_booking['additional_cleaners_price'] = 0
    new_booking['credits_used'] = 0
    new_booking['team_number'] = None
    new_booking['preferred_cleaner_ids'] = '[]'
    
    return new_booking

def generate_sql(bookings):
    """Generate SQL INSERT statement from bookings."""
    columns = [
        "booking_number", "customer_first_name", "customer_last_name",
        "customer_email", "customer_phone", "service_type", "bedrooms", "bathrooms",
        "additional_services", "cleaning_equipment", "preferred_cleaner_id",
        "cleaning_frequency", "service_date", "service_time", "service_duration",
        "service_address", "service_apt_unit", "service_suburb", "service_city",
        "special_instructions", "tip_amount", "base_price", "additional_services_price",
        "equipment_supply_price", "frequency_discount_percent", "frequency_discount_amount", "subtotal",
        "service_fee", "total_amount", "discount_code", "discount_amount",
        "amount_paid", "payment_status", "paystack_reference", "paystack_transaction_id",
        "status", "user_id", "referral_code", "number_of_cleaners", "additional_cleaners_price",
        "credits_used", "preferred_cleaner_ids", "created_at", "updated_at"
    ]
    
    sql_lines = [
        "-- Seed bookings data",
        "-- This file inserts booking data into the bookings table",
        "-- Generated from bookings_rows (3).sql",
        "",
        'INSERT INTO "public"."bookings" ('
    ]
    
    sql_lines.append('  "' + '", "'.join(columns) + '"')
    sql_lines.append(')')
    sql_lines.append('VALUES')
    
    value_lines = []
    for booking in bookings:
        if not booking:
            continue
            
        values = []
        for col in columns:
            val = booking.get(col)
            if val is None:
                values.append('NULL')
            elif isinstance(val, (int, float)):
                values.append(str(val))
            elif isinstance(val, str):
                # Escape single quotes
                val = val.replace("'", "''")
                values.append(f"'{val}'")
            elif isinstance(val, bool):
                values.append('true' if val else 'false')
            else:
                val_str = str(val).replace("'", "''")
                values.append(f"'{val_str}'")
        
        value_lines.append('  (' + ', '.join(values) + ')')
    
    sql_lines.append(',\n'.join(value_lines))
    sql_lines.append('ON CONFLICT (booking_number) DO UPDATE SET')
    sql_lines.append('  customer_first_name = EXCLUDED.customer_first_name,')
    sql_lines.append('  customer_last_name = EXCLUDED.customer_last_name,')
    sql_lines.append('  customer_email = EXCLUDED.customer_email,')
    sql_lines.append('  customer_phone = EXCLUDED.customer_phone,')
    sql_lines.append('  status = EXCLUDED.status,')
    sql_lines.append('  payment_status = EXCLUDED.payment_status,')
    sql_lines.append('  updated_at = EXCLUDED.updated_at;')
    
    return '\n'.join(sql_lines)

def main():
    input_file = Path('c:/Users/27825/Downloads/bookings_rows (3).sql')
    output_file = Path('supabase/migrations/seed_bookings.sql')
    
    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    print(f"Reading input file: {input_file}")
    with open(input_file, 'r', encoding='utf-8') as f:
        sql_content = f.read()
    
    # Simple regex-based parsing (since the SQL structure is complex)
    # Extract all value tuples
    pattern = r"\(('[^']*(?:''[^']*)*'|[^,()]+)(?:,('[^']*(?:''[^']*)*'|[^,()]+))*\)"
    
    # Actually, let's try a different approach - use regex to find INSERT INTO and parse values more carefully
    print("Parsing SQL...")
    
    # Extract the VALUES part
    values_match = re.search(r'VALUES\s+(.+)', sql_content, re.DOTALL | re.IGNORECASE)
    if not values_match:
        print("Error: Could not find VALUES clause")
        sys.exit(1)
    
    values_content = values_match.group(1)
    
    # Find column names
    columns_match = re.search(r'INSERT INTO\s+"public"\."bookings"\s*\(([^)]+)\)', sql_content, re.IGNORECASE)
    if not columns_match:
        print("Error: Could not find column names")
        sys.exit(1)
    
    columns_str = columns_match.group(1)
    old_columns = [col.strip().strip('"') for col in columns_str.split(',')]
    
    print(f"Found {len(old_columns)} columns in input file")
    print(f"Columns: {', '.join(old_columns[:10])}...")
    
    # Parse values using a state machine
    bookings_data = []
    current_tuple = []
    current_value = ''
    in_quotes = False
    quote_char = None
    paren_depth = 0
    escape_next = False
    
    i = 0
    while i < len(values_content):
        char = values_content[i]
        
        if escape_next:
            current_value += char
            escape_next = False
            i += 1
            continue
        
        if char == '\\' and in_quotes:
            escape_next = True
            current_value += char
            i += 1
            continue
        
        if char in ("'", '"') and not escape_next:
            if not in_quotes:
                in_quotes = True
                quote_char = char
                current_value += char
            elif char == quote_char:
                in_quotes = False
                quote_char = None
                current_value += char
            else:
                current_value += char
        elif char == '(' and not in_quotes:
            if paren_depth > 0:
                current_value += char
            paren_depth += 1
        elif char == ')' and not in_quotes:
            paren_depth -= 1
            if paren_depth == 0:
                # End of tuple
                current_value = current_value.strip()
                if current_value:
                    current_tuple.append(extract_value(current_value))
                if current_tuple:
                    bookings_data.append(current_tuple)
                current_tuple = []
                current_value = ''
                # Skip whitespace and commas
                while i + 1 < len(values_content) and values_content[i+1] in (',', ' ', '\n', '\r', '\t'):
                    i += 1
            else:
                current_value += char
        elif char == ',' and not in_quotes and paren_depth == 1:
            # End of field
            current_value = current_value.strip()
            current_tuple.append(extract_value(current_value))
            current_value = ''
        else:
            current_value += char
        
        i += 1
    
    print(f"Parsed {len(bookings_data)} booking records")
    
    # Transform data
    print("Transforming data...")
    transformed_bookings = []
    
    for row_data in bookings_data:
        old_booking = dict(zip(old_columns, row_data))
        new_booking = transform_booking(old_booking, {})
        if new_booking:
            transformed_bookings.append(new_booking)
    
    print(f"Transformed {len(transformed_bookings)} bookings")
    
    # Generate SQL
    print("Generating SQL...")
    sql_output = generate_sql(transformed_bookings)
    
    # Write output
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql_output)
    
    print(f"Success! Generated {output_file}")
    print(f"Total bookings: {len(transformed_bookings)}")

if __name__ == '__main__':
    main()
