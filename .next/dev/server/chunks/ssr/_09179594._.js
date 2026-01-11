module.exports = [
"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0021634062cd96c1456de274e1e4cb9bdb22c0005b":"getCleaningEquipment","00fc6971a6ccb01a8598c6ab12d37e043db8936f77":"getServices","403c32958a961e5aa8c3d3ca4e97daa1ade43825da":"getHomeDetailOptions","406015e2758827c594502325e52d94d06f4df9298f":"getAdditionalServices","40d3cbb576311a8971dac6f8d1a1dac0402a616de4":"getQuotesByEmail","40e29c53148bc07a6493a46527017a7993ffccb11d":"getQuoteDraft","608cb0c93803deee64c24543ee839c955b2374c81b":"saveQuoteDraft","60f63c16be1c62ef8ee9bc5f4b64ed8f8e09704209":"submitQuote"},"",""] */ __turbopack_context__.s([
    "getAdditionalServices",
    ()=>getAdditionalServices,
    "getCleaningEquipment",
    ()=>getCleaningEquipment,
    "getHomeDetailOptions",
    ()=>getHomeDetailOptions,
    "getQuoteDraft",
    ()=>getQuoteDraft,
    "getQuotesByEmail",
    ()=>getQuotesByEmail,
    "getServices",
    ()=>getServices,
    "saveQuoteDraft",
    ()=>saveQuoteDraft,
    "submitQuote",
    ()=>submitQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function saveQuoteDraft(email, formData) {
    try {
        if (!email || !email.trim()) {
            return {
                success: false,
                error: 'Email is required'
            };
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Check if a draft already exists for this email
        const { data: existingDraft } = await supabase.from('quotes').select('id').eq('email', email.trim().toLowerCase()).eq('status', 'draft').order('updated_at', {
            ascending: false
        }).limit(1).single();
        if (existingDraft) {
            // Update existing draft
            const { data, error } = await supabase.from('quotes').update({
                form_data: formData,
                updated_at: new Date().toISOString()
            }).eq('id', existingDraft.id).select().single();
            if (error) {
                console.error('Error updating quote draft:', error);
                return {
                    success: false,
                    error: error.message
                };
            }
            return {
                success: true,
                data: data
            };
        } else {
            // Create new draft
            const { data, error } = await supabase.from('quotes').insert({
                email: email.trim().toLowerCase(),
                status: 'draft',
                form_data: formData
            }).select().single();
            if (error) {
                console.error('Error creating quote draft:', error);
                return {
                    success: false,
                    error: error.message
                };
            }
            return {
                success: true,
                data: data
            };
        }
    } catch (error) {
        console.error('Unexpected error saving quote draft:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function getQuoteDraft(email) {
    try {
        if (!email || !email.trim()) {
            return null;
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('quotes').select('*').eq('email', email.trim().toLowerCase()).eq('status', 'draft').order('updated_at', {
            ascending: false
        }).limit(1).single();
        if (error) {
            // If no draft exists, that's okay - return null
            if (error.code === 'PGRST116') {
                return null;
            }
            console.error('Error fetching quote draft:', error);
            return null;
        }
        return data;
    } catch (error) {
        console.error('Unexpected error fetching quote draft:', error);
        return null;
    }
}
async function getQuotesByEmail(email) {
    try {
        if (!email || !email.trim()) {
            return [];
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('quotes').select('*').eq('email', email.trim().toLowerCase()).order('updated_at', {
            ascending: false
        });
        if (error) {
            console.error('Error fetching quotes:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching quotes:', error);
        return [];
    }
}
async function submitQuote(email, formData) {
    try {
        if (!email || !email.trim()) {
            return {
                success: false,
                error: 'Email is required'
            };
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Check if a draft exists for this email
        const { data: existingDraft } = await supabase.from('quotes').select('id').eq('email', email.trim().toLowerCase()).eq('status', 'draft').order('updated_at', {
            ascending: false
        }).limit(1).single();
        if (existingDraft) {
            // Update existing draft to submitted
            const { data, error } = await supabase.from('quotes').update({
                status: 'submitted',
                form_data: formData,
                updated_at: new Date().toISOString()
            }).eq('id', existingDraft.id).select().single();
            if (error) {
                console.error('Error submitting quote:', error);
                return {
                    success: false,
                    error: error.message
                };
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/booking/quote');
            return {
                success: true,
                data: data
            };
        } else {
            // Create new submitted quote
            const { data, error } = await supabase.from('quotes').insert({
                email: email.trim().toLowerCase(),
                status: 'submitted',
                form_data: formData
            }).select().single();
            if (error) {
                console.error('Error creating submitted quote:', error);
                return {
                    success: false,
                    error: error.message
                };
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/booking/quote');
            return {
                success: true,
                data: data
            };
        }
    } catch (error) {
        console.error('Unexpected error submitting quote:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function getServices() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('services').select('*').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching services:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching services:', error);
        return [];
    }
}
async function getAdditionalServices(serviceId) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        if (serviceId) {
            // Get additional services filtered by service rules
            const { data, error } = await supabase.from('service_additional_service_rules').select(`
          additional_service_id,
          additional_services:additional_service_id(*)
        `).eq('service_id', serviceId);
            if (error) {
                console.error('Error fetching additional services by service:', error);
                return [];
            }
            // Extract and format the additional services
            const additionalServices = (data || []).map((rule)=>rule.additional_services).filter((service)=>service && service.is_active).sort((a, b)=>a.display_order - b.display_order);
            return additionalServices;
        } else {
            // Get all active additional services
            const { data, error } = await supabase.from('additional_services').select('*').eq('is_active', true).order('display_order', {
                ascending: true
            });
            if (error) {
                console.error('Error fetching all additional services:', error);
                return [];
            }
            return data || [];
        }
    } catch (error) {
        console.error('Unexpected error fetching additional services:', error);
        return [];
    }
}
async function getHomeDetailOptions(optionType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('home_detail_options').select('*').eq('option_type', optionType).eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error(`Error fetching home detail options for ${optionType}:`, error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error(`Unexpected error fetching home detail options for ${optionType}:`, error);
        return [];
    }
}
async function getCleaningEquipment() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cleaning_equipment').select('*').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching cleaning equipment:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching cleaning equipment:', error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveQuoteDraft,
    getQuoteDraft,
    getQuotesByEmail,
    submitQuote,
    getServices,
    getAdditionalServices,
    getHomeDetailOptions,
    getCleaningEquipment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveQuoteDraft, "608cb0c93803deee64c24543ee839c955b2374c81b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuoteDraft, "40e29c53148bc07a6493a46527017a7993ffccb11d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotesByEmail, "40d3cbb576311a8971dac6f8d1a1dac0402a616de4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitQuote, "60f63c16be1c62ef8ee9bc5f4b64ed8f8e09704209", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "00fc6971a6ccb01a8598c6ab12d37e043db8936f77", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdditionalServices, "406015e2758827c594502325e52d94d06f4df9298f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHomeDetailOptions, "403c32958a961e5aa8c3d3ca4e97daa1ade43825da", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleaningEquipment, "0021634062cd96c1456de274e1e4cb9bdb22c0005b", null);
}),
"[project]/.next-internal/server/app/cleaner/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/cleaner/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "006374c708226613b4f9f179bdcc22f548734a4b98",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerStats"],
    "00cfc5487decda11050aba4d6adfc04c97edf6800a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentCleaner"],
    "400c3b38a11e4946f9888927b9dcc25cc258d8b9d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingsEarnings"],
    "404229d4a2391f70ae4e1636e65b58ce0172045828",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingEarnings"],
    "406015e2758827c594502325e52d94d06f4df9298f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdditionalServices"],
    "407424f522637094128af18ea51884b5441885865a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerBookingById"],
    "40a21f4363e61128aa708111c03e4b8f9a91215864",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerBookings"],
    "40e9c8b809fbb28f2cba0e39ec8776dc28f8f26b39",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCleanerByPhone"],
    "60666f28190d6935704cc8de97891a902db58432f2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateCleaner"],
    "60973a8852eb904057fe83de54e909caee8024cf23",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCleanerAvailability"],
    "60a12ddac75796db4d4d4fc60138884ab06d6e90be",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBookingStatus"],
    "700855f263225f386c33ac1ae426b438ad205851f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportLateness"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cleaner$2f28$dashboard$292f$bookings$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cleaner/(dashboard)/bookings/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cleaner$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cleaner/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_09179594._.js.map