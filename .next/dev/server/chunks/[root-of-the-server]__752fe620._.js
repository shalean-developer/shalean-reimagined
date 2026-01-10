module.exports = [
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__752fe620._.js.map