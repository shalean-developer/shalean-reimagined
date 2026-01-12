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
"[project]/.next-internal/server/app/cleaner/(dashboard)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/notifications/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)");
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
}),
"[project]/.next-internal/server/app/cleaner/(dashboard)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/notifications/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "006374c708226613b4f9f179bdcc22f548734a4b98",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerStats"],
    "00cfc5487decda11050aba4d6adfc04c97edf6800a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentCleaner"],
    "400c3b38a11e4946f9888927b9dcc25cc258d8b9d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingsEarnings"],
    "401b62d8bda24466c2f55521a8a9fced9394cbf750",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAllAsRead"],
    "40413e7f909489684c9bcc1668a76d1b32f129be8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUnreadCount"],
    "404229d4a2391f70ae4e1636e65b58ce0172045828",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingEarnings"],
    "407424f522637094128af18ea51884b5441885865a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerBookingById"],
    "40a21f4363e61128aa708111c03e4b8f9a91215864",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerBookings"],
    "40e9c8b809fbb28f2cba0e39ec8776dc28f8f26b39",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerByPhone"],
    "601f2dae89943fdd7ad4e92320842554fcff41980d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAsRead"],
    "604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "60666f28190d6935704cc8de97891a902db58432f2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateCleaner"],
    "60973a8852eb904057fe83de54e909caee8024cf23",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCleanerAvailability"],
    "60a12ddac75796db4d4d4fc60138884ab06d6e90be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBookingStatus"],
    "700855f263225f386c33ac1ae426b438ad205851f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportLateness"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cleaner$2f28$dashboard$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cleaner/(dashboard)/page/actions.js { ACTIONS_MODULE0 => "[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/notifications/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notifications/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_84a1a37b._.js.map