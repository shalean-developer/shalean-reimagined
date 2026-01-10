-- Check which tables have RLS enabled
-- This will help identify if any other tables are blocking operations

SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
    AND tablename IN (
        'profiles',
        'credit_transactions',
        'locations',
        'bookings',
        'referrals',
        'vouchers',
        'voucher_redemptions'
    )
ORDER BY tablename;

-- Check all RLS policies in the database
SELECT 
    schemaname,
    tablename,
    policyname,
    cmd as command,
    roles,
    qual as using_expression,
    with_check as with_check_expression
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

