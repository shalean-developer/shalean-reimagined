# Supabase Setup Guide

This project is configured to work with Supabase. Follow these steps to connect to your Supabase database:

## Step 1: Get your Supabase credentials

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy the following values:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## Step 2: Create environment variables file

Create a `.env.local` file in the root directory of your project:

```bash
# Copy this template
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Replace the placeholder values with your actual Supabase credentials.

**Important**: The `.env.local` file is already in `.gitignore` and will not be committed to version control.

## Step 3: Usage

### Client-side (Browser/React Components)

```typescript
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()

// Example: Fetch data
const { data, error } = await supabase
  .from('your_table')
  .select('*')
```

### Server-side (Server Components, API Routes)

```typescript
import { createClient } from '@/lib/supabase/server'

const supabase = await createClient()

// Example: Fetch data
const { data, error } = await supabase
  .from('your_table')
  .select('*')
```

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript Client Reference](https://supabase.com/docs/reference/javascript/introduction)

