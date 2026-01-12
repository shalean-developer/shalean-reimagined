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
"[project]/app/notifications/actions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401b62d8bda24466c2f55521a8a9fced9394cbf750":"markAllAsRead","40413e7f909489684c9bcc1668a76d1b32f129be8d":"getUnreadCount","40855c4aac8b83932ecc153de371a2298babed871e":"createNotification","601f2dae89943fdd7ad4e92320842554fcff41980d":"markAsRead","604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1":"getNotifications","606616e361980e3dccc8cad9e125c89554799dc6fc":"deleteNotification"},"",""] */ __turbopack_context__.s([
    "createNotification",
    ()=>createNotification,
    "deleteNotification",
    ()=>deleteNotification,
    "getNotifications",
    ()=>getNotifications,
    "getUnreadCount",
    ()=>getUnreadCount,
    "markAllAsRead",
    ()=>markAllAsRead,
    "markAsRead",
    ()=>markAsRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
/**
 * Check if user is an admin (same logic as admin actions)
 */ function isAdminUser(email, userMetadata) {
    if (!email) return false;
    // Check email pattern
    if (email.includes('@admin.shalean.local')) {
        return true;
    }
    // Check user metadata
    if (userMetadata?.role === 'admin') {
        return true;
    }
    // Hardcoded admin emails (fallback)
    const adminEmails = [
        'admin@shalean.local',
        'admin@admin.shalean.local',
        'admin@shalean.com'
    ];
    return adminEmails.includes(email.toLowerCase());
}
async function createNotification(params) {
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])();
        const { data, error } = await supabase.from('notifications').insert({
            user_id: params.user_id || null,
            user_email: params.user_email || null,
            user_type: params.user_type,
            type: params.type,
            title: params.title,
            message: params.message,
            data: params.data || {},
            read: false
        }).select().single();
        if (error) {
            console.error('Error creating notification:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            notification: data
        };
    } catch (error) {
        console.error('Error in createNotification:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to create notification'
        };
    }
}
async function getNotifications(userType, limit = 50) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
        // Build query based on user type
        let query = querySupabase.from('notifications').select('*').eq('user_type', userType).order('created_at', {
            ascending: false
        }).limit(limit);
        // For customers and cleaners, match by user_id or email
        if (userType === 'customer' || userType === 'cleaner') {
            query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
        } else if (userType === 'admin') {
            // For admin, match by email (or all admin notifications if email pattern matches)
            if (isAdminUser(user.email, user.user_metadata)) {
                // Admin can see all admin notifications or their specific ones
                query = query.or(`user_email.eq.${user.email},user_email.is.null`);
            } else {
                query = query.eq('user_email', user.email);
            }
        }
        const { data, error } = await query;
        if (error) {
            console.error('Error fetching notifications:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            notifications: data || []
        };
    } catch (error) {
        console.error('Error in getNotifications:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch notifications'
        };
    }
}
async function getUnreadCount(userType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
        // Build query based on user type
        let query = querySupabase.from('notifications').select('id', {
            count: 'exact',
            head: true
        }).eq('user_type', userType).eq('read', false);
        // For customers and cleaners, match by user_id or email
        if (userType === 'customer' || userType === 'cleaner') {
            query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
        } else if (userType === 'admin') {
            // For admin, match by email (or all admin notifications if email pattern matches)
            if (isAdminUser(user.email, user.user_metadata)) {
                query = query.or(`user_email.eq.${user.email},user_email.is.null`);
            } else {
                query = query.eq('user_email', user.email);
            }
        }
        const { count, error } = await query;
        if (error) {
            console.error('Error fetching unread count:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            count: count || 0
        };
    } catch (error) {
        console.error('Error in getUnreadCount:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch unread count'
        };
    }
}
async function markAsRead(notificationIds, userType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        const ids = Array.isArray(notificationIds) ? notificationIds : [
            notificationIds
        ];
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
        // Build query to ensure user can only mark their own notifications as read
        let query = querySupabase.from('notifications').update({
            read: true,
            updated_at: new Date().toISOString()
        }).eq('user_type', userType).in('id', ids);
        // Add user matching condition
        if (userType === 'customer' || userType === 'cleaner') {
            query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
        } else if (userType === 'admin') {
            if (isAdminUser(user.email, user.user_metadata)) {
                query = query.or(`user_email.eq.${user.email},user_email.is.null`);
            } else {
                query = query.eq('user_email', user.email);
            }
        }
        const { error } = await query;
        if (error) {
            console.error('Error marking notifications as read:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Error in markAsRead:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to mark as read'
        };
    }
}
async function markAllAsRead(userType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
        // Build query to mark all unread notifications as read
        let query = querySupabase.from('notifications').update({
            read: true,
            updated_at: new Date().toISOString()
        }).eq('user_type', userType).eq('read', false);
        // Add user matching condition
        if (userType === 'customer' || userType === 'cleaner') {
            query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
        } else if (userType === 'admin') {
            if (isAdminUser(user.email, user.user_metadata)) {
                query = query.or(`user_email.eq.${user.email},user_email.is.null`);
            } else {
                query = query.eq('user_email', user.email);
            }
        }
        const { error } = await query;
        if (error) {
            console.error('Error marking all notifications as read:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Error in markAllAsRead:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to mark all as read'
        };
    }
}
async function deleteNotification(notificationId, userType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // Build query to ensure user can only delete their own notifications
        let query = supabase.from('notifications').delete().eq('id', notificationId).eq('user_type', userType);
        // Add user matching condition
        if (userType === 'customer' || userType === 'cleaner') {
            query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
        } else if (userType === 'admin') {
            query = query.eq('user_email', user.email);
        }
        const { error } = await query;
        if (error) {
            console.error('Error deleting notification:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Error in deleteNotification:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to delete notification'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createNotification,
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createNotification, "40855c4aac8b83932ecc153de371a2298babed871e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getNotifications, "604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getUnreadCount, "40413e7f909489684c9bcc1668a76d1b32f129be8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(markAsRead, "601f2dae89943fdd7ad4e92320842554fcff41980d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(markAllAsRead, "401b62d8bda24466c2f55521a8a9fced9394cbf750", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNotification, "606616e361980e3dccc8cad9e125c89554799dc6fc", null);
}),
"[project]/app/api/admin/create-cleaner/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notifications/actions.ts [app-route] (ecmascript)");
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
        // Check if cleaner with this phone number already exists
        const { data: existingCleaner } = await supabaseAdmin.from('cleaners').select('id, name, phone').eq('phone', phoneWithPlus).maybeSingle();
        if (existingCleaner) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `A cleaner with phone number ${phoneWithPlus} already exists (${existingCleaner.name})`
            }, {
                status: 400
            });
        }
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
            // Check for duplicate phone constraint
            if (cleanerError.code === '23505' || cleanerError.message?.includes('duplicate key') || cleanerError.message?.includes('unique constraint')) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: `A cleaner with phone number ${phoneWithPlus} already exists`
                }, {
                    status: 400
                });
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createNotification"])({
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

//# sourceMappingURL=%5Broot-of-the-server%5D__90223718._.js.map