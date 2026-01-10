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
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Please review your booking details before confirming."
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 150,
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
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 157,
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
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            cleaners.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: cleaners.map((cleaner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-base",
                                        children: cleaner.name
                                    }, cleaner.id, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                children: "No preference - Best available"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 163,
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
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 178,
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
                                            lineNumber: 186,
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
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 156,
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
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 212,
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
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 222,
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
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Last Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 234,
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
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Email Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 246,
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
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Phone Number *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 259,
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
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 271,
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
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 211,
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
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 297,
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
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-foreground",
                                            children: serviceName
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 311,
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
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 306,
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
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Carpet Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 324,
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
                                                            lineNumber: 331,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.carpetTypes.join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfFittedRooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Fitted Rooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfFittedRooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfLooseCarpets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Loose Carpets/Rugs: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfLooseCarpets
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 23
                                                }, this),
                                                formData.roomStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Room Status: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.roomStatus.replace(/-/g, ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 323,
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
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Property Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 360,
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
                                                            lineNumber: 366,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bedrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Bathrooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bathrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 364,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 359,
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
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Additional Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: selectedAdditionalServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20",
                                                    children: service.name
                                                }, service.id, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 380,
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
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 407,
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
                                                            lineNumber: 409,
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
                                                            lineNumber: 411,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
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
                                        formData.cleaningEquipment === 'yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 418,
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
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        formData.serviceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 429,
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
                                                            lineNumber: 431,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 400,
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
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Schedule"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 440,
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
                                                            lineNumber: 446,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(formData.serviceDate), 'EEE, MMM d, yyyy') : 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 445,
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
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceTime || 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 294,
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
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: shouldCalculateRecurringTotal ? `${getFrequencyLabel()} recurring - All fees included` : isRecurring && !hasServiceDate ? 'Select a date to see monthly total' : 'All fees included'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-primary",
                                    children: [
                                        "R",
                                        shouldCalculateRecurringTotal ? recurringTotal.toFixed(2) : (priceBreakdown.totalAmount + tipAmount).toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 463,
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
                        lineNumber: 485,
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
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "R",
                                            Math.max(0, finalSubtotal).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 491,
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
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            priceBreakdown.serviceFee.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 495,
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
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            tipAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 490,
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
                                lineNumber: 511,
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
                                        lineNumber: 513,
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
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-muted-foreground mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Secure payment powered by Paystack"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 531,
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
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/booking/book/data:76dc7c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuICAgIFxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gZmlyc3RCb29raW5nLnBheXN0YWNrX3JlZmVyZW5jZSB8fCBgJHtmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXJ9JHtEYXRlLm5vdygpfWA7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgUGF5c3RhY2sgcGF5bWVudCB3aXRoIHRvdGFsIGFtb3VudFxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgdG90YWxBbW91bnQsXHJcbiAgICAgIHJlZmVyZW5jZSxcclxuICAgICAge1xyXG4gICAgICAgIGJvb2tpbmdfaWRzOiBib29raW5nSWRzLFxyXG4gICAgICAgIGJvb2tpbmdfaWQ6IGZpcnN0Qm9va2luZy5pZCwgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXIsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgdGhhdCB3YXMgYWN0dWFsbHkgcmV0dXJuZWRcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24nKVxyXG4gICAgICAuZXEoJ3ByZWZlcnJlZF9jbGVhbmVyX2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfZGF0ZScsIHNlcnZpY2VEYXRlKVxyXG4gICAgICAuaW4oJ3N0YXR1cycsIFsncGVuZGluZycsICdjb25maXJtZWQnXSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3RzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgbm8gY29uZmxpY3Qgb24gZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGJvb2tpbmdzLCBubyBjb25mbGljdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBDaGVjayBlYWNoIGV4aXN0aW5nIGJvb2tpbmcgZm9yIG92ZXJsYXBcclxuICAgIGZvciAoY29uc3QgYm9va2luZyBvZiBib29raW5ncykge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuc2VydmljZV90aW1lKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgICBjb25zdCBbYm9va2luZ1N0YXJ0SG91cnMsIGJvb2tpbmdTdGFydE1pbnV0ZXNdID0gYm9va2luZy5zZXJ2aWNlX3RpbWVcclxuICAgICAgICAuc3BsaXQoJzonKVxyXG4gICAgICAgIC5zbGljZSgwLCAyKVxyXG4gICAgICAgIC5tYXAoTnVtYmVyKTtcclxuICAgICAgY29uc3QgYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRIb3VycyAqIDYwICsgYm9va2luZ1N0YXJ0TWludXRlcztcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgZHVyYXRpb25cclxuICAgICAgY29uc3QgYm9va2luZ0R1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKHR5cGVvZiBib29raW5nLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvblxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIENvbmZsaWN0IGZvdW5kXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGNvbmZsaWN0c1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBmb3IgYSBjbGVhbmVyIChzZXJ2ZXItc2lkZSB3cmFwcGVyKVxyXG4gKiBUaGlzIGNhbGxzIHRoZSBkYXRhYmFzZSBmdW5jdGlvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBjYWxjdWxhdGVzIGNsaWVudC1zaWRlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQ2xlYW5lclJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcklkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFRyeSB0byBjYWxsIHRoZSBkYXRhYmFzZSBmdW5jdGlvblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UucnBjKCdjYWxjdWxhdGVfY2xlYW5lcl9yZWxpYWJpbGl0eV9zY29yZScsIHtcclxuICAgICAgY2xlYW5lcl9pZDogY2xlYW5lcklkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlcnJvciAmJiBkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbGJhY2s6IGZldGNoIGNsZWFuZXIgYW5kIGNhbGN1bGF0ZSBjbGllbnQtc2lkZVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhY2xlYW5lcikge1xyXG4gICAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIgYXMgQ2xlYW5lcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHJlbGlhYmlsaXR5IHNjb3JlOicsIGVycm9yKTtcclxuICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlIG9uIGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGF2YWlsYWJsZSBjbGVhbmVycyB3aXRoIGVuaGFuY2VkIGZpbHRlcmluZyBjcml0ZXJpYVxyXG4gKiBGaWx0ZXJzIGJ5OiBMb2NhdGlvbiwgQXZhaWxhYmlsaXR5LCBCb29raW5nIGNvbmZsaWN0c1xyXG4gKiBTb3J0cyBieTogUmVsaWFiaWxpdHkgU2NvcmUsIFJhdGluZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzV2l0aENyaXRlcmlhKHBhcmFtczoge1xyXG4gIHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmc7XHJcbiAgc2VydmljZURhdGU/OiBzdHJpbmc7XHJcbiAgc2VydmljZVRpbWU/OiBzdHJpbmc7XHJcbiAgc2VydmljZUR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIG1pblJhdGluZz86IG51bWJlcjtcclxuICBtaW5SZWxpYWJpbGl0eVNjb3JlPzogbnVtYmVyO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2VydmljZVN1YnVyYixcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICBzZXJ2aWNlRHVyYXRpb24gPSAzLFxyXG4gICAgICBtaW5SYXRpbmcgPSAwLFxyXG4gICAgICBtaW5SZWxpYWJpbGl0eVNjb3JlID0gMCxcclxuICAgIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8gQnVpbGQgYmFzZSBxdWVyeVxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnkub3JkZXIoJ3JlbGlhYmlsaXR5X3Njb3JlJywgeyBhc2NlbmRpbmc6IGZhbHNlLCBudWxsc0ZpcnN0OiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gKGRhdGEgfHwgW10pIGFzIENsZWFuZXJbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbG9jYXRpb24gKHN1YnVyYilcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGlmICghY2xlYW5lci5hcmVhcyB8fCBjbGVhbmVyLmFyZWFzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIFNlcnZlIGFsbCBhcmVhc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBkYXkgb2Ygd2VlayBhdmFpbGFiaWxpdHkgaWYgZGF0ZSBpcyBwcm92aWRlZFxyXG4gICAgaWYgKHNlcnZpY2VEYXRlKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzZXJ2aWNlRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPSBTdW5kYXksIDEgPSBNb25kYXksIGV0Yy5cclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXlNYXA6IFJlY29yZDxudW1iZXIsIGtleW9mIENsZWFuZXI+ID0ge1xyXG4gICAgICAgICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgICAgICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgICAgICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgICAgICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgICAgICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgICAgICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgICAgICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gICAgICAgIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJhdGluZ1xyXG4gICAgaWYgKG1pblJhdGluZyA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJhdGluZyB8fCAwKSA+PSBtaW5SYXRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJlbGlhYmlsaXR5IHNjb3JlXHJcbiAgICBpZiAobWluUmVsaWFiaWxpdHlTY29yZSA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApID49IG1pblJlbGlhYmlsaXR5U2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVucmljaCBjbGVhbmVycyB3aXRoIGF2YWlsYWJpbGl0eSBhbmQgYm9va2luZyBjb25mbGljdCBpbmZvcm1hdGlvblxyXG4gICAgY29uc3QgZW5yaWNoZWRDbGVhbmVyczogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBjbGVhbmVycy5tYXAoYXN5bmMgKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBsZXQgaXNBdmFpbGFibGVGb3JTbG90ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYm9va2luZ0NvbmZsaWN0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGJvb2tpbmcgY29uZmxpY3QgaWYgZGF0ZSBhbmQgdGltZSBhcmUgcHJvdmlkZWRcclxuICAgICAgICBpZiAoc2VydmljZURhdGUgJiYgc2VydmljZVRpbWUgJiYgc2VydmljZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QgPSBhd2FpdCBjaGVja0NsZWFuZXJCb29raW5nQ29uZmxpY3QoXHJcbiAgICAgICAgICAgIGNsZWFuZXIuaWQsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICAgICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90ID0gIWJvb2tpbmdDb25mbGljdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBpZiBub3QgcHJlc2VudFxyXG4gICAgICAgIGNvbnN0IHJlbGlhYmlsaXR5U2NvcmUgPSBjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlID8/IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jbGVhbmVyLFxyXG4gICAgICAgICAgcmVsaWFiaWxpdHlfc2NvcmU6IHJlbGlhYmlsaXR5U2NvcmUsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QsXHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QsXHJcbiAgICAgICAgICBjb21wbGV0aW9uUmF0ZTogY2FsY3VsYXRlQ29tcGxldGlvblJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgICBvblRpbWVSYXRlOiBjYWxjdWxhdGVPblRpbWVSYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNvcnQgYnkgcmVsaWFiaWxpdHkgc2NvcmUgYW5kIHJhdGluZyAoYWxyZWFkeSBzb3J0ZWQgYnkgcXVlcnksIGJ1dCBlbnN1cmUgY29uc2lzdGVuY3kpXHJcbiAgICBlbnJpY2hlZENsZWFuZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgY29uc3Qgc2NvcmVBID0gKGEucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYS5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIGNvbnN0IHNjb3JlQiA9IChiLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGIucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICByZXR1cm4gc2NvcmVCIC0gc2NvcmVBO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xlYW5lcnM6IGVucmljaGVkQ2xlYW5lcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBjbGVhbmVycyB3aXRoIGNyaXRlcmlhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0FtVHNCLCtMQUFBIn0=
}),
"[project]/app/booking/book/data:57988b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuICAgIFxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gZmlyc3RCb29raW5nLnBheXN0YWNrX3JlZmVyZW5jZSB8fCBgJHtmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXJ9JHtEYXRlLm5vdygpfWA7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgUGF5c3RhY2sgcGF5bWVudCB3aXRoIHRvdGFsIGFtb3VudFxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgdG90YWxBbW91bnQsXHJcbiAgICAgIHJlZmVyZW5jZSxcclxuICAgICAge1xyXG4gICAgICAgIGJvb2tpbmdfaWRzOiBib29raW5nSWRzLFxyXG4gICAgICAgIGJvb2tpbmdfaWQ6IGZpcnN0Qm9va2luZy5pZCwgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXIsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgdGhhdCB3YXMgYWN0dWFsbHkgcmV0dXJuZWRcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24nKVxyXG4gICAgICAuZXEoJ3ByZWZlcnJlZF9jbGVhbmVyX2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfZGF0ZScsIHNlcnZpY2VEYXRlKVxyXG4gICAgICAuaW4oJ3N0YXR1cycsIFsncGVuZGluZycsICdjb25maXJtZWQnXSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3RzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgbm8gY29uZmxpY3Qgb24gZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGJvb2tpbmdzLCBubyBjb25mbGljdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBDaGVjayBlYWNoIGV4aXN0aW5nIGJvb2tpbmcgZm9yIG92ZXJsYXBcclxuICAgIGZvciAoY29uc3QgYm9va2luZyBvZiBib29raW5ncykge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuc2VydmljZV90aW1lKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgICBjb25zdCBbYm9va2luZ1N0YXJ0SG91cnMsIGJvb2tpbmdTdGFydE1pbnV0ZXNdID0gYm9va2luZy5zZXJ2aWNlX3RpbWVcclxuICAgICAgICAuc3BsaXQoJzonKVxyXG4gICAgICAgIC5zbGljZSgwLCAyKVxyXG4gICAgICAgIC5tYXAoTnVtYmVyKTtcclxuICAgICAgY29uc3QgYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRIb3VycyAqIDYwICsgYm9va2luZ1N0YXJ0TWludXRlcztcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgZHVyYXRpb25cclxuICAgICAgY29uc3QgYm9va2luZ0R1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKHR5cGVvZiBib29raW5nLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvblxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIENvbmZsaWN0IGZvdW5kXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGNvbmZsaWN0c1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBmb3IgYSBjbGVhbmVyIChzZXJ2ZXItc2lkZSB3cmFwcGVyKVxyXG4gKiBUaGlzIGNhbGxzIHRoZSBkYXRhYmFzZSBmdW5jdGlvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBjYWxjdWxhdGVzIGNsaWVudC1zaWRlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQ2xlYW5lclJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcklkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFRyeSB0byBjYWxsIHRoZSBkYXRhYmFzZSBmdW5jdGlvblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UucnBjKCdjYWxjdWxhdGVfY2xlYW5lcl9yZWxpYWJpbGl0eV9zY29yZScsIHtcclxuICAgICAgY2xlYW5lcl9pZDogY2xlYW5lcklkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlcnJvciAmJiBkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbGJhY2s6IGZldGNoIGNsZWFuZXIgYW5kIGNhbGN1bGF0ZSBjbGllbnQtc2lkZVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhY2xlYW5lcikge1xyXG4gICAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIgYXMgQ2xlYW5lcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHJlbGlhYmlsaXR5IHNjb3JlOicsIGVycm9yKTtcclxuICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlIG9uIGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGF2YWlsYWJsZSBjbGVhbmVycyB3aXRoIGVuaGFuY2VkIGZpbHRlcmluZyBjcml0ZXJpYVxyXG4gKiBGaWx0ZXJzIGJ5OiBMb2NhdGlvbiwgQXZhaWxhYmlsaXR5LCBCb29raW5nIGNvbmZsaWN0c1xyXG4gKiBTb3J0cyBieTogUmVsaWFiaWxpdHkgU2NvcmUsIFJhdGluZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzV2l0aENyaXRlcmlhKHBhcmFtczoge1xyXG4gIHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmc7XHJcbiAgc2VydmljZURhdGU/OiBzdHJpbmc7XHJcbiAgc2VydmljZVRpbWU/OiBzdHJpbmc7XHJcbiAgc2VydmljZUR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIG1pblJhdGluZz86IG51bWJlcjtcclxuICBtaW5SZWxpYWJpbGl0eVNjb3JlPzogbnVtYmVyO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2VydmljZVN1YnVyYixcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICBzZXJ2aWNlRHVyYXRpb24gPSAzLFxyXG4gICAgICBtaW5SYXRpbmcgPSAwLFxyXG4gICAgICBtaW5SZWxpYWJpbGl0eVNjb3JlID0gMCxcclxuICAgIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8gQnVpbGQgYmFzZSBxdWVyeVxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnkub3JkZXIoJ3JlbGlhYmlsaXR5X3Njb3JlJywgeyBhc2NlbmRpbmc6IGZhbHNlLCBudWxsc0ZpcnN0OiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gKGRhdGEgfHwgW10pIGFzIENsZWFuZXJbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbG9jYXRpb24gKHN1YnVyYilcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGlmICghY2xlYW5lci5hcmVhcyB8fCBjbGVhbmVyLmFyZWFzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIFNlcnZlIGFsbCBhcmVhc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBkYXkgb2Ygd2VlayBhdmFpbGFiaWxpdHkgaWYgZGF0ZSBpcyBwcm92aWRlZFxyXG4gICAgaWYgKHNlcnZpY2VEYXRlKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzZXJ2aWNlRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPSBTdW5kYXksIDEgPSBNb25kYXksIGV0Yy5cclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXlNYXA6IFJlY29yZDxudW1iZXIsIGtleW9mIENsZWFuZXI+ID0ge1xyXG4gICAgICAgICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgICAgICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgICAgICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgICAgICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgICAgICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgICAgICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgICAgICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gICAgICAgIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJhdGluZ1xyXG4gICAgaWYgKG1pblJhdGluZyA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJhdGluZyB8fCAwKSA+PSBtaW5SYXRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJlbGlhYmlsaXR5IHNjb3JlXHJcbiAgICBpZiAobWluUmVsaWFiaWxpdHlTY29yZSA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApID49IG1pblJlbGlhYmlsaXR5U2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVucmljaCBjbGVhbmVycyB3aXRoIGF2YWlsYWJpbGl0eSBhbmQgYm9va2luZyBjb25mbGljdCBpbmZvcm1hdGlvblxyXG4gICAgY29uc3QgZW5yaWNoZWRDbGVhbmVyczogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBjbGVhbmVycy5tYXAoYXN5bmMgKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBsZXQgaXNBdmFpbGFibGVGb3JTbG90ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYm9va2luZ0NvbmZsaWN0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGJvb2tpbmcgY29uZmxpY3QgaWYgZGF0ZSBhbmQgdGltZSBhcmUgcHJvdmlkZWRcclxuICAgICAgICBpZiAoc2VydmljZURhdGUgJiYgc2VydmljZVRpbWUgJiYgc2VydmljZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QgPSBhd2FpdCBjaGVja0NsZWFuZXJCb29raW5nQ29uZmxpY3QoXHJcbiAgICAgICAgICAgIGNsZWFuZXIuaWQsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICAgICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90ID0gIWJvb2tpbmdDb25mbGljdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBpZiBub3QgcHJlc2VudFxyXG4gICAgICAgIGNvbnN0IHJlbGlhYmlsaXR5U2NvcmUgPSBjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlID8/IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jbGVhbmVyLFxyXG4gICAgICAgICAgcmVsaWFiaWxpdHlfc2NvcmU6IHJlbGlhYmlsaXR5U2NvcmUsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QsXHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QsXHJcbiAgICAgICAgICBjb21wbGV0aW9uUmF0ZTogY2FsY3VsYXRlQ29tcGxldGlvblJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgICBvblRpbWVSYXRlOiBjYWxjdWxhdGVPblRpbWVSYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNvcnQgYnkgcmVsaWFiaWxpdHkgc2NvcmUgYW5kIHJhdGluZyAoYWxyZWFkeSBzb3J0ZWQgYnkgcXVlcnksIGJ1dCBlbnN1cmUgY29uc2lzdGVuY3kpXHJcbiAgICBlbnJpY2hlZENsZWFuZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgY29uc3Qgc2NvcmVBID0gKGEucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYS5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIGNvbnN0IHNjb3JlQiA9IChiLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGIucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICByZXR1cm4gc2NvcmVCIC0gc2NvcmVBO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xlYW5lcnM6IGVucmljaGVkQ2xlYW5lcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBjbGVhbmVycyB3aXRoIGNyaXRlcmlhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0E0Z0JzQix3TUFBQSJ9
}),
"[project]/app/booking/book/data:307da4 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGVuZGluZyBvciBjb25maXJtZWQgYm9va2luZ3MgKGV4Y2x1ZGUgY2FuY2VsbGVkL2NvbXBsZXRlZClcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24sIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIG51bWJlcl9vZl9jbGVhbmVycycpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhdmFpbGFibGUgKG9wdGltaXN0aWMgYXBwcm9hY2gpXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIE5vIGJvb2tpbmdzIGZvciB0aGlzIGRhdGUsIGFsbCBjbGVhbmVycyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogdG90YWxDbGVhbmVycyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBUcmFjayB3aGljaCBjbGVhbmVycyBhcmUgYm9va2VkIChieSBJRClcclxuICAgIGNvbnN0IGJvb2tlZENsZWFuZXJJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyBcclxuICAgICAgICAgID8gYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uIFxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgLy8gVGhlcmUncyBhbiBvdmVybGFwXHJcbiAgICAgICAgLy8gQ2hlY2sgcHJlZmVycmVkX2NsZWFuZXJfaWRzIGZpcnN0IChuZXcgbXVsdGktY2xlYW5lciBzdXBwb3J0KVxyXG4gICAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgICAgLy8gTXVsdGlwbGUgY2xlYW5lcnMgYXJlIGFzc2lnbmVkXHJcbiAgICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChjbGVhbmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lcklkKSBib29rZWRDbGVhbmVySWRzLmFkZChjbGVhbmVySWQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgICAvLyBTaW5nbGUgY2xlYW5lciBhc3NpZ25lZCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgICAgIGJvb2tlZENsZWFuZXJJZHMuYWRkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBubyBwcmVmZXJyZWQgY2xlYW5lciwgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBjb3VudCBnZW5lcmljIGNsZWFuZXIgc2xvdHNcclxuICAgICAgICAgIC8vIFRoaXMgaGFuZGxlcyBib29raW5ncyB3aXRob3V0IHNwZWNpZmljIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgICAgICAgIGNvbnN0IG51bUNsZWFuZXJzID0gYm9va2luZy5udW1iZXJfb2ZfY2xlYW5lcnMgfHwgMTtcclxuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBzcGVjaWZpYyBJRHMgaGVyZSwgYnV0IGNvdW50IHRoZW0gaW4gYm9va2luZ3NXaXRob3V0UHJlZmVycmVkQ2xlYW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBhdmFpbGFibGUgY2xlYW5lcnNcclxuICAgIC8vIENvdW50IGJvb2tpbmdzIHdpdGhvdXQgcHJlZmVycmVkIGNsZWFuZXJzIChnZW5lcmljIGFzc2lnbm1lbnRzKVxyXG4gICAgLy8gVGhlc2UgdXNlIG51bWJlcl9vZl9jbGVhbmVycyB0byBkZXRlcm1pbmUgaG93IG1hbnkgY2xlYW5lciBzbG90cyBhcmUgdGFrZW5cclxuICAgIGNvbnN0IGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXIgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUHJlZmVycmVkQ2xlYW5lcnMgPSAoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShiLnByZWZlcnJlZF9jbGVhbmVyX2lkcykgJiYgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMubGVuZ3RoID4gMCkgfHwgYi5wcmVmZXJyZWRfY2xlYW5lcl9pZDtcclxuICAgICAgICBpZiAoaGFzUHJlZmVycmVkQ2xlYW5lcnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgdGltZSBvdmVybGFwXHJcbiAgICAgICAgY29uc3QgW2hvdXJzLCBtaW5zXSA9IGIuc2VydmljZV90aW1lLnNwbGl0KCc6Jykuc2xpY2UoMCwgMikubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VycyAqIDYwICsgbWlucztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKHR5cGVvZiBiLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInID8gYi5zZXJ2aWNlX2R1cmF0aW9uIDogcGFyc2VGbG9hdChiLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MCk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gbmV3U3RhcnRUaW1lTWludXRlcyA8IGVuZCAmJiBuZXdFbmRUaW1lTWludXRlcyA+IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICApLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIC8vIFN1bSB1cCB0aGUgbnVtYmVyX29mX2NsZWFuZXJzIGZvciBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICByZXR1cm4gc3VtICsgKGIubnVtYmVyX29mX2NsZWFuZXJzIHx8IDEpO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVDbGVhbmVycyA9IGJvb2tlZENsZWFuZXJJZHMuc2l6ZSArIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXI7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDbGVhbmVyc0NvdW50ID0gTWF0aC5tYXgoMCwgdG90YWxDbGVhbmVycyAtIHVuYXZhaWxhYmxlQ2xlYW5lcnMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZTogYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA+IDAsXHJcbiAgICAgIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGNsZWFuZXIgYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBDaGVjayBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggdGltZSBzbG90IGluIHBhcmFsbGVsXHJcbiAgLy8gVXNlIHRoZSBzZXJ2aWNlIGR1cmF0aW9uIHByb3ZpZGVkIChlaXRoZXIgZnJvbSBmb3JtIGRhdGEgb3IgY2FsY3VsYXRlZClcclxuICBjb25zdCBwcm9taXNlcyA9IHdvcmtpbmdIb3Vycy5tYXAoYXN5bmMgKGhvdXIpID0+IHtcclxuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc2VydmljZSBkdXJhdGlvbiwgbm90IHRoZSB3b3JraW5nIGhvdXIncyBkdXJhdGlvblxyXG4gICAgLy8gVGhlIHdvcmtpbmcgaG91ciBkdXJhdGlvbiBpcyBqdXN0IHRoZSBzbG90IGxlbmd0aCwgYnV0IHRoZSBhY3R1YWwgYm9va2luZ1xyXG4gICAgLy8gd2lsbCB1c2UgdGhlIHNlcnZpY2UgZHVyYXRpb24gZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc3Qgc2xvdEF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrQ2xlYW5lckF2YWlsYWJpbGl0eUZvclNsb3QoXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBob3VyLnN0YXJ0X3RpbWUsXHJcbiAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IHRpbWU6IGhvdXIuc3RhcnRfdGltZSwgYXZhaWxhYmlsaXR5OiBzbG90QXZhaWxhYmlsaXR5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgcmVzdWx0cy5mb3JFYWNoKCh7IHRpbWUsIGF2YWlsYWJpbGl0eTogYXZhaWwgfSkgPT4ge1xyXG4gICAgYXZhaWxhYmlsaXR5W3RpbWVdID0gYXZhaWw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBkaXNjb3VudCBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVEaXNjb3VudENvZGUoY29kZTogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcbiAgZGlzY291bnRBbW91bnQ6IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNvZGUgfHwgIWNvZGUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdkaXNjb3VudF9jb2RlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2NvZGUnLCBjb2RlLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdJbnZhbGlkIGRpc2NvdW50IGNvZGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdmFsaWRpdHkgZGF0ZXNcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB2YWxpZEZyb20gPSBuZXcgRGF0ZShkYXRhLnZhbGlkX2Zyb20pO1xyXG4gICAgY29uc3QgdmFsaWRVbnRpbCA9IG5ldyBEYXRlKGRhdGEudmFsaWRfdW50aWwpO1xyXG5cclxuICAgIGlmIChub3cgPCB2YWxpZEZyb20gfHwgbm93ID4gdmFsaWRVbnRpbCkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Rpc2NvdW50IGNvZGUgaGFzIGV4cGlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWF4IHVzZXNcclxuICAgIGlmIChkYXRhLm1heF91c2VzICYmIGRhdGEudXNlZF9jb3VudCA+PSBkYXRhLm1heF91c2VzKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgcmVhY2hlZCBtYXhpbXVtIHVzZXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgbWluIHB1cmNoYXNlIGFtb3VudFxyXG4gICAgaWYgKGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCAmJiBzdWJ0b3RhbCA8IGRhdGEubWluX3B1cmNoYXNlX2Ftb3VudCkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICB2YWxpZDogZmFsc2UsIFxyXG4gICAgICAgIGRpc2NvdW50QW1vdW50OiAwLCBcclxuICAgICAgICBlcnJvcjogYE1pbmltdW0gcHVyY2hhc2UgYW1vdW50IG9mIFIke2RhdGEubWluX3B1cmNoYXNlX2Ftb3VudH0gcmVxdWlyZWRgIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkaXNjb3VudCBhbW91bnRcclxuICAgIGxldCBkaXNjb3VudEFtb3VudCA9IDA7XHJcbiAgICBpZiAoZGF0YS5kaXNjb3VudF90eXBlID09PSAncGVyY2VudGFnZScpIHtcclxuICAgICAgZGlzY291bnRBbW91bnQgPSAoc3VidG90YWwgKiBkYXRhLmRpc2NvdW50X3ZhbHVlKSAvIDEwMDtcclxuICAgICAgaWYgKGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCAmJiBkaXNjb3VudEFtb3VudCA+IGRhdGEubWF4X2Rpc2NvdW50X2Ftb3VudCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IGRhdGEuZGlzY291bnRfdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5zdXJlIGRpc2NvdW50IGRvZXNuJ3QgZXhjZWVkIHN1YnRvdGFsXHJcbiAgICBkaXNjb3VudEFtb3VudCA9IE1hdGgubWluKGRpc2NvdW50QW1vdW50LCBzdWJ0b3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRpc2NvdW50QW1vdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0Vycm9yIHZhbGlkYXRpbmcgZGlzY291bnQgY29kZScgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYm9va2luZyBkcmFmdCAoYmVmb3JlIHBheW1lbnQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0RyYWZ0KGZvcm1EYXRhOiBCb29raW5nRm9ybURhdGEpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdJZD86IHN0cmluZztcclxuICBib29raW5nSWRzPzogc3RyaW5nW107XHJcbiAgdG90YWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB1c2VyIGlmIGxvZ2dlZCBpblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyPy5pZCB8fCBudWxsO1xyXG5cclxuICAgIC8vIEdldCBzZXJ2aWNlIG5hbWVcclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBmb3JtRGF0YS5zZXJ2aWNlSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmljZSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgc2VsZWN0ZWQgZnJlcXVlbmN5IGlzIHZhbGlkIGZvciB0aGlzIHNlcnZpY2VcclxuICAgIGlmICghaXNWYWxpZEZyZXF1ZW5jeUZvclNlcnZpY2Uoc2VydmljZS5uYW1lLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiBgUmVjdXJyaW5nIGJvb2tpbmdzIGFyZSBvbmx5IGF2YWlsYWJsZSBmb3IgU3RhbmRhcmQgQ2xlYW5pbmcgYW5kIEFpcmJuYiBDbGVhbmluZyBzZXJ2aWNlcy4gU2VsZWN0ZWQgc2VydmljZTogJHtzZXJ2aWNlLm5hbWV9YCBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJpY2luZ1xyXG4gICAgY29uc3QgcHJpY2VCcmVha2Rvd24gPSBhd2FpdCBjYWxjdWxhdGVQcmljZSh7XHJcbiAgICAgIHNlcnZpY2VJZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICBzZXJ2aWNlTmFtZTogc2VydmljZS5uYW1lLFxyXG4gICAgICBiZWRyb29tczogZm9ybURhdGEuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICBhZGRpdGlvbmFsU2VydmljZUlkczogZm9ybURhdGEuYWRkaXRpb25hbFNlcnZpY2VzLFxyXG4gICAgICBjbGVhbmluZ0ZyZXF1ZW5jeTogZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3ksXHJcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLCAvLyBXaWxsIGNhbGN1bGF0ZSBkaXNjb3VudCBpbiBuZXh0IHN0ZXBcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBseSBkaXNjb3VudCBjb2RlIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgZGlzY291bnRBbW91bnQgPSAwO1xyXG4gICAgaWYgKGZvcm1EYXRhLmRpc2NvdW50Q29kZSkge1xyXG4gICAgICBjb25zdCBkaXNjb3VudFZhbGlkYXRpb24gPSBhd2FpdCB2YWxpZGF0ZURpc2NvdW50Q29kZShcclxuICAgICAgICBmb3JtRGF0YS5kaXNjb3VudENvZGUsXHJcbiAgICAgICAgcHJpY2VCcmVha2Rvd24uc3VidG90YWwgLSBwcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZGlzY291bnRWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkaXNjb3VudFZhbGlkYXRpb24uZGlzY291bnRBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSB3aXRoIGRpc2NvdW50XHJcbiAgICBjb25zdCBmaW5hbFByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudCxcclxuICAgICAgY2xlYW5pbmdFcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICBudW1iZXJPZkNsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHJlY3VycmluZyBib29raW5nXHJcbiAgICBjb25zdCBpc1JlY3VycmluZyA9IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5ICE9PSAnb25lLXRpbWUnO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBib29raW5nIGRhdGVzIGJhc2VkIG9uIGZyZXF1ZW5jeVxyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZm9ybURhdGEuc2VydmljZURhdGUpO1xyXG4gICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5leHQgYm9va2luZyBkYXRlIGZvciByZWN1cnJpbmcgYm9va2luZ3NcclxuICAgIGxldCBuZXh0Qm9va2luZ0RhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICAgIGlmIChpc1JlY3VycmluZyAmJiBib29raW5nRGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IGJvb2tpbmdEYXRlc1tib29raW5nRGF0ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5leHRCb29raW5nRGF0ZSA9IGNhbGN1bGF0ZU5leHRCb29raW5nRGF0ZShsYXN0RGF0ZSwgZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBib29raW5ncyBmb3IgYWxsIGRhdGVzXHJcbiAgICBjb25zdCBib29raW5nc1RvQ3JlYXRlOiBCb29raW5nQ3JlYXRlSW5wdXRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va2luZ0RhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEYXRlID0gYm9va2luZ0RhdGVzW2ldO1xyXG4gICAgICBjb25zdCBib29raW5nTnVtYmVyID0gZ2VuZXJhdGVCb29raW5nTnVtYmVyKCk7XHJcblxyXG4gICAgICAvLyBUaXAgaXMgb25seSBhcHBsaWVkIHRvIHRoZSBmaXJzdCBib29raW5nIGluIGEgcmVjdXJyaW5nIHNlcmllcyAob25lLXRpbWUgcGF5bWVudClcclxuICAgICAgY29uc3QgdGlwQW1vdW50ID0gKGkgPT09IDApID8gKGZvcm1EYXRhLnRpcEFtb3VudCB8fCAwKSA6IDA7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib29raW5nSW5wdXQ6IEJvb2tpbmdDcmVhdGVJbnB1dCA9IHtcclxuICAgICAgICBib29raW5nX251bWJlcjogYm9va2luZ051bWJlcixcclxuICAgICAgICBjdXN0b21lcl9maXJzdF9uYW1lOiBmb3JtRGF0YS5jdXN0b21lckZpcnN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9sYXN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyTGFzdE5hbWUsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZvcm1EYXRhLmN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IGZvcm1EYXRhLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgc2VydmljZV9pZDogZm9ybURhdGEuc2VydmljZUlkLFxyXG4gICAgICAgIHNlcnZpY2VfdHlwZTogc2VydmljZS5uYW1lLFxyXG4gICAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgICAgY2xlYW5pbmdfZXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMgJiYgZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcy5sZW5ndGggPiAwIFxyXG4gICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgIDogbnVsbCwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICBjbGVhbmluZ19mcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIHNlcnZpY2VfZGF0ZTogZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICBzZXJ2aWNlX3RpbWU6IGZvcm1EYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgIHNlcnZpY2VfZHVyYXRpb246IGZvcm1EYXRhLnNlcnZpY2VEdXJhdGlvbixcclxuICAgICAgICBzZXJ2aWNlX2FkZHJlc3M6IGZvcm1EYXRhLnNlcnZpY2VBZGRyZXNzLFxyXG4gICAgICAgIHNlcnZpY2VfYXB0X3VuaXQ6IGZvcm1EYXRhLnNlcnZpY2VBcHRVbml0IHx8IG51bGwsXHJcbiAgICAgICAgc2VydmljZV9zdWJ1cmI6IGZvcm1EYXRhLnNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgICAgc2VydmljZV9jaXR5OiBmb3JtRGF0YS5zZXJ2aWNlQ2l0eSxcclxuICAgICAgICBzcGVjaWFsX2luc3RydWN0aW9uczogZm9ybURhdGEuc3BlY2lhbEluc3RydWN0aW9ucyB8fCBudWxsLFxyXG4gICAgICAgIHRpcF9hbW91bnQ6IHRpcEFtb3VudCxcclxuICAgICAgICBiYXNlX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmJhc2VQcmljZSxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzX3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmFkZGl0aW9uYWxTZXJ2aWNlc1ByaWNlLFxyXG4gICAgICAgIGVxdWlwbWVudF9zdXBwbHlfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uZXF1aXBtZW50U3VwcGx5UHJpY2UsXHJcbiAgICAgICAgbnVtYmVyX29mX2NsZWFuZXJzOiBmb3JtRGF0YS5udW1iZXJPZkNsZWFuZXJzIHx8IDEsXHJcbiAgICAgICAgYWRkaXRpb25hbF9jbGVhbmVyc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsQ2xlYW5lcnNQcmljZSxcclxuICAgICAgICBmcmVxdWVuY3lfZGlzY291bnRfcGVyY2VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudFBlcmNlbnQsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi5mcmVxdWVuY3lEaXNjb3VudEFtb3VudCxcclxuICAgICAgICBzdWJ0b3RhbDogZmluYWxQcmljZUJyZWFrZG93bi5zdWJ0b3RhbCxcclxuICAgICAgICBzZXJ2aWNlX2ZlZTogZmluYWxQcmljZUJyZWFrZG93bi5zZXJ2aWNlRmVlLFxyXG4gICAgICAgIHRvdGFsX2Ftb3VudDogZmluYWxQcmljZUJyZWFrZG93bi50b3RhbEFtb3VudCArIHRpcEFtb3VudCxcclxuICAgICAgICBkaXNjb3VudF9jb2RlOiBmb3JtRGF0YS5kaXNjb3VudENvZGUgfHwgbnVsbCxcclxuICAgICAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50QW1vdW50LFxyXG4gICAgICAgIHJlZmVycmFsX2NvZGU6IGZvcm1EYXRhLnJlZmVycmFsQ29kZSB8fCBudWxsLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiAwLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgdXNlcl9pZDogdXNlcklkLFxyXG4gICAgICAgIHBhcmVudF9ib29raW5nX2lkOiBudWxsLCAvLyBXaWxsIGJlIHVwZGF0ZWQgYWZ0ZXIgZmlyc3QgYm9va2luZyBpcyBjcmVhdGVkXHJcbiAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZyxcclxuICAgICAgICByZWN1cnJlbmNlX3N0YXR1czogaXNSZWN1cnJpbmcgPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0X2Jvb2tpbmdfZGF0ZTogaSA9PT0gMCAmJiBpc1JlY3VycmluZyAmJiBuZXh0Qm9va2luZ0RhdGUgPyBmb3JtYXREYXRlRm9yREIobmV4dEJvb2tpbmdEYXRlKSA6IG51bGwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBib29raW5nc1RvQ3JlYXRlLnB1c2goYm9va2luZ0lucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkQm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuaW5zZXJ0KGJvb2tpbmdzVG9DcmVhdGUpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB0b3RhbF9hbW91bnQnKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYm9va2luZyBkcmFmdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc2VydGVkQm9va2luZ3MgfHwgaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgcGFyZW50X2Jvb2tpbmdfaWQgZm9yIHN1YnNlcXVlbnQgYm9va2luZ3MgaWYgdGhlcmUgYXJlIG11bHRpcGxlXHJcbiAgICBpZiAoaW5zZXJ0ZWRCb29raW5ncy5sZW5ndGggPiAxICYmIGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Qm9va2luZ0lkID0gaW5zZXJ0ZWRCb29raW5nc1swXS5pZDtcclxuICAgICAgY29uc3Qgc3Vic2VxdWVudEJvb2tpbmdJZHMgPSBpbnNlcnRlZEJvb2tpbmdzLnNsaWNlKDEpLm1hcChiID0+IGIuaWQpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIGFsbCBzdWJzZXF1ZW50IGJvb2tpbmdzIHRvIHJlZmVyZW5jZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHBhcmVudF9ib29raW5nX2lkOiBmaXJzdEJvb2tpbmdJZCB9KVxyXG4gICAgICAgIC5pbignaWQnLCBzdWJzZXF1ZW50Qm9va2luZ0lkcyk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYXJlbnRfYm9va2luZ19pZDonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCwgYnV0IGxvZyB0aGUgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBhbW91bnRcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gaW5zZXJ0ZWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4gc3VtICsgTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSwgMCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiBib29raW5nLmlkKTtcclxuXHJcbiAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgYWxzbyByZXR1cm4gc2luZ2xlIGJvb2tpbmdJZFxyXG4gICAgY29uc3QgYm9va2luZ0lkID0gYm9va2luZ0lkc1swXTtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBib29raW5ncywgcmV0dXJuIGFycmF5OyBvdGhlcndpc2UgcmV0dXJuIHNpbmdsZSBJRCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGJvb2tpbmdJZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBib29raW5nSWRzLFxyXG4gICAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICAgIGJvb2tpbmdJZCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBib29raW5nSWQsXHJcbiAgICAgIGJvb2tpbmdJZHMsXHJcbiAgICAgIHRvdGFsQW1vdW50XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBwYXltZW50IGZvciBib29raW5nKHMpXHJcbiAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIGJvb2tpbmdJZCBvciBhbiBhcnJheSBvZiBib29raW5nSWRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBheW1lbnRGb3JCb29raW5nKFxyXG4gIGJvb2tpbmdJZE9ySWRzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGF1dGhvcml6YXRpb25Vcmw/OiBzdHJpbmc7XHJcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCBib29raW5nSWRzID0gQXJyYXkuaXNBcnJheShib29raW5nSWRPcklkcykgPyBib29raW5nSWRPcklkcyA6IFtib29raW5nSWRPcklkc107XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5nIGRldGFpbHNcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyhzKSBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYWxsIGJvb2tpbmdzIGFyZSBpbiBwZW5kaW5nIHN0YXR1c1xyXG4gICAgY29uc3Qgbm9uUGVuZGluZ0Jvb2tpbmdzID0gYm9va2luZ3MuZmlsdGVyKGIgPT4gYi5wYXltZW50X3N0YXR1cyAhPT0gJ3BlbmRpbmcnKTtcclxuICAgIGlmIChub25QZW5kaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTb21lIGJvb2tpbmdzIGFyZSBub3QgaW4gcGVuZGluZyBwYXltZW50IHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50IGZyb20gYWxsIGJvb2tpbmdzIChpbmNsdWRpbmcgdGlwKVxyXG4gICAgLy8gTm90ZTogdG90YWxfYW1vdW50IGluIGRhdGFiYXNlIG5vdyBpbmNsdWRlcyB0aXAgZm9yIG5ldyBib29raW5nc1xyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBib29raW5ncyB0aGF0IG1pZ2h0IG5vdCBoYXZlIHRpcCBpbiB0b3RhbF9hbW91bnQsIFxyXG4gICAgLy8gd2UgY2hlY2sgYW5kIGFkZCB0aXBfYW1vdW50IGlmIGl0J3MgbWlzc2luZ1xyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBib29raW5nVG90YWwgPSBOdW1iZXIoYm9va2luZy50b3RhbF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHRpcEFtb3VudCA9IE51bWJlcihib29raW5nLnRpcF9hbW91bnQpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGJhc2VUb3RhbCA9IE51bWJlcihib29raW5nLnN1YnRvdGFsIHx8IDApICsgTnVtYmVyKGJvb2tpbmcuc2VydmljZV9mZWUgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiB0aXAgaXMgYWxyZWFkeSBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnRcclxuICAgICAgLy8gSWYgdG90YWxfYW1vdW50IGVxdWFscyBiYXNlVG90YWwgZXhhY3RseSwgdGhlbiB0aXAgaXMgbm90IGluY2x1ZGVkLCBzbyBhZGQgaXRcclxuICAgICAgLy8gT3RoZXJ3aXNlLCB0b3RhbF9hbW91bnQgYWxyZWFkeSBpbmNsdWRlcyB0aXBcclxuICAgICAgaWYgKHRpcEFtb3VudCA+IDAgJiYgTWF0aC5hYnMoYm9va2luZ1RvdGFsIC0gYmFzZVRvdGFsKSA8IDAuMDEpIHtcclxuICAgICAgICAvLyBUaXAgaXMgbm90IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAoYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjYXNlKVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWwgKyB0aXBBbW91bnQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50IChuZXcgYm9va2luZ3MpXHJcbiAgICAgIHJldHVybiBzdW0gKyBib29raW5nVG90YWw7XHJcbiAgICB9LCAwKTtcclxuICAgIFxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBib29raW5nJ3MgZW1haWwgYW5kIGRldGFpbHMgZm9yIHBheW1lbnRcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZyA9IGJvb2tpbmdzWzBdO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gZmlyc3RCb29raW5nLnBheXN0YWNrX3JlZmVyZW5jZSB8fCBgJHtmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXJ9JHtEYXRlLm5vdygpfWA7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgUGF5c3RhY2sgcGF5bWVudCB3aXRoIHRvdGFsIGFtb3VudFxyXG4gICAgY29uc3QgcGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhbGl6ZVBheW1lbnQoXHJcbiAgICAgIGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgdG90YWxBbW91bnQsXHJcbiAgICAgIHJlZmVyZW5jZSxcclxuICAgICAge1xyXG4gICAgICAgIGJvb2tpbmdfaWRzOiBib29raW5nSWRzLFxyXG4gICAgICAgIGJvb2tpbmdfaWQ6IGZpcnN0Qm9va2luZy5pZCwgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBmaXJzdEJvb2tpbmcuYm9va2luZ19udW1iZXIsXHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGZpcnN0Qm9va2luZy5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgdGhhdCB3YXMgYWN0dWFsbHkgcmV0dXJuZWRcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3RpbWUsIHNlcnZpY2VfZHVyYXRpb24nKVxyXG4gICAgICAuZXEoJ3ByZWZlcnJlZF9jbGVhbmVyX2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfZGF0ZScsIHNlcnZpY2VEYXRlKVxyXG4gICAgICAuaW4oJ3N0YXR1cycsIFsncGVuZGluZycsICdjb25maXJtZWQnXSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3RzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBc3N1bWUgbm8gY29uZmxpY3Qgb24gZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGJvb2tpbmdzLCBubyBjb25mbGljdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSBuZXcgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICBjb25zdCBbbmV3U3RhcnRIb3VycywgbmV3U3RhcnRNaW51dGVzXSA9IHNlcnZpY2VUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICBjb25zdCBuZXdTdGFydFRpbWVNaW51dGVzID0gbmV3U3RhcnRIb3VycyAqIDYwICsgbmV3U3RhcnRNaW51dGVzO1xyXG4gICAgY29uc3Qgc2VydmljZUR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoc2VydmljZUR1cmF0aW9uICogNjApO1xyXG4gICAgY29uc3QgbmV3RW5kVGltZU1pbnV0ZXMgPSBuZXdTdGFydFRpbWVNaW51dGVzICsgc2VydmljZUR1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAvLyBDaGVjayBlYWNoIGV4aXN0aW5nIGJvb2tpbmcgZm9yIG92ZXJsYXBcclxuICAgIGZvciAoY29uc3QgYm9va2luZyBvZiBib29raW5ncykge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuc2VydmljZV90aW1lKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgICBjb25zdCBbYm9va2luZ1N0YXJ0SG91cnMsIGJvb2tpbmdTdGFydE1pbnV0ZXNdID0gYm9va2luZy5zZXJ2aWNlX3RpbWVcclxuICAgICAgICAuc3BsaXQoJzonKVxyXG4gICAgICAgIC5zbGljZSgwLCAyKVxyXG4gICAgICAgIC5tYXAoTnVtYmVyKTtcclxuICAgICAgY29uc3QgYm9va2luZ1N0YXJ0VGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRIb3VycyAqIDYwICsgYm9va2luZ1N0YXJ0TWludXRlcztcclxuXHJcbiAgICAgIC8vIFBhcnNlIGJvb2tpbmcgZHVyYXRpb25cclxuICAgICAgY29uc3QgYm9va2luZ0R1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKHR5cGVvZiBib29raW5nLnNlcnZpY2VfZHVyYXRpb24gPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvblxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiB8fCAnMCcpKSAqIDYwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdFbmRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzICsgYm9va2luZ0R1cmF0aW9uTWludXRlcztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwOiBuZXcgc3RhcnQgPCBleGlzdGluZyBlbmQgQU5EIG5ldyBlbmQgPiBleGlzdGluZyBzdGFydFxyXG4gICAgICBpZiAobmV3U3RhcnRUaW1lTWludXRlcyA8IGJvb2tpbmdFbmRUaW1lTWludXRlcyAmJiBuZXdFbmRUaW1lTWludXRlcyA+IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIENvbmZsaWN0IGZvdW5kXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGNvbmZsaWN0c1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIGJvb2tpbmcgY29uZmxpY3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBmb3IgYSBjbGVhbmVyIChzZXJ2ZXItc2lkZSB3cmFwcGVyKVxyXG4gKiBUaGlzIGNhbGxzIHRoZSBkYXRhYmFzZSBmdW5jdGlvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBjYWxjdWxhdGVzIGNsaWVudC1zaWRlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlQ2xlYW5lclJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcklkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFRyeSB0byBjYWxsIHRoZSBkYXRhYmFzZSBmdW5jdGlvblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UucnBjKCdjYWxjdWxhdGVfY2xlYW5lcl9yZWxpYWJpbGl0eV9zY29yZScsIHtcclxuICAgICAgY2xlYW5lcl9pZDogY2xlYW5lcklkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFlcnJvciAmJiBkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbGJhY2s6IGZldGNoIGNsZWFuZXIgYW5kIGNhbGN1bGF0ZSBjbGllbnQtc2lkZVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhY2xlYW5lcikge1xyXG4gICAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIgYXMgQ2xlYW5lcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHJlbGlhYmlsaXR5IHNjb3JlOicsIGVycm9yKTtcclxuICAgIHJldHVybiA1MC4wOyAvLyBEZWZhdWx0IHNjb3JlIG9uIGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGF2YWlsYWJsZSBjbGVhbmVycyB3aXRoIGVuaGFuY2VkIGZpbHRlcmluZyBjcml0ZXJpYVxyXG4gKiBGaWx0ZXJzIGJ5OiBMb2NhdGlvbiwgQXZhaWxhYmlsaXR5LCBCb29raW5nIGNvbmZsaWN0c1xyXG4gKiBTb3J0cyBieTogUmVsaWFiaWxpdHkgU2NvcmUsIFJhdGluZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzV2l0aENyaXRlcmlhKHBhcmFtczoge1xyXG4gIHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmc7XHJcbiAgc2VydmljZURhdGU/OiBzdHJpbmc7XHJcbiAgc2VydmljZVRpbWU/OiBzdHJpbmc7XHJcbiAgc2VydmljZUR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIG1pblJhdGluZz86IG51bWJlcjtcclxuICBtaW5SZWxpYWJpbGl0eVNjb3JlPzogbnVtYmVyO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2VydmljZVN1YnVyYixcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIHNlcnZpY2VUaW1lLFxyXG4gICAgICBzZXJ2aWNlRHVyYXRpb24gPSAzLFxyXG4gICAgICBtaW5SYXRpbmcgPSAwLFxyXG4gICAgICBtaW5SZWxpYWJpbGl0eVNjb3JlID0gMCxcclxuICAgIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8gQnVpbGQgYmFzZSBxdWVyeVxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnkub3JkZXIoJ3JlbGlhYmlsaXR5X3Njb3JlJywgeyBhc2NlbmRpbmc6IGZhbHNlLCBudWxsc0ZpcnN0OiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ3JhdGluZycsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ25hbWUnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZXJzID0gKGRhdGEgfHwgW10pIGFzIENsZWFuZXJbXTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgaXNfYXZhaWxhYmxlXHJcbiAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4gY2xlYW5lci5pc19hdmFpbGFibGUgIT09IGZhbHNlKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbG9jYXRpb24gKHN1YnVyYilcclxuICAgIGlmIChzZXJ2aWNlU3VidXJiICYmIGNsZWFuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3VidXJiTG93ZXIgPSBzZXJ2aWNlU3VidXJiLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICBjbGVhbmVycyA9IGNsZWFuZXJzLmZpbHRlcigoY2xlYW5lcikgPT4ge1xyXG4gICAgICAgIGlmICghY2xlYW5lci5hcmVhcyB8fCBjbGVhbmVyLmFyZWFzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIFNlcnZlIGFsbCBhcmVhc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xlYW5lci5hcmVhcy5zb21lKChhcmVhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFMb3dlciA9IGFyZWEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHJldHVybiBhcmVhTG93ZXIuaW5jbHVkZXMoc3VidXJiTG93ZXIpIHx8IHN1YnVyYkxvd2VyLmluY2x1ZGVzKGFyZWFMb3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBkYXkgb2Ygd2VlayBhdmFpbGFiaWxpdHkgaWYgZGF0ZSBpcyBwcm92aWRlZFxyXG4gICAgaWYgKHNlcnZpY2VEYXRlKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzZXJ2aWNlRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPSBTdW5kYXksIDEgPSBNb25kYXksIGV0Yy5cclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXlNYXA6IFJlY29yZDxudW1iZXIsIGtleW9mIENsZWFuZXI+ID0ge1xyXG4gICAgICAgICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgICAgICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgICAgICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgICAgICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgICAgICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgICAgICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgICAgICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBkYXlGaWVsZCA9IGRheU1hcFtkYXlPZldlZWtdO1xyXG4gICAgICAgIHJldHVybiBjbGVhbmVyW2RheUZpZWxkXSAhPT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJhdGluZ1xyXG4gICAgaWYgKG1pblJhdGluZyA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJhdGluZyB8fCAwKSA+PSBtaW5SYXRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbHRlciBieSBtaW5pbXVtIHJlbGlhYmlsaXR5IHNjb3JlXHJcbiAgICBpZiAobWluUmVsaWFiaWxpdHlTY29yZSA+IDApIHtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IChjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApID49IG1pblJlbGlhYmlsaXR5U2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVucmljaCBjbGVhbmVycyB3aXRoIGF2YWlsYWJpbGl0eSBhbmQgYm9va2luZyBjb25mbGljdCBpbmZvcm1hdGlvblxyXG4gICAgY29uc3QgZW5yaWNoZWRDbGVhbmVyczogQ2xlYW5lcldpdGhBdmFpbGFiaWxpdHlbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBjbGVhbmVycy5tYXAoYXN5bmMgKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBsZXQgaXNBdmFpbGFibGVGb3JTbG90ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYm9va2luZ0NvbmZsaWN0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGJvb2tpbmcgY29uZmxpY3QgaWYgZGF0ZSBhbmQgdGltZSBhcmUgcHJvdmlkZWRcclxuICAgICAgICBpZiAoc2VydmljZURhdGUgJiYgc2VydmljZVRpbWUgJiYgc2VydmljZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QgPSBhd2FpdCBjaGVja0NsZWFuZXJCb29raW5nQ29uZmxpY3QoXHJcbiAgICAgICAgICAgIGNsZWFuZXIuaWQsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICAgICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90ID0gIWJvb2tpbmdDb25mbGljdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSByZWxpYWJpbGl0eSBzY29yZSBpZiBub3QgcHJlc2VudFxyXG4gICAgICAgIGNvbnN0IHJlbGlhYmlsaXR5U2NvcmUgPSBjbGVhbmVyLnJlbGlhYmlsaXR5X3Njb3JlID8/IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUoY2xlYW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jbGVhbmVyLFxyXG4gICAgICAgICAgcmVsaWFiaWxpdHlfc2NvcmU6IHJlbGlhYmlsaXR5U2NvcmUsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZUZvclNsb3QsXHJcbiAgICAgICAgICBib29raW5nQ29uZmxpY3QsXHJcbiAgICAgICAgICBjb21wbGV0aW9uUmF0ZTogY2FsY3VsYXRlQ29tcGxldGlvblJhdGUoY2xlYW5lciksXHJcbiAgICAgICAgICBvblRpbWVSYXRlOiBjYWxjdWxhdGVPblRpbWVSYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNvcnQgYnkgcmVsaWFiaWxpdHkgc2NvcmUgYW5kIHJhdGluZyAoYWxyZWFkeSBzb3J0ZWQgYnkgcXVlcnksIGJ1dCBlbnN1cmUgY29uc2lzdGVuY3kpXHJcbiAgICBlbnJpY2hlZENsZWFuZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgY29uc3Qgc2NvcmVBID0gKGEucmVsaWFiaWxpdHlfc2NvcmUgfHwgMCkgKiAwLjYgKyAoYS5yYXRpbmcgfHwgMCkgKiAwLjQ7XHJcbiAgICAgIGNvbnN0IHNjb3JlQiA9IChiLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGIucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICByZXR1cm4gc2NvcmVCIC0gc2NvcmVBO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xlYW5lcnM6IGVucmljaGVkQ2xlYW5lcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBjbGVhbmVycyB3aXRoIGNyaXRlcmlhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0E2T3NCLGlNQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$76dc7c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:76dc7c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$57988b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:57988b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$307da4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:307da4 [app-ssr] (ecmascript) <text/javascript>");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$307da4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateDiscountCode"])(code, subtotal);
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
            const draftResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$76dc7c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBookingDraft"])(formData);
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
            // Initialize payment (pass array or single ID)
            const paymentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$57988b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["initializePaymentForBooking"])(bookingIds.length > 1 ? bookingIds : bookingIds[0]);
            if (!paymentResult.success || !paymentResult.authorizationUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(paymentResult.error || 'Failed to initialize payment');
                setIsProcessing(false);
                return;
            }
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
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 281,
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
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 293,
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
                    lineNumber: 321,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 319,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingSubmitPageWithSlugContent, {}, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 325,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_bb990b56._.js.map