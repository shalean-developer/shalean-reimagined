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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:ebd3d2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:c40742 [app-ssr] (ecmascript) <text/javascript>");
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
        // Listen for auth state changes
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session)=>{
            setIsAuthenticated(!!session?.user);
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, []);
    // Fetch user's credit balance (only if authenticated)
    const { data: creditBalance = 0, isLoading: isLoadingBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'credit-balance',
            isAuthenticated
        ],
        queryFn: async ()=>{
            try {
                const response = await fetch('/api/profile/balance');
                if (response.status === 401) {
                    // Unauthorized - user is not actually authenticated
                    setIsAuthenticated(false);
                    return 0;
                }
                if (response.ok) {
                    const data = await response.json();
                    return data.success ? data.balance || 0 : 0;
                }
                console.warn('Failed to fetch credit balance:', response.status, response.statusText);
                return 0;
            } catch (error) {
                console.error('Error fetching credit balance:', error);
                return 0;
            }
        },
        enabled: isAuthenticated,
        staleTime: 30 * 1000,
        retry: false
    });
    // Fetch services and additional services
    const { data: services = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'services'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
        staleTime: 5 * 60 * 1000
    });
    const { data: additionalServices = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'additional-services',
            formData.serviceId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdditionalServices"])(formData.serviceId || undefined),
        enabled: !!formData.serviceId,
        staleTime: 5 * 60 * 1000
    });
    // Get selected service name
    const selectedService = services.find((s)=>s.id === formData.serviceId);
    const serviceName = selectedService?.name || 'Standard Cleaning';
    // Check if selected service is carpet cleaning
    const isCarpetCleaning = serviceName?.toLowerCase().includes('carpet') ?? false;
    // Check if service requires team booking
    const isTeamBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requiresTeamBooking"])(serviceName);
    // Get selected additional services
    const selectedAdditionalServices = formData.additionalServices.map((id)=>additionalServices.find((s)=>s.id === id)).filter((s)=>s !== undefined);
    // Fetch selected cleaners (only for non-team bookings)
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
        enabled: !isTeamBooking && formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0,
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
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Please review your booking details before confirming."
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 216,
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
                                children: isTeamBooking ? 'Team' : 'Cleaner'
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 223,
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
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            isTeamBooking ? formData.teamNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                children: [
                                    "Team ",
                                    formData.teamNumber
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                children: "No team selected"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this) : cleaners.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: cleaners.map((cleaner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-base",
                                        children: cleaner.name
                                    }, cleaner.id, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-base",
                                children: "No preference - Best available"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 229,
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
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 250,
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
                                            lineNumber: 258,
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
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 222,
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
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 284,
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
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 294,
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
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Last Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 306,
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
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Email Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 318,
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
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Phone Number *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 331,
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
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 343,
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
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 283,
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
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 369,
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
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold text-foreground",
                                            children: serviceName
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 383,
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
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 378,
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
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Carpet Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 396,
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
                                                            lineNumber: 403,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.carpetTypes.join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfFittedRooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Fitted Rooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfFittedRooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 23
                                                }, this),
                                                formData.numberOfLooseCarpets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Loose Carpets/Rugs: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.numberOfLooseCarpets
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 23
                                                }, this),
                                                formData.roomStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Room Status: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium capitalize",
                                                            children: formData.roomStatus.replace(/-/g, ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 395,
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
                                                    lineNumber: 433,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Property Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 432,
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
                                                            lineNumber: 438,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bedrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Bathrooms: "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.bathrooms
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 431,
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
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Additional Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: selectedAdditionalServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20",
                                                    children: service.name
                                                }, service.id, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 452,
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
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Service Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this),
                                        formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 479,
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
                                                            lineNumber: 481,
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
                                                            lineNumber: 483,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, this),
                                        formData.cleaningEquipment === 'yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 490,
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
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 489,
                                            columnNumber: 19
                                        }, this),
                                        formData.serviceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 501,
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
                                                            lineNumber: 503,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 472,
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
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Schedule"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 512,
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
                                                            lineNumber: 518,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(formData.serviceDate), 'EEE, MMM d, yyyy') : 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 517,
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
                                                            lineNumber: 524,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: formData.serviceTime || 'Not set'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 366,
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
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: shouldCalculateRecurringTotal ? `${getFrequencyLabel()} recurring - All fees included` : isRecurring && !hasServiceDate ? 'Select a date to see monthly total' : 'All fees included'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 536,
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
                                        lineNumber: 551,
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
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 535,
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
                        lineNumber: 562,
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
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "R",
                                            Math.max(0, finalSubtotal).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 568,
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
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            priceBreakdown.serviceFee.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 572,
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
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "+R",
                                            tipAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 581,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 567,
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
                                lineNumber: 588,
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
                                        lineNumber: 590,
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
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 p-3 bg-secondary/50 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm font-medium",
                                        children: "Use ShaleanCred"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 611,
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
                                        lineNumber: 616,
                                        columnNumber: 24
                                    }, this),
                                    " ShaleanCred available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "use-credits",
                                        checked: useCredits,
                                        disabled: isLoadingBalance || creditBalance <= 0,
                                        onChange: (e)=>{
                                            if (isLoadingBalance || creditBalance <= 0) return;
                                            const use = e.target.checked;
                                            updateFormData({
                                                useCredits: use,
                                                creditsAmount: use ? Math.min(creditBalance, totalBookingAmount) : 0
                                            });
                                        },
                                        className: "w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "use-credits",
                                        className: `text-sm ${!isLoadingBalance && creditBalance > 0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`,
                                        children: [
                                            "Use ShaleanCred for this booking",
                                            isLoadingBalance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground block mt-1",
                                                children: "Loading balance..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 640,
                                                columnNumber: 19
                                            }, this),
                                            !isLoadingBalance && creditBalance <= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground block mt-1",
                                                children: "No ShaleanCred available"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 634,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 618,
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
                                        lineNumber: 653,
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
                                        lineNumber: 654,
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
                                                lineNumber: 689,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 688,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 652,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 610,
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
                                        lineNumber: 701,
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
                                        lineNumber: 702,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 700,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-xs text-muted-foreground mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Credits applied:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "-R",
                                            creditsAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 704,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-muted-foreground mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Secure payment powered by Paystack"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                        lineNumber: 711,
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
                        lineNumber: 716,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/book/components/Step3ContactReview.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/booking/book/data:6ff3e6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBookingDraft",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a40651665af2f7ac8eb712a7212a90429dbba698":"createBookingDraft"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a40651665af2f7ac8eb712a7212a90429dbba698", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBookingDraft");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1NBaVpzQiwrTEFBQSJ9
}),
"[project]/app/booking/book/data:c84e1a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initializePaymentForBooking",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405ad80f2be77879cf1910cba26c89cc91597b527b":"initializePaymentForBooking"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405ad80f2be77879cf1910cba26c89cc91597b527b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "initializePaymentForBooking");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlNBMHBCc0Isd01BQUEifQ==
}),
"[project]/app/booking/book/data:d74d7b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateDiscountCode",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"609833cce0ce4794dfef5417b3c8bab6d4dcfe264b":"validateDiscountCode"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("609833cce0ce4794dfef5417b3c8bab6d4dcfe264b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "validateDiscountCode");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBMlVzQixpTUFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$6ff3e6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:6ff3e6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$c84e1a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:c84e1a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$d74d7b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:d74d7b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:ebd3d2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:c40742 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing/calculator-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-ssr] (ecmascript)");
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
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
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
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdditionalServices"])(formData.serviceId || undefined),
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$d74d7b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateDiscountCode"])(code, subtotal);
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
        // Additional validation: Check if team selection is required for team bookings
        if (selectedService) {
            const isTeamBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requiresTeamBooking"])(selectedService.name);
            if (isTeamBooking) {
                if (!formData.teamNumber || formData.teamNumber < 1 || formData.teamNumber > 3) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Please select a team (1, 2, or 3) for this service');
                    return;
                }
            } else {
                // For non-team bookings, ensure teamNumber is not set
                if (formData.teamNumber !== null && formData.teamNumber !== undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Team selection is only available for Deep Cleaning and Move In/Out services');
                    return;
                }
            }
        }
        setIsProcessing(true);
        try {
            const draftResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$6ff3e6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBookingDraft"])(formData);
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
            const paymentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$c84e1a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["initializePaymentForBooking"])(bookingIds.length > 1 ? bookingIds : bookingIds[0]);
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
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 341,
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
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 353,
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
                    lineNumber: 381,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
                lineNumber: 380,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 379,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingSubmitPageWithSlugContent, {}, void 0, false, {
            fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
            lineNumber: 385,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/submit/[serviceSlug]/page.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1605aee7._.js.map