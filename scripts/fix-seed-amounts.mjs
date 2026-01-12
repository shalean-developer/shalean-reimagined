#!/usr/bin/env node
/**
 * Fix seed bookings SQL file to ensure all amounts are properly formatted
 * and frequency_discount_percent doesn't exceed DECIMAL(5,2) limits
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlFile = path.join(__dirname, '../supabase/migrations/seed_bookings.sql');

console.log('Reading SQL file...');
let sql = fs.readFileSync(sqlFile, 'utf-8');

// Column order (position index)
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

// Fields that need to be checked/fixed
const DECIMAL_5_2_FIELDS = ['frequency_discount_percent']; // max 999.99
const DECIMAL_10_2_FIELDS = ['tip_amount', 'base_price', 'additional_services_price', 'equipment_supply_price', 
  'frequency_discount_amount', 'subtotal', 'service_fee', 'total_amount', 'discount_amount', 
  'amount_paid', 'additional_cleaners_price', 'credits_used'];

// Parse and fix values
const lines = sql.split('\n');
const fixedLines = [];
let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Skip header lines
  if (line.trim().startsWith('--') || line.includes('INSERT INTO') || line.includes('VALUES') || 
      line.includes('ON CONFLICT') || line.trim() === '') {
    fixedLines.push(line);
    continue;
  }
  
  // Match value tuples: (values...)
  const match = line.match(/^\s*\((.+)\)\s*,?\s*$/);
  if (!match) {
    fixedLines.push(line);
    continue;
  }
  
  const valuesStr = match[1];
  // Split values, handling quoted strings and NULL
  const values = [];
  let current = '';
  let inQuotes = false;
  let quoteChar = null;
  
  for (let j = 0; j < valuesStr.length; j++) {
    const char = valuesStr[j];
    
    if ((char === "'" || char === '"') && (j === 0 || valuesStr[j-1] !== '\\')) {
      if (!inQuotes) {
        inQuotes = true;
        quoteChar = char;
      } else if (char === quoteChar) {
        // Check for escaped quote
        if (j + 1 < valuesStr.length && valuesStr[j + 1] === quoteChar) {
          current += char + char;
          j++;
          continue;
        }
        inQuotes = false;
        quoteChar = null;
      }
      current += char;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    values.push(current.trim());
  }
  
  // Fix values
  let changed = false;
  for (let colIdx = 0; colIdx < columns.length && colIdx < values.length; colIdx++) {
    const colName = columns[colIdx];
    let val = values[colIdx];
    
    // Skip NULL and quoted strings (except for numbers)
    if (val === 'NULL' || val === 'null' || val === "''") {
      continue;
    }
    
    // Check if it's a numeric value
    const numMatch = val.match(/^([+-]?\d+(?:\.\d+)?)$/);
    if (!numMatch) {
      continue;
    }
    
    const numVal = parseFloat(val);
    
    // Fix DECIMAL(5,2) fields - max 999.99
    if (DECIMAL_5_2_FIELDS.includes(colName)) {
      if (Math.abs(numVal) > 999.99) {
        // Cap at 999.99
        const fixed = Math.min(Math.max(numVal, -999.99), 999.99);
        values[colIdx] = fixed.toFixed(2);
        changed = true;
        fixedCount++;
        console.log(`Fixed ${colName} on line ${i+1}: ${numVal} -> ${fixed.toFixed(2)}`);
      } else if (numVal !== Math.round(numVal * 100) / 100) {
        // Ensure 2 decimal places
        values[colIdx] = numVal.toFixed(2);
        changed = true;
      }
    }
    
    // Fix DECIMAL(10,2) fields - check for values that weren't divided
    if (DECIMAL_10_2_FIELDS.includes(colName)) {
      // If value is >= 10000 and looks like it should be divided (seed data)
      if (numVal >= 10000 && numVal < 1000000) {
        const fixed = numVal / 100;
        values[colIdx] = fixed.toFixed(2);
        changed = true;
        fixedCount++;
        console.log(`Fixed ${colName} on line ${i+1}: ${numVal} -> ${fixed.toFixed(2)}`);
      } else if (Math.abs(numVal) > 99999999.99) {
        // Cap at DECIMAL(10,2) max
        const fixed = Math.min(Math.max(numVal, -99999999.99), 99999999.99);
        values[colIdx] = fixed.toFixed(2);
        changed = true;
        fixedCount++;
      }
    }
  }
  
  // Rebuild the line
  if (changed) {
    const newLine = '  (' + values.join(', ') + ')' + (i < lines.length - 1 && lines[i].trim().endsWith(',') ? ',' : '');
    fixedLines.push(newLine);
  } else {
    fixedLines.push(line);
  }
}

// Write fixed file
console.log(`\nFixed ${fixedCount} values`);
console.log('Writing fixed SQL file...');
fs.writeFileSync(sqlFile, fixedLines.join('\n'), 'utf-8');
console.log('Done!');
