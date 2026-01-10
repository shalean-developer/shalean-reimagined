module.exports = [
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-button hover:shadow-lg hover:-translate-y-0.5",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-primary text-primary-foreground shadow-button hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary/90",
            heroOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
            cta: "bg-primary text-primary-foreground shadow-button hover:shadow-lg hover:-translate-y-1 hover:bg-primary/90"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-lg px-6",
            xl: "h-14 rounded-xl px-8 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/app/booking/book/components/Step3ContactReview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step3ContactReview",
    ()=>Step3ContactReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$efce58__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:efce58 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$6f8c80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:6f8c80 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/recurring-dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-ssr] (ecmascript)");
'use client';
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
function Step3ContactReview({ formData, priceBreakdown, updateFormData, onValidateDiscountCode, onProceedToPayment, isProcessing = false }) {
    const [discountCodeInput, setDiscountCodeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formData.discountCode || '');
    const [isValidatingDiscount, setIsValidatingDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check authentication status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: { user } } = await supabase.auth.getUser();
            setIsAuthenticated(!!user);
        };
        checkAuth();
    }, []);
    // Fetch user's credit balance (only if authenticated)
    const { data: creditBalance = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'credit-balance'
        ],
        queryFn: async ()=>{
            try {
                const response = await fetch('/api/profile/balance');
                if (response.ok) {
                    const data = await response.json();
                    return data.success ? data.balance || 0 : 0;
                }
                return 0;
            } catch (error) {
                console.error('Error fetching credit balance:', error);
                return 0;
            }
        },
        enabled: isAuthenticated,
        staleTime: 30 * 1000
    });
    // Fetch services and additional services
    const { data: services = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'services'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$efce58__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
        staleTime: 5 * 60 * 1000
    });
    const { data: additionalServices = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'additional-services',
            formData.serviceId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$6f8c80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdditionalServices"])(formData.serviceId || undefined),
        enabled: !!formData.serviceId,
        staleTime: 5 * 60 * 1000
    });
    // Get selected service name
    const selectedService = services.find((s)=>s.id === formData.serviceId);
    const serviceName = selectedService?.name || 'Standard Cleaning';
    // Check if selected service is carpet cleaning
    const isCarpetCleaning = serviceName?.toLowerCase().includes('carpet') ?? false;
    // Get selected additional services
    const selectedAdditionalServices = formData.additionalServices.map((id)=>additionalServices.find((s)=>s.id === id)).filter((s)=>s !== undefined);
    // Fetch selected cleaners
    const { data: cleaners = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'cleaners',
            JSON.stringify(formData.preferredCleanerIds)
        ],
        queryFn: async ()=>{
            if (!formData.preferredCleanerIds || formData.preferredCleanerIds.length === 0) {
                return [];
            }
            // Create client inside query function to avoid hydration issues
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            // Fetch cleaner details by IDs
            const { data } = await supabase.from('cleaners').select('id, name, avatar_url, photo_url').in('id', formData.preferredCleanerIds);
            return data || [];
        },
        enabled: formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0,
        staleTime: 5 * 60 * 1000
    });
    // Calculate final subtotal (after all discounts, before service fee)
    const finalSubtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount - priceBreakdown.discountAmount;
    // Check if service supports recurring bookings
    const supportsRecurring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName);
    // Calculate recurring total for the first month
    const isRecurring = formData.cleaningFrequency !== 'one-time';
    const hasServiceDate = Boolean(formData.serviceDate);
    const shouldCalculateRecurringTotal = isRecurring && hasServiceDate && supportsRecurring;
    // Tip is one-time only (applied to first booking only, not recurring)
    const tipAmount = formData.tipAmount || 0;
    let numberOfBookingsInMonth = 1;
    let recurringTotal = priceBreakdown.totalAmount + tipAmount; // Single booking: base + tip
    if (shouldCalculateRecurringTotal) {
        try {
            const startDate = new Date(formData.serviceDate);
            const bookingDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateBookingDatesForMonth"])(startDate, formData.cleaningFrequency);
            numberOfBookingsInMonth = bookingDates.length;
            // For recurring: multiply base total by number of bookings, then add tip once
            recurringTotal = priceBreakdown.totalAmount * numberOfBookingsInMonth + tipAmount;
        } catch (error) {
            // If date parsing fails, fall back to single booking
            console.error('Error calculating recurring total:', error);
            numberOfBookingsInMonth = 1;
            recurringTotal = priceBreakdown.totalAmount + tipAmount;
        }
    }
    // Calculate credits usage
    const totalBookingAmount = shouldCalculateRecurringTotal ? recurringTotal : priceBreakdown.totalAmount + tipAmount;
    const useCredits = formData.useCredits || false;
    // Round values to avoid floating point precision issues
    const roundedTotalAmount = Math.round(totalBookingAmount * 100) / 100;
    const roundedCreditBalance = Math.round(creditBalance * 100) / 100;
    const roundedFormCredits = Math.round((formData.creditsAmount || 0) * 100) / 100;
    const creditsAmount = useCredits ? Math.min(roundedFormCredits, roundedCreditBalance, roundedTotalAmount) : 0;
    const remainingAfterCredits = Math.max(0, Math.round((roundedTotalAmount - creditsAmount) * 100) / 100);
    // Get frequency label for display
    const getFrequencyLabel = ()=>{
        switch(formData.cleaningFrequency){
            case 'weekly':
                return 'Weekly';
            case 'bi-weekly':
                return 'Bi-Weekly';
            case 'monthly':
                return 'Monthly';
            default:
                return '';
        }
    };
    const handleApplyDiscount = async ()=>{
        setIsValidatingDiscount(true);
        await onValidateDiscountCode(discountCodeInput);
        setIsValidatingDiscount(false);
    };
    const tipOptions = [
        0,
        25,
        50,
        75,
        100
    ];
    // Format cleaning frequency
    const formatFrequency = (freq)=>{
        const freqMap = {
            'one-time': 'One-time',
            'weekly': 'Weekly',
            'bi-weekly': 'Bi-weekly',
            'monthly': 'Monthly'
        };
        return freqMap[freq] || freq;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-foreground mb-1",
                        children: "Review Your Booking"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Please review your booking details before confirming."
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-4 border border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Cleaner"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary text-primary-foreground rounded-lg p-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mb-1",
                                children: "An upfront tip for"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            cleaners.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: cleaners.map((cleaner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-base",
                                        children: cleaner.name
                                    }, cleaner.id, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                children: "No preference - Best available"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "mb-2 block text-sm",
                                children: [
                                    "Tip amount",
                                    isRecurring && shouldCalculateRecurringTotal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground font-normal ml-1",
                                        children: "(one-time, first booking only)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap items-center",
                                children: [
                                    tipOptions.map((amount)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>updateFormData({
                                                    tipAmount: amount
                                                }),
                                            className: `px-3 py-1.5 rounded-full border-2 transition-all text-sm ${formData.tipAmount === amount ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50'}`,
                                            children: [
                                                "R",
                                                amount
                                            ]
                                        }, amount, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.tipAmount || '',
                                        onChange: (e)=>updateFormData({
                                                tipAmount: parseFloat(e.target.value) || 0
                                            }),
                                        placeholder: "Custom",
                                        className: "w-24 h-8 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-4 border border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Contact & Address"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "First Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g., Thabo",
                                                className: "pl-10",
                                                value: formData.customerFirstName,
                                                onChange: (e)=>updateFormData({
                                                        customerFirstName: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Last Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g., Mokoena",
                                                className: "pl-10",
                                                value: formData.customerLastName,
                                                onChange: (e)=>updateFormData({
                                                        customerLastName: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Email Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 292,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "email",
                                                placeholder: "e.g., thabo@example.com",
                                                className: "pl-10",
                                                value: formData.customerEmail,
                                                onChange: (e)=>updateFormData({
                                                        customerEmail: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Phone Number *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "0821234567 or +27821234567",
                                                className: "pl-10",
                                                value: formData.customerPhone,
                                                onChange: (e)=>updateFormData({
                                                        customerPhone: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Street address, Suburb, City",
                                                className: "pl-10",
                                                value: [
                                                    formData.serviceAddress,
                                                    formData.serviceAptUnit,
                                                    formData.serviceSuburb,
                                                    formData.serviceCity
                                                ].filter(Boolean).join(', '),
                                                onChange: (e)=>{
                                                    const address = e.target.value;
                                                    // Store the full address in serviceAddress for now
                                                    // Can be parsed into separate fields if needed
                                                    updateFormData({
                                                        serviceAddress: address
                                                    });
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-4 border border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "What You're Booking"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-3 border-b border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-foreground",
                                            children: serviceName
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        formData.cleaningFrequency && formData.cleaningFrequency !== 'one-time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: [
                                                "Frequency: ",
                                                formatFrequency(formData.cleaningFrequency)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                isCarpetCleaning ? // Show carpet-specific fields
                                (formData.carpetTypes.length > 0 || formData.numberOfFittedRooms || formData.numberOfLooseCarpets || formData.roomStatus) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-3 border-b border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Carpet Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 370,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                formData.carpetTypes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Carpet Types: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.carpetTypes.join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfFittedRooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Fitted Rooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfFittedRooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfLooseCarpets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Loose Carpets/Rugs: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfLooseCarpets
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 23
                                                }, this),
                                                formData.roomStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Room Status: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.roomStatus.replace(/-/g, ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 374,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this) : // Show bedrooms/bathrooms for non-carpet services
                                (parseInt(formData.bedrooms) > 0 || parseInt(formData.bathrooms) > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-3 border-b border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Property Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 406,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Bedrooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bedrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Bathrooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bathrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 410,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 405,
                                    columnNumber: 17
                                }, this),
                                selectedAdditionalServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-3 border-b border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Additional Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: selectedAdditionalServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20",
                                                    children: service.name
                                                }, service.id, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                (formData.numberOfCleaners > 1 || formData.cleaningEquipment === 'yes' || formData.serviceDuration) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pb-3 border-b border-border space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfCleaners
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 23
                                                        }, this),
                                                        " cleaner",
                                                        formData.numberOfCleaners > 1 ? 's' : '',
                                                        " assigned",
                                                        formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs ml-1",
                                                            children: [
                                                                "(+R",
                                                                ((formData.numberOfCleaners - 1) * 250).toFixed(2),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 452,
                                            columnNumber: 19
                                        }, this),
                                        formData.cleaningEquipment === 'yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "Equipment & supplies included",
                                                        priceBreakdown.equipmentSupplyPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs ml-1",
                                                            children: [
                                                                "(+R",
                                                                priceBreakdown.equipmentSupplyPrice.toFixed(2),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this),
                                        formData.serviceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "Estimated duration: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                formData.serviceDuration,
                                                                " hours"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 474,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Schedule"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(formData.serviceDate), 'EEE, MMM d, yyyy') : 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceTime || 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary/5 rounded-xl p-4 border border-primary/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: shouldCalculateRecurringTotal ? `Total Amount (${numberOfBookingsInMonth} ${numberOfBookingsInMonth === 1 ? 'booking' : 'bookings'} this month)` : 'Total Amount'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: shouldCalculateRecurringTotal ? `${getFrequencyLabel()} recurring - All fees included` : isRecurring && !hasServiceDate ? 'Select a date to see monthly total' : 'All fees included'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-2xl font-bold ${useCredits && creditsAmount > 0 ? 'line-through text-muted-foreground' : 'text-primary'}`,
                                        children: [
                                            "R",
                                            shouldCalculateRecurringTotal ? recurringTotal.toFixed(2) : (priceBreakdown.totalAmount + tipAmount).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    useCredits && creditsAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-primary mt-1",
                                        children: [
                                            "R",
                                            remainingAfterCredits.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    shouldCalculateRecurringTotal && numberOfBookingsInMonth > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 text-xs text-muted-foreground text-right",
                        children: [
                            "(R",
                            priceBreakdown.totalAmount.toFixed(2),
                            " × ",
                            numberOfBookingsInMonth,
                            ") ",
                            tipAmount > 0 ? `+ R${tipAmount.toFixed(2)} tip` : '',
                            " = R",
                            recurringTotal.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5 mb-3 pt-3 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Service & rooms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "R",
                                            Math.max(0, finalSubtotal).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Service fee"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            priceBreakdown.serviceFee.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this),
                            tipAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: [
                                            "Tip",
                                            isRecurring && shouldCalculateRecurringTotal ? ' (one-time, first booking only)' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            tipAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "mb-1.5 block text-sm",
                                children: "Have a discount code?"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Enter discount code",
                                        value: discountCodeInput,
                                        onChange: (e)=>setDiscountCodeInput(e.target.value),
                                        className: "h-9 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 564,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleApplyDiscount,
                                        disabled: isValidatingDiscount || !discountCodeInput,
                                        className: "h-9",
                                        children: "Apply"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    isAuthenticated && creditBalance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 p-3 bg-secondary/50 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 586,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm font-medium",
                                        children: "Use ShaleanCred"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-2",
                                children: [
                                    "You have ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-primary",
                                        children: [
                                            "R",
                                            creditBalance.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 590,
                                        columnNumber: 24
                                    }, this),
                                    " ShaleanCred available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "use-credits",
                                        checked: useCredits,
                                        onChange: (e)=>{
                                            const use = e.target.checked;
                                            updateFormData({
                                                useCredits: use,
                                                creditsAmount: use ? Math.min(creditBalance, totalBookingAmount) : 0
                                            });
                                        },
                                        className: "w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 593,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "use-credits",
                                        className: "text-sm cursor-pointer",
                                        children: "Use ShaleanCred for this booking"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            useCredits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "mb-1.5 block text-xs",
                                        children: [
                                            "Amount to use (max R",
                                            Math.min(creditBalance, totalBookingAmount).toFixed(2),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 612,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: "0",
                                        max: Math.min(creditBalance, totalBookingAmount),
                                        step: "0.01",
                                        value: creditsAmount > 0 ? creditsAmount.toFixed(2) : '',
                                        onChange: (e)=>{
                                            // Replace comma with period for consistent parsing
                                            const cleanValue = e.target.value.replace(',', '.');
                                            const value = parseFloat(cleanValue) || 0;
                                            // Round to 2 decimal places and cap at available balance and booking total
                                            const roundedValue = Math.round(value * 100) / 100;
                                            const maxAllowed = Math.min(creditBalance, totalBookingAmount);
                                            const cappedValue = Math.min(Math.max(0, roundedValue), maxAllowed);
                                            // Round again to ensure 2 decimal places
                                            const finalValue = Math.round(cappedValue * 100) / 100;
                                            updateFormData({
                                                creditsAmount: finalValue
                                            });
                                        },
                                        onBlur: (e)=>{
                                            // Ensure value is properly formatted on blur
                                            if (creditsAmount > 0) {
                                                const roundedValue = Math.round(creditsAmount * 100) / 100;
                                                const maxAllowed = Math.min(creditBalance, totalBookingAmount);
                                                const finalValue = Math.min(roundedValue, maxAllowed);
                                                updateFormData({
                                                    creditsAmount: finalValue
                                                });
                                            }
                                        },
                                        className: "h-9 text-sm",
                                        placeholder: "0.00"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 613,
                                        columnNumber: 17
                                    }, this),
                                    creditsAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: [
                                            "Remaining to pay: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: [
                                                    "R",
                                                    remainingAfterCredits.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 648,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 647,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 611,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this),
                    useCredits && creditsAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 p-2 bg-primary/10 rounded border border-primary/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "After ShaleanCred:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 660,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-primary",
                                        children: [
                                            "R",
                                            remainingAfterCredits.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-xs text-muted-foreground mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Credits applied:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "-R",
                                            creditsAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-muted-foreground mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Secure payment powered by Paystack"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 672,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        className: "w-full",
                        size: "lg",
                        onClick: onProceedToPayment,
                        disabled: isProcessing,
                        children: isProcessing ? 'Processing...' : 'Confirm & Pay'
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 675,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/booking/book/data:c9745b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBookingDraft",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c2908ef6bc319a05bff5b585be617bf443ecd7ca":"createBookingDraft"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c2908ef6bc319a05bff5b585be617bf443ecd7ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBookingDraft");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiAwLCAvLyBXaWxsIGJlIHVwZGF0ZWQgd2hlbiBjcmVkaXRzIGFyZSB1c2VkIGR1cmluZyBwYXltZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgY3JlZGl0cyB1c2VkIGFjcm9zcyBhbGwgYm9va2luZ3NcclxuICAgIGNvbnN0IHRvdGFsQ3JlZGl0c1VzZWQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgKE51bWJlcihib29raW5nLmNyZWRpdHNfdXNlZCkgfHwgMCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcmVtYWluaW5nIGFtb3VudCBhZnRlciBjcmVkaXRzXHJcbiAgICBjb25zdCByZW1haW5pbmdBbW91bnQgPSB0b3RhbEFtb3VudCAtIHRvdGFsQ3JlZGl0c1VzZWQ7XHJcblxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG5cclxuICAgIC8vIElmIGNyZWRpdHMgZnVsbHkgY292ZXIgdGhlIGJvb2tpbmcsIG1hcmsgYXMgcGFpZCBhbmQgc2tpcCBQYXlzdGFja1xyXG4gICAgaWYgKHJlbWFpbmluZ0Ftb3VudCA8PSAwKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgYm9va2luZ3MgdG8gbWFyayBhcyBwYWlkXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBwYXltZW50X3N0YXR1czogJ3BhaWQnLFxyXG4gICAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQW1vdW50LCAvLyBGdWxseSBwYWlkIHdpdGggY3JlZGl0c1xyXG4gICAgICAgICAgc3RhdHVzOiAnY29uZmlybWVkJywgLy8gQXV0by1jb25maXJtIHdoZW4gZnVsbHkgcGFpZFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3MgcGF5bWVudCBzdGF0dXM6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25VcmwgLSBwYXltZW50IGZ1bGx5IGNvdmVyZWQgYnkgY3JlZGl0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnRpYWwgY3JlZGl0IGNvdmVyYWdlIG9yIG5vIGNyZWRpdHMgLSBwcm9jZWVkIHdpdGggUGF5c3RhY2sgZm9yIHJlbWFpbmluZyBhbW91bnRcclxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGZpcnN0Qm9va2luZy5wYXlzdGFja19yZWZlcmVuY2UgfHwgYCR7Zmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyfSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIFBheXN0YWNrIHBheW1lbnQgd2l0aCByZW1haW5pbmcgYW1vdW50IChhZnRlciBjcmVkaXRzKVxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcmVtYWluaW5nQW1vdW50LCAvLyBPbmx5IGNoYXJnZSB0aGUgcmVtYWluaW5nIGFtb3VudFxyXG4gICAgICByZWZlcmVuY2UsXHJcbiAgICAgIHtcclxuICAgICAgICBib29raW5nX2lkczogYm9va2luZ0lkcyxcclxuICAgICAgICBib29raW5nX2lkOiBmaXJzdEJvb2tpbmcuaWQsIC8vIEtlZXAgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBib29raW5nX251bWJlcjogZmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2VtYWlsOiBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBJbmNsdWRlIGluIG1ldGFkYXRhIGZvciB0cmFja2luZ1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcGF5bWVudFJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHBheW1lbnRSZXNwb25zZS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgcmVmZXJlbmNlIHRoYXQgUGF5c3RhY2sgYWN0dWFsbHkgcmV0dXJuZWQgKG1heSBkaWZmZXIgZnJvbSB3aGF0IHdlIHNlbnQpXHJcbiAgICBjb25zdCBwYXlzdGFja1JlZmVyZW5jZSA9IHBheW1lbnRSZXNwb25zZS5kYXRhLnJlZmVyZW5jZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHdpdGggdGhlIFBheXN0YWNrIHJlZmVyZW5jZSBhbmQgcGFydGlhbCBwYXltZW50IGZyb20gY3JlZGl0c1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHBheXN0YWNrX3JlZmVyZW5jZTogcGF5c3RhY2tSZWZlcmVuY2UsXHJcbiAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQ3JlZGl0c1VzZWQsIC8vIFBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHMsIFBheXN0YWNrIHdpbGwgY29tcGxldGUgaXRcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3Mgd2l0aCBQYXlzdGFjayByZWZlcmVuY2U6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6IHBheW1lbnRSZXNwb25zZS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxyXG4gICAgICByZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgYnkgSURcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nKGJvb2tpbmdJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IGRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBib29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgZm9yIHNlbGVjdGlvblxyXG4gKiBPcHRpb25hbGx5IGZpbHRlciBieSBzZXJ2aWNlIGFyZWEvc3VidXJiXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnMoc2VydmljZVN1YnVyYj86IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBhbnlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gb25seSBmaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzXHJcbiAgICAvLyBGaXJzdCwgdHJ5IHRvIGdldCBhbGwgYWN0aXZlIGNsZWFuZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gZGF0YSB8fCBbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzIChjbGllbnQtc2lkZSBmaWx0ZXIgYXMgZmFsbGJhY2spXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAvLyBJZiBpc19hdmFpbGFibGUgY29sdW1uIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgbnVsbC91bmRlZmluZWQsIGluY2x1ZGUgdGhlIGNsZWFuZXJcclxuICAgICAgLy8gT3RoZXJ3aXNlLCBvbmx5IGluY2x1ZGUgaWYgaXNfYXZhaWxhYmxlIGlzIHRydWVcclxuICAgICAgcmV0dXJuIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBhcmVhIGlmIHN1YnVyYiBpcyBwcm92aWRlZFxyXG4gICAgLy8gU2luY2UgUG9zdGdyZVNRTCBhcnJheSBjb250YWlucyBpcyBjb21wbGV4IGluIFN1cGFiYXNlLCB3ZSBmaWx0ZXIgY2xpZW50LXNpZGVcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIC8vIElmIGNsZWFuZXIgaGFzIG5vIGFyZWFzIHNwZWNpZmllZCwgaW5jbHVkZSB0aGVtICh0aGV5IHNlcnZlIGFsbCBhcmVhcylcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYXJlYSBtYXRjaGVzIHRoZSBzdWJ1cmIgKGNhc2UtaW5zZW5zaXRpdmUgcGFydGlhbCBtYXRjaClcclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGlzIGF2YWlsYWJsZSBmb3IgYSBzcGVjaWZpYyBkYXkgb2YgdGhlIHdlZWtcclxuICogZGF5T2ZXZWVrOiAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCAuLi4sIDYgPSBTYXR1cmRheVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQ2xlYW5lckF2YWlsYWJsZUZvckRheShjbGVhbmVyOiBhbnksIGRheU9mV2VlazogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiB0eXBlb2YgY2xlYW5lcj4gPSB7XHJcbiAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2UgJiYgY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGhhcyBhIGJvb2tpbmcgY29uZmxpY3QgZm9yIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBzbG90XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhpcyBjbGVhbmVyIG9uIHRoZSBzcGVjaWZpZWQgZGF0ZVxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBubyBjb25mbGljdCBvbiBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gYm9va2luZ3MsIG5vIGNvbmZsaWN0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIG5ldyBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgIGNvbnN0IFtuZXdTdGFydEhvdXJzLCBuZXdTdGFydE1pbnV0ZXNdID0gc2VydmljZVRpbWUuc3BsaXQoJzonKS5tYXAoTnVtYmVyKTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0VGltZU1pbnV0ZXMgPSBuZXdTdGFydEhvdXJzICogNjAgKyBuZXdTdGFydE1pbnV0ZXM7XHJcbiAgICBjb25zdCBzZXJ2aWNlRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChzZXJ2aWNlRHVyYXRpb24gKiA2MCk7XHJcbiAgICBjb25zdCBuZXdFbmRUaW1lTWludXRlcyA9IG5ld1N0YXJ0VGltZU1pbnV0ZXMgKyBzZXJ2aWNlRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcidcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uXHJcbiAgICAgICAgICA6IHBhcnNlRmxvYXQoYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYm9va2luZ0VuZFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgKyBib29raW5nRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIG92ZXJsYXA6IG5ldyBzdGFydCA8IGV4aXN0aW5nIGVuZCBBTkQgbmV3IGVuZCA+IGV4aXN0aW5nIHN0YXJ0XHJcbiAgICAgIGlmIChuZXdTdGFydFRpbWVNaW51dGVzIDwgYm9va2luZ0VuZFRpbWVNaW51dGVzICYmIG5ld0VuZFRpbWVNaW51dGVzID4gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gQ29uZmxpY3QgZm91bmRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTsgLy8gTm8gY29uZmxpY3RzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGZvciBhIGNsZWFuZXIgKHNlcnZlci1zaWRlIHdyYXBwZXIpXHJcbiAqIFRoaXMgY2FsbHMgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNhbGN1bGF0ZXMgY2xpZW50LXNpZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVDbGVhbmVyUmVsaWFiaWxpdHlTY29yZShjbGVhbmVySWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVHJ5IHRvIGNhbGwgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ2NhbGN1bGF0ZV9jbGVhbmVyX3JlbGlhYmlsaXR5X3Njb3JlJywge1xyXG4gICAgICBjbGVhbmVyX2lkOiBjbGVhbmVySWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWVycm9yICYmIGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxsYmFjazogZmV0Y2ggY2xlYW5lciBhbmQgY2FsY3VsYXRlIGNsaWVudC1zaWRlXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGNsZWFuZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFjbGVhbmVyKSB7XHJcbiAgICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lciBhcyBDbGVhbmVyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FsY3VsYXRpbmcgcmVsaWFiaWxpdHkgc2NvcmU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmUgb24gZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIHdpdGggZW5oYW5jZWQgZmlsdGVyaW5nIGNyaXRlcmlhXHJcbiAqIEZpbHRlcnMgYnk6IExvY2F0aW9uLCBBdmFpbGFiaWxpdHksIEJvb2tpbmcgY29uZmxpY3RzXHJcbiAqIFNvcnRzIGJ5OiBSZWxpYWJpbGl0eSBTY29yZSwgUmF0aW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnNXaXRoQ3JpdGVyaWEocGFyYW1zOiB7XHJcbiAgc2VydmljZVN1YnVyYj86IHN0cmluZztcclxuICBzZXJ2aWNlRGF0ZT86IHN0cmluZztcclxuICBzZXJ2aWNlVGltZT86IHN0cmluZztcclxuICBzZXJ2aWNlRHVyYXRpb24/OiBudW1iZXI7XHJcbiAgbWluUmF0aW5nPzogbnVtYmVyO1xyXG4gIG1pblJlbGlhYmlsaXR5U2NvcmU/OiBudW1iZXI7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzZXJ2aWNlU3VidXJiLFxyXG4gICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvbiA9IDMsXHJcbiAgICAgIG1pblJhdGluZyA9IDAsXHJcbiAgICAgIG1pblJlbGlhYmlsaXR5U2NvcmUgPSAwLFxyXG4gICAgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyBCdWlsZCBiYXNlIHF1ZXJ5XHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeS5vcmRlcigncmVsaWFiaWxpdHlfc2NvcmUnLCB7IGFzY2VuZGluZzogZmFsc2UsIG51bGxzRmlyc3Q6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcigncmF0aW5nJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignbmFtZScsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xlYW5lcnMgPSAoZGF0YSB8fCBbXSkgYXMgQ2xlYW5lcltdO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBpc19hdmFpbGFibGVcclxuICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBsb2NhdGlvbiAoc3VidXJiKVxyXG4gICAgaWYgKHNlcnZpY2VTdWJ1cmIgJiYgY2xlYW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzdWJ1cmJMb3dlciA9IHNlcnZpY2VTdWJ1cmIudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gU2VydmUgYWxsIGFyZWFzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhbmVyLmFyZWFzLnNvbWUoKGFyZWE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJlYUxvd2VyID0gYXJlYS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGFyZWFMb3dlci5pbmNsdWRlcyhzdWJ1cmJMb3dlcikgfHwgc3VidXJiTG93ZXIuaW5jbHVkZXMoYXJlYUxvd2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGRheSBvZiB3ZWVrIGF2YWlsYWJpbGl0eSBpZiBkYXRlIGlzIHByb3ZpZGVkXHJcbiAgICBpZiAoc2VydmljZURhdGUpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTsgLy8gMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjLlxyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgQ2xlYW5lcj4gPSB7XHJcbiAgICAgICAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAgICAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAgICAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgICAgICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgICAgICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICAgICAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICAgICAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRheUZpZWxkID0gZGF5TWFwW2RheU9mV2Vla107XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXJbZGF5RmllbGRdICE9PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmF0aW5nXHJcbiAgICBpZiAobWluUmF0aW5nID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmF0aW5nIHx8IDApID49IG1pblJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmVsaWFiaWxpdHkgc2NvcmVcclxuICAgIGlmIChtaW5SZWxpYWJpbGl0eVNjb3JlID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgPj0gbWluUmVsaWFiaWxpdHlTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5yaWNoIGNsZWFuZXJzIHdpdGggYXZhaWxhYmlsaXR5IGFuZCBib29raW5nIGNvbmZsaWN0IGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBlbnJpY2hlZENsZWFuZXJzOiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGNsZWFuZXJzLm1hcChhc3luYyAoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZUZvclNsb3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCBib29raW5nQ29uZmxpY3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYm9va2luZyBjb25mbGljdCBpZiBkYXRlIGFuZCB0aW1lIGFyZSBwcm92aWRlZFxyXG4gICAgICAgIGlmIChzZXJ2aWNlRGF0ZSAmJiBzZXJ2aWNlVGltZSAmJiBzZXJ2aWNlRHVyYXRpb24pIHtcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCA9IGF3YWl0IGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICAgICAgICAgICAgY2xlYW5lci5pZCxcclxuICAgICAgICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRHVyYXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QgPSAhYm9va2luZ0NvbmZsaWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGlmIG5vdCBwcmVzZW50XHJcbiAgICAgICAgY29uc3QgcmVsaWFiaWxpdHlTY29yZSA9IGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgPz8gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNsZWFuZXIsXHJcbiAgICAgICAgICByZWxpYWJpbGl0eV9zY29yZTogcmVsaWFiaWxpdHlTY29yZSxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCxcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCxcclxuICAgICAgICAgIGNvbXBsZXRpb25SYXRlOiBjYWxjdWxhdGVDb21wbGV0aW9uUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICAgIG9uVGltZVJhdGU6IGNhbGN1bGF0ZU9uVGltZVJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gU29ydCBieSByZWxpYWJpbGl0eSBzY29yZSBhbmQgcmF0aW5nIChhbHJlYWR5IHNvcnRlZCBieSBxdWVyeSwgYnV0IGVuc3VyZSBjb25zaXN0ZW5jeSlcclxuICAgIGVucmljaGVkQ2xlYW5lcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBzY29yZUEgPSAoYS5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChhLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgY29uc3Qgc2NvcmVCID0gKGIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYi5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIHJldHVybiBzY29yZUIgLSBzY29yZUE7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyczogZW5yaWNoZWRDbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzIHdpdGggY3JpdGVyaWE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQW1Uc0IsK0xBQUEifQ==
}),
"[project]/app/booking/book/data:2d5837 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initializePaymentForBooking",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4004ef63ef40de34adde504db020ada1e9af75afca":"initializePaymentForBooking"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4004ef63ef40de34adde504db020ada1e9af75afca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "initializePaymentForBooking");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiAwLCAvLyBXaWxsIGJlIHVwZGF0ZWQgd2hlbiBjcmVkaXRzIGFyZSB1c2VkIGR1cmluZyBwYXltZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgY3JlZGl0cyB1c2VkIGFjcm9zcyBhbGwgYm9va2luZ3NcclxuICAgIGNvbnN0IHRvdGFsQ3JlZGl0c1VzZWQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgKE51bWJlcihib29raW5nLmNyZWRpdHNfdXNlZCkgfHwgMCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcmVtYWluaW5nIGFtb3VudCBhZnRlciBjcmVkaXRzXHJcbiAgICBjb25zdCByZW1haW5pbmdBbW91bnQgPSB0b3RhbEFtb3VudCAtIHRvdGFsQ3JlZGl0c1VzZWQ7XHJcblxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG5cclxuICAgIC8vIElmIGNyZWRpdHMgZnVsbHkgY292ZXIgdGhlIGJvb2tpbmcsIG1hcmsgYXMgcGFpZCBhbmQgc2tpcCBQYXlzdGFja1xyXG4gICAgaWYgKHJlbWFpbmluZ0Ftb3VudCA8PSAwKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgYm9va2luZ3MgdG8gbWFyayBhcyBwYWlkXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBwYXltZW50X3N0YXR1czogJ3BhaWQnLFxyXG4gICAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQW1vdW50LCAvLyBGdWxseSBwYWlkIHdpdGggY3JlZGl0c1xyXG4gICAgICAgICAgc3RhdHVzOiAnY29uZmlybWVkJywgLy8gQXV0by1jb25maXJtIHdoZW4gZnVsbHkgcGFpZFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3MgcGF5bWVudCBzdGF0dXM6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25VcmwgLSBwYXltZW50IGZ1bGx5IGNvdmVyZWQgYnkgY3JlZGl0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnRpYWwgY3JlZGl0IGNvdmVyYWdlIG9yIG5vIGNyZWRpdHMgLSBwcm9jZWVkIHdpdGggUGF5c3RhY2sgZm9yIHJlbWFpbmluZyBhbW91bnRcclxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGZpcnN0Qm9va2luZy5wYXlzdGFja19yZWZlcmVuY2UgfHwgYCR7Zmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyfSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIFBheXN0YWNrIHBheW1lbnQgd2l0aCByZW1haW5pbmcgYW1vdW50IChhZnRlciBjcmVkaXRzKVxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcmVtYWluaW5nQW1vdW50LCAvLyBPbmx5IGNoYXJnZSB0aGUgcmVtYWluaW5nIGFtb3VudFxyXG4gICAgICByZWZlcmVuY2UsXHJcbiAgICAgIHtcclxuICAgICAgICBib29raW5nX2lkczogYm9va2luZ0lkcyxcclxuICAgICAgICBib29raW5nX2lkOiBmaXJzdEJvb2tpbmcuaWQsIC8vIEtlZXAgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBib29raW5nX251bWJlcjogZmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2VtYWlsOiBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBJbmNsdWRlIGluIG1ldGFkYXRhIGZvciB0cmFja2luZ1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcGF5bWVudFJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHBheW1lbnRSZXNwb25zZS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgcmVmZXJlbmNlIHRoYXQgUGF5c3RhY2sgYWN0dWFsbHkgcmV0dXJuZWQgKG1heSBkaWZmZXIgZnJvbSB3aGF0IHdlIHNlbnQpXHJcbiAgICBjb25zdCBwYXlzdGFja1JlZmVyZW5jZSA9IHBheW1lbnRSZXNwb25zZS5kYXRhLnJlZmVyZW5jZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHdpdGggdGhlIFBheXN0YWNrIHJlZmVyZW5jZSBhbmQgcGFydGlhbCBwYXltZW50IGZyb20gY3JlZGl0c1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHBheXN0YWNrX3JlZmVyZW5jZTogcGF5c3RhY2tSZWZlcmVuY2UsXHJcbiAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQ3JlZGl0c1VzZWQsIC8vIFBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHMsIFBheXN0YWNrIHdpbGwgY29tcGxldGUgaXRcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3Mgd2l0aCBQYXlzdGFjayByZWZlcmVuY2U6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6IHBheW1lbnRSZXNwb25zZS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxyXG4gICAgICByZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgYnkgSURcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nKGJvb2tpbmdJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IGRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBib29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgZm9yIHNlbGVjdGlvblxyXG4gKiBPcHRpb25hbGx5IGZpbHRlciBieSBzZXJ2aWNlIGFyZWEvc3VidXJiXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnMoc2VydmljZVN1YnVyYj86IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBhbnlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gb25seSBmaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzXHJcbiAgICAvLyBGaXJzdCwgdHJ5IHRvIGdldCBhbGwgYWN0aXZlIGNsZWFuZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gZGF0YSB8fCBbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzIChjbGllbnQtc2lkZSBmaWx0ZXIgYXMgZmFsbGJhY2spXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAvLyBJZiBpc19hdmFpbGFibGUgY29sdW1uIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgbnVsbC91bmRlZmluZWQsIGluY2x1ZGUgdGhlIGNsZWFuZXJcclxuICAgICAgLy8gT3RoZXJ3aXNlLCBvbmx5IGluY2x1ZGUgaWYgaXNfYXZhaWxhYmxlIGlzIHRydWVcclxuICAgICAgcmV0dXJuIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBhcmVhIGlmIHN1YnVyYiBpcyBwcm92aWRlZFxyXG4gICAgLy8gU2luY2UgUG9zdGdyZVNRTCBhcnJheSBjb250YWlucyBpcyBjb21wbGV4IGluIFN1cGFiYXNlLCB3ZSBmaWx0ZXIgY2xpZW50LXNpZGVcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIC8vIElmIGNsZWFuZXIgaGFzIG5vIGFyZWFzIHNwZWNpZmllZCwgaW5jbHVkZSB0aGVtICh0aGV5IHNlcnZlIGFsbCBhcmVhcylcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYXJlYSBtYXRjaGVzIHRoZSBzdWJ1cmIgKGNhc2UtaW5zZW5zaXRpdmUgcGFydGlhbCBtYXRjaClcclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGlzIGF2YWlsYWJsZSBmb3IgYSBzcGVjaWZpYyBkYXkgb2YgdGhlIHdlZWtcclxuICogZGF5T2ZXZWVrOiAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCAuLi4sIDYgPSBTYXR1cmRheVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQ2xlYW5lckF2YWlsYWJsZUZvckRheShjbGVhbmVyOiBhbnksIGRheU9mV2VlazogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiB0eXBlb2YgY2xlYW5lcj4gPSB7XHJcbiAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2UgJiYgY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGhhcyBhIGJvb2tpbmcgY29uZmxpY3QgZm9yIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBzbG90XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhpcyBjbGVhbmVyIG9uIHRoZSBzcGVjaWZpZWQgZGF0ZVxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBubyBjb25mbGljdCBvbiBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gYm9va2luZ3MsIG5vIGNvbmZsaWN0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIG5ldyBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgIGNvbnN0IFtuZXdTdGFydEhvdXJzLCBuZXdTdGFydE1pbnV0ZXNdID0gc2VydmljZVRpbWUuc3BsaXQoJzonKS5tYXAoTnVtYmVyKTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0VGltZU1pbnV0ZXMgPSBuZXdTdGFydEhvdXJzICogNjAgKyBuZXdTdGFydE1pbnV0ZXM7XHJcbiAgICBjb25zdCBzZXJ2aWNlRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChzZXJ2aWNlRHVyYXRpb24gKiA2MCk7XHJcbiAgICBjb25zdCBuZXdFbmRUaW1lTWludXRlcyA9IG5ld1N0YXJ0VGltZU1pbnV0ZXMgKyBzZXJ2aWNlRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcidcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uXHJcbiAgICAgICAgICA6IHBhcnNlRmxvYXQoYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYm9va2luZ0VuZFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgKyBib29raW5nRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIG92ZXJsYXA6IG5ldyBzdGFydCA8IGV4aXN0aW5nIGVuZCBBTkQgbmV3IGVuZCA+IGV4aXN0aW5nIHN0YXJ0XHJcbiAgICAgIGlmIChuZXdTdGFydFRpbWVNaW51dGVzIDwgYm9va2luZ0VuZFRpbWVNaW51dGVzICYmIG5ld0VuZFRpbWVNaW51dGVzID4gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gQ29uZmxpY3QgZm91bmRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTsgLy8gTm8gY29uZmxpY3RzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGZvciBhIGNsZWFuZXIgKHNlcnZlci1zaWRlIHdyYXBwZXIpXHJcbiAqIFRoaXMgY2FsbHMgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNhbGN1bGF0ZXMgY2xpZW50LXNpZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVDbGVhbmVyUmVsaWFiaWxpdHlTY29yZShjbGVhbmVySWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVHJ5IHRvIGNhbGwgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ2NhbGN1bGF0ZV9jbGVhbmVyX3JlbGlhYmlsaXR5X3Njb3JlJywge1xyXG4gICAgICBjbGVhbmVyX2lkOiBjbGVhbmVySWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWVycm9yICYmIGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxsYmFjazogZmV0Y2ggY2xlYW5lciBhbmQgY2FsY3VsYXRlIGNsaWVudC1zaWRlXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGNsZWFuZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFjbGVhbmVyKSB7XHJcbiAgICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lciBhcyBDbGVhbmVyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FsY3VsYXRpbmcgcmVsaWFiaWxpdHkgc2NvcmU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmUgb24gZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIHdpdGggZW5oYW5jZWQgZmlsdGVyaW5nIGNyaXRlcmlhXHJcbiAqIEZpbHRlcnMgYnk6IExvY2F0aW9uLCBBdmFpbGFiaWxpdHksIEJvb2tpbmcgY29uZmxpY3RzXHJcbiAqIFNvcnRzIGJ5OiBSZWxpYWJpbGl0eSBTY29yZSwgUmF0aW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnNXaXRoQ3JpdGVyaWEocGFyYW1zOiB7XHJcbiAgc2VydmljZVN1YnVyYj86IHN0cmluZztcclxuICBzZXJ2aWNlRGF0ZT86IHN0cmluZztcclxuICBzZXJ2aWNlVGltZT86IHN0cmluZztcclxuICBzZXJ2aWNlRHVyYXRpb24/OiBudW1iZXI7XHJcbiAgbWluUmF0aW5nPzogbnVtYmVyO1xyXG4gIG1pblJlbGlhYmlsaXR5U2NvcmU/OiBudW1iZXI7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzZXJ2aWNlU3VidXJiLFxyXG4gICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvbiA9IDMsXHJcbiAgICAgIG1pblJhdGluZyA9IDAsXHJcbiAgICAgIG1pblJlbGlhYmlsaXR5U2NvcmUgPSAwLFxyXG4gICAgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyBCdWlsZCBiYXNlIHF1ZXJ5XHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeS5vcmRlcigncmVsaWFiaWxpdHlfc2NvcmUnLCB7IGFzY2VuZGluZzogZmFsc2UsIG51bGxzRmlyc3Q6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcigncmF0aW5nJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignbmFtZScsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xlYW5lcnMgPSAoZGF0YSB8fCBbXSkgYXMgQ2xlYW5lcltdO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBpc19hdmFpbGFibGVcclxuICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBsb2NhdGlvbiAoc3VidXJiKVxyXG4gICAgaWYgKHNlcnZpY2VTdWJ1cmIgJiYgY2xlYW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzdWJ1cmJMb3dlciA9IHNlcnZpY2VTdWJ1cmIudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gU2VydmUgYWxsIGFyZWFzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhbmVyLmFyZWFzLnNvbWUoKGFyZWE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJlYUxvd2VyID0gYXJlYS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGFyZWFMb3dlci5pbmNsdWRlcyhzdWJ1cmJMb3dlcikgfHwgc3VidXJiTG93ZXIuaW5jbHVkZXMoYXJlYUxvd2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGRheSBvZiB3ZWVrIGF2YWlsYWJpbGl0eSBpZiBkYXRlIGlzIHByb3ZpZGVkXHJcbiAgICBpZiAoc2VydmljZURhdGUpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTsgLy8gMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjLlxyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgQ2xlYW5lcj4gPSB7XHJcbiAgICAgICAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAgICAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAgICAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgICAgICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgICAgICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICAgICAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICAgICAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRheUZpZWxkID0gZGF5TWFwW2RheU9mV2Vla107XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXJbZGF5RmllbGRdICE9PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmF0aW5nXHJcbiAgICBpZiAobWluUmF0aW5nID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmF0aW5nIHx8IDApID49IG1pblJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmVsaWFiaWxpdHkgc2NvcmVcclxuICAgIGlmIChtaW5SZWxpYWJpbGl0eVNjb3JlID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgPj0gbWluUmVsaWFiaWxpdHlTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5yaWNoIGNsZWFuZXJzIHdpdGggYXZhaWxhYmlsaXR5IGFuZCBib29raW5nIGNvbmZsaWN0IGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBlbnJpY2hlZENsZWFuZXJzOiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGNsZWFuZXJzLm1hcChhc3luYyAoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZUZvclNsb3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCBib29raW5nQ29uZmxpY3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYm9va2luZyBjb25mbGljdCBpZiBkYXRlIGFuZCB0aW1lIGFyZSBwcm92aWRlZFxyXG4gICAgICAgIGlmIChzZXJ2aWNlRGF0ZSAmJiBzZXJ2aWNlVGltZSAmJiBzZXJ2aWNlRHVyYXRpb24pIHtcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCA9IGF3YWl0IGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICAgICAgICAgICAgY2xlYW5lci5pZCxcclxuICAgICAgICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRHVyYXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QgPSAhYm9va2luZ0NvbmZsaWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGlmIG5vdCBwcmVzZW50XHJcbiAgICAgICAgY29uc3QgcmVsaWFiaWxpdHlTY29yZSA9IGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgPz8gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNsZWFuZXIsXHJcbiAgICAgICAgICByZWxpYWJpbGl0eV9zY29yZTogcmVsaWFiaWxpdHlTY29yZSxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCxcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCxcclxuICAgICAgICAgIGNvbXBsZXRpb25SYXRlOiBjYWxjdWxhdGVDb21wbGV0aW9uUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICAgIG9uVGltZVJhdGU6IGNhbGN1bGF0ZU9uVGltZVJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gU29ydCBieSByZWxpYWJpbGl0eSBzY29yZSBhbmQgcmF0aW5nIChhbHJlYWR5IHNvcnRlZCBieSBxdWVyeSwgYnV0IGVuc3VyZSBjb25zaXN0ZW5jeSlcclxuICAgIGVucmljaGVkQ2xlYW5lcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBzY29yZUEgPSAoYS5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChhLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgY29uc3Qgc2NvcmVCID0gKGIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYi5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIHJldHVybiBzY29yZUIgLSBzY29yZUE7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyczogZW5yaWNoZWRDbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzIHdpdGggY3JpdGVyaWE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQTZnQnNCLHdNQUFBIn0=
}),
"[project]/app/booking/book/data:a1f414 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateDiscountCode",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60552b54902c256ccf98e190f63fd8748b7384ea5f":"validateDiscountCode"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60552b54902c256ccf98e190f63fd8748b7384ea5f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "validateDiscountCode");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiAwLCAvLyBXaWxsIGJlIHVwZGF0ZWQgd2hlbiBjcmVkaXRzIGFyZSB1c2VkIGR1cmluZyBwYXltZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgY3JlZGl0cyB1c2VkIGFjcm9zcyBhbGwgYm9va2luZ3NcclxuICAgIGNvbnN0IHRvdGFsQ3JlZGl0c1VzZWQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICByZXR1cm4gc3VtICsgKE51bWJlcihib29raW5nLmNyZWRpdHNfdXNlZCkgfHwgMCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcmVtYWluaW5nIGFtb3VudCBhZnRlciBjcmVkaXRzXHJcbiAgICBjb25zdCByZW1haW5pbmdBbW91bnQgPSB0b3RhbEFtb3VudCAtIHRvdGFsQ3JlZGl0c1VzZWQ7XHJcblxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG5cclxuICAgIC8vIElmIGNyZWRpdHMgZnVsbHkgY292ZXIgdGhlIGJvb2tpbmcsIG1hcmsgYXMgcGFpZCBhbmQgc2tpcCBQYXlzdGFja1xyXG4gICAgaWYgKHJlbWFpbmluZ0Ftb3VudCA8PSAwKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgYm9va2luZ3MgdG8gbWFyayBhcyBwYWlkXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBwYXltZW50X3N0YXR1czogJ3BhaWQnLFxyXG4gICAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQW1vdW50LCAvLyBGdWxseSBwYWlkIHdpdGggY3JlZGl0c1xyXG4gICAgICAgICAgc3RhdHVzOiAnY29uZmlybWVkJywgLy8gQXV0by1jb25maXJtIHdoZW4gZnVsbHkgcGFpZFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3MgcGF5bWVudCBzdGF0dXM6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25VcmwgLSBwYXltZW50IGZ1bGx5IGNvdmVyZWQgYnkgY3JlZGl0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnRpYWwgY3JlZGl0IGNvdmVyYWdlIG9yIG5vIGNyZWRpdHMgLSBwcm9jZWVkIHdpdGggUGF5c3RhY2sgZm9yIHJlbWFpbmluZyBhbW91bnRcclxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGZpcnN0Qm9va2luZy5wYXlzdGFja19yZWZlcmVuY2UgfHwgYCR7Zmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyfSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIFBheXN0YWNrIHBheW1lbnQgd2l0aCByZW1haW5pbmcgYW1vdW50IChhZnRlciBjcmVkaXRzKVxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcmVtYWluaW5nQW1vdW50LCAvLyBPbmx5IGNoYXJnZSB0aGUgcmVtYWluaW5nIGFtb3VudFxyXG4gICAgICByZWZlcmVuY2UsXHJcbiAgICAgIHtcclxuICAgICAgICBib29raW5nX2lkczogYm9va2luZ0lkcyxcclxuICAgICAgICBib29raW5nX2lkOiBmaXJzdEJvb2tpbmcuaWQsIC8vIEtlZXAgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBib29raW5nX251bWJlcjogZmlyc3RCb29raW5nLmJvb2tpbmdfbnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2VtYWlsOiBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgICAgY3JlZGl0c191c2VkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBJbmNsdWRlIGluIG1ldGFkYXRhIGZvciB0cmFja2luZ1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcGF5bWVudFJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHBheW1lbnRSZXNwb25zZS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgcmVmZXJlbmNlIHRoYXQgUGF5c3RhY2sgYWN0dWFsbHkgcmV0dXJuZWQgKG1heSBkaWZmZXIgZnJvbSB3aGF0IHdlIHNlbnQpXHJcbiAgICBjb25zdCBwYXlzdGFja1JlZmVyZW5jZSA9IHBheW1lbnRSZXNwb25zZS5kYXRhLnJlZmVyZW5jZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHdpdGggdGhlIFBheXN0YWNrIHJlZmVyZW5jZSBhbmQgcGFydGlhbCBwYXltZW50IGZyb20gY3JlZGl0c1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHBheXN0YWNrX3JlZmVyZW5jZTogcGF5c3RhY2tSZWZlcmVuY2UsXHJcbiAgICAgICAgYW1vdW50X3BhaWQ6IHRvdGFsQ3JlZGl0c1VzZWQsIC8vIFBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHMsIFBheXN0YWNrIHdpbGwgY29tcGxldGUgaXRcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZ3Mgd2l0aCBQYXlzdGFjayByZWZlcmVuY2U6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6IHBheW1lbnRSZXNwb25zZS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxyXG4gICAgICByZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgYnkgSURcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nKGJvb2tpbmdJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IGRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBib29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgZm9yIHNlbGVjdGlvblxyXG4gKiBPcHRpb25hbGx5IGZpbHRlciBieSBzZXJ2aWNlIGFyZWEvc3VidXJiXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnMoc2VydmljZVN1YnVyYj86IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBhbnlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IC0gb25seSBmaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzXHJcbiAgICAvLyBGaXJzdCwgdHJ5IHRvIGdldCBhbGwgYWN0aXZlIGNsZWFuZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gZGF0YSB8fCBbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlIGlmIHRoZSBjb2x1bW4gZXhpc3RzIChjbGllbnQtc2lkZSBmaWx0ZXIgYXMgZmFsbGJhY2spXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAvLyBJZiBpc19hdmFpbGFibGUgY29sdW1uIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgbnVsbC91bmRlZmluZWQsIGluY2x1ZGUgdGhlIGNsZWFuZXJcclxuICAgICAgLy8gT3RoZXJ3aXNlLCBvbmx5IGluY2x1ZGUgaWYgaXNfYXZhaWxhYmxlIGlzIHRydWVcclxuICAgICAgcmV0dXJuIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBhcmVhIGlmIHN1YnVyYiBpcyBwcm92aWRlZFxyXG4gICAgLy8gU2luY2UgUG9zdGdyZVNRTCBhcnJheSBjb250YWlucyBpcyBjb21wbGV4IGluIFN1cGFiYXNlLCB3ZSBmaWx0ZXIgY2xpZW50LXNpZGVcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIC8vIElmIGNsZWFuZXIgaGFzIG5vIGFyZWFzIHNwZWNpZmllZCwgaW5jbHVkZSB0aGVtICh0aGV5IHNlcnZlIGFsbCBhcmVhcylcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYXJlYSBtYXRjaGVzIHRoZSBzdWJ1cmIgKGNhc2UtaW5zZW5zaXRpdmUgcGFydGlhbCBtYXRjaClcclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGlzIGF2YWlsYWJsZSBmb3IgYSBzcGVjaWZpYyBkYXkgb2YgdGhlIHdlZWtcclxuICogZGF5T2ZXZWVrOiAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCAuLi4sIDYgPSBTYXR1cmRheVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQ2xlYW5lckF2YWlsYWJsZUZvckRheShjbGVhbmVyOiBhbnksIGRheU9mV2VlazogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiB0eXBlb2YgY2xlYW5lcj4gPSB7XHJcbiAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2UgJiYgY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBjbGVhbmVyIGhhcyBhIGJvb2tpbmcgY29uZmxpY3QgZm9yIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBzbG90XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhpcyBjbGVhbmVyIG9uIHRoZSBzcGVjaWZpZWQgZGF0ZVxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIEFzc3VtZSBubyBjb25mbGljdCBvbiBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gYm9va2luZ3MsIG5vIGNvbmZsaWN0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIG5ldyBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgIGNvbnN0IFtuZXdTdGFydEhvdXJzLCBuZXdTdGFydE1pbnV0ZXNdID0gc2VydmljZVRpbWUuc3BsaXQoJzonKS5tYXAoTnVtYmVyKTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0VGltZU1pbnV0ZXMgPSBuZXdTdGFydEhvdXJzICogNjAgKyBuZXdTdGFydE1pbnV0ZXM7XHJcbiAgICBjb25zdCBzZXJ2aWNlRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChzZXJ2aWNlRHVyYXRpb24gKiA2MCk7XHJcbiAgICBjb25zdCBuZXdFbmRUaW1lTWludXRlcyA9IG5ld1N0YXJ0VGltZU1pbnV0ZXMgKyBzZXJ2aWNlRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcidcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uXHJcbiAgICAgICAgICA6IHBhcnNlRmxvYXQoYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYm9va2luZ0VuZFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgKyBib29raW5nRHVyYXRpb25NaW51dGVzO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIG92ZXJsYXA6IG5ldyBzdGFydCA8IGV4aXN0aW5nIGVuZCBBTkQgbmV3IGVuZCA+IGV4aXN0aW5nIHN0YXJ0XHJcbiAgICAgIGlmIChuZXdTdGFydFRpbWVNaW51dGVzIDwgYm9va2luZ0VuZFRpbWVNaW51dGVzICYmIG5ld0VuZFRpbWVNaW51dGVzID4gYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gQ29uZmxpY3QgZm91bmRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTsgLy8gTm8gY29uZmxpY3RzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgY2hlY2tpbmcgYm9va2luZyBjb25mbGljdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGZvciBhIGNsZWFuZXIgKHNlcnZlci1zaWRlIHdyYXBwZXIpXHJcbiAqIFRoaXMgY2FsbHMgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNhbGN1bGF0ZXMgY2xpZW50LXNpZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVDbGVhbmVyUmVsaWFiaWxpdHlTY29yZShjbGVhbmVySWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVHJ5IHRvIGNhbGwgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ2NhbGN1bGF0ZV9jbGVhbmVyX3JlbGlhYmlsaXR5X3Njb3JlJywge1xyXG4gICAgICBjbGVhbmVyX2lkOiBjbGVhbmVySWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWVycm9yICYmIGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxsYmFjazogZmV0Y2ggY2xlYW5lciBhbmQgY2FsY3VsYXRlIGNsaWVudC1zaWRlXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGNsZWFuZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFjbGVhbmVyKSB7XHJcbiAgICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lciBhcyBDbGVhbmVyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FsY3VsYXRpbmcgcmVsaWFiaWxpdHkgc2NvcmU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmUgb24gZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIHdpdGggZW5oYW5jZWQgZmlsdGVyaW5nIGNyaXRlcmlhXHJcbiAqIEZpbHRlcnMgYnk6IExvY2F0aW9uLCBBdmFpbGFiaWxpdHksIEJvb2tpbmcgY29uZmxpY3RzXHJcbiAqIFNvcnRzIGJ5OiBSZWxpYWJpbGl0eSBTY29yZSwgUmF0aW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ2xlYW5lcnNXaXRoQ3JpdGVyaWEocGFyYW1zOiB7XHJcbiAgc2VydmljZVN1YnVyYj86IHN0cmluZztcclxuICBzZXJ2aWNlRGF0ZT86IHN0cmluZztcclxuICBzZXJ2aWNlVGltZT86IHN0cmluZztcclxuICBzZXJ2aWNlRHVyYXRpb24/OiBudW1iZXI7XHJcbiAgbWluUmF0aW5nPzogbnVtYmVyO1xyXG4gIG1pblJlbGlhYmlsaXR5U2NvcmU/OiBudW1iZXI7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzZXJ2aWNlU3VidXJiLFxyXG4gICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvbiA9IDMsXHJcbiAgICAgIG1pblJhdGluZyA9IDAsXHJcbiAgICAgIG1pblJlbGlhYmlsaXR5U2NvcmUgPSAwLFxyXG4gICAgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyBCdWlsZCBiYXNlIHF1ZXJ5XHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeS5vcmRlcigncmVsaWFiaWxpdHlfc2NvcmUnLCB7IGFzY2VuZGluZzogZmFsc2UsIG51bGxzRmlyc3Q6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcigncmF0aW5nJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignbmFtZScsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xlYW5lcnMgPSAoZGF0YSB8fCBbXSkgYXMgQ2xlYW5lcltdO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBpc19hdmFpbGFibGVcclxuICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2UpO1xyXG5cclxuICAgIC8vIEZpbHRlciBieSBsb2NhdGlvbiAoc3VidXJiKVxyXG4gICAgaWYgKHNlcnZpY2VTdWJ1cmIgJiYgY2xlYW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzdWJ1cmJMb3dlciA9IHNlcnZpY2VTdWJ1cmIudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gU2VydmUgYWxsIGFyZWFzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhbmVyLmFyZWFzLnNvbWUoKGFyZWE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJlYUxvd2VyID0gYXJlYS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGFyZWFMb3dlci5pbmNsdWRlcyhzdWJ1cmJMb3dlcikgfHwgc3VidXJiTG93ZXIuaW5jbHVkZXMoYXJlYUxvd2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGRheSBvZiB3ZWVrIGF2YWlsYWJpbGl0eSBpZiBkYXRlIGlzIHByb3ZpZGVkXHJcbiAgICBpZiAoc2VydmljZURhdGUpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTsgLy8gMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjLlxyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgQ2xlYW5lcj4gPSB7XHJcbiAgICAgICAgICAwOiAnYXZhaWxhYmxlX3N1bmRheScsXHJcbiAgICAgICAgICAxOiAnYXZhaWxhYmxlX21vbmRheScsXHJcbiAgICAgICAgICAyOiAnYXZhaWxhYmxlX3R1ZXNkYXknLFxyXG4gICAgICAgICAgMzogJ2F2YWlsYWJsZV93ZWRuZXNkYXknLFxyXG4gICAgICAgICAgNDogJ2F2YWlsYWJsZV90aHVyc2RheScsXHJcbiAgICAgICAgICA1OiAnYXZhaWxhYmxlX2ZyaWRheScsXHJcbiAgICAgICAgICA2OiAnYXZhaWxhYmxlX3NhdHVyZGF5JyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRheUZpZWxkID0gZGF5TWFwW2RheU9mV2Vla107XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXJbZGF5RmllbGRdICE9PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmF0aW5nXHJcbiAgICBpZiAobWluUmF0aW5nID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmF0aW5nIHx8IDApID49IG1pblJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IG1pbmltdW0gcmVsaWFiaWxpdHkgc2NvcmVcclxuICAgIGlmIChtaW5SZWxpYWJpbGl0eVNjb3JlID4gMCkge1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gKGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgPj0gbWluUmVsaWFiaWxpdHlTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5yaWNoIGNsZWFuZXJzIHdpdGggYXZhaWxhYmlsaXR5IGFuZCBib29raW5nIGNvbmZsaWN0IGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBlbnJpY2hlZENsZWFuZXJzOiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGNsZWFuZXJzLm1hcChhc3luYyAoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZUZvclNsb3QgPSB0cnVlO1xyXG4gICAgICAgIGxldCBib29raW5nQ29uZmxpY3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYm9va2luZyBjb25mbGljdCBpZiBkYXRlIGFuZCB0aW1lIGFyZSBwcm92aWRlZFxyXG4gICAgICAgIGlmIChzZXJ2aWNlRGF0ZSAmJiBzZXJ2aWNlVGltZSAmJiBzZXJ2aWNlRHVyYXRpb24pIHtcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCA9IGF3YWl0IGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICAgICAgICAgICAgY2xlYW5lci5pZCxcclxuICAgICAgICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRHVyYXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QgPSAhYm9va2luZ0NvbmZsaWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlbGlhYmlsaXR5IHNjb3JlIGlmIG5vdCBwcmVzZW50XHJcbiAgICAgICAgY29uc3QgcmVsaWFiaWxpdHlTY29yZSA9IGNsZWFuZXIucmVsaWFiaWxpdHlfc2NvcmUgPz8gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNsZWFuZXIsXHJcbiAgICAgICAgICByZWxpYWJpbGl0eV9zY29yZTogcmVsaWFiaWxpdHlTY29yZSxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCxcclxuICAgICAgICAgIGJvb2tpbmdDb25mbGljdCxcclxuICAgICAgICAgIGNvbXBsZXRpb25SYXRlOiBjYWxjdWxhdGVDb21wbGV0aW9uUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICAgIG9uVGltZVJhdGU6IGNhbGN1bGF0ZU9uVGltZVJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gU29ydCBieSByZWxpYWJpbGl0eSBzY29yZSBhbmQgcmF0aW5nIChhbHJlYWR5IHNvcnRlZCBieSBxdWVyeSwgYnV0IGVuc3VyZSBjb25zaXN0ZW5jeSlcclxuICAgIGVucmljaGVkQ2xlYW5lcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBzY29yZUEgPSAoYS5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChhLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgY29uc3Qgc2NvcmVCID0gKGIucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYi5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIHJldHVybiBzY29yZUIgLSBzY29yZUE7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyczogZW5yaWNoZWRDbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzIHdpdGggY3JpdGVyaWE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQTZPc0IsaU1BQUEifQ==
}),
"[project]/app/booking/submit/[serviceSlug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingSubmitPageWithSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/context/BookingFormContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$Step3ContactReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/components/Step3ContactReview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$c9745b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:c9745b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$2d5837__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:2d5837 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$a1f414__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:a1f414 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$efce58__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:efce58 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$6f8c80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:6f8c80 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing/calculator-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
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
function BookingSubmitPageWithSlugContent() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const serviceSlug = params.serviceSlug;
    const { formData, updateFormData, validateCurrentStep, previousStep, getDiscountAmount, setDiscountAmount: setDiscountAmountStorage, setServicesForSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingFormContext"])();
    // Initialize to 0 to match server render and prevent hydration mismatch
    const [discountAmount, setDiscountAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentBookingId, setCurrentBookingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Track previous serviceId to detect changes
    const previousServiceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(formData.serviceId);
    // Fetch services to validate slug
    const { data: services = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'services'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$efce58__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
        staleTime: 5 * 60 * 1000
    });
    // Set services in hook for slug generation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (services.length > 0) {
            setServicesForSlug(services);
        }
    }, [
        services,
        setServicesForSlug
    ]);
    // Read and store referral code from URL parameter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const refCode = searchParams.get('ref');
        if (refCode && !formData.referralCode) {
            // Store referral code in form data
            updateFormData({
                referralCode: refCode
            });
            // Also store in localStorage for persistence
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }, [
        searchParams,
        formData.referralCode,
        updateFormData
    ]);
    // Validate service slug and set service in form data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (services.length > 0) {
            if (!serviceSlug) {
                // No slug, redirect to details
                router.replace('/booking/details');
                return;
            }
            const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findServiceBySlug"])(services, serviceSlug);
            if (!service) {
                // Invalid slug, redirect to details
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Invalid service selected');
                router.replace('/booking/details');
                return;
            }
            // Ensure service is set in form data (don't redirect if not set - it will be set)
            if (!formData.serviceId || formData.serviceId !== service.id) {
                updateFormData({
                    serviceId: service.id
                });
            }
        }
    // Only run when services load or slug changes, not on every formData change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        serviceSlug,
        services.length
    ]);
    // Sync discount amount from localStorage after mount to prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateDiscount = ()=>{
            setDiscountAmount(getDiscountAmount());
        };
        // Listen for custom event when discount is updated
        window.addEventListener('discountUpdated', updateDiscount);
        // Initial load - read from localStorage after mount
        updateDiscount();
        return ()=>{
            window.removeEventListener('discountUpdated', updateDiscount);
        };
    }, [
        getDiscountAmount
    ]);
    // Reset service-specific fields when service changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const previousServiceId = previousServiceIdRef.current;
        const currentServiceId = formData.serviceId;
        // Only reset if service actually changed (not on initial load)
        if (previousServiceId && previousServiceId !== currentServiceId) {
            updateFormData({
                additionalServices: [],
                bedrooms: '0',
                bathrooms: '1',
                carpetTypes: [],
                roomStatus: '',
                numberOfFittedRooms: '',
                numberOfLooseCarpets: '',
                cleaningEquipment: '',
                serviceDate: '',
                serviceTime: '',
                serviceDuration: 3.5,
                discountCode: ''
            });
            setDiscountAmount(0);
        }
        // Update the ref for next comparison
        previousServiceIdRef.current = currentServiceId;
    }, [
        formData.serviceId,
        updateFormData
    ]);
    // Fetch and cache pricing rules
    const { data: pricingRules = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'pricing-rules'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPricingRulesClient"],
        staleTime: 10 * 60 * 1000
    });
    // Fetch additional services based on selected service
    const { data: additionalServices = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'additional-services',
            formData.serviceId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$6f8c80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdditionalServices"])(formData.serviceId || undefined),
        enabled: true,
        staleTime: 5 * 60 * 1000
    });
    const selectedService = services.find((s)=>s.id === formData.serviceId);
    // Check if selected service is carpet cleaning
    const isCarpetCleaning = selectedService?.name.toLowerCase().includes('carpet') ?? false;
    // Calculate price breakdown instantly using cached pricing rules
    // This is memoized and recalculates automatically when dependencies change
    // Updates in real-time when cleaningFrequency changes (weekly, bi-weekly, monthly, one-time)
    const priceBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const hasRequiredData = isCarpetCleaning ? formData.serviceId && pricingRules.length > 0 : formData.serviceId && formData.bedrooms && formData.bathrooms && pricingRules.length > 0;
        if (!hasRequiredData) {
            return {
                basePrice: 0,
                bedroomsPrice: 0,
                bathroomsPrice: 0,
                fittedRoomsPrice: 0,
                looseCarpetsPrice: 0,
                additionalServicesPrice: 0,
                equipmentSupplyPrice: 0,
                additionalCleanersPrice: 0,
                subtotal: 0,
                frequencyDiscountPercent: 0,
                frequencyDiscountAmount: 0,
                discountAmount,
                serviceFee: 0,
                totalAmount: 0
            };
        }
        const relevantAdditionalServiceIds = formData.additionalServices.filter((serviceId)=>additionalServices.some((s)=>s.id === serviceId));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePriceBreakdownClient"])(pricingRules, formData.serviceId, formData.bedrooms || '0', formData.bathrooms || '1', relevantAdditionalServiceIds, formData.cleaningFrequency, discountAmount, formData.numberOfFittedRooms || '', formData.numberOfLooseCarpets || '', isCarpetCleaning, selectedService?.name, formData.cleaningEquipment, formData.numberOfCleaners || 1);
    }, [
        pricingRules,
        formData.serviceId,
        formData.bedrooms,
        formData.bathrooms,
        // Use JSON.stringify for array dependency to ensure proper change detection
        JSON.stringify(formData.additionalServices),
        formData.cleaningFrequency,
        formData.numberOfFittedRooms,
        formData.numberOfLooseCarpets,
        formData.cleaningEquipment,
        formData.numberOfCleaners,
        discountAmount,
        isCarpetCleaning,
        additionalServices,
        selectedService?.name
    ]);
    const handleValidateDiscountCode = async (code)=>{
        if (!code.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Please enter a discount code');
            return;
        }
        const subtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$a1f414__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateDiscountCode"])(code, subtotal);
        if (result.valid) {
            updateFormData({
                discountCode: code
            });
            setDiscountAmount(result.discountAmount);
            setDiscountAmountStorage(result.discountAmount);
            window.dispatchEvent(new Event('discountUpdated'));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Discount code applied successfully!');
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || 'Invalid discount code');
        }
    };
    const handleProceedToPayment = async ()=>{
        const validation = validateCurrentStep();
        if (!validation.valid) {
            validation.errors.forEach((error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error));
            return;
        }
        setIsProcessing(true);
        try {
            const draftResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$c9745b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBookingDraft"])(formData);
            if (!draftResult.success || !draftResult.bookingId && !draftResult.bookingIds) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(draftResult.error || 'Failed to create booking');
                setIsProcessing(false);
                return;
            }
            // Use bookingIds if available (for recurring bookings), otherwise use single bookingId
            const bookingIds = draftResult.bookingIds || (draftResult.bookingId ? [
                draftResult.bookingId
            ] : []);
            setCurrentBookingId(bookingIds[0]);
            // If user wants to use credits, deduct them first
            if (formData.useCredits && formData.creditsAmount && formData.creditsAmount > 0) {
                try {
                    const creditsResponse = await fetch('/api/bookings/use-credits', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            bookingIds,
                            creditsAmount: formData.creditsAmount
                        })
                    });
                    const creditsData = await creditsResponse.json();
                    if (!creditsResponse.ok || !creditsData.success) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(creditsData.error || 'Failed to use ShaleanCred');
                        setIsProcessing(false);
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Applied R${formData.creditsAmount.toFixed(2)} ShaleanCred to your booking`);
                } catch (error) {
                    console.error('Error using credits:', error);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to use ShaleanCred. Please try again.');
                    setIsProcessing(false);
                    return;
                }
            }
            // Initialize payment (pass array or single ID)
            // This will check for credits_used and handle full/partial payment accordingly
            const paymentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$2d5837__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["initializePaymentForBooking"])(bookingIds.length > 1 ? bookingIds : bookingIds[0]);
            if (!paymentResult.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(paymentResult.error || 'Failed to initialize payment');
                setIsProcessing(false);
                return;
            }
            // If no authorization URL, payment is fully covered by credits - redirect to success
            if (!paymentResult.authorizationUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Booking confirmed! Payment completed with ShaleanCred.');
                // Redirect to booking confirmation
                router.push(`/booking/confirmation/${bookingIds[0]}`);
                return;
            }
            // Partial or full Paystack payment needed - redirect to Paystack
            window.location.href = paymentResult.authorizationUrl;
        } catch (error) {
            console.error('Error processing payment:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred. Please try again.');
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$Step3ContactReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Step3ContactReview"], {
                    formData: formData,
                    priceBreakdown: priceBreakdown,
                    updateFormData: updateFormData,
                    onValidateDiscountCode: handleValidateDiscountCode,
                    onProceedToPayment: handleProceedToPayment,
                    isProcessing: isProcessing
                }, void 0, false, {
                    fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between max-w-[576px] mx-auto mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    onClick: ()=>{
                        if (serviceSlug) {
                            const refCode = formData.referralCode || searchParams.get('ref');
                            const backUrl = refCode ? `/booking/worker/${serviceSlug}?ref=${refCode}` : `/booking/worker/${serviceSlug}`;
                            router.push(backUrl);
                        } else {
                            previousStep();
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function BookingSubmitPageWithSlug() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingSubmitPageWithSlugContent, {}, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 367,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_723e8240._.js.map