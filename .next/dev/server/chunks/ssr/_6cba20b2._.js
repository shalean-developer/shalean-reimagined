module.exports = [
"[project]/app/notifications/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
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
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return {
                success: false,
                error: 'Not authenticated'
            };
        }
        // For admin, use admin client to bypass RLS if needed
        const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])() : supabase;
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createNotification,
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNotification, "40855c4aac8b83932ecc153de371a2298babed871e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNotifications, "604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUnreadCount, "40413e7f909489684c9bcc1668a76d1b32f129be8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAsRead, "601f2dae89943fdd7ad4e92320842554fcff41980d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAllAsRead, "401b62d8bda24466c2f55521a8a9fced9394cbf750", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNotification, "606616e361980e3dccc8cad9e125c89554799dc6fc", null);
}),
"[project]/.next-internal/server/app/admin/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/admin/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/notifications/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notifications/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/admin/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/notifications/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001fc05361210f0cb460b9890a512006fb7653ec44",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopActiveUsers"],
    "007aef7fb8d7b19fd92f7da67587a40a9b4eedfe93",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCustomersWithCredits"],
    "0083692216b78d97562e6e5a1a13ed4e83149312a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllAdditionalServices"],
    "0097f6a77558e0ca0b2bd800bbbb35227b2ff8d496",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentAdmin"],
    "0098d3c279eb4b40d99dbca04ff9c57dd3bb7b4d0d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCleaners"],
    "00ec23dc30346eb0b06872c62ee11beb9bc0025c60",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCustomers"],
    "00ecf9a7b2f23b5c6c68cc946a7e37e6f3937307ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllServices"],
    "4007a04587bd53392cae2c6ee477a304828da0272f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerSegmentation"],
    "40092b4795eaaa38b9c29c27221522e370b85ddd4b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServicePopularity"],
    "400ad969f4d32e82f0b0d79a1b61d22b9b657136e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServicePrice"],
    "4011cfa5d565db15fadcfb6139574eb600657b080d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopPerformers"],
    "401b62d8bda24466c2f55521a8a9fced9394cbf750",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAllAsRead"],
    "401f679af1d94ec45f41fc4f29eaa91bf5f0c56443",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteService"],
    "4020bcde5f8a1e7ee368388d1d68de035793ea4717",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getYearOverYearGrowth"],
    "402407ac22a805954d7565afa9c1849c0b04ba074c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRepeatCustomerRate"],
    "4024cd1a5f95b0528a1a4cf18ab664c0f1db77a1f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceTypeDistribution"],
    "402ac8f60cd73af0f5e24d924927feac19e8b3299c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevenueByPaymentStatus"],
    "402f617e2a4cffef469ceb5d6fdf1750cbb05ddbe5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyUserData"],
    "4031c1c12021ffdca87ff5c8747e1f58331ebcc544",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBookingStatusDistribution"],
    "40413e7f909489684c9bcc1668a76d1b32f129be8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUnreadCount"],
    "40448c4c54116ebc429b2c2ab0ec227ad709ab4ee5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceTypeComparison"],
    "4046cfb4817340f18b90b2ddd4edc4588c3019b806",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBookingWithCleaners"],
    "404a7068315f4581547c549f4397372c1a92de04a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdditionalService"],
    "404f25c89c091bda9a114df3bbbc2a9fdeb6aa6770",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAverageOrderValue"],
    "405260ba29639f6ac6d1d7fdd688194f2b3944a94d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerLifetimeValue"],
    "4057a6a6b76a5597bbc80da19c1fa07d91aa67a7d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceRules"],
    "407eaa5bd29c3d61dcd0e82e51198904f8f4c69dd5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAdditionalService"],
    "408530f1520d3e70659f9b4dfef77d429d3d65707a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdditionalServicePrice"],
    "4092476789f4f1ad4a1c9f60a21dc907c037165309",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminStats"],
    "409f29161cc3d02faa5d5819175e69698f9cbe385a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBookings"],
    "40b281e3e2e6aa66036b947d620294fc98178f2635",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPeriodComparison"],
    "40b2bfd5fdfbf794b8ab3f0a5057d9dc6da5e3fa18",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBookingsForAssignment"],
    "40b6005fe9921a03ff87fcf5435707dea3b7f371d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerPerformanceMetrics"],
    "40bbb74d2d3ea3259a2dc2686750b15583d3c54e23",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerAcquisitionCost"],
    "40bd94eff2cc9bf809965bce2d4bcdbb17d3d20306",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevenueByServiceType"],
    "40bdb74d8ba715827bc29bc755ff7760f45f5c47f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createService"],
    "40becce9c1f7c05d7ce48799e009b7923cd4adb1bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerBookingStats"],
    "40cbab06bd4de7c4c4073c6c25417f7eca3771f2e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerRetentionRate"],
    "40cfe4f10726ad622929985249c0b946c61f6f5ee3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevenueTrends"],
    "40d55c5f4501727da2c555cfe1f6cbaf5ec2dd2bce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRatingStats"],
    "40e12648f4e39b3faead6ddbac8def821f5f660f87",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMonthlyTransactionData"],
    "40e56d3fb810bb84b2c3ace7e237165210c6123ef7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerEarningsReport"],
    "40e5858db763da57b015db21bf1c4db502b3bc884a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevenueForecast"],
    "601f0889cd1c80334485cf784c30d12a3cf04a1cf0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateService"],
    "601f2dae89943fdd7ad4e92320842554fcff41980d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAsRead"],
    "603e12ad3623fab02311660d1f03cfcc647e786c65",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAdditionalServicePrice"],
    "603f8b11f86ad400c9981577e45baa113ee887c0fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateAdmin"],
    "604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "60553bacb99b8afbda47a30faed433490bd8222b18",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCleaner"],
    "6063bcd4f4bebcb36be741179f75fd85fb9913283d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assignCleanersToBookings"],
    "60732fc1d7942bc8304c7ebe6143417925c165a6df",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCustomer"],
    "60a903787909e53b48cffa2ccc58ae4797b45d7adb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAdditionalService"],
    "60ad4dd9709e3012ff085268ec15297dfea640bb8c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServicePrice"],
    "60b76360dd990103d6e2f5f7364ee298566d9630cf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServiceRules"],
    "60c9a932f574768b968ad2167dc0f50a45c58808be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeCleanerFromBooking"],
    "60dca3aa0396997e25aad261cbeade95167ab3f21f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBooking"],
    "60e62ecf6e5792a2edd7067ba80a2587be52c95b77",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBookingStatus"],
    "700351acdcac91776eda9d062e66d3c2f025a164ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allocateCreditsToCustomer"],
    "7032fb9ad53e762248e19ebd7baf63c576f3583ba4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adjustCustomerCredits"],
    "704f7351d91641ace46163f3aaa0504f7da13357ad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerCreditTransactions"],
    "705396d3b0b8103d2be8b06dac8c07f2791e627187",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCustomerCredits"],
    "70b4559bfb9700d4ac5e16bdfad4a12f7b9d6119e6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCleanerEarnings"],
    "70e2171f4fd22aa36f2f3213c9aef89c09af03f5d8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assignCleanersToBooking"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f28$dashboard$292f$bookings$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/admin/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/notifications/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notifications/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_6cba20b2._.js.map