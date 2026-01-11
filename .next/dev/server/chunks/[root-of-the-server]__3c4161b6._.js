module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const supabaseUrl = ("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co");
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
            cookies: {
                getAll () {
                    return cookieStore.getAll();
                },
                setAll (cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                    } catch  {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating Supabase client:', error);
        throw error;
    }
}
}),
"[project]/src/lib/supabase/server-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
function createAdminClient() {
    const supabaseUrl = ("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co");
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseServiceRoleKey) {
        const errorMsg = 'SUPABASE_SERVICE_ROLE_KEY is not set. This is REQUIRED for profile operations.';
        console.error('❌', errorMsg);
        console.error('📝 Get your service role key from: Supabase Dashboard -> Settings -> API -> service_role key (secret)');
        console.error('📝 Add it to your .env.local file as: SUPABASE_SERVICE_ROLE_KEY=your_key_here');
        // Throw an error instead of falling back to anon key
        // This forces users to set the service role key
        throw new Error(errorMsg);
    }
    // Create client with service role key (bypasses RLS completely)
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        },
        db: {
            schema: 'public'
        }
    });
    return client;
}
}),
"[project]/src/lib/utils/cleaner-earnings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cleaner earnings calculation utilities
 * 
 * Implements tiered earnings system:
 * - Standard/Airbnb: 70% if ≥3 months AND ≥400 hours, else 60%
 * - Deep Cleaning/Move In/Out/Carpet Cleaning: R250 per cleaner (fixed)
 * - Tips are added to earnings and divided among cleaners if multiple assigned
 */ __turbopack_context__.s([
    "calculateCleanerEarnings",
    ()=>calculateCleanerEarnings,
    "calculateCleanerTenure",
    ()=>calculateCleanerTenure,
    "calculateTipPerCleaner",
    ()=>calculateTipPerCleaner,
    "calculateTotalEarningsFromBooking",
    ()=>calculateTotalEarningsFromBooking,
    "calculateTotalHours",
    ()=>calculateTotalHours,
    "getEarningsPercentage",
    ()=>getEarningsPercentage,
    "isTeamBasedService",
    ()=>isTeamBasedService
]);
function isTeamBasedService(serviceType) {
    if (!serviceType) return false;
    const normalized = serviceType.toLowerCase().trim();
    // Deep Cleaning
    if (normalized.includes('deep')) {
        return true;
    }
    // Move In/Out
    if (normalized.includes('move')) {
        if (normalized.includes('in/out') || normalized.includes('in out') || normalized.includes('inout')) {
            return true;
        }
    }
    // Carpet Cleaning
    if (normalized.includes('carpet')) {
        return true;
    }
    return false;
}
function calculateCleanerTenure(createdAt) {
    if (!createdAt) return 0;
    const createdDate = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
    const now = new Date();
    // Calculate difference in milliseconds
    const diffMs = now.getTime() - createdDate.getTime();
    // Convert to months (approximate: 30 days per month)
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const months = diffDays / 30;
    return Math.max(0, months);
}
function calculateTotalHours(bookings) {
    if (!bookings || bookings.length === 0) return 0;
    return bookings.filter((b)=>b.status === 'completed' && b.payment_status === 'paid').reduce((total, booking)=>{
        const duration = Number(booking.service_duration) || 0;
        return total + duration;
    }, 0);
}
function getEarningsPercentage(tenureMonths, totalHours) {
    if (tenureMonths >= 3 && totalHours >= 400) {
        return 0.70;
    }
    return 0.60;
}
function calculateCleanerEarnings(booking, cleanerId, earningsPercentage, preferredCleanerIds) {
    // For team-based services: fixed R250 per cleaner
    if (isTeamBasedService(booking.service_type)) {
        return 250;
    }
    // For other services: 
    // Step 1: Calculate earnings for 1 default cleaner (excluding only equipment and service fee)
    // Step 2: Add additional_cleaners_price to the earnings pool
    // Step 3: Divide the total by the number of cleaners (including the base cleaner)
    // Equipment fee is excluded from earnings, but additional cleaners fee is added to the earnings pool
    const equipmentPrice = Number(booking.equipment_supply_price) || 0;
    const additionalCleanersPrice = Number(booking.additional_cleaners_price) || 0;
    // Step 1: Calculate amount for base cleaner (excluding only equipment and service fee)
    const amountForBaseCleaner = (Number(booking.total_amount) || 0) - (Number(booking.service_fee) || 0) - equipmentPrice;
    // Calculate earnings for 1 cleaner
    const baseEarningsForOneCleaner = amountForBaseCleaner * earningsPercentage;
    // Step 2: Add additional cleaners fee to the earnings pool
    const totalEarningsPool = baseEarningsForOneCleaner + additionalCleanersPrice;
    // Determine number of cleaners assigned to this booking
    // Use preferred_cleaner_ids if available, otherwise check preferred_cleaner_id
    let numCleaners = 1;
    if (preferredCleanerIds && Array.isArray(preferredCleanerIds) && preferredCleanerIds.length > 0) {
        numCleaners = preferredCleanerIds.length;
    } else if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids) && booking.preferred_cleaner_ids.length > 0) {
        numCleaners = booking.preferred_cleaner_ids.length;
    } else if (booking.preferred_cleaner_id) {
        numCleaners = 1;
    }
    // Step 3: Divide total earnings pool equally among all assigned cleaners
    return totalEarningsPool / numCleaners;
}
function calculateTipPerCleaner(tipAmount, preferredCleanerIds, preferredCleanerId) {
    const tip = Number(tipAmount) || 0;
    if (tip <= 0) return 0;
    // Determine number of cleaners
    let numCleaners = 1;
    if (preferredCleanerIds && Array.isArray(preferredCleanerIds) && preferredCleanerIds.length > 0) {
        numCleaners = preferredCleanerIds.length;
    } else if (preferredCleanerId) {
        numCleaners = 1;
    }
    // Divide tip equally among all cleaners
    return tip / numCleaners;
}
function calculateTotalEarningsFromBooking(booking, cleanerId, earningsPercentage) {
    const baseEarnings = calculateCleanerEarnings(booking, cleanerId, earningsPercentage, booking.preferred_cleaner_ids || null);
    const tip = calculateTipPerCleaner(booking.tip_amount || 0, booking.preferred_cleaner_ids, booking.preferred_cleaner_id);
    return baseEarnings + tip;
}
}),
"[project]/app/cleaner/actions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006374c708226613b4f9f179bdcc22f548734a4b98":"getCleanerStats","00cfc5487decda11050aba4d6adfc04c97edf6800a":"getCurrentCleaner","400c3b38a11e4946f9888927b9dcc25cc258d8b9d2":"calculateBookingsEarnings","404229d4a2391f70ae4e1636e65b58ce0172045828":"calculateBookingEarnings","407424f522637094128af18ea51884b5441885865a":"getCleanerBookingById","40a21f4363e61128aa708111c03e4b8f9a91215864":"getCleanerBookings","40e9c8b809fbb28f2cba0e39ec8776dc28f8f26b39":"getCleanerByPhone","60666f28190d6935704cc8de97891a902db58432f2":"authenticateCleaner","60973a8852eb904057fe83de54e909caee8024cf23":"updateCleanerAvailability","60a12ddac75796db4d4d4fc60138884ab06d6e90be":"updateBookingStatus","700855f263225f386c33ac1ae426b438ad205851f1":"reportLateness"},"",""] */ __turbopack_context__.s([
    "authenticateCleaner",
    ()=>authenticateCleaner,
    "calculateBookingEarnings",
    ()=>calculateBookingEarnings,
    "calculateBookingsEarnings",
    ()=>calculateBookingsEarnings,
    "getCleanerBookingById",
    ()=>getCleanerBookingById,
    "getCleanerBookings",
    ()=>getCleanerBookings,
    "getCleanerByPhone",
    ()=>getCleanerByPhone,
    "getCleanerStats",
    ()=>getCleanerStats,
    "getCurrentCleaner",
    ()=>getCurrentCleaner,
    "reportLateness",
    ()=>reportLateness,
    "updateBookingStatus",
    ()=>updateBookingStatus,
    "updateCleanerAvailability",
    ()=>updateCleanerAvailability
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cleaner-earnings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getCleanerByPhone(phone) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Normalize phone number (remove spaces, dashes, etc.)
        const normalizedPhone = phone.replace(/\s+/g, '').trim();
        const { data, error } = await supabase.from('cleaners').select('*').or(`phone.eq.${normalizedPhone},phone.eq.+${normalizedPhone}`).eq('is_active', true).maybeSingle();
        if (error) {
            console.error('Error fetching cleaner by phone:', error);
            return {
                success: false,
                error: error.message
            };
        }
        if (!data) {
            return {
                success: false,
                error: 'Cleaner not found'
            };
        }
        return {
            success: true,
            cleaner: data
        };
    } catch (error) {
        console.error('Error in getCleanerByPhone:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch cleaner'
        };
    }
}
async function authenticateCleaner(phone, password) {
    try {
        // First, find the cleaner by phone to verify they exist
        const cleanerResult = await getCleanerByPhone(phone);
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Invalid phone number or password'
            };
        }
        const cleaner = cleanerResult.cleaner;
        // Use phone-based email format for login
        // Format: {phone}@cleaners.shalean.local
        // Normalize phone (remove spaces, keep + if present)
        const normalizedPhone = phone.replace(/\s+/g, '').trim();
        const authEmail = `${normalizedPhone}@cleaners.shalean.local`;
        // Authenticate with Supabase Auth using client-side (this should be called from client)
        // Note: This function should ideally be called from a client component
        // For server-side, we'll return the cleaner info and let client handle auth
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Try to authenticate
        const { data, error } = await supabase.auth.signInWithPassword({
            email: authEmail,
            password
        });
        if (error) {
            console.error('Authentication error:', error);
            return {
                success: false,
                error: 'Invalid phone number or password'
            };
        }
        if (!data.user) {
            return {
                success: false,
                error: 'Authentication failed'
            };
        }
        // Update cleaner's auth_user_id if not set
        if (!cleaner.auth_user_id) {
            try {
                const adminSupabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
                await adminSupabase.from('cleaners').update({
                    auth_user_id: data.user.id
                }).eq('id', cleaner.id);
            } catch (updateError) {
                // Log but don't fail - auth_user_id update is optional
                console.warn('Could not update auth_user_id:', updateError);
            }
        }
        return {
            success: true,
            cleaner
        };
    } catch (error) {
        console.error('Error in authenticateCleaner:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Authentication failed'
        };
    }
}
async function getCurrentCleaner() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // Try to find cleaner by auth_user_id first
        let cleanerQuery = supabase.from('cleaners').select('*').eq('auth_user_id', user.id).eq('is_active', true).maybeSingle();
        let { data: cleaner, error: cleanerError } = await cleanerQuery;
        // If not found by auth_user_id, try to match by phone from email
        if (!cleaner && !cleanerError && user.email) {
            // Extract phone from email format: {phone}@cleaners.shalean.local
            const phoneMatch = user.email.match(/^(.+)@cleaners\.shalean\.local$/);
            if (phoneMatch) {
                const phone = phoneMatch[1];
                const phoneResult = await getCleanerByPhone(phone);
                if (phoneResult.success && phoneResult.cleaner) {
                    cleaner = phoneResult.cleaner;
                }
            }
        }
        if (cleanerError || !cleaner) {
            return {
                success: false,
                error: 'Cleaner profile not found'
            };
        }
        return {
            success: true,
            cleaner: cleaner
        };
    } catch (error) {
        console.error('Error in getCurrentCleaner:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to get cleaner'
        };
    }
}
async function getCleanerBookings(filter) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Fetch bookings where cleaner is assigned via preferred_cleaner_id (single)
        let singleQuery = supabase.from('bookings').select('*').eq('preferred_cleaner_id', cleanerId);
        // Fetch bookings with preferred_cleaner_ids (array) - fetch all with arrays, then filter
        let arrayQuery = supabase.from('bookings').select('*').not('preferred_cleaner_ids', 'is', null);
        // Apply filters to both queries
        if (filter && filter !== 'all') {
            const today = new Date().toISOString().split('T')[0];
            switch(filter){
                case 'today':
                    singleQuery = singleQuery.eq('service_date', today);
                    arrayQuery = arrayQuery.eq('service_date', today);
                    break;
                case 'upcoming':
                    singleQuery = singleQuery.gte('service_date', today).in('status', [
                        'pending',
                        'confirmed',
                        'on_my_way',
                        'started'
                    ]);
                    arrayQuery = arrayQuery.gte('service_date', today).in('status', [
                        'pending',
                        'confirmed',
                        'on_my_way',
                        'started'
                    ]);
                    break;
                case 'past':
                    singleQuery = singleQuery.lt('service_date', today).or('status.eq.completed,status.eq.cancelled');
                    arrayQuery = arrayQuery.lt('service_date', today).or('status.eq.completed,status.eq.cancelled');
                    break;
                case 'on_my_way':
                    singleQuery = singleQuery.eq('status', 'on_my_way');
                    arrayQuery = arrayQuery.eq('status', 'on_my_way');
                    break;
                case 'started':
                    singleQuery = singleQuery.eq('status', 'started');
                    arrayQuery = arrayQuery.eq('status', 'started');
                    break;
            }
        }
        // Execute both queries
        const [singleResult, arrayResult] = await Promise.all([
            singleQuery.order('service_date', {
                ascending: true
            }).order('service_time', {
                ascending: true
            }),
            arrayQuery.order('service_date', {
                ascending: true
            }).order('service_time', {
                ascending: true
            })
        ]);
        if (singleResult.error) {
            console.error('Error fetching cleaner bookings (single):', singleResult.error);
            return {
                success: false,
                error: singleResult.error.message
            };
        }
        if (arrayResult.error) {
            console.error('Error fetching cleaner bookings (array):', arrayResult.error);
            return {
                success: false,
                error: arrayResult.error.message
            };
        }
        // Debug logging
        console.log('[getCleanerBookings] Fetched bookings:', {
            cleanerId,
            filter,
            singleBookingsCount: singleResult.data?.length || 0,
            arrayBookingsCount: arrayResult.data?.length || 0
        });
        // Filter bookings where preferred_cleaner_ids array contains this cleanerId
        // Normalize UUIDs for comparison (handle case differences and string formats)
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const filteredArrayBookings = (arrayResult.data || []).filter((booking)=>{
            if (!booking.preferred_cleaner_ids || !Array.isArray(booking.preferred_cleaner_ids)) {
                return false;
            }
            // Check if array is empty
            if (booking.preferred_cleaner_ids.length === 0) {
                return false;
            }
            // Check if any ID in the array matches the cleanerId (case-insensitive)
            return booking.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        });
        // Combine results and remove duplicates
        const allBookings = [
            ...singleResult.data || [],
            ...filteredArrayBookings
        ];
        // Remove duplicates by booking ID
        const uniqueBookingsMap = new Map();
        allBookings.forEach((booking)=>{
            if (booking.id && !uniqueBookingsMap.has(booking.id)) {
                uniqueBookingsMap.set(booking.id, booking);
            }
        });
        const bookings = Array.from(uniqueBookingsMap.values());
        // Sort by service_date and service_time
        bookings.sort((a, b)=>{
            const dateCompare = a.service_date.localeCompare(b.service_date);
            if (dateCompare !== 0) return dateCompare;
            return a.service_time.localeCompare(b.service_time);
        });
        return {
            success: true,
            bookings
        };
    } catch (error) {
        console.error('Error in getCleanerBookings:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch bookings'
        };
    }
}
async function calculateBookingEarnings(bookingId) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Get cleaner info for tenure calculation
        const { data: cleaner, error: cleanerError } = await supabase.from('cleaners').select('created_at').eq('id', cleanerId).maybeSingle();
        if (cleanerError || !cleaner) {
            return {
                success: false,
                error: 'Cleaner not found'
            };
        }
        // Get the booking
        const { data: booking, error: bookingError } = await supabase.from('bookings').select('*').eq('id', bookingId).maybeSingle();
        if (bookingError || !booking) {
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        // Calculate tenure and total hours to determine percentage
        // For single booking display, we need all paid completed bookings to calculate hours
        // Use the same approach as getCleanerStats
        const { data: singleBookings } = await supabase.from('bookings').select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids').eq('preferred_cleaner_id', cleanerId);
        const { data: allMultiBookings } = await supabase.from('bookings').select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids').not('preferred_cleaner_ids', 'is', null);
        // Filter bookings assigned to this cleaner
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const arrayBookings = (allMultiBookings || []).filter((b)=>{
            if (!b.preferred_cleaner_ids || !Array.isArray(b.preferred_cleaner_ids)) {
                return false;
            }
            if (b.preferred_cleaner_ids.length === 0) {
                return false;
            }
            return b.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        });
        // Combine and remove duplicates
        const allBookingsMap = new Map();
        (singleBookings || []).forEach((b)=>{
            if (b.id) {
                allBookingsMap.set(b.id, b);
            }
        });
        arrayBookings.forEach((b)=>{
            if (b.id && !allBookingsMap.has(b.id)) {
                allBookingsMap.set(b.id, b);
            }
        });
        const cleanerBookings = Array.from(allBookingsMap.values());
        const tenureMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateCleanerTenure"])(cleaner.created_at);
        const totalHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTotalHours"])(cleanerBookings);
        const earningsPercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEarningsPercentage"])(tenureMonths, totalHours);
        // Calculate base earnings
        // Equipment fee and additional cleaners charges are excluded from cleaner earnings
        const baseEarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateCleanerEarnings"])({
            service_type: booking.service_type || '',
            total_amount: Number(booking.total_amount) || 0,
            service_fee: Number(booking.service_fee) || 0,
            equipment_supply_price: Number(booking.equipment_supply_price) || 0,
            additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
            preferred_cleaner_ids: booking.preferred_cleaner_ids,
            preferred_cleaner_id: booking.preferred_cleaner_id
        }, cleanerId, earningsPercentage, booking.preferred_cleaner_ids);
        // Calculate tip per cleaner
        const tipAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTipPerCleaner"])(Number(booking.tip_amount) || 0, booking.preferred_cleaner_ids, booking.preferred_cleaner_id);
        return {
            success: true,
            earnings: {
                baseEarnings,
                tipAmount,
                totalEarnings: baseEarnings + tipAmount,
                earningsPercentage
            }
        };
    } catch (error) {
        console.error('Error calculating booking earnings:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to calculate earnings'
        };
    }
}
async function getCleanerBookingById(bookingId) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Fetch the booking
        const { data: booking, error: fetchError } = await supabase.from('bookings').select('*').eq('id', bookingId).maybeSingle();
        if (fetchError) {
            console.error('Error fetching booking:', fetchError);
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        if (!booking) {
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        // Verify the cleaner is assigned to this booking
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        // Check single cleaner assignment
        const isAssignedSingle = booking.preferred_cleaner_id && normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;
        // Check multiple cleaner assignment
        let isAssignedMultiple = false;
        if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
            isAssignedMultiple = booking.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        }
        if (!isAssignedSingle && !isAssignedMultiple) {
            return {
                success: false,
                error: 'Unauthorized: You are not assigned to this booking'
            };
        }
        return {
            success: true,
            booking: booking
        };
    } catch (error) {
        console.error('Error in getCleanerBookingById:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch booking'
        };
    }
}
async function updateBookingStatus(bookingId, status) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // First, verify the cleaner is assigned to this booking
        const { data: booking, error: fetchError } = await supabase.from('bookings').select('*').eq('id', bookingId).maybeSingle();
        if (fetchError || !booking) {
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        // Check authorization: cleaner must be assigned to this booking
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const isAssignedSingle = booking.preferred_cleaner_id && normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;
        let isAssignedMultiple = false;
        if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
            isAssignedMultiple = booking.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        }
        const isAssigned = isAssignedSingle || isAssignedMultiple;
        if (!isAssigned) {
            return {
                success: false,
                error: 'Unauthorized: You are not assigned to this booking'
            };
        }
        // Validate status transition
        const validTransitions = {
            'pending': [
                'confirmed',
                'cancelled'
            ],
            'confirmed': [
                'on_my_way',
                'cancelled'
            ],
            'on_my_way': [
                'started',
                'cancelled'
            ],
            'started': [
                'completed',
                'cancelled'
            ],
            'completed': [],
            'cancelled': []
        };
        const currentStatus = booking.status;
        const allowedStatuses = validTransitions[currentStatus] || [];
        if (!allowedStatuses.includes(status) && status !== currentStatus) {
            return {
                success: false,
                error: `Invalid status transition: cannot change from ${currentStatus} to ${status}`
            };
        }
        // Update booking status
        const { data: updatedBooking, error: updateError } = await supabase.from('bookings').update({
            status,
            updated_at: new Date().toISOString()
        }).eq('id', bookingId).select().single();
        if (updateError) {
            console.error('Error updating booking status:', updateError);
            return {
                success: false,
                error: updateError.message
            };
        }
        return {
            success: true,
            booking: updatedBooking
        };
    } catch (error) {
        console.error('Error in updateBookingStatus:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update booking status'
        };
    }
}
async function reportLateness(bookingId, expectedArrivalTime, reason) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Verify authorization
        const { data: booking, error: fetchError } = await supabase.from('bookings').select('*').eq('id', bookingId).maybeSingle();
        if (fetchError || !booking) {
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        // Check authorization: cleaner must be assigned to this booking
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const isAssignedSingle = booking.preferred_cleaner_id && normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;
        let isAssignedMultiple = false;
        if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
            isAssignedMultiple = booking.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        }
        const isAssigned = isAssignedSingle || isAssignedMultiple;
        if (!isAssigned) {
            return {
                success: false,
                error: 'Unauthorized: You are not assigned to this booking'
            };
        }
        // Update booking with lateness information
        const { data: updatedBooking, error: updateError } = await supabase.from('bookings').update({
            expected_arrival_time: expectedArrivalTime,
            lateness_reason: reason,
            updated_at: new Date().toISOString()
        }).eq('id', bookingId).select().single();
        if (updateError) {
            console.error('Error reporting lateness:', updateError);
            return {
                success: false,
                error: updateError.message
            };
        }
        return {
            success: true,
            booking: updatedBooking
        };
    } catch (error) {
        console.error('Error in reportLateness:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to report lateness'
        };
    }
}
async function calculateBookingsEarnings(bookingIds) {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        if (bookingIds.length === 0) {
            return {
                success: true,
                earnings: {}
            };
        }
        // Get cleaner info for tenure calculation
        const { data: cleaner, error: cleanerError } = await supabase.from('cleaners').select('created_at').eq('id', cleanerId).maybeSingle();
        if (cleanerError || !cleaner) {
            return {
                success: false,
                error: 'Cleaner not found'
            };
        }
        // Get all bookings
        const { data: bookings, error: bookingsError } = await supabase.from('bookings').select('*').in('id', bookingIds);
        if (bookingsError || !bookings) {
            return {
                success: false,
                error: 'Failed to fetch bookings'
            };
        }
        // Get all cleaner bookings to calculate hours
        const { data: singleBookings } = await supabase.from('bookings').select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids').eq('preferred_cleaner_id', cleanerId);
        const { data: allMultiBookings } = await supabase.from('bookings').select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids').not('preferred_cleaner_ids', 'is', null);
        // Filter bookings assigned to this cleaner
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const arrayBookings = (allMultiBookings || []).filter((b)=>{
            if (!b.preferred_cleaner_ids || !Array.isArray(b.preferred_cleaner_ids)) {
                return false;
            }
            if (b.preferred_cleaner_ids.length === 0) {
                return false;
            }
            return b.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        });
        // Combine and remove duplicates
        const allBookingsMap = new Map();
        (singleBookings || []).forEach((b)=>{
            if (b.id) {
                allBookingsMap.set(b.id, b);
            }
        });
        arrayBookings.forEach((b)=>{
            if (b.id && !allBookingsMap.has(b.id)) {
                allBookingsMap.set(b.id, b);
            }
        });
        const cleanerBookings = Array.from(allBookingsMap.values());
        // Calculate tenure and hours
        const tenureMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateCleanerTenure"])(cleaner.created_at);
        const totalHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTotalHours"])(cleanerBookings);
        const earningsPercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEarningsPercentage"])(tenureMonths, totalHours);
        // Calculate earnings for each booking
        const earningsRecord = {};
        for (const booking of bookings){
            const baseEarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateCleanerEarnings"])({
                service_type: booking.service_type || '',
                total_amount: Number(booking.total_amount) || 0,
                service_fee: Number(booking.service_fee) || 0,
                equipment_supply_price: Number(booking.equipment_supply_price) || 0,
                additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
                preferred_cleaner_ids: booking.preferred_cleaner_ids,
                preferred_cleaner_id: booking.preferred_cleaner_id
            }, cleanerId, earningsPercentage, booking.preferred_cleaner_ids);
            const tipAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTipPerCleaner"])(Number(booking.tip_amount) || 0, booking.preferred_cleaner_ids, booking.preferred_cleaner_id);
            earningsRecord[booking.id] = {
                baseEarnings,
                tipAmount,
                totalEarnings: baseEarnings + tipAmount
            };
        }
        return {
            success: true,
            earnings: earningsRecord
        };
    } catch (error) {
        console.error('Error calculating bookings earnings:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to calculate earnings'
        };
    }
}
async function getCleanerStats() {
    try {
        // Get authenticated cleaner first
        const cleanerResult = await getCurrentCleaner();
        if (!cleanerResult.success || !cleanerResult.cleaner) {
            return {
                success: false,
                error: 'Not authenticated or cleaner profile not found'
            };
        }
        const cleanerId = cleanerResult.cleaner.id;
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Get cleaner info including created_at for tenure calculation
        const { data: cleaner, error: cleanerError } = await supabase.from('cleaners').select('rating, reliability_score, total_bookings, completed_bookings, on_time_bookings, created_at').eq('id', cleanerId).maybeSingle();
        if (cleanerError || !cleaner) {
            return {
                success: false,
                error: 'Cleaner not found'
            };
        }
        // Get all bookings assigned to this cleaner
        // Fetch bookings with preferred_cleaner_id (single) - include all fields needed for earnings calculation
        const { data: singleBookings, error: singleError } = await supabase.from('bookings').select('id, status, service_date, total_amount, payment_status, service_type, service_fee, subtotal, tip_amount, service_duration, equipment_supply_price, additional_cleaners_price, preferred_cleaner_id, preferred_cleaner_ids').eq('preferred_cleaner_id', cleanerId);
        // Fetch bookings with preferred_cleaner_ids (array) - fetch all with arrays, then filter in JS
        const { data: allMultiBookings, error: multiError } = await supabase.from('bookings').select('id, status, service_date, total_amount, payment_status, service_type, service_fee, subtotal, tip_amount, service_duration, equipment_supply_price, additional_cleaners_price, preferred_cleaner_ids, preferred_cleaner_id').not('preferred_cleaner_ids', 'is', null);
        if (singleError || multiError) {
            console.error('Error fetching bookings for stats:', singleError || multiError);
            return {
                success: false,
                error: (singleError || multiError)?.message || 'Failed to fetch bookings'
            };
        }
        // Debug logging
        console.log('[getCleanerStats] Fetched bookings:', {
            cleanerId,
            singleBookingsCount: singleBookings?.length || 0,
            allMultiBookingsCount: allMultiBookings?.length || 0
        });
        // Filter bookings where preferred_cleaner_ids array contains this cleanerId
        // Normalize UUIDs for comparison (handle case differences and string formats)
        const normalizeUuid = (id)=>{
            if (!id) return '';
            return String(id).toLowerCase().trim();
        };
        const normalizedCleanerId = normalizeUuid(cleanerId);
        const arrayBookings = (allMultiBookings || []).filter((booking)=>{
            if (!booking.preferred_cleaner_ids || !Array.isArray(booking.preferred_cleaner_ids)) {
                return false;
            }
            // Check if array is empty
            if (booking.preferred_cleaner_ids.length === 0) {
                return false;
            }
            // Check if any ID in the array matches the cleanerId (case-insensitive)
            return booking.preferred_cleaner_ids.some((id)=>normalizeUuid(id) === normalizedCleanerId);
        });
        // Combine and remove duplicates by ID
        const allBookingsMap = new Map();
        (singleBookings || []).forEach((booking)=>{
            if (booking.id) {
                allBookingsMap.set(booking.id, booking);
            }
        });
        arrayBookings.forEach((booking)=>{
            if (booking.id && !allBookingsMap.has(booking.id)) {
                allBookingsMap.set(booking.id, booking);
            }
        });
        const allBookings = Array.from(allBookingsMap.values());
        const today = new Date().toISOString().split('T')[0];
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        const completedBookings = allBookings.filter((b)=>b.status === 'completed');
        const upcomingBookings = allBookings.filter((b)=>[
                'pending',
                'confirmed',
                'on_my_way',
                'started'
            ].includes(b.status) && b.service_date >= today);
        const todayBookings = allBookings.filter((b)=>b.service_date === today);
        const paidBookings = allBookings.filter((b)=>b.payment_status === 'paid');
        const monthlyPaidBookings = allBookings.filter((b)=>b.status === 'completed' && b.payment_status === 'paid' && b.service_date >= firstDayOfMonth);
        const completedPaidBookings = allBookings.filter((b)=>b.status === 'completed' && b.payment_status === 'paid');
        // Calculate cleaner tenure and total hours for eligibility determination
        const tenureMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateCleanerTenure"])(cleaner.created_at);
        const totalHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTotalHours"])(allBookings);
        const earningsPercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEarningsPercentage"])(tenureMonths, totalHours);
        // Calculate earnings using the new system
        // Only calculate earnings for paid bookings (earnings are only paid when customer has paid)
        // Equipment fee and additional cleaners charges are excluded from cleaner earnings
        const totalEarnings = completedPaidBookings.reduce((sum, booking)=>{
            const earnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTotalEarningsFromBooking"])({
                service_type: booking.service_type || '',
                total_amount: Number(booking.total_amount) || 0,
                service_fee: Number(booking.service_fee) || 0,
                equipment_supply_price: Number(booking.equipment_supply_price) || 0,
                additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
                tip_amount: Number(booking.tip_amount) || 0,
                preferred_cleaner_ids: booking.preferred_cleaner_ids,
                preferred_cleaner_id: booking.preferred_cleaner_id
            }, cleanerId, earningsPercentage);
            return sum + earnings;
        }, 0);
        const monthlyEarnings = monthlyPaidBookings.reduce((sum, booking)=>{
            const earnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$earnings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateTotalEarningsFromBooking"])({
                service_type: booking.service_type || '',
                total_amount: Number(booking.total_amount) || 0,
                service_fee: Number(booking.service_fee) || 0,
                equipment_supply_price: Number(booking.equipment_supply_price) || 0,
                additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
                tip_amount: Number(booking.tip_amount) || 0,
                preferred_cleaner_ids: booking.preferred_cleaner_ids,
                preferred_cleaner_id: booking.preferred_cleaner_id
            }, cleanerId, earningsPercentage);
            return sum + earnings;
        }, 0);
        const completionRate = cleaner.total_bookings ? (cleaner.completed_bookings || 0) / cleaner.total_bookings * 100 : 0;
        const onTimeRate = cleaner.completed_bookings ? (cleaner.on_time_bookings || 0) / cleaner.completed_bookings * 100 : 0;
        return {
            success: true,
            stats: {
                totalBookings: allBookings.length,
                completedBookings: completedBookings.length,
                upcomingBookings: upcomingBookings.length,
                todayBookings: todayBookings.length,
                totalEarnings,
                monthlyEarnings,
                averageRating: Number(cleaner.rating) || 0,
                reliabilityScore: Number(cleaner.reliability_score) || 0,
                completionRate,
                onTimeRate
            }
        };
    } catch (error) {
        console.error('Error in getCleanerStats:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch stats'
        };
    }
}
async function updateCleanerAvailability(cleanerId, updates) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const updateData = {
            updated_at: new Date().toISOString()
        };
        if (updates.isAvailable !== undefined) {
            updateData.is_available = updates.isAvailable;
        }
        if (updates.availableMonday !== undefined) {
            updateData.available_monday = updates.availableMonday;
        }
        if (updates.availableTuesday !== undefined) {
            updateData.available_tuesday = updates.availableTuesday;
        }
        if (updates.availableWednesday !== undefined) {
            updateData.available_wednesday = updates.availableWednesday;
        }
        if (updates.availableThursday !== undefined) {
            updateData.available_thursday = updates.availableThursday;
        }
        if (updates.availableFriday !== undefined) {
            updateData.available_friday = updates.availableFriday;
        }
        if (updates.availableSaturday !== undefined) {
            updateData.available_saturday = updates.availableSaturday;
        }
        if (updates.availableSunday !== undefined) {
            updateData.available_sunday = updates.availableSunday;
        }
        const { data: updatedCleaner, error } = await supabase.from('cleaners').update(updateData).eq('id', cleanerId).select().single();
        if (error) {
            console.error('Error updating cleaner availability:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            cleaner: updatedCleaner
        };
    } catch (error) {
        console.error('Error in updateCleanerAvailability:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update availability'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCleanerByPhone,
    authenticateCleaner,
    getCurrentCleaner,
    getCleanerBookings,
    calculateBookingEarnings,
    getCleanerBookingById,
    updateBookingStatus,
    reportLateness,
    calculateBookingsEarnings,
    getCleanerStats,
    updateCleanerAvailability
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleanerByPhone, "40e9c8b809fbb28f2cba0e39ec8776dc28f8f26b39", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(authenticateCleaner, "60666f28190d6935704cc8de97891a902db58432f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentCleaner, "00cfc5487decda11050aba4d6adfc04c97edf6800a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleanerBookings, "40a21f4363e61128aa708111c03e4b8f9a91215864", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(calculateBookingEarnings, "404229d4a2391f70ae4e1636e65b58ce0172045828", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleanerBookingById, "407424f522637094128af18ea51884b5441885865a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBookingStatus, "60a12ddac75796db4d4d4fc60138884ab06d6e90be", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(reportLateness, "700855f263225f386c33ac1ae426b438ad205851f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(calculateBookingsEarnings, "400c3b38a11e4946f9888927b9dcc25cc258d8b9d2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleanerStats, "006374c708226613b4f9f179bdcc22f548734a4b98", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCleanerAvailability, "60973a8852eb904057fe83de54e909caee8024cf23", null);
}),
"[project]/app/api/cleaner/update-booking-status/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cleaner/actions.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { bookingId, status } = body;
        if (!bookingId || !status) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateBookingStatus"])(bookingId, status);
        if (!result.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: result.error
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            booking: result.booking
        });
    } catch (error) {
        console.error('Error in update-booking-status API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3c4161b6._.js.map