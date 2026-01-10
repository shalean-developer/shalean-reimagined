module.exports = [
"[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw"), {
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
}
}),
"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00d1405999e1046495476b3d80637183450821bfc0":"getCleaningEquipment","00f6a41d53889140d7e9eb8567bc58b1384742947f":"getServices","40504fbb7d25638dc4dfc5e6955689cad2084e9a62":"getQuotesByEmail","405ff48f2a3cbbdf419a7345e619dd1aab33494c6a":"getQuoteDraft","4064366348e3635d7d32c5f8e580ee61d31c234f51":"getHomeDetailOptions","40ba270d5bde2a8477c429febb815e3168fe1f680c":"getAdditionalServices","60205aad0eeb90ebe115b92a245d9b8b744446bd6c":"submitQuote","6029a1e453009ca60580c931994c4bbfdd2618eab7":"saveQuoteDraft"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveQuoteDraft, "6029a1e453009ca60580c931994c4bbfdd2618eab7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuoteDraft, "405ff48f2a3cbbdf419a7345e619dd1aab33494c6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotesByEmail, "40504fbb7d25638dc4dfc5e6955689cad2084e9a62", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitQuote, "60205aad0eeb90ebe115b92a245d9b8b744446bd6c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "00f6a41d53889140d7e9eb8567bc58b1384742947f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdditionalServices, "40ba270d5bde2a8477c429febb815e3168fe1f680c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHomeDetailOptions, "4064366348e3635d7d32c5f8e580ee61d31c234f51", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCleaningEquipment, "00d1405999e1046495476b3d80637183450821bfc0", null);
}),
"[project]/.next-internal/server/app/booking/worker/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/booking/worker/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00f6a41d53889140d7e9eb8567bc58b1384742947f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "40ba270d5bde2a8477c429febb815e3168fe1f680c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdditionalServices"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$booking$2f$worker$2f5b$serviceSlug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/booking/worker/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_c832d471._.js.map