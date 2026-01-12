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
"[project]/app/api/admin/create-cleaner/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server-admin.ts [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/notifications/actions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { phone, password, name, email, areas, bio, specialties, yearsExperience } = body;
        // Validate required fields
        if (!phone || !password || !name) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Phone, password, and name are required'
            }, {
                status: 400
            });
        }
        // Normalize phone number (remove spaces, ensure it starts with + if needed)
        // If it starts with 0, remove it and add +27 (South Africa country code)
        // If it already starts with +, use as-is
        // Otherwise, assume it's a South African number and add +27
        const normalizedPhone = phone.replace(/\s+/g, '').trim();
        let phoneWithPlus;
        if (normalizedPhone.startsWith('+')) {
            phoneWithPlus = normalizedPhone;
        } else if (normalizedPhone.startsWith('0')) {
            // Remove leading 0 and add +27
            phoneWithPlus = `+27${normalizedPhone.substring(1)}`;
        } else {
            // Assume it's already without country code, add +27
            phoneWithPlus = `+27${normalizedPhone}`;
        }
        // Format email for Supabase Auth: {phone}@cleaners.shalean.local
        // Use the normalized phone without + for email (Supabase Auth handles emails better without +)
        const phoneForEmail = phoneWithPlus.replace(/\+/g, '');
        const authEmail = `${phoneForEmail}@cleaners.shalean.local`;
        // Create admin client (uses service role key - bypasses RLS)
        const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
        // Step 1: Create Supabase Auth user
        const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
            email: authEmail,
            password: password,
            email_confirm: true,
            user_metadata: {
                phone: phoneWithPlus,
                name: name,
                role: 'cleaner'
            }
        });
        if (authError || !authUser.user) {
            console.error('Error creating auth user:', authError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: authError?.message || 'Failed to create authentication user'
            }, {
                status: 500
            });
        }
        // Step 2: Create cleaner record in database
        const cleanerData = {
            name,
            phone: phoneWithPlus,
            email: email || null,
            is_active: true,
            is_available: true,
            auth_user_id: authUser.user.id,
            available_monday: true,
            available_tuesday: true,
            available_wednesday: true,
            available_thursday: true,
            available_friday: true,
            available_saturday: true,
            available_sunday: true,
            rating: 0.0
        };
        // Add optional fields if provided
        if (areas && Array.isArray(areas)) {
            cleanerData.areas = areas;
        }
        if (bio) {
            cleanerData.bio = bio;
        }
        if (specialties && Array.isArray(specialties)) {
            cleanerData.specialties = specialties;
        }
        if (yearsExperience) {
            cleanerData.years_experience = yearsExperience;
        }
        const { data: cleaner, error: cleanerError } = await supabaseAdmin.from('cleaners').insert(cleanerData).select().single();
        if (cleanerError) {
            console.error('Error creating cleaner record:', cleanerError);
            // If cleaner creation fails, try to clean up the auth user
            try {
                await supabaseAdmin.auth.admin.deleteUser(authUser.user.id);
            } catch (deleteError) {
                console.error('Error cleaning up auth user:', deleteError);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: cleanerError.message || 'Failed to create cleaner record'
            }, {
                status: 500
            });
        }
        // Create notification for admin about new cleaner
        try {
            await createNotification({
                user_type: 'admin',
                type: 'new_user_registered',
                title: 'New Cleaner Created',
                message: `A new cleaner "${cleaner.name}" has been added to the system.`,
                data: {
                    user_id: cleaner.id,
                    user_type: 'cleaner',
                    cleaner_name: cleaner.name,
                    cleaner_phone: cleaner.phone
                }
            });
        } catch (notificationError) {
            // Don't fail cleaner creation if notification fails
            console.error('Error creating notification for new cleaner:', notificationError);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            cleaner: {
                id: cleaner.id,
                name: cleaner.name,
                phone: cleaner.phone,
                email: cleaner.email,
                auth_email: authEmail
            },
            message: 'Cleaner created successfully'
        });
    } catch (error) {
        console.error('Error in create-cleaner API:', error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6779bfb2._.js.map