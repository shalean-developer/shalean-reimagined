#!/usr/bin/env node
/**
 * Transform customers seed data from old schema to new schema format.
 * Splits customers table into profiles and locations tables.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = 'c:/Users/27825/Downloads/customers_rows (1).sql';
const profilesOutputFile = path.join(__dirname, '../supabase/migrations/seed_customers_profiles.sql');
const locationsOutputFile = path.join(__dirname, '../supabase/migrations/seed_customers_locations.sql');

console.log('Reading input file...');
const sqlContent = fs.readFileSync(inputFile, 'utf-8');

// Extract column names
const columnsMatch = sqlContent.match(/INSERT INTO\s+"public"\."customers"\s*\(([^)]+)\)/i);
if (!columnsMatch) {
  console.error('Error: Could not find column names');
  process.exit(1);
}

const oldColumns = columnsMatch[1]
  .split(',')
  .map(col => col.trim().replace(/^"|"$/g, ''));

console.log(`Found ${oldColumns.length} columns`);
console.log(`Columns: ${oldColumns.join(', ')}`);

// Extract VALUES section
const valuesMatch = sqlContent.match(/VALUES\s+(.+)$/is);
if (!valuesMatch) {
  console.error('Error: Could not find VALUES clause');
  process.exit(1);
}

const valuesContent = valuesMatch[1].trim();

// Parse SQL values - handles quoted strings, numbers, NULL, booleans
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

// Transform data
const profiles = [];
const locations = [];

rows.forEach((row) => {
  const data = {};
  oldColumns.forEach((col, idx) => {
    data[col] = row[idx];
  });
  
  // Extract profile data
  const phone = data.phone ? data.phone.toString().trim() : null;
  const phoneValue = phone && phone.length > 0 ? phone : null;
  
  profiles.push({
    id: data.id,
    email: data.email,
    phone: phoneValue,
    first_name: data.first_name,
    last_name: data.last_name,
    created_at: data.created_at,
    updated_at: data.updated_at
  });
  
  // Extract location data (only if address_line1 is not NULL)
  if (data.address_line1) {
    locations.push({
      customer_email: data.email,
      customer_phone: phoneValue,
      nickname: 'Home',
      address: data.address_line1.toString(),
      suburb: data.address_suburb ? data.address_suburb.toString() : null,
      city: data.address_city ? data.address_city.toString() : null,
      created_at: data.created_at,
      updated_at: data.updated_at
    });
  }
});

console.log(`Transformed ${profiles.length} profiles`);
console.log(`Transformed ${locations.length} locations`);

// Generate SQL helper
function escapeSQL(str) {
  if (str === null || str === undefined) return 'NULL';
  if (typeof str === 'boolean') return str ? 'true' : 'false';
  if (typeof str === 'number') return str.toString();
  return "'" + str.toString().replace(/'/g, "''") + "'";
}

// Generate profiles SQL
const profilesColumns = ['id', 'email', 'phone', 'first_name', 'last_name', 'created_at', 'updated_at'];
let profilesSQL = `-- Seed customer profiles data
-- This file inserts customer data into the profiles table
-- Generated from customers_rows (1).sql

INSERT INTO "public"."profiles" (
  "${profilesColumns.join('", "')}"
)
VALUES
`;

const profilesValueLines = profiles.map((profile, idx) => {
  const values = profilesColumns.map(col => escapeSQL(profile[col]));
  const line = `  (${values.join(', ')})`;
  return idx < profiles.length - 1 ? line + ',' : line;
});

profilesSQL += profilesValueLines.join('\n');

profilesSQL += `
ON CONFLICT (email) DO UPDATE SET
  phone = EXCLUDED.phone,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  updated_at = EXCLUDED.updated_at;
`;

// Generate locations SQL (matching existing format - no apt_unit or postal_code)
const locationsColumns = ['id', 'customer_email', 'customer_phone', 'nickname', 'address', 'suburb', 'city', 'is_default', 'created_at', 'updated_at'];
let locationsSQL = `-- Seed customer locations data
-- This file inserts address data into the locations table
-- Generated from customers_rows (1).sql

INSERT INTO "public"."locations" (
  "${locationsColumns.join('", "')}"
)
VALUES
`;

const locationsValueLines = locations.map((location, idx) => {
  const values = [
    'gen_random_uuid()', // id
    escapeSQL(location.customer_email),
    escapeSQL(location.customer_phone),
    escapeSQL(location.nickname),
    escapeSQL(location.address),
    escapeSQL(location.suburb),
    escapeSQL(location.city),
    'true', // is_default
    escapeSQL(location.created_at),
    escapeSQL(location.updated_at)
  ];
  const line = `  (${values.join(', ')})`;
  return idx < locations.length - 1 ? line + ',' : line;
});

locationsSQL += locationsValueLines.join('\n');

// Use ON CONFLICT DO NOTHING to match existing seed file format
locationsSQL += `
ON CONFLICT DO NOTHING;
`;

// Write output files
const profilesOutputDir = path.dirname(profilesOutputFile);
const locationsOutputDir = path.dirname(locationsOutputFile);

if (!fs.existsSync(profilesOutputDir)) {
  fs.mkdirSync(profilesOutputDir, { recursive: true });
}
if (!fs.existsSync(locationsOutputDir)) {
  fs.mkdirSync(locationsOutputDir, { recursive: true });
}

fs.writeFileSync(profilesOutputFile, profilesSQL, 'utf-8');
fs.writeFileSync(locationsOutputFile, locationsSQL, 'utf-8');

console.log(`\nSuccess! Generated:`);
console.log(`  ${profilesOutputFile}`);
console.log(`  ${locationsOutputFile}`);
console.log(`Total profiles: ${profiles.length}`);
console.log(`Total locations: ${locations.length}`);
