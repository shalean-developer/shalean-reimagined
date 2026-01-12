module.exports = [
"[project]/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
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
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-ssr] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
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
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
const SidebarProvider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((value)=>{
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                        className: "sr-only",
                        children: "Navigation Menu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, onClick, ...props }, ref)=>{
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 225,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 250,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 291,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 306,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 311,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 318,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 361,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 381,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 406,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 411,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const SidebarMenuButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 470,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 511,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, showIcon = false, ...props }, ref)=>{
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 547,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 max-w-[--skeleton-width] flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 541,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 579,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 594,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
;
}),
"[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
'use client';
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw"));
}
}),
"[project]/app/admin/data:026209 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentAdmin",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0097f6a77558e0ca0b2bd800bbbb35227b2ff8d496":"getCurrentAdmin"},"app/admin/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0097f6a77558e0ca0b2bd800bbbb35227b2ff8d496", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCurrentAdmin");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcsIENsZWFuZXJVcGRhdGVJbnB1dCwgUHJpY2luZ1J1bGUgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBDbGVhbmVyIH0gZnJvbSAnQC90eXBlcy9ib29raW5nJztcclxuaW1wb3J0IHsgUHJvZmlsZSwgUHJvZmlsZVVwZGF0ZUlucHV0IH0gZnJvbSAnQC90eXBlcy9wcm9maWxlJztcclxuaW1wb3J0IHsgU2VydmljZSwgQWRkaXRpb25hbFNlcnZpY2UgfSBmcm9tICdAL3R5cGVzL3F1b3RlJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB1c2VyIGlzIGFuIGFkbWluXHJcbiAqIEFkbWlucyBhcmUgaWRlbnRpZmllZCBieSBlbWFpbCBwYXR0ZXJuOiAqQGFkbWluLnNoYWxlYW4ubG9jYWxcclxuICogb3IgdXNlciBtZXRhZGF0YSB3aXRoIHJvbGU6ICdhZG1pbidcclxuICovXHJcbmZ1bmN0aW9uIGlzQWRtaW5Vc2VyKGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQsIHVzZXJNZXRhZGF0YT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcclxuICBcclxuICAvLyBDaGVjayBlbWFpbCBwYXR0ZXJuXHJcbiAgaWYgKGVtYWlsLmluY2x1ZGVzKCdAYWRtaW4uc2hhbGVhbi5sb2NhbCcpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2hlY2sgdXNlciBtZXRhZGF0YVxyXG4gIGlmICh1c2VyTWV0YWRhdGE/LnJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYXJkY29kZWQgYWRtaW4gZW1haWxzIChmYWxsYmFjaylcclxuICBjb25zdCBhZG1pbkVtYWlscyA9IFtcclxuICAgICdhZG1pbkBzaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBhZG1pbi5zaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBzaGFsZWFuLmNvbScsXHJcbiAgXTtcclxuICBcclxuICByZXR1cm4gYWRtaW5FbWFpbHMuaW5jbHVkZXMoZW1haWwudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VycmVudCBhdXRoZW50aWNhdGVkIGFkbWluXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEFkbWluKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGFkbWluXHJcbiAgICBpZiAoIWlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGFuIGFkbWluIHVzZXInIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgYWRtaW46IHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogdXNlci51c2VyX21ldGFkYXRhPy5uYW1lIHx8IHVzZXIuZW1haWw/LnNwbGl0KCdAJylbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXJyZW50QWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2V0IGFkbWluJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXV0aGVudGljYXRlIGFkbWluIChzZXJ2ZXItc2lkZSlcclxuICogTm90ZTogQWN0dWFsIGF1dGhlbnRpY2F0aW9uIGhhcHBlbnMgY2xpZW50LXNpZGUsIHRoaXMganVzdCB2ZXJpZmllcyB0aGUgcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlQWRtaW4oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBtYXRjaGVzIGFkbWluIHBhdHRlcm5cclxuICAgIGlmICghaXNBZG1pblVzZXIoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhbiBhZG1pbiBlbWFpbCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRoZW50aWNhdGlvbiBoYXBwZW5zIGNsaWVudC1zaWRlLCB0aGlzIGlzIGp1c3QgdmFsaWRhdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhZG1pbjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWUgfHwgZGF0YS51c2VyLmVtYWlsPy5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXV0aGVudGljYXRlQWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWRtaW4gc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgYWN0aXZlQm9va2luZ3M6IG51bWJlcjtcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgbW9udGhseVJldmVudWU6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbENsZWFuZXJzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDbGVhbmVyczogbnVtYmVyO1xyXG4gICAgY29tcGxldGlvblJhdGU6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJvb2tpbmdzIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIHNlcnZpY2VfZGF0ZSwgY3JlYXRlZF9hdCwgc2VydmljZV90eXBlJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBib29raW5nc1F1ZXJ5ID0gYm9va2luZ3NRdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5LmVxKCdzZXJ2aWNlX3R5cGUnLCBmaWx0ZXIuc2VydmljZVR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjdXN0b21lcnMgKHByb2ZpbGVzKVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGN1c3RvbWVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjdXN0b21lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjbGVhbmVyc1xyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBpc19hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBjbGVhbmVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IGFsbEJvb2tpbmdzID0gYm9va2luZ3MgfHwgW107XHJcbiAgICBjb25zdCBhY3RpdmVCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcihcclxuICAgICAgKGIpID0+IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnXS5pbmNsdWRlcyhiLnN0YXR1cylcclxuICAgICkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYWlkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoKGIpID0+IGIucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyk7XHJcbiAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gcGFpZEJvb2tpbmdzLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IGIudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIHJldHVybiBzdW0gKyAoYW1vdW50ID49IDEwMDAwID8gYW1vdW50IC8gMTAwIDogYW1vdW50KTtcclxuICAgIH0sIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBtb250aGx5UGFpZEJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4gYi5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnICYmIGIuc2VydmljZV9kYXRlID49IGZpcnN0RGF5T2ZNb250aFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gbW9udGhseVBhaWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBhbW91bnQgPSBiLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICByZXR1cm4gc3VtICsgKGFtb3VudCA+PSAxMDAwMCA/IGFtb3VudCAvIDEwMCA6IGFtb3VudCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKS5sZW5ndGg7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IGFsbEJvb2tpbmdzLmxlbmd0aCA+IDAgPyAoY29tcGxldGVkQm9va2luZ3MgLyBhbGxCb29raW5ncy5sZW5ndGgpICogMTAwIDogMDtcclxuXHJcbiAgICBjb25zdCBhbGxDbGVhbmVycyA9IGNsZWFuZXJzIHx8IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlQ2xlYW5lcnMgPSBhbGxDbGVhbmVycy5maWx0ZXIoKGMpID0+IGMuaXNfYWN0aXZlKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc3RhdHM6IHtcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBhbGxCb29raW5ncy5sZW5ndGgsXHJcbiAgICAgICAgYWN0aXZlQm9va2luZ3MsXHJcbiAgICAgICAgdG90YWxSZXZlbnVlLFxyXG4gICAgICAgIG1vbnRobHlSZXZlbnVlLFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzOiBjdXN0b21lcnM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIHRvdGFsQ2xlYW5lcnM6IGFsbENsZWFuZXJzLmxlbmd0aCxcclxuICAgICAgICBhY3RpdmVDbGVhbmVycyxcclxuICAgICAgICBjb21wbGV0aW9uUmF0ZTogTWF0aC5yb3VuZChjb21wbGV0aW9uUmF0ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBZG1pblN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBib29raW5ncyB3aXRoIG9wdGlvbmFsIGZpbHRlcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCb29raW5ncyhcclxuICBmaWx0ZXI/OiB7XHJcbiAgICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBkYXRlRnJvbT86IHN0cmluZztcclxuICAgIGRhdGVUbz86IHN0cmluZztcclxuICAgIGN1c3RvbWVyRW1haWw/OiBzdHJpbmc7XHJcbiAgICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAvLyBPcmRlciBieSB5ZWFyIGFuZCBtb250aCBkZXNjZW5kaW5nIChuZXdlc3QgbW9udGhzIGZpcnN0KSwgdGhlbiBieSBkYXkgYXNjZW5kaW5nICgxc3QgdG8gbGFzdCBkYXkgb2YgbW9udGgpXHJcbiAgICAgIC5vcmRlcignc2VydmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlLCBudWxsc0ZpcnN0OiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzICYmIGZpbHRlci5zdGF0dXMgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlVG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY3VzdG9tZXJFbWFpbCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZmlsdGVyLmN1c3RvbWVyRW1haWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY2xlYW5lcklkKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29raW5nczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1c3RvbSBzb3J0OiBtb250aHMgaW4gZGVzY2VuZGluZyBvcmRlciAobmV3ZXN0IGZpcnN0KSwgZGF5cyBpbiBhc2NlbmRpbmcgb3JkZXIgKDFzdCB0byBsYXN0KVxyXG4gICAgY29uc3Qgc29ydGVkQm9va2luZ3MgPSAoZGF0YSB8fCBbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBkYXRlQSA9IGEuc2VydmljZV9kYXRlID8gbmV3IERhdGUoYS5zZXJ2aWNlX2RhdGUpIDogbmV3IERhdGUoMCk7XHJcbiAgICAgIGNvbnN0IGRhdGVCID0gYi5zZXJ2aWNlX2RhdGUgPyBuZXcgRGF0ZShiLnNlcnZpY2VfZGF0ZSkgOiBuZXcgRGF0ZSgwKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEdldCB5ZWFyIGFuZCBtb250aCBmb3IgY29tcGFyaXNvblxyXG4gICAgICBjb25zdCB5ZWFyQSA9IGRhdGVBLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGNvbnN0IG1vbnRoQSA9IGRhdGVBLmdldE1vbnRoKCk7XHJcbiAgICAgIGNvbnN0IHllYXJCID0gZGF0ZUIuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgbW9udGhCID0gZGF0ZUIuZ2V0TW9udGgoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZpcnN0LCBjb21wYXJlIGJ5IHllYXIgYW5kIG1vbnRoIChkZXNjZW5kaW5nIC0gbmV3ZXN0IG1vbnRocyBmaXJzdClcclxuICAgICAgaWYgKHllYXJBICE9PSB5ZWFyQikge1xyXG4gICAgICAgIHJldHVybiB5ZWFyQiAtIHllYXJBOyAvLyBEZXNjZW5kaW5nIGJ5IHllYXJcclxuICAgICAgfVxyXG4gICAgICBpZiAobW9udGhBICE9PSBtb250aEIpIHtcclxuICAgICAgICByZXR1cm4gbW9udGhCIC0gbW9udGhBOyAvLyBEZXNjZW5kaW5nIGJ5IG1vbnRoXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFdpdGhpbiB0aGUgc2FtZSBtb250aCwgc29ydCBieSBkYXkgYXNjZW5kaW5nICgxc3QgdG8gbGFzdCBkYXkpXHJcbiAgICAgIGNvbnN0IGRheUEgPSBkYXRlQS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheUIgPSBkYXRlQi5nZXREYXRlKCk7XHJcbiAgICAgIHJldHVybiBkYXlBIC0gZGF5QjsgLy8gQXNjZW5kaW5nIGJ5IGRheVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IHNvcnRlZEJvb2tpbmdzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjdXN0b21lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDdXN0b21lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcnM/OiBQcm9maWxlW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGNsZWFuZXJzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2xlYW5lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbENsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdXNlciByZWdpc3RyYXRpb24gZGF0YSBmb3IgY2hhcnRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVVzZXJEYXRhKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IG1vbnRoOiBzdHJpbmc7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH1bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBjbGVhbmVycyBxdWVyeSB3aXRoIGRhdGUgZmlsdGVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgLy8gQnVpbGQgY3VzdG9tZXJzIHF1ZXJ5IHdpdGggZGF0ZSBmaWx0ZXJzXHJcbiAgICBsZXQgY3VzdG9tZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVycywgZXJyb3I6IGN1c3RvbWVyc0Vycm9yIH0gPSBhd2FpdCBjdXN0b21lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvciB8fCBjdXN0b21lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3VwIGJ5IG1vbnRoXHJcbiAgICBjb25zdCBtb250aGx5RGF0YTogeyBba2V5OiBudW1iZXJdOiB7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBwcm92aWRlcjogMCwgY2xpZW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5lcnM/LmZvckVhY2goKGNsZWFuZXIpID0+IHtcclxuICAgICAgaWYgKGNsZWFuZXIuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjbGVhbmVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLnByb3ZpZGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXN0b21lcnM/LmZvckVhY2goKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lci5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1c3RvbWVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLmNsaWVudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgcHJvdmlkZXI6IG1vbnRobHlEYXRhW2luZGV4XS5wcm92aWRlcixcclxuICAgICAgY2xpZW50OiBtb250aGx5RGF0YVtpbmRleF0uY2xpZW50LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRNb250aGx5VXNlckRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbW9udGhseSB1c2VyIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uIGZvciBkb251dCBjaGFydFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgc3RhdHVzOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9W107XHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgZ3Jvd3RoUGVyY2VudGFnZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIGNyZWF0ZWRfYXQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBib29raW5nLnN0YXR1cyB8fCAndW5rbm93bic7XHJcbiAgICAgIHN0YXR1c0NvdW50c1tzdGF0dXNdID0gKHN0YXR1c0NvdW50c1tzdGF0dXNdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHN0YXR1c0NvdW50cykubWFwKChbc3RhdHVzLCBjb3VudF0pID0+ICh7XHJcbiAgICAgIHN0YXR1czogc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdHVzLnNsaWNlKDEpLFxyXG4gICAgICBjb3VudCxcclxuICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY291bnQgLyB0b3RhbCkgKiAxMDApIDogMCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgZ3Jvd3RoIHBlcmNlbnRhZ2UgKGNvbXBhcmUgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aClcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoID09PSAwID8gMTEgOiBjdXJyZW50TW9udGggLSAxO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gY3VycmVudE1vbnRoID09PSAwID8gY3VycmVudFllYXIgLSAxIDogY3VycmVudFllYXI7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoU3RhcnQgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxKTtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhTdGFydCA9IG5ldyBEYXRlKHByZXZpb3VzWWVhciwgcHJldmlvdXNNb250aCwgMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoRW5kID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoQm9va2luZ3MgPSBib29raW5ncz8uZmlsdGVyKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZWREYXRlID49IGN1cnJlbnRNb250aFN0YXJ0ICYmIGNyZWF0ZWREYXRlIDwgbm93O1xyXG4gICAgfSkubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNNb250aEJvb2tpbmdzID0gYm9va2luZ3M/LmZpbHRlcigoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVkRGF0ZSA+PSBwcmV2aW91c01vbnRoU3RhcnQgJiYgY3JlYXRlZERhdGUgPD0gcHJldmlvdXNNb250aEVuZDtcclxuICAgIH0pLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGxldCBncm93dGhQZXJjZW50YWdlID0gMDtcclxuICAgIGlmIChwcmV2aW91c01vbnRoQm9va2luZ3MgPiAwKSB7XHJcbiAgICAgIGdyb3d0aFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKCgoY3VycmVudE1vbnRoQm9va2luZ3MgLSBwcmV2aW91c01vbnRoQm9va2luZ3MpIC8gcHJldmlvdXNNb250aEJvb2tpbmdzKSAqIDEwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRNb250aEJvb2tpbmdzID4gMCkge1xyXG4gICAgICBncm93dGhQZXJjZW50YWdlID0gMTAwOyAvLyAxMDAlIGdyb3d0aCBpZiBwcmV2aW91cyBtb250aCBoYWQgbm8gYm9va2luZ3NcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIHRvdGFsLCBncm93dGhQZXJjZW50YWdlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdHJhbnNhY3Rpb24vcmV2ZW51ZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgbW9udGg6IHN0cmluZzsgY29tcGxldGVkOiBudW1iZXI7IHBlbmRpbmc6IG51bWJlciB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWF0ZWRfYXQsIHBheW1lbnRfc3RhdHVzLCB0b3RhbF9hbW91bnQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSk7XHJcbiAgICBcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogbnVtYmVyXTogeyBjb21wbGV0ZWQ6IG51bWJlcjsgcGVuZGluZzogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBjb21wbGV0ZWQ6IDAsIHBlbmRpbmc6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoYm9va2luZy5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudFllYXIpIHtcclxuICAgICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgICAgIC8vIE9ubHkgZGl2aWRlIHNlZWQgZGF0YSAoYW1vdW50cyA+PSAxMDAwMCkgYnkgMTAwLCBzeXN0ZW0tY3JlYXRlZCBib29raW5ncyBhcmUgYWxyZWFkeSBjb3JyZWN0XHJcbiAgICAgICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcbiAgICAgICAgICBpZiAoYm9va2luZy5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKSB7XHJcbiAgICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXS5jb21wbGV0ZWQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9udGhseURhdGFbbW9udGhdLnBlbmRpbmcgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgY29tcGxldGVkOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5jb21wbGV0ZWQpLFxyXG4gICAgICBwZW5kaW5nOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5wZW5kaW5nKSxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBtb250aGx5IHRyYW5zYWN0aW9uIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdG9wIGFjdGl2ZSB1c2VycyAoY3VzdG9tZXJzIHdpdGggbW9zdCBib29raW5ncylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BBY3RpdmVVc2VycygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVzZXJzPzogQXJyYXk8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBib29raW5nQ291bnQ6IG51bWJlcjtcclxuICAgIGF2YXRhcj86IHN0cmluZztcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IGJvb2tpbmdzIGdyb3VwZWQgYnkgY3VzdG9tZXJcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfZmlyc3RfbmFtZSwgY3VzdG9tZXJfbGFzdF9uYW1lJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3VudCBib29raW5ncyBwZXIgY3VzdG9tZXJcclxuICAgIGNvbnN0IGN1c3RvbWVyQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBjb25zdCBuYW1lID0gYCR7Ym9va2luZy5jdXN0b21lcl9maXJzdF9uYW1lIHx8ICcnfSAke2Jvb2tpbmcuY3VzdG9tZXJfbGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xyXG4gICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICBpZiAoIWN1c3RvbWVyQ291bnRzW2VtYWlsXSkge1xyXG4gICAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdID0geyBuYW1lOiBuYW1lIHx8IGVtYWlsLCBlbWFpbCwgY291bnQ6IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdLmNvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCB0b3AgMTBcclxuICAgIGNvbnN0IHRvcFVzZXJzID0gT2JqZWN0LnZhbHVlcyhjdXN0b21lckNvdW50cylcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxyXG4gICAgICAuc2xpY2UoMCwgMTApXHJcbiAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGlkOiBgY3VzdG9tZXItJHtpbmRleH1gLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICByb2xlOiAnQ3VzdG9tZXInLFxyXG4gICAgICAgIGJvb2tpbmdDb3VudDogdXNlci5jb3VudCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJzOiB0b3BVc2VycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRUb3BBY3RpdmVVc2VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB0b3AgYWN0aXZlIHVzZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHNlcnZpY2UgcG9wdWxhcml0eSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVBvcHVsYXJpdHkoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2VzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIGNyZWF0ZWRfYXQsIHN0YXR1cycpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzZXJ2aWNlVHlwZSA9IGJvb2tpbmcuc2VydmljZV90eXBlIHx8ICdVbmtub3duJztcclxuICAgICAgc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gPSAoc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gfHwgMCkgKyAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoc2VydmljZUNvdW50cylcclxuICAgICAgLm1hcCgoW25hbWUsIGNvdW50XSkgPT4gKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNvdW50LFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvdW50IC8gdG90YWwpICogMTAwKSA6IDAsXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2VzOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVBvcHVsYXJpdHk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBwb3B1bGFyaXR5JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJhdGluZyBzdGF0aXN0aWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmF0aW5nU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICBhdmVyYWdlUmF0aW5nOiBudW1iZXI7XHJcbiAgICB0b3RhbFJhdGluZ3M6IG51bWJlcjtcclxuICAgIGJyZWFrZG93bjogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfTtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBJZiBzZXJ2aWNlVHlwZSBmaWx0ZXIgaXMgYXBwbGllZCwgd2UgbmVlZCB0byBmaWx0ZXIgY2xlYW5lcnMgYmFzZWQgb24gdGhlaXIgYm9va2luZ3NcclxuICAgIC8vIEZvciBzaW1wbGljaXR5LCB3ZSdsbCBqdXN0IGdldCBhbGwgY2xlYW5lcnMuIFNlcnZpY2UgdHlwZSBmaWx0ZXJpbmcgd291bGQgcmVxdWlyZVxyXG4gICAgLy8gam9pbmluZyB3aXRoIGJvb2tpbmdzIHdoaWNoIGlzIG1vcmUgY29tcGxleC5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ3JhdGluZywgY3JlYXRlZF9hdCcpO1xyXG5cclxuICAgIC8vIEFwcGx5IGRhdGUgZmlsdGVyIHRvIGNsZWFuZXIgY3JlYXRpb24gZGF0ZSBpZiBwcm92aWRlZFxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZUZyb20pIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhdGluZ3MgPSBjbGVhbmVycz8ubWFwKChjKSA9PiBjLnJhdGluZyB8fCAwKSB8fCBbXTtcclxuICAgIGNvbnN0IHRvdGFsUmF0aW5ncyA9IHJhdGluZ3MubGVuZ3RoO1xyXG4gICAgY29uc3QgYXZlcmFnZVJhdGluZyA9IHRvdGFsUmF0aW5ncyA+IDBcclxuICAgICAgPyByYXRpbmdzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByLCAwKSAvIHRvdGFsUmF0aW5nc1xyXG4gICAgICA6IDA7XHJcblxyXG4gICAgLy8gQ291bnQgYnkgcmF0aW5nICgxLTUpXHJcbiAgICBjb25zdCBicmVha2Rvd246IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7IDE6IDAsIDI6IDAsIDM6IDAsIDQ6IDAsIDU6IDAgfTtcclxuICAgIHJhdGluZ3MuZm9yRWFjaCgocmF0aW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJhdGluZyk7XHJcbiAgICAgIGlmIChyb3VuZGVkID49IDEgJiYgcm91bmRlZCA8PSA1KSB7XHJcbiAgICAgICAgYnJlYWtkb3duW3JvdW5kZWRdKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgYXZlcmFnZVJhdGluZzogTWF0aC5yb3VuZChhdmVyYWdlUmF0aW5nICogMTApIC8gMTAsXHJcbiAgICAgICAgdG90YWxSYXRpbmdzLFxyXG4gICAgICAgIGJyZWFrZG93bixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJhdGluZ1N0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJhdGluZyBzdGF0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uIGZvciBzdWJzY3JpcHRpb24gY2hhcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbihmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgdHlwZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdHlwZSwgY2xlYW5pbmdfZnJlcXVlbmN5LCBjcmVhdGVkX2F0LCBzdGF0dXMnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdXAgYnkgZnJlcXVlbmN5IHR5cGU6IE9uZS1UaW1lLCBXZWVrbHksIEJpLVdlZWtseSwgTW9udGhseVxyXG4gICAgY29uc3QgZnJlcXVlbmN5Q291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gICAgICAnT25lLVRpbWUnOiAwLFxyXG4gICAgICAnV2Vla2x5JzogMCxcclxuICAgICAgJ0JpLVdlZWtseSc6IDAsXHJcbiAgICAgICdNb250aGx5JzogMCxcclxuICAgIH07XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gYm9va2luZy5jbGVhbmluZ19mcmVxdWVuY3kgfHwgJ29uZS10aW1lJztcclxuICAgICAgaWYgKGZyZXF1ZW5jeSA9PT0gJ29uZS10aW1lJykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snT25lLVRpbWUnXSsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyZXF1ZW5jeSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ1dlZWtseSddKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZnJlcXVlbmN5ID09PSAnYmktd2Vla2x5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snQmktV2Vla2x5J10rKztcclxuICAgICAgfSBlbHNlIGlmIChmcmVxdWVuY3kgPT09ICdtb250aGx5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snTW9udGhseSddKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKGZyZXF1ZW5jeUNvdW50cylcclxuICAgICAgLm1hcCgoW3R5cGUsIGNvdW50XSkgPT4gKHsgdHlwZSwgY291bnQgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNsZWFuZXIgZGV0YWlsc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsZWFuZXIoXHJcbiAgY2xlYW5lcklkOiBzdHJpbmcsXHJcbiAgZGF0YTogQ2xlYW5lclVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcj86IENsZWFuZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXBkYXRlIG9iamVjdCB3aXRoIG9ubHkgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7fTtcclxuICAgIGlmIChkYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICBpZiAoZGF0YS5waG9uZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnBob25lID0gZGF0YS5waG9uZTtcclxuICAgIGlmIChkYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmlzX2FjdGl2ZSA9IGRhdGEuaXNfYWN0aXZlO1xyXG4gICAgaWYgKGRhdGEuYmlvICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYmlvID0gZGF0YS5iaW87XHJcbiAgICBpZiAoZGF0YS5hcmVhcyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmFyZWFzID0gZGF0YS5hcmVhcztcclxuICAgIGlmIChkYXRhLnNwZWNpYWx0aWVzICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuc3BlY2lhbHRpZXMgPSBkYXRhLnNwZWNpYWx0aWVzO1xyXG4gICAgaWYgKGRhdGEueWVhcnNfZXhwZXJpZW5jZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnllYXJzX2V4cGVyaWVuY2UgPSBkYXRhLnllYXJzX2V4cGVyaWVuY2U7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfbW9uZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX21vbmRheSA9IGRhdGEuYXZhaWxhYmxlX21vbmRheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV90dWVzZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3R1ZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV90dWVzZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3dlZG5lc2RheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgPSBkYXRhLmF2YWlsYWJsZV90aHVyc2RheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV9mcmlkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfZnJpZGF5ID0gZGF0YS5hdmFpbGFibGVfZnJpZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ID0gZGF0YS5hdmFpbGFibGVfc2F0dXJkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfc3VuZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3N1bmRheSA9IGRhdGEuYXZhaWxhYmxlX3N1bmRheTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNsZWFuZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyOiBjbGVhbmVyIGFzIENsZWFuZXIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ2xlYW5lcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY2xlYW5lcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc2V0IGNsZWFuZXIgcGFzc3dvcmRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldENsZWFuZXJQYXNzd29yZChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBuZXdQYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBwYXNzd29yZFxyXG4gICAgaWYgKCFuZXdQYXNzd29yZCB8fCBuZXdQYXNzd29yZC50cmltKCkubGVuZ3RoIDwgNikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBGZXRjaCBjbGVhbmVyIHRvIGdldCBhdXRoX3VzZXJfaWQgYW5kIHBob25lXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yOiBjbGVhbmVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBhdXRoX3VzZXJfaWQsIG5hbWUsIHBob25lJylcclxuICAgICAgLmVxKCdpZCcsIGNsZWFuZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyRXJyb3IgfHwgIWNsZWFuZXIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcjonLCBjbGVhbmVyRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDbGVhbmVyIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBjbGVhbmVyIGRvZXNuJ3QgaGF2ZSBhbiBhdXRoIGFjY291bnQsIGNyZWF0ZSBvbmVcclxuICAgIGlmICghY2xlYW5lci5hdXRoX3VzZXJfaWQpIHtcclxuICAgICAgaWYgKCFjbGVhbmVyLnBob25lKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xlYW5lciBkb2VzIG5vdCBoYXZlIGEgcGhvbmUgbnVtYmVyLiBDYW5ub3QgY3JlYXRlIGF1dGhlbnRpY2F0aW9uIGFjY291bnQuJyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3JtYWxpemUgcGhvbmUgbnVtYmVyIChzYW1lIGxvZ2ljIGFzIGNyZWF0ZS1jbGVhbmVyKVxyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGhvbmUgPSBjbGVhbmVyLnBob25lLnJlcGxhY2UoL1xccysvZywgJycpLnRyaW0oKTtcclxuICAgICAgbGV0IHBob25lV2l0aFBsdXM6IHN0cmluZztcclxuICAgICAgaWYgKG5vcm1hbGl6ZWRQaG9uZS5zdGFydHNXaXRoKCcrJykpIHtcclxuICAgICAgICBwaG9uZVdpdGhQbHVzID0gbm9ybWFsaXplZFBob25lO1xyXG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRQaG9uZS5zdGFydHNXaXRoKCcwJykpIHtcclxuICAgICAgICBwaG9uZVdpdGhQbHVzID0gYCsyNyR7bm9ybWFsaXplZFBob25lLnN1YnN0cmluZygxKX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBob25lV2l0aFBsdXMgPSBgKzI3JHtub3JtYWxpemVkUGhvbmV9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRm9ybWF0IGVtYWlsIGZvciBTdXBhYmFzZSBBdXRoOiB7cGhvbmV9QGNsZWFuZXJzLnNoYWxlYW4ubG9jYWxcclxuICAgICAgY29uc3QgcGhvbmVGb3JFbWFpbCA9IHBob25lV2l0aFBsdXMucmVwbGFjZSgvXFwrL2csICcnKTtcclxuICAgICAgY29uc3QgYXV0aEVtYWlsID0gYCR7cGhvbmVGb3JFbWFpbH1AY2xlYW5lcnMuc2hhbGVhbi5sb2NhbGA7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYXV0aCB1c2VyXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogYXV0aFVzZXIsIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguYWRtaW4uY3JlYXRlVXNlcih7XHJcbiAgICAgICAgZW1haWw6IGF1dGhFbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICAgICAgZW1haWxfY29uZmlybTogdHJ1ZSxcclxuICAgICAgICB1c2VyX21ldGFkYXRhOiB7XHJcbiAgICAgICAgICBwaG9uZTogcGhvbmVXaXRoUGx1cyxcclxuICAgICAgICAgIG5hbWU6IGNsZWFuZXIubmFtZSxcclxuICAgICAgICAgIHJvbGU6ICdjbGVhbmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChhdXRoRXJyb3IgfHwgIWF1dGhVc2VyLnVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhdXRoIHVzZXI6JywgYXV0aEVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGF1dGhFcnJvcj8ubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGNyZWF0ZSBhdXRoZW50aWNhdGlvbiBhY2NvdW50JyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgY2xlYW5lciByZWNvcmQgd2l0aCBhdXRoX3VzZXJfaWRcclxuICAgICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgICAudXBkYXRlKHsgYXV0aF91c2VyX2lkOiBhdXRoVXNlci51c2VyLmlkIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGNsZWFuZXJJZCk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjbGVhbmVyIHdpdGggYXV0aF91c2VyX2lkOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICAvLyBUcnkgdG8gY2xlYW4gdXAgdGhlIGF1dGggdXNlclxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLmFkbWluLmRlbGV0ZVVzZXIoYXV0aFVzZXIudXNlci5pZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZGVsZXRlRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNsZWFuaW5nIHVwIGF1dGggdXNlcjonLCBkZWxldGVFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBsaW5rIGF1dGhlbnRpY2F0aW9uIGFjY291bnQgdG8gY2xlYW5lcicgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHBhc3N3b3JkIHVzaW5nIFN1cGFiYXNlIEFkbWluIEFQSVxyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguYWRtaW4udXBkYXRlVXNlckJ5SWQoXHJcbiAgICAgIGNsZWFuZXIuYXV0aF91c2VyX2lkLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXNldHRpbmcgcGFzc3dvcmQ6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byByZXNldCBwYXNzd29yZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHJlc2V0Q2xlYW5lclBhc3N3b3JkOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHJlc2V0IHBhc3N3b3JkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGN1c3RvbWVyIHByb2ZpbGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXN0b21lcihcclxuICBjdXN0b21lcklkOiBzdHJpbmcsXHJcbiAgZGF0YTogUHJvZmlsZVVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY3VzdG9tZXI/OiBQcm9maWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgaWYgKCFkYXRhLmZpcnN0X25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmxhc3RfbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0xhc3QgbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5lbWFpbD8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogY3VzdG9tZXIsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBudWxsLFxyXG4gICAgICAgIGF2YXRhcl91cmw6IGRhdGEuYXZhdGFyX3VybCB8fCBudWxsLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgY3VzdG9tZXJJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjdXN0b21lcjogY3VzdG9tZXIgYXMgUHJvZmlsZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVDdXN0b21lcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY3VzdG9tZXInLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYm9va2luZ3MgYXZhaWxhYmxlIGZvciBhc3NpZ25tZW50IChleGNsdWRlIGNvbXBsZXRlZCBhbmQgY2FuY2VsbGVkKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJvb2tpbmdzRm9yQXNzaWdubWVudChmaWx0ZXI/OiB7XHJcbiAgc3RhdHVzPzogc3RyaW5nO1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ3M/OiBCb29raW5nW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5ub3QoJ3N0YXR1cycsICdpbicsICcoY29tcGxldGVkLGNhbmNlbGxlZCknKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cyAmJiBmaWx0ZXIuc3RhdHVzICE9PSAnYWxsJykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnc2VydmljZV9kYXRlJywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZVRvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29raW5ncyBmb3IgYXNzaWdubWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmdzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEJvb2tpbmdzRm9yQXNzaWdubWVudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFzc2lnbiBjbGVhbmVycyB0byBib29raW5ncyAoc3VwcG9ydHMgbXVsdGktc2VsZWN0KVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5ncyhcclxuICBjbGVhbmVySWRzOiBzdHJpbmdbXSxcclxuICBib29raW5nSWRzOiBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVwZGF0ZWQ/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNsZWFuZXJJZHMgfHwgY2xlYW5lcklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQXQgbGVhc3Qgb25lIGNsZWFuZXIgbXVzdCBiZSBzZWxlY3RlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZHMgfHwgYm9va2luZ0lkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQXQgbGVhc3Qgb25lIGJvb2tpbmcgbXVzdCBiZSBzZWxlY3RlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGNsZWFuZXJzIGV4aXN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuaW4oJ2lkJywgY2xlYW5lcklkcyk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHZlcmlmeSBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNsZWFuZXJzIHx8IGNsZWFuZXJzLmxlbmd0aCAhPT0gY2xlYW5lcklkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT25lIG9yIG1vcmUgY2xlYW5lcnMgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5ncyBleGlzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzJylcclxuICAgICAgLmluKCdpZCcsIGJvb2tpbmdJZHMpO1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB2ZXJpZnkgYm9va2luZ3MnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5ncyB8fCBib29raW5ncy5sZW5ndGggIT09IGJvb2tpbmdJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ09uZSBvciBtb3JlIGJvb2tpbmdzIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgZWFjaCBib29raW5nXHJcbiAgICBsZXQgdXBkYXRlZENvdW50ID0gMDtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGJvb2tpbmcgb2YgYm9va2luZ3MpIHtcclxuICAgICAgLy8gR2V0IGV4aXN0aW5nIGNsZWFuZXIgSURzXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBcclxuICAgICAgLy8gQWRkIGZyb20gcHJlZmVycmVkX2NsZWFuZXJfaWQgaWYgZXhpc3RzXHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgZXhpc3RpbmdJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQWRkIGZyb20gcHJlZmVycmVkX2NsZWFuZXJfaWRzIGFycmF5IGlmIGV4aXN0c1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWQgJiYgIWV4aXN0aW5nSWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWVyZ2Ugd2l0aCBuZXcgY2xlYW5lciBJRHMgKGF2b2lkIGR1cGxpY2F0ZXMpXHJcbiAgICAgIGNvbnN0IGFsbENsZWFuZXJJZHMgPSBbLi4ubmV3IFNldChbLi4uZXhpc3RpbmdJZHMsIC4uLmNsZWFuZXJJZHNdKV07XHJcblxyXG4gICAgICAvLyBEZXRlcm1pbmUgcHJlZmVycmVkX2NsZWFuZXJfaWQgKGZpcnN0IGNsZWFuZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICAgIGNvbnN0IHByZWZlcnJlZENsZWFuZXJJZCA9IGFsbENsZWFuZXJJZHNbMF0gfHwgbnVsbDtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZDogcHJlZmVycmVkQ2xlYW5lcklkLFxyXG4gICAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWRzOiBhbGxDbGVhbmVySWRzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGJvb2tpbmcuaWQpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goYEZhaWxlZCB0byB1cGRhdGUgYm9va2luZyAke2Jvb2tpbmcuaWR9OiAke3VwZGF0ZUVycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlZENvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB1cGRhdGVkQ291bnQgPiAwLFxyXG4gICAgICAgIHVwZGF0ZWQ6IHVwZGF0ZWRDb3VudCxcclxuICAgICAgICBlcnJvcjogYFNvbWUgYm9va2luZ3MgZmFpbGVkIHRvIHVwZGF0ZTogJHtlcnJvcnMuam9pbignOyAnKX1gLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVwZGF0ZWQ6IHVwZGF0ZWRDb3VudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZ3M6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYXNzaWduIGNsZWFuZXJzIHRvIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHNlcnZpY2UgdHlwZSBhbGxvd3MgbXVsdGlwbGUgY2xlYW5lcnNcclxuICovXHJcbmZ1bmN0aW9uIGFsbG93c011bHRpcGxlQ2xlYW5lcnMoc2VydmljZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGlmICghc2VydmljZVR5cGUpIHJldHVybiB0cnVlOyAvLyBEZWZhdWx0IHRvIGFsbG93aW5nIG11bHRpcGxlXHJcbiAgXHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHNlcnZpY2VUeXBlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gIFxyXG4gIC8vIERlZXAgQ2xlYW5pbmcgYW5kIE1vdmUgSW4vT3V0IGFsd2F5cyBhbGxvdyBtdWx0aXBsZVxyXG4gIGlmIChub3JtYWxpemVkLmluY2x1ZGVzKCdkZWVwJykgfHwgXHJcbiAgICAgIChub3JtYWxpemVkLmluY2x1ZGVzKCdtb3ZlJykgJiYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2luL291dCcpIHx8IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2luIG91dCcpIHx8IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2lub3V0JykpKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFN0YW5kYXJkIGFuZCBBaXJibmIgYWxsb3cgbXVsdGlwbGUgKG1vcmUgdGhhbiAxKVxyXG4gIGlmIChub3JtYWxpemVkLmluY2x1ZGVzKCdzdGFuZGFyZCcpIHx8IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2FpcmJuYicpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gT3RoZXIgc2VydmljZXMgYWxzbyBhbGxvdyBtdWx0aXBsZVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGJvb2tpbmcgZGV0YWlsc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJvb2tpbmcoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgdXBkYXRlRGF0YToge1xyXG4gICAgc2VydmljZV9kYXRlPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV90aW1lPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV9hZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV9hcHRfdW5pdD86IHN0cmluZyB8IG51bGw7XHJcbiAgICBzZXJ2aWNlX3N1YnVyYj86IHN0cmluZztcclxuICAgIHNlcnZpY2VfY2l0eT86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX2ZpcnN0X25hbWU/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9sYXN0X25hbWU/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9lbWFpbD86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nO1xyXG4gICAgc3BlY2lhbF9pbnN0cnVjdGlvbnM/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYmVkcm9vbXM/OiBzdHJpbmc7XHJcbiAgICBiYXRocm9vbXM/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX3R5cGU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmcgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQm9va2luZywgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhZXhpc3RpbmdCb29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZzonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBib29raW5nIHN0YXR1c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJvb2tpbmdTdGF0dXMoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgc3RhdHVzOiBCb29raW5nWydzdGF0dXMnXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBzdGF0dXNcclxuICAgIGNvbnN0IHZhbGlkU3RhdHVzZXM6IEJvb2tpbmdbJ3N0YXR1cyddW10gPSBbJ3BlbmRpbmcnLCAnY29uZmlybWVkJywgJ29uX215X3dheScsICdzdGFydGVkJywgJ2NvbXBsZXRlZCcsICdjYW5jZWxsZWQnXTtcclxuICAgIGlmICghdmFsaWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgc3RhdHVzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZyBleGlzdHNcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdCb29raW5nLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFleGlzdGluZ0Jvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0YXR1c1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHsgc3RhdHVzIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmcgc3RhdHVzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVCb29raW5nU3RhdHVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBib29raW5nIHN0YXR1cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFzc2lnbiBjbGVhbmVycyB0byBhIHNpbmdsZSBib29raW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmcoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgY2xlYW5lcklkczogc3RyaW5nW10sXHJcbiAgcmVwbGFjZUV4aXN0aW5nOiBib29sZWFuID0gZmFsc2VcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVySWRzIHx8IGNsZWFuZXJJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0F0IGxlYXN0IG9uZSBjbGVhbmVyIG11c3QgYmUgc2VsZWN0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5nIGV4aXN0cyBhbmQgZ2V0IHNlcnZpY2UgdHlwZVxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgc2VydmljZV90eXBlLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdFcnJvciB8fCAhYm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBzZXJ2aWNlIHR5cGUgYWxsb3dzIG11bHRpcGxlIGNsZWFuZXJzIGlmIG1vcmUgdGhhbiAxIGNsZWFuZXIgaXMgYmVpbmcgYXNzaWduZWRcclxuICAgIGlmIChjbGVhbmVySWRzLmxlbmd0aCA+IDEgJiYgIWFsbG93c011bHRpcGxlQ2xlYW5lcnMoYm9va2luZy5zZXJ2aWNlX3R5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1RoaXMgc2VydmljZSB0eXBlIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwbGUgY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGNsZWFuZXJzIGV4aXN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuaW4oJ2lkJywgY2xlYW5lcklkcyk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHZlcmlmeSBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNsZWFuZXJzIHx8IGNsZWFuZXJzLmxlbmd0aCAhPT0gY2xlYW5lcklkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT25lIG9yIG1vcmUgY2xlYW5lcnMgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVybWluZSBmaW5hbCBjbGVhbmVyIElEc1xyXG4gICAgbGV0IGZpbmFsQ2xlYW5lcklkczogc3RyaW5nW107XHJcbiAgICBpZiAocmVwbGFjZUV4aXN0aW5nKSB7XHJcbiAgICAgIGZpbmFsQ2xlYW5lcklkcyA9IGNsZWFuZXJJZHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBHZXQgZXhpc3RpbmcgY2xlYW5lciBJRHNcclxuICAgICAgY29uc3QgZXhpc3RpbmdJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgZXhpc3RpbmdJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWQgJiYgIWV4aXN0aW5nSWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBNZXJnZSB3aXRoIG5ldyBjbGVhbmVyIElEcyAoYXZvaWQgZHVwbGljYXRlcylcclxuICAgICAgZmluYWxDbGVhbmVySWRzID0gWy4uLm5ldyBTZXQoWy4uLmV4aXN0aW5nSWRzLCAuLi5jbGVhbmVySWRzXSldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVybWluZSBwcmVmZXJyZWRfY2xlYW5lcl9pZCAoZmlyc3QgY2xlYW5lciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgIGNvbnN0IHByZWZlcnJlZENsZWFuZXJJZCA9IGZpbmFsQ2xlYW5lcklkc1swXSB8fCBudWxsO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBwcmVmZXJyZWRDbGVhbmVySWQsXHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWRzOiBmaW5hbENsZWFuZXJJZHMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFzc2lnbmluZyBjbGVhbmVycyB0byBib29raW5nOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBhc3NpZ24gY2xlYW5lcnMgdG8gYm9va2luZycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBjbGVhbmVyIGZyb20gYm9va2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNsZWFuZXJGcm9tQm9va2luZyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBjbGVhbmVySWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQgfHwgIWNsZWFuZXJJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGFuZCBDbGVhbmVyIElEIGFyZSByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBleGlzdGluZyBjbGVhbmVyIElEc1xyXG4gICAgY29uc3QgZXhpc3RpbmdJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICBleGlzdGluZ0lkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoaWQgJiYgIWV4aXN0aW5nSWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgZXhpc3RpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGNsZWFuZXIgSURcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRDbGVhbmVySWQgPSBjbGVhbmVySWQudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICBjb25zdCB1cGRhdGVkSWRzID0gZXhpc3RpbmdJZHMuZmlsdGVyKGlkID0+IGlkLnRvTG93ZXJDYXNlKCkudHJpbSgpICE9PSBub3JtYWxpemVkQ2xlYW5lcklkKTtcclxuXHJcbiAgICBpZiAodXBkYXRlZElkcy5sZW5ndGggPT09IGV4aXN0aW5nSWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDbGVhbmVyIG5vdCBmb3VuZCBpbiBib29raW5nIGFzc2lnbm1lbnQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHByZWZlcnJlZF9jbGVhbmVyX2lkIChmaXJzdCBjbGVhbmVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gICAgY29uc3QgcHJlZmVycmVkQ2xlYW5lcklkID0gdXBkYXRlZElkcy5sZW5ndGggPiAwID8gdXBkYXRlZElkc1swXSA6IG51bGw7XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWQ6IHByZWZlcnJlZENsZWFuZXJJZCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IHVwZGF0ZWRJZHMubGVuZ3RoID4gMCA/IHVwZGF0ZWRJZHMgOiBudWxsLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW1vdmluZyBjbGVhbmVyIGZyb20gYm9va2luZzonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcmVtb3ZlQ2xlYW5lckZyb21Cb29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHJlbW92ZSBjbGVhbmVyIGZyb20gYm9va2luZycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBjbGVhbmVyIGVhcm5pbmdzIGZvciBhIGJvb2tpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGVhbmVyRWFybmluZ3MoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgY2xlYW5lcklkOiBzdHJpbmcsXHJcbiAgZWFybmluZ3M6IHtcclxuICAgIGJhc2VFYXJuaW5nczogbnVtYmVyO1xyXG4gICAgdGlwQW1vdW50OiBudW1iZXI7XHJcbiAgICB0b3RhbEVhcm5pbmdzOiBudW1iZXI7XHJcbiAgfSB8IG51bGxcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkIHx8ICFjbGVhbmVySWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBhbmQgQ2xlYW5lciBJRCBhcmUgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBjbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdFcnJvciB8fCAhYm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgY2xlYW5lciBpcyBhc3NpZ25lZCB0byBib29raW5nXHJcbiAgICBjb25zdCBub3JtYWxpemVVdWlkID0gKGlkOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICBpZiAoIWlkKSByZXR1cm4gJyc7XHJcbiAgICAgIHJldHVybiBTdHJpbmcoaWQpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRDbGVhbmVySWQgPSBub3JtYWxpemVVdWlkKGNsZWFuZXJJZCk7XHJcblxyXG4gICAgY29uc3QgaXNBc3NpZ25lZFNpbmdsZSA9IGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQgJiYgXHJcbiAgICAgIG5vcm1hbGl6ZVV1aWQoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkgPT09IG5vcm1hbGl6ZWRDbGVhbmVySWQ7XHJcblxyXG4gICAgbGV0IGlzQXNzaWduZWRNdWx0aXBsZSA9IGZhbHNlO1xyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgIGlzQXNzaWduZWRNdWx0aXBsZSA9IGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLnNvbWUoXHJcbiAgICAgICAgKGlkOiBzdHJpbmcpID0+IG5vcm1hbGl6ZVV1aWQoaWQpID09PSBub3JtYWxpemVkQ2xlYW5lcklkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc0Fzc2lnbmVkU2luZ2xlICYmICFpc0Fzc2lnbmVkTXVsdGlwbGUpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xlYW5lciBpcyBub3QgYXNzaWduZWQgdG8gdGhpcyBib29raW5nJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBleGlzdGluZyBvdmVycmlkZSBvciBjcmVhdGUgbmV3XHJcbiAgICBsZXQgb3ZlcnJpZGU6IFJlY29yZDxzdHJpbmcsIHsgYmFzZUVhcm5pbmdzOiBudW1iZXI7IHRpcEFtb3VudDogbnVtYmVyOyB0b3RhbEVhcm5pbmdzOiBudW1iZXIgfT4gPSB7fTtcclxuICAgIGlmIChib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgJiYgdHlwZW9mIGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgb3ZlcnJpZGUgPSB7IC4uLmJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBvciByZW1vdmUgb3ZlcnJpZGVcclxuICAgIGlmIChlYXJuaW5ncyA9PT0gbnVsbCkge1xyXG4gICAgICAvLyBSZW1vdmUgb3ZlcnJpZGUgZm9yIHRoaXMgY2xlYW5lclxyXG4gICAgICBkZWxldGUgb3ZlcnJpZGVbY2xlYW5lcklkXTtcclxuICAgICAgLy8gSWYgbm8gb3ZlcnJpZGVzIGxlZnQsIHNldCB0byBudWxsXHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdmVycmlkZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgb3ZlcnJpZGUgPSBudWxsIGFzIGFueTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2V0IG92ZXJyaWRlIGZvciB0aGlzIGNsZWFuZXJcclxuICAgICAgb3ZlcnJpZGVbY2xlYW5lcklkXSA9IGVhcm5pbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIGNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGU6IG92ZXJyaWRlLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjbGVhbmVyIGVhcm5pbmdzOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVDbGVhbmVyRWFybmluZ3M6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsZWFuZXIgZWFybmluZ3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYm9va2luZyB3aXRoIGNsZWFuZXIgZGV0YWlsc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJvb2tpbmdXaXRoQ2xlYW5lcnMoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBjbGVhbmVycz86IEFycmF5PHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgICBwaG9uZT86IHN0cmluZyB8IG51bGw7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdFcnJvciB8fCAhYm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgY2xlYW5lciBJRHNcclxuICAgIGNvbnN0IGNsZWFuZXJJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICBjbGVhbmVySWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChpZCAmJiAhY2xlYW5lcklkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgIGNsZWFuZXJJZHMucHVzaChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgY2xlYW5lciBkZXRhaWxzXHJcbiAgICBsZXQgY2xlYW5lcnM6IEFycmF5PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBlbWFpbD86IHN0cmluZyB8IG51bGw7IHBob25lPzogc3RyaW5nIHwgbnVsbCB9PiA9IFtdO1xyXG4gICAgaWYgKGNsZWFuZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzRGF0YSwgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgICAuc2VsZWN0KCdpZCwgbmFtZSwgZW1haWwsIHBob25lJylcclxuICAgICAgICAuaW4oJ2lkJywgY2xlYW5lcklkcyk7XHJcblxyXG4gICAgICBpZiAoIWNsZWFuZXJzRXJyb3IgJiYgY2xlYW5lcnNEYXRhKSB7XHJcbiAgICAgICAgY2xlYW5lcnMgPSBjbGVhbmVyc0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBib29raW5nIGFzIEJvb2tpbmcsIGNsZWFuZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEJvb2tpbmdXaXRoQ2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZyB3aXRoIGNsZWFuZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBzZXJ2aWNlcyAoaW5jbHVkaW5nIGluYWN0aXZlKSwgb3JkZXJlZCBieSBkaXNwbGF5X29yZGVyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU2VydmljZXMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlcz86IFNlcnZpY2VbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZpY2VzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VydmljZXM6IChkYXRhIHx8IFtdKSBhcyBTZXJ2aWNlW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0QWxsU2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGFkZGl0aW9uYWwgc2VydmljZXMgKGluY2x1ZGluZyBpbmFjdGl2ZSksIG9yZGVyZWQgYnkgZGlzcGxheV9vcmRlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFkZGl0aW9uYWxTZXJ2aWNlcygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlcz86IEFkZGl0aW9uYWxTZXJ2aWNlW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZXM6IChkYXRhIHx8IFtdKSBhcyBBZGRpdGlvbmFsU2VydmljZVtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEFkZGl0aW9uYWxTZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBhZGRpdGlvbmFsIHNlcnZpY2VzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IG1haW4gc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2UoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpY29uX25hbWU6IHN0cmluZztcclxuICBkaXNwbGF5X29yZGVyOiBudW1iZXI7XHJcbiAgaXNfYWN0aXZlPzogYm9vbGVhbjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VydmljZT86IFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgaWYgKCFkYXRhLm5hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmljb25fbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ljb24gbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlcnZpY2UsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxyXG4gICAgICAgIGljb25fbmFtZTogZGF0YS5pY29uX25hbWUsXHJcbiAgICAgICAgZGlzcGxheV9vcmRlcjogZGF0YS5kaXNwbGF5X29yZGVyID8/IDAsXHJcbiAgICAgICAgaXNfYWN0aXZlOiBkYXRhLmlzX2FjdGl2ZSA/PyB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VydmljZTogc2VydmljZSBhcyBTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZVNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2VydmljZShcclxuICBzZXJ2aWNlSWQ6IHN0cmluZyxcclxuICBkYXRhOiB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgaWNvbl9uYW1lPzogc3RyaW5nO1xyXG4gICAgZGlzcGxheV9vcmRlcj86IG51bWJlcjtcclxuICAgIGlzX2FjdGl2ZT86IGJvb2xlYW47XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2U/OiBTZXJ2aWNlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLm5hbWUgPSBkYXRhLm5hbWUudHJpbSgpO1xyXG4gICAgaWYgKGRhdGEuaWNvbl9uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaWNvbl9uYW1lID0gZGF0YS5pY29uX25hbWU7XHJcbiAgICBpZiAoZGF0YS5kaXNwbGF5X29yZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZGlzcGxheV9vcmRlciA9IGRhdGEuZGlzcGxheV9vcmRlcjtcclxuICAgIGlmIChkYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmlzX2FjdGl2ZSA9IGRhdGEuaXNfYWN0aXZlO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgLmVxKCdpZCcsIHNlcnZpY2VJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2U6IHNlcnZpY2UgYXMgU2VydmljZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVsZXRlIGEgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2VydmljZShzZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgIC5lcSgnaWQnLCBzZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGFkZGl0aW9uYWwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aW9uYWxTZXJ2aWNlKGRhdGE6IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaWNvbl9uYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheV9vcmRlcjogbnVtYmVyO1xyXG4gIHJlcXVpcmVzX3F1YW50aXR5PzogYm9vbGVhbjtcclxuICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZGRpdGlvbmFsU2VydmljZT86IEFkZGl0aW9uYWxTZXJ2aWNlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGlmICghZGF0YS5uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5pY29uX25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJY29uIG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBhZGRpdGlvbmFsU2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcclxuICAgICAgICBpY29uX25hbWU6IGRhdGEuaWNvbl9uYW1lLFxyXG4gICAgICAgIGRpc3BsYXlfb3JkZXI6IGRhdGEuZGlzcGxheV9vcmRlciA/PyAwLFxyXG4gICAgICAgIHJlcXVpcmVzX3F1YW50aXR5OiBkYXRhLnJlcXVpcmVzX3F1YW50aXR5ID8/IGZhbHNlLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogZGF0YS5pc19hY3RpdmUgPz8gdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYWRkaXRpb25hbFNlcnZpY2U6IGFkZGl0aW9uYWxTZXJ2aWNlIGFzIEFkZGl0aW9uYWxTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZUFkZGl0aW9uYWxTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBhZGRpdGlvbmFsIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWRkaXRpb25hbFNlcnZpY2UoXHJcbiAgYWRkaXRpb25hbFNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBpY29uX25hbWU/OiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5X29yZGVyPzogbnVtYmVyO1xyXG4gICAgcmVxdWlyZXNfcXVhbnRpdHk/OiBib29sZWFuO1xyXG4gICAgaXNfYWN0aXZlPzogYm9vbGVhbjtcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2U/OiBBZGRpdGlvbmFsU2VydmljZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7fTtcclxuICAgIGlmIChkYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5uYW1lID0gZGF0YS5uYW1lLnRyaW0oKTtcclxuICAgIGlmIChkYXRhLmljb25fbmFtZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmljb25fbmFtZSA9IGRhdGEuaWNvbl9uYW1lO1xyXG4gICAgaWYgKGRhdGEuZGlzcGxheV9vcmRlciAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmRpc3BsYXlfb3JkZXIgPSBkYXRhLmRpc3BsYXlfb3JkZXI7XHJcbiAgICBpZiAoZGF0YS5yZXF1aXJlc19xdWFudGl0eSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnJlcXVpcmVzX3F1YW50aXR5ID0gZGF0YS5yZXF1aXJlc19xdWFudGl0eTtcclxuICAgIGlmIChkYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmlzX2FjdGl2ZSA9IGRhdGEuaXNfYWN0aXZlO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYWRkaXRpb25hbFNlcnZpY2UsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgLmVxKCdpZCcsIGFkZGl0aW9uYWxTZXJ2aWNlSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGFkZGl0aW9uYWwgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFkZGl0aW9uYWxTZXJ2aWNlOiBhZGRpdGlvbmFsU2VydmljZSBhcyBBZGRpdGlvbmFsU2VydmljZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVBZGRpdGlvbmFsU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgYWRkaXRpb25hbCBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVsZXRlIGFuIGFkZGl0aW9uYWwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFkZGl0aW9uYWxTZXJ2aWNlKGFkZGl0aW9uYWxTZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdpZCcsIGFkZGl0aW9uYWxTZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBhZGRpdGlvbmFsIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRlbGV0ZUFkZGl0aW9uYWxTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBhZGRpdGlvbmFsIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWRkaXRpb25hbCBzZXJ2aWNlcyBsaW5rZWQgdG8gYSBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlUnVsZXMoc2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlSWRzPzogc3RyaW5nW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VfYWRkaXRpb25hbF9zZXJ2aWNlX3J1bGVzJylcclxuICAgICAgLnNlbGVjdCgnYWRkaXRpb25hbF9zZXJ2aWNlX2lkJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZSBydWxlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZGl0aW9uYWxTZXJ2aWNlSWRzID0gKGRhdGEgfHwgW10pLm1hcCgocnVsZTogYW55KSA9PiBydWxlLmFkZGl0aW9uYWxfc2VydmljZV9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYWRkaXRpb25hbFNlcnZpY2VJZHMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVJ1bGVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgcnVsZXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIG1haW4gc2VydmljZSBhbmQgYWRkaXRpb25hbCBzZXJ2aWNlc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2VSdWxlcyhcclxuICBzZXJ2aWNlSWQ6IHN0cmluZyxcclxuICBhZGRpdGlvbmFsU2VydmljZUlkczogc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBEZWxldGUgZXhpc3RpbmcgcnVsZXNcclxuICAgIGNvbnN0IHsgZXJyb3I6IGRlbGV0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZV9hZGRpdGlvbmFsX3NlcnZpY2VfcnVsZXMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICBpZiAoZGVsZXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgc2VydmljZSBydWxlczonLCBkZWxldGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZGVsZXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluc2VydCBuZXcgcnVsZXNcclxuICAgIGlmIChhZGRpdGlvbmFsU2VydmljZUlkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJ1bGVzID0gYWRkaXRpb25hbFNlcnZpY2VJZHMubWFwKChhZGRpdGlvbmFsU2VydmljZUlkKSA9PiAoe1xyXG4gICAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VJZCxcclxuICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQ6IGFkZGl0aW9uYWxTZXJ2aWNlSWQsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgICAgLmluc2VydChydWxlcyk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnNlcnRpbmcgc2VydmljZSBydWxlczonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBpbnNlcnRFcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZVNlcnZpY2VSdWxlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgc2VydmljZSBydWxlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBwcmljaW5nIHJ1bGUgZm9yIGEgc2VydmljZSAoYmFzZV9wcmljZSlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlUHJpY2Uoc2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByaWNpbmdSdWxlPzogUHJpY2luZ1J1bGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdydWxlX3R5cGUnLCAnYmFzZV9wcmljZScpXHJcbiAgICAgIC5lcSgnc2VydmljZV9pZCcsIHNlcnZpY2VJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB8IHVuZGVmaW5lZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlUHJpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBwcmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBvciBjcmVhdGUgcHJpY2luZyBydWxlIGZvciBhIHNlcnZpY2UgKGJhc2VfcHJpY2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2VydmljZVByaWNlKFxyXG4gIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIHByaWNlOiBudW1iZXJcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcmljaW5nUnVsZT86IFByaWNpbmdSdWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHByaWNpbmcgcnVsZSBleGlzdHNcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmcsIGVycm9yOiBjaGVja0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ3J1bGVfdHlwZScsICdiYXNlX3ByaWNlJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY2hlY2tFcnJvciAmJiBjaGVja0Vycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgc2VydmljZSBwcmljZTonLCBjaGVja0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjaGVja0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByaWNpbmcgcnVsZVxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgICAudXBkYXRlKHsgcHJpY2UsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBleGlzdGluZy5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgcHJpY2luZyBydWxlXHJcbiAgICAgIC8vIEdldCBzZXJ2aWNlIHRvIGRldGVybWluZSBkaXNwbGF5X29yZGVyXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSwgZXJyb3I6IHNlcnZpY2VFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAgIC5zZWxlY3QoJ2Rpc3BsYXlfb3JkZXInKVxyXG4gICAgICAgIC5lcSgnaWQnLCBzZXJ2aWNlSWQpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKHNlcnZpY2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZpY2U6Jywgc2VydmljZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHNlcnZpY2VFcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgcnVsZV90eXBlOiAnYmFzZV9wcmljZScsXHJcbiAgICAgICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlSWQsXHJcbiAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlfb3JkZXI6IHNlcnZpY2UuZGlzcGxheV9vcmRlciB8fCAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZVNlcnZpY2VQcmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgc2VydmljZSBwcmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBwcmljaW5nIHJ1bGUgZm9yIGFuIGFkZGl0aW9uYWwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxTZXJ2aWNlUHJpY2UoYWRkaXRpb25hbFNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcmljaW5nUnVsZT86IFByaWNpbmdSdWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgncnVsZV90eXBlJywgJ2FkZGl0aW9uYWxfc2VydmljZScpXHJcbiAgICAgIC5lcSgnYWRkaXRpb25hbF9zZXJ2aWNlX2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFkZGl0aW9uYWxTZXJ2aWNlUHJpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIG9yIGNyZWF0ZSBwcmljaW5nIHJ1bGUgZm9yIGFuIGFkZGl0aW9uYWwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFkZGl0aW9uYWxTZXJ2aWNlUHJpY2UoXHJcbiAgYWRkaXRpb25hbFNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIHByaWNlOiBudW1iZXJcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcmljaW5nUnVsZT86IFByaWNpbmdSdWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHByaWNpbmcgcnVsZSBleGlzdHNcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmcsIGVycm9yOiBjaGVja0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ3J1bGVfdHlwZScsICdhZGRpdGlvbmFsX3NlcnZpY2UnKVxyXG4gICAgICAuZXEoJ2FkZGl0aW9uYWxfc2VydmljZV9pZCcsIGFkZGl0aW9uYWxTZXJ2aWNlSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChjaGVja0Vycm9yICYmIGNoZWNrRXJyb3IuY29kZSAhPT0gJ1BHUlNUMTE2Jykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2U6JywgY2hlY2tFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogY2hlY2tFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcmljaW5nIHJ1bGVcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHByaWNlLCB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmcuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgcHJpY2luZyBydWxlXHJcbiAgICAgIC8vIEdldCBhZGRpdGlvbmFsIHNlcnZpY2UgdG8gZGV0ZXJtaW5lIGRpc3BsYXlfb3JkZXJcclxuICAgICAgY29uc3QgeyBkYXRhOiBhZGRpdGlvbmFsU2VydmljZSwgZXJyb3I6IHNlcnZpY2VFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnZGlzcGxheV9vcmRlcicpXHJcbiAgICAgICAgLmVxKCdpZCcsIGFkZGl0aW9uYWxTZXJ2aWNlSWQpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKHNlcnZpY2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZTonLCBzZXJ2aWNlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogc2VydmljZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBydWxlX3R5cGU6ICdhZGRpdGlvbmFsX3NlcnZpY2UnLFxyXG4gICAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlX2lkOiBhZGRpdGlvbmFsU2VydmljZUlkLFxyXG4gICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICBpc19hY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBkaXNwbGF5X29yZGVyOiBhZGRpdGlvbmFsU2VydmljZS5kaXNwbGF5X29yZGVyIHx8IDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB9O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVBZGRpdGlvbmFsU2VydmljZVByaWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFJFVkVOVUUgQU5BTFlUSUNTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogR2V0IHJldmVudWUgdHJlbmRzIChkYWlseS93ZWVrbHkvbW9udGhseSkgd2l0aCBncm93dGggcGVyY2VudGFnZXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXZlbnVlVHJlbmRzKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgcGVyaW9kPzogJ2RhaWx5JyB8ICd3ZWVrbHknIHwgJ21vbnRobHknO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8eyBwZXJpb2Q6IHN0cmluZzsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyOyBncm93dGg/OiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBwZXJpb2QgPSBmaWx0ZXI/LnBlcmlvZCB8fCAnbW9udGhseSc7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0LCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV2ZW51ZUJ5UGVyaW9kOiB7IFtrZXk6IHN0cmluZ106IHsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyIH0gfSA9IHt9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBsZXQgcGVyaW9kS2V5OiBzdHJpbmc7XHJcbiAgICAgIGlmIChwZXJpb2QgPT09ICdkYWlseScpIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIGlmIChwZXJpb2QgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgd2Vla1N0YXJ0LnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpKTtcclxuICAgICAgICBwZXJpb2RLZXkgPSB3ZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXJldmVudWVCeVBlcmlvZFtwZXJpb2RLZXldKSB7XHJcbiAgICAgICAgcmV2ZW51ZUJ5UGVyaW9kW3BlcmlvZEtleV0gPSB7IHJldmVudWU6IDAsIGJvb2tpbmdzOiAwIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV2ZW51ZUJ5UGVyaW9kW3BlcmlvZEtleV0ucmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICAgIHJldmVudWVCeVBlcmlvZFtwZXJpb2RLZXldLmJvb2tpbmdzICs9IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb3J0ZWRQZXJpb2RzID0gT2JqZWN0LmtleXMocmV2ZW51ZUJ5UGVyaW9kKS5zb3J0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzb3J0ZWRQZXJpb2RzLm1hcCgocGVyaW9kS2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gcmV2ZW51ZUJ5UGVyaW9kW3BlcmlvZEtleV07XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gaW5kZXggPiAwID8gcmV2ZW51ZUJ5UGVyaW9kW3NvcnRlZFBlcmlvZHNbaW5kZXggLSAxXV0gOiBudWxsO1xyXG4gICAgICBjb25zdCBncm93dGggPSBwcmV2aW91cyAmJiBwcmV2aW91cy5yZXZlbnVlID4gMFxyXG4gICAgICAgID8gKChjdXJyZW50LnJldmVudWUgLSBwcmV2aW91cy5yZXZlbnVlKSAvIHByZXZpb3VzLnJldmVudWUpICogMTAwXHJcbiAgICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlcmlvZDogcGVyaW9kS2V5LFxyXG4gICAgICAgIHJldmVudWU6IE1hdGgucm91bmQoY3VycmVudC5yZXZlbnVlKSxcclxuICAgICAgICBib29raW5nczogY3VycmVudC5ib29raW5ncyxcclxuICAgICAgICBncm93dGg6IGdyb3d0aCAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChncm93dGggKiAxMCkgLyAxMCA6IHVuZGVmaW5lZCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZXZlbnVlVHJlbmRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJldmVudWUgdHJlbmRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJldmVudWUgYnJlYWtkb3duIGJ5IHNlcnZpY2UgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJldmVudWVCeVNlcnZpY2VUeXBlKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHNlcnZpY2VUeXBlOiBzdHJpbmc7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlcjsgcGVyY2VudGFnZTogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc2VydmljZV90eXBlLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV2ZW51ZUJ5U2VydmljZTogeyBba2V5OiBzdHJpbmddOiB7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGxldCB0b3RhbFJldmVudWUgPSAwO1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlcnZpY2VUeXBlID0gYm9va2luZy5zZXJ2aWNlX3R5cGUgfHwgJ1Vua25vd24nO1xyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBpZiAoIXJldmVudWVCeVNlcnZpY2Vbc2VydmljZVR5cGVdKSB7XHJcbiAgICAgICAgcmV2ZW51ZUJ5U2VydmljZVtzZXJ2aWNlVHlwZV0gPSB7IHJldmVudWU6IDAsIGJvb2tpbmdzOiAwIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV2ZW51ZUJ5U2VydmljZVtzZXJ2aWNlVHlwZV0ucmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICAgIHJldmVudWVCeVNlcnZpY2Vbc2VydmljZVR5cGVdLmJvb2tpbmdzICs9IDE7XHJcbiAgICAgIHRvdGFsUmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhyZXZlbnVlQnlTZXJ2aWNlKVxyXG4gICAgICAubWFwKChbc2VydmljZVR5cGUsIGRhdGFdKSA9PiAoe1xyXG4gICAgICAgIHNlcnZpY2VUeXBlLFxyXG4gICAgICAgIHJldmVudWU6IE1hdGgucm91bmQoZGF0YS5yZXZlbnVlKSxcclxuICAgICAgICBib29raW5nczogZGF0YS5ib29raW5ncyxcclxuICAgICAgICBwZXJjZW50YWdlOiB0b3RhbFJldmVudWUgPiAwID8gTWF0aC5yb3VuZCgoZGF0YS5yZXZlbnVlIC8gdG90YWxSZXZlbnVlKSAqIDEwMCAqIDEwKSAvIDEwIDogMCxcclxuICAgICAgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnJldmVudWUgLSBhLnJldmVudWUpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZXZlbnVlQnlTZXJ2aWNlVHlwZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByZXZlbnVlIGJ5IHNlcnZpY2UgdHlwZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZXZlbnVlIGJ5IHBheW1lbnQgc3RhdHVzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmV2ZW51ZUJ5UGF5bWVudFN0YXR1cyhmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8eyBzdGF0dXM6IHN0cmluZzsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdwYXltZW50X3N0YXR1cywgdG90YWxfYW1vdW50JylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV2ZW51ZUJ5U3RhdHVzOiB7IFtrZXk6IHN0cmluZ106IHsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgbGV0IHRvdGFsUmV2ZW51ZSA9IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gYm9va2luZy5wYXltZW50X3N0YXR1cyB8fCAndW5rbm93bic7XHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGlmICghcmV2ZW51ZUJ5U3RhdHVzW3N0YXR1c10pIHtcclxuICAgICAgICByZXZlbnVlQnlTdGF0dXNbc3RhdHVzXSA9IHsgcmV2ZW51ZTogMCwgYm9va2luZ3M6IDAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXZlbnVlQnlTdGF0dXNbc3RhdHVzXS5yZXZlbnVlICs9IGFtb3VudDtcclxuICAgICAgcmV2ZW51ZUJ5U3RhdHVzW3N0YXR1c10uYm9va2luZ3MgKz0gMTtcclxuICAgICAgdG90YWxSZXZlbnVlICs9IGFtb3VudDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHJldmVudWVCeVN0YXR1cylcclxuICAgICAgLm1hcCgoW3N0YXR1cywgZGF0YV0pID0+ICh7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdGF0dXMuc2xpY2UoMSksXHJcbiAgICAgICAgcmV2ZW51ZTogTWF0aC5yb3VuZChkYXRhLnJldmVudWUpLFxyXG4gICAgICAgIGJvb2tpbmdzOiBkYXRhLmJvb2tpbmdzLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsUmV2ZW51ZSA+IDAgPyBNYXRoLnJvdW5kKChkYXRhLnJldmVudWUgLyB0b3RhbFJldmVudWUpICogMTAwICogMTApIC8gMTAgOiAwLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucmV2ZW51ZSAtIGEucmV2ZW51ZSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJldmVudWVCeVBheW1lbnRTdGF0dXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmV2ZW51ZSBieSBwYXltZW50IHN0YXR1cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhdmVyYWdlIG9yZGVyIHZhbHVlIChBT1YpIHRyZW5kcyBvdmVyIHRpbWVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmVyYWdlT3JkZXJWYWx1ZShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHBlcmlvZD86ICdkYWlseScgfCAnd2Vla2x5JyB8ICdtb250aGx5JztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgcGVyaW9kOiBzdHJpbmc7IGFvdjogbnVtYmVyOyBib29raW5nczogbnVtYmVyOyBncm93dGg/OiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBwZXJpb2QgPSBmaWx0ZXI/LnBlcmlvZCB8fCAnbW9udGhseSc7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0LCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYW92QnlQZXJpb2Q6IHsgW2tleTogc3RyaW5nXTogeyB0b3RhbDogbnVtYmVyOyBjb3VudDogbnVtYmVyIH0gfSA9IHt9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBsZXQgcGVyaW9kS2V5OiBzdHJpbmc7XHJcbiAgICAgIGlmIChwZXJpb2QgPT09ICdkYWlseScpIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIGlmIChwZXJpb2QgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgd2Vla1N0YXJ0LnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpKTtcclxuICAgICAgICBwZXJpb2RLZXkgPSB3ZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWFvdkJ5UGVyaW9kW3BlcmlvZEtleV0pIHtcclxuICAgICAgICBhb3ZCeVBlcmlvZFtwZXJpb2RLZXldID0geyB0b3RhbDogMCwgY291bnQ6IDAgfTtcclxuICAgICAgfVxyXG4gICAgICBhb3ZCeVBlcmlvZFtwZXJpb2RLZXldLnRvdGFsICs9IGFtb3VudDtcclxuICAgICAgYW92QnlQZXJpb2RbcGVyaW9kS2V5XS5jb3VudCArPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc29ydGVkUGVyaW9kcyA9IE9iamVjdC5rZXlzKGFvdkJ5UGVyaW9kKS5zb3J0KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBzb3J0ZWRQZXJpb2RzLm1hcCgocGVyaW9kS2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYW92QnlQZXJpb2RbcGVyaW9kS2V5XTtcclxuICAgICAgY29uc3QgYW92ID0gY3VycmVudC5jb3VudCA+IDAgPyBjdXJyZW50LnRvdGFsIC8gY3VycmVudC5jb3VudCA6IDA7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gaW5kZXggPiAwID8gYW92QnlQZXJpb2Rbc29ydGVkUGVyaW9kc1tpbmRleCAtIDFdXSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQW92ID0gcHJldmlvdXMgJiYgcHJldmlvdXMuY291bnQgPiAwID8gcHJldmlvdXMudG90YWwgLyBwcmV2aW91cy5jb3VudCA6IDA7XHJcbiAgICAgIGNvbnN0IGdyb3d0aCA9IHByZXZpb3VzQW92ID4gMCA/ICgoYW92IC0gcHJldmlvdXNBb3YpIC8gcHJldmlvdXNBb3YpICogMTAwIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwZXJpb2Q6IHBlcmlvZEtleSxcclxuICAgICAgICBhb3Y6IE1hdGgucm91bmQoYW92ICogMTAwKSAvIDEwMCxcclxuICAgICAgICBib29raW5nczogY3VycmVudC5jb3VudCxcclxuICAgICAgICBncm93dGg6IGdyb3d0aCAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChncm93dGggKiAxMCkgLyAxMCA6IHVuZGVmaW5lZCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBdmVyYWdlT3JkZXJWYWx1ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBhdmVyYWdlIG9yZGVyIHZhbHVlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJldmVudWUgZm9yZWNhc3QgYmFzZWQgb24gdHJlbmRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmV2ZW51ZUZvcmVjYXN0KGZpbHRlcj86IHtcclxuICBwZXJpb2RzPzogbnVtYmVyO1xyXG4gIHBlcmlvZD86ICdkYWlseScgfCAnd2Vla2x5JyB8ICdtb250aGx5JztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgcGVyaW9kOiBzdHJpbmc7IGZvcmVjYXN0OiBudW1iZXI7IGxvd2VyQm91bmQ6IG51bWJlcjsgdXBwZXJCb3VuZDogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGhpc3RvcmljYWwgZGF0YVxyXG4gICAgY29uc3QgaGlzdG9yaWNhbFJlc3VsdCA9IGF3YWl0IGdldFJldmVudWVUcmVuZHMoe1xyXG4gICAgICBwZXJpb2Q6IGZpbHRlcj8ucGVyaW9kIHx8ICdtb250aGx5JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghaGlzdG9yaWNhbFJlc3VsdC5zdWNjZXNzIHx8ICFoaXN0b3JpY2FsUmVzdWx0LmRhdGEgfHwgaGlzdG9yaWNhbFJlc3VsdC5kYXRhLmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW5zdWZmaWNpZW50IGhpc3RvcmljYWwgZGF0YSBmb3IgZm9yZWNhc3RpbmcnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlzdG9yaWNhbCA9IGhpc3RvcmljYWxSZXN1bHQuZGF0YTtcclxuICAgIGNvbnN0IHBlcmlvZHMgPSBmaWx0ZXI/LnBlcmlvZHMgfHwgMztcclxuXHJcbiAgICAvLyBTaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24gZm9yIGZvcmVjYXN0aW5nXHJcbiAgICBjb25zdCBuID0gaGlzdG9yaWNhbC5sZW5ndGg7XHJcbiAgICBjb25zdCBzdW1YID0gKG4gKiAobiArIDEpKSAvIDI7XHJcbiAgICBjb25zdCBzdW1ZID0gaGlzdG9yaWNhbC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5yZXZlbnVlLCAwKTtcclxuICAgIGNvbnN0IHN1bVhZID0gaGlzdG9yaWNhbC5yZWR1Y2UoKHN1bSwgaXRlbSwgaW5kZXgpID0+IHN1bSArIChpbmRleCArIDEpICogaXRlbS5yZXZlbnVlLCAwKTtcclxuICAgIGNvbnN0IHN1bVgyID0gKG4gKiAobiArIDEpICogKDIgKiBuICsgMSkpIC8gNjtcclxuXHJcbiAgICBjb25zdCBzbG9wZSA9IChuICogc3VtWFkgLSBzdW1YICogc3VtWSkgLyAobiAqIHN1bVgyIC0gc3VtWCAqIHN1bVgpO1xyXG4gICAgY29uc3QgaW50ZXJjZXB0ID0gKHN1bVkgLSBzbG9wZSAqIHN1bVgpIC8gbjtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgc3RhbmRhcmQgZGV2aWF0aW9uIGZvciBjb25maWRlbmNlIGludGVydmFsc1xyXG4gICAgY29uc3QgcmVzaWR1YWxzID0gaGlzdG9yaWNhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByZWRpY3RlZCA9IGludGVyY2VwdCArIHNsb3BlICogKGluZGV4ICsgMSk7XHJcbiAgICAgIHJldHVybiBpdGVtLnJldmVudWUgLSBwcmVkaWN0ZWQ7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHZhcmlhbmNlID0gcmVzaWR1YWxzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByICogciwgMCkgLyAobiAtIDIpO1xyXG4gICAgY29uc3Qgc3RkRGV2ID0gTWF0aC5zcXJ0KHZhcmlhbmNlKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBmb3JlY2FzdFxyXG4gICAgY29uc3QgZm9yZWNhc3Q6IEFycmF5PHsgcGVyaW9kOiBzdHJpbmc7IGZvcmVjYXN0OiBudW1iZXI7IGxvd2VyQm91bmQ6IG51bWJlcjsgdXBwZXJCb3VuZDogbnVtYmVyIH0+ID0gW107XHJcbiAgICBjb25zdCBsYXN0UGVyaW9kID0gaGlzdG9yaWNhbFtoaXN0b3JpY2FsLmxlbmd0aCAtIDFdLnBlcmlvZDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RzOyBpKyspIHtcclxuICAgICAgY29uc3QgZnV0dXJlSW5kZXggPSBuICsgaTtcclxuICAgICAgY29uc3QgcHJlZGljdGVkID0gaW50ZXJjZXB0ICsgc2xvcGUgKiBmdXR1cmVJbmRleDtcclxuICAgICAgY29uc3QgY29uZmlkZW5jZUludGVydmFsID0gMS45NiAqIHN0ZERldjsgLy8gOTUlIGNvbmZpZGVuY2VcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIHBlcmlvZCBrZXkgKHNpbXBsaWZpZWQgLSB3b3VsZCBuZWVkIHByb3BlciBkYXRlIGhhbmRsaW5nIGluIHByb2R1Y3Rpb24pXHJcbiAgICAgIGxldCBwZXJpb2RLZXk6IHN0cmluZztcclxuICAgICAgaWYgKGZpbHRlcj8ucGVyaW9kID09PSAnZGFpbHknKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGUgPSBuZXcgRGF0ZShsYXN0UGVyaW9kKTtcclxuICAgICAgICBsYXN0RGF0ZS5zZXREYXRlKGxhc3REYXRlLmdldERhdGUoKSArIGkpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGxhc3REYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXI/LnBlcmlvZCA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZSA9IG5ldyBEYXRlKGxhc3RQZXJpb2QpO1xyXG4gICAgICAgIGxhc3REYXRlLnNldERhdGUobGFzdERhdGUuZ2V0RGF0ZSgpICsgaSAqIDcpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGxhc3REYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZSA9IG5ldyBEYXRlKGxhc3RQZXJpb2QgKyAnLTAxJyk7XHJcbiAgICAgICAgbGFzdERhdGUuc2V0TW9udGgobGFzdERhdGUuZ2V0TW9udGgoKSArIGkpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGAke2xhc3REYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGxhc3REYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcmVjYXN0LnB1c2goe1xyXG4gICAgICAgIHBlcmlvZDogcGVyaW9kS2V5LFxyXG4gICAgICAgIGZvcmVjYXN0OiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHByZWRpY3RlZCkpLFxyXG4gICAgICAgIGxvd2VyQm91bmQ6IE1hdGgubWF4KDAsIE1hdGgucm91bmQocHJlZGljdGVkIC0gY29uZmlkZW5jZUludGVydmFsKSksXHJcbiAgICAgICAgdXBwZXJCb3VuZDogTWF0aC5yb3VuZChwcmVkaWN0ZWQgKyBjb25maWRlbmNlSW50ZXJ2YWwpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JlY2FzdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZXZlbnVlRm9yZWNhc3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgcmV2ZW51ZSBmb3JlY2FzdCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0xFQU5FUiBQRVJGT1JNQU5DRSA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEdldCBjbGVhbmVyIHBlcmZvcm1hbmNlIG1ldHJpY3NcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmVyUGVyZm9ybWFuY2VNZXRyaWNzKGZpbHRlcj86IHtcclxuICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkQm9va2luZ3M6IG51bWJlcjtcclxuICAgIGNhbmNlbGxlZEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBjb21wbGV0aW9uUmF0ZTogbnVtYmVyO1xyXG4gICAgb25UaW1lUmF0ZTogbnVtYmVyO1xyXG4gICAgYXZlcmFnZVJhdGluZzogbnVtYmVyO1xyXG4gICAgdG90YWxFYXJuaW5nczogbnVtYmVyO1xyXG4gICAgYXZlcmFnZUVhcm5pbmdzUGVyQm9va2luZzogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjbGVhbmVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdjbGVhbmVycycpLnNlbGVjdCgnaWQsIG5hbWUsIHJhdGluZycpO1xyXG4gICAgaWYgKGZpbHRlcj8uY2xlYW5lcklkKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5LmVxKCdpZCcsIGZpbHRlci5jbGVhbmVySWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ3Mgd2l0aCBjbGVhbmVyIGFzc2lnbm1lbnRzXHJcbiAgICBsZXQgYm9va2luZ3NRdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBzdGF0dXMsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIGNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUsIHNlcnZpY2VfZGF0ZSwgc2VydmljZV90aW1lLCBleHBlY3RlZF9hcnJpdmFsX3RpbWUsIGNyZWF0ZWRfYXQnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9jZXNzIGNsZWFuZXIgcGVyZm9ybWFuY2VcclxuICAgIGNvbnN0IGNsZWFuZXJTdGF0czogeyBba2V5OiBzdHJpbmddOiB7XHJcbiAgICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICB0b3RhbEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIGNvbXBsZXRlZEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIGNhbmNlbGxlZEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIG9uVGltZUJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIHRvdGFsRWFybmluZ3M6IG51bWJlcjtcclxuICAgICAgcmF0aW5nczogbnVtYmVyW107XHJcbiAgICB9IH0gPSB7fTtcclxuXHJcbiAgICBjbGVhbmVycz8uZm9yRWFjaCgoY2xlYW5lcikgPT4ge1xyXG4gICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lci5pZF0gPSB7XHJcbiAgICAgICAgY2xlYW5lcklkOiBjbGVhbmVyLmlkLFxyXG4gICAgICAgIGNsZWFuZXJOYW1lOiBjbGVhbmVyLm5hbWUsXHJcbiAgICAgICAgdG90YWxCb29raW5nczogMCxcclxuICAgICAgICBjb21wbGV0ZWRCb29raW5nczogMCxcclxuICAgICAgICBjYW5jZWxsZWRCb29raW5nczogMCxcclxuICAgICAgICBvblRpbWVCb29raW5nczogMCxcclxuICAgICAgICB0b3RhbEVhcm5pbmdzOiAwLFxyXG4gICAgICAgIHJhdGluZ3M6IGNsZWFuZXIucmF0aW5nID8gW2NsZWFuZXIucmF0aW5nXSA6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2xlYW5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBjbGVhbmVySWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFjbGVhbmVySWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBjbGVhbmVySWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbGVhbmVySWRzLmZvckVhY2goKGNsZWFuZXJJZCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0udG90YWxCb29raW5ncyArPSAxO1xyXG5cclxuICAgICAgICBpZiAoYm9va2luZy5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lcklkXS5jb21wbGV0ZWRCb29raW5ncyArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9va2luZy5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKSB7XHJcbiAgICAgICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lcklkXS5jYW5jZWxsZWRCb29raW5ncyArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgb24tdGltZSBwZXJmb3JtYW5jZVxyXG4gICAgICAgIGlmIChib29raW5nLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgJiYgYm9va2luZy5leHBlY3RlZF9hcnJpdmFsX3RpbWUgJiYgYm9va2luZy5zZXJ2aWNlX3RpbWUpIHtcclxuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gbmV3IERhdGUoYCR7Ym9va2luZy5zZXJ2aWNlX2RhdGV9VCR7Ym9va2luZy5leHBlY3RlZF9hcnJpdmFsX3RpbWV9YCk7XHJcbiAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgRGF0ZShgJHtib29raW5nLnNlcnZpY2VfZGF0ZX1UJHtib29raW5nLnNlcnZpY2VfdGltZX1gKTtcclxuICAgICAgICAgIGlmIChleHBlY3RlZCA8PSBzY2hlZHVsZWQgfHwgTWF0aC5hYnMoZXhwZWN0ZWQuZ2V0VGltZSgpIC0gc2NoZWR1bGVkLmdldFRpbWUoKSkgPD0gMTUgKiA2MCAqIDEwMDApIHtcclxuICAgICAgICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0ub25UaW1lQm9va2luZ3MgKz0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBlYXJuaW5nc1xyXG4gICAgICAgIGlmIChib29raW5nLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcpIHtcclxuICAgICAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbEFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgICAgICAvLyBDaGVjayBmb3IgZWFybmluZ3Mgb3ZlcnJpZGVcclxuICAgICAgICAgIGxldCBlYXJuaW5ncyA9IDA7XHJcbiAgICAgICAgICBpZiAoYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlICYmIHR5cGVvZiBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJyaWRlID0gYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlW2NsZWFuZXJJZF07XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSkge1xyXG4gICAgICAgICAgICAgIGVhcm5pbmdzID0gb3ZlcnJpZGUudG90YWxFYXJuaW5ncyB8fCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBEZWZhdWx0OiA3MCUgb2YgdG90YWwgYW1vdW50IChjYW4gYmUgYWRqdXN0ZWQpXHJcbiAgICAgICAgICAgIGVhcm5pbmdzID0gdG90YWxBbW91bnQgKiAwLjc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0udG90YWxFYXJuaW5ncyArPSBlYXJuaW5ncztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhjbGVhbmVyU3RhdHMpLm1hcCgoc3RhdHMpID0+IHtcclxuICAgICAgY29uc3QgY29tcGxldGlvblJhdGUgPSBzdGF0cy50b3RhbEJvb2tpbmdzID4gMFxyXG4gICAgICAgID8gKHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzIC8gc3RhdHMudG90YWxCb29raW5ncykgKiAxMDBcclxuICAgICAgICA6IDA7XHJcbiAgICAgIGNvbnN0IG9uVGltZVJhdGUgPSBzdGF0cy5jb21wbGV0ZWRCb29raW5ncyA+IDBcclxuICAgICAgICA/IChzdGF0cy5vblRpbWVCb29raW5ncyAvIHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzKSAqIDEwMFxyXG4gICAgICAgIDogMDtcclxuICAgICAgY29uc3QgYXZlcmFnZVJhdGluZyA9IHN0YXRzLnJhdGluZ3MubGVuZ3RoID4gMFxyXG4gICAgICAgID8gc3RhdHMucmF0aW5ncy5yZWR1Y2UoKHN1bSwgcikgPT4gc3VtICsgciwgMCkgLyBzdGF0cy5yYXRpbmdzLmxlbmd0aFxyXG4gICAgICAgIDogMDtcclxuICAgICAgY29uc3QgYXZlcmFnZUVhcm5pbmdzUGVyQm9va2luZyA9IHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzID4gMFxyXG4gICAgICAgID8gc3RhdHMudG90YWxFYXJuaW5ncyAvIHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzXHJcbiAgICAgICAgOiAwO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhbmVySWQ6IHN0YXRzLmNsZWFuZXJJZCxcclxuICAgICAgICBjbGVhbmVyTmFtZTogc3RhdHMuY2xlYW5lck5hbWUsXHJcbiAgICAgICAgdG90YWxCb29raW5nczogc3RhdHMudG90YWxCb29raW5ncyxcclxuICAgICAgICBjb21wbGV0ZWRCb29raW5nczogc3RhdHMuY29tcGxldGVkQm9va2luZ3MsXHJcbiAgICAgICAgY2FuY2VsbGVkQm9va2luZ3M6IHN0YXRzLmNhbmNlbGxlZEJvb2tpbmdzLFxyXG4gICAgICAgIGNvbXBsZXRpb25SYXRlOiBNYXRoLnJvdW5kKGNvbXBsZXRpb25SYXRlICogMTApIC8gMTAsXHJcbiAgICAgICAgb25UaW1lUmF0ZTogTWF0aC5yb3VuZChvblRpbWVSYXRlICogMTApIC8gMTAsXHJcbiAgICAgICAgYXZlcmFnZVJhdGluZzogTWF0aC5yb3VuZChhdmVyYWdlUmF0aW5nICogMTApIC8gMTAsXHJcbiAgICAgICAgdG90YWxFYXJuaW5nczogTWF0aC5yb3VuZChzdGF0cy50b3RhbEVhcm5pbmdzICogMTAwKSAvIDEwMCxcclxuICAgICAgICBhdmVyYWdlRWFybmluZ3NQZXJCb29raW5nOiBNYXRoLnJvdW5kKGF2ZXJhZ2VFYXJuaW5nc1BlckJvb2tpbmcgKiAxMDApIC8gMTAwLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldENsZWFuZXJQZXJmb3JtYW5jZU1ldHJpY3M6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lciBwZXJmb3JtYW5jZSBtZXRyaWNzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRvcCBwZXJmb3JtaW5nIGNsZWFuZXJzIGJ5IHZhcmlvdXMgbWV0cmljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFBlcmZvcm1lcnMoZmlsdGVyPzoge1xyXG4gIG1ldHJpYz86ICdjb21wbGV0aW9uUmF0ZScgfCAnZWFybmluZ3MnIHwgJ2Jvb2tpbmdzJyB8ICdyYXRpbmcnO1xyXG4gIGxpbWl0PzogbnVtYmVyO1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgIG1ldHJpYzogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIHJhbms6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwZXJmb3JtYW5jZVJlc3VsdCA9IGF3YWl0IGdldENsZWFuZXJQZXJmb3JtYW5jZU1ldHJpY3Moe1xyXG4gICAgICBkYXRlRnJvbTogZmlsdGVyPy5kYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBmaWx0ZXI/LmRhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVyZm9ybWFuY2VSZXN1bHQuc3VjY2VzcyB8fCAhcGVyZm9ybWFuY2VSZXN1bHQuZGF0YSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggcGVyZm9ybWFuY2UgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRyaWMgPSBmaWx0ZXI/Lm1ldHJpYyB8fCAnZWFybmluZ3MnO1xyXG4gICAgY29uc3QgbGltaXQgPSBmaWx0ZXI/LmxpbWl0IHx8IDEwO1xyXG5cclxuICAgIGxldCBzb3J0ZWQgPSBbLi4ucGVyZm9ybWFuY2VSZXN1bHQuZGF0YV07XHJcbiAgICBpZiAobWV0cmljID09PSAnY29tcGxldGlvblJhdGUnKSB7XHJcbiAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBiLmNvbXBsZXRpb25SYXRlIC0gYS5jb21wbGV0aW9uUmF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gJ2Vhcm5pbmdzJykge1xyXG4gICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gYi50b3RhbEVhcm5pbmdzIC0gYS50b3RhbEVhcm5pbmdzKTtcclxuICAgIH0gZWxzZSBpZiAobWV0cmljID09PSAnYm9va2luZ3MnKSB7XHJcbiAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBiLnRvdGFsQm9va2luZ3MgLSBhLnRvdGFsQm9va2luZ3MpO1xyXG4gICAgfSBlbHNlIGlmIChtZXRyaWMgPT09ICdyYXRpbmcnKSB7XHJcbiAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBiLmF2ZXJhZ2VSYXRpbmcgLSBhLmF2ZXJhZ2VSYXRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZC5zbGljZSgwLCBsaW1pdCkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU6IG51bWJlcjtcclxuICAgICAgaWYgKG1ldHJpYyA9PT0gJ2NvbXBsZXRpb25SYXRlJykge1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5jb21wbGV0aW9uUmF0ZTtcclxuICAgICAgfSBlbHNlIGlmIChtZXRyaWMgPT09ICdlYXJuaW5ncycpIHtcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0udG90YWxFYXJuaW5ncztcclxuICAgICAgfSBlbHNlIGlmIChtZXRyaWMgPT09ICdib29raW5ncycpIHtcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0udG90YWxCb29raW5ncztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0uYXZlcmFnZVJhdGluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhbmVySWQ6IGl0ZW0uY2xlYW5lcklkLFxyXG4gICAgICAgIGNsZWFuZXJOYW1lOiBpdGVtLmNsZWFuZXJOYW1lLFxyXG4gICAgICAgIG1ldHJpYzogbWV0cmljLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWV0cmljLnNsaWNlKDEpLFxyXG4gICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCxcclxuICAgICAgICByYW5rOiBpbmRleCArIDEsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0VG9wUGVyZm9ybWVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB0b3AgcGVyZm9ybWVycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjbGVhbmVyIGVhcm5pbmdzIHJlcG9ydFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsZWFuZXJFYXJuaW5nc1JlcG9ydChmaWx0ZXI/OiB7XHJcbiAgY2xlYW5lcklkPzogc3RyaW5nO1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBwZXJpb2Q/OiAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseSc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBwZXJpb2Q6IHN0cmluZztcclxuICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgIGVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICBib29raW5nczogbnVtYmVyO1xyXG4gICAgYXZlcmFnZUVhcm5pbmdzOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBwZXJpb2QgPSBmaWx0ZXI/LnBlcmlvZCB8fCAnbW9udGhseSc7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAvLyBHZXQgY2xlYW5lcnNcclxuICAgIGxldCBjbGVhbmVyc1F1ZXJ5ID0gc3VwYWJhc2UuZnJvbSgnY2xlYW5lcnMnKS5zZWxlY3QoJ2lkLCBuYW1lJyk7XHJcbiAgICBpZiAoZmlsdGVyPy5jbGVhbmVySWQpIHtcclxuICAgICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZXEoJ2lkJywgZmlsdGVyLmNsZWFuZXJJZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgY2xlYW5lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNsZWFuZXJzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBib29raW5nc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgY3JlYXRlZF9hdCwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cywgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZScpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAuZXEoJ3BheW1lbnRfc3RhdHVzJywgJ3BhaWQnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgYm9va2luZ3NRdWVyeTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGJvb2tpbmdzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVhcm5pbmdzQnlQZXJpb2Q6IHsgW2tleTogc3RyaW5nXTogeyBbY2xlYW5lcklkOiBzdHJpbmddOiB7IGVhcm5pbmdzOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9IH0gfSA9IHt9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICBsZXQgcGVyaW9kS2V5OiBzdHJpbmc7XHJcbiAgICAgIGlmIChwZXJpb2QgPT09ICdkYWlseScpIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIGlmIChwZXJpb2QgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgd2Vla1N0YXJ0LnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpKTtcclxuICAgICAgICBwZXJpb2RLZXkgPSB3ZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjbGVhbmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGNsZWFuZXJJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWQgJiYgIWNsZWFuZXJJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgY2xlYW5lcklkcy5mb3JFYWNoKChjbGVhbmVySWQpID0+IHtcclxuICAgICAgICBjb25zdCBjbGVhbmVyID0gY2xlYW5lcnM/LmZpbmQoYyA9PiBjLmlkID09PSBjbGVhbmVySWQpO1xyXG4gICAgICAgIGlmICghY2xlYW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIWVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XSkge1xyXG4gICAgICAgICAgZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldW2NsZWFuZXJJZF0pIHtcclxuICAgICAgICAgIGVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XVtjbGVhbmVySWRdID0ge1xyXG4gICAgICAgICAgICBlYXJuaW5nczogMCxcclxuICAgICAgICAgICAgYm9va2luZ3M6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6IGNsZWFuZXIubmFtZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWFybmluZ3MgPSAwO1xyXG4gICAgICAgIGlmIChib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgJiYgdHlwZW9mIGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIGNvbnN0IG92ZXJyaWRlID0gYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlW2NsZWFuZXJJZF07XHJcbiAgICAgICAgICBpZiAob3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgZWFybmluZ3MgPSBvdmVycmlkZS50b3RhbEVhcm5pbmdzIHx8IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVhcm5pbmdzID0gdG90YWxBbW91bnQgKiAwLjc7IC8vIERlZmF1bHQgNzAlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV1bY2xlYW5lcklkXS5lYXJuaW5ncyArPSBlYXJuaW5ncztcclxuICAgICAgICBlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV1bY2xlYW5lcklkXS5ib29raW5ncyArPSAxO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8e1xyXG4gICAgICBwZXJpb2Q6IHN0cmluZztcclxuICAgICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgIGVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICAgIGJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIGF2ZXJhZ2VFYXJuaW5nczogbnVtYmVyO1xyXG4gICAgfT4gPSBbXTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhlYXJuaW5nc0J5UGVyaW9kKS5mb3JFYWNoKChbcGVyaW9kLCBjbGVhbmVyRGF0YV0pID0+IHtcclxuICAgICAgT2JqZWN0LmVudHJpZXMoY2xlYW5lckRhdGEpLmZvckVhY2goKFtjbGVhbmVySWQsIGRhdGFdKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgY2xlYW5lcklkLFxyXG4gICAgICAgICAgY2xlYW5lck5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgIGVhcm5pbmdzOiBNYXRoLnJvdW5kKGRhdGEuZWFybmluZ3MgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgYm9va2luZ3M6IGRhdGEuYm9va2luZ3MsXHJcbiAgICAgICAgICBhdmVyYWdlRWFybmluZ3M6IGRhdGEuYm9va2luZ3MgPiAwXHJcbiAgICAgICAgICAgID8gTWF0aC5yb3VuZCgoZGF0YS5lYXJuaW5ncyAvIGRhdGEuYm9va2luZ3MpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldENsZWFuZXJFYXJuaW5nc1JlcG9ydDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVyIGVhcm5pbmdzIHJlcG9ydCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjbGVhbmVyIGJvb2tpbmcgc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsZWFuZXJCb29raW5nU3RhdHMoZmlsdGVyPzoge1xyXG4gIGNsZWFuZXJJZD86IHN0cmluZztcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBwZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAvLyBHZXQgY2xlYW5lcnNcclxuICAgIGxldCBjbGVhbmVyc1F1ZXJ5ID0gc3VwYWJhc2UuZnJvbSgnY2xlYW5lcnMnKS5zZWxlY3QoJ2lkLCBuYW1lJyk7XHJcbiAgICBpZiAoZmlsdGVyPy5jbGVhbmVySWQpIHtcclxuICAgICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZXEoJ2lkJywgZmlsdGVyLmNsZWFuZXJJZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgY2xlYW5lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNsZWFuZXJzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBib29raW5nc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIGNyZWF0ZWRfYXQnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0c0J5Q2xlYW5lcjogeyBba2V5OiBzdHJpbmddOiB7IFtzdGF0dXM6IHN0cmluZ106IG51bWJlcjsgdG90YWw6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0gfSA9IHt9O1xyXG5cclxuICAgIGNsZWFuZXJzPy5mb3JFYWNoKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgIHN0YXRzQnlDbGVhbmVyW2NsZWFuZXIuaWRdID0ge1xyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIG5hbWU6IGNsZWFuZXIubmFtZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsZWFuZXJJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgY2xlYW5lcklkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhY2xlYW5lcklkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgY2xlYW5lcklkcy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3RhdHVzID0gYm9va2luZy5zdGF0dXMgfHwgJ3Vua25vd24nO1xyXG5cclxuICAgICAgY2xlYW5lcklkcy5mb3JFYWNoKChjbGVhbmVySWQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRzQnlDbGVhbmVyW2NsZWFuZXJJZF0pIHJldHVybjtcclxuICAgICAgICBzdGF0c0J5Q2xlYW5lcltjbGVhbmVySWRdLnRvdGFsICs9IDE7XHJcbiAgICAgICAgc3RhdHNCeUNsZWFuZXJbY2xlYW5lcklkXVtzdGF0dXNdID0gKHN0YXRzQnlDbGVhbmVyW2NsZWFuZXJJZF1bc3RhdHVzXSB8fCAwKSArIDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7XHJcbiAgICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICBzdGF0dXM6IHN0cmluZztcclxuICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgcGVyY2VudGFnZTogbnVtYmVyO1xyXG4gICAgfT4gPSBbXTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhzdGF0c0J5Q2xlYW5lcikuZm9yRWFjaCgoW2NsZWFuZXJJZCwgc3RhdHNdKSA9PiB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHN0YXRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAoa2V5ID09PSAndG90YWwnIHx8IGtleSA9PT0gJ25hbWUnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB2YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHN0YXRzLnRvdGFsID4gMCA/IChjb3VudCAvIHN0YXRzLnRvdGFsKSAqIDEwMCA6IDA7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgY2xlYW5lcklkLFxyXG4gICAgICAgICAgY2xlYW5lck5hbWU6IHN0YXRzLm5hbWUsXHJcbiAgICAgICAgICBzdGF0dXM6IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcclxuICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogTWF0aC5yb3VuZChwZXJjZW50YWdlICogMTApIC8gMTAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldENsZWFuZXJCb29raW5nU3RhdHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lciBib29raW5nIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDVVNUT01FUiBBTkFMWVRJQ1MgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VzdG9tZXIgbGlmZXRpbWUgdmFsdWUgKENMVilcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lckxpZmV0aW1lVmFsdWUoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIGN1c3RvbWVyRW1haWw6IHN0cmluZztcclxuICAgIGN1c3RvbWVyTmFtZTogc3RyaW5nO1xyXG4gICAgdG90YWxSZXZlbnVlOiBudW1iZXI7XHJcbiAgICB0b3RhbEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlT3JkZXJWYWx1ZTogbnVtYmVyO1xyXG4gICAgY2x2OiBudW1iZXI7XHJcbiAgICBmaXJzdEJvb2tpbmdEYXRlOiBzdHJpbmc7XHJcbiAgICBsYXN0Qm9va2luZ0RhdGU6IHN0cmluZztcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfZmlyc3RfbmFtZSwgY3VzdG9tZXJfbGFzdF9uYW1lLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzLCBjcmVhdGVkX2F0JylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJEYXRhOiB7IFtlbWFpbDogc3RyaW5nXToge1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIHJldmVudWU6IG51bWJlcjtcclxuICAgICAgYm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgZmlyc3RCb29raW5nOiBzdHJpbmc7XHJcbiAgICAgIGxhc3RCb29raW5nOiBzdHJpbmc7XHJcbiAgICB9IH0gPSB7fTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGJvb2tpbmcuY3VzdG9tZXJfZW1haWwgfHwgJyc7XHJcbiAgICAgIGlmICghZW1haWwpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGlmICghY3VzdG9tZXJEYXRhW2VtYWlsXSkge1xyXG4gICAgICAgIGN1c3RvbWVyRGF0YVtlbWFpbF0gPSB7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIG5hbWU6IGAke2Jvb2tpbmcuY3VzdG9tZXJfZmlyc3RfbmFtZSB8fCAnJ30gJHtib29raW5nLmN1c3RvbWVyX2xhc3RfbmFtZSB8fCAnJ31gLnRyaW0oKSB8fCBlbWFpbCxcclxuICAgICAgICAgIHJldmVudWU6IDAsXHJcbiAgICAgICAgICBib29raW5nczogMCxcclxuICAgICAgICAgIGZpcnN0Qm9va2luZzogYm9va2luZy5jcmVhdGVkX2F0IHx8ICcnLFxyXG4gICAgICAgICAgbGFzdEJvb2tpbmc6IGJvb2tpbmcuY3JlYXRlZF9hdCB8fCAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXN0b21lckRhdGFbZW1haWxdLnJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgICBjdXN0b21lckRhdGFbZW1haWxdLmJvb2tpbmdzICs9IDE7XHJcblxyXG4gICAgICBpZiAoYm9va2luZy5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgaWYgKCFjdXN0b21lckRhdGFbZW1haWxdLmZpcnN0Qm9va2luZyB8fCBib29raW5nLmNyZWF0ZWRfYXQgPCBjdXN0b21lckRhdGFbZW1haWxdLmZpcnN0Qm9va2luZykge1xyXG4gICAgICAgICAgY3VzdG9tZXJEYXRhW2VtYWlsXS5maXJzdEJvb2tpbmcgPSBib29raW5nLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3VzdG9tZXJEYXRhW2VtYWlsXS5sYXN0Qm9va2luZyB8fCBib29raW5nLmNyZWF0ZWRfYXQgPiBjdXN0b21lckRhdGFbZW1haWxdLmxhc3RCb29raW5nKSB7XHJcbiAgICAgICAgICBjdXN0b21lckRhdGFbZW1haWxdLmxhc3RCb29raW5nID0gYm9va2luZy5jcmVhdGVkX2F0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhjdXN0b21lckRhdGEpLm1hcCgoY3VzdG9tZXIpID0+IHtcclxuICAgICAgY29uc3QgYW92ID0gY3VzdG9tZXIuYm9va2luZ3MgPiAwID8gY3VzdG9tZXIucmV2ZW51ZSAvIGN1c3RvbWVyLmJvb2tpbmdzIDogMDtcclxuICAgICAgLy8gU2ltcGxlIENMViBjYWxjdWxhdGlvbjogYXZlcmFnZSBvcmRlciB2YWx1ZSAqIGF2ZXJhZ2UgcHVyY2hhc2UgZnJlcXVlbmN5ICogY3VzdG9tZXIgbGlmZXNwYW5cclxuICAgICAgLy8gRm9yIHNpbXBsaWNpdHksIHVzaW5nIHRvdGFsIHJldmVudWUgYXMgQ0xWIHByb3h5XHJcbiAgICAgIGNvbnN0IGNsdiA9IGN1c3RvbWVyLnJldmVudWU7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1c3RvbWVyRW1haWw6IGN1c3RvbWVyLmVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyTmFtZTogY3VzdG9tZXIubmFtZSxcclxuICAgICAgICB0b3RhbFJldmVudWU6IE1hdGgucm91bmQoY3VzdG9tZXIucmV2ZW51ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxCb29raW5nczogY3VzdG9tZXIuYm9va2luZ3MsXHJcbiAgICAgICAgYXZlcmFnZU9yZGVyVmFsdWU6IE1hdGgucm91bmQoYW92ICogMTAwKSAvIDEwMCxcclxuICAgICAgICBjbHY6IE1hdGgucm91bmQoY2x2ICogMTAwKSAvIDEwMCxcclxuICAgICAgICBmaXJzdEJvb2tpbmdEYXRlOiBjdXN0b21lci5maXJzdEJvb2tpbmcsXHJcbiAgICAgICAgbGFzdEJvb2tpbmdEYXRlOiBjdXN0b21lci5sYXN0Qm9va2luZyxcclxuICAgICAgfTtcclxuICAgIH0pLnNvcnQoKGEsIGIpID0+IGIuY2x2IC0gYS5jbHYpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXN0b21lckxpZmV0aW1lVmFsdWU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgbGlmZXRpbWUgdmFsdWUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VzdG9tZXIgcmV0ZW50aW9uIHJhdGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclJldGVudGlvblJhdGUoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHtcclxuICAgIHJldGVudGlvblJhdGU6IG51bWJlcjtcclxuICAgIG5ld0N1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgcmV0dXJuaW5nQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbEN1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgcGVyaW9kQnJlYWtkb3duOiBBcnJheTx7IHBlcmlvZDogc3RyaW5nOyBuZXdDdXN0b21lcnM6IG51bWJlcjsgcmV0dXJuaW5nQ3VzdG9tZXJzOiBudW1iZXI7IHJldGVudGlvblJhdGU6IG51bWJlciB9PjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgLy8gR2V0IGFsbCBib29raW5ncyBpbiB0aGUgcGVyaW9kXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3JlYXRlZF9hdCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBmaXJzdCBib29raW5nIGRhdGUgZm9yIGVhY2ggY3VzdG9tZXIgKGJlZm9yZSB0aGUgcGVyaW9kKVxyXG4gICAgY29uc3QgZmlyc3RCb29raW5nUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3JlYXRlZF9hdCcpXHJcbiAgICAgIC5sdCgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGZpcnN0Qm9va2luZ3MsIGVycm9yOiBmaXJzdEVycm9yIH0gPSBhd2FpdCBmaXJzdEJvb2tpbmdRdWVyeTtcclxuXHJcbiAgICBpZiAoZmlyc3RFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGZpcnN0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZ0J5Q3VzdG9tZXI6IHsgW2VtYWlsOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgZmlyc3RCb29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGJvb2tpbmcuY3VzdG9tZXJfZW1haWwgfHwgJyc7XHJcbiAgICAgIGlmIChlbWFpbCAmJiAhZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0pIHtcclxuICAgICAgICBmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSA9IGJvb2tpbmcuY3JlYXRlZF9hdCB8fCAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJzSW5QZXJpb2Q6IHsgW2VtYWlsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIGNvbnN0IG5ld0N1c3RvbWVyczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XHJcbiAgICBjb25zdCByZXR1cm5pbmdDdXN0b21lcnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuO1xyXG5cclxuICAgICAgY3VzdG9tZXJzSW5QZXJpb2RbZW1haWxdID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSkge1xyXG4gICAgICAgIHJldHVybmluZ0N1c3RvbWVycy5hZGQoZW1haWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0N1c3RvbWVycy5hZGQoZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b3RhbEN1c3RvbWVycyA9IE9iamVjdC5rZXlzKGN1c3RvbWVyc0luUGVyaW9kKS5sZW5ndGg7XHJcbiAgICBjb25zdCBuZXdDb3VudCA9IG5ld0N1c3RvbWVycy5zaXplO1xyXG4gICAgY29uc3QgcmV0dXJuaW5nQ291bnQgPSByZXR1cm5pbmdDdXN0b21lcnMuc2l6ZTtcclxuICAgIGNvbnN0IHJldGVudGlvblJhdGUgPSB0b3RhbEN1c3RvbWVycyA+IDAgPyAocmV0dXJuaW5nQ291bnQgLyB0b3RhbEN1c3RvbWVycykgKiAxMDAgOiAwO1xyXG5cclxuICAgIC8vIE1vbnRobHkgYnJlYWtkb3duXHJcbiAgICBjb25zdCBtb250aGx5RGF0YTogeyBba2V5OiBzdHJpbmddOiB7IG5ldzogU2V0PHN0cmluZz47IHJldHVybmluZzogU2V0PHN0cmluZz4gfSB9ID0ge307XHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgY29uc3QgbW9udGhLZXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuXHJcbiAgICAgIGlmICghbW9udGhseURhdGFbbW9udGhLZXldKSB7XHJcbiAgICAgICAgbW9udGhseURhdGFbbW9udGhLZXldID0geyBuZXc6IG5ldyBTZXQoKSwgcmV0dXJuaW5nOiBuZXcgU2V0KCkgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBpZiAoIWVtYWlsKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0gJiYgbmV3IERhdGUoZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0pIDwgbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KSkge1xyXG4gICAgICAgIG1vbnRobHlEYXRhW21vbnRoS2V5XS5yZXR1cm5pbmcuYWRkKGVtYWlsKTtcclxuICAgICAgfSBlbHNlIGlmICghZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0pIHtcclxuICAgICAgICBtb250aGx5RGF0YVttb250aEtleV0ubmV3LmFkZChlbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBlcmlvZEJyZWFrZG93biA9IE9iamVjdC5lbnRyaWVzKG1vbnRobHlEYXRhKVxyXG4gICAgICAuc29ydCgpXHJcbiAgICAgIC5tYXAoKFtwZXJpb2QsIGRhdGFdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBkYXRhLm5ldy5zaXplICsgZGF0YS5yZXR1cm5pbmcuc2l6ZTtcclxuICAgICAgICBjb25zdCByZXRlbnRpb24gPSB0b3RhbCA+IDAgPyAoZGF0YS5yZXR1cm5pbmcuc2l6ZSAvIHRvdGFsKSAqIDEwMCA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgIG5ld0N1c3RvbWVyczogZGF0YS5uZXcuc2l6ZSxcclxuICAgICAgICAgIHJldHVybmluZ0N1c3RvbWVyczogZGF0YS5yZXR1cm5pbmcuc2l6ZSxcclxuICAgICAgICAgIHJldGVudGlvblJhdGU6IE1hdGgucm91bmQocmV0ZW50aW9uICogMTApIC8gMTAsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJldGVudGlvblJhdGU6IE1hdGgucm91bmQocmV0ZW50aW9uUmF0ZSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIG5ld0N1c3RvbWVyczogbmV3Q291bnQsXHJcbiAgICAgICAgcmV0dXJuaW5nQ3VzdG9tZXJzOiByZXR1cm5pbmdDb3VudCxcclxuICAgICAgICB0b3RhbEN1c3RvbWVycyxcclxuICAgICAgICBwZXJpb2RCcmVha2Rvd24sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXN0b21lclJldGVudGlvblJhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgcmV0ZW50aW9uIHJhdGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VzdG9tZXIgc2VnbWVudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJTZWdtZW50YXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIHNlZ21lbnQ6IHN0cmluZztcclxuICAgIGN1c3RvbWVyQ291bnQ6IG51bWJlcjtcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgYXZlcmFnZVJldmVudWU6IG51bWJlcjtcclxuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbHZSZXN1bHQgPSBhd2FpdCBnZXRDdXN0b21lckxpZmV0aW1lVmFsdWUoe1xyXG4gICAgICBkYXRlRnJvbTogZmlsdGVyPy5kYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBmaWx0ZXI/LmRhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY2x2UmVzdWx0LnN1Y2Nlc3MgfHwgIWNsdlJlc3VsdC5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbWVycyA9IGNsdlJlc3VsdC5kYXRhO1xyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gY3VzdG9tZXJzLnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLnRvdGFsUmV2ZW51ZSwgMCk7XHJcbiAgICBjb25zdCBhdmVyYWdlUmV2ZW51ZSA9IGN1c3RvbWVycy5sZW5ndGggPiAwID8gdG90YWxSZXZlbnVlIC8gY3VzdG9tZXJzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgLy8gU2VnbWVudCBjdXN0b21lcnM6IEhpZ2ggVmFsdWUgKD4yeCBhdmcpLCBNZWRpdW0gVmFsdWUgKDAuNXgtMnggYXZnKSwgTG93IFZhbHVlICg8MC41eCBhdmcpXHJcbiAgICBjb25zdCBzZWdtZW50cyA9IHtcclxuICAgICAgJ0hpZ2ggVmFsdWUnOiB7IGN1c3RvbWVyczogMCwgcmV2ZW51ZTogMCB9LFxyXG4gICAgICAnTWVkaXVtIFZhbHVlJzogeyBjdXN0b21lcnM6IDAsIHJldmVudWU6IDAgfSxcclxuICAgICAgJ0xvdyBWYWx1ZSc6IHsgY3VzdG9tZXJzOiAwLCByZXZlbnVlOiAwIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGN1c3RvbWVycy5mb3JFYWNoKChjdXN0b21lcikgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXIudG90YWxSZXZlbnVlID49IGF2ZXJhZ2VSZXZlbnVlICogMikge1xyXG4gICAgICAgIHNlZ21lbnRzWydIaWdoIFZhbHVlJ10uY3VzdG9tZXJzICs9IDE7XHJcbiAgICAgICAgc2VnbWVudHNbJ0hpZ2ggVmFsdWUnXS5yZXZlbnVlICs9IGN1c3RvbWVyLnRvdGFsUmV2ZW51ZTtcclxuICAgICAgfSBlbHNlIGlmIChjdXN0b21lci50b3RhbFJldmVudWUgPj0gYXZlcmFnZVJldmVudWUgKiAwLjUpIHtcclxuICAgICAgICBzZWdtZW50c1snTWVkaXVtIFZhbHVlJ10uY3VzdG9tZXJzICs9IDE7XHJcbiAgICAgICAgc2VnbWVudHNbJ01lZGl1bSBWYWx1ZSddLnJldmVudWUgKz0gY3VzdG9tZXIudG90YWxSZXZlbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlZ21lbnRzWydMb3cgVmFsdWUnXS5jdXN0b21lcnMgKz0gMTtcclxuICAgICAgICBzZWdtZW50c1snTG93IFZhbHVlJ10ucmV2ZW51ZSArPSBjdXN0b21lci50b3RhbFJldmVudWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHNlZ21lbnRzKS5tYXAoKFtzZWdtZW50LCBkYXRhXSkgPT4gKHtcclxuICAgICAgc2VnbWVudCxcclxuICAgICAgY3VzdG9tZXJDb3VudDogZGF0YS5jdXN0b21lcnMsXHJcbiAgICAgIHRvdGFsUmV2ZW51ZTogTWF0aC5yb3VuZChkYXRhLnJldmVudWUgKiAxMDApIC8gMTAwLFxyXG4gICAgICBhdmVyYWdlUmV2ZW51ZTogZGF0YS5jdXN0b21lcnMgPiAwID8gTWF0aC5yb3VuZCgoZGF0YS5yZXZlbnVlIC8gZGF0YS5jdXN0b21lcnMpICogMTAwKSAvIDEwMCA6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IGN1c3RvbWVycy5sZW5ndGggPiAwID8gTWF0aC5yb3VuZCgoZGF0YS5jdXN0b21lcnMgLyBjdXN0b21lcnMubGVuZ3RoKSAqIDEwMCAqIDEwKSAvIDEwIDogMCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJTZWdtZW50YXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgc2VnbWVudGF0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJlcGVhdCBjdXN0b21lciByYXRlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwZWF0Q3VzdG9tZXJSYXRlKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7XHJcbiAgICByZXBlYXRDdXN0b21lclJhdGU6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICByZXBlYXRDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIG9uZVRpbWVDdXN0b21lcnM6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21lckJvb2tpbmdDb3VudHM6IHsgW2VtYWlsOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgY3VzdG9tZXJCb29raW5nQ291bnRzW2VtYWlsXSA9IChjdXN0b21lckJvb2tpbmdDb3VudHNbZW1haWxdIHx8IDApICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG90YWxDdXN0b21lcnMgPSBPYmplY3Qua2V5cyhjdXN0b21lckJvb2tpbmdDb3VudHMpLmxlbmd0aDtcclxuICAgIGNvbnN0IHJlcGVhdEN1c3RvbWVycyA9IE9iamVjdC52YWx1ZXMoY3VzdG9tZXJCb29raW5nQ291bnRzKS5maWx0ZXIoY291bnQgPT4gY291bnQgPiAxKS5sZW5ndGg7XHJcbiAgICBjb25zdCBvbmVUaW1lQ3VzdG9tZXJzID0gdG90YWxDdXN0b21lcnMgLSByZXBlYXRDdXN0b21lcnM7XHJcbiAgICBjb25zdCByZXBlYXRDdXN0b21lclJhdGUgPSB0b3RhbEN1c3RvbWVycyA+IDAgPyAocmVwZWF0Q3VzdG9tZXJzIC8gdG90YWxDdXN0b21lcnMpICogMTAwIDogMDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVwZWF0Q3VzdG9tZXJSYXRlOiBNYXRoLnJvdW5kKHJlcGVhdEN1c3RvbWVyUmF0ZSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzLFxyXG4gICAgICAgIHJlcGVhdEN1c3RvbWVycyxcclxuICAgICAgICBvbmVUaW1lQ3VzdG9tZXJzLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UmVwZWF0Q3VzdG9tZXJSYXRlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJlcGVhdCBjdXN0b21lciByYXRlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGN1c3RvbWVyIGFjcXVpc2l0aW9uIGNvc3QgKHNpbXBsaWZpZWQgLSB3b3VsZCBuZWVkIG1hcmtldGluZyBzcGVuZCBkYXRhKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQWNxdWlzaXRpb25Db3N0KGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7XHJcbiAgICBuZXdDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIGVzdGltYXRlZENBQzogbnVtYmVyO1xyXG4gICAgbm90ZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV0ZW50aW9uUmVzdWx0ID0gYXdhaXQgZ2V0Q3VzdG9tZXJSZXRlbnRpb25SYXRlKHtcclxuICAgICAgZGF0ZUZyb206IGZpbHRlcj8uZGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogZmlsdGVyPy5kYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJldGVudGlvblJlc3VsdC5zdWNjZXNzIHx8ICFyZXRlbnRpb25SZXN1bHQuZGF0YSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdDdXN0b21lcnMgPSByZXRlbnRpb25SZXN1bHQuZGF0YS5uZXdDdXN0b21lcnM7XHJcblxyXG4gICAgLy8gTm90ZTogVGhpcyBpcyBhIHBsYWNlaG9sZGVyLiBSZWFsIENBQyB3b3VsZCByZXF1aXJlIG1hcmtldGluZyBzcGVuZCBkYXRhXHJcbiAgICAvLyBGb3Igbm93LCB3ZSdsbCByZXR1cm4gYSBub3RlIGV4cGxhaW5pbmcgdGhpc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5ld0N1c3RvbWVycyxcclxuICAgICAgICBlc3RpbWF0ZWRDQUM6IDAsXHJcbiAgICAgICAgbm90ZTogJ0NBQyBjYWxjdWxhdGlvbiByZXF1aXJlcyBtYXJrZXRpbmcgc3BlbmQgZGF0YS4gUGxlYXNlIGludGVncmF0ZSBtYXJrZXRpbmcgY29zdCB0cmFja2luZyB0byBjYWxjdWxhdGUgYWNjdXJhdGUgQ0FDLicsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXN0b21lckFjcXVpc2l0aW9uQ29zdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciBhY3F1aXNpdGlvbiBjb3N0JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDT01QQVJBVElWRSBBTkFMWVRJQ1MgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlIGN1cnJlbnQgcGVyaW9kIHdpdGggcHJldmlvdXMgcGVyaW9kXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyaW9kQ29tcGFyaXNvbihmaWx0ZXI/OiB7XHJcbiAgcGVyaW9kPzogJ2RhaWx5JyB8ICd3ZWVrbHknIHwgJ21vbnRobHknIHwgJ3llYXJseSc7XHJcbiAgY3VycmVudERhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGN1cnJlbnREYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7XHJcbiAgICBtZXRyaWM6IHN0cmluZztcclxuICAgIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIHByZXZpb3VzOiBudW1iZXI7XHJcbiAgICBjaGFuZ2U6IG51bWJlcjtcclxuICAgIGNoYW5nZVBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBwZXJpb2QgPSBmaWx0ZXI/LnBlcmlvZCB8fCAnbW9udGhseSc7XHJcblxyXG4gICAgbGV0IGN1cnJlbnREYXRlRnJvbTogc3RyaW5nO1xyXG4gICAgbGV0IGN1cnJlbnREYXRlVG86IHN0cmluZztcclxuICAgIGxldCBwcmV2aW91c0RhdGVGcm9tOiBzdHJpbmc7XHJcbiAgICBsZXQgcHJldmlvdXNEYXRlVG86IHN0cmluZztcclxuXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKHBlcmlvZCA9PT0gJ2RhaWx5Jykge1xyXG4gICAgICBjdXJyZW50RGF0ZVRvID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY3VycmVudERhdGVGcm9tID0gY3VycmVudERhdGVUbztcclxuICAgICAgY29uc3QgcHJldkRhdGUgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgICBwcmV2RGF0ZS5zZXREYXRlKHByZXZEYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gICAgICBwcmV2aW91c0RhdGVUbyA9IHByZXZEYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgcHJldmlvdXNEYXRlRnJvbSA9IHByZXZpb3VzRGF0ZVRvO1xyXG4gICAgfSBlbHNlIGlmIChwZXJpb2QgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKG5vdyk7XHJcbiAgICAgIHdlZWtTdGFydC5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSBub3cuZ2V0RGF5KCkpO1xyXG4gICAgICBjdXJyZW50RGF0ZVRvID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY3VycmVudERhdGVGcm9tID0gd2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY29uc3QgcHJldldlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XHJcbiAgICAgIHByZXZXZWVrU3RhcnQuc2V0RGF0ZShwcmV2V2Vla1N0YXJ0LmdldERhdGUoKSAtIDcpO1xyXG4gICAgICBjb25zdCBwcmV2V2Vla0VuZCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XHJcbiAgICAgIHByZXZXZWVrRW5kLnNldERhdGUocHJldldlZWtFbmQuZ2V0RGF0ZSgpIC0gMSk7XHJcbiAgICAgIHByZXZpb3VzRGF0ZVRvID0gcHJldldlZWtFbmQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBwcmV2aW91c0RhdGVGcm9tID0gcHJldldlZWtTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gJ21vbnRobHknKSB7XHJcbiAgICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDEpO1xyXG4gICAgICBjdXJyZW50RGF0ZVRvID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY3VycmVudERhdGVGcm9tID0gbW9udGhTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGNvbnN0IHByZXZNb250aFN0YXJ0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpIC0gMSwgMSk7XHJcbiAgICAgIGNvbnN0IHByZXZNb250aEVuZCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMCk7XHJcbiAgICAgIHByZXZpb3VzRGF0ZVRvID0gcHJldk1vbnRoRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgcHJldmlvdXNEYXRlRnJvbSA9IHByZXZNb250aFN0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgY3VycmVudERhdGVUbyA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGN1cnJlbnREYXRlRnJvbSA9IHllYXJTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGNvbnN0IHByZXZZZWFyU3RhcnQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSAtIDEsIDAsIDEpO1xyXG4gICAgICBjb25zdCBwcmV2WWVhckVuZCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpIC0gMSwgMTEsIDMxKTtcclxuICAgICAgcHJldmlvdXNEYXRlVG8gPSBwcmV2WWVhckVuZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIHByZXZpb3VzRGF0ZUZyb20gPSBwcmV2WWVhclN0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVycmlkZSB3aXRoIHByb3ZpZGVkIGRhdGVzIGlmIGF2YWlsYWJsZVxyXG4gICAgaWYgKGZpbHRlcj8uY3VycmVudERhdGVGcm9tKSBjdXJyZW50RGF0ZUZyb20gPSBmaWx0ZXIuY3VycmVudERhdGVGcm9tO1xyXG4gICAgaWYgKGZpbHRlcj8uY3VycmVudERhdGVUbykgY3VycmVudERhdGVUbyA9IGZpbHRlci5jdXJyZW50RGF0ZVRvO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHBlcmlvZCBzdGF0c1xyXG4gICAgY29uc3QgY3VycmVudFN0YXRzUmVzdWx0ID0gYXdhaXQgZ2V0QWRtaW5TdGF0cyh7XHJcbiAgICAgIGRhdGVGcm9tOiBjdXJyZW50RGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogY3VycmVudERhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBwcmV2aW91cyBwZXJpb2Qgc3RhdHNcclxuICAgIGNvbnN0IHByZXZpb3VzU3RhdHNSZXN1bHQgPSBhd2FpdCBnZXRBZG1pblN0YXRzKHtcclxuICAgICAgZGF0ZUZyb206IHByZXZpb3VzRGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogcHJldmlvdXNEYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRTdGF0c1Jlc3VsdC5zdWNjZXNzIHx8ICFwcmV2aW91c1N0YXRzUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGNvbXBhcmlzb24gZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50ID0gY3VycmVudFN0YXRzUmVzdWx0LnN0YXRzIHx8IHt9O1xyXG4gICAgY29uc3QgcHJldmlvdXMgPSBwcmV2aW91c1N0YXRzUmVzdWx0LnN0YXRzIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IG1ldHJpY3MgPSBbXHJcbiAgICAgIHsga2V5OiAndG90YWxSZXZlbnVlJywgbGFiZWw6ICdUb3RhbCBSZXZlbnVlJyB9LFxyXG4gICAgICB7IGtleTogJ3RvdGFsQm9va2luZ3MnLCBsYWJlbDogJ1RvdGFsIEJvb2tpbmdzJyB9LFxyXG4gICAgICB7IGtleTogJ3RvdGFsQ3VzdG9tZXJzJywgbGFiZWw6ICdUb3RhbCBDdXN0b21lcnMnIH0sXHJcbiAgICAgIHsga2V5OiAnYWN0aXZlQm9va2luZ3MnLCBsYWJlbDogJ0FjdGl2ZSBCb29raW5ncycgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbWV0cmljcy5tYXAoKHsga2V5LCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XSB8fCAwO1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNba2V5XSB8fCAwO1xyXG4gICAgICBjb25zdCBjaGFuZ2UgPSBjdXJyZW50VmFsdWUgLSBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjaGFuZ2VQZXJjZW50YWdlID0gcHJldmlvdXNWYWx1ZSA+IDAgPyAoY2hhbmdlIC8gcHJldmlvdXNWYWx1ZSkgKiAxMDAgOiAoY3VycmVudFZhbHVlID4gMCA/IDEwMCA6IDApO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXRyaWM6IGxhYmVsLFxyXG4gICAgICAgIGN1cnJlbnQ6IE1hdGgucm91bmQoY3VycmVudFZhbHVlICogMTAwKSAvIDEwMCxcclxuICAgICAgICBwcmV2aW91czogTWF0aC5yb3VuZChwcmV2aW91c1ZhbHVlICogMTAwKSAvIDEwMCxcclxuICAgICAgICBjaGFuZ2U6IE1hdGgucm91bmQoY2hhbmdlICogMTAwKSAvIDEwMCxcclxuICAgICAgICBjaGFuZ2VQZXJjZW50YWdlOiBNYXRoLnJvdW5kKGNoYW5nZVBlcmNlbnRhZ2UgKiAxMCkgLyAxMCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRQZXJpb2RDb21wYXJpc29uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHBlcmlvZCBjb21wYXJpc29uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHllYXItb3Zlci15ZWFyIGdyb3d0aFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFllYXJPdmVyWWVhckdyb3d0aChmaWx0ZXI/OiB7XHJcbiAgeWVhcj86IG51bWJlcjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIG1vbnRoOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50WWVhcjogbnVtYmVyO1xyXG4gICAgcHJldmlvdXNZZWFyOiBudW1iZXI7XHJcbiAgICBncm93dGg6IG51bWJlcjtcclxuICAgIGdyb3d0aFBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGZpbHRlcj8ueWVhciB8fCBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IGN1cnJlbnRZZWFyIC0gMTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCB5ZWFyIG1vbnRobHkgZGF0YVxyXG4gICAgY29uc3QgY3VycmVudFllYXJEYXRhID0gYXdhaXQgZ2V0UmV2ZW51ZVRyZW5kcyh7XHJcbiAgICAgIGRhdGVGcm9tOiBgJHtjdXJyZW50WWVhcn0tMDEtMDFgLFxyXG4gICAgICBkYXRlVG86IGAke2N1cnJlbnRZZWFyfS0xMi0zMWAsXHJcbiAgICAgIHBlcmlvZDogJ21vbnRobHknLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHByZXZpb3VzIHllYXIgbW9udGhseSBkYXRhXHJcbiAgICBjb25zdCBwcmV2aW91c1llYXJEYXRhID0gYXdhaXQgZ2V0UmV2ZW51ZVRyZW5kcyh7XHJcbiAgICAgIGRhdGVGcm9tOiBgJHtwcmV2aW91c1llYXJ9LTAxLTAxYCxcclxuICAgICAgZGF0ZVRvOiBgJHtwcmV2aW91c1llYXJ9LTEyLTMxYCxcclxuICAgICAgcGVyaW9kOiAnbW9udGhseScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRZZWFyRGF0YS5zdWNjZXNzIHx8ICFwcmV2aW91c1llYXJEYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHllYXItb3Zlci15ZWFyIGRhdGEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRZZWFyRGF0YS5kYXRhIHx8IFtdO1xyXG4gICAgY29uc3QgcHJldmlvdXMgPSBwcmV2aW91c1llYXJEYXRhLmRhdGEgfHwgW107XHJcblxyXG4gICAgY29uc3QgbW9udGhzID0gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddO1xyXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBtb250aHMubWFwKChtb250aCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFBlcmlvZCA9IGAke2N1cnJlbnRZZWFyfS0ke21vbnRofWA7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUGVyaW9kID0gYCR7cHJldmlvdXNZZWFyfS0ke21vbnRofWA7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGN1cnJlbnQuZmluZChkID0+IGQucGVyaW9kID09PSBjdXJyZW50UGVyaW9kKTtcclxuICAgICAgY29uc3QgcHJldmlvdXNEYXRhID0gcHJldmlvdXMuZmluZChkID0+IGQucGVyaW9kID09PSBwcmV2aW91c1BlcmlvZCk7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50UmV2ZW51ZSA9IGN1cnJlbnREYXRhPy5yZXZlbnVlIHx8IDA7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUmV2ZW51ZSA9IHByZXZpb3VzRGF0YT8ucmV2ZW51ZSB8fCAwO1xyXG4gICAgICBjb25zdCBncm93dGggPSBjdXJyZW50UmV2ZW51ZSAtIHByZXZpb3VzUmV2ZW51ZTtcclxuICAgICAgY29uc3QgZ3Jvd3RoUGVyY2VudGFnZSA9IHByZXZpb3VzUmV2ZW51ZSA+IDAgPyAoZ3Jvd3RoIC8gcHJldmlvdXNSZXZlbnVlKSAqIDEwMCA6IChjdXJyZW50UmV2ZW51ZSA+IDAgPyAxMDAgOiAwKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9udGg6IG1vbnRoTmFtZXNbaW5kZXhdLFxyXG4gICAgICAgIGN1cnJlbnRZZWFyOiBNYXRoLnJvdW5kKGN1cnJlbnRSZXZlbnVlKSxcclxuICAgICAgICBwcmV2aW91c1llYXI6IE1hdGgucm91bmQocHJldmlvdXNSZXZlbnVlKSxcclxuICAgICAgICBncm93dGg6IE1hdGgucm91bmQoZ3Jvd3RoKSxcclxuICAgICAgICBncm93dGhQZXJjZW50YWdlOiBNYXRoLnJvdW5kKGdyb3d0aFBlcmNlbnRhZ2UgKiAxMCkgLyAxMCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRZZWFyT3ZlclllYXJHcm93dGg6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggeWVhci1vdmVyLXllYXIgZ3Jvd3RoJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHNlcnZpY2UgdHlwZSBwZXJmb3JtYW5jZSBjb21wYXJpc29uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVR5cGVDb21wYXJpc29uKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBzZXJ2aWNlVHlwZTogc3RyaW5nO1xyXG4gICAgcmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgYm9va2luZ3M6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VSZXZlbnVlOiBudW1iZXI7XHJcbiAgICBncm93dGg6IG51bWJlcjtcclxuICAgIGdyb3d0aFBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHByZXZpb3VzIHBlcmlvZFxyXG4gICAgY29uc3QgY3VycmVudFN0YXJ0ID0gbmV3IERhdGUoZGF0ZUZyb20pO1xyXG4gICAgY29uc3QgY3VycmVudEVuZCA9IG5ldyBEYXRlKGRhdGVUbyk7XHJcbiAgICBjb25zdCBwZXJpb2REYXlzID0gTWF0aC5jZWlsKChjdXJyZW50RW5kLmdldFRpbWUoKSAtIGN1cnJlbnRTdGFydC5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgIGNvbnN0IHByZXZpb3VzU3RhcnQgPSBuZXcgRGF0ZShjdXJyZW50U3RhcnQpO1xyXG4gICAgcHJldmlvdXNTdGFydC5zZXREYXRlKHByZXZpb3VzU3RhcnQuZ2V0RGF0ZSgpIC0gcGVyaW9kRGF5cyAtIDEpO1xyXG4gICAgY29uc3QgcHJldmlvdXNFbmQgPSBuZXcgRGF0ZShjdXJyZW50U3RhcnQpO1xyXG4gICAgcHJldmlvdXNFbmQuc2V0RGF0ZShwcmV2aW91c0VuZC5nZXREYXRlKCkgLSAxKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCBwZXJpb2Qgc2VydmljZSByZXZlbnVlXHJcbiAgICBjb25zdCBjdXJyZW50UmVzdWx0ID0gYXdhaXQgZ2V0UmV2ZW51ZUJ5U2VydmljZVR5cGUoe1xyXG4gICAgICBkYXRlRnJvbTogZGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogZGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHByZXZpb3VzIHBlcmlvZCBzZXJ2aWNlIHJldmVudWVcclxuICAgIGNvbnN0IHByZXZpb3VzUmVzdWx0ID0gYXdhaXQgZ2V0UmV2ZW51ZUJ5U2VydmljZVR5cGUoe1xyXG4gICAgICBkYXRlRnJvbTogcHJldmlvdXNTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXHJcbiAgICAgIGRhdGVUbzogcHJldmlvdXNFbmQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50UmVzdWx0LnN1Y2Nlc3MgfHwgIXByZXZpb3VzUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgdHlwZSBjb21wYXJpc29uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50UmVzdWx0LmRhdGEgfHwgW107XHJcbiAgICBjb25zdCBwcmV2aW91cyA9IHByZXZpb3VzUmVzdWx0LmRhdGEgfHwgW107XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY3VycmVudC5tYXAoKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzSXRlbSA9IHByZXZpb3VzLmZpbmQocCA9PiBwLnNlcnZpY2VUeXBlID09PSBjdXJyZW50SXRlbS5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUmV2ZW51ZSA9IHByZXZpb3VzSXRlbT8ucmV2ZW51ZSB8fCAwO1xyXG4gICAgICBjb25zdCBncm93dGggPSBjdXJyZW50SXRlbS5yZXZlbnVlIC0gcHJldmlvdXNSZXZlbnVlO1xyXG4gICAgICBjb25zdCBncm93dGhQZXJjZW50YWdlID0gcHJldmlvdXNSZXZlbnVlID4gMCA/IChncm93dGggLyBwcmV2aW91c1JldmVudWUpICogMTAwIDogKGN1cnJlbnRJdGVtLnJldmVudWUgPiAwID8gMTAwIDogMCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlcnZpY2VUeXBlOiBjdXJyZW50SXRlbS5zZXJ2aWNlVHlwZSxcclxuICAgICAgICByZXZlbnVlOiBjdXJyZW50SXRlbS5yZXZlbnVlLFxyXG4gICAgICAgIGJvb2tpbmdzOiBjdXJyZW50SXRlbS5ib29raW5ncyxcclxuICAgICAgICBhdmVyYWdlUmV2ZW51ZTogY3VycmVudEl0ZW0uYm9va2luZ3MgPiAwID8gTWF0aC5yb3VuZCgoY3VycmVudEl0ZW0ucmV2ZW51ZSAvIGN1cnJlbnRJdGVtLmJvb2tpbmdzKSAqIDEwMCkgLyAxMDAgOiAwLFxyXG4gICAgICAgIGdyb3d0aDogTWF0aC5yb3VuZChncm93dGgpLFxyXG4gICAgICAgIGdyb3d0aFBlcmNlbnRhZ2U6IE1hdGgucm91bmQoZ3Jvd3RoUGVyY2VudGFnZSAqIDEwKSAvIDEwLFxyXG4gICAgICB9O1xyXG4gICAgfSkuc29ydCgoYSwgYikgPT4gYi5yZXZlbnVlIC0gYS5yZXZlbnVlKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVR5cGVDb21wYXJpc29uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgdHlwZSBjb21wYXJpc29uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjdXN0b21lcnMgd2l0aCB0aGVpciBjcmVkaXQgYmFsYW5jZXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDdXN0b21lcnNXaXRoQ3JlZGl0cygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGN1c3RvbWVycz86IChQcm9maWxlICYgeyBjcmVkaXRfYmFsYW5jZTogbnVtYmVyIH0pW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKiwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVycyB3aXRoIGNyZWRpdHM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21lcnMgPSAoZGF0YSB8fCBbXSkubWFwKChjdXN0b21lcikgPT4gKHtcclxuICAgICAgLi4uY3VzdG9tZXIsXHJcbiAgICAgIGNyZWRpdF9iYWxhbmNlOiBjdXN0b21lci5jcmVkaXRfYmFsYW5jZSB8fCAwLFxyXG4gICAgfSkpIGFzIChQcm9maWxlICYgeyBjcmVkaXRfYmFsYW5jZTogbnVtYmVyIH0pW107XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEN1c3RvbWVyc1dpdGhDcmVkaXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVycyB3aXRoIGNyZWRpdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3JlZGl0IHRyYW5zYWN0aW9ucyBmb3IgYSBjdXN0b21lclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQ3JlZGl0VHJhbnNhY3Rpb25zKFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBsaW1pdDogbnVtYmVyID0gNTAsXHJcbiAgb2Zmc2V0OiBudW1iZXIgPSAwXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgdHJhbnNhY3Rpb25zPzogYW55W107XHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1c3RvbWVyIGVtYWlsIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVyLCBlcnJvcjogY3VzdG9tZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnZW1haWwnKVxyXG4gICAgICAuZXEoJ2lkJywgY3VzdG9tZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChjdXN0b21lckVycm9yIHx8ICFjdXN0b21lcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDdXN0b21lciBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRyYW5zYWN0aW9uc1xyXG4gICAgY29uc3QgeyBkYXRhOiB0cmFuc2FjdGlvbnMsIGVycm9yOiB0cmFuc2FjdGlvbnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NyZWRpdF90cmFuc2FjdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdwcm9maWxlX2lkJywgY3VzdG9tZXJJZClcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5yYW5nZShvZmZzZXQsIG9mZnNldCArIGxpbWl0IC0gMSk7XHJcblxyXG4gICAgaWYgKHRyYW5zYWN0aW9uc0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNyZWRpdCB0cmFuc2FjdGlvbnM6JywgdHJhbnNhY3Rpb25zRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHRyYW5zYWN0aW9uc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdG90YWwgY291bnRcclxuICAgIGNvbnN0IHsgY291bnQsIGVycm9yOiBjb3VudEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY3JlZGl0X3RyYW5zYWN0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJyonLCB7IGNvdW50OiAnZXhhY3QnLCBoZWFkOiB0cnVlIH0pXHJcbiAgICAgIC5lcSgncHJvZmlsZV9pZCcsIGN1c3RvbWVySWQpO1xyXG5cclxuICAgIGlmIChjb3VudEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvdW50aW5nIHRyYW5zYWN0aW9uczonLCBjb3VudEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2FjdGlvbnM6IHRyYW5zYWN0aW9ucyB8fCBbXSxcclxuICAgICAgdG90YWw6IGNvdW50IHx8IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXN0b21lckNyZWRpdFRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjcmVkaXQgdHJhbnNhY3Rpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWxsb2NhdGUgY3JlZGl0cyB0byBhIGN1c3RvbWVyIChhZGQgY3JlZGl0cylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbGxvY2F0ZUNyZWRpdHNUb0N1c3RvbWVyKFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBhbW91bnQ6IG51bWJlcixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgbmV3QmFsYW5jZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbW91bnQgPD0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBbW91bnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1c3RvbWVyIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVyLCBlcnJvcjogY3VzdG9tZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnZW1haWwsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJFcnJvciB8fCAhY3VzdG9tZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ3VzdG9tZXIgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgYWRkX2NyZWRpdHMgUlBDIGZ1bmN0aW9uXHJcbiAgICBjb25zdCB7IGRhdGE6IHRyYW5zYWN0aW9uSWQsIGVycm9yOiBycGNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UucnBjKCdhZGRfY3JlZGl0cycsIHtcclxuICAgICAgcF9lbWFpbDogY3VzdG9tZXIuZW1haWwsXHJcbiAgICAgIHBfYW1vdW50OiBhbW91bnQsXHJcbiAgICAgIHBfdHJhbnNhY3Rpb25fdHlwZTogJ2FkbWluX2FsbG9jYXRpb24nLFxyXG4gICAgICBwX2Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBgQWRtaW4gY3JlZGl0IGFsbG9jYXRpb246IFIke2Ftb3VudC50b0ZpeGVkKDIpfWAsXHJcbiAgICAgIHBfbWV0YWRhdGE6IHtcclxuICAgICAgICBhZG1pbl9pZDogYWRtaW5SZXN1bHQuYWRtaW4/LmlkLFxyXG4gICAgICAgIGFkbWluX2VtYWlsOiBhZG1pblJlc3VsdC5hZG1pbj8uZW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfaWQ6IGN1c3RvbWVySWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocnBjRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWxsb2NhdGluZyBjcmVkaXRzOicsIHJwY0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBycGNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHVwZGF0ZWQgYmFsYW5jZVxyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQ3VzdG9tZXIsIGVycm9yOiBiYWxhbmNlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYmFsYW5jZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVwZGF0ZWQgYmFsYW5jZTonLCBiYWxhbmNlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zYWN0aW9uSWQ/LnRvU3RyaW5nKCksXHJcbiAgICAgIG5ld0JhbGFuY2U6IHVwZGF0ZWRDdXN0b21lcj8uY3JlZGl0X2JhbGFuY2UgfHwgY3VzdG9tZXIuY3JlZGl0X2JhbGFuY2UgKyBhbW91bnQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhbGxvY2F0ZUNyZWRpdHNUb0N1c3RvbWVyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFsbG9jYXRlIGNyZWRpdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgY3VzdG9tZXIgY3JlZGl0cyB0byBhbiBhYnNvbHV0ZSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldEN1c3RvbWVyQ3JlZGl0cyhcclxuICBjdXN0b21lcklkOiBzdHJpbmcsXHJcbiAgdGFyZ2V0QmFsYW5jZTogbnVtYmVyLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgdHJhbnNhY3Rpb25JZD86IHN0cmluZztcclxuICBuZXdCYWxhbmNlPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldEJhbGFuY2UgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0JhbGFuY2UgY2Fubm90IGJlIG5lZ2F0aXZlJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCBiYWxhbmNlXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVyLCBlcnJvcjogY3VzdG9tZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnZW1haWwsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJFcnJvciB8fCAhY3VzdG9tZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ3VzdG9tZXIgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCYWxhbmNlID0gY3VzdG9tZXIuY3JlZGl0X2JhbGFuY2UgfHwgMDtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0YXJnZXRCYWxhbmNlIC0gY3VycmVudEJhbGFuY2U7XHJcblxyXG4gICAgLy8gSWYgYmFsYW5jZSBpcyBhbHJlYWR5IGF0IHRhcmdldCwgcmV0dXJuIHN1Y2Nlc3NcclxuICAgIGlmIChNYXRoLmFicyhkaWZmZXJlbmNlKSA8IDAuMDEpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIG5ld0JhbGFuY2U6IHRhcmdldEJhbGFuY2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIHRoZSBhZGRfY3JlZGl0cyBSUEMgZnVuY3Rpb24gd2l0aCB0aGUgZGlmZmVyZW5jZVxyXG4gICAgY29uc3QgeyBkYXRhOiB0cmFuc2FjdGlvbklkLCBlcnJvcjogcnBjRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnYWRkX2NyZWRpdHMnLCB7XHJcbiAgICAgIHBfZW1haWw6IGN1c3RvbWVyLmVtYWlsLFxyXG4gICAgICBwX2Ftb3VudDogZGlmZmVyZW5jZSxcclxuICAgICAgcF90cmFuc2FjdGlvbl90eXBlOiAnYWRtaW5fYWRqdXN0bWVudCcsXHJcbiAgICAgIHBfZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8IGBBZG1pbiBjcmVkaXQgYWRqdXN0bWVudDogU2V0IHRvIFIke3RhcmdldEJhbGFuY2UudG9GaXhlZCgyKX1gLFxyXG4gICAgICBwX21ldGFkYXRhOiB7XHJcbiAgICAgICAgYWRtaW5faWQ6IGFkbWluUmVzdWx0LmFkbWluPy5pZCxcclxuICAgICAgICBhZG1pbl9lbWFpbDogYWRtaW5SZXN1bHQuYWRtaW4/LmVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcklkLFxyXG4gICAgICAgIGFkanVzdG1lbnRfdHlwZTogJ2Fic29sdXRlJyxcclxuICAgICAgICB0YXJnZXRfYmFsYW5jZTogdGFyZ2V0QmFsYW5jZSxcclxuICAgICAgICBwcmV2aW91c19iYWxhbmNlOiBjdXJyZW50QmFsYW5jZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChycGNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIGNyZWRpdHM6JywgcnBjRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJwY0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2FjdGlvbklkOiB0cmFuc2FjdGlvbklkPy50b1N0cmluZygpLFxyXG4gICAgICBuZXdCYWxhbmNlOiB0YXJnZXRCYWxhbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2V0Q3VzdG9tZXJDcmVkaXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNldCBjcmVkaXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWRqdXN0IGN1c3RvbWVyIGNyZWRpdHMgKGFkZCBvciBzdWJ0cmFjdClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGp1c3RDdXN0b21lckNyZWRpdHMoXHJcbiAgY3VzdG9tZXJJZDogc3RyaW5nLFxyXG4gIGFkanVzdG1lbnRBbW91bnQ6IG51bWJlcixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgbmV3QmFsYW5jZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhZGp1c3RtZW50QW1vdW50ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0FkanVzdG1lbnQgYW1vdW50IGNhbm5vdCBiZSB6ZXJvJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgY3VzdG9tZXIgZW1haWwgYW5kIGN1cnJlbnQgYmFsYW5jZVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3I6IGN1c3RvbWVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2VtYWlsLCBjcmVkaXRfYmFsYW5jZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbWVyRXJyb3IgfHwgIWN1c3RvbWVyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbWVyIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50QmFsYW5jZSA9IGN1c3RvbWVyLmNyZWRpdF9iYWxhbmNlIHx8IDA7XHJcbiAgICBjb25zdCBuZXdCYWxhbmNlID0gY3VycmVudEJhbGFuY2UgKyBhZGp1c3RtZW50QW1vdW50O1xyXG5cclxuICAgIGlmIChuZXdCYWxhbmNlIDwgMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBgSW5zdWZmaWNpZW50IGNyZWRpdHMuIEN1cnJlbnQgYmFsYW5jZTogUiR7Y3VycmVudEJhbGFuY2UudG9GaXhlZCgyKX0sIGFkanVzdG1lbnQ6IFIke2FkanVzdG1lbnRBbW91bnQudG9GaXhlZCgyKX1gLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgYWRkX2NyZWRpdHMgUlBDIGZ1bmN0aW9uXHJcbiAgICBjb25zdCB7IGRhdGE6IHRyYW5zYWN0aW9uSWQsIGVycm9yOiBycGNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UucnBjKCdhZGRfY3JlZGl0cycsIHtcclxuICAgICAgcF9lbWFpbDogY3VzdG9tZXIuZW1haWwsXHJcbiAgICAgIHBfYW1vdW50OiBhZGp1c3RtZW50QW1vdW50LFxyXG4gICAgICBwX3RyYW5zYWN0aW9uX3R5cGU6ICdhZG1pbl9hZGp1c3RtZW50JyxcclxuICAgICAgcF9kZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfHwgYEFkbWluIGNyZWRpdCBhZGp1c3RtZW50OiAke2FkanVzdG1lbnRBbW91bnQgPj0gMCA/ICcrJyA6ICcnfVIke2FkanVzdG1lbnRBbW91bnQudG9GaXhlZCgyKX1gLFxyXG4gICAgICBwX21ldGFkYXRhOiB7XHJcbiAgICAgICAgYWRtaW5faWQ6IGFkbWluUmVzdWx0LmFkbWluPy5pZCxcclxuICAgICAgICBhZG1pbl9lbWFpbDogYWRtaW5SZXN1bHQuYWRtaW4/LmVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcklkLFxyXG4gICAgICAgIGFkanVzdG1lbnRfdHlwZTogJ3JlbGF0aXZlJyxcclxuICAgICAgICBhZGp1c3RtZW50X2Ftb3VudDogYWRqdXN0bWVudEFtb3VudCxcclxuICAgICAgICBwcmV2aW91c19iYWxhbmNlOiBjdXJyZW50QmFsYW5jZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChycGNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGp1c3RpbmcgY3JlZGl0czonLCBycGNFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcnBjRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB1cGRhdGVkIGJhbGFuY2UgdG8gY29uZmlybVxyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQ3VzdG9tZXIsIGVycm9yOiBiYWxhbmNlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYmFsYW5jZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVwZGF0ZWQgYmFsYW5jZTonLCBiYWxhbmNlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zYWN0aW9uSWQ/LnRvU3RyaW5nKCksXHJcbiAgICAgIG5ld0JhbGFuY2U6IHVwZGF0ZWRDdXN0b21lcj8uY3JlZGl0X2JhbGFuY2UgfHwgbmV3QmFsYW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFkanVzdEN1c3RvbWVyQ3JlZGl0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBhZGp1c3QgY3JlZGl0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQXdDc0IsNExBQUEifQ==
}),
"[project]/app/admin/components/AdminSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$026209__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:026209 [app-ssr] (ecmascript) <text/javascript>");
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
const menuItems = [
    {
        title: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"],
        href: '/admin'
    },
    {
        title: 'Manage Clients',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/users'
    },
    {
        title: 'Manage Providers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        href: '/admin/create-cleaner'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        href: '/admin/bookings'
    },
    {
        title: 'Services',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        href: '/admin/settings'
    },
    {
        title: 'Reports',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        href: '/admin/reports'
    },
    {
        title: 'Discount Codes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/admin/discount-codes'
    },
    {
        title: 'Manage Transactions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        href: '/admin/payments'
    },
    {
        title: 'ShaleanCred Management',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        href: '/admin/shaleancred'
    }
];
function AdminSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAdminProfile = async ()=>{
            try {
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$026209__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
                if (adminResult.success && adminResult.admin) {
                    setAdmin(adminResult.admin);
                }
            } catch (error) {
                console.error('Error loading admin profile:', error);
            }
        };
        loadAdminProfile();
    }, []);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        className: "!top-16 !h-[calc(100vh-4rem)] bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarContent"], {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                            className: "space-y-1",
                            children: menuItems.map((item, index)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                        asChild: true,
                                        isActive: isActive,
                                        tooltip: item.title,
                                        size: "lg",
                                        className: `
                        [&>svg]:!size-5
                        rounded-lg
                        transition-colors
                        ${isActive ? 'bg-[#f59e0b]/10 text-[#f59e0b] [&>svg]:text-[#f59e0b]' : 'text-gray-700 [&>svg]:text-gray-500 hover:bg-gray-50'}
                      `,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "!w-5 !h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                            lineNumber: 162,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 21
                                    }, this)
                                }, `${item.href}-${index}`, false, {
                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                className: "border-t border-sidebar-border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "lg",
                    className: "w-full justify-start",
                    onClick: handleLogout,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "!w-6 !h-6 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 105,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
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
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}),
"[project]/app/notifications/data:6e5291 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotifications",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1":"getNotifications"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNotifications");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FtR3NCLDZMQUFBIn0=
}),
"[project]/app/notifications/data:62e83a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUnreadCount",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40413e7f909489684c9bcc1668a76d1b32f129be8d":"getUnreadCount"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40413e7f909489684c9bcc1668a76d1b32f129be8d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUnreadCount");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFpS3NCLDJMQUFBIn0=
}),
"[project]/app/notifications/data:7c9f33 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markAsRead",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"601f2dae89943fdd7ad4e92320842554fcff41980d":"markAsRead"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("601f2dae89943fdd7ad4e92320842554fcff41980d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAsRead");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkE0TnNCLHVMQUFBIn0=
}),
"[project]/app/notifications/data:4e4fad [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markAllAsRead",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401b62d8bda24466c2f55521a8a9fced9394cbf750":"markAllAsRead"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401b62d8bda24466c2f55521a8a9fced9394cbf750", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAllAsRead");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkF3UnNCLDBMQUFBIn0=
}),
"[project]/src/components/NotificationBell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationBell",
    ()=>NotificationBell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-ssr] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$6e5291__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:6e5291 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$62e83a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:62e83a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$7c9f33__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:7c9f33 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$4e4fad__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:4e4fad [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.mjs [app-ssr] (ecmascript)");
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
const getNotificationIcon = (type)=>{
    // Return appropriate icon based on notification type
    return '🔔';
};
const getNotificationRoute = (notification, userType)=>{
    const { type, data } = notification;
    if (type.includes('booking') && data.booking_id) {
        if (userType === 'admin') {
            return `/admin/bookings/${data.booking_id}`;
        } else if (userType === 'customer') {
            return `/dashboard/bookings/${data.booking_id}`;
        } else if (userType === 'cleaner') {
            return `/cleaner/bookings/${data.booking_id}`;
        }
    }
    if (type === 'payment_received') {
        if (userType === 'admin') {
            return '/admin/payments';
        } else if (data.booking_id) {
            return `/dashboard/bookings/${data.booking_id}`;
        }
    }
    if (type === 'new_user_registered' && userType === 'admin' && data.user_id) {
        return `/admin/users/${data.user_id}`;
    }
    return null;
};
function NotificationBell({ userType }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch notifications
    const { data: notifications, isLoading, error: notificationsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'notifications',
            userType
        ],
        queryFn: async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$6e5291__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotifications"])(userType);
            if (!result.success) {
                console.error('Error fetching notifications:', result.error);
                return [];
            }
            return result.notifications || [];
        },
        refetchInterval: 30000,
        staleTime: 10000,
        retry: 1
    });
    // Fetch unread count
    const { data: unreadCount, error: unreadCountError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'notifications-unread',
            userType
        ],
        queryFn: async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$62e83a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUnreadCount"])(userType);
            if (!result.success) {
                console.error('Error fetching unread count:', result.error);
                return 0;
            }
            return result.count || 0;
        },
        refetchInterval: 30000,
        staleTime: 10000,
        retry: 1
    });
    // Set mounted state on client side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Set up real-time subscription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const channel = supabase.channel('notifications').on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'notifications',
            filter: `user_type=eq.${userType}`
        }, (payload)=>{
            // Invalidate queries to refetch
            queryClient.invalidateQueries({
                queryKey: [
                    'notifications',
                    userType
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'notifications-unread',
                    userType
                ]
            });
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, [
        userType,
        queryClient,
        mounted
    ]);
    const handleNotificationClick = async (notification)=>{
        // Mark as read
        if (!notification.read) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$7c9f33__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAsRead"])(notification.id, userType);
            queryClient.invalidateQueries({
                queryKey: [
                    'notifications',
                    userType
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'notifications-unread',
                    userType
                ]
            });
        }
        // Navigate to related page
        const route = getNotificationRoute(notification, userType);
        if (route) {
            setOpen(false);
            router.push(route);
        }
    };
    const handleMarkAllAsRead = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$4e4fad__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAllAsRead"])(userType);
        queryClient.invalidateQueries({
            queryKey: [
                'notifications',
                userType
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'notifications-unread',
                userType
            ]
        });
    };
    const unreadNotifications = notifications?.filter((n)=>!n.read) || [];
    const readNotifications = notifications?.filter((n)=>n.read) || [];
    // Prevent hydration mismatch by only rendering Popover on client
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "relative",
            disabled: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationBell.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600",
                    children: unreadCount > 99 ? '99+' : unreadCount
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationBell.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NotificationBell.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600",
                            children: unreadCount > 99 ? '99+' : unreadCount
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NotificationBell.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationBell.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "end",
                className: "w-[380px] p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationBell.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleMarkAllAsRead,
                                className: "h-7 px-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NotificationBell.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    "Mark all as read"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NotificationBell.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NotificationBell.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "h-[400px]",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-5 w-5 animate-spin text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationBell.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this) : notifications && notifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y",
                            children: [
                                unreadNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        unreadNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-4 cursor-pointer hover:bg-muted/50 transition-colors', !notification.read && 'bg-muted/30'),
                                                onClick: ()=>handleNotificationClick(notification),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 mt-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full bg-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/NotificationBell.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground mt-1 line-clamp-2",
                                                                    children: notification.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground mt-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(notification.created_at), {
                                                                        addSuffix: true
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this)
                                            }, notification.id, false, {
                                                fileName: "[project]/src/components/NotificationBell.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this)),
                                        readNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2 bg-muted/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-muted-foreground",
                                                children: "Older"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NotificationBell.tsx",
                                                lineNumber: 237,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                            lineNumber: 236,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                readNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 cursor-pointer hover:bg-muted/50 transition-colors",
                                        onClick: ()=>handleNotificationClick(notification),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NotificationBell.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-muted-foreground",
                                                            children: notification.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mt-1 line-clamp-2",
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(notification.created_at), {
                                                                addSuffix: true
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    }, notification.id, false, {
                                        fileName: "[project]/src/components/NotificationBell.tsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-12 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "h-12 w-12 text-muted-foreground/50 mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground text-center",
                                    children: "No notifications yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotificationBell.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NotificationBell.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotificationBell.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/components/AdminHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminHeader",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$026209__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:026209 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationBell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationBell.tsx [app-ssr] (ecmascript)");
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
function AdminHeader() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userInitials, setUserInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const loadAdminProfile = async ()=>{
            try {
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$026209__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
                if (adminResult.success && adminResult.admin) {
                    setAdmin(adminResult.admin);
                    // Generate initials from email or name
                    if (adminResult.admin.name) {
                        const nameParts = adminResult.admin.name.trim().split(/\s+/);
                        if (nameParts.length >= 2) {
                            setUserInitials((nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase());
                        } else if (nameParts.length === 1 && nameParts[0].length >= 2) {
                            setUserInitials(nameParts[0].substring(0, 2).toUpperCase());
                        } else {
                            setUserInitials('A');
                        }
                    } else if (adminResult.admin.email) {
                        const emailParts = adminResult.admin.email.split('@')[0].split(/[._-]/);
                        if (emailParts.length >= 2) {
                            setUserInitials((emailParts[0][0] + emailParts[1][0]).toUpperCase());
                        } else {
                            setUserInitials(adminResult.admin.email.substring(0, 2).toUpperCase());
                        }
                    } else {
                        setUserInitials('A');
                    }
                }
            } catch (error) {
                console.error('Error loading admin profile:', error);
            }
        };
        loadAdminProfile();
        // Listen for auth changes
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async ()=>{
            // Reload admin profile when auth state changes
            await loadAdminProfile();
        });
        return ()=>subscription.unsubscribe();
    }, []);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 w-full max-w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center flex-shrink-0 mr-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl md:text-2xl font-bold uppercase text-[#1e3a8a] tracking-tight",
                    children: "SHALEAN"
                }, void 0, false, {
                    fileName: "[project]/app/admin/components/AdminHeader.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 md:gap-3 ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationBell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationBell"], {
                        userType: "admin"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "flex items-center gap-2 h-auto p-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-9 w-9 md:h-10 md:w-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "text-xs md:text-sm",
                                                children: userInitials || 'A'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block text-left",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: admin?.name || 'John Doe'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-4 w-4 hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        children: admin?.name || 'Admin Account'
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    admin?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-xs text-muted-foreground font-normal",
                                        children: admin.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: handleLogout,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                        disabled: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "h-9 w-9 md:h-10 md:w-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                className: "text-xs md:text-sm",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminHeader.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/components/AdminHeader.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/AdminHeader.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/components/AdminMobileBottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminMobileBottomNav",
    ()=>AdminMobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
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
const navItems = [
    {
        title: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/admin'
    },
    {
        title: 'Users',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/users'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/admin/bookings'
    },
    {
        title: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        href: '/admin/settings'
    }
];
const moreMenuItems = [
    {
        title: 'Reports',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        href: '/admin/reports'
    },
    {
        title: 'Discount Codes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/admin/discount-codes'
    },
    {
        title: 'Create Cleaner',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/create-cleaner'
    }
];
function AdminMobileBottomNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
    };
    const handleMenuItemClick = (href)=>{
        setIsMoreMenuOpen(false);
        router.push(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden safe-area-inset-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 h-16",
                    children: [
                        navItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMoreMenuOpen(true),
                            className: `flex flex-col items-center justify-center gap-1 transition-colors ${isMoreMenuOpen ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium",
                                    children: "More"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
                open: isMoreMenuOpen,
                onOpenChange: setIsMoreMenuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                    side: "right",
                    className: "w-full sm:max-w-sm p-0 [&>button]:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            className: "sr-only",
                            children: "More Menu"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Shalean Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMoreMenuOpen(false),
                                            className: "p-2 rounded-md hover:bg-muted transition-colors",
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: moreMenuItems.map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMenuItemClick(item.href),
                                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-light text-primary' : 'hover:bg-muted text-foreground'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-medium",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.href, true, {
                                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start gap-3 h-12 text-base",
                                        onClick: handleLogout,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/admin/(dashboard)/layout-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLayoutClient",
    ()=>AdminLayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminMobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminMobileBottomNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AdminLayoutClient({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col overflow-x-hidden pt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminHeader"], {}, void 0, false, {
                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminSidebar"], {}, void 0, false, {
                            fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarInset"], {
                            className: "flex flex-col overflow-x-hidden w-full min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "flex-1 p-4 md:p-6 pb-20 md:pb-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-full overflow-x-hidden",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "hidden md:block border-t bg-muted/30 py-4 px-4 md:px-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground text-center",
                                        children: "© 2026 Shalean (Pty) Ltd, all rights reserved"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminMobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminMobileBottomNav"], {}, void 0, false, {
                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_090a9220._.js.map