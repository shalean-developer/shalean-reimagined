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
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 77,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 78,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 114,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 128,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}),
"[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/components/ui/radio-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const RadioGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
RadioGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const RadioGroupItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                className: "h-2.5 w-2.5 fill-current text-current"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/radio-group.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/radio-group.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
RadioGroupItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
;
}),
"[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/src/components/ui/calendar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DayPicker"], {
        showOutsideDays: showOutsideDays,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-3", className),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center mb-4",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full mt-2",
            head_cell: "h-9 w-9 text-muted-foreground rounded-md font-normal text-[0.8rem] text-center p-0",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames
        },
        components: {
            IconLeft: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/calendar.tsx",
                    lineNumber: 45,
                    columnNumber: 25
                }, void 0),
            IconRight: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/calendar.tsx",
                    lineNumber: 46,
                    columnNumber: 26
                }, void 0)
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/calendar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
Calendar.displayName = "Calendar";
;
}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/app/booking/quote/data:c1bab6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHomeDetailOptions",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"403c32958a961e5aa8c3d3ca4e97daa1ade43825da":"getHomeDetailOptions"},"app/booking/quote/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("403c32958a961e5aa8c3d3ca4e97daa1ade43825da", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getHomeDetailOptions");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBRdW90ZUZvcm1EYXRhLCBRdW90ZVN0YXR1cywgUXVvdGUsIFNlcnZpY2UsIEFkZGl0aW9uYWxTZXJ2aWNlLCBIb21lRGV0YWlsT3B0aW9uLCBDbGVhbmluZ0VxdWlwbWVudCB9IGZyb20gJ0AvdHlwZXMvcXVvdGUnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlUXVvdGVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IFF1b3RlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU2F2ZSBvciB1cGRhdGUgYSBxdW90ZSBkcmFmdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVRdW90ZURyYWZ0KFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZm9ybURhdGE6IFF1b3RlRm9ybURhdGFcclxuKTogUHJvbWlzZTxTYXZlUXVvdGVSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBkcmFmdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nRHJhZnQuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdkcmFmdCcsXHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGF0ZXN0IGRyYWZ0IHF1b3RlIGZvciBhbiBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RlRHJhZnQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8UXVvdGUgfCBudWxsPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ3N0YXR1cycsICdkcmFmdCcpXHJcbiAgICAgIC5vcmRlcigndXBkYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBJZiBubyBkcmFmdCBleGlzdHMsIHRoYXQncyBva2F5IC0gcmV0dXJuIG51bGxcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQR1JTVDExNicpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZSBkcmFmdDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhIGFzIFF1b3RlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgcXVvdGVzIChkcmFmdHMgYW5kIHN1Ym1pdHRlZCkgZm9yIGFuIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGVzQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxRdW90ZVtdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBRdW90ZVtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3VibWl0IGEgcXVvdGUgKGNoYW5nZSBzdGF0dXMgZnJvbSBkcmFmdCB0byBzdWJtaXR0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVvdGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBmb3JtRGF0YTogUXVvdGVGb3JtRGF0YVxyXG4pOiBQcm9taXNlPFNhdmVRdW90ZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIGRyYWZ0IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0IHRvIHN1Ym1pdHRlZFxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnc3VibWl0dGVkJyxcclxuICAgICAgICAgIGZvcm1fZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmdEcmFmdC5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIHF1b3RlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9ib29raW5nL3F1b3RlJyk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgUXVvdGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgc3VibWl0dGVkIHF1b3RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdzdWJtaXR0ZWQnLFxyXG4gICAgICAgICAgZm9ybV9kYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHN1Ym1pdHRlZCBxdW90ZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKCcvYm9va2luZy9xdW90ZScpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc3VibWl0dGluZyBxdW90ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGFjdGl2ZSBzZXJ2aWNlcyBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlcygpOiBQcm9taXNlPFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFkZGl0aW9uYWwgc2VydmljZXMsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbFNlcnZpY2VzKHNlcnZpY2VJZD86IHN0cmluZyk6IFByb21pc2U8QWRkaXRpb25hbFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlSWQpIHtcclxuICAgICAgLy8gR2V0IGFkZGl0aW9uYWwgc2VydmljZXMgZmlsdGVyZWQgYnkgc2VydmljZSBydWxlc1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQsXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOmFkZGl0aW9uYWxfc2VydmljZV9pZCgqKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXMgYnkgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IGFuZCBmb3JtYXQgdGhlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VzID0gKGRhdGEgfHwgW10pXHJcbiAgICAgICAgLm1hcCgocnVsZTogYW55KSA9PiBydWxlLmFkZGl0aW9uYWxfc2VydmljZXMpXHJcbiAgICAgICAgLmZpbHRlcigoc2VydmljZTogQWRkaXRpb25hbFNlcnZpY2UpID0+IHNlcnZpY2UgJiYgc2VydmljZS5pc19hY3RpdmUpXHJcbiAgICAgICAgLnNvcnQoKGE6IEFkZGl0aW9uYWxTZXJ2aWNlLCBiOiBBZGRpdGlvbmFsU2VydmljZSkgPT4gYS5kaXNwbGF5X29yZGVyIC0gYi5kaXNwbGF5X29yZGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBhZGRpdGlvbmFsU2VydmljZXMgYXMgQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBhbGwgYWN0aXZlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBBZGRpdGlvbmFsU2VydmljZVtdO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBob21lIGRldGFpbCBvcHRpb25zIGZvciBhIHNwZWNpZmljIHR5cGUgKGJlZHJvb21zLCBiYXRocm9vbXMsIGNhcnBldF90eXBlLCByb29tX3N0YXR1cylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIb21lRGV0YWlsT3B0aW9ucyhvcHRpb25UeXBlOiBzdHJpbmcpOiBQcm9taXNlPEhvbWVEZXRhaWxPcHRpb25bXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdob21lX2RldGFpbF9vcHRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnb3B0aW9uX3R5cGUnLCBvcHRpb25UeXBlKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBob21lIGRldGFpbCBvcHRpb25zIGZvciAke29wdGlvblR5cGV9OmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoZGF0YSB8fCBbXSkgYXMgSG9tZURldGFpbE9wdGlvbltdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGhvbWUgZGV0YWlsIG9wdGlvbnMgZm9yICR7b3B0aW9uVHlwZX06YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWN0aXZlIGNsZWFuaW5nIGVxdWlwbWVudCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmluZ0VxdWlwbWVudCgpOiBQcm9taXNlPENsZWFuaW5nRXF1aXBtZW50W10+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5pbmdfZXF1aXBtZW50JylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuaW5nIGVxdWlwbWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIENsZWFuaW5nRXF1aXBtZW50W107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5pbmcgZXF1aXBtZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBMFNzQixpTUFBQSJ9
}),
"[project]/app/booking/quote/data:2c40ac [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCleaningEquipment",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0021634062cd96c1456de274e1e4cb9bdb22c0005b":"getCleaningEquipment"},"app/booking/quote/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0021634062cd96c1456de274e1e4cb9bdb22c0005b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCleaningEquipment");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBRdW90ZUZvcm1EYXRhLCBRdW90ZVN0YXR1cywgUXVvdGUsIFNlcnZpY2UsIEFkZGl0aW9uYWxTZXJ2aWNlLCBIb21lRGV0YWlsT3B0aW9uLCBDbGVhbmluZ0VxdWlwbWVudCB9IGZyb20gJ0AvdHlwZXMvcXVvdGUnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlUXVvdGVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IFF1b3RlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU2F2ZSBvciB1cGRhdGUgYSBxdW90ZSBkcmFmdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVRdW90ZURyYWZ0KFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZm9ybURhdGE6IFF1b3RlRm9ybURhdGFcclxuKTogUHJvbWlzZTxTYXZlUXVvdGVSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBkcmFmdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nRHJhZnQuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdkcmFmdCcsXHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGF0ZXN0IGRyYWZ0IHF1b3RlIGZvciBhbiBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RlRHJhZnQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8UXVvdGUgfCBudWxsPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ3N0YXR1cycsICdkcmFmdCcpXHJcbiAgICAgIC5vcmRlcigndXBkYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBJZiBubyBkcmFmdCBleGlzdHMsIHRoYXQncyBva2F5IC0gcmV0dXJuIG51bGxcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQR1JTVDExNicpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZSBkcmFmdDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhIGFzIFF1b3RlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgcXVvdGVzIChkcmFmdHMgYW5kIHN1Ym1pdHRlZCkgZm9yIGFuIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGVzQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxRdW90ZVtdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBRdW90ZVtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3VibWl0IGEgcXVvdGUgKGNoYW5nZSBzdGF0dXMgZnJvbSBkcmFmdCB0byBzdWJtaXR0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVvdGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBmb3JtRGF0YTogUXVvdGVGb3JtRGF0YVxyXG4pOiBQcm9taXNlPFNhdmVRdW90ZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIGRyYWZ0IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0IHRvIHN1Ym1pdHRlZFxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnc3VibWl0dGVkJyxcclxuICAgICAgICAgIGZvcm1fZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmdEcmFmdC5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIHF1b3RlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9ib29raW5nL3F1b3RlJyk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgUXVvdGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgc3VibWl0dGVkIHF1b3RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdzdWJtaXR0ZWQnLFxyXG4gICAgICAgICAgZm9ybV9kYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHN1Ym1pdHRlZCBxdW90ZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKCcvYm9va2luZy9xdW90ZScpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc3VibWl0dGluZyBxdW90ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGFjdGl2ZSBzZXJ2aWNlcyBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlcygpOiBQcm9taXNlPFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFkZGl0aW9uYWwgc2VydmljZXMsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbFNlcnZpY2VzKHNlcnZpY2VJZD86IHN0cmluZyk6IFByb21pc2U8QWRkaXRpb25hbFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlSWQpIHtcclxuICAgICAgLy8gR2V0IGFkZGl0aW9uYWwgc2VydmljZXMgZmlsdGVyZWQgYnkgc2VydmljZSBydWxlc1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQsXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOmFkZGl0aW9uYWxfc2VydmljZV9pZCgqKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXMgYnkgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IGFuZCBmb3JtYXQgdGhlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VzID0gKGRhdGEgfHwgW10pXHJcbiAgICAgICAgLm1hcCgocnVsZTogYW55KSA9PiBydWxlLmFkZGl0aW9uYWxfc2VydmljZXMpXHJcbiAgICAgICAgLmZpbHRlcigoc2VydmljZTogQWRkaXRpb25hbFNlcnZpY2UpID0+IHNlcnZpY2UgJiYgc2VydmljZS5pc19hY3RpdmUpXHJcbiAgICAgICAgLnNvcnQoKGE6IEFkZGl0aW9uYWxTZXJ2aWNlLCBiOiBBZGRpdGlvbmFsU2VydmljZSkgPT4gYS5kaXNwbGF5X29yZGVyIC0gYi5kaXNwbGF5X29yZGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBhZGRpdGlvbmFsU2VydmljZXMgYXMgQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBhbGwgYWN0aXZlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBBZGRpdGlvbmFsU2VydmljZVtdO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBob21lIGRldGFpbCBvcHRpb25zIGZvciBhIHNwZWNpZmljIHR5cGUgKGJlZHJvb21zLCBiYXRocm9vbXMsIGNhcnBldF90eXBlLCByb29tX3N0YXR1cylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIb21lRGV0YWlsT3B0aW9ucyhvcHRpb25UeXBlOiBzdHJpbmcpOiBQcm9taXNlPEhvbWVEZXRhaWxPcHRpb25bXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdob21lX2RldGFpbF9vcHRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnb3B0aW9uX3R5cGUnLCBvcHRpb25UeXBlKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBob21lIGRldGFpbCBvcHRpb25zIGZvciAke29wdGlvblR5cGV9OmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoZGF0YSB8fCBbXSkgYXMgSG9tZURldGFpbE9wdGlvbltdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGhvbWUgZGV0YWlsIG9wdGlvbnMgZm9yICR7b3B0aW9uVHlwZX06YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWN0aXZlIGNsZWFuaW5nIGVxdWlwbWVudCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmluZ0VxdWlwbWVudCgpOiBQcm9taXNlPENsZWFuaW5nRXF1aXBtZW50W10+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5pbmdfZXF1aXBtZW50JylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuaW5nIGVxdWlwbWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIENsZWFuaW5nRXF1aXBtZW50W107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5pbmcgZXF1aXBtZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBb1VzQixpTUFBQSJ9
}),
"[project]/app/booking/book/data:0ffd7d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWorkingHours",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00a1ca88359d58fd0af32ce951035da7370074eb17":"getWorkingHours"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00a1ca88359d58fd0af32ce951035da7370074eb17", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getWorkingHours");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1JBZXNCLDRMQUFBIn0=
}),
"[project]/app/booking/book/data:1b474d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWorkingHoursFromOptions",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0034316469aa8c8ec2cb4e83eda347ee4382a5cc26":"getWorkingHoursFromOptions"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0034316469aa8c8ec2cb4e83eda347ee4382a5cc26", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getWorkingHoursFromOptions");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBd0NzQix1TUFBQSJ9
}),
"[project]/app/booking/book/data:82d194 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAvailabilityForAllSlots",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"78cc7191970ba404b03c57202cb05f8cd6b0267354":"checkAvailabilityForAllSlots"},"app/booking/book/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("78cc7191970ba404b03c57202cb05f8cd6b0267354", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "checkAvailabilityForAllSlots");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBCb29raW5nRm9ybURhdGEsIEJvb2tpbmdDcmVhdGVJbnB1dCwgV29ya2luZ0hvdXIsIFRpbWVTbG90QXZhaWxhYmlsaXR5LCBDbGVhbmVyLCBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eSB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVByaWNlIH0gZnJvbSAnQC9saWIvcHJpY2luZy9jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVCb29raW5nTnVtYmVyIH0gZnJvbSAnQC9saWIvdXRpbHMvYm9va2luZy1udW1iZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplUGF5bWVudCB9IGZyb20gJ0AvbGliL3BheXN0YWNrL2NsaWVudCc7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlbGlhYmlsaXR5U2NvcmUsIGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlLCBjYWxjdWxhdGVPblRpbWVSYXRlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2xlYW5lci11dGlscyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJvb2tpbmdEYXRlc0Zvck1vbnRoLCBjYWxjdWxhdGVOZXh0Qm9va2luZ0RhdGUsIGZvcm1hdERhdGVGb3JEQiB9IGZyb20gJ0AvbGliL3V0aWxzL3JlY3VycmluZy1kYXRlcyc7XHJcbmltcG9ydCB7IGlzVmFsaWRGcmVxdWVuY3lGb3JTZXJ2aWNlLCByZXF1aXJlc1RlYW1Cb29raW5nIH0gZnJvbSAnQC9saWIvdXRpbHMvc2VydmljZS12YWxpZGF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIHdvcmtpbmcgaG91cnMgKDMwLW1pbnV0ZSBpbnRlcnZhbCBzdGFydCB0aW1lcylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3JraW5nSG91cnMoKTogUHJvbWlzZTxXb3JraW5nSG91cltdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFdvcmtpbmdIb3VyW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgd29ya2luZyBob3VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHdvcmtpbmcgaG91cnMgZnJvbSBob21lX2RldGFpbF9vcHRpb25zIChiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtpbmdIb3Vyc0Zyb21PcHRpb25zKCk6IFByb21pc2U8QXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2hvbWVfZGV0YWlsX29wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCd2YWx1ZSwgbGFiZWwnKVxyXG4gICAgICAuZXEoJ29wdGlvbl90eXBlJywgJ3dvcmtpbmdfaG91cnMnKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3b3JraW5nIGhvdXJzIGZyb20gb3B0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHdvcmtpbmcgaG91cnMgZnJvbSBvcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBjbGVhbmVyIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIHNsb3RcclxuICogUmV0dXJucyBhdmFpbGFiaWxpdHkgc3RhdHVzIGFuZCBjb3VudCBvZiBhdmFpbGFibGUgY2xlYW5lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NsZWFuZXJBdmFpbGFiaWxpdHlGb3JTbG90KFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVRpbWU6IHN0cmluZyxcclxuICBzZXJ2aWNlRHVyYXRpb246IG51bWJlclxyXG4pOiBQcm9taXNlPFRpbWVTbG90QXZhaWxhYmlsaXR5PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIGFueSBhY3RpdmUgY2xlYW5lcnMgZXhpc3QgaW4gdGhlIHN5c3RlbVxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3RpdmVDbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhY3RpdmUgY2xlYW5lcnM6JywgY2xlYW5lcnNFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGNsZWFuZXJzLCBhc3N1bWUgdW5hdmFpbGFibGUgZm9yIHNhZmV0eVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gYWN0aXZlIGNsZWFuZXJzIGV4aXN0LCBubyBzbG90cyBhcmUgYXZhaWxhYmxlXHJcbiAgICBpZiAoIWFjdGl2ZUNsZWFuZXJzIHx8IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCBhdmFpbGFibGVDbGVhbmVyc0NvdW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxDbGVhbmVycyA9IGFjdGl2ZUNsZWFuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBRdWVyeSBib29raW5ncyBmb3IgdGhlIHNwZWNpZmllZCBkYXRlIHRoYXQgbWlnaHQgb3ZlcmxhcFxyXG4gICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgYm9va2luZ3Mgd2hlcmU6XHJcbiAgICAvLyAoYm9va2luZ19zdGFydF90aW1lIDwgbmV3X2VuZF90aW1lKSBBTkQgKGJvb2tpbmdfZW5kX3RpbWUgPiBuZXdfc3RhcnRfdGltZSlcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkLCBjYW5jZWxsZWQvY29tcGxldGVkKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbiwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgbnVtYmVyX29mX2NsZWFuZXJzJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2RhdGUnLCBzZXJ2aWNlRGF0ZSlcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIC8vIElmIHdlIGNhbid0IGNoZWNrIGJvb2tpbmdzLCBhc3N1bWUgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBObyBib29raW5ncyBmb3IgdGhpcyBkYXRlLCBhbGwgY2xlYW5lcnMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IHRvdGFsQ2xlYW5lcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gVHJhY2sgd2hpY2ggY2xlYW5lcnMgYXJlIGJvb2tlZCAoYnkgSUQpXHJcbiAgICBjb25zdCBib29rZWRDbGVhbmVySWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGVhY2ggZXhpc3RpbmcgYm9va2luZyBmb3Igb3ZlcmxhcFxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIGlmICghYm9va2luZy5zZXJ2aWNlX3RpbWUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBzdGFydCB0aW1lXHJcbiAgICAgIGNvbnN0IFtib29raW5nU3RhcnRIb3VycywgYm9va2luZ1N0YXJ0TWludXRlc10gPSBib29raW5nLnNlcnZpY2VfdGltZVxyXG4gICAgICAgIC5zcGxpdCgnOicpXHJcbiAgICAgICAgLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgLm1hcChOdW1iZXIpO1xyXG4gICAgICBjb25zdCBib29raW5nU3RhcnRUaW1lTWludXRlcyA9IGJvb2tpbmdTdGFydEhvdXJzICogNjAgKyBib29raW5nU3RhcnRNaW51dGVzO1xyXG4gICAgICBcclxuICAgICAgLy8gUGFyc2UgYm9va2luZyBkdXJhdGlvblxyXG4gICAgICBjb25zdCBib29raW5nRHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZChcclxuICAgICAgICAodHlwZW9mIGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiA9PT0gJ251bWJlcicgXHJcbiAgICAgICAgICA/IGJvb2tpbmcuc2VydmljZV9kdXJhdGlvbiBcclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgYW4gb3ZlcmxhcFxyXG4gICAgICAgIC8vIENoZWNrIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBmaXJzdCAobmV3IG11bHRpLWNsZWFuZXIgc3VwcG9ydClcclxuICAgICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICAgIC8vIE11bHRpcGxlIGNsZWFuZXJzIGFyZSBhc3NpZ25lZFxyXG4gICAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoY2xlYW5lcklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZXJJZCkgYm9va2VkQ2xlYW5lcklkcy5hZGQoY2xlYW5lcklkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgICAgLy8gU2luZ2xlIGNsZWFuZXIgYXNzaWduZWQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgICAgICBib29rZWRDbGVhbmVySWRzLmFkZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgbm8gcHJlZmVycmVkIGNsZWFuZXIsIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gY291bnQgZ2VuZXJpYyBjbGVhbmVyIHNsb3RzXHJcbiAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgYm9va2luZ3Mgd2l0aG91dCBzcGVjaWZpYyBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICAgICAgICBjb25zdCBudW1DbGVhbmVycyA9IGJvb2tpbmcubnVtYmVyX29mX2NsZWFuZXJzIHx8IDE7XHJcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgc3BlY2lmaWMgSURzIGhlcmUsIGJ1dCBjb3VudCB0aGVtIGluIGJvb2tpbmdzV2l0aG91dFByZWZlcnJlZENsZWFuZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIGNsZWFuZXJzXHJcbiAgICAvLyBDb3VudCBib29raW5ncyB3aXRob3V0IHByZWZlcnJlZCBjbGVhbmVycyAoZ2VuZXJpYyBhc3NpZ25tZW50cylcclxuICAgIC8vIFRoZXNlIHVzZSBudW1iZXJfb2ZfY2xlYW5lcnMgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNsZWFuZXIgc2xvdHMgYXJlIHRha2VuXHJcbiAgICBjb25zdCBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyID0gYm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZWZlcnJlZENsZWFuZXJzID0gKGIucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYi5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpICYmIGIucHJlZmVycmVkX2NsZWFuZXJfaWRzLmxlbmd0aCA+IDApIHx8IGIucHJlZmVycmVkX2NsZWFuZXJfaWQ7XHJcbiAgICAgICAgaWYgKGhhc1ByZWZlcnJlZENsZWFuZXJzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRpbWUgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IFtob3VycywgbWluc10gPSBiLnNlcnZpY2VfdGltZS5zcGxpdCgnOicpLnNsaWNlKDAsIDIpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaG91cnMgKiA2MCArIG1pbnM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKCh0eXBlb2YgYi5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJyA/IGIuc2VydmljZV9kdXJhdGlvbiA6IHBhcnNlRmxvYXQoYi5zZXJ2aWNlX2R1cmF0aW9uIHx8ICcwJykpICogNjApO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBlbmQgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgKS5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICAvLyBTdW0gdXAgdGhlIG51bWJlcl9vZl9jbGVhbmVycyBmb3IgYm9va2luZ3Mgd2l0aG91dCBwcmVmZXJyZWQgY2xlYW5lcnNcclxuICAgICAgcmV0dXJuIHN1bSArIChiLm51bWJlcl9vZl9jbGVhbmVycyB8fCAxKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHVuYXZhaWxhYmxlQ2xlYW5lcnMgPSBib29rZWRDbGVhbmVySWRzLnNpemUgKyBib29raW5nc1dpdGhvdXRQcmVmZXJyZWRDbGVhbmVyO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudCA9IE1hdGgubWF4KDAsIHRvdGFsQ2xlYW5lcnMgLSB1bmF2YWlsYWJsZUNsZWFuZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUNsZWFuZXJzQ291bnQgPiAwLFxyXG4gICAgICBhdmFpbGFibGVDbGVhbmVyc0NvdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBjbGVhbmVyIGF2YWlsYWJpbGl0eTonLCBlcnJvcik7XHJcbiAgICAvLyBPbiBlcnJvciwgYXNzdW1lIHVuYXZhaWxhYmxlIGZvciBzYWZldHlcclxuICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIGF2YWlsYWJsZUNsZWFuZXJzQ291bnQ6IDAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB0ZWFtIGF2YWlsYWJpbGl0eSBmb3IgYSBzcGVjaWZpYyBkYXRlIGZvciB0ZWFtLWJhc2VkIHNlcnZpY2VzXHJcbiAqIFJldHVybnMgd2hpY2ggdGVhbXMgKDEsIDIsIG9yIDMpIGFyZSBhdmFpbGFibGUgYW5kIHdoaWNoIGFyZSBib29rZWRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gIHNlcnZpY2VEYXRlOiBzdHJpbmcsXHJcbiAgc2VydmljZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBhdmFpbGFibGVUZWFtczogbnVtYmVyW107XHJcbiAgYm9va2VkVGVhbXM6IG51bWJlcltdO1xyXG4gIGFsbFRlYW1zQm9va2VkOiBib29sZWFuO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayBmb3IgdGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpXHJcbiAgICBpZiAoIXJlcXVpcmVzVGVhbUJvb2tpbmcoc2VydmljZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhaWxhYmxlVGVhbXM6IFtdLFxyXG4gICAgICAgIGJvb2tlZFRlYW1zOiBbXSxcclxuICAgICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZSBhbmQgc2VydmljZSB0eXBlXHJcbiAgICAvLyBPbmx5IGNvbnNpZGVyIHBhaWQgYW5kIGNvbmZpcm1lZCBib29raW5ncyAoZXhjbHVkZSBwZW5kaW5nL3VucGFpZCBib29raW5ncylcclxuICAgIC8vIFRlYW1zIHNob3VsZCBvbmx5IGJlIG1hcmtlZCBhcyBib29rZWQgd2hlbiBib29raW5nIGlzIHBhaWQgYW5kIGNyZWF0ZWRcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCd0ZWFtX251bWJlcicpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgnc2VydmljZV90eXBlJywgc2VydmljZVR5cGUpXHJcbiAgICAgIC5ub3QoJ3RlYW1fbnVtYmVyJywgJ2lzJywgbnVsbClcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnY29uZmlybWVkJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGVhbSBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgLy8gSWYgd2UgY2FuJ3QgY2hlY2sgYm9va2luZ3MsIGFzc3VtZSBhbGwgdGVhbXMgYXZhaWxhYmxlIChvcHRpbWlzdGljIGFwcHJvYWNoKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YWlsYWJsZVRlYW1zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICAgIGFsbFRlYW1zQm9va2VkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWN0IGJvb2tlZCB0ZWFtIG51bWJlcnNcclxuICAgIGNvbnN0IGJvb2tlZFRlYW1zID0gKGJvb2tpbmdzIHx8IFtdKVxyXG4gICAgICAubWFwKChib29raW5nKSA9PiBib29raW5nLnRlYW1fbnVtYmVyKVxyXG4gICAgICAuZmlsdGVyKCh0ZWFtTnVtYmVyKTogdGVhbU51bWJlciBpcyBudW1iZXIgPT4gdGVhbU51bWJlciAhPT0gbnVsbCAmJiB0ZWFtTnVtYmVyID49IDEgJiYgdGVhbU51bWJlciA8PSAzKTtcclxuXHJcbiAgICAvLyBHZXQgdW5pcXVlIGJvb2tlZCB0ZWFtcyAoaW4gY2FzZSBvZiBkdXBsaWNhdGVzKVxyXG4gICAgY29uc3QgYm9va2VkVGVhbXNTZXQgPSBuZXcgU2V0KGJvb2tlZFRlYW1zKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgYXZhaWxhYmxlIHRlYW1zICgxLCAyLCAzIG1pbnVzIGJvb2tlZCB0ZWFtcylcclxuICAgIGNvbnN0IGFsbFRlYW1zID0gWzEsIDIsIDNdO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlVGVhbXMgPSBhbGxUZWFtcy5maWx0ZXIoKHRlYW0pID0+ICFib29rZWRUZWFtc1NldC5oYXModGVhbSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YWlsYWJsZVRlYW1zLFxyXG4gICAgICBib29rZWRUZWFtczogQXJyYXkuZnJvbShib29rZWRUZWFtc1NldCksXHJcbiAgICAgIGFsbFRlYW1zQm9va2VkOiBhdmFpbGFibGVUZWFtcy5sZW5ndGggPT09IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGNoZWNraW5nIHRlYW0gYXZhaWxhYmlsaXR5OicsIGVycm9yKTtcclxuICAgIC8vIE9uIGVycm9yLCBhc3N1bWUgYWxsIHRlYW1zIGF2YWlsYWJsZSBmb3Igc2FmZXR5IChsZXQgZGF0YWJhc2UgY29uc3RyYWludCBjYXRjaCBkdXBsaWNhdGVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXZhaWxhYmxlVGVhbXM6IFsxLCAyLCAzXSxcclxuICAgICAgYm9va2VkVGVhbXM6IFtdLFxyXG4gICAgICBhbGxUZWFtc0Jvb2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHMgZm9yIGEgZ2l2ZW4gZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmlsaXR5Rm9yQWxsU2xvdHMoXHJcbiAgc2VydmljZURhdGU6IHN0cmluZyxcclxuICB3b3JraW5nSG91cnM6IFdvcmtpbmdIb3VyW10sXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXIsXHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBUaW1lU2xvdEF2YWlsYWJpbGl0eT4+IHtcclxuICBjb25zdCBhdmFpbGFiaWxpdHk6IFJlY29yZDxzdHJpbmcsIFRpbWVTbG90QXZhaWxhYmlsaXR5PiA9IHt9O1xyXG5cclxuICAvLyBJZiBzZXJ2aWNlIHJlcXVpcmVzIHRlYW0gYm9va2luZywgY2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgaW5zdGVhZFxyXG4gIGlmIChzZXJ2aWNlVHlwZSAmJiByZXF1aXJlc1RlYW1Cb29raW5nKHNlcnZpY2VUeXBlKSkge1xyXG4gICAgY29uc3QgdGVhbUF2YWlsYWJpbGl0eSA9IGF3YWl0IGNoZWNrVGVhbUF2YWlsYWJpbGl0eUZvckRhdGUoc2VydmljZURhdGUsIHNlcnZpY2VUeXBlKTtcclxuICAgIFxyXG4gICAgLy8gRm9yIHRlYW0tYmFzZWQgc2VydmljZXMsIGF2YWlsYWJpbGl0eSBpcyBkYXktYmFzZWQsIG5vdCB0aW1lLWJhc2VkXHJcbiAgICAvLyBJZiBhbGwgdGVhbXMgYXJlIGJvb2tlZCwgYWxsIHNsb3RzIGFyZSB1bmF2YWlsYWJsZVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBzbG90cyBhcmUgYXZhaWxhYmxlIChidXQgd2UnbGwgc2hvdyB0ZWFtIHNlbGVjdGlvbiBpbiBVSSlcclxuICAgIGNvbnN0IHNsb3RzQXZhaWxhYmxlID0gIXRlYW1BdmFpbGFiaWxpdHkuYWxsVGVhbXNCb29rZWQ7XHJcbiAgICBjb25zdCBhdmFpbGFibGVUZWFtc0NvdW50ID0gdGVhbUF2YWlsYWJpbGl0eS5hdmFpbGFibGVUZWFtcy5sZW5ndGg7XHJcbiAgICBcclxuICAgIC8vIFNldCBzYW1lIGF2YWlsYWJpbGl0eSBmb3IgYWxsIHRpbWUgc2xvdHNcclxuICAgIHdvcmtpbmdIb3Vycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGF2YWlsYWJpbGl0eVtob3VyLnN0YXJ0X3RpbWVdID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZTogc2xvdHNBdmFpbGFibGUsXHJcbiAgICAgICAgYXZhaWxhYmxlQ2xlYW5lcnNDb3VudDogYXZhaWxhYmxlVGVhbXNDb3VudCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdmFpbGFiaWxpdHk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgcmVndWxhciBzZXJ2aWNlcywgY2hlY2sgaW5kaXZpZHVhbCBjbGVhbmVyIGF2YWlsYWJpbGl0eSBwZXIgdGltZSBzbG90XHJcbiAgY29uc3QgcHJvbWlzZXMgPSB3b3JraW5nSG91cnMubWFwKGFzeW5jIChob3VyKSA9PiB7XHJcbiAgICBjb25zdCBzbG90QXZhaWxhYmlsaXR5ID0gYXdhaXQgY2hlY2tDbGVhbmVyQXZhaWxhYmlsaXR5Rm9yU2xvdChcclxuICAgICAgc2VydmljZURhdGUsXHJcbiAgICAgIGhvdXIuc3RhcnRfdGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgdGltZTogaG91ci5zdGFydF90aW1lLCBhdmFpbGFiaWxpdHk6IHNsb3RBdmFpbGFiaWxpdHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICBcclxuICByZXN1bHRzLmZvckVhY2goKHsgdGltZSwgYXZhaWxhYmlsaXR5OiBhdmFpbCB9KSA9PiB7XHJcbiAgICBhdmFpbGFiaWxpdHlbdGltZV0gPSBhdmFpbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGF2YWlsYWJpbGl0eTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGRpc2NvdW50IGNvZGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZURpc2NvdW50Q29kZShjb2RlOiBzdHJpbmcsIHN1YnRvdGFsOiBudW1iZXIpOiBQcm9taXNlPHtcclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBkaXNjb3VudEFtb3VudDogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghY29kZSB8fCAhY29kZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Rpc2NvdW50X2NvZGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnY29kZScsIGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGRpc2NvdW50QW1vdW50OiAwLCBlcnJvcjogJ0ludmFsaWQgZGlzY291bnQgY29kZScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB2YWxpZGl0eSBkYXRlc1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHZhbGlkRnJvbSA9IG5ldyBEYXRlKGRhdGEudmFsaWRfZnJvbSk7XHJcbiAgICBjb25zdCB2YWxpZFVudGlsID0gbmV3IERhdGUoZGF0YS52YWxpZF91bnRpbCk7XHJcblxyXG4gICAgaWYgKG5vdyA8IHZhbGlkRnJvbSB8fCBub3cgPiB2YWxpZFVudGlsKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRGlzY291bnQgY29kZSBoYXMgZXhwaXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtYXggdXNlc1xyXG4gICAgaWYgKGRhdGEubWF4X3VzZXMgJiYgZGF0YS51c2VkX2NvdW50ID49IGRhdGEubWF4X3VzZXMpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBkaXNjb3VudEFtb3VudDogMCwgZXJyb3I6ICdEaXNjb3VudCBjb2RlIGhhcyByZWFjaGVkIG1heGltdW0gdXNlcycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBtaW4gcHVyY2hhc2UgYW1vdW50XHJcbiAgICBpZiAoZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50ICYmIHN1YnRvdGFsIDwgZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50KSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSwgXHJcbiAgICAgICAgZGlzY291bnRBbW91bnQ6IDAsIFxyXG4gICAgICAgIGVycm9yOiBgTWluaW11bSBwdXJjaGFzZSBhbW91bnQgb2YgUiR7ZGF0YS5taW5fcHVyY2hhc2VfYW1vdW50fSByZXF1aXJlZGAgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGRpc2NvdW50IGFtb3VudFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50X3R5cGUgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICBkaXNjb3VudEFtb3VudCA9IChzdWJ0b3RhbCAqIGRhdGEuZGlzY291bnRfdmFsdWUpIC8gMTAwO1xyXG4gICAgICBpZiAoZGF0YS5tYXhfZGlzY291bnRfYW1vdW50ICYmIGRpc2NvdW50QW1vdW50ID4gZGF0YS5tYXhfZGlzY291bnRfYW1vdW50KSB7XHJcbiAgICAgICAgZGlzY291bnRBbW91bnQgPSBkYXRhLm1heF9kaXNjb3VudF9hbW91bnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50ID0gZGF0YS5kaXNjb3VudF92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgZGlzY291bnQgZG9lc24ndCBleGNlZWQgc3VidG90YWxcclxuICAgIGRpc2NvdW50QW1vdW50ID0gTWF0aC5taW4oZGlzY291bnRBbW91bnQsIHN1YnRvdGFsKTtcclxuXHJcbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGlzY291bnRBbW91bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZGlzY291bnRBbW91bnQ6IDAsIGVycm9yOiAnRXJyb3IgdmFsaWRhdGluZyBkaXNjb3VudCBjb2RlJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBib29raW5nIGRyYWZ0IChiZWZvcmUgcGF5bWVudClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nRHJhZnQoZm9ybURhdGE6IEJvb2tpbmdGb3JtRGF0YSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ0lkPzogc3RyaW5nO1xyXG4gIGJvb2tpbmdJZHM/OiBzdHJpbmdbXTtcclxuICB0b3RhbEFtb3VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHVzZXIgaWYgbG9nZ2VkIGluXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkIHx8IG51bGw7XHJcblxyXG4gICAgLy8gR2V0IHNlcnZpY2UgbmFtZVxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCduYW1lJylcclxuICAgICAgLmVxKCdpZCcsIGZvcm1EYXRhLnNlcnZpY2VJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2aWNlIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHRoZSBzZWxlY3RlZCBmcmVxdWVuY3kgaXMgdmFsaWQgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgaWYgKCFpc1ZhbGlkRnJlcXVlbmN5Rm9yU2VydmljZShzZXJ2aWNlLm5hbWUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6IGBSZWN1cnJpbmcgYm9va2luZ3MgYXJlIG9ubHkgYXZhaWxhYmxlIGZvciBTdGFuZGFyZCBDbGVhbmluZyBhbmQgQWlyYm5iIENsZWFuaW5nIHNlcnZpY2VzLiBTZWxlY3RlZCBzZXJ2aWNlOiAke3NlcnZpY2UubmFtZX1gIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHNlcnZpY2UgcmVxdWlyZXMgdGVhbSBib29raW5nXHJcbiAgICBjb25zdCBpc1RlYW1Cb29raW5nID0gcmVxdWlyZXNUZWFtQm9va2luZyhzZXJ2aWNlLm5hbWUpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRlYW0gYm9va2luZyByZXF1aXJlbWVudHNcclxuICAgIGlmIChpc1RlYW1Cb29raW5nKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEudGVhbU51bWJlciB8fCAoZm9ybURhdGEudGVhbU51bWJlciA8IDEgfHwgZm9ybURhdGEudGVhbU51bWJlciA+IDMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IGEgdGVhbSAoMSwgMiwgb3IgMykgZm9yIHRoaXMgc2VydmljZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgdGVhbSBhdmFpbGFiaWxpdHkgZm9yIGVhY2ggYm9va2luZyBkYXRlXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRhLnNlcnZpY2VEYXRlKTtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGVzID0gY2FsY3VsYXRlQm9va2luZ0RhdGVzRm9yTW9udGgoc3RhcnREYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IGJvb2tpbmdEYXRlIG9mIGJvb2tpbmdEYXRlcykge1xyXG4gICAgICAgIGNvbnN0IHRlYW1BdmFpbGFiaWxpdHkgPSBhd2FpdCBjaGVja1RlYW1BdmFpbGFiaWxpdHlGb3JEYXRlKFxyXG4gICAgICAgICAgZm9ybWF0RGF0ZUZvckRCKGJvb2tpbmdEYXRlKSxcclxuICAgICAgICAgIHNlcnZpY2UubmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0ZWFtQXZhaWxhYmlsaXR5LmF2YWlsYWJsZVRlYW1zLmluY2x1ZGVzKGZvcm1EYXRhLnRlYW1OdW1iZXIhKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGBUZWFtICR7Zm9ybURhdGEudGVhbU51bWJlcn0gaXMgYWxyZWFkeSBib29rZWQgZm9yICR7ZGF0ZVN0cn0uIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgdGVhbSBvciBkYXRlLmAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRm9yIG5vbi10ZWFtIGJvb2tpbmdzLCBlbnN1cmUgdGVhbU51bWJlciBpcyBub3Qgc2V0XHJcbiAgICAgIGlmIChmb3JtRGF0YS50ZWFtTnVtYmVyICE9PSBudWxsICYmIGZvcm1EYXRhLnRlYW1OdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnVGVhbSBzZWxlY3Rpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IHNlcnZpY2VzJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByaWNpbmdcclxuICAgIGNvbnN0IHByaWNlQnJlYWtkb3duID0gYXdhaXQgY2FsY3VsYXRlUHJpY2Uoe1xyXG4gICAgICBzZXJ2aWNlSWQ6IGZvcm1EYXRhLnNlcnZpY2VJZCxcclxuICAgICAgc2VydmljZU5hbWU6IHNlcnZpY2UubmFtZSxcclxuICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICBiYXRocm9vbXM6IGZvcm1EYXRhLmJhdGhyb29tcyxcclxuICAgICAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgY2xlYW5pbmdGcmVxdWVuY3k6IGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5LFxyXG4gICAgICBkaXNjb3VudEFtb3VudDogMCwgLy8gV2lsbCBjYWxjdWxhdGUgZGlzY291bnQgaW4gbmV4dCBzdGVwXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwbHkgZGlzY291bnQgY29kZSBpZiBwcm92aWRlZFxyXG4gICAgbGV0IGRpc2NvdW50QW1vdW50ID0gMDtcclxuICAgIGlmIChmb3JtRGF0YS5kaXNjb3VudENvZGUpIHtcclxuICAgICAgY29uc3QgZGlzY291bnRWYWxpZGF0aW9uID0gYXdhaXQgdmFsaWRhdGVEaXNjb3VudENvZGUoXHJcbiAgICAgICAgZm9ybURhdGEuZGlzY291bnRDb2RlLFxyXG4gICAgICAgIHByaWNlQnJlYWtkb3duLnN1YnRvdGFsIC0gcHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGRpc2NvdW50VmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgIGRpc2NvdW50QW1vdW50ID0gZGlzY291bnRWYWxpZGF0aW9uLmRpc2NvdW50QW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgd2l0aCBkaXNjb3VudFxyXG4gICAgY29uc3QgZmluYWxQcmljZUJyZWFrZG93biA9IGF3YWl0IGNhbGN1bGF0ZVByaWNlKHtcclxuICAgICAgc2VydmljZUlkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgIGJlZHJvb21zOiBmb3JtRGF0YS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBmb3JtRGF0YS5iYXRocm9vbXMsXHJcbiAgICAgIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBmb3JtRGF0YS5hZGRpdGlvbmFsU2VydmljZXMsXHJcbiAgICAgIGNsZWFuaW5nRnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgZGlzY291bnRBbW91bnQsXHJcbiAgICAgIGNsZWFuaW5nRXF1aXBtZW50OiBmb3JtRGF0YS5jbGVhbmluZ0VxdWlwbWVudCxcclxuICAgICAgbnVtYmVyT2ZDbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgaXMgYSByZWN1cnJpbmcgYm9va2luZ1xyXG4gICAgLy8gTm90ZTogVGVhbS1iYXNlZCBzZXJ2aWNlcyAoRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQpIGRvbid0IHN1cHBvcnQgcmVjdXJyaW5nIGJvb2tpbmdzXHJcbiAgICAvLyBidXQgd2UnbGwgaGFuZGxlIGl0IGdyYWNlZnVsbHkgaWYgc29tZWhvdyBhIHJlY3VycmluZyBmcmVxdWVuY3kgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZm9ybURhdGEuY2xlYW5pbmdGcmVxdWVuY3kgIT09ICdvbmUtdGltZSc7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGJvb2tpbmcgZGF0ZXMgYmFzZWQgb24gZnJlcXVlbmN5XHJcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShmb3JtRGF0YS5zZXJ2aWNlRGF0ZSk7XHJcbiAgICBjb25zdCBib29raW5nRGF0ZXMgPSBjYWxjdWxhdGVCb29raW5nRGF0ZXNGb3JNb250aChzdGFydERhdGUsIGZvcm1EYXRhLmNsZWFuaW5nRnJlcXVlbmN5KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV4dCBib29raW5nIGRhdGUgZm9yIHJlY3VycmluZyBib29raW5nc1xyXG4gICAgbGV0IG5leHRCb29raW5nRGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgaWYgKGlzUmVjdXJyaW5nICYmIGJvb2tpbmdEYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gYm9va2luZ0RhdGVzW2Jvb2tpbmdEYXRlcy5sZW5ndGggLSAxXTtcclxuICAgICAgbmV4dEJvb2tpbmdEYXRlID0gY2FsY3VsYXRlTmV4dEJvb2tpbmdEYXRlKGxhc3REYXRlLCBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvb2tpbmdzIGZvciBhbGwgZGF0ZXNcclxuICAgIGNvbnN0IGJvb2tpbmdzVG9DcmVhdGU6IEJvb2tpbmdDcmVhdGVJbnB1dFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29raW5nRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9va2luZ0RhdGUgPSBib29raW5nRGF0ZXNbaV07XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBnZW5lcmF0ZUJvb2tpbmdOdW1iZXIoKTtcclxuXHJcbiAgICAgIC8vIFRpcCBpcyBvbmx5IGFwcGxpZWQgdG8gdGhlIGZpcnN0IGJvb2tpbmcgaW4gYSByZWN1cnJpbmcgc2VyaWVzIChvbmUtdGltZSBwYXltZW50KVxyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSAoaSA9PT0gMCkgPyAoZm9ybURhdGEudGlwQW1vdW50IHx8IDApIDogMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdJbnB1dDogQm9va2luZ0NyZWF0ZUlucHV0ID0ge1xyXG4gICAgICAgIGJvb2tpbmdfbnVtYmVyOiBib29raW5nTnVtYmVyLFxyXG4gICAgICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU6IGZvcm1EYXRhLmN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2xhc3RfbmFtZTogZm9ybURhdGEuY3VzdG9tZXJMYXN0TmFtZSxcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZm9ybURhdGEuY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9waG9uZTogZm9ybURhdGEuY3VzdG9tZXJQaG9uZSxcclxuICAgICAgICBzZXJ2aWNlX2lkOiBmb3JtRGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgc2VydmljZV90eXBlOiBzZXJ2aWNlLm5hbWUsXHJcbiAgICAgICAgYmVkcm9vbXM6IGZvcm1EYXRhLmJlZHJvb21zLFxyXG4gICAgICAgIGJhdGhyb29tczogZm9ybURhdGEuYmF0aHJvb21zLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZXM6IGZvcm1EYXRhLmFkZGl0aW9uYWxTZXJ2aWNlcyxcclxuICAgICAgICBjbGVhbmluZ19lcXVpcG1lbnQ6IGZvcm1EYXRhLmNsZWFuaW5nRXF1aXBtZW50LFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogaXNUZWFtQm9va2luZyBcclxuICAgICAgICAgID8gbnVsbCAvLyBUZWFtIGJvb2tpbmdzIGRvbid0IGhhdmUgcHJlZmVycmVkIGNsZWFuZXJzXHJcbiAgICAgICAgICA6IChmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzICYmIGZvcm1EYXRhLnByZWZlcnJlZENsZWFuZXJJZHMubGVuZ3RoID4gMCBcclxuICAgICAgICAgICAgPyBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzIFxyXG4gICAgICAgICAgICA6IG51bGwpLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBpc1RlYW1Cb29raW5nXHJcbiAgICAgICAgICA/IG51bGwgLy8gVGVhbSBib29raW5ncyBkb24ndCBoYXZlIHByZWZlcnJlZCBjbGVhbmVyc1xyXG4gICAgICAgICAgOiAoZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkcyAmJiBmb3JtRGF0YS5wcmVmZXJyZWRDbGVhbmVySWRzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgICAgID8gZm9ybURhdGEucHJlZmVycmVkQ2xlYW5lcklkc1swXSBcclxuICAgICAgICAgICAgOiBudWxsKSwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eTogc2V0IHRvIGZpcnN0IGNsZWFuZXJcclxuICAgICAgICB0ZWFtX251bWJlcjogaXNUZWFtQm9va2luZyAmJiBmb3JtRGF0YS50ZWFtTnVtYmVyID8gZm9ybURhdGEudGVhbU51bWJlciA6IG51bGwsXHJcbiAgICAgICAgY2xlYW5pbmdfZnJlcXVlbmN5OiBmb3JtRGF0YS5jbGVhbmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBzZXJ2aWNlX2RhdGU6IGZvcm1hdERhdGVGb3JEQihib29raW5nRGF0ZSksXHJcbiAgICAgICAgc2VydmljZV90aW1lOiBmb3JtRGF0YS5zZXJ2aWNlVGltZSxcclxuICAgICAgICBzZXJ2aWNlX2R1cmF0aW9uOiBmb3JtRGF0YS5zZXJ2aWNlRHVyYXRpb24sXHJcbiAgICAgICAgc2VydmljZV9hZGRyZXNzOiBmb3JtRGF0YS5zZXJ2aWNlQWRkcmVzcyxcclxuICAgICAgICBzZXJ2aWNlX2FwdF91bml0OiBmb3JtRGF0YS5zZXJ2aWNlQXB0VW5pdCB8fCBudWxsLFxyXG4gICAgICAgIHNlcnZpY2Vfc3VidXJiOiBmb3JtRGF0YS5zZXJ2aWNlU3VidXJiLFxyXG4gICAgICAgIHNlcnZpY2VfY2l0eTogZm9ybURhdGEuc2VydmljZUNpdHksXHJcbiAgICAgICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGZvcm1EYXRhLnNwZWNpYWxJbnN0cnVjdGlvbnMgfHwgbnVsbCxcclxuICAgICAgICB0aXBfYW1vdW50OiB0aXBBbW91bnQsXHJcbiAgICAgICAgYmFzZV9wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5iYXNlUHJpY2UsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlc19wcmljZTogZmluYWxQcmljZUJyZWFrZG93bi5hZGRpdGlvbmFsU2VydmljZXNQcmljZSxcclxuICAgICAgICBlcXVpcG1lbnRfc3VwcGx5X3ByaWNlOiBmaW5hbFByaWNlQnJlYWtkb3duLmVxdWlwbWVudFN1cHBseVByaWNlLFxyXG4gICAgICAgIG51bWJlcl9vZl9jbGVhbmVyczogZm9ybURhdGEubnVtYmVyT2ZDbGVhbmVycyB8fCAxLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfY2xlYW5lcnNfcHJpY2U6IGZpbmFsUHJpY2VCcmVha2Rvd24uYWRkaXRpb25hbENsZWFuZXJzUHJpY2UsXHJcbiAgICAgICAgZnJlcXVlbmN5X2Rpc2NvdW50X3BlcmNlbnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRQZXJjZW50LFxyXG4gICAgICAgIGZyZXF1ZW5jeV9kaXNjb3VudF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24uZnJlcXVlbmN5RGlzY291bnRBbW91bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGZpbmFsUHJpY2VCcmVha2Rvd24uc3VidG90YWwsXHJcbiAgICAgICAgc2VydmljZV9mZWU6IGZpbmFsUHJpY2VCcmVha2Rvd24uc2VydmljZUZlZSxcclxuICAgICAgICB0b3RhbF9hbW91bnQ6IGZpbmFsUHJpY2VCcmVha2Rvd24udG90YWxBbW91bnQgKyB0aXBBbW91bnQsXHJcbiAgICAgICAgZGlzY291bnRfY29kZTogZm9ybURhdGEuZGlzY291bnRDb2RlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzY291bnRfYW1vdW50OiBkaXNjb3VudEFtb3VudCxcclxuICAgICAgICByZWZlcnJhbF9jb2RlOiBmb3JtRGF0YS5yZWZlcnJhbENvZGUgfHwgbnVsbCxcclxuICAgICAgICBhbW91bnRfcGFpZDogMCxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBwYXJlbnRfYm9va2luZ19pZDogbnVsbCwgLy8gV2lsbCBiZSB1cGRhdGVkIGFmdGVyIGZpcnN0IGJvb2tpbmcgaXMgY3JlYXRlZFxyXG4gICAgICAgIGlzX3JlY3VycmluZzogaXNSZWN1cnJpbmcsXHJcbiAgICAgICAgcmVjdXJyZW5jZV9zdGF0dXM6IGlzUmVjdXJyaW5nID8gJ2FjdGl2ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dF9ib29raW5nX2RhdGU6IGkgPT09IDAgJiYgaXNSZWN1cnJpbmcgJiYgbmV4dEJvb2tpbmdEYXRlID8gZm9ybWF0RGF0ZUZvckRCKG5leHRCb29raW5nRGF0ZSkgOiBudWxsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogMCwgLy8gV2lsbCBiZSB1cGRhdGVkIHdoZW4gY3JlZGl0cyBhcmUgdXNlZCBkdXJpbmcgcGF5bWVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYm9va2luZ3NUb0NyZWF0ZS5wdXNoKGJvb2tpbmdJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IGFsbCBib29raW5nc1xyXG4gICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZEJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLmluc2VydChib29raW5nc1RvQ3JlYXRlKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdG90YWxfYW1vdW50Jyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJvb2tpbmcgZHJhZnRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbnNlcnRlZEJvb2tpbmdzIHx8IGluc2VydGVkQm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHBhcmVudF9ib29raW5nX2lkIGZvciBzdWJzZXF1ZW50IGJvb2tpbmdzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZVxyXG4gICAgaWYgKGluc2VydGVkQm9va2luZ3MubGVuZ3RoID4gMSAmJiBpc1JlY3VycmluZykge1xyXG4gICAgICBjb25zdCBmaXJzdEJvb2tpbmdJZCA9IGluc2VydGVkQm9va2luZ3NbMF0uaWQ7XHJcbiAgICAgIGNvbnN0IHN1YnNlcXVlbnRCb29raW5nSWRzID0gaW5zZXJ0ZWRCb29raW5ncy5zbGljZSgxKS5tYXAoYiA9PiBiLmlkKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBhbGwgc3Vic2VxdWVudCBib29raW5ncyB0byByZWZlcmVuY2UgdGhlIGZpcnN0IG9uZVxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwYXJlbnRfYm9va2luZ19pZDogZmlyc3RCb29raW5nSWQgfSlcclxuICAgICAgICAuaW4oJ2lkJywgc3Vic2VxdWVudEJvb2tpbmdJZHMpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcGFyZW50X2Jvb2tpbmdfaWQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIC8vIERvbid0IGZhaWwsIGJ1dCBsb2cgdGhlIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGluc2VydGVkQm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHN1bSArIE51bWJlcihib29raW5nLnRvdGFsX2Ftb3VudCksIDApO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IGluc2VydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4gYm9va2luZy5pZCk7XHJcblxyXG4gICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFsc28gcmV0dXJuIHNpbmdsZSBib29raW5nSWRcclxuICAgIGNvbnN0IGJvb2tpbmdJZCA9IGJvb2tpbmdJZHNbMF07XHJcblxyXG4gICAgLy8gSWYgbXVsdGlwbGUgYm9va2luZ3MsIHJldHVybiBhcnJheTsgb3RoZXJ3aXNlIHJldHVybiBzaW5nbGUgSUQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChib29raW5nSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgYm9va2luZ0lkcyxcclxuICAgICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgICBib29raW5nSWQgLy8gS2VlcCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgYm9va2luZ0lkLFxyXG4gICAgICBib29raW5nSWRzLFxyXG4gICAgICB0b3RhbEFtb3VudFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjcmVhdGluZyBib29raW5nIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgcGF5bWVudCBmb3IgYm9va2luZyhzKVxyXG4gKiBBY2NlcHRzIGVpdGhlciBhIHNpbmdsZSBib29raW5nSWQgb3IgYW4gYXJyYXkgb2YgYm9va2luZ0lkc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYXltZW50Rm9yQm9va2luZyhcclxuICBib29raW5nSWRPcklkczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgYm9va2luZ0lkcyA9IEFycmF5LmlzQXJyYXkoYm9va2luZ0lkT3JJZHMpID8gYm9va2luZ0lkT3JJZHMgOiBbYm9va2luZ0lkT3JJZHNdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZyBkZXRhaWxzXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcocykgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBib29raW5ncyBhcmUgaW4gcGVuZGluZyBzdGF0dXNcclxuICAgIGNvbnN0IG5vblBlbmRpbmdCb29raW5ncyA9IGJvb2tpbmdzLmZpbHRlcihiID0+IGIucGF5bWVudF9zdGF0dXMgIT09ICdwZW5kaW5nJyk7XHJcbiAgICBpZiAobm9uUGVuZGluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU29tZSBib29raW5ncyBhcmUgbm90IGluIHBlbmRpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGFtb3VudCBmcm9tIGFsbCBib29raW5ncyAoaW5jbHVkaW5nIHRpcClcclxuICAgIC8vIE5vdGU6IHRvdGFsX2Ftb3VudCBpbiBkYXRhYmFzZSBub3cgaW5jbHVkZXMgdGlwIGZvciBuZXcgYm9va2luZ3NcclxuICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgYm9va2luZ3MgdGhhdCBtaWdodCBub3QgaGF2ZSB0aXAgaW4gdG90YWxfYW1vdW50LCBcclxuICAgIC8vIHdlIGNoZWNrIGFuZCBhZGQgdGlwX2Ftb3VudCBpZiBpdCdzIG1pc3NpbmdcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgYm9va2luZ1RvdGFsID0gTnVtYmVyKGJvb2tpbmcudG90YWxfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCB0aXBBbW91bnQgPSBOdW1iZXIoYm9va2luZy50aXBfYW1vdW50KSB8fCAwO1xyXG4gICAgICBjb25zdCBiYXNlVG90YWwgPSBOdW1iZXIoYm9va2luZy5zdWJ0b3RhbCB8fCAwKSArIE51bWJlcihib29raW5nLnNlcnZpY2VfZmVlIHx8IDApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgdGlwIGlzIGFscmVhZHkgaW5jbHVkZWQgaW4gdG90YWxfYW1vdW50XHJcbiAgICAgIC8vIElmIHRvdGFsX2Ftb3VudCBlcXVhbHMgYmFzZVRvdGFsIGV4YWN0bHksIHRoZW4gdGlwIGlzIG5vdCBpbmNsdWRlZCwgc28gYWRkIGl0XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdG90YWxfYW1vdW50IGFscmVhZHkgaW5jbHVkZXMgdGlwXHJcbiAgICAgIGlmICh0aXBBbW91bnQgPiAwICYmIE1hdGguYWJzKGJvb2tpbmdUb3RhbCAtIGJhc2VUb3RhbCkgPCAwLjAxKSB7XHJcbiAgICAgICAgLy8gVGlwIGlzIG5vdCBpbmNsdWRlZCBpbiB0b3RhbF9hbW91bnQgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2FzZSlcclxuICAgICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsICsgdGlwQW1vdW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRpcCBpcyBhbHJlYWR5IGluY2x1ZGVkIGluIHRvdGFsX2Ftb3VudCAobmV3IGJvb2tpbmdzKVxyXG4gICAgICByZXR1cm4gc3VtICsgYm9va2luZ1RvdGFsO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGNyZWRpdHMgdXNlZCBhY3Jvc3MgYWxsIGJvb2tpbmdzXHJcbiAgICBjb25zdCB0b3RhbENyZWRpdHNVc2VkID0gYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHN1bSArIChOdW1iZXIoYm9va2luZy5jcmVkaXRzX3VzZWQpIHx8IDApO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHJlbWFpbmluZyBhbW91bnQgYWZ0ZXIgY3JlZGl0c1xyXG4gICAgY29uc3QgcmVtYWluaW5nQW1vdW50ID0gdG90YWxBbW91bnQgLSB0b3RhbENyZWRpdHNVc2VkO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgZmlyc3QgYm9va2luZydzIGVtYWlsIGFuZCBkZXRhaWxzIGZvciBwYXltZW50XHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmcgPSBib29raW5nc1swXTtcclxuXHJcbiAgICAvLyBJZiBjcmVkaXRzIGZ1bGx5IGNvdmVyIHRoZSBib29raW5nLCBtYXJrIGFzIHBhaWQgYW5kIHNraXAgUGF5c3RhY2tcclxuICAgIGlmIChyZW1haW5pbmdBbW91bnQgPD0gMCkge1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIGJvb2tpbmdzIHRvIG1hcmsgYXMgcGFpZFxyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcclxuICAgICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbEFtb3VudCwgLy8gRnVsbHkgcGFpZCB3aXRoIGNyZWRpdHNcclxuICAgICAgICAgIHN0YXR1czogJ2NvbmZpcm1lZCcsIC8vIEF1dG8tY29uZmlybSB3aGVuIGZ1bGx5IHBhaWRcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHBheW1lbnQgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgcGF5bWVudCBzdGF0dXMnIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uVXJsIC0gcGF5bWVudCBmdWxseSBjb3ZlcmVkIGJ5IGNyZWRpdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJ0aWFsIGNyZWRpdCBjb3ZlcmFnZSBvciBubyBjcmVkaXRzIC0gcHJvY2VlZCB3aXRoIFBheXN0YWNrIGZvciByZW1haW5pbmcgYW1vdW50XHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBmaXJzdEJvb2tpbmcucGF5c3RhY2tfcmVmZXJlbmNlIHx8IGAke2ZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcn0ke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBQYXlzdGFjayBwYXltZW50IHdpdGggcmVtYWluaW5nIGFtb3VudCAoYWZ0ZXIgY3JlZGl0cylcclxuICAgIGNvbnN0IHBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYWxpemVQYXltZW50KFxyXG4gICAgICBmaXJzdEJvb2tpbmcuY3VzdG9tZXJfZW1haWwsXHJcbiAgICAgIHJlbWFpbmluZ0Ftb3VudCwgLy8gT25seSBjaGFyZ2UgdGhlIHJlbWFpbmluZyBhbW91bnRcclxuICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9va2luZ19pZHM6IGJvb2tpbmdJZHMsXHJcbiAgICAgICAgYm9va2luZ19pZDogZmlyc3RCb29raW5nLmlkLCAvLyBLZWVwIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgYm9va2luZ19udW1iZXI6IGZpcnN0Qm9va2luZy5ib29raW5nX251bWJlcixcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZmlyc3RCb29raW5nLmN1c3RvbWVyX2VtYWlsLFxyXG4gICAgICAgIGNyZWRpdHNfdXNlZDogdG90YWxDcmVkaXRzVXNlZCwgLy8gSW5jbHVkZSBpbiBtZXRhZGF0YSBmb3IgdHJhY2tpbmdcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnRSZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBwYXltZW50UmVzcG9uc2UubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIHJlZmVyZW5jZSB0aGF0IFBheXN0YWNrIGFjdHVhbGx5IHJldHVybmVkIChtYXkgZGlmZmVyIGZyb20gd2hhdCB3ZSBzZW50KVxyXG4gICAgY29uc3QgcGF5c3RhY2tSZWZlcmVuY2UgPSBwYXltZW50UmVzcG9uc2UuZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gICAgLy8gVXBkYXRlIGFsbCBib29raW5ncyB3aXRoIHRoZSBQYXlzdGFjayByZWZlcmVuY2UgYW5kIHBhcnRpYWwgcGF5bWVudCBmcm9tIGNyZWRpdHNcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHBheXN0YWNrUmVmZXJlbmNlLFxyXG4gICAgICAgIGFtb3VudF9wYWlkOiB0b3RhbENyZWRpdHNVc2VkLCAvLyBQYXJ0aWFsIHBheW1lbnQgZnJvbSBjcmVkaXRzLCBQYXlzdGFjayB3aWxsIGNvbXBsZXRlIGl0XHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmdzIHdpdGggUGF5c3RhY2sgcmVmZXJlbmNlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50UmVzcG9uc2UuZGF0YS5hdXRob3JpemF0aW9uX3VybCxcclxuICAgICAgcmVmZXJlbmNlOiBwYXlzdGFja1JlZmVyZW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBwYXltZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIGJ5IElEXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZyhib29raW5nSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IGFueTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZhaWxhYmxlIGNsZWFuZXJzIGZvciBzZWxlY3Rpb25cclxuICogT3B0aW9uYWxseSBmaWx0ZXIgYnkgc2VydmljZSBhcmVhL3N1YnVyYlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNsZWFuZXJzKHNlcnZpY2VTdWJ1cmI/OiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXJzPzogYW55W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSAtIG9ubHkgZmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0c1xyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgYWxsIGFjdGl2ZSBjbGVhbmVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IGRhdGEgfHwgW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZSBpZiB0aGUgY29sdW1uIGV4aXN0cyAoY2xpZW50LXNpZGUgZmlsdGVyIGFzIGZhbGxiYWNrKVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgLy8gSWYgaXNfYXZhaWxhYmxlIGNvbHVtbiBkb2Vzbid0IGV4aXN0IG9yIGlzIG51bGwvdW5kZWZpbmVkLCBpbmNsdWRlIHRoZSBjbGVhbmVyXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgb25seSBpbmNsdWRlIGlmIGlzX2F2YWlsYWJsZSBpcyB0cnVlXHJcbiAgICAgIHJldHVybiBjbGVhbmVyLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgYXJlYSBpZiBzdWJ1cmIgaXMgcHJvdmlkZWRcclxuICAgIC8vIFNpbmNlIFBvc3RncmVTUUwgYXJyYXkgY29udGFpbnMgaXMgY29tcGxleCBpbiBTdXBhYmFzZSwgd2UgZmlsdGVyIGNsaWVudC1zaWRlXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICAvLyBJZiBjbGVhbmVyIGhhcyBubyBhcmVhcyBzcGVjaWZpZWQsIGluY2x1ZGUgdGhlbSAodGhleSBzZXJ2ZSBhbGwgYXJlYXMpXHJcbiAgICAgICAgaWYgKCFjbGVhbmVyLmFyZWFzIHx8IGNsZWFuZXIuYXJlYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFyZWEgbWF0Y2hlcyB0aGUgc3VidXJiIChjYXNlLWluc2Vuc2l0aXZlIHBhcnRpYWwgbWF0Y2gpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgZGF5IG9mIHRoZSB3ZWVrXHJcbiAqIGRheU9mV2VlazogMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgLi4uLCA2ID0gU2F0dXJkYXlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0NsZWFuZXJBdmFpbGFibGVGb3JEYXkoY2xlYW5lcjogYW55LCBkYXlPZldlZWs6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRheU1hcDogUmVjb3JkPG51bWJlciwga2V5b2YgdHlwZW9mIGNsZWFuZXI+ID0ge1xyXG4gICAgMDogJ2F2YWlsYWJsZV9zdW5kYXknLFxyXG4gICAgMTogJ2F2YWlsYWJsZV9tb25kYXknLFxyXG4gICAgMjogJ2F2YWlsYWJsZV90dWVzZGF5JyxcclxuICAgIDM6ICdhdmFpbGFibGVfd2VkbmVzZGF5JyxcclxuICAgIDQ6ICdhdmFpbGFibGVfdGh1cnNkYXknLFxyXG4gICAgNTogJ2F2YWlsYWJsZV9mcmlkYXknLFxyXG4gICAgNjogJ2F2YWlsYWJsZV9zYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlICYmIGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2xlYW5lciBoYXMgYSBib29raW5nIGNvbmZsaWN0IGZvciBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgc2xvdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xlYW5lckJvb2tpbmdDb25mbGljdChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBzZXJ2aWNlRGF0ZTogc3RyaW5nLFxyXG4gIHNlcnZpY2VUaW1lOiBzdHJpbmcsXHJcbiAgc2VydmljZUR1cmF0aW9uOiBudW1iZXJcclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gUXVlcnkgYm9va2luZ3MgZm9yIHRoaXMgY2xlYW5lciBvbiB0aGUgc3BlY2lmaWVkIGRhdGVcclxuICAgIC8vIE9ubHkgY29uc2lkZXIgcGFpZCBhbmQgY29uZmlybWVkIGJvb2tpbmdzIChleGNsdWRlIHBlbmRpbmcvdW5wYWlkIGJvb2tpbmdzKVxyXG4gICAgLy8gQ2xlYW5lcnMgc2hvdWxkIG9ubHkgYmUgbWFya2VkIGFzIGJvb2tlZCB3aGVuIGJvb2tpbmcgaXMgcGFpZCBhbmQgY3JlYXRlZFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdGltZSwgc2VydmljZV9kdXJhdGlvbicpXHJcbiAgICAgIC5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5lcSgnc2VydmljZV9kYXRlJywgc2VydmljZURhdGUpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2NvbmZpcm1lZCcpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gQXNzdW1lIG5vIGNvbmZsaWN0IG9uIGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBib29raW5ncywgbm8gY29uZmxpY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgbmV3IGJvb2tpbmcgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgW25ld1N0YXJ0SG91cnMsIG5ld1N0YXJ0TWludXRlc10gPSBzZXJ2aWNlVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgY29uc3QgbmV3U3RhcnRUaW1lTWludXRlcyA9IG5ld1N0YXJ0SG91cnMgKiA2MCArIG5ld1N0YXJ0TWludXRlcztcclxuICAgIGNvbnN0IHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlcnZpY2VEdXJhdGlvbiAqIDYwKTtcclxuICAgIGNvbnN0IG5ld0VuZFRpbWVNaW51dGVzID0gbmV3U3RhcnRUaW1lTWludXRlcyArIHNlcnZpY2VEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgLy8gQ2hlY2sgZWFjaCBleGlzdGluZyBib29raW5nIGZvciBvdmVybGFwXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgaWYgKCFib29raW5nLnNlcnZpY2VfdGltZSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIHN0YXJ0IHRpbWVcclxuICAgICAgY29uc3QgW2Jvb2tpbmdTdGFydEhvdXJzLCBib29raW5nU3RhcnRNaW51dGVzXSA9IGJvb2tpbmcuc2VydmljZV90aW1lXHJcbiAgICAgICAgLnNwbGl0KCc6JylcclxuICAgICAgICAuc2xpY2UoMCwgMilcclxuICAgICAgICAubWFwKE51bWJlcik7XHJcbiAgICAgIGNvbnN0IGJvb2tpbmdTdGFydFRpbWVNaW51dGVzID0gYm9va2luZ1N0YXJ0SG91cnMgKiA2MCArIGJvb2tpbmdTdGFydE1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBQYXJzZSBib29raW5nIGR1cmF0aW9uXHJcbiAgICAgIGNvbnN0IGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICh0eXBlb2YgYm9va2luZy5zZXJ2aWNlX2R1cmF0aW9uID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBib29raW5nLnNlcnZpY2VfZHVyYXRpb25cclxuICAgICAgICAgIDogcGFyc2VGbG9hdChib29raW5nLnNlcnZpY2VfZHVyYXRpb24gfHwgJzAnKSkgKiA2MFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBib29raW5nRW5kVGltZU1pbnV0ZXMgPSBib29raW5nU3RhcnRUaW1lTWludXRlcyArIGJvb2tpbmdEdXJhdGlvbk1pbnV0ZXM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcDogbmV3IHN0YXJ0IDwgZXhpc3RpbmcgZW5kIEFORCBuZXcgZW5kID4gZXhpc3Rpbmcgc3RhcnRcclxuICAgICAgaWYgKG5ld1N0YXJ0VGltZU1pbnV0ZXMgPCBib29raW5nRW5kVGltZU1pbnV0ZXMgJiYgbmV3RW5kVGltZU1pbnV0ZXMgPiBib29raW5nU3RhcnRUaW1lTWludXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBDb25mbGljdCBmb3VuZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjb25mbGljdHNcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBjaGVja2luZyBib29raW5nIGNvbmZsaWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgZm9yIGEgY2xlYW5lciAoc2VydmVyLXNpZGUgd3JhcHBlcilcclxuICogVGhpcyBjYWxscyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY2FsY3VsYXRlcyBjbGllbnQtc2lkZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNsZWFuZXJSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXJJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBUcnkgdG8gY2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnY2FsY3VsYXRlX2NsZWFuZXJfcmVsaWFiaWxpdHlfc2NvcmUnLCB7XHJcbiAgICAgIGNsZWFuZXJfaWQ6IGNsZWFuZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZXJyb3IgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrOiBmZXRjaCBjbGVhbmVyIGFuZCBjYWxjdWxhdGUgY2xpZW50LXNpZGVcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgcmV0dXJuIDUwLjA7IC8vIERlZmF1bHQgc2NvcmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVsaWFiaWxpdHlTY29yZShjbGVhbmVyIGFzIENsZWFuZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyByZWxpYWJpbGl0eSBzY29yZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gNTAuMDsgLy8gRGVmYXVsdCBzY29yZSBvbiBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmFpbGFibGUgY2xlYW5lcnMgd2l0aCBlbmhhbmNlZCBmaWx0ZXJpbmcgY3JpdGVyaWFcclxuICogRmlsdGVycyBieTogTG9jYXRpb24sIEF2YWlsYWJpbGl0eSwgQm9va2luZyBjb25mbGljdHNcclxuICogU29ydHMgYnk6IFJlbGlhYmlsaXR5IFNjb3JlLCBSYXRpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVDbGVhbmVyc1dpdGhDcml0ZXJpYShwYXJhbXM6IHtcclxuICBzZXJ2aWNlU3VidXJiPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEYXRlPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUaW1lPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VEdXJhdGlvbj86IG51bWJlcjtcclxuICBtaW5SYXRpbmc/OiBudW1iZXI7XHJcbiAgbWluUmVsaWFiaWxpdHlTY29yZT86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyV2l0aEF2YWlsYWJpbGl0eVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNlcnZpY2VTdWJ1cmIsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBzZXJ2aWNlVGltZSxcclxuICAgICAgc2VydmljZUR1cmF0aW9uID0gMyxcclxuICAgICAgbWluUmF0aW5nID0gMCxcclxuICAgICAgbWluUmVsaWFiaWxpdHlTY29yZSA9IDAsXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJhc2UgcXVlcnlcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5Lm9yZGVyKCdyZWxpYWJpbGl0eV9zY29yZScsIHsgYXNjZW5kaW5nOiBmYWxzZSwgbnVsbHNGaXJzdDogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdyYXRpbmcnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCduYW1lJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVycyA9IChkYXRhIHx8IFtdKSBhcyBDbGVhbmVyW107XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGlzX2F2YWlsYWJsZVxyXG4gICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IGNsZWFuZXIuaXNfYXZhaWxhYmxlICE9PSBmYWxzZSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIGJ5IGxvY2F0aW9uIChzdWJ1cmIpXHJcbiAgICBpZiAoc2VydmljZVN1YnVyYiAmJiBjbGVhbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN1YnVyYkxvd2VyID0gc2VydmljZVN1YnVyYi50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgY2xlYW5lcnMgPSBjbGVhbmVycy5maWx0ZXIoKGNsZWFuZXIpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXIuYXJlYXMgfHwgY2xlYW5lci5hcmVhcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBTZXJ2ZSBhbGwgYXJlYXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsZWFuZXIuYXJlYXMuc29tZSgoYXJlYTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTG93ZXIgPSBhcmVhLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gYXJlYUxvd2VyLmluY2x1ZGVzKHN1YnVyYkxvd2VyKSB8fCBzdWJ1cmJMb3dlci5pbmNsdWRlcyhhcmVhTG93ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgZGF5IG9mIHdlZWsgYXZhaWxhYmlsaXR5IGlmIGRhdGUgaXMgcHJvdmlkZWRcclxuICAgIGlmIChzZXJ2aWNlRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc2VydmljZURhdGUpO1xyXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuXHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5TWFwOiBSZWNvcmQ8bnVtYmVyLCBrZXlvZiBDbGVhbmVyPiA9IHtcclxuICAgICAgICAgIDA6ICdhdmFpbGFibGVfc3VuZGF5JyxcclxuICAgICAgICAgIDE6ICdhdmFpbGFibGVfbW9uZGF5JyxcclxuICAgICAgICAgIDI6ICdhdmFpbGFibGVfdHVlc2RheScsXHJcbiAgICAgICAgICAzOiAnYXZhaWxhYmxlX3dlZG5lc2RheScsXHJcbiAgICAgICAgICA0OiAnYXZhaWxhYmxlX3RodXJzZGF5JyxcclxuICAgICAgICAgIDU6ICdhdmFpbGFibGVfZnJpZGF5JyxcclxuICAgICAgICAgIDY6ICdhdmFpbGFibGVfc2F0dXJkYXknLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF5RmllbGQgPSBkYXlNYXBbZGF5T2ZXZWVrXTtcclxuICAgICAgICByZXR1cm4gY2xlYW5lcltkYXlGaWVsZF0gIT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByYXRpbmdcclxuICAgIGlmIChtaW5SYXRpbmcgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yYXRpbmcgfHwgMCkgPj0gbWluUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgYnkgbWluaW11bSByZWxpYWJpbGl0eSBzY29yZVxyXG4gICAgaWYgKG1pblJlbGlhYmlsaXR5U2NvcmUgPiAwKSB7XHJcbiAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnMuZmlsdGVyKChjbGVhbmVyKSA9PiAoY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSA+PSBtaW5SZWxpYWJpbGl0eVNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnJpY2ggY2xlYW5lcnMgd2l0aCBhdmFpbGFiaWxpdHkgYW5kIGJvb2tpbmcgY29uZmxpY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVucmljaGVkQ2xlYW5lcnM6IENsZWFuZXJXaXRoQXZhaWxhYmlsaXR5W10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2xlYW5lcnMubWFwKGFzeW5jIChjbGVhbmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQXZhaWxhYmxlRm9yU2xvdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGJvb2tpbmdDb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBib29raW5nIGNvbmZsaWN0IGlmIGRhdGUgYW5kIHRpbWUgYXJlIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHNlcnZpY2VEYXRlICYmIHNlcnZpY2VUaW1lICYmIHNlcnZpY2VEdXJhdGlvbikge1xyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0ID0gYXdhaXQgY2hlY2tDbGVhbmVyQm9va2luZ0NvbmZsaWN0KFxyXG4gICAgICAgICAgICBjbGVhbmVyLmlkLFxyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0ZSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWUsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEdXJhdGlvblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlzQXZhaWxhYmxlRm9yU2xvdCA9ICFib29raW5nQ29uZmxpY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgcmVsaWFiaWxpdHkgc2NvcmUgaWYgbm90IHByZXNlbnRcclxuICAgICAgICBjb25zdCByZWxpYWJpbGl0eVNjb3JlID0gY2xlYW5lci5yZWxpYWJpbGl0eV9zY29yZSA/PyBjYWxjdWxhdGVSZWxpYWJpbGl0eVNjb3JlKGNsZWFuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uY2xlYW5lcixcclxuICAgICAgICAgIHJlbGlhYmlsaXR5X3Njb3JlOiByZWxpYWJpbGl0eVNjb3JlLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGVGb3JTbG90LFxyXG4gICAgICAgICAgYm9va2luZ0NvbmZsaWN0LFxyXG4gICAgICAgICAgY29tcGxldGlvblJhdGU6IGNhbGN1bGF0ZUNvbXBsZXRpb25SYXRlKGNsZWFuZXIpLFxyXG4gICAgICAgICAgb25UaW1lUmF0ZTogY2FsY3VsYXRlT25UaW1lUmF0ZShjbGVhbmVyKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IHJlbGlhYmlsaXR5IHNjb3JlIGFuZCByYXRpbmcgKGFscmVhZHkgc29ydGVkIGJ5IHF1ZXJ5LCBidXQgZW5zdXJlIGNvbnNpc3RlbmN5KVxyXG4gICAgZW5yaWNoZWRDbGVhbmVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlQSA9IChhLnJlbGlhYmlsaXR5X3Njb3JlIHx8IDApICogMC42ICsgKGEucmF0aW5nIHx8IDApICogMC40O1xyXG4gICAgICBjb25zdCBzY29yZUIgPSAoYi5yZWxpYWJpbGl0eV9zY29yZSB8fCAwKSAqIDAuNiArIChiLnJhdGluZyB8fCAwKSAqIDAuNDtcclxuICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBlbnJpY2hlZENsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnMgd2l0aCBjcml0ZXJpYTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFNBd1JzQix5TUFBQSJ9
}),
"[project]/src/lib/icon-mapper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIcon",
    ()=>getIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/armchair.js [app-ssr] (ecmascript) <export default as Armchair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refrigerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Refrigerator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refrigerator.js [app-ssr] (ecmascript) <export default as Refrigerator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cooking$2d$pot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CookingPot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cooking-pot.js [app-ssr] (ecmascript) <export default as CookingPot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shirt.js [app-ssr] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$washing$2d$machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WashingMachine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/washing-machine.js [app-ssr] (ecmascript) <export default as WashingMachine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [app-ssr] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
;
// Map icon name strings to Lucide React icon components
const iconMap = {
    Home: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    Star: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    Building2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
    Armchair: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__["Armchair"],
    Grid3X3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
    Layers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
    LayoutGrid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
    Refrigerator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refrigerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Refrigerator$3e$__["Refrigerator"],
    CookingPot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cooking$2d$pot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CookingPot$3e$__["CookingPot"],
    Shirt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"],
    WashingMachine: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$washing$2d$machine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WashingMachine$3e$__["WashingMachine"],
    Bed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"],
    Wind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"]
};
function getIcon(iconName) {
    const icon = iconMap[iconName];
    if (!icon) {
        console.warn(`Icon "${iconName}" not found in icon map. Using Home as fallback.`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]; // Default fallback icon
    }
    return icon;
}
}),
"[project]/src/lib/utils/duration-calculator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculate service duration based on bedrooms, bathrooms, and additional services
 * 
 * Formula:
 * - Base: 3.5 hours
 * - Per bedroom: +0.5 hours
 * - Per bathroom: +0.5 hours
 * - Per extra service: +0.5 hours
 * 
 * Result is clamped between 3.5 (minimum) and 10 (maximum) hours
 * 
 * @param bedrooms - Number of bedrooms as string (e.g., '0', '1', '2')
 * @param bathrooms - Number of bathrooms as string (e.g., '1', '2', '3')
 * @param additionalServices - Array of additional service IDs
 * @returns Calculated duration in hours (clamped between 3.5 and 10)
 */ __turbopack_context__.s([
    "calculateServiceDuration",
    ()=>calculateServiceDuration
]);
function calculateServiceDuration(bedrooms, bathrooms, additionalServices) {
    // Base hours
    const baseHours = 3.5;
    // Convert bedrooms to number (handle empty string as 0)
    const bedroomCount = bedrooms ? parseInt(bedrooms, 10) || 0 : 0;
    // Convert bathrooms to number (handle empty string as 0)
    const bathroomCount = bathrooms ? parseInt(bathrooms, 10) || 0 : 0;
    // Count additional services
    const extrasCount = additionalServices.length;
    // Calculate duration
    const duration = baseHours + bedroomCount * 0.5 + bathroomCount * 0.5 + extrasCount * 0.5;
    // Clamp between 3.5 and 10 hours
    return Math.max(3.5, Math.min(10, duration));
}
}),
"[project]/app/booking/book/components/Step1ServiceDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step1ServiceDetails",
    ()=>Step1ServiceDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/radio-group.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/calendar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:ebd3d2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:c40742 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c1bab6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:c1bab6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$2c40ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:2c40ac [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$0ffd7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:0ffd7d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$1b474d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:1b474d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$82d194__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/book/data:82d194 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icon$2d$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icon-mapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$duration$2d$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/duration-calculator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
function Step1ServiceDetails({ formData, updateFormData, pricingRules = [] }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ensure component is mounted on client to avoid hydration mismatches
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    // Fetch services
    const { data: services = [], isLoading: isLoadingServices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'services'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
        staleTime: 5 * 60 * 1000
    });
    // Handle service selection with URL update
    const handleServiceSelect = (serviceId)=>{
        updateFormData({
            serviceId
        });
        // Update URL to include service slug
        const service = services.find((s)=>s.id === serviceId);
        if (service) {
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSlug"])(service.name);
            router.push(`/booking/details/${slug}`);
        }
    };
    // Fetch additional services
    const { data: additionalServices = [], isLoading: isLoadingAdditionalServices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'additional-services',
            formData.serviceId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c40742__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdditionalServices"])(formData.serviceId || undefined),
        enabled: true,
        staleTime: 5 * 60 * 1000
    });
    // Fetch bedrooms
    const { data: bedroomOptions = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'home-detail-options',
            'bedrooms'
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c1bab6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHomeDetailOptions"])('bedrooms'),
        staleTime: 5 * 60 * 1000
    });
    // Fetch bathrooms
    const { data: bathroomOptions = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'home-detail-options',
            'bathrooms'
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c1bab6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHomeDetailOptions"])('bathrooms'),
        staleTime: 5 * 60 * 1000
    });
    // Fetch carpet types (for carpet cleaning service)
    const { data: carpetTypeOptions = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'home-detail-options',
            'carpet_type'
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c1bab6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHomeDetailOptions"])('carpet_type'),
        staleTime: 5 * 60 * 1000
    });
    // Fetch room status (for carpet cleaning service)
    const { data: roomStatusOptions = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'home-detail-options',
            'room_status'
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$c1bab6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHomeDetailOptions"])('room_status'),
        staleTime: 5 * 60 * 1000
    });
    // Fetch working hours
    const { data: workingHours = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'working-hours'
        ],
        queryFn: async ()=>{
            const hours = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$0ffd7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getWorkingHours"])();
            if (hours.length === 0) {
                // Fallback to home_detail_options
                const options = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$1b474d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getWorkingHoursFromOptions"])();
                return options.map((opt, idx)=>({
                        id: `wh-${idx}`,
                        start_time: opt.value,
                        end_time: opt.value.split('-')[1] || '',
                        duration_hours: 3.5,
                        day_of_week: null,
                        is_active: true,
                        display_order: idx + 1,
                        max_bookings_per_slot: null,
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    }));
            }
            // Deduplicate by start_time to prevent duplicates
            const uniqueHours = hours.filter((hour, index, self)=>index === self.findIndex((h)=>h.start_time === hour.start_time));
            return uniqueHours;
        },
        staleTime: 5 * 60 * 1000
    });
    // Fetch cleaning equipment
    const { data: cleaningEquipment = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'cleaning-equipment'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$2c40ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCleaningEquipment"],
        staleTime: 5 * 60 * 1000
    });
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);
    const [calendarOpen, setCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [equipmentInfoOpen, setEquipmentInfoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAvailabilityDialog, setShowAvailabilityDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slotAvailability, setSlotAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isCheckingAvailability, setIsCheckingAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unavailableSlotTime, setUnavailableSlotTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedDate = formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(formData.serviceDate, 'yyyy-MM-dd', new Date()) : undefined;
    const handleDateSelect = (date)=>{
        if (date) {
            const dateString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
            updateFormData({
                serviceDate: dateString
            });
            setCalendarOpen(false);
            // Reset selected time when date changes
            updateFormData({
                serviceTime: ''
            });
            // Check availability for all slots
            checkSlotAvailability(dateString);
        }
    };
    // Check availability for all time slots when date is selected
    const checkSlotAvailability = async (date)=>{
        if (!date || workingHours.length === 0) return;
        setIsCheckingAvailability(true);
        try {
            // Use the current service duration, or default to 3.5 hours
            const durationToUse = formData.serviceDuration > 0 ? formData.serviceDuration : 3.5;
            // Get service type for team availability checking
            const serviceType = selectedService?.name || undefined;
            const availability = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$data$3a$82d194__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkAvailabilityForAllSlots"])(date, workingHours, durationToUse, serviceType);
            setSlotAvailability(availability);
            // Check if all slots are unavailable
            const allUnavailable = Object.values(availability).every((avail)=>!avail.available || avail.availableCleanersCount === 0);
            if (allUnavailable && Object.keys(availability).length > 0) {
                setUnavailableSlotTime(null); // All slots unavailable
                setShowAvailabilityDialog(true);
            }
        } catch (error) {
            console.error('Error checking slot availability:', error);
        } finally{
            setIsCheckingAvailability(false);
        }
    };
    // Handle time slot selection with availability check
    const handleTimeSlotChange = (value)=>{
        const availability = slotAvailability[value];
        // If slot is unavailable, show dialog instead of selecting
        // This handles cases where the item wasn't properly disabled
        if (availability && (!availability.available || availability.availableCleanersCount === 0)) {
            setUnavailableSlotTime(value);
            setShowAvailabilityDialog(true);
            // Don't update the form data for unavailable slots
            return;
        }
        updateFormData({
            serviceTime: value
        });
    };
    // Helper function to check if selected service is carpet cleaning
    const selectedService = services.find((s)=>s.id === formData.serviceId);
    const isCarpetCleaning = selectedService?.name.toLowerCase().includes('carpet') ?? false;
    const isStandardOrAirbnb = (selectedService?.name.toLowerCase().includes('standard') || selectedService?.name.toLowerCase().includes('airbnb')) ?? false;
    // Auto-calculate duration based on bedrooms, bathrooms, and additional services
    // Only for non-carpet cleaning services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCarpetCleaning && formData.serviceId) {
            const calculatedDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$duration$2d$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateServiceDuration"])(formData.bedrooms, formData.bathrooms, formData.additionalServices);
            // Only update if the calculated duration is different from current to avoid infinite loops
            if (Math.abs(calculatedDuration - formData.serviceDuration) > 0.01) {
                updateFormData({
                    serviceDuration: calculatedDuration
                });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formData.bedrooms,
        formData.bathrooms,
        formData.additionalServices.join(','),
        formData.serviceId,
        isCarpetCleaning
    ]);
    // Recheck availability when service duration changes (for carpet cleaning)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.serviceDate && isCarpetCleaning) {
            checkSlotAvailability(formData.serviceDate);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formData.serviceDuration,
        isCarpetCleaning
    ]);
    // Format duration for display
    const formatDuration = (hours)=>{
        if (hours % 1 === 0) {
            return `${hours} hours`;
        }
        return `${hours.toFixed(1)} hours`;
    };
    // Prevent hydration mismatch by only rendering after mount
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-6 h-6 animate-spin text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                    lineNumber: 252,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Select Your Service"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: isLoadingServices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-6 h-6 animate-spin text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3",
                            children: services.map((service)=>{
                                const IconComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icon$2d$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIcon"])(service.icon_name);
                                const isSelected = formData.serviceId === service.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleServiceSelect(service.id),
                                            className: `flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                className: `w-8 h-8 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 284,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 275,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-sm text-foreground text-center leading-tight",
                                            children: service.name.split(' ').map((word, idx, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        word,
                                                        idx === 0 && arr.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 59
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 288,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                    lineNumber: 274,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            isCarpetCleaning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Home Details"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-base font-medium",
                                        children: "Carpet Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "carpet-type",
                                                className: "text-sm font-normal text-foreground",
                                                children: "What type of carpets do you have?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            carpetTypeOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-5 h-5 animate-spin text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: carpetTypeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                        id: `carpet-${option.value}`,
                                                                        checked: formData.carpetTypes.includes(option.value),
                                                                        onCheckedChange: (checked)=>{
                                                                            const newCarpetTypes = checked ? [
                                                                                ...formData.carpetTypes,
                                                                                option.value
                                                                            ] : formData.carpetTypes.filter((type)=>type !== option.value);
                                                                            updateFormData({
                                                                                carpetTypes: newCarpetTypes,
                                                                                numberOfFittedRooms: option.value === 'fitted' && !checked ? '' : formData.numberOfFittedRooms,
                                                                                numberOfLooseCarpets: option.value === 'loose' && !checked ? '' : formData.numberOfLooseCarpets
                                                                            });
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: `carpet-${option.value}`,
                                                                        className: "text-sm font-normal cursor-pointer",
                                                                        children: option.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this),
                                                            formData.carpetTypes.includes(option.value) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-6 space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: `number-of-${option.value}-rooms`,
                                                                        className: "text-sm font-normal text-foreground",
                                                                        children: option.value === 'fitted' ? 'Number of rooms with Fitted Carpets' : 'Number of rugs/carpets with Loose Carpets/Rugs'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        id: `number-of-${option.value}-rooms`,
                                                                        type: "number",
                                                                        min: "1",
                                                                        placeholder: `Enter number of ${option.value === 'fitted' ? 'rooms' : 'rugs/carpets'}`,
                                                                        value: option.value === 'fitted' ? formData.numberOfFittedRooms : formData.numberOfLooseCarpets,
                                                                        onChange: (e)=>updateFormData({
                                                                                [option.value === 'fitted' ? 'numberOfFittedRooms' : 'numberOfLooseCarpets']: e.target.value
                                                                            }),
                                                                        className: "max-w-[200px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, option.id, true, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-base font-medium",
                                        children: "Room Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    roomStatusOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 animate-spin text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                        value: formData.roomStatus,
                                        onValueChange: (value)=>updateFormData({
                                                roomStatus: value
                                            }),
                                        children: roomStatusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                        value: option.value,
                                                        id: `room-${option.value}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: `room-${option.value}`,
                                                        className: "text-sm font-normal cursor-pointer",
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, option.id, true, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 388,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "House details"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Bedrooms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.bedrooms,
                                        onValueChange: (value)=>updateFormData({
                                                bedrooms: value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "Select bedrooms"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: bedroomOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.id, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Bathrooms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.bathrooms,
                                        onValueChange: (value)=>updateFormData({
                                                bathrooms: value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "Select bathrooms"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: bathroomOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.id, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Additional Services (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    isLoadingAdditionalServices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-6 h-6 animate-spin text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3",
                        children: additionalServices.map((service)=>{
                            const IconComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icon$2d$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIcon"])(service.icon_name);
                            const isSelected = formData.additionalServices.includes(service.id);
                            // Get price for this additional service from pricing rules
                            const servicePriceRule = pricingRules.find((rule)=>rule.rule_type === 'additional_service' && rule.additional_service_id === service.id);
                            const servicePrice = servicePriceRule?.price || 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            const newServices = isSelected ? formData.additionalServices.filter((id)=>id !== service.id) : [
                                                ...formData.additionalServices,
                                                service.id
                                            ];
                                            updateFormData({
                                                additionalServices: newServices
                                            });
                                        },
                                        className: `flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: `w-8 h-8 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 481,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 467,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-sm text-foreground text-center leading-tight",
                                                children: service.name.split(' ').map((word, idx, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            word,
                                                            idx === 0 && arr.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 59
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 486,
                                                columnNumber: 21
                                            }, this),
                                            servicePrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-primary",
                                                children: [
                                                    "R",
                                                    servicePrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 485,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, service.id, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 466,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            isStandardOrAirbnb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Cleaning Equipment & Supplies"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Do you want us to provide cleaning equipment/supplies?"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        value: formData.cleaningEquipment,
                        onValueChange: (value)=>updateFormData({
                                cleaningEquipment: value
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "yes",
                                        id: "equipment-yes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "equipment-yes",
                                        className: "cursor-pointer flex items-center gap-1.5",
                                        children: [
                                            "Yes",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                open: equipmentInfoOpen,
                                                onOpenChange: setEquipmentInfoOpen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "focus:outline-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "w-80",
                                                        align: "start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-sm",
                                                                    children: "Equipment & Supplies We Provide:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "text-sm text-muted-foreground space-y-1.5 list-disc list-inside",
                                                                    children: cleaningEquipment.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: item.name
                                                                        }, item.id, false, {
                                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "no",
                                        id: "equipment-no"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "equipment-no",
                                        className: "cursor-pointer",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 512,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, this),
            isStandardOrAirbnb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Number of Cleaners"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "How many cleaners would you like for this service?"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 555,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        value: formData.numberOfCleaners === 1 ? "1" : "2+",
                        onValueChange: (value)=>{
                            if (value === "1") {
                                updateFormData({
                                    numberOfCleaners: 1
                                });
                            } else {
                                // Default to 2 if switching to 2+
                                updateFormData({
                                    numberOfCleaners: Math.max(2, formData.numberOfCleaners)
                                });
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "1",
                                        id: "cleaners-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "cleaners-1",
                                        className: "text-sm font-normal cursor-pointer",
                                        children: "Only 1 cleaner"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                        value: "2+",
                                        id: "cleaners-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "cleaners-2",
                                        className: "text-sm font-normal cursor-pointer",
                                        children: "2-5 cleaners"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 556,
                        columnNumber: 11
                    }, this),
                    formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "number-of-cleaners-count",
                                className: "text-sm font-normal text-foreground",
                                children: "How many cleaners do you need? (2-5)"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 582,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "number-of-cleaners-count",
                                type: "number",
                                min: "2",
                                max: "5",
                                placeholder: "Enter number of cleaners",
                                value: formData.numberOfCleaners > 1 ? formData.numberOfCleaners.toString() : '2',
                                onChange: (e)=>{
                                    const value = parseInt(e.target.value, 10);
                                    if (!isNaN(value) && value >= 2 && value <= 5) {
                                        updateFormData({
                                            numberOfCleaners: value
                                        });
                                    }
                                },
                                onBlur: (e)=>{
                                    const value = parseInt(e.target.value, 10);
                                    if (isNaN(value) || value < 2 || value > 5) {
                                        // Reset to 2 if invalid
                                        updateFormData({
                                            numberOfCleaners: 2
                                        });
                                    }
                                },
                                className: "max-w-[200px]"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this),
                            formData.numberOfCleaners > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    "Additional charge: R",
                                    ((formData.numberOfCleaners - 1) * 250).toFixed(2),
                                    " (R250 per additional cleaner)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 608,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 581,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 553,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-foreground",
                        children: "Schedule"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm text-muted-foreground",
                                        children: "Which day would you like us to come?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                        open: calendarOpen,
                                        onOpenChange: setCalendarOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full justify-start text-left font-normal relative pl-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 19
                                                        }, this),
                                                        selectedDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'PPP') : 'Pick a date'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                className: "w-auto min-w-[280px] p-0",
                                                align: "start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
                                                    mode: "single",
                                                    selected: selectedDate,
                                                    onSelect: handleDateSelect,
                                                    disabled: (date)=>{
                                                        const dateToCompare = new Date(date);
                                                        dateToCompare.setHours(0, 0, 0, 0);
                                                        return dateToCompare < minDate;
                                                    },
                                                    initialFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-sm text-muted-foreground",
                                        children: "What time would you like us to arrive?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.serviceTime,
                                        onValueChange: handleTimeSlotChange,
                                        disabled: !formData.serviceDate || isCheckingAvailability,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: isCheckingAvailability ? "Checking availability..." : formData.serviceDate ? "Select a time" : "Select date first"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 655,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                className: "max-h-[200px]",
                                                children: workingHours.map((hour)=>{
                                                    const availability = slotAvailability[hour.start_time];
                                                    const isUnavailable = availability && (!availability.available || availability.availableCleanersCount === 0);
                                                    try {
                                                        const startTime = hour.start_time.length === 5 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hour.start_time, 'HH:mm', new Date()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hour.start_time.substring(0, 5), 'HH:mm', new Date());
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: hour.start_time,
                                                            className: isUnavailable ? 'text-muted-foreground' : '',
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(startTime, 'HH:mm'),
                                                                isUnavailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 text-xs text-muted-foreground",
                                                                    children: "(Unavailable)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, hour.id, true, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 23
                                                        }, this);
                                                    } catch  {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: hour.start_time,
                                                            className: isUnavailable ? 'text-muted-foreground' : '',
                                                            children: [
                                                                hour.start_time.length >= 5 ? hour.start_time.substring(0, 5) : hour.start_time,
                                                                isUnavailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 text-xs text-muted-foreground",
                                                                    children: "(Unavailable)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                                    lineNumber: 696,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, hour.id, true, {
                                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 23
                                                        }, this);
                                                    }
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 666,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this),
                                    isCheckingAvailability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-3 h-3 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, this),
                                            "Checking cleaner availability..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    formData.serviceTime && !isCarpetCleaning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm text-muted-foreground",
                                children: "How long do you need? (hours)"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "text",
                                value: formatDuration(formData.serviceDuration),
                                readOnly: true,
                                className: "bg-muted cursor-not-allowed",
                                "aria-label": "Service duration (auto-calculated)"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Duration is automatically calculated based on your selections"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 713,
                        columnNumber: 11
                    }, this),
                    formData.serviceTime && isCarpetCleaning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm text-muted-foreground",
                                children: "How long do you need? (hours)"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.serviceDuration.toString(),
                                onValueChange: (value)=>updateFormData({
                                        serviceDuration: parseFloat(value)
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Select duration"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 735,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 734,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "max-h-[200px]",
                                        children: [
                                            3.5,
                                            4,
                                            4.5,
                                            5,
                                            5.5,
                                            6,
                                            6.5,
                                            7,
                                            7.5,
                                            8,
                                            8.5,
                                            9,
                                            9.5,
                                            10
                                        ].map((duration)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: duration.toString(),
                                                children: [
                                                    duration % 1 === 0 ? duration.toString() : duration.toFixed(1),
                                                    " hours"
                                                ]
                                            }, duration, true, {
                                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                lineNumber: 739,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 728,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Special Instructions"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        placeholder: "Add your notes here......",
                        className: "min-h-[100px]",
                        value: formData.specialInstructions,
                        onChange: (e)=>updateFormData({
                                specialInstructions: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showAvailabilityDialog,
                onOpenChange: (open)=>{
                    setShowAvailabilityDialog(open);
                    if (!open) {
                        setUnavailableSlotTime(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Time Slot Unavailable"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                    lineNumber: 772,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: unavailableSlotTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "The selected time slot (",
                                            (()=>{
                                                try {
                                                    const time = unavailableSlotTime.length === 5 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(unavailableSlotTime, 'HH:mm', new Date()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(unavailableSlotTime.substring(0, 5), 'HH:mm', new Date());
                                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(time, 'HH:mm');
                                                } catch  {
                                                    return unavailableSlotTime.length >= 5 ? unavailableSlotTime.substring(0, 5) : unavailableSlotTime;
                                                }
                                            })(),
                                            ") is currently unavailable. Our cleaners are fully booked for this time."
                                        ]
                                    }, void 0, true) : 'This time slot is currently unavailable. Our cleaners are fully booked for this time.'
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                    lineNumber: 773,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                            lineNumber: 771,
                            columnNumber: 11
                        }, this),
                        formData.serviceDate && Object.keys(slotAvailability).length > 0 && (()=>{
                            const availableSlots = workingHours.filter((hour)=>{
                                const availability = slotAvailability[hour.start_time];
                                return availability && availability.available && availability.availableCleanersCount > 0;
                            }).map((hour)=>{
                                try {
                                    const startTime = hour.start_time.length === 5 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hour.start_time, 'HH:mm', new Date()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hour.start_time.substring(0, 5), 'HH:mm', new Date());
                                    return {
                                        time: hour.start_time,
                                        displayTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(startTime, 'HH:mm'),
                                        availability: slotAvailability[hour.start_time]
                                    };
                                } catch  {
                                    return {
                                        time: hour.start_time,
                                        displayTime: hour.start_time.length >= 5 ? hour.start_time.substring(0, 5) : hour.start_time,
                                        availability: slotAvailability[hour.start_time]
                                    };
                                }
                            });
                            if (availableSlots.length > 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: [
                                                "Available time slots for ",
                                                formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(formData.serviceDate, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy') : 'this date',
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 822,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto p-1",
                                            children: availableSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        updateFormData({
                                                            serviceTime: slot.time
                                                        });
                                                        setShowAvailabilityDialog(false);
                                                        setUnavailableSlotTime(null);
                                                    },
                                                    className: "px-3 py-2 text-sm font-medium rounded-md border-2 border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200",
                                                    children: slot.displayTime
                                                }, slot.time, false, {
                                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 825,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Click on an available time slot to select it, or choose a different date."
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 841,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                    lineNumber: 821,
                                    columnNumber: 17
                                }, this);
                            } else {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Unfortunately, all time slots are fully booked for ",
                                                formData.serviceDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(formData.serviceDate, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy') : 'this date',
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 849,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Please select a different date to see available time slots."
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                            lineNumber: 852,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                    lineNumber: 848,
                                    columnNumber: 17
                                }, this);
                            }
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>setShowAvailabilityDialog(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                                lineNumber: 861,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                            lineNumber: 860,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/Step1ServiceDetails.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/booking/details/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/context/BookingFormContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$Step1ServiceDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/components/Step1ServiceDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:ebd3d2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)");
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
function BookingDetailsContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { formData, updateFormData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingFormContext"])();
    // Fetch services
    const { data: services = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'services'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$ebd3d2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getServices"],
        staleTime: 5 * 60 * 1000
    });
    // Fetch and cache pricing rules
    const { data: pricingRules = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'pricing-rules'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPricingRulesClient"],
        staleTime: 10 * 60 * 1000
    });
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
    // Redirect to slugged URL if service is selected (preserve referral code)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.serviceId && services.length > 0) {
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServiceSlugById"])(services, formData.serviceId);
            if (slug) {
                const refCode = formData.referralCode || searchParams.get('ref');
                const url = refCode ? `/booking/details/${slug}?ref=${refCode}` : `/booking/details/${slug}`;
                router.replace(url);
            }
        }
    }, [
        formData.serviceId,
        formData.referralCode,
        services,
        router,
        searchParams
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$Step1ServiceDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Step1ServiceDetails"], {
            formData: formData,
            updateFormData: updateFormData,
            pricingRules: pricingRules
        }, void 0, false, {
            fileName: "[project]/app/booking/details/page.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function BookingDetailsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/app/booking/details/page.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/booking/details/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/booking/details/page.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingDetailsContent, {}, void 0, false, {
            fileName: "[project]/app/booking/details/page.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/details/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5604e1e3._.js.map