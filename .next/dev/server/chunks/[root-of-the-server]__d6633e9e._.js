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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/paystack/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw"), {
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
"[project]/app/api/credit/retry/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/paystack/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Get authenticated user
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const userEmail = user.email;
        if (!userEmail) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User email not found'
            }, {
                status: 400
            });
        }
        const body = await request.json();
        const { reference } = body;
        // Use authenticated user's email, ignore email from request body for security
        const email = userEmail;
        let creditTransactions = [];
        if (reference) {
            // Find credit transactions matching the reference for the authenticated user
            const query = supabase.from('credit_transactions').select('id, email, amount, payment_status, paystack_reference, profile_id').eq('paystack_reference', reference).eq('email', email).in('payment_status', [
                'pending',
                'failed'
            ]);
            const { data: transactionsByReference } = await query;
            if (transactionsByReference && transactionsByReference.length > 0) {
                creditTransactions = transactionsByReference;
            }
        }
        // If no transactions found by reference, search by email for authenticated user
        if (creditTransactions.length === 0) {
            const { data: transactionsByEmail } = await supabase.from('credit_transactions').select('id, email, amount, payment_status, paystack_reference, profile_id').eq('email', email).eq('transaction_type', 'purchase').in('payment_status', [
                'pending',
                'failed'
            ]).order('created_at', {
                ascending: false
            }).limit(10); // Limit to 10 most recent pending transactions
            if (transactionsByEmail && transactionsByEmail.length > 0) {
                creditTransactions = transactionsByEmail;
            }
        }
        if (creditTransactions.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'No pending credit transactions found',
                message: reference ? 'No pending credit transaction found with this reference' : 'No pending credit purchases found for this email'
            }, {
                status: 404
            });
        }
        const results = [];
        for (const creditTransaction of creditTransactions){
            // Verify the payment with Paystack
            const verification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPayment"])(creditTransaction.paystack_reference);
            if (!verification.status || verification.data.status !== 'success') {
                results.push({
                    reference: creditTransaction.paystack_reference,
                    success: false,
                    error: 'Payment not successful or not verified'
                });
                continue;
            }
            const paidAmount = verification.data.amount / 100;
            // Get or create profile
            let { data: profile } = await supabase.from('profiles').select('id, credit_balance').eq('email', creditTransaction.email).maybeSingle();
            if (!profile) {
                const { data: newProfile, error: createError } = await supabase.from('profiles').insert({
                    email: creditTransaction.email,
                    credit_balance: 0,
                    first_name: '',
                    last_name: ''
                }).select('id, credit_balance').single();
                if (createError || !newProfile) {
                    results.push({
                        reference: creditTransaction.paystack_reference,
                        success: false,
                        error: 'Failed to create profile'
                    });
                    continue;
                }
                profile = newProfile;
            }
            const balanceBefore = profile.credit_balance || 0;
            const balanceAfter = balanceBefore + paidAmount;
            // Update profile balance
            const { error: balanceError } = await supabase.from('profiles').update({
                credit_balance: balanceAfter,
                updated_at: new Date().toISOString()
            }).eq('id', profile.id);
            if (balanceError) {
                results.push({
                    reference: creditTransaction.paystack_reference,
                    success: false,
                    error: balanceError.message
                });
                continue;
            }
            // Update the credit transaction
            const { error: transactionError } = await supabase.from('credit_transactions').update({
                payment_status: 'completed',
                paystack_transaction_id: verification.data.id.toString(),
                balance_before: balanceBefore,
                balance_after: balanceAfter,
                updated_at: new Date().toISOString()
            }).eq('id', creditTransaction.id);
            results.push({
                reference: creditTransaction.paystack_reference,
                success: !transactionError,
                amount: paidAmount,
                balance: balanceAfter,
                error: transactionError?.message
            });
        }
        const successCount = results.filter((r)=>r.success).length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: successCount > 0,
            results,
            message: `Successfully processed ${successCount} of ${results.length} transaction(s)`
        });
    } catch (error) {
        console.error('Error retrying credit allocation:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to retry credit allocation',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d6633e9e._.js.map