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
"[project]/app/api/paystack/verify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/paystack/client.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const reference = searchParams.get('reference');
    if (!reference) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Missing payment reference'
        }, {
            status: 400
        });
    }
    try {
        // Verify the payment with Paystack
        const verification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPayment"])(reference);
        // Log verification result for debugging
        console.log('Payment verification result:', {
            reference,
            status: verification.status,
            paymentStatus: verification.data?.status,
            transactionId: verification.data?.id
        });
        // Return the verification response
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(verification);
    } catch (error) {
        console.error('Error verifying payment:', {
            reference,
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: false,
            error: 'Failed to verify payment',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82ba0b61._.js.map