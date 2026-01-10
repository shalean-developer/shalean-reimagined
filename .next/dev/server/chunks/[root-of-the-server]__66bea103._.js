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
"[project]/app/api/bookings/use-credits/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
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
        const email = user.email;
        if (!email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User email not found'
            }, {
                status: 400
            });
        }
        const body = await request.json();
        const { bookingIds, creditsAmount } = body;
        if (!bookingIds || !Array.isArray(bookingIds) || bookingIds.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Booking IDs are required'
            }, {
                status: 400
            });
        }
        if (!creditsAmount || creditsAmount <= 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Credit amount must be greater than 0'
            }, {
                status: 400
            });
        }
        // Get user's profile and current balance
        const { data: profile, error: profileError } = await supabase.from('profiles').select('id, credit_balance').eq('email', email).maybeSingle();
        if (profileError) {
            console.error('Error fetching profile:', profileError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch profile'
            }, {
                status: 500
            });
        }
        if (!profile) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Profile not found'
            }, {
                status: 404
            });
        }
        const balanceBefore = profile.credit_balance || 0;
        // Validate sufficient balance
        if (balanceBefore < creditsAmount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Insufficient ShaleanCred balance',
                currentBalance: balanceBefore,
                requestedAmount: creditsAmount
            }, {
                status: 400
            });
        }
        // Get booking totals to validate credits amount doesn't exceed total
        const { data: bookings, error: bookingsError } = await supabase.from('bookings').select('id, total_amount, tip_amount, credits_used, subtotal, service_fee').in('id', bookingIds);
        if (bookingsError || !bookings || bookings.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Bookings not found'
            }, {
                status: 404
            });
        }
        // Calculate total amount for all bookings (including tip)
        const totalAmount = bookings.reduce((sum, booking)=>{
            const bookingTotal = Number(booking.total_amount) || 0;
            const tipAmount = Number(booking.tip_amount) || 0;
            const baseTotal = Number(booking.subtotal || 0) + Number(booking.service_fee || 0);
            // Check if tip is already included in total_amount
            if (tipAmount > 0 && Math.abs(bookingTotal - baseTotal) < 0.01) {
                return sum + bookingTotal + tipAmount;
            }
            return sum + bookingTotal;
        }, 0);
        // Round to 2 decimal places for comparison to avoid floating point precision issues
        const roundedCreditsAmount = Math.round(creditsAmount * 100) / 100;
        const roundedTotalAmount = Math.round(totalAmount * 100) / 100;
        // Cap credits amount to the total (allow up to exact total with small tolerance for rounding)
        const creditsToUse = Math.min(roundedCreditsAmount, roundedTotalAmount);
        // Validate credits amount doesn't significantly exceed total booking amount
        // Use 0.01 tolerance to allow for floating point precision issues
        if (roundedCreditsAmount > roundedTotalAmount + 0.01) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Credit amount exceeds booking total',
                bookingTotal: roundedTotalAmount,
                requestedAmount: roundedCreditsAmount,
                message: `You can use up to R${roundedTotalAmount.toFixed(2)} in credits for this booking.`
            }, {
                status: 400
            });
        }
        // Check if credits already used for these bookings
        const alreadyUsedCredits = bookings.reduce((sum, booking)=>{
            return sum + (Number(booking.credits_used) || 0);
        }, 0);
        if (alreadyUsedCredits > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Credits have already been used for these bookings',
                alreadyUsed: alreadyUsedCredits
            }, {
                status: 400
            });
        }
        // Calculate new balance
        const balanceAfter = balanceBefore - creditsToUse;
        // Update profile balance
        const { error: balanceUpdateError } = await supabase.from('profiles').update({
            credit_balance: balanceAfter,
            updated_at: new Date().toISOString()
        }).eq('id', profile.id);
        if (balanceUpdateError) {
            console.error('Error updating credit balance:', balanceUpdateError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to update credit balance',
                details: balanceUpdateError.message
            }, {
                status: 500
            });
        }
        // Distribute credits across bookings proportionally
        // For simplicity, apply credits to first booking(s) until amount is used
        // Use the final capped credits amount
        let remainingCredits = Math.round(creditsToUse * 100) / 100;
        const bookingUpdates = [];
        for (const booking of bookings){
            if (remainingCredits <= 0.01) break; // Use small epsilon for comparison
            const bookingTotal = Number(booking.total_amount) || 0;
            const tipAmount = Number(booking.tip_amount) || 0;
            const baseTotal = Number(booking.subtotal || 0) + Number(booking.service_fee || 0);
            // Calculate booking total (including tip if not already included)
            const bookingTotalWithTip = tipAmount > 0 && Math.abs(bookingTotal - baseTotal) < 0.01 ? bookingTotal + tipAmount : bookingTotal;
            // Round booking total and apply credits up to the booking total
            const roundedBookingTotal = Math.round(bookingTotalWithTip * 100) / 100;
            const creditsToApply = Math.min(remainingCredits, roundedBookingTotal);
            // Round credits to apply to 2 decimal places
            const roundedCreditsToApply = Math.round(creditsToApply * 100) / 100;
            bookingUpdates.push({
                id: booking.id,
                credits_used: roundedCreditsToApply
            });
            remainingCredits = Math.round((remainingCredits - roundedCreditsToApply) * 100) / 100;
        }
        // Update bookings with credits_used
        for (const update of bookingUpdates){
            const { error: bookingUpdateError } = await supabase.from('bookings').update({
                credits_used: update.credits_used,
                amount_paid: update.credits_used,
                updated_at: new Date().toISOString()
            }).eq('id', update.id);
            if (bookingUpdateError) {
                console.error(`Error updating booking ${update.id}:`, bookingUpdateError);
                // Rollback profile balance update if booking update fails
                await supabase.from('profiles').update({
                    credit_balance: balanceBefore,
                    updated_at: new Date().toISOString()
                }).eq('id', profile.id);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to update booking with credits',
                    details: bookingUpdateError.message
                }, {
                    status: 500
                });
            }
        }
        // Create credit transaction record for each booking (or one combined)
        // Using first booking ID as primary reference, but store all in metadata
        const { data: transaction, error: transactionError } = await supabase.from('credit_transactions').insert({
            profile_id: profile.id,
            email,
            transaction_type: 'usage',
            amount: -creditsToUse,
            balance_before: balanceBefore,
            balance_after: balanceAfter,
            payment_status: 'completed',
            booking_id: bookings[0].id,
            description: `Used R${creditsToUse.toFixed(2)} ShaleanCred for booking(s)`,
            metadata: {
                booking_ids: bookingIds,
                credits_distribution: bookingUpdates.map((u)=>({
                        booking_id: u.id,
                        credits: u.credits_used
                    }))
            }
        }).select('id').single();
        if (transactionError) {
            console.error('Error creating credit transaction:', transactionError);
            // Rollback profile balance and booking updates
            await supabase.from('profiles').update({
                credit_balance: balanceBefore,
                updated_at: new Date().toISOString()
            }).eq('id', profile.id);
            for (const update of bookingUpdates){
                await supabase.from('bookings').update({
                    credits_used: 0,
                    amount_paid: 0,
                    updated_at: new Date().toISOString()
                }).eq('id', update.id);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to create credit transaction',
                details: transactionError.message
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            creditsUsed: creditsToUse,
            balanceBefore,
            balanceAfter,
            transactionId: transaction.id,
            bookingUpdates: bookingUpdates.map((u)=>({
                    bookingId: u.id,
                    creditsUsed: u.credits_used
                }))
        });
    } catch (error) {
        console.error('Error in use-credits API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to use credits',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__66bea103._.js.map