(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    // Validate environment variables
    const supabaseUrl = ("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co");
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Store cookies that need to be set
    const cookiesToSet = [];
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
            cookies: {
                getAll () {
                    return request.cookies.getAll();
                },
                setAll (cookies) {
                    cookies.forEach(({ name, value, options })=>{
                        cookiesToSet.push({
                            name,
                            value,
                            options
                        });
                    });
                }
            }
        });
        // Refresh session if expired - required for Server Components
        const { data: { user }, error } = await supabase.auth.getUser();
        // If there's an error getting user, log it but don't block the request
        if (error) {
            console.error('Error getting user in middleware:', error.message);
        }
        // Protect dashboard routes (customer)
        if (request.nextUrl.pathname.startsWith('/dashboard')) {
            if (!user) {
                const url = request.nextUrl.clone();
                url.pathname = '/login';
                url.searchParams.set('redirect', request.nextUrl.pathname);
                // Create redirect response and apply cookies
                const redirectResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
                cookiesToSet.forEach(({ name, value, options })=>{
                    redirectResponse.cookies.set(name, value, options);
                });
                // Add pathname header even for redirects
                redirectResponse.headers.set('x-pathname', request.nextUrl.pathname);
                return redirectResponse;
            }
        }
        // Protect cleaner dashboard routes (but allow /cleaner/login)
        if (request.nextUrl.pathname.startsWith('/cleaner') && !request.nextUrl.pathname.startsWith('/cleaner/login')) {
            if (!user) {
                const url = request.nextUrl.clone();
                url.pathname = '/cleaner/login';
                url.searchParams.set('redirect', request.nextUrl.pathname);
                const redirectResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
                cookiesToSet.forEach(({ name, value, options })=>{
                    redirectResponse.cookies.set(name, value, options);
                });
                // Add pathname header even for redirects
                redirectResponse.headers.set('x-pathname', request.nextUrl.pathname);
                return redirectResponse;
            }
            // Additional check: verify user is a cleaner
            // We'll do a basic check here - full verification happens in layout
            // Check if email matches cleaner format or if user has cleaner profile
            if (user.email && !user.email.includes('@cleaners.shalean.local')) {
            // Allow through - layout will verify cleaner status more thoroughly
            // This is just a basic filter
            }
        }
        // Create response and add pathname header for all requests
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: request.headers
            }
        });
        // Set cookies on the response
        cookiesToSet.forEach(({ name, value, options })=>{
            response.cookies.set(name, value, options);
        });
        // Add pathname to headers for use in layouts (always set this)
        response.headers.set('x-pathname', request.nextUrl.pathname);
        return response;
    } catch (error) {
        // Log the error but don't crash the middleware
        console.error('Middleware error:', error);
        const errorResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        // Still set pathname header even on error
        errorResponse.headers.set('x-pathname', request.nextUrl.pathname);
        return errorResponse;
    }
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */ '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map