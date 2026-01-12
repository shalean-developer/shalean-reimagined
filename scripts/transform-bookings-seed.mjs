#!/usr/bin/env node
/**
 * Transform bookings seed data from old schema to new schema format.
 * Fixes amounts by dividing by 100 and transforms to match current bookings table structure.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = 'c:/Users/27825/Downloads/bookings_rows (3).sql';
const outputFile = path.join(__dirname, '../supabase/migrations/seed_bookings.sql');

console.log('Reading input file...');
const sqlContent = fs.readFileSync(inputFile, 'utf-8');

// Extract column names
const columnsMatch = sqlContent.match(/INSERT INTO\s+"public"\."bookings"\s*\(([^)]+)\)/i);
if (!columnsMatch) {
  console.error('Error: Could not find column names');
  process.exit(1);
}

const oldColumns = columnsMatch[1]
  .split(',')
  .map(col => col.trim().replace(/^"|"$/g, ''));

console.log(`Found ${oldColumns.length} columns`);
console.log(`First 10 columns: ${oldColumns.slice(0, 10).join(', ')}`);

// Extract VALUES section
const valuesMatch = sqlContent.match(/VALUES\s+(.+)$/is);
if (!valuesMatch) {
  console.error('Error: Could not find VALUES clause');
  process.exit(1);
}

const valuesContent = valuesMatch[1].trim();

// Parse SQL values - this is a simplified parser
// It handles quoted strings, numbers, NULL, booleans
function parseSQLValue(str) {
  str = str.trim();
  if (str === 'NULL' || str === 'null') return null;
  if (str === 'true' || str === "'true'") return true;
  if (str === 'false' || str === "'false'") return false;
  
  // Handle quoted strings
  if ((str.startsWith("'") && str.endsWith("'")) || 
      (str.startsWith('"') && str.endsWith('"'))) {
    return str.slice(1, -1).replace(/''/g, "'");
  }
  
  // Try to parse as number
  const num = parseFloat(str);
  if (!isNaN(num) && isFinite(num)) {
    return num;
  }
  
  return str;
}

// Parse tuples from VALUES clause
function parseValues(content) {
  const rows = [];
  let currentRow = [];
  let currentValue = '';
  let inQuotes = false;
  let quoteChar = null;
  let parenDepth = 0;
  let i = 0;
  
  while (i < content.length) {
    const char = content[i];
    
    if (char === "'" || char === '"') {
      if (!inQuotes) {
        inQuotes = true;
        quoteChar = char;
      } else if (char === quoteChar) {
        // Check for escaped quote
        if (i + 1 < content.length && content[i + 1] === quoteChar) {
          currentValue += char + char;
          i += 2;
          continue;
        }
        inQuotes = false;
        quoteChar = null;
      }
      currentValue += char;
    } else if (char === '(' && !inQuotes) {
      parenDepth++;
      if (parenDepth > 1) {
        currentValue += char;
      }
    } else if (char === ')' && !inQuotes) {
      parenDepth--;
      if (parenDepth === 0) {
        // End of row
        if (currentValue.trim()) {
          currentRow.push(parseSQLValue(currentValue.trim()));
        }
        if (currentRow.length > 0) {
          rows.push([...currentRow]);
        }
        currentRow = [];
        currentValue = '';
        // Skip comma and whitespace
        while (i + 1 < content.length && /[\s,]/.test(content[i + 1])) {
          i++;
        }
      } else {
        currentValue += char;
      }
    } else if (char === ',' && !inQuotes && parenDepth === 1) {
      // End of field
      currentRow.push(parseSQLValue(currentValue.trim()));
      currentValue = '';
    } else {
      currentValue += char;
    }
    
    i++;
  }
  
  return rows;
}

console.log('Parsing values...');
const rows = parseValues(valuesContent);
console.log(`Parsed ${rows.length} rows`);

// Transform bookings
function transformBooking(row) {
  const oldData = {};
  oldColumns.forEach((col, idx) => {
    oldData[col] = row[idx];
  });
  
  const id = oldData.id;
  if (!id) return null;
  
  // Split customer name
  const customerName = (oldData.customer_name || '').toString();
  const nameParts = customerName.split(' ').filter(p => p);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  
  // Amounts - divide by 100 if >= 10000 (seed data)
  let totalAmount = parseFloat(oldData.total_amount || 0);
  if (totalAmount >= 10000) {
    totalAmount = totalAmount / 100;
  }
  
  let tipAmount = parseFloat(oldData.tip_amount || 0);
  if (tipAmount >= 10000) {
    tipAmount = tipAmount / 100;
  }
  
  // Parse price_snapshot if available
  let priceSnapshot = {};
  try {
    if (oldData.price_snapshot && typeof oldData.price_snapshot === 'string') {
      priceSnapshot = JSON.parse(oldData.price_snapshot);
    } else if (oldData.price_snapshot) {
      priceSnapshot = oldData.price_snapshot;
    }
  } catch (e) {
    // Ignore parse errors
  }
  
  const serviceInfo = priceSnapshot.service || {};
  const bedrooms = serviceInfo.bedrooms || 1;
  const bathrooms = serviceInfo.bathrooms || 1;
  const extras = priceSnapshot.extras || [];
  
  let basePrice = parseFloat(priceSnapshot.total || totalAmount);
  if (basePrice >= 10000) {
    basePrice = basePrice / 100;
  }
  
  // Frequency
  let frequency = oldData.frequency || 'one-time';
  if (frequency === 'custom-weekly') {
    frequency = 'weekly';
  }
  
  // Payment status
  const paymentStatus = oldData.payment_reference ? 'paid' : 'pending';
  
  return {
    booking_number: id,
    customer_first_name: firstName,
    customer_last_name: lastName,
    customer_email: (oldData.customer_email || '').toString(),
    customer_phone: (oldData.customer_phone || '').toString().trim(),
    service_type: oldData.service_type || 'Standard',
    bedrooms: bedrooms.toString(),
    bathrooms: bathrooms.toString(),
    additional_services: JSON.stringify(extras),
    cleaning_equipment: 'customer',
    preferred_cleaner_id: oldData.cleaner_id || null,
    cleaning_frequency: frequency || 'one-time',
    service_date: oldData.booking_date || null,
    service_time: oldData.booking_time || '09:00:00',
    service_duration: 3,
    service_address: (oldData.address_line1 || '').toString(),
    service_apt_unit: null,
    service_suburb: (oldData.address_suburb || '').toString(),
    service_city: (oldData.address_city || '').toString(),
    special_instructions: null,
    tip_amount: Math.round(tipAmount * 100) / 100,
    base_price: Math.round(basePrice * 100) / 100,
    additional_services_price: 0,
    equipment_supply_price: 0,
    frequency_discount_percent: parseFloat(priceSnapshot.frequency_discount || 0),
    frequency_discount_amount: 0,
    subtotal: Math.round(basePrice * 100) / 100,
    service_fee: parseFloat(oldData.service_fee || 0),
    total_amount: Math.round(totalAmount * 100) / 100,
    discount_code: null,
    discount_amount: 0,
    amount_paid: paymentStatus === 'paid' ? Math.round(totalAmount * 100) / 100 : 0,
    payment_status: paymentStatus,
    paystack_reference: oldData.payment_reference || null,
    paystack_transaction_id: null,
    status: oldData.status || 'pending',
    user_id: oldData.customer_id || null,
    referral_code: null,
    number_of_cleaners: 1,
    additional_cleaners_price: 0,
    credits_used: 0,
    preferred_cleaner_ids: '[]',
    created_at: oldData.created_at || null,
    updated_at: oldData.updated_at || oldData.created_at || null
  };
}

console.log('Transforming bookings...');
const transformedBookings = rows
  .map(transformBooking)
  .filter(b => b !== null);

console.log(`Transformed ${transformedBookings.length} bookings`);

// Generate SQL
const columns = [
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
];

function escapeSQL(str) {
  if (str === null || str === undefined) return 'NULL';
  if (typeof str === 'boolean') return str ? 'true' : 'false';
  if (typeof str === 'number') return str.toString();
  return "'" + str.toString().replace(/'/g, "''") + "'";
}

let sql = `-- Seed bookings data
-- This file inserts booking data into the bookings table
-- Generated from bookings_rows (3).sql

INSERT INTO "public"."bookings" (
  "${columns.join('", "')}"
)
VALUES
`;

const valueLines = transformedBookings.map((booking, idx) => {
  const values = columns.map(col => escapeSQL(booking[col]));
  const line = `  (${values.join(', ')})`;
  return idx < transformedBookings.length - 1 ? line + ',' : line;
});

sql += valueLines.join('\n');

sql += `
ON CONFLICT (booking_number) DO UPDATE SET
  customer_first_name = EXCLUDED.customer_first_name,
  customer_last_name = EXCLUDED.customer_last_name,
  customer_email = EXCLUDED.customer_email,
  customer_phone = EXCLUDED.customer_phone,
  status = EXCLUDED.status,
  payment_status = EXCLUDED.payment_status,
  updated_at = EXCLUDED.updated_at;
`;

// Write output
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, sql, 'utf-8');

console.log(`\nSuccess! Generated ${outputFile}`);
console.log(`Total bookings: ${transformedBookings.length}`);
