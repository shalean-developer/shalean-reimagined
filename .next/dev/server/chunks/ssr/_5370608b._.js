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
"[project]/app/admin/data:f87a26 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcsIENsZWFuZXJVcGRhdGVJbnB1dCwgUHJpY2luZ1J1bGUgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBDbGVhbmVyIH0gZnJvbSAnQC90eXBlcy9ib29raW5nJztcclxuaW1wb3J0IHsgUHJvZmlsZSwgUHJvZmlsZVVwZGF0ZUlucHV0IH0gZnJvbSAnQC90eXBlcy9wcm9maWxlJztcclxuaW1wb3J0IHsgU2VydmljZSwgQWRkaXRpb25hbFNlcnZpY2UgfSBmcm9tICdAL3R5cGVzL3F1b3RlJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB1c2VyIGlzIGFuIGFkbWluXHJcbiAqIEFkbWlucyBhcmUgaWRlbnRpZmllZCBieSBlbWFpbCBwYXR0ZXJuOiAqQGFkbWluLnNoYWxlYW4ubG9jYWxcclxuICogb3IgdXNlciBtZXRhZGF0YSB3aXRoIHJvbGU6ICdhZG1pbidcclxuICovXHJcbmZ1bmN0aW9uIGlzQWRtaW5Vc2VyKGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQsIHVzZXJNZXRhZGF0YT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcclxuICBcclxuICAvLyBDaGVjayBlbWFpbCBwYXR0ZXJuXHJcbiAgaWYgKGVtYWlsLmluY2x1ZGVzKCdAYWRtaW4uc2hhbGVhbi5sb2NhbCcpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2hlY2sgdXNlciBtZXRhZGF0YVxyXG4gIGlmICh1c2VyTWV0YWRhdGE/LnJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYXJkY29kZWQgYWRtaW4gZW1haWxzIChmYWxsYmFjaylcclxuICBjb25zdCBhZG1pbkVtYWlscyA9IFtcclxuICAgICdhZG1pbkBzaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBhZG1pbi5zaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBzaGFsZWFuLmNvbScsXHJcbiAgXTtcclxuICBcclxuICByZXR1cm4gYWRtaW5FbWFpbHMuaW5jbHVkZXMoZW1haWwudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VycmVudCBhdXRoZW50aWNhdGVkIGFkbWluXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEFkbWluKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGFkbWluXHJcbiAgICBpZiAoIWlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGFuIGFkbWluIHVzZXInIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgYWRtaW46IHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogdXNlci51c2VyX21ldGFkYXRhPy5uYW1lIHx8IHVzZXIuZW1haWw/LnNwbGl0KCdAJylbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXJyZW50QWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2V0IGFkbWluJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXV0aGVudGljYXRlIGFkbWluIChzZXJ2ZXItc2lkZSlcclxuICogTm90ZTogQWN0dWFsIGF1dGhlbnRpY2F0aW9uIGhhcHBlbnMgY2xpZW50LXNpZGUsIHRoaXMganVzdCB2ZXJpZmllcyB0aGUgcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlQWRtaW4oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBtYXRjaGVzIGFkbWluIHBhdHRlcm5cclxuICAgIGlmICghaXNBZG1pblVzZXIoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhbiBhZG1pbiBlbWFpbCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRoZW50aWNhdGlvbiBoYXBwZW5zIGNsaWVudC1zaWRlLCB0aGlzIGlzIGp1c3QgdmFsaWRhdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhZG1pbjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWUgfHwgZGF0YS51c2VyLmVtYWlsPy5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXV0aGVudGljYXRlQWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWRtaW4gc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgYWN0aXZlQm9va2luZ3M6IG51bWJlcjtcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgbW9udGhseVJldmVudWU6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbENsZWFuZXJzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDbGVhbmVyczogbnVtYmVyO1xyXG4gICAgY29tcGxldGlvblJhdGU6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJvb2tpbmdzIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIHNlcnZpY2VfZGF0ZSwgY3JlYXRlZF9hdCwgc2VydmljZV90eXBlJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBib29raW5nc1F1ZXJ5ID0gYm9va2luZ3NRdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5LmVxKCdzZXJ2aWNlX3R5cGUnLCBmaWx0ZXIuc2VydmljZVR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjdXN0b21lcnMgKHByb2ZpbGVzKVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGN1c3RvbWVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjdXN0b21lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjbGVhbmVyc1xyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBpc19hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBjbGVhbmVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IGFsbEJvb2tpbmdzID0gYm9va2luZ3MgfHwgW107XHJcbiAgICBjb25zdCBhY3RpdmVCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcihcclxuICAgICAgKGIpID0+IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnXS5pbmNsdWRlcyhiLnN0YXR1cylcclxuICAgICkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYWlkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoKGIpID0+IGIucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyk7XHJcbiAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gcGFpZEJvb2tpbmdzLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IGIudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIHJldHVybiBzdW0gKyAoYW1vdW50ID49IDEwMDAwID8gYW1vdW50IC8gMTAwIDogYW1vdW50KTtcclxuICAgIH0sIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBtb250aGx5UGFpZEJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4gYi5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnICYmIGIuc2VydmljZV9kYXRlID49IGZpcnN0RGF5T2ZNb250aFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gbW9udGhseVBhaWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBhbW91bnQgPSBiLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICByZXR1cm4gc3VtICsgKGFtb3VudCA+PSAxMDAwMCA/IGFtb3VudCAvIDEwMCA6IGFtb3VudCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKS5sZW5ndGg7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IGFsbEJvb2tpbmdzLmxlbmd0aCA+IDAgPyAoY29tcGxldGVkQm9va2luZ3MgLyBhbGxCb29raW5ncy5sZW5ndGgpICogMTAwIDogMDtcclxuXHJcbiAgICBjb25zdCBhbGxDbGVhbmVycyA9IGNsZWFuZXJzIHx8IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlQ2xlYW5lcnMgPSBhbGxDbGVhbmVycy5maWx0ZXIoKGMpID0+IGMuaXNfYWN0aXZlKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc3RhdHM6IHtcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBhbGxCb29raW5ncy5sZW5ndGgsXHJcbiAgICAgICAgYWN0aXZlQm9va2luZ3MsXHJcbiAgICAgICAgdG90YWxSZXZlbnVlLFxyXG4gICAgICAgIG1vbnRobHlSZXZlbnVlLFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzOiBjdXN0b21lcnM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIHRvdGFsQ2xlYW5lcnM6IGFsbENsZWFuZXJzLmxlbmd0aCxcclxuICAgICAgICBhY3RpdmVDbGVhbmVycyxcclxuICAgICAgICBjb21wbGV0aW9uUmF0ZTogTWF0aC5yb3VuZChjb21wbGV0aW9uUmF0ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBZG1pblN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBib29raW5ncyB3aXRoIG9wdGlvbmFsIGZpbHRlcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCb29raW5ncyhcclxuICBmaWx0ZXI/OiB7XHJcbiAgICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBkYXRlRnJvbT86IHN0cmluZztcclxuICAgIGRhdGVUbz86IHN0cmluZztcclxuICAgIGN1c3RvbWVyRW1haWw/OiBzdHJpbmc7XHJcbiAgICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cyAmJiBmaWx0ZXIuc3RhdHVzICE9PSAnYWxsJykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnc2VydmljZV9kYXRlJywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZVRvKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmN1c3RvbWVyRW1haWwpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGZpbHRlci5jdXN0b21lckVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmNsZWFuZXJJZCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3ByZWZlcnJlZF9jbGVhbmVyX2lkJywgZmlsdGVyLmNsZWFuZXJJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgY3VzdG9tZXJzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ3VzdG9tZXJzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY3VzdG9tZXJzPzogUHJvZmlsZVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGN1c3RvbWVyczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxDdXN0b21lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjbGVhbmVyc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENsZWFuZXJzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxDbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBtb250aGx5IHVzZXIgcmVnaXN0cmF0aW9uIGRhdGEgZm9yIGNoYXJ0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vbnRobHlVc2VyRGF0YShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUeXBlPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogeyBtb250aDogc3RyaW5nOyBwcm92aWRlcjogbnVtYmVyOyBjbGllbnQ6IG51bWJlciB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgY2xlYW5lcnMgcXVlcnkgd2l0aCBkYXRlIGZpbHRlcnNcclxuICAgIGxldCBjbGVhbmVyc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgYCR7Y3VycmVudFllYXJ9LTAxLTAxYDtcclxuICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKTtcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBjbGVhbmVyc1F1ZXJ5ID0gY2xlYW5lcnNRdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBjbGVhbmVyc1F1ZXJ5O1xyXG5cclxuICAgIC8vIEJ1aWxkIGN1c3RvbWVycyBxdWVyeSB3aXRoIGRhdGUgZmlsdGVyc1xyXG4gICAgbGV0IGN1c3RvbWVyc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCcpO1xyXG4gICAgXHJcbiAgICBjdXN0b21lcnNRdWVyeSA9IGN1c3RvbWVyc1F1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKTtcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBjdXN0b21lcnNRdWVyeSA9IGN1c3RvbWVyc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgY3VzdG9tZXJzUXVlcnk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IgfHwgY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm91cCBieSBtb250aFxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogbnVtYmVyXTogeyBwcm92aWRlcjogbnVtYmVyOyBjbGllbnQ6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBtb250aGx5RGF0YVtpXSA9IHsgcHJvdmlkZXI6IDAsIGNsaWVudDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuZXJzPy5mb3JFYWNoKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgIGlmIChjbGVhbmVyLmNyZWF0ZWRfYXQpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY2xlYW5lci5jcmVhdGVkX2F0KTtcclxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50WWVhcikge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbZGF0ZS5nZXRNb250aCgpXS5wcm92aWRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY3VzdG9tZXJzPy5mb3JFYWNoKChjdXN0b21lcikgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXIuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXN0b21lci5jcmVhdGVkX2F0KTtcclxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50WWVhcikge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbZGF0ZS5nZXRNb250aCgpXS5jbGllbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKHtcclxuICAgICAgbW9udGgsXHJcbiAgICAgIHByb3ZpZGVyOiBtb250aGx5RGF0YVtpbmRleF0ucHJvdmlkZXIsXHJcbiAgICAgIGNsaWVudDogbW9udGhseURhdGFbaW5kZXhdLmNsaWVudCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0TW9udGhseVVzZXJEYXRhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIG1vbnRobHkgdXNlciBkYXRhJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgc3RhdHVzIGRpc3RyaWJ1dGlvbiBmb3IgZG9udXQgY2hhcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nU3RhdHVzRGlzdHJpYnV0aW9uKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IHN0YXR1czogc3RyaW5nOyBjb3VudDogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfVtdO1xyXG4gIHRvdGFsPzogbnVtYmVyO1xyXG4gIGdyb3d0aFBlcmNlbnRhZ2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCBjcmVhdGVkX2F0LCBzZXJ2aWNlX3R5cGUnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3NlcnZpY2VfdHlwZScsIGZpbHRlci5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c0NvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgY29uc3QgdG90YWwgPSBib29raW5ncz8ubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gYm9va2luZy5zdGF0dXMgfHwgJ3Vua25vd24nO1xyXG4gICAgICBzdGF0dXNDb3VudHNbc3RhdHVzXSA9IChzdGF0dXNDb3VudHNbc3RhdHVzXSB8fCAwKSArIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhzdGF0dXNDb3VudHMpLm1hcCgoW3N0YXR1cywgY291bnRdKSA9PiAoe1xyXG4gICAgICBzdGF0dXM6IHN0YXR1cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXR1cy5zbGljZSgxKSxcclxuICAgICAgY291bnQsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvdW50IC8gdG90YWwpICogMTAwKSA6IDAsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGdyb3d0aCBwZXJjZW50YWdlIChjb21wYXJlIGN1cnJlbnQgbW9udGggdG8gcHJldmlvdXMgbW9udGgpXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gbm93LmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aCA9PT0gMCA/IDExIDogY3VycmVudE1vbnRoIC0gMTtcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IGN1cnJlbnRNb250aCA9PT0gMCA/IGN1cnJlbnRZZWFyIC0gMSA6IGN1cnJlbnRZZWFyO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRNb250aFN0YXJ0ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoU3RhcnQgPSBuZXcgRGF0ZShwcmV2aW91c1llYXIsIHByZXZpb3VzTW9udGgsIDEpO1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aEVuZCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDApO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRNb250aEJvb2tpbmdzID0gYm9va2luZ3M/LmZpbHRlcigoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVkRGF0ZSA+PSBjdXJyZW50TW9udGhTdGFydCAmJiBjcmVhdGVkRGF0ZSA8IG5vdztcclxuICAgIH0pLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhCb29raW5ncyA9IGJvb2tpbmdzPy5maWx0ZXIoKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgY3JlYXRlZERhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICByZXR1cm4gY3JlYXRlZERhdGUgPj0gcHJldmlvdXNNb250aFN0YXJ0ICYmIGNyZWF0ZWREYXRlIDw9IHByZXZpb3VzTW9udGhFbmQ7XHJcbiAgICB9KS5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBsZXQgZ3Jvd3RoUGVyY2VudGFnZSA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNNb250aEJvb2tpbmdzID4gMCkge1xyXG4gICAgICBncm93dGhQZXJjZW50YWdlID0gTWF0aC5yb3VuZCgoKGN1cnJlbnRNb250aEJvb2tpbmdzIC0gcHJldmlvdXNNb250aEJvb2tpbmdzKSAvIHByZXZpb3VzTW9udGhCb29raW5ncykgKiAxMDApO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50TW9udGhCb29raW5ncyA+IDApIHtcclxuICAgICAgZ3Jvd3RoUGVyY2VudGFnZSA9IDEwMDsgLy8gMTAwJSBncm93dGggaWYgcHJldmlvdXMgbW9udGggaGFkIG5vIGJvb2tpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCB0b3RhbCwgZ3Jvd3RoUGVyY2VudGFnZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nU3RhdHVzRGlzdHJpYnV0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmcgc3RhdHVzIGRpc3RyaWJ1dGlvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBtb250aGx5IHRyYW5zYWN0aW9uL3JldmVudWUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vbnRobHlUcmFuc2FjdGlvbkRhdGEoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IG1vbnRoOiBzdHJpbmc7IGNvbXBsZXRlZDogbnVtYmVyOyBwZW5kaW5nOiBudW1iZXIgfVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0LCBwYXltZW50X3N0YXR1cywgdG90YWxfYW1vdW50LCBzZXJ2aWNlX3R5cGUnKTtcclxuXHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgYCR7Y3VycmVudFllYXJ9LTAxLTAxYDtcclxuICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3NlcnZpY2VfdHlwZScsIGZpbHRlci5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbnRobHlEYXRhOiB7IFtrZXk6IG51bWJlcl06IHsgY29tcGxldGVkOiBudW1iZXI7IHBlbmRpbmc6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBtb250aGx5RGF0YVtpXSA9IHsgY29tcGxldGVkOiAwLCBwZW5kaW5nOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKGJvb2tpbmcuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG4gICAgICAgICAgaWYgKGJvb2tpbmcucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJykge1xyXG4gICAgICAgICAgICBtb250aGx5RGF0YVttb250aF0uY29tcGxldGVkICs9IGFtb3VudDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXS5wZW5kaW5nICs9IGFtb3VudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKHtcclxuICAgICAgbW9udGgsXHJcbiAgICAgIGNvbXBsZXRlZDogTWF0aC5yb3VuZChtb250aGx5RGF0YVtpbmRleF0uY29tcGxldGVkKSxcclxuICAgICAgcGVuZGluZzogTWF0aC5yb3VuZChtb250aGx5RGF0YVtpbmRleF0ucGVuZGluZyksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE1vbnRobHlUcmFuc2FjdGlvbkRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbW9udGhseSB0cmFuc2FjdGlvbiBkYXRhJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRvcCBhY3RpdmUgdXNlcnMgKGN1c3RvbWVycyB3aXRoIG1vc3QgYm9va2luZ3MpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wQWN0aXZlVXNlcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB1c2Vycz86IEFycmF5PHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG4gICAgYm9va2luZ0NvdW50OiBudW1iZXI7XHJcbiAgICBhdmF0YXI/OiBzdHJpbmc7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEdldCBib29raW5ncyBncm91cGVkIGJ5IGN1c3RvbWVyXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGN1c3RvbWVyX2ZpcnN0X25hbWUsIGN1c3RvbWVyX2xhc3RfbmFtZScpO1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ291bnQgYm9va2luZ3MgcGVyIGN1c3RvbWVyXHJcbiAgICBjb25zdCBjdXN0b21lckNvdW50czogeyBba2V5OiBzdHJpbmddOiB7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZzsgY291bnQ6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgY29uc3QgbmFtZSA9IGAke2Jvb2tpbmcuY3VzdG9tZXJfZmlyc3RfbmFtZSB8fCAnJ30gJHtib29raW5nLmN1c3RvbWVyX2xhc3RfbmFtZSB8fCAnJ31gLnRyaW0oKTtcclxuICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgaWYgKCFjdXN0b21lckNvdW50c1tlbWFpbF0pIHtcclxuICAgICAgICAgIGN1c3RvbWVyQ291bnRzW2VtYWlsXSA9IHsgbmFtZTogbmFtZSB8fCBlbWFpbCwgZW1haWwsIGNvdW50OiAwIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c3RvbWVyQ291bnRzW2VtYWlsXS5jb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgdG9wIDEwXHJcbiAgICBjb25zdCB0b3BVc2VycyA9IE9iamVjdC52YWx1ZXMoY3VzdG9tZXJDb3VudHMpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudClcclxuICAgICAgLnNsaWNlKDAsIDEwKVxyXG4gICAgICAubWFwKCh1c2VyLCBpbmRleCkgPT4gKHtcclxuICAgICAgICBpZDogYGN1c3RvbWVyLSR7aW5kZXh9YCxcclxuICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgcm9sZTogJ0N1c3RvbWVyJyxcclxuICAgICAgICBib29raW5nQ291bnQ6IHVzZXIuY291bnQsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VyczogdG9wVXNlcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0VG9wQWN0aXZlVXNlcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggdG9wIGFjdGl2ZSB1c2VycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHBvcHVsYXJpdHkgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VQb3B1bGFyaXR5KGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc3RhdHVzPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlcz86IEFycmF5PHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc2VydmljZV90eXBlLCBjcmVhdGVkX2F0LCBzdGF0dXMnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VydmljZUNvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgY29uc3QgdG90YWwgPSBib29raW5ncz8ubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc2VydmljZVR5cGUgPSBib29raW5nLnNlcnZpY2VfdHlwZSB8fCAnVW5rbm93bic7XHJcbiAgICAgIHNlcnZpY2VDb3VudHNbc2VydmljZVR5cGVdID0gKHNlcnZpY2VDb3VudHNbc2VydmljZVR5cGVdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHNlcnZpY2VDb3VudHMpXHJcbiAgICAgIC5tYXAoKFtuYW1lLCBjb3VudF0pID0+ICh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb3VudCxcclxuICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKChjb3VudCAvIHRvdGFsKSAqIDEwMCkgOiAwLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlczogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFNlcnZpY2VQb3B1bGFyaXR5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgcG9wdWxhcml0eScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByYXRpbmcgc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJhdGluZ1N0YXRzKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgYXZlcmFnZVJhdGluZzogbnVtYmVyO1xyXG4gICAgdG90YWxSYXRpbmdzOiBudW1iZXI7XHJcbiAgICBicmVha2Rvd246IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH07XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gSWYgc2VydmljZVR5cGUgZmlsdGVyIGlzIGFwcGxpZWQsIHdlIG5lZWQgdG8gZmlsdGVyIGNsZWFuZXJzIGJhc2VkIG9uIHRoZWlyIGJvb2tpbmdzXHJcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSwgd2UnbGwganVzdCBnZXQgYWxsIGNsZWFuZXJzLiBTZXJ2aWNlIHR5cGUgZmlsdGVyaW5nIHdvdWxkIHJlcXVpcmVcclxuICAgIC8vIGpvaW5pbmcgd2l0aCBib29raW5ncyB3aGljaCBpcyBtb3JlIGNvbXBsZXguXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdyYXRpbmcsIGNyZWF0ZWRfYXQnKTtcclxuXHJcbiAgICAvLyBBcHBseSBkYXRlIGZpbHRlciB0byBjbGVhbmVyIGNyZWF0aW9uIGRhdGUgaWYgcHJvdmlkZWRcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVGcm9tKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXRpbmdzID0gY2xlYW5lcnM/Lm1hcCgoYykgPT4gYy5yYXRpbmcgfHwgMCkgfHwgW107XHJcbiAgICBjb25zdCB0b3RhbFJhdGluZ3MgPSByYXRpbmdzLmxlbmd0aDtcclxuICAgIGNvbnN0IGF2ZXJhZ2VSYXRpbmcgPSB0b3RhbFJhdGluZ3MgPiAwXHJcbiAgICAgID8gcmF0aW5ncy5yZWR1Y2UoKHN1bSwgcikgPT4gc3VtICsgciwgMCkgLyB0b3RhbFJhdGluZ3NcclxuICAgICAgOiAwO1xyXG5cclxuICAgIC8vIENvdW50IGJ5IHJhdGluZyAoMS01KVxyXG4gICAgY29uc3QgYnJlYWtkb3duOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0geyAxOiAwLCAyOiAwLCAzOiAwLCA0OiAwLCA1OiAwIH07XHJcbiAgICByYXRpbmdzLmZvckVhY2goKHJhdGluZykgPT4ge1xyXG4gICAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyYXRpbmcpO1xyXG4gICAgICBpZiAocm91bmRlZCA+PSAxICYmIHJvdW5kZWQgPD0gNSkge1xyXG4gICAgICAgIGJyZWFrZG93bltyb3VuZGVkXSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBzdGF0czoge1xyXG4gICAgICAgIGF2ZXJhZ2VSYXRpbmc6IE1hdGgucm91bmQoYXZlcmFnZVJhdGluZyAqIDEwKSAvIDEwLFxyXG4gICAgICAgIHRvdGFsUmF0aW5ncyxcclxuICAgICAgICBicmVha2Rvd24sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSYXRpbmdTdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByYXRpbmcgc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgc2VydmljZSB0eXBlIGRpc3RyaWJ1dGlvbiBmb3Igc3Vic2NyaXB0aW9uIGNoYXJ0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVR5cGVEaXN0cmlidXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHR5cGU6IHN0cmluZzsgY291bnQ6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIGNsZWFuaW5nX2ZyZXF1ZW5jeSwgY3JlYXRlZF9hdCwgc3RhdHVzJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3VwIGJ5IGZyZXF1ZW5jeSB0eXBlOiBPbmUtVGltZSwgV2Vla2x5LCBCaS1XZWVrbHksIE1vbnRobHlcclxuICAgIGNvbnN0IGZyZXF1ZW5jeUNvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICAgICAgJ09uZS1UaW1lJzogMCxcclxuICAgICAgJ1dlZWtseSc6IDAsXHJcbiAgICAgICdCaS1XZWVrbHknOiAwLFxyXG4gICAgICAnTW9udGhseSc6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeSA9IGJvb2tpbmcuY2xlYW5pbmdfZnJlcXVlbmN5IHx8ICdvbmUtdGltZSc7XHJcbiAgICAgIGlmIChmcmVxdWVuY3kgPT09ICdvbmUtdGltZScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ09uZS1UaW1lJ10rKztcclxuICAgICAgfSBlbHNlIGlmIChmcmVxdWVuY3kgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgZnJlcXVlbmN5Q291bnRzWydXZWVrbHknXSsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyZXF1ZW5jeSA9PT0gJ2JpLXdlZWtseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ0JpLVdlZWtseSddKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZnJlcXVlbmN5ID09PSAnbW9udGhseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ01vbnRobHknXSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhmcmVxdWVuY3lDb3VudHMpXHJcbiAgICAgIC5tYXAoKFt0eXBlLCBjb3VudF0pID0+ICh7IHR5cGUsIGNvdW50IH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVR5cGVEaXN0cmlidXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSB0eXBlIGRpc3RyaWJ1dGlvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBjbGVhbmVyIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGVhbmVyKFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIGRhdGE6IENsZWFuZXJVcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXI/OiBDbGVhbmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHVwZGF0ZSBvYmplY3Qgd2l0aCBvbmx5IHByb3ZpZGVkIGZpZWxkc1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICBpZiAoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIGlmIChkYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucGhvbmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZSA9IGRhdGEucGhvbmU7XHJcbiAgICBpZiAoZGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pc19hY3RpdmUgPSBkYXRhLmlzX2FjdGl2ZTtcclxuICAgIGlmIChkYXRhLmJpbyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmJpbyA9IGRhdGEuYmlvO1xyXG4gICAgaWYgKGRhdGEuYXJlYXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hcmVhcyA9IGRhdGEuYXJlYXM7XHJcbiAgICBpZiAoZGF0YS5zcGVjaWFsdGllcyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnNwZWNpYWx0aWVzID0gZGF0YS5zcGVjaWFsdGllcztcclxuICAgIGlmIChkYXRhLnllYXJzX2V4cGVyaWVuY2UgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS55ZWFyc19leHBlcmllbmNlID0gZGF0YS55ZWFyc19leHBlcmllbmNlO1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX21vbmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9tb25kYXkgPSBkYXRhLmF2YWlsYWJsZV9tb25kYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfdHVlc2RheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV90dWVzZGF5ID0gZGF0YS5hdmFpbGFibGVfdHVlc2RheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfd2VkbmVzZGF5ID0gZGF0YS5hdmFpbGFibGVfd2VkbmVzZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3RodXJzZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3RodXJzZGF5ID0gZGF0YS5hdmFpbGFibGVfdGh1cnNkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfZnJpZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX2ZyaWRheSA9IGRhdGEuYXZhaWxhYmxlX2ZyaWRheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV9zYXR1cmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9zYXR1cmRheSA9IGRhdGEuYXZhaWxhYmxlX3NhdHVyZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3N1bmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9zdW5kYXkgPSBkYXRhLmF2YWlsYWJsZV9zdW5kYXk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjbGVhbmVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xlYW5lcjogY2xlYW5lciBhcyBDbGVhbmVyIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUNsZWFuZXI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsZWFuZXInLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgY3VzdG9tZXIgcHJvZmlsZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyKFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBkYXRhOiBQcm9maWxlVXBkYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcj86IFByb2ZpbGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXHJcbiAgICBpZiAoIWRhdGEuZmlyc3RfbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEubGFzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmVtYWlsPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lIHx8IG51bGwsXHJcbiAgICAgICAgYXZhdGFyX3VybDogZGF0YS5hdmF0YXJfdXJsIHx8IG51bGwsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjdXN0b21lcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGN1c3RvbWVyOiBjdXN0b21lciBhcyBQcm9maWxlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjdXN0b21lcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5ncyBhdmFpbGFibGUgZm9yIGFzc2lnbm1lbnQgKGV4Y2x1ZGUgY29tcGxldGVkIGFuZCBjYW5jZWxsZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ3NGb3JBc3NpZ25tZW50KGZpbHRlcj86IHtcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm5vdCgnc3RhdHVzJywgJ2luJywgJyhjb21wbGV0ZWQsY2FuY2VsbGVkKScpXHJcbiAgICAgIC5vcmRlcignc2VydmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzICYmIGZpbHRlci5zdGF0dXMgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlVG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzIGZvciBhc3NpZ25tZW50OicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Qm9va2luZ3NGb3JBc3NpZ25tZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXNzaWduIGNsZWFuZXJzIHRvIGJvb2tpbmdzIChzdXBwb3J0cyBtdWx0aS1zZWxlY3QpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmdzKFxyXG4gIGNsZWFuZXJJZHM6IHN0cmluZ1tdLFxyXG4gIGJvb2tpbmdJZHM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgdXBkYXRlZD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcklkcyB8fCBjbGVhbmVySWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgY2xlYW5lciBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkcyB8fCBib29raW5nSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgYm9va2luZyBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgY2xlYW5lcnMgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcnMgfHwgY2xlYW5lcnMubGVuZ3RoICE9PSBjbGVhbmVySWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBjbGVhbmVycyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmdzIGV4aXN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHZlcmlmeSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCAhPT0gYm9va2luZ0lkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT25lIG9yIG1vcmUgYm9va2luZ3Mgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBlYWNoIGJvb2tpbmdcclxuICAgIGxldCB1cGRhdGVkQ291bnQgPSAwO1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgYm9va2luZyBvZiBib29raW5ncykge1xyXG4gICAgICAvLyBHZXQgZXhpc3RpbmcgY2xlYW5lciBJRHNcclxuICAgICAgY29uc3QgZXhpc3RpbmdJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgZnJvbSBwcmVmZXJyZWRfY2xlYW5lcl9pZCBpZiBleGlzdHNcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgZnJvbSBwcmVmZXJyZWRfY2xlYW5lcl9pZHMgYXJyYXkgaWYgZXhpc3RzXHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNZXJnZSB3aXRoIG5ldyBjbGVhbmVyIElEcyAoYXZvaWQgZHVwbGljYXRlcylcclxuICAgICAgY29uc3QgYWxsQ2xlYW5lcklkcyA9IFsuLi5uZXcgU2V0KFsuLi5leGlzdGluZ0lkcywgLi4uY2xlYW5lcklkc10pXTtcclxuXHJcbiAgICAgIC8vIERldGVybWluZSBwcmVmZXJyZWRfY2xlYW5lcl9pZCAoZmlyc3QgY2xlYW5lciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgY29uc3QgcHJlZmVycmVkQ2xlYW5lcklkID0gYWxsQ2xlYW5lcklkc1swXSB8fCBudWxsO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBwcmVmZXJyZWRDbGVhbmVySWQsXHJcbiAgICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGFsbENsZWFuZXJJZHMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgYm9va2luZy5pZCk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBlcnJvcnMucHVzaChgRmFpbGVkIHRvIHVwZGF0ZSBib29raW5nICR7Ym9va2luZy5pZH06ICR7dXBkYXRlRXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVkQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHVwZGF0ZWRDb3VudCA+IDAsXHJcbiAgICAgICAgdXBkYXRlZDogdXBkYXRlZENvdW50LFxyXG4gICAgICAgIGVycm9yOiBgU29tZSBib29raW5ncyBmYWlsZWQgdG8gdXBkYXRlOiAke2Vycm9ycy5qb2luKCc7ICcpfWAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXBkYXRlZDogdXBkYXRlZENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBhc3NpZ24gY2xlYW5lcnMgdG8gYm9va2luZ3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgaWYgc2VydmljZSB0eXBlIGFsbG93cyBtdWx0aXBsZSBjbGVhbmVyc1xyXG4gKi9cclxuZnVuY3Rpb24gYWxsb3dzTXVsdGlwbGVDbGVhbmVycyhzZXJ2aWNlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFzZXJ2aWNlVHlwZSkgcmV0dXJuIHRydWU7IC8vIERlZmF1bHQgdG8gYWxsb3dpbmcgbXVsdGlwbGVcclxuICBcclxuICBjb25zdCBub3JtYWxpemVkID0gc2VydmljZVR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgXHJcbiAgLy8gRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQgYWx3YXlzIGFsbG93IG11bHRpcGxlXHJcbiAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2RlZXAnKSB8fCBcclxuICAgICAgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ21vdmUnKSAmJiAobm9ybWFsaXplZC5pbmNsdWRlcygnaW4vb3V0JykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnaW4gb3V0JykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnaW5vdXQnKSkpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU3RhbmRhcmQgYW5kIEFpcmJuYiBhbGxvdyBtdWx0aXBsZSAobW9yZSB0aGFuIDEpXHJcbiAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3N0YW5kYXJkJykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnYWlyYm5iJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBPdGhlciBzZXJ2aWNlcyBhbHNvIGFsbG93IG11bHRpcGxlXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYm9va2luZyBkZXRhaWxzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQm9va2luZyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICB1cGRhdGVEYXRhOiB7XHJcbiAgICBzZXJ2aWNlX2RhdGU/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX3RpbWU/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2FwdF91bml0Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHNlcnZpY2Vfc3VidXJiPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV9jaXR5Pzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfZmlyc3RfbmFtZT86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX2xhc3RfbmFtZT86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmc7XHJcbiAgICBzcGVjaWFsX2luc3RydWN0aW9ucz86IHN0cmluZyB8IG51bGw7XHJcbiAgICBiZWRyb29tcz86IHN0cmluZztcclxuICAgIGJhdGhyb29tcz86IHN0cmluZztcclxuICAgIHNlcnZpY2VfdHlwZT86IHN0cmluZztcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZyBleGlzdHNcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdCb29raW5nLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFleGlzdGluZ0Jvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBib29raW5nOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVCb29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGJvb2tpbmcgc3RhdHVzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQm9va2luZ1N0YXR1cyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IEJvb2tpbmdbJ3N0YXR1cyddXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHN0YXR1c1xyXG4gICAgY29uc3QgdmFsaWRTdGF0dXNlczogQm9va2luZ1snc3RhdHVzJ11bXSA9IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnLCAnY29tcGxldGVkJywgJ2NhbmNlbGxlZCddO1xyXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5nIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0Jvb2tpbmcsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWV4aXN0aW5nQm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgc3RhdHVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoeyBzdGF0dXMgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZyBzdGF0dXM6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUJvb2tpbmdTdGF0dXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgc3RhdHVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXNzaWduIGNsZWFuZXJzIHRvIGEgc2luZ2xlIGJvb2tpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBjbGVhbmVySWRzOiBzdHJpbmdbXSxcclxuICByZXBsYWNlRXhpc3Rpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNsZWFuZXJJZHMgfHwgY2xlYW5lcklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQXQgbGVhc3Qgb25lIGNsZWFuZXIgbXVzdCBiZSBzZWxlY3RlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmcgZXhpc3RzIGFuZCBnZXQgc2VydmljZSB0eXBlXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBzZXJ2aWNlX3R5cGUsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNlcnZpY2UgdHlwZSBhbGxvd3MgbXVsdGlwbGUgY2xlYW5lcnMgaWYgbW9yZSB0aGFuIDEgY2xlYW5lciBpcyBiZWluZyBhc3NpZ25lZFxyXG4gICAgaWYgKGNsZWFuZXJJZHMubGVuZ3RoID4gMSAmJiAhYWxsb3dzTXVsdGlwbGVDbGVhbmVycyhib29raW5nLnNlcnZpY2VfdHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGhpcyBzZXJ2aWNlIHR5cGUgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgY2xlYW5lcnMgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcnMgfHwgY2xlYW5lcnMubGVuZ3RoICE9PSBjbGVhbmVySWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBjbGVhbmVycyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGZpbmFsIGNsZWFuZXIgSURzXHJcbiAgICBsZXQgZmluYWxDbGVhbmVySWRzOiBzdHJpbmdbXTtcclxuICAgIGlmIChyZXBsYWNlRXhpc3RpbmcpIHtcclxuICAgICAgZmluYWxDbGVhbmVySWRzID0gY2xlYW5lcklkcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBleGlzdGluZyBjbGVhbmVyIElEc1xyXG4gICAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE1lcmdlIHdpdGggbmV3IGNsZWFuZXIgSURzIChhdm9pZCBkdXBsaWNhdGVzKVxyXG4gICAgICBmaW5hbENsZWFuZXJJZHMgPSBbLi4ubmV3IFNldChbLi4uZXhpc3RpbmdJZHMsIC4uLmNsZWFuZXJJZHNdKV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHByZWZlcnJlZF9jbGVhbmVyX2lkIChmaXJzdCBjbGVhbmVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gICAgY29uc3QgcHJlZmVycmVkQ2xlYW5lcklkID0gZmluYWxDbGVhbmVySWRzWzBdIHx8IG51bGw7XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWQ6IHByZWZlcnJlZENsZWFuZXJJZCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZpbmFsQ2xlYW5lcklkcyxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXNzaWduaW5nIGNsZWFuZXJzIHRvIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFzc2lnbiBjbGVhbmVycyB0byBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGNsZWFuZXIgZnJvbSBib29raW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2xlYW5lckZyb21Cb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCB8fCAhY2xlYW5lcklkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgYW5kIENsZWFuZXIgSUQgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIGNsZWFuZXIgSURzXHJcbiAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgY2xlYW5lciBJRFxyXG4gICAgY29uc3Qgbm9ybWFsaXplZENsZWFuZXJJZCA9IGNsZWFuZXJJZC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRJZHMgPSBleGlzdGluZ0lkcy5maWx0ZXIoaWQgPT4gaWQudG9Mb3dlckNhc2UoKS50cmltKCkgIT09IG5vcm1hbGl6ZWRDbGVhbmVySWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVkSWRzLmxlbmd0aCA9PT0gZXhpc3RpbmdJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsZWFuZXIgbm90IGZvdW5kIGluIGJvb2tpbmcgYXNzaWdubWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgcHJlZmVycmVkX2NsZWFuZXJfaWQgKGZpcnN0IGNsZWFuZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSB1cGRhdGVkSWRzLmxlbmd0aCA+IDAgPyB1cGRhdGVkSWRzWzBdIDogbnVsbDtcclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZDogcHJlZmVycmVkQ2xlYW5lcklkLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogdXBkYXRlZElkcy5sZW5ndGggPiAwID8gdXBkYXRlZElkcyA6IG51bGwsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGNsZWFuZXIgZnJvbSBib29raW5nOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZW1vdmVDbGVhbmVyRnJvbUJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gcmVtb3ZlIGNsZWFuZXIgZnJvbSBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNsZWFuZXIgZWFybmluZ3MgZm9yIGEgYm9va2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsZWFuZXJFYXJuaW5ncyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBlYXJuaW5nczoge1xyXG4gICAgYmFzZUVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICB0aXBBbW91bnQ6IG51bWJlcjtcclxuICAgIHRvdGFsRWFybmluZ3M6IG51bWJlcjtcclxuICB9IHwgbnVsbFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQgfHwgIWNsZWFuZXJJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGFuZCBDbGVhbmVyIElEIGFyZSByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVyIGlzIGFzc2lnbmVkIHRvIGJvb2tpbmdcclxuICAgIGNvbnN0IG5vcm1hbGl6ZVV1aWQgPSAoaWQ6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgIGlmICghaWQpIHJldHVybiAnJztcclxuICAgICAgcmV0dXJuIFN0cmluZyhpZCkudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZENsZWFuZXJJZCA9IG5vcm1hbGl6ZVV1aWQoY2xlYW5lcklkKTtcclxuXHJcbiAgICBjb25zdCBpc0Fzc2lnbmVkU2luZ2xlID0gYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCAmJiBcclxuICAgICAgbm9ybWFsaXplVXVpZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSA9PT0gbm9ybWFsaXplZENsZWFuZXJJZDtcclxuXHJcbiAgICBsZXQgaXNBc3NpZ25lZE11bHRpcGxlID0gZmFsc2U7XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgaXNBc3NpZ25lZE11bHRpcGxlID0gYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuc29tZShcclxuICAgICAgICAoaWQ6IHN0cmluZykgPT4gbm9ybWFsaXplVXVpZChpZCkgPT09IG5vcm1hbGl6ZWRDbGVhbmVySWRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzQXNzaWduZWRTaW5nbGUgJiYgIWlzQXNzaWduZWRNdWx0aXBsZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDbGVhbmVyIGlzIG5vdCBhc3NpZ25lZCB0byB0aGlzIGJvb2tpbmcnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIG92ZXJyaWRlIG9yIGNyZWF0ZSBuZXdcclxuICAgIGxldCBvdmVycmlkZTogUmVjb3JkPHN0cmluZywgeyBiYXNlRWFybmluZ3M6IG51bWJlcjsgdGlwQW1vdW50OiBudW1iZXI7IHRvdGFsRWFybmluZ3M6IG51bWJlciB9PiA9IHt9O1xyXG4gICAgaWYgKGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSAmJiB0eXBlb2YgYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBvdmVycmlkZSA9IHsgLi4uYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIG9yIHJlbW92ZSBvdmVycmlkZVxyXG4gICAgaWYgKGVhcm5pbmdzID09PSBudWxsKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvdmVycmlkZSBmb3IgdGhpcyBjbGVhbmVyXHJcbiAgICAgIGRlbGV0ZSBvdmVycmlkZVtjbGVhbmVySWRdO1xyXG4gICAgICAvLyBJZiBubyBvdmVycmlkZXMgbGVmdCwgc2V0IHRvIG51bGxcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKG92ZXJyaWRlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBvdmVycmlkZSA9IG51bGwgYXMgYW55O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXQgb3ZlcnJpZGUgZm9yIHRoaXMgY2xlYW5lclxyXG4gICAgICBvdmVycmlkZVtjbGVhbmVySWRdID0gZWFybmluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZTogb3ZlcnJpZGUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNsZWFuZXIgZWFybmluZ3M6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUNsZWFuZXJFYXJuaW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY2xlYW5lciBlYXJuaW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIHdpdGggY2xlYW5lciBkZXRhaWxzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ1dpdGhDbGVhbmVycyhcclxuICBib29raW5nSWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGNsZWFuZXJzPzogQXJyYXk8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBob25lPzogc3RyaW5nIHwgbnVsbDtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyIElEc1xyXG4gICAgY29uc3QgY2xlYW5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgIGNsZWFuZXJJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgIH1cclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICYmICFjbGVhbmVySWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgY2xlYW5lcklkcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyIGRldGFpbHNcclxuICAgIGxldCBjbGVhbmVyczogQXJyYXk8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtYWlsPzogc3RyaW5nIHwgbnVsbDsgcGhvbmU/OiBzdHJpbmcgfCBudWxsIH0+ID0gW107XHJcbiAgICBpZiAoY2xlYW5lcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnNEYXRhLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAgIC5zZWxlY3QoJ2lkLCBuYW1lLCBlbWFpbCwgcGhvbmUnKVxyXG4gICAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICAgIGlmICghY2xlYW5lcnNFcnJvciAmJiBjbGVhbmVyc0RhdGEpIHtcclxuICAgICAgICBjbGVhbmVycyA9IGNsZWFuZXJzRGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IGJvb2tpbmcgYXMgQm9va2luZywgY2xlYW5lcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Qm9va2luZ1dpdGhDbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5nIHdpdGggY2xlYW5lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIHNlcnZpY2VzIChpbmNsdWRpbmcgaW5hY3RpdmUpLCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxTZXJ2aWNlcygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2VzPzogU2VydmljZVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlczogKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxTZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWRkaXRpb25hbCBzZXJ2aWNlcyAoaW5jbHVkaW5nIGluYWN0aXZlKSwgb3JkZXJlZCBieSBkaXNwbGF5X29yZGVyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQWRkaXRpb25hbFNlcnZpY2VzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2VzPzogQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRkaXRpb25hbCBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFkZGl0aW9uYWxTZXJ2aWNlczogKGRhdGEgfHwgW10pIGFzIEFkZGl0aW9uYWxTZXJ2aWNlW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0QWxsQWRkaXRpb25hbFNlcnZpY2VzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGFkZGl0aW9uYWwgc2VydmljZXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2VydmljZShkYXRhOiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGljb25fbmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlfb3JkZXI6IG51bWJlcjtcclxuICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlPzogU2VydmljZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBpZiAoIWRhdGEubmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuaWNvbl9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSWNvbiBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXHJcbiAgICAgICAgaWNvbl9uYW1lOiBkYXRhLmljb25fbmFtZSxcclxuICAgICAgICBkaXNwbGF5X29yZGVyOiBkYXRhLmRpc3BsYXlfb3JkZXIgPz8gMCxcclxuICAgICAgICBpc19hY3RpdmU6IGRhdGEuaXNfYWN0aXZlID8/IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlOiBzZXJ2aWNlIGFzIFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXJ2aWNlKFxyXG4gIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBpY29uX25hbWU/OiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5X29yZGVyPzogbnVtYmVyO1xyXG4gICAgaXNfYWN0aXZlPzogYm9vbGVhbjtcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VydmljZT86IFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICBpZiAoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEubmFtZSA9IGRhdGEubmFtZS50cmltKCk7XHJcbiAgICBpZiAoZGF0YS5pY29uX25hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pY29uX25hbWUgPSBkYXRhLmljb25fbmFtZTtcclxuICAgIGlmIChkYXRhLmRpc3BsYXlfb3JkZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5kaXNwbGF5X29yZGVyID0gZGF0YS5kaXNwbGF5X29yZGVyO1xyXG4gICAgaWYgKGRhdGEuaXNfYWN0aXZlICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaXNfYWN0aXZlID0gZGF0YS5pc19hY3RpdmU7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgc2VydmljZUlkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VydmljZTogc2VydmljZSBhcyBTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZVNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgYSBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXJ2aWNlKHNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdpZCcsIHNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRlbGV0ZVNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWRkaXRpb25hbFNlcnZpY2UoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpY29uX25hbWU6IHN0cmluZztcclxuICBkaXNwbGF5X29yZGVyOiBudW1iZXI7XHJcbiAgcmVxdWlyZXNfcXVhbnRpdHk/OiBib29sZWFuO1xyXG4gIGlzX2FjdGl2ZT86IGJvb2xlYW47XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlPzogQWRkaXRpb25hbFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgaWYgKCFkYXRhLm5hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmljb25fbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ljb24gbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGFkZGl0aW9uYWxTZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxyXG4gICAgICAgIGljb25fbmFtZTogZGF0YS5pY29uX25hbWUsXHJcbiAgICAgICAgZGlzcGxheV9vcmRlcjogZGF0YS5kaXNwbGF5X29yZGVyID8/IDAsXHJcbiAgICAgICAgcmVxdWlyZXNfcXVhbnRpdHk6IGRhdGEucmVxdWlyZXNfcXVhbnRpdHkgPz8gZmFsc2UsXHJcbiAgICAgICAgaXNfYWN0aXZlOiBkYXRhLmlzX2FjdGl2ZSA/PyB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhZGRpdGlvbmFsIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZTogYWRkaXRpb25hbFNlcnZpY2UgYXMgQWRkaXRpb25hbFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlQWRkaXRpb25hbFNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGFkZGl0aW9uYWwgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZGRpdGlvbmFsU2VydmljZShcclxuICBhZGRpdGlvbmFsU2VydmljZUlkOiBzdHJpbmcsXHJcbiAgZGF0YToge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGljb25fbmFtZT86IHN0cmluZztcclxuICAgIGRpc3BsYXlfb3JkZXI/OiBudW1iZXI7XHJcbiAgICByZXF1aXJlc19xdWFudGl0eT86IGJvb2xlYW47XHJcbiAgICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG4gIH1cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZGRpdGlvbmFsU2VydmljZT86IEFkZGl0aW9uYWxTZXJ2aWNlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLm5hbWUgPSBkYXRhLm5hbWUudHJpbSgpO1xyXG4gICAgaWYgKGRhdGEuaWNvbl9uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaWNvbl9uYW1lID0gZGF0YS5pY29uX25hbWU7XHJcbiAgICBpZiAoZGF0YS5kaXNwbGF5X29yZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZGlzcGxheV9vcmRlciA9IGRhdGEuZGlzcGxheV9vcmRlcjtcclxuICAgIGlmIChkYXRhLnJlcXVpcmVzX3F1YW50aXR5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEucmVxdWlyZXNfcXVhbnRpdHkgPSBkYXRhLnJlcXVpcmVzX3F1YW50aXR5O1xyXG4gICAgaWYgKGRhdGEuaXNfYWN0aXZlICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaXNfYWN0aXZlID0gZGF0YS5pc19hY3RpdmU7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBhZGRpdGlvbmFsU2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYWRkaXRpb25hbFNlcnZpY2U6IGFkZGl0aW9uYWxTZXJ2aWNlIGFzIEFkZGl0aW9uYWxTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUFkZGl0aW9uYWxTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBhZGRpdGlvbmFsIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgYW4gYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWRkaXRpb25hbFNlcnZpY2UoYWRkaXRpb25hbFNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFkZGl0aW9uYWwgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlQWRkaXRpb25hbFNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGFkZGl0aW9uYWwgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhZGRpdGlvbmFsIHNlcnZpY2VzIGxpbmtlZCB0byBhIG1haW4gc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VSdWxlcyhzZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2VJZHM/OiBzdHJpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZV9hZGRpdGlvbmFsX3NlcnZpY2VfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdhZGRpdGlvbmFsX3NlcnZpY2VfaWQnKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlIHJ1bGVzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VJZHMgPSAoZGF0YSB8fCBbXSkubWFwKChydWxlOiBhbnkpID0+IHJ1bGUuYWRkaXRpb25hbF9zZXJ2aWNlX2lkKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZUlkcyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlUnVsZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBydWxlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByZWxhdGlvbnNoaXBzIGJldHdlZW4gbWFpbiBzZXJ2aWNlIGFuZCBhZGRpdGlvbmFsIHNlcnZpY2VzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2VydmljZVJ1bGVzKFxyXG4gIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIERlbGV0ZSBleGlzdGluZyBydWxlc1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChkZWxldGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBzZXJ2aWNlIHJ1bGVzOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IG5ldyBydWxlc1xyXG4gICAgaWYgKGFkZGl0aW9uYWxTZXJ2aWNlSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcnVsZXMgPSBhZGRpdGlvbmFsU2VydmljZUlkcy5tYXAoKGFkZGl0aW9uYWxTZXJ2aWNlSWQpID0+ICh7XHJcbiAgICAgICAgc2VydmljZV9pZDogc2VydmljZUlkLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZV9pZDogYWRkaXRpb25hbFNlcnZpY2VJZCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3NlcnZpY2VfYWRkaXRpb25hbF9zZXJ2aWNlX3J1bGVzJylcclxuICAgICAgICAuaW5zZXJ0KHJ1bGVzKTtcclxuXHJcbiAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBzZXJ2aWNlIHJ1bGVzOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlU2VydmljZVJ1bGVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBzZXJ2aWNlIHJ1bGVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBd0NzQiw0TEFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$f87a26__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:f87a26 [app-ssr] (ecmascript) <text/javascript>");
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
    }
];
function AdminSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAdminProfile = async ()=>{
            try {
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$f87a26__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 21
                                    }, this)
                                }, `${item.href}-${index}`, false, {
                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                lineNumber: 129,
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
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/components/AdminSidebar.tsx",
        lineNumber: 128,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$f87a26__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:f87a26 [app-ssr] (ecmascript) <text/javascript>");
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
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$f87a26__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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

//# sourceMappingURL=_5370608b._.js.map