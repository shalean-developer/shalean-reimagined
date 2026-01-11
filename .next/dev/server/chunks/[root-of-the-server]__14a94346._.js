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
"[project]/app/api/bookings/verify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        const body = await request.json();
        const { reference } = body;
        if (!reference) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing payment reference'
            }, {
                status: 400
            });
        }
        // Verify the payment with Paystack
        const verification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paystack$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPayment"])(reference);
        if (!verification.status || verification.data.status !== 'success') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Payment not successful or not verified'
            }, {
                status: 400
            });
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const paidAmount = verification.data.amount / 100; // Convert from kobo/cents to ZAR
        const metadata = verification.data.metadata || {};
        // Check if this is a booking payment (not credit or voucher)
        const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || reference?.startsWith('CREDIT_');
        const isVoucherPurchase = metadata.transaction_type === 'voucher_purchase' || reference?.startsWith('VOUCHER_');
        if (isCreditPurchase || isVoucherPurchase) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'This is not a booking payment transaction'
            }, {
                status: 400
            });
        }
        // Find bookings by reference
        let { data: bookings, error: fetchError } = await supabase.from('bookings').select('id, payment_status, paystack_transaction_id, credits_used, total_amount, amount_paid').eq('paystack_reference', reference).in('payment_status', [
            'pending',
            'paid'
        ]);
        if (fetchError) {
            console.error('Error fetching bookings:', fetchError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Failed to fetch bookings',
                details: fetchError.message
            }, {
                status: 500
            });
        }
        if (!bookings || bookings.length === 0) {
            // Try to find by metadata booking_ids as fallback
            const bookingIds = metadata.booking_ids || (metadata.booking_id ? [
                metadata.booking_id
            ] : []);
            if (bookingIds.length > 0) {
                const { data: bookingsByMetadata, error: metadataError } = await supabase.from('bookings').select('id, payment_status, paystack_transaction_id, credits_used, total_amount, amount_paid').in('id', bookingIds).in('payment_status', [
                    'pending',
                    'paid'
                ]);
                if (!metadataError && bookingsByMetadata && bookingsByMetadata.length > 0) {
                    // Update these bookings with the reference
                    const bookingIdsToUpdate = bookingsByMetadata.map((b)=>b.id);
                    const { error: updateRefError } = await supabase.from('bookings').update({
                        paystack_reference: reference
                    }).in('id', bookingIdsToUpdate);
                    if (!updateRefError) {
                        // Retry the query
                        const { data: retryBookings } = await supabase.from('bookings').select('id, payment_status, paystack_transaction_id, credits_used, total_amount, amount_paid').eq('paystack_reference', reference).in('payment_status', [
                            'pending',
                            'paid'
                        ]);
                        if (retryBookings && retryBookings.length > 0) {
                            bookings = retryBookings;
                        }
                    }
                }
            }
            if (!bookings || bookings.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'No bookings found for this reference'
                }, {
                    status: 404
                });
            }
        }
        // Filter bookings that need updating
        const bookingsNeedingUpdate = bookings.filter((booking)=>booking.payment_status === 'pending' || !booking.paystack_transaction_id);
        if (bookingsNeedingUpdate.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: 'All bookings already verified',
                alreadyVerified: true,
                bookingIds: bookings.map((b)=>b.id)
            });
        }
        const bookingIds = bookingsNeedingUpdate.map((b)=>b.id);
        // Calculate amount_paid for each booking (credits_used + Paystack amount)
        // For multiple bookings, distribute Paystack amount proportionally
        const totalCreditsUsed = bookingsNeedingUpdate.reduce((sum, b)=>sum + (Number(b.credits_used) || 0), 0);
        const totalBookingAmount = bookingsNeedingUpdate.reduce((sum, b)=>sum + (Number(b.total_amount) || 0), 0);
        const creditsPerBooking = totalCreditsUsed / bookingsNeedingUpdate.length; // Simple distribution
        // Update each booking individually to handle credits correctly
        const updatePromises = bookingsNeedingUpdate.map(async (booking)=>{
            const creditsUsed = Number(booking.credits_used) || 0;
            // Calculate Paystack amount for this booking proportionally
            const bookingTotal = Number(booking.total_amount) || 0;
            const proportionalPaystackAmount = totalBookingAmount > 0 ? paidAmount * bookingTotal / totalBookingAmount : paidAmount / bookingsNeedingUpdate.length;
            const finalAmountPaid = creditsUsed + proportionalPaystackAmount;
            return supabase.from('bookings').update({
                payment_status: 'paid',
                paystack_reference: verification.data.reference,
                paystack_transaction_id: verification.data.id.toString(),
                amount_paid: finalAmountPaid,
                status: 'confirmed',
                updated_at: new Date().toISOString()
            }).eq('id', booking.id).select('id, payment_status, paystack_transaction_id, credits_used, amount_paid').single();
        });
        const updateResults = await Promise.all(updatePromises);
        const updateErrors = updateResults.filter((r)=>r.error);
        const updatedBookings = updateResults.filter((r)=>!r.error && r.data).map((r)=>r.data);
        if (updateErrors.length > 0) {
            console.error('Error updating some bookings:', updateErrors);
            // Return partial success if some updates succeeded
            if (updatedBookings.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Failed to update bookings',
                    details: updateErrors[0].error?.message
                }, {
                    status: 500
                });
            }
            // If some updates succeeded, return partial success
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: 'Some bookings verified successfully',
                updatedCount: updatedBookings.length,
                bookingIds: updatedBookings.map((b)=>b.id),
                paidAmount,
                paystackReference: reference,
                paystackTransactionId: verification.data.id.toString(),
                warnings: [
                    `Failed to update ${updateErrors.length} booking(s)`
                ]
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Bookings verified and updated successfully',
            updatedCount: updatedBookings?.length || 0,
            bookingIds: updatedBookings?.map((b)=>b.id) || [],
            paidAmount,
            paystackReference: reference,
            paystackTransactionId: verification.data.id.toString()
        });
    } catch (error) {
        console.error('Error verifying booking payment:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to verify booking payment',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14a94346._.js.map