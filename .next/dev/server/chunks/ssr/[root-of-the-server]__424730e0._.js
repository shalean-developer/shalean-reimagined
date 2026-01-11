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
    const supabaseUrl = ("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co");
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
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
"[project]/src/lib/pricing/rules.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000db7a269f50cae8583065b1ddc90c15bfce8c3ca":"getServiceFeePercentage","00bba8a0ef74167457b0a936686e8409a8a83d19b4":"getFittedRoomPrice","00d5b819f29899b0636b43b918cfbbebc145e52936":"getLooseCarpetPrice","00e8abb81d07c4a6422d74121cad00d77fad5d03d8":"getPricingRules","405d31fc973b816c8a418370f6cd93eaa97bb0fb1e":"getBedroomPrice","409b8418eaf74e7ab4345146fce337e2dae2237c2b":"getFrequencyDiscount","40b674c9a511aad78dc862471d71d2dd4e2728d982":"getAdditionalServicePrice","40ee8e9a70dc974076f0a4d840cbfc782a7cbc9263":"getBasePrice","40fa83cf7d45d93d981b437ffa066d1a4295ce63fb":"getBathroomPrice"},"",""] */ __turbopack_context__.s([
    "getAdditionalServicePrice",
    ()=>getAdditionalServicePrice,
    "getBasePrice",
    ()=>getBasePrice,
    "getBathroomPrice",
    ()=>getBathroomPrice,
    "getBedroomPrice",
    ()=>getBedroomPrice,
    "getFittedRoomPrice",
    ()=>getFittedRoomPrice,
    "getFrequencyDiscount",
    ()=>getFrequencyDiscount,
    "getLooseCarpetPrice",
    ()=>getLooseCarpetPrice,
    "getPricingRules",
    ()=>getPricingRules,
    "getServiceFeePercentage",
    ()=>getServiceFeePercentage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getPricingRules() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('pricing_rules').select('*').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching pricing rules:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching pricing rules:', error);
        return [];
    }
}
async function getBasePrice(serviceId) {
    const rules = await getPricingRules();
    const basePriceRule = rules.find((rule)=>rule.rule_type === 'base_price' && rule.service_id === serviceId);
    return basePriceRule?.price || 0;
}
async function getBedroomPrice(bedroomCount) {
    const rules = await getPricingRules();
    const bedroomRule = rules.find((rule)=>rule.rule_type === 'bedroom' && rule.rule_value === bedroomCount);
    return bedroomRule?.price || 0;
}
async function getBathroomPrice(bathroomCount) {
    const rules = await getPricingRules();
    const bathroomRule = rules.find((rule)=>rule.rule_type === 'bathroom' && rule.rule_value === bathroomCount);
    return bathroomRule?.price || 0;
}
async function getAdditionalServicePrice(serviceId) {
    const rules = await getPricingRules();
    const serviceRule = rules.find((rule)=>rule.rule_type === 'additional_service' && rule.additional_service_id === serviceId);
    return serviceRule?.price || 0;
}
async function getServiceFeePercentage() {
    const rules = await getPricingRules();
    const feeRule = rules.find((rule)=>rule.rule_type === 'service_fee');
    return feeRule?.percentage || 0;
}
async function getFrequencyDiscount(frequency) {
    const rules = await getPricingRules();
    const discountRule = rules.find((rule)=>rule.rule_type === 'frequency_discount' && rule.rule_value === frequency);
    return discountRule?.percentage || 0;
}
async function getFittedRoomPrice() {
    const rules = await getPricingRules();
    const fittedRoomRule = rules.find((rule)=>rule.rule_type === 'fitted_room' && rule.rule_key === 'per_room');
    return fittedRoomRule?.price || 0;
}
async function getLooseCarpetPrice() {
    const rules = await getPricingRules();
    const looseCarpetRule = rules.find((rule)=>rule.rule_type === 'loose_carpet' && rule.rule_key === 'per_carpet');
    return looseCarpetRule?.price || 0;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getPricingRules,
    getBasePrice,
    getBedroomPrice,
    getBathroomPrice,
    getAdditionalServicePrice,
    getServiceFeePercentage,
    getFrequencyDiscount,
    getFittedRoomPrice,
    getLooseCarpetPrice
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPricingRules, "00e8abb81d07c4a6422d74121cad00d77fad5d03d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBasePrice, "40ee8e9a70dc974076f0a4d840cbfc782a7cbc9263", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBedroomPrice, "405d31fc973b816c8a418370f6cd93eaa97bb0fb1e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBathroomPrice, "40fa83cf7d45d93d981b437ffa066d1a4295ce63fb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdditionalServicePrice, "40b674c9a511aad78dc862471d71d2dd4e2728d982", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServiceFeePercentage, "000db7a269f50cae8583065b1ddc90c15bfce8c3ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFrequencyDiscount, "409b8418eaf74e7ab4345146fce337e2dae2237c2b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFittedRoomPrice, "00bba8a0ef74167457b0a936686e8409a8a83d19b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLooseCarpetPrice, "00d5b819f29899b0636b43b918cfbbebc145e52936", null);
}),
"[project]/src/lib/utils/service-validation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service validation utilities for recurring bookings
 * 
 * Only Standard Cleaning and Airbnb Cleaning support recurring bookings.
 * All other services (Deep Cleaning, Move In/Out, Carpet Cleaning) are One-Time only.
 */ /**
 * Check if a service supports recurring bookings
 * @param serviceName - The name of the service (case-insensitive)
 * @returns true if the service supports recurring bookings, false otherwise
 */ __turbopack_context__.s([
    "getAvailableFrequencies",
    ()=>getAvailableFrequencies,
    "isValidFrequencyForService",
    ()=>isValidFrequencyForService,
    "requiresTeamBooking",
    ()=>requiresTeamBooking,
    "supportsRecurringBookings",
    ()=>supportsRecurringBookings
]);
function supportsRecurringBookings(serviceName) {
    if (!serviceName) return false;
    const normalizedName = serviceName.toLowerCase().trim();
    // Standard Cleaning supports recurring
    if (normalizedName.includes('standard')) {
        return true;
    }
    // Airbnb Cleaning supports recurring
    if (normalizedName.includes('airbnb')) {
        return true;
    }
    // All other services are One-Time only
    return false;
}
function getAvailableFrequencies(serviceName) {
    if (supportsRecurringBookings(serviceName)) {
        return [
            'one-time',
            'weekly',
            'bi-weekly',
            'monthly'
        ];
    }
    // Non-supported services only allow One-Time
    return [
        'one-time'
    ];
}
function isValidFrequencyForService(serviceName, frequency) {
    const availableFrequencies = getAvailableFrequencies(serviceName);
    return availableFrequencies.includes(frequency);
}
function requiresTeamBooking(serviceName) {
    if (!serviceName) return false;
    const normalizedName = serviceName.toLowerCase().trim();
    // Deep Cleaning requires team booking
    if (normalizedName.includes('deep')) {
        return true;
    }
    // Move In/Out requires team booking
    // Check for "move" and ("in/out" or "in out" or "inout")
    if (normalizedName.includes('move')) {
        if (normalizedName.includes('in/out') || normalizedName.includes('in out') || normalizedName.includes('inout')) {
            return true;
        }
    }
    // All other services use individual cleaners
    return false;
}
}),
"[project]/src/lib/pricing/calculator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40160a02d3753dace5be96eaeb9f1f0bfe25148693":"calculatePrice","7f6ca93adbfe881952fa6ce55eadb044711f2317c4":"calculatePriceBreakdown"},"",""] */ __turbopack_context__.s([
    "calculatePrice",
    ()=>calculatePrice,
    "calculatePriceBreakdown",
    ()=>calculatePriceBreakdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing/rules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function calculatePrice(params) {
    const { serviceId, serviceName, bedrooms, bathrooms, additionalServiceIds, additionalServices = [], cleaningFrequency, discountAmount = 0, numberOfFittedRooms = '', numberOfLooseCarpets = '', isCarpetCleaning = false, cleaningEquipment = '', numberOfCleaners = 1 } = params;
    // Equipment supply charge constant
    const EQUIPMENT_SUPPLY_CHARGE = 500;
    // Additional cleaner charge constant (R250 per additional cleaner)
    const ADDITIONAL_CLEANER_CHARGE = 250;
    // Base price
    const basePrice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBasePrice"])(serviceId);
    // Bedroom price (only for non-carpet services)
    const bedroomsPrice = isCarpetCleaning ? 0 : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBedroomPrice"])(bedrooms);
    // Bathroom price (only for non-carpet services)
    const bathroomsPrice = isCarpetCleaning ? 0 : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBathroomPrice"])(bathrooms);
    // Carpet pricing (for carpet cleaning service)
    const fittedRoomPricePerUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFittedRoomPrice"])();
    const fittedRoomsPrice = fittedRoomPricePerUnit * (parseFloat(numberOfFittedRooms) || 0);
    const looseCarpetPricePerUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLooseCarpetPrice"])();
    const looseCarpetsPrice = looseCarpetPricePerUnit * (parseFloat(numberOfLooseCarpets) || 0);
    // Additional services price
    let additionalServicesPrice = 0;
    for (const serviceId of additionalServiceIds){
        const price = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdditionalServicePrice"])(serviceId);
        // Check if service requires quantity and has quantity specified
        const service = additionalServices.find((s)=>s.id === serviceId);
        if (service?.requires_quantity) {
            // For quantity-based services, multiply by quantity if available
            // This would need to be passed in the params if we track quantities
            additionalServicesPrice += price; // For now, single unit price
        } else {
            additionalServicesPrice += price;
        }
    }
    // Equipment supply charge - only for Standard and Airbnb services when user selects 'yes'
    let equipmentSupplyPrice = 0;
    if (cleaningEquipment === 'yes' && serviceName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName)) {
        equipmentSupplyPrice = EQUIPMENT_SUPPLY_CHARGE;
    }
    // Additional cleaners charge - only for Standard and Airbnb services
    // First cleaner is included in base price, charge for each additional cleaner
    let additionalCleanersPrice = 0;
    if (serviceName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName) && numberOfCleaners > 1) {
        const additionalCleanersCount = Math.max(0, Math.min(numberOfCleaners - 1, 4)); // Max 4 additional (total 5 cleaners)
        additionalCleanersPrice = additionalCleanersCount * ADDITIONAL_CLEANER_CHARGE;
    }
    // Subtotal before discounts
    const subtotal = basePrice + bedroomsPrice + bathroomsPrice + fittedRoomsPrice + looseCarpetsPrice + additionalServicesPrice + equipmentSupplyPrice + additionalCleanersPrice;
    // Frequency discount - only apply to Standard and Airbnb cleaning services
    let frequencyDiscountPercent = 0;
    let frequencyDiscountAmount = 0;
    // Only apply frequency discount if ALL conditions are met:
    // 1. Frequency is not one-time
    // 2. Service name is provided (not undefined, not empty)
    // 3. Service supports recurring bookings (Standard or Airbnb only)
    if (cleaningFrequency !== 'one-time' && serviceName && serviceName.trim() !== '') {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName)) {
            frequencyDiscountPercent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFrequencyDiscount"])(cleaningFrequency);
            frequencyDiscountAmount = subtotal * frequencyDiscountPercent / 100;
        }
    // Explicitly: If service doesn't support recurring, discount remains 0
    // This ensures Deep Cleaning, Move In/Out, and Carpet Cleaning NEVER get discounts
    }
    // Subtotal after frequency discount
    const subtotalAfterFrequencyDiscount = subtotal - frequencyDiscountAmount;
    // Apply discount code (passed in as discountAmount)
    const finalSubtotal = Math.max(0, subtotalAfterFrequencyDiscount - discountAmount);
    // Service fee (calculated on subtotal after frequency discount, before discount code)
    const serviceFeePercentage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceFeePercentage"])();
    const serviceFee = subtotalAfterFrequencyDiscount * serviceFeePercentage / 100;
    // Total amount (subtotal after all discounts + service fee)
    const totalAmount = finalSubtotal + serviceFee;
    return {
        basePrice,
        bedroomsPrice,
        bathroomsPrice,
        fittedRoomsPrice,
        looseCarpetsPrice,
        additionalServicesPrice,
        equipmentSupplyPrice,
        additionalCleanersPrice,
        subtotal,
        frequencyDiscountPercent,
        frequencyDiscountAmount,
        discountAmount,
        serviceFee,
        totalAmount
    };
}
async function calculatePriceBreakdown(serviceId, bedrooms, bathrooms, additionalServiceIds, cleaningFrequency, discountAmount = 0, numberOfFittedRooms = '', numberOfLooseCarpets = '', isCarpetCleaning = false, serviceName, cleaningEquipment, numberOfCleaners = 1) {
    return calculatePrice({
        serviceId,
        serviceName,
        bedrooms,
        bathrooms,
        additionalServiceIds,
        cleaningFrequency,
        discountAmount,
        numberOfFittedRooms,
        numberOfLooseCarpets,
        isCarpetCleaning,
        cleaningEquipment,
        numberOfCleaners
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    calculatePrice,
    calculatePriceBreakdown
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(calculatePrice, "40160a02d3753dace5be96eaeb9f1f0bfe25148693", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(calculatePriceBreakdown, "7f6ca93adbfe881952fa6ce55eadb044711f2317c4", null);
}),
"[project]/src/lib/utils/booking-number.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate a unique booking number
 * Format: SHL followed by numbers only (e.g., SHL20250115123456)
 */ __turbopack_context__.s([
    "generateBookingNumber",
    ()=>generateBookingNumber
]);
function generateBookingNumber() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    // Generate random 6-digit number (000000-999999)
    const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `SHL${year}${month}${day}${randomNumber}`;
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/paystack/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaystackPublicKey",
    ()=>getPaystackPublicKey,
    "initializePayment",
    ()=>initializePayment,
    "verifyPayment",
    ()=>verifyPayment,
    "verifyWebhookSignature",
    ()=>verifyWebhookSignature
]);
/**
 * Paystack API client
 */ const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_PUBLIC_KEY = ("TURBOPACK compile-time value", "pk_test_16df27480acd81aaf20b136ff5d9b53af08fd79e");
const PAYSTACK_API_URL = 'https://api.paystack.co';
async function initializePayment(email, amount, reference, metadata) {
    if (!PAYSTACK_SECRET_KEY) {
        throw new Error('Paystack secret key is not configured');
    }
    // Convert ZAR amount to kobo/cents (multiply by 100)
    const amountInKobo = Math.round(amount * 100);
    // Build callback URL for payment success page
    const appUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
    const callbackUrl = `${appUrl}/payment/success?reference=${reference}`;
    const response = await fetch(`${PAYSTACK_API_URL}/transaction/initialize`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            amount: amountInKobo,
            reference,
            metadata,
            currency: 'ZAR',
            callback_url: callbackUrl
        })
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to initialize payment');
    }
    return response.json();
}
async function verifyPayment(reference) {
    if (!PAYSTACK_SECRET_KEY) {
        throw new Error('Paystack secret key is not configured');
    }
    const response = await fetch(`${PAYSTACK_API_URL}/transaction/verify/${reference}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to verify payment');
    }
    return response.json();
}
function verifyWebhookSignature(payload, signature) {
    const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
    const secret = process.env.PAYSTACK_WEBHOOK_SECRET || PAYSTACK_SECRET_KEY || '';
    if (!secret) {
        return false;
    }
    const hash = crypto.createHmac('sha512', secret).update(payload).digest('hex');
    return hash === signature;
}
function getPaystackPublicKey() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return PAYSTACK_PUBLIC_KEY;
}
}),
"[project]/src/lib/utils/cleaner-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCompletionRate",
    ()=>calculateCompletionRate,
    "calculateOnTimeRate",
    ()=>calculateOnTimeRate,
    "calculateReliabilityScore",
    ()=>calculateReliabilityScore,
    "formatReliabilityScore",
    ()=>formatReliabilityScore,
    "sortCleanersByCriteria",
    ()=>sortCleanersByCriteria
]);
function calculateReliabilityScore(cleaner) {
    const totalBookings = cleaner.total_bookings || 0;
    const completedBookings = cleaner.completed_bookings || 0;
    const onTimeBookings = cleaner.on_time_bookings || 0;
    const rating = cleaner.rating || 0;
    // If no bookings, return default score of 50
    if (totalBookings === 0) {
        return 50.0;
    }
    // Calculate completion rate score (40% weight)
    const completionRateScore = completedBookings / totalBookings * 40.0;
    // Calculate on-time rate score (30% weight)
    const onTimeRateScore = onTimeBookings / totalBookings * 30.0;
    // Calculate rating score (20% weight)
    const ratingScore = rating / 5.0 * 20.0;
    // Calculate volume score (10% weight) - normalized to max 50 bookings
    const volumeScore = Math.min(totalBookings / 50.0, 1.0) * 10.0;
    // Calculate final score
    let finalScore = completionRateScore + onTimeRateScore + ratingScore + volumeScore;
    // Ensure score is between 0 and 100
    finalScore = Math.max(0.0, Math.min(100.0, finalScore));
    return Math.round(finalScore * 100) / 100; // Round to 2 decimal places
}
function formatReliabilityScore(score) {
    if (score === null || score === undefined) {
        return 'N/A';
    }
    return `${score.toFixed(0)}%`;
}
function sortCleanersByCriteria(cleaners, criteria) {
    const sorted = [
        ...cleaners
    ];
    switch(criteria){
        case 'best-match':
            // Sort by: reliability_score (60%) + rating (40%)
            sorted.sort((a, b)=>{
                const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
                const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
                return scoreB - scoreA;
            });
            break;
        case 'highest-rated':
            sorted.sort((a, b)=>(b.rating || 0) - (a.rating || 0));
            break;
        case 'most-reliable':
            sorted.sort((a, b)=>(b.reliability_score || 0) - (a.reliability_score || 0));
            break;
        case 'most-experienced':
            sorted.sort((a, b)=>(b.years_experience || 0) - (a.years_experience || 0));
            break;
        default:
            // Default to best-match
            sorted.sort((a, b)=>{
                const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
                const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
                return scoreB - scoreA;
            });
    }
    return sorted;
}
function calculateCompletionRate(cleaner) {
    const total = cleaner.total_bookings || 0;
    const completed = cleaner.completed_bookings || 0;
    if (total === 0) return 0;
    return Math.round(completed / total * 100);
}
function calculateOnTimeRate(cleaner) {
    const total = cleaner.total_bookings || 0;
    const onTime = cleaner.on_time_bookings || 0;
    if (total === 0) return 0;
    return Math.round(onTime / total * 100);
}
}),
"[project]/src/lib/utils/recurring-dates.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculate all booking dates for the current month based on frequency
 * @param startDate - The initial booking date selected by the user
 * @param frequency - 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
 * @returns Array of dates for bookings in the current month
 */ __turbopack_context__.s([
    "calculateBookingDatesForMonth",
    ()=>calculateBookingDatesForMonth,
    "calculateNextBookingDate",
    ()=>calculateNextBookingDate,
    "formatDateForDB",
    ()=>formatDateForDB
]);
function calculateBookingDatesForMonth(startDate, frequency) {
    const dates = [];
    const currentDate = new Date(startDate);
    // Get the month and year of the start date
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    // Get the last day of the month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    switch(frequency){
        case 'one-time':
            // Return only the start date
            dates.push(new Date(startDate));
            break;
        case 'weekly':
            // Find all occurrences of the same day of week in the month
            const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
            const startDay = currentDate.getDate();
            // Start from the selected date
            let weeklyDate = new Date(year, month, startDay);
            // Add all remaining occurrences in the month
            while(weeklyDate.getMonth() === month && weeklyDate.getDate() <= lastDayOfMonth){
                dates.push(new Date(weeklyDate));
                weeklyDate.setDate(weeklyDate.getDate() + 7); // Add 7 days
            }
            break;
        case 'bi-weekly':
            // Find occurrences every 2 weeks in the month
            const biWeeklyStartDay = currentDate.getDate();
            let biWeeklyDate = new Date(year, month, biWeeklyStartDay);
            // Add all occurrences in the month (every 2 weeks)
            while(biWeeklyDate.getMonth() === month && biWeeklyDate.getDate() <= lastDayOfMonth){
                dates.push(new Date(biWeeklyDate));
                biWeeklyDate.setDate(biWeeklyDate.getDate() + 14); // Add 14 days
            }
            break;
        case 'monthly':
            // Return only the start date (one booking per month)
            dates.push(new Date(startDate));
            break;
        default:
            dates.push(new Date(startDate));
    }
    return dates;
}
function calculateNextBookingDate(lastDate, frequency) {
    const nextDate = new Date(lastDate);
    switch(frequency){
        case 'one-time':
            // Should not be called for one-time, but return next month just in case
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case 'weekly':
            // Next booking is 1 week from last date, but we want first of next month
            // So calculate first occurrence of next month
            nextDate.setMonth(nextDate.getMonth() + 1);
            // Keep the same day of week - find first occurrence in next month
            const dayOfWeek = lastDate.getDay();
            const dayOfMonth = lastDate.getDate();
            // Start from the 1st of next month
            nextDate.setDate(1);
            // Find the first occurrence of the same day of week
            while(nextDate.getDay() !== dayOfWeek){
                nextDate.setDate(nextDate.getDate() + 1);
            }
            break;
        case 'bi-weekly':
            // Next booking is 2 weeks from last date, but we want first of next month
            // Calculate first occurrence in next month (same day of week)
            nextDate.setMonth(nextDate.getMonth() + 1);
            const biWeeklyDayOfWeek = lastDate.getDay();
            nextDate.setDate(1);
            // Find the first occurrence of the same day of week
            while(nextDate.getDay() !== biWeeklyDayOfWeek){
                nextDate.setDate(nextDate.getDate() + 1);
            }
            break;
        case 'monthly':
            // Next booking is same day next month
            nextDate.setMonth(nextDate.getMonth() + 1);
            // Handle edge case where day doesn't exist in next month (e.g., Jan 31 -> Feb 28/29)
            const originalDay = lastDate.getDate();
            const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
            nextDate.setDate(Math.min(originalDay, daysInNextMonth));
            break;
        default:
            nextDate.setMonth(nextDate.getMonth() + 1);
    }
    return nextDate;
}
function formatDateForDB(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
}),
"[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0034316469aa8c8ec2cb4e83eda347ee4382a5cc26":"getWorkingHoursFromOptions","00a1ca88359d58fd0af32ce951035da7370074eb17":"getWorkingHours","40076bfb9338cc2818be359d6f4842d7232f4e98b7":"calculateCleanerReliabilityScore","4010e6c8d10272f46c969c74cdea1116f8233a9738":"getAvailableCleanersWithCriteria","405ad80f2be77879cf1910cba26c89cc91597b527b":"initializePaymentForBooking","409c4af1f6a00b1435a4325bc8ebb4a81f732cf0f9":"getBooking","40a40651665af2f7ac8eb712a7212a90429dbba698":"createBookingDraft","40c15da46bc8ff218066c11f046171d400bc9340b9":"getAvailableCleaners","60128b95072b749847c870234662fd3d61de64e813":"checkTeamAvailabilityForDate","6030831853743ef6f07fbb1dc55d04873c2416bbc2":"isCleanerAvailableForDay","609833cce0ce4794dfef5417b3c8bab6d4dcfe264b":"validateDiscountCode","709fa2f3becdc0e0bf72104d4a43ec363e5a354d00":"checkCleanerAvailabilityForSlot","7855f31b6258bff55424266a8aebafe5fcf74b3f1b":"checkCleanerBookingConflict","78cc7191970ba404b03c57202cb05f8cd6b0267354":"checkAvailabilityForAllSlots"},"",""] */ __turbopack_context__.s([
    "calculateCleanerReliabilityScore",
    ()=>calculateCleanerReliabilityScore,
    "checkAvailabilityForAllSlots",
    ()=>checkAvailabilityForAllSlots,
    "checkCleanerAvailabilityForSlot",
    ()=>checkCleanerAvailabilityForSlot,
    "checkCleanerBookingConflict",
    ()=>checkCleanerBookingConflict,
    "checkTeamAvailabilityForDate",
    ()=>checkTeamAvailabilityForDate,
    "createBookingDraft",
    ()=>createBookingDraft,
    "getAvailableCleaners",
    ()=>getAvailableCleaners,
    "getAvailableCleanersWithCriteria",
    ()=>getAvailableCleanersWithCriteria,
    "getBooking",
    ()=>getBooking,
    "getWorkingHours",
    ()=>getWorkingHours,
    "getWorkingHoursFromOptions",
    ()=>getWorkingHoursFromOptions,
    "initializePaymentForBooking",
    ()=>initializePaymentForBooking,
    "isCleanerAvailableForDay",
    ()=>isCleanerAvailableForDay,
    "validateDiscountCode",
    ()=>validateDiscountCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing/calculator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$booking$2d$number$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/booking-number.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/paystack/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cleaner-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/recurring-dates.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function getWorkingHours() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('working_hours').select('*').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching working hours:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching working hours:', error);
        return [];
    }
}
async function getWorkingHoursFromOptions() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('home_detail_options').select('value, label').eq('option_type', 'working_hours').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching working hours from options:', error);
            return [];
        }
        return (data || []).map((item)=>({
                value: item.value,
                label: item.label
            }));
    } catch (error) {
        console.error('Unexpected error fetching working hours from options:', error);
        return [];
    }
}
async function checkCleanerAvailabilityForSlot(serviceDate, serviceTime, serviceDuration) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // First, check if any active cleaners exist in the system
        const { data: activeCleaners, error: cleanersError } = await supabase.from('cleaners').select('id').eq('is_active', true);
        if (cleanersError) {
            console.error('Error checking active cleaners:', cleanersError);
            // If we can't check cleaners, assume unavailable for safety
            return {
                available: false,
                availableCleanersCount: 0
            };
        }
        // If no active cleaners exist, no slots are available
        if (!activeCleaners || activeCleaners.length === 0) {
            return {
                available: false,
                availableCleanersCount: 0
            };
        }
        const totalCleaners = activeCleaners.length;
        // Query bookings for the specified date that might overlap
        // We need to check for bookings where:
        // (booking_start_time < new_end_time) AND (booking_end_time > new_start_time)
        // Only consider paid and confirmed bookings (exclude pending/unpaid, cancelled/completed)
        // Cleaners should only be marked as booked when booking is paid and created
        const { data: bookings, error: bookingsError } = await supabase.from('bookings').select('service_time, service_duration, preferred_cleaner_id, preferred_cleaner_ids, number_of_cleaners').eq('service_date', serviceDate).eq('payment_status', 'paid').eq('status', 'confirmed');
        if (bookingsError) {
            console.error('Error checking bookings:', bookingsError);
            // If we can't check bookings, assume available (optimistic approach)
            return {
                available: true,
                availableCleanersCount: totalCleaners
            };
        }
        if (!bookings || bookings.length === 0) {
            // No bookings for this date, all cleaners are available
            return {
                available: true,
                availableCleanersCount: totalCleaners
            };
        }
        // Parse the new booking start time
        const [newStartHours, newStartMinutes] = serviceTime.split(':').map(Number);
        const newStartTimeMinutes = newStartHours * 60 + newStartMinutes;
        const serviceDurationMinutes = Math.round(serviceDuration * 60);
        const newEndTimeMinutes = newStartTimeMinutes + serviceDurationMinutes;
        // Track which cleaners are booked (by ID)
        const bookedCleanerIds = new Set();
        // Check each existing booking for overlap
        for (const booking of bookings){
            if (!booking.service_time) continue;
            // Parse booking start time
            const [bookingStartHours, bookingStartMinutes] = booking.service_time.split(':').slice(0, 2).map(Number);
            const bookingStartTimeMinutes = bookingStartHours * 60 + bookingStartMinutes;
            // Parse booking duration
            const bookingDurationMinutes = Math.round((typeof booking.service_duration === 'number' ? booking.service_duration : parseFloat(booking.service_duration || '0')) * 60);
            const bookingEndTimeMinutes = bookingStartTimeMinutes + bookingDurationMinutes;
            // Check for overlap: new start < existing end AND new end > existing start
            if (newStartTimeMinutes < bookingEndTimeMinutes && newEndTimeMinutes > bookingStartTimeMinutes) {
                // There's an overlap
                // Check preferred_cleaner_ids first (new multi-cleaner support)
                if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
                    // Multiple cleaners are assigned
                    booking.preferred_cleaner_ids.forEach((cleanerId)=>{
                        if (cleanerId) bookedCleanerIds.add(cleanerId);
                    });
                } else if (booking.preferred_cleaner_id) {
                    // Single cleaner assigned (backward compatibility)
                    bookedCleanerIds.add(booking.preferred_cleaner_id);
                } else {
                    // If no preferred cleaner, use number_of_cleaners to count generic cleaner slots
                    // This handles bookings without specific cleaner assignments
                    const numCleaners = booking.number_of_cleaners || 1;
                // We don't add specific IDs here, but count them in bookingsWithoutPreferredCleaner
                }
            }
        }
        // Calculate available cleaners
        // Count bookings without preferred cleaners (generic assignments)
        // These use number_of_cleaners to determine how many cleaner slots are taken
        const bookingsWithoutPreferredCleaner = bookings.filter((b)=>{
            const hasPreferredCleaners = b.preferred_cleaner_ids && Array.isArray(b.preferred_cleaner_ids) && b.preferred_cleaner_ids.length > 0 || b.preferred_cleaner_id;
            if (hasPreferredCleaners) return false;
            // Check for time overlap
            const [hours, mins] = b.service_time.split(':').slice(0, 2).map(Number);
            const start = hours * 60 + mins;
            const duration = Math.round((typeof b.service_duration === 'number' ? b.service_duration : parseFloat(b.service_duration || '0')) * 60);
            const end = start + duration;
            return newStartTimeMinutes < end && newEndTimeMinutes > start;
        }).reduce((sum, b)=>{
            // Sum up the number_of_cleaners for bookings without preferred cleaners
            return sum + (b.number_of_cleaners || 1);
        }, 0);
        const unavailableCleaners = bookedCleanerIds.size + bookingsWithoutPreferredCleaner;
        const availableCleanersCount = Math.max(0, totalCleaners - unavailableCleaners);
        return {
            available: availableCleanersCount > 0,
            availableCleanersCount
        };
    } catch (error) {
        console.error('Unexpected error checking cleaner availability:', error);
        // On error, assume unavailable for safety
        return {
            available: false,
            availableCleanersCount: 0
        };
    }
}
async function checkTeamAvailabilityForDate(serviceDate, serviceType) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Only check for team-based services (Deep Cleaning and Move In/Out)
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requiresTeamBooking"])(serviceType)) {
            return {
                availableTeams: [],
                bookedTeams: [],
                allTeamsBooked: false
            };
        }
        // Query bookings for the specified date and service type
        // Only consider paid and confirmed bookings (exclude pending/unpaid bookings)
        // Teams should only be marked as booked when booking is paid and created
        const { data: bookings, error: bookingsError } = await supabase.from('bookings').select('team_number').eq('service_date', serviceDate).eq('service_type', serviceType).not('team_number', 'is', null).eq('payment_status', 'paid').eq('status', 'confirmed');
        if (bookingsError) {
            console.error('Error checking team bookings:', bookingsError);
            // If we can't check bookings, assume all teams available (optimistic approach)
            return {
                availableTeams: [
                    1,
                    2,
                    3
                ],
                bookedTeams: [],
                allTeamsBooked: false
            };
        }
        // Extract booked team numbers
        const bookedTeams = (bookings || []).map((booking)=>booking.team_number).filter((teamNumber)=>teamNumber !== null && teamNumber >= 1 && teamNumber <= 3);
        // Get unique booked teams (in case of duplicates)
        const bookedTeamsSet = new Set(bookedTeams);
        // Calculate available teams (1, 2, 3 minus booked teams)
        const allTeams = [
            1,
            2,
            3
        ];
        const availableTeams = allTeams.filter((team)=>!bookedTeamsSet.has(team));
        return {
            availableTeams,
            bookedTeams: Array.from(bookedTeamsSet),
            allTeamsBooked: availableTeams.length === 0
        };
    } catch (error) {
        console.error('Unexpected error checking team availability:', error);
        // On error, assume all teams available for safety (let database constraint catch duplicates)
        return {
            availableTeams: [
                1,
                2,
                3
            ],
            bookedTeams: [],
            allTeamsBooked: false
        };
    }
}
async function checkAvailabilityForAllSlots(serviceDate, workingHours, serviceDuration, serviceType) {
    const availability = {};
    // If service requires team booking, check team availability instead
    if (serviceType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requiresTeamBooking"])(serviceType)) {
        const teamAvailability = await checkTeamAvailabilityForDate(serviceDate, serviceType);
        // For team-based services, availability is day-based, not time-based
        // If all teams are booked, all slots are unavailable
        // Otherwise, slots are available (but we'll show team selection in UI)
        const slotsAvailable = !teamAvailability.allTeamsBooked;
        const availableTeamsCount = teamAvailability.availableTeams.length;
        // Set same availability for all time slots
        workingHours.forEach((hour)=>{
            availability[hour.start_time] = {
                available: slotsAvailable,
                availableCleanersCount: availableTeamsCount
            };
        });
        return availability;
    }
    // For regular services, check individual cleaner availability per time slot
    const promises = workingHours.map(async (hour)=>{
        const slotAvailability = await checkCleanerAvailabilityForSlot(serviceDate, hour.start_time, serviceDuration);
        return {
            time: hour.start_time,
            availability: slotAvailability
        };
    });
    const results = await Promise.all(promises);
    results.forEach(({ time, availability: avail })=>{
        availability[time] = avail;
    });
    return availability;
}
async function validateDiscountCode(code, subtotal) {
    try {
        if (!code || !code.trim()) {
            return {
                valid: false,
                discountAmount: 0,
                error: 'Discount code is required'
            };
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('discount_codes').select('*').eq('code', code.trim().toUpperCase()).eq('is_active', true).single();
        if (error || !data) {
            return {
                valid: false,
                discountAmount: 0,
                error: 'Invalid discount code'
            };
        }
        // Check validity dates
        const now = new Date();
        const validFrom = new Date(data.valid_from);
        const validUntil = new Date(data.valid_until);
        if (now < validFrom || now > validUntil) {
            return {
                valid: false,
                discountAmount: 0,
                error: 'Discount code has expired'
            };
        }
        // Check max uses
        if (data.max_uses && data.used_count >= data.max_uses) {
            return {
                valid: false,
                discountAmount: 0,
                error: 'Discount code has reached maximum uses'
            };
        }
        // Check min purchase amount
        if (data.min_purchase_amount && subtotal < data.min_purchase_amount) {
            return {
                valid: false,
                discountAmount: 0,
                error: `Minimum purchase amount of R${data.min_purchase_amount} required`
            };
        }
        // Calculate discount amount
        let discountAmount = 0;
        if (data.discount_type === 'percentage') {
            discountAmount = subtotal * data.discount_value / 100;
            if (data.max_discount_amount && discountAmount > data.max_discount_amount) {
                discountAmount = data.max_discount_amount;
            }
        } else {
            discountAmount = data.discount_value;
        }
        // Ensure discount doesn't exceed subtotal
        discountAmount = Math.min(discountAmount, subtotal);
        return {
            valid: true,
            discountAmount
        };
    } catch (error) {
        console.error('Error validating discount code:', error);
        return {
            valid: false,
            discountAmount: 0,
            error: 'Error validating discount code'
        };
    }
}
async function createBookingDraft(formData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Get current user if logged in
        const { data: { user } } = await supabase.auth.getUser();
        const userId = user?.id || null;
        // Get service name
        const { data: service } = await supabase.from('services').select('name').eq('id', formData.serviceId).single();
        if (!service) {
            return {
                success: false,
                error: 'Service not found'
            };
        }
        // Validate that the selected frequency is valid for this service
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidFrequencyForService"])(service.name, formData.cleaningFrequency)) {
            return {
                success: false,
                error: `Recurring bookings are only available for Standard Cleaning and Airbnb Cleaning services. Selected service: ${service.name}`
            };
        }
        // Check if service requires team booking
        const isTeamBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requiresTeamBooking"])(service.name);
        // Validate team booking requirements
        if (isTeamBooking) {
            if (!formData.teamNumber || formData.teamNumber < 1 || formData.teamNumber > 3) {
                return {
                    success: false,
                    error: 'Please select a team (1, 2, or 3) for this service'
                };
            }
            // Check team availability for each booking date
            const startDate = new Date(formData.serviceDate);
            const bookingDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingDatesForMonth"])(startDate, formData.cleaningFrequency);
            for (const bookingDate of bookingDates){
                const teamAvailability = await checkTeamAvailabilityForDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateForDB"])(bookingDate), service.name);
                if (!teamAvailability.availableTeams.includes(formData.teamNumber)) {
                    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateForDB"])(bookingDate);
                    return {
                        success: false,
                        error: `Team ${formData.teamNumber} is already booked for ${dateStr}. Please select a different team or date.`
                    };
                }
            }
        } else {
            // For non-team bookings, ensure teamNumber is not set
            if (formData.teamNumber !== null && formData.teamNumber !== undefined) {
                return {
                    success: false,
                    error: 'Team selection is only available for Deep Cleaning and Move In/Out services'
                };
            }
        }
        // Calculate pricing
        const priceBreakdown = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculatePrice"])({
            serviceId: formData.serviceId,
            serviceName: service.name,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            additionalServiceIds: formData.additionalServices,
            cleaningFrequency: formData.cleaningFrequency,
            discountAmount: 0,
            cleaningEquipment: formData.cleaningEquipment,
            numberOfCleaners: formData.numberOfCleaners || 1
        });
        // Apply discount code if provided
        let discountAmount = 0;
        if (formData.discountCode) {
            const discountValidation = await validateDiscountCode(formData.discountCode, priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount);
            if (discountValidation.valid) {
                discountAmount = discountValidation.discountAmount;
            }
        }
        // Recalculate with discount
        const finalPriceBreakdown = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculatePrice"])({
            serviceId: formData.serviceId,
            serviceName: service.name,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            additionalServiceIds: formData.additionalServices,
            cleaningFrequency: formData.cleaningFrequency,
            discountAmount,
            cleaningEquipment: formData.cleaningEquipment,
            numberOfCleaners: formData.numberOfCleaners || 1
        });
        // Determine if this is a recurring booking
        // Note: Team-based services (Deep Cleaning and Move In/Out) don't support recurring bookings
        // but we'll handle it gracefully if somehow a recurring frequency is selected
        const isRecurring = formData.cleaningFrequency !== 'one-time';
        // Calculate booking dates based on frequency
        const startDate = new Date(formData.serviceDate);
        const bookingDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateBookingDatesForMonth"])(startDate, formData.cleaningFrequency);
        // Calculate next booking date for recurring bookings
        let nextBookingDate = null;
        if (isRecurring && bookingDates.length > 0) {
            const lastDate = bookingDates[bookingDates.length - 1];
            nextBookingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateNextBookingDate"])(lastDate, formData.cleaningFrequency);
        }
        // Create bookings for all dates
        const bookingsToCreate = [];
        for(let i = 0; i < bookingDates.length; i++){
            const bookingDate = bookingDates[i];
            const bookingNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$booking$2d$number$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBookingNumber"])();
            // Tip is only applied to the first booking in a recurring series (one-time payment)
            const tipAmount = i === 0 ? formData.tipAmount || 0 : 0;
            const bookingInput = {
                booking_number: bookingNumber,
                customer_first_name: formData.customerFirstName,
                customer_last_name: formData.customerLastName,
                customer_email: formData.customerEmail,
                customer_phone: formData.customerPhone,
                service_id: formData.serviceId,
                service_type: service.name,
                bedrooms: formData.bedrooms,
                bathrooms: formData.bathrooms,
                additional_services: formData.additionalServices,
                cleaning_equipment: formData.cleaningEquipment,
                preferred_cleaner_ids: isTeamBooking ? null // Team bookings don't have preferred cleaners
                 : formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0 ? formData.preferredCleanerIds : null,
                preferred_cleaner_id: isTeamBooking ? null // Team bookings don't have preferred cleaners
                 : formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0 ? formData.preferredCleanerIds[0] : null,
                team_number: isTeamBooking && formData.teamNumber ? formData.teamNumber : null,
                cleaning_frequency: formData.cleaningFrequency,
                service_date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateForDB"])(bookingDate),
                service_time: formData.serviceTime,
                service_duration: formData.serviceDuration,
                service_address: formData.serviceAddress,
                service_apt_unit: formData.serviceAptUnit || null,
                service_suburb: formData.serviceSuburb,
                service_city: formData.serviceCity,
                special_instructions: formData.specialInstructions || null,
                tip_amount: tipAmount,
                base_price: finalPriceBreakdown.basePrice,
                additional_services_price: finalPriceBreakdown.additionalServicesPrice,
                equipment_supply_price: finalPriceBreakdown.equipmentSupplyPrice,
                number_of_cleaners: formData.numberOfCleaners || 1,
                additional_cleaners_price: finalPriceBreakdown.additionalCleanersPrice,
                frequency_discount_percent: finalPriceBreakdown.frequencyDiscountPercent,
                frequency_discount_amount: finalPriceBreakdown.frequencyDiscountAmount,
                subtotal: finalPriceBreakdown.subtotal,
                service_fee: finalPriceBreakdown.serviceFee,
                total_amount: finalPriceBreakdown.totalAmount + tipAmount,
                discount_code: formData.discountCode || null,
                discount_amount: discountAmount,
                referral_code: formData.referralCode || null,
                amount_paid: 0,
                payment_status: 'pending',
                status: 'pending',
                user_id: userId,
                parent_booking_id: null,
                is_recurring: isRecurring,
                recurrence_status: isRecurring ? 'active' : undefined,
                next_booking_date: i === 0 && isRecurring && nextBookingDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateForDB"])(nextBookingDate) : null,
                credits_used: 0
            };
            bookingsToCreate.push(bookingInput);
        }
        // Insert all bookings
        const { data: insertedBookings, error } = await supabase.from('bookings').insert(bookingsToCreate).select('id, total_amount');
        if (error) {
            console.error('Error creating booking drafts:', error);
            return {
                success: false,
                error: error.message
            };
        }
        if (!insertedBookings || insertedBookings.length === 0) {
            return {
                success: false,
                error: 'Failed to create bookings'
            };
        }
        // Update parent_booking_id for subsequent bookings if there are multiple
        if (insertedBookings.length > 1 && isRecurring) {
            const firstBookingId = insertedBookings[0].id;
            const subsequentBookingIds = insertedBookings.slice(1).map((b)=>b.id);
            // Update all subsequent bookings to reference the first one
            const { error: updateError } = await supabase.from('bookings').update({
                parent_booking_id: firstBookingId
            }).in('id', subsequentBookingIds);
            if (updateError) {
                console.error('Error updating parent_booking_id:', updateError);
            // Don't fail, but log the error
            }
        }
        // Calculate total amount
        const totalAmount = insertedBookings.reduce((sum, booking)=>sum + Number(booking.total_amount), 0);
        const bookingIds = insertedBookings.map((booking)=>booking.id);
        // For backward compatibility, also return single bookingId
        const bookingId = bookingIds[0];
        // If multiple bookings, return array; otherwise return single ID for backward compatibility
        if (bookingIds.length > 1) {
            return {
                success: true,
                bookingIds,
                totalAmount,
                bookingId
            };
        }
        return {
            success: true,
            bookingId,
            bookingIds,
            totalAmount
        };
    } catch (error) {
        console.error('Unexpected error creating booking draft:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function initializePaymentForBooking(bookingIdOrIds) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const bookingIds = Array.isArray(bookingIdOrIds) ? bookingIdOrIds : [
            bookingIdOrIds
        ];
        // Get all booking details
        const { data: bookings, error: fetchError } = await supabase.from('bookings').select('*').in('id', bookingIds);
        if (fetchError || !bookings || bookings.length === 0) {
            return {
                success: false,
                error: 'Booking(s) not found'
            };
        }
        // Check if all bookings are in pending status
        const nonPendingBookings = bookings.filter((b)=>b.payment_status !== 'pending');
        if (nonPendingBookings.length > 0) {
            return {
                success: false,
                error: 'Some bookings are not in pending payment status'
            };
        }
        // Calculate total amount from all bookings (including tip)
        // Note: total_amount in database now includes tip for new bookings
        // For backward compatibility with existing bookings that might not have tip in total_amount, 
        // we check and add tip_amount if it's missing
        const totalAmount = bookings.reduce((sum, booking)=>{
            const bookingTotal = Number(booking.total_amount) || 0;
            const tipAmount = Number(booking.tip_amount) || 0;
            const baseTotal = Number(booking.subtotal || 0) + Number(booking.service_fee || 0);
            // Check if tip is already included in total_amount
            // If total_amount equals baseTotal exactly, then tip is not included, so add it
            // Otherwise, total_amount already includes tip
            if (tipAmount > 0 && Math.abs(bookingTotal - baseTotal) < 0.01) {
                // Tip is not included in total_amount (backward compatibility case)
                return sum + bookingTotal + tipAmount;
            }
            // Tip is already included in total_amount (new bookings)
            return sum + bookingTotal;
        }, 0);
        // Calculate total credits used across all bookings
        const totalCreditsUsed = bookings.reduce((sum, booking)=>{
            return sum + (Number(booking.credits_used) || 0);
        }, 0);
        // Calculate remaining amount after credits
        const remainingAmount = totalAmount - totalCreditsUsed;
        // Use the first booking's email and details for payment
        const firstBooking = bookings[0];
        // If credits fully cover the booking, mark as paid and skip Paystack
        if (remainingAmount <= 0) {
            // Update all bookings to mark as paid
            const { error: updateError } = await supabase.from('bookings').update({
                payment_status: 'paid',
                amount_paid: totalAmount,
                status: 'confirmed',
                updated_at: new Date().toISOString()
            }).in('id', bookingIds);
            if (updateError) {
                console.error('Error updating bookings payment status:', updateError);
                return {
                    success: false,
                    error: 'Failed to update booking payment status'
                };
            }
            return {
                success: true
            };
        }
        // Partial credit coverage or no credits - proceed with Paystack for remaining amount
        const reference = firstBooking.paystack_reference || `${firstBooking.booking_number}${Date.now()}`;
        // Initialize Paystack payment with remaining amount (after credits)
        const paymentResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializePayment"])(firstBooking.customer_email, remainingAmount, reference, {
            booking_ids: bookingIds,
            booking_id: firstBooking.id,
            booking_number: firstBooking.booking_number,
            customer_email: firstBooking.customer_email,
            credits_used: totalCreditsUsed
        });
        if (!paymentResponse.status) {
            return {
                success: false,
                error: paymentResponse.message || 'Failed to initialize payment'
            };
        }
        // Use the reference that Paystack actually returned (may differ from what we sent)
        const paystackReference = paymentResponse.data.reference;
        // Update all bookings with the Paystack reference and partial payment from credits
        const { error: updateError } = await supabase.from('bookings').update({
            paystack_reference: paystackReference,
            amount_paid: totalCreditsUsed,
            updated_at: new Date().toISOString()
        }).in('id', bookingIds);
        if (updateError) {
            console.error('Error updating bookings with Paystack reference:', updateError);
        }
        return {
            success: true,
            authorizationUrl: paymentResponse.data.authorization_url,
            reference: paystackReference
        };
    } catch (error) {
        console.error('Error initializing payment:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to initialize payment'
        };
    }
}
async function getBooking(bookingId) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('bookings').select('*').eq('id', bookingId).single();
        if (error) {
            console.error('Error fetching booking:', error);
            return {
                success: false,
                error: 'Booking not found'
            };
        }
        return {
            success: true,
            booking: data
        };
    } catch (error) {
        console.error('Unexpected error fetching booking:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function getAvailableCleaners(serviceSuburb) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Build query - only filter by is_available if the column exists
        // First, try to get all active cleaners
        let query = supabase.from('cleaners').select('*').eq('is_active', true);
        const { data, error } = await query.order('rating', {
            ascending: false
        }).order('name', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching cleaners:', error);
            return {
                success: false,
                error: 'Failed to fetch cleaners'
            };
        }
        let cleaners = data || [];
        // Filter by is_available if the column exists (client-side filter as fallback)
        cleaners = cleaners.filter((cleaner)=>{
            // If is_available column doesn't exist or is null/undefined, include the cleaner
            // Otherwise, only include if is_available is true
            return cleaner.is_available !== false;
        });
        // Filter by area if suburb is provided
        // Since PostgreSQL array contains is complex in Supabase, we filter client-side
        if (serviceSuburb && cleaners.length > 0) {
            const suburbLower = serviceSuburb.toLowerCase().trim();
            cleaners = cleaners.filter((cleaner)=>{
                // If cleaner has no areas specified, include them (they serve all areas)
                if (!cleaner.areas || cleaner.areas.length === 0) {
                    return true;
                }
                // Check if any area matches the suburb (case-insensitive partial match)
                return cleaner.areas.some((area)=>{
                    const areaLower = area.toLowerCase();
                    return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
                });
            });
        }
        return {
            success: true,
            cleaners
        };
    } catch (error) {
        console.error('Unexpected error fetching cleaners:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function isCleanerAvailableForDay(cleaner, dayOfWeek) {
    const dayMap = {
        0: 'available_sunday',
        1: 'available_monday',
        2: 'available_tuesday',
        3: 'available_wednesday',
        4: 'available_thursday',
        5: 'available_friday',
        6: 'available_saturday'
    };
    const dayField = dayMap[dayOfWeek];
    return cleaner[dayField] !== false && cleaner.is_available !== false;
}
async function checkCleanerBookingConflict(cleanerId, serviceDate, serviceTime, serviceDuration) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Query bookings for this cleaner on the specified date
        // Only consider paid and confirmed bookings (exclude pending/unpaid bookings)
        // Cleaners should only be marked as booked when booking is paid and created
        const { data: bookings, error } = await supabase.from('bookings').select('service_time, service_duration').eq('preferred_cleaner_id', cleanerId).eq('service_date', serviceDate).eq('payment_status', 'paid').eq('status', 'confirmed');
        if (error) {
            console.error('Error checking booking conflicts:', error);
            return false; // Assume no conflict on error
        }
        if (!bookings || bookings.length === 0) {
            return false; // No bookings, no conflict
        }
        // Parse the new booking start time
        const [newStartHours, newStartMinutes] = serviceTime.split(':').map(Number);
        const newStartTimeMinutes = newStartHours * 60 + newStartMinutes;
        const serviceDurationMinutes = Math.round(serviceDuration * 60);
        const newEndTimeMinutes = newStartTimeMinutes + serviceDurationMinutes;
        // Check each existing booking for overlap
        for (const booking of bookings){
            if (!booking.service_time) continue;
            // Parse booking start time
            const [bookingStartHours, bookingStartMinutes] = booking.service_time.split(':').slice(0, 2).map(Number);
            const bookingStartTimeMinutes = bookingStartHours * 60 + bookingStartMinutes;
            // Parse booking duration
            const bookingDurationMinutes = Math.round((typeof booking.service_duration === 'number' ? booking.service_duration : parseFloat(booking.service_duration || '0')) * 60);
            const bookingEndTimeMinutes = bookingStartTimeMinutes + bookingDurationMinutes;
            // Check for overlap: new start < existing end AND new end > existing start
            if (newStartTimeMinutes < bookingEndTimeMinutes && newEndTimeMinutes > bookingStartTimeMinutes) {
                return true; // Conflict found
            }
        }
        return false; // No conflicts
    } catch (error) {
        console.error('Unexpected error checking booking conflict:', error);
        return false;
    }
}
async function calculateCleanerReliabilityScore(cleanerId) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Try to call the database function
        const { data, error } = await supabase.rpc('calculate_cleaner_reliability_score', {
            cleaner_id: cleanerId
        });
        if (!error && data !== null) {
            return parseFloat(data.toString());
        }
        // Fallback: fetch cleaner and calculate client-side
        const { data: cleaner, error: fetchError } = await supabase.from('cleaners').select('*').eq('id', cleanerId).single();
        if (fetchError || !cleaner) {
            return 50.0; // Default score
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateReliabilityScore"])(cleaner);
    } catch (error) {
        console.error('Error calculating reliability score:', error);
        return 50.0; // Default score on error
    }
}
async function getAvailableCleanersWithCriteria(params) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { serviceSuburb, serviceDate, serviceTime, serviceDuration = 3, minRating = 0, minReliabilityScore = 0 } = params;
        // Build base query
        let query = supabase.from('cleaners').select('*').eq('is_active', true);
        const { data, error } = await query.order('reliability_score', {
            ascending: false,
            nullsFirst: false
        }).order('rating', {
            ascending: false
        }).order('name', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching cleaners:', error);
            return {
                success: false,
                error: 'Failed to fetch cleaners'
            };
        }
        let cleaners = data || [];
        // Filter by is_available
        cleaners = cleaners.filter((cleaner)=>cleaner.is_available !== false);
        // Filter by location (suburb)
        if (serviceSuburb && cleaners.length > 0) {
            const suburbLower = serviceSuburb.toLowerCase().trim();
            cleaners = cleaners.filter((cleaner)=>{
                if (!cleaner.areas || cleaner.areas.length === 0) {
                    return true; // Serve all areas
                }
                return cleaner.areas.some((area)=>{
                    const areaLower = area.toLowerCase();
                    return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
                });
            });
        }
        // Filter by day of week availability if date is provided
        if (serviceDate) {
            const date = new Date(serviceDate);
            const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
            cleaners = cleaners.filter((cleaner)=>{
                const dayMap = {
                    0: 'available_sunday',
                    1: 'available_monday',
                    2: 'available_tuesday',
                    3: 'available_wednesday',
                    4: 'available_thursday',
                    5: 'available_friday',
                    6: 'available_saturday'
                };
                const dayField = dayMap[dayOfWeek];
                return cleaner[dayField] !== false;
            });
        }
        // Filter by minimum rating
        if (minRating > 0) {
            cleaners = cleaners.filter((cleaner)=>(cleaner.rating || 0) >= minRating);
        }
        // Filter by minimum reliability score
        if (minReliabilityScore > 0) {
            cleaners = cleaners.filter((cleaner)=>(cleaner.reliability_score || 0) >= minReliabilityScore);
        }
        // Enrich cleaners with availability and booking conflict information
        const enrichedCleaners = await Promise.all(cleaners.map(async (cleaner)=>{
            let isAvailableForSlot = true;
            let bookingConflict = false;
            // Check booking conflict if date and time are provided
            if (serviceDate && serviceTime && serviceDuration) {
                bookingConflict = await checkCleanerBookingConflict(cleaner.id, serviceDate, serviceTime, serviceDuration);
                isAvailableForSlot = !bookingConflict;
            }
            // Calculate reliability score if not present
            const reliabilityScore = cleaner.reliability_score ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateReliabilityScore"])(cleaner);
            return {
                ...cleaner,
                reliability_score: reliabilityScore,
                isAvailableForSlot,
                bookingConflict,
                completionRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateCompletionRate"])(cleaner),
                onTimeRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateOnTimeRate"])(cleaner)
            };
        }));
        // Sort by reliability score and rating (already sorted by query, but ensure consistency)
        enrichedCleaners.sort((a, b)=>{
            const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
            const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
            return scoreB - scoreA;
        });
        return {
            success: true,
            cleaners: enrichedCleaners
        };
    } catch (error) {
        console.error('Unexpected error fetching cleaners with criteria:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getWorkingHours,
    getWorkingHoursFromOptions,
    checkCleanerAvailabilityForSlot,
    checkTeamAvailabilityForDate,
    checkAvailabilityForAllSlots,
    validateDiscountCode,
    createBookingDraft,
    initializePaymentForBooking,
    getBooking,
    getAvailableCleaners,
    isCleanerAvailableForDay,
    checkCleanerBookingConflict,
    calculateCleanerReliabilityScore,
    getAvailableCleanersWithCriteria
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWorkingHours, "00a1ca88359d58fd0af32ce951035da7370074eb17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWorkingHoursFromOptions, "0034316469aa8c8ec2cb4e83eda347ee4382a5cc26", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkCleanerAvailabilityForSlot, "709fa2f3becdc0e0bf72104d4a43ec363e5a354d00", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkTeamAvailabilityForDate, "60128b95072b749847c870234662fd3d61de64e813", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkAvailabilityForAllSlots, "78cc7191970ba404b03c57202cb05f8cd6b0267354", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateDiscountCode, "609833cce0ce4794dfef5417b3c8bab6d4dcfe264b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBookingDraft, "40a40651665af2f7ac8eb712a7212a90429dbba698", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initializePaymentForBooking, "405ad80f2be77879cf1910cba26c89cc91597b527b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBooking, "409c4af1f6a00b1435a4325bc8ebb4a81f732cf0f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableCleaners, "40c15da46bc8ff218066c11f046171d400bc9340b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(isCleanerAvailableForDay, "6030831853743ef6f07fbb1dc55d04873c2416bbc2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkCleanerBookingConflict, "7855f31b6258bff55424266a8aebafe5fcf74b3f1b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(calculateCleanerReliabilityScore, "40076bfb9338cc2818be359d6f4842d7232f4e98b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableCleanersWithCriteria, "4010e6c8d10272f46c969c74cdea1116f8233a9738", null);
}),
"[project]/.next-internal/server/app/booking/submit/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/booking/submit/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00fc6971a6ccb01a8598c6ab12d37e043db8936f77",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "405ad80f2be77879cf1910cba26c89cc91597b527b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializePaymentForBooking"],
    "406015e2758827c594502325e52d94d06f4df9298f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdditionalServices"],
    "40a40651665af2f7ac8eb712a7212a90429dbba698",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBookingDraft"],
    "609833cce0ce4794dfef5417b3c8bab6d4dcfe264b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateDiscountCode"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$booking$2f$submit$2f5b$serviceSlug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/booking/submit/[serviceSlug]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/quote/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__424730e0._.js.map