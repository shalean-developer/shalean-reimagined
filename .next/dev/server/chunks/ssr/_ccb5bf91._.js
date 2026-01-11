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
"[project]/app/dashboard/components/DashboardSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardSidebar",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-ssr] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const menuItems = [
    {
        title: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/dashboard'
    },
    {
        title: 'Profile',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        href: '/dashboard/profile'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/dashboard/bookings'
    },
    {
        title: 'Locations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        href: '/dashboard/locations'
    },
    {
        title: 'ShaleanCred',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"],
        href: '/dashboard/shaleancred'
    },
    {
        title: 'Vouchers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/dashboard/vouchers'
    },
    {
        title: 'Refer & Earn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        href: '/dashboard/refer'
    }
];
function DashboardSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        className: "!top-16 !h-[calc(100vh-4rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                        asChild: true,
                                        isActive: isActive,
                                        tooltip: item.title,
                                        size: "lg",
                                        className: `[&>svg]:!size-6 ${isActive ? 'bg-primary-light text-primary' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "!w-6 !h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                            lineNumber: 90,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                className: "border-t border-sidebar-border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "lg",
                    className: "w-full justify-start",
                    onClick: ()=>{
                        // Handle logout - redirect to home for now
                        window.location.href = '/';
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "!w-6 !h-6 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
        lineNumber: 71,
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
"[project]/app/dashboard/data:ca0108 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthenticatedUser",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00da829db98b48f76f8c20deeb0a1e9b7c5c4da4a4":"getAuthenticatedUser"},"app/dashboard/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00da829db98b48f76f8c20deeb0a1e9b7c5c4da4a4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAuthenticatedUser");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBQcm9maWxlVXBkYXRlSW5wdXQgfSBmcm9tICdAL3R5cGVzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25DcmVhdGVJbnB1dCwgTG9jYXRpb25VcGRhdGVJbnB1dCB9IGZyb20gJ0AvdHlwZXMvbG9jYXRpb24nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRVc2VyKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZW1haWw6IHVzZXIuZW1haWwgfHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEF1dGhlbnRpY2F0ZWRVc2VyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCB1c2VyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5ncyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nLFxyXG4gIGZpbHRlcj86ICdhbGwnIHwgJ3VwY29taW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2NhbmNlbGxlZCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IHN0YXR1cyBmaWx0ZXJcclxuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICBpZiAoZmlsdGVyID09PSAndXBjb21pbmcnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQm9va2luZ1N0YXRzKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzdGF0cz86IHtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB1cGNvbWluZzogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBjYW5jZWxsZWQ6IG51bWJlcjtcclxuICAgIHRvdGFsU3BlbnQ6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJyk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHtcclxuICAgICAgdG90YWw6IGRhdGE/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICB1cGNvbWluZzogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ3BlbmRpbmcnIHx8IGIuc3RhdHVzID09PSAnY29uZmlybWVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIGNvbXBsZXRlZDogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBjYW5jZWxsZWQ6IGRhdGE/LmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKS5sZW5ndGggfHwgMCxcclxuICAgICAgdG90YWxTcGVudDogZGF0YVxyXG4gICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcpXHJcbiAgICAgICAgLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi50b3RhbF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByb2ZpbGU/OiBQcm9maWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgcHJvZmlsZSBmcm9tIHByb2ZpbGVzIHRhYmxlXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdwcm9maWxlcycpLnNlbGVjdCgnKicpO1xyXG5cclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVEYXRhLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBxdWVyeS5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIC8vIElmIHByb2ZpbGUgZXhpc3RzLCByZXR1cm4gaXRcclxuICAgIGlmIChwcm9maWxlRGF0YSAmJiAhcHJvZmlsZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2ZpbGU6IHByb2ZpbGVEYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gcHJvZmlsZSBleGlzdHMsIGRlcml2ZSBmcm9tIG1vc3QgcmVjZW50IGJvb2tpbmdcclxuICAgIGxldCBib29raW5nUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9maXJzdF9uYW1lLCBjdXN0b21lcl9sYXN0X25hbWUsIGN1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSk7XHJcblxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIGJvb2tpbmdRdWVyeSA9IGJvb2tpbmdRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdEYXRhLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBib29raW5nUXVlcnkubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nRGF0YSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnTm8gcHJvZmlsZSBvciBib29raW5nIGZvdW5kLiBQbGVhc2UgY3JlYXRlIGEgYm9va2luZyBmaXJzdC4nLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIHByb2ZpbGUgb2JqZWN0IGZyb20gYm9va2luZyBkYXRhXHJcbiAgICBjb25zdCBkZXJpdmVkUHJvZmlsZTogUHJvZmlsZSA9IHtcclxuICAgICAgaWQ6ICcnLCAvLyBXaWxsIGJlIGdlbmVyYXRlZCB3aGVuIHNhdmVkXHJcbiAgICAgIGVtYWlsOiBib29raW5nRGF0YS5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcGhvbmU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX3Bob25lIHx8IG51bGwsXHJcbiAgICAgIGZpcnN0X25hbWU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX2ZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZTogYm9va2luZ0RhdGEuY3VzdG9tZXJfbGFzdF9uYW1lLFxyXG4gICAgICByZWZlcnJhbF9jb2RlOiBudWxsLFxyXG4gICAgICBhdmF0YXJfdXJsOiBudWxsLFxyXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogZGVyaXZlZFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljdHVyZShcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGZpbGVEYXRhOiBzdHJpbmcsIC8vIGJhc2U2NCBlbmNvZGVkIHN0cmluZ1xyXG4gIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgZmlsZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVybD86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBVc2UgYWRtaW4gY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZHMgaWYgc2VydmljZSByb2xlIGtleSBpcyBhdmFpbGFibGVcclxuICAgIC8vIElmIG5vdCBhdmFpbGFibGUsIGZhbGwgYmFjayB0byBhdXRoZW50aWNhdGVkIGNsaWVudCBmb3Igc3RvcmFnZSAoc3RvcmFnZSBwb2xpY2llcyBtYXkgc3RpbGwgd29yaylcclxuICAgIGxldCBzdXBhYmFzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ+KchSBVc2luZyBhZG1pbiBjbGllbnQgZm9yIHN0b3JhZ2UgdXBsb2FkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBTZXJ2aWNlIHJvbGUga2V5IG5vdCBzZXQsIHVzaW5nIGF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZCcpO1xyXG4gICAgICBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxyXG4gICAgY29uc3QgdmFsaWRJbWFnZVR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvd2VicCddO1xyXG4gICAgaWYgKCF2YWxpZEltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGEgSlBFRywgUE5HLCBvciBXZWJQIGltYWdlLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWNvZGUgYmFzZTY0IGRhdGFcclxuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBmaWxlRGF0YS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sICcnKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsICdiYXNlNjQnKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCA1TUIpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNSAqIDEwMjQgKiAxMDI0OyAvLyA1TUIgaW4gYnl0ZXNcclxuICAgIGlmIChidWZmZXIubGVuZ3RoID4gbWF4U2l6ZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGaWxlIHNpemUgdG9vIGxhcmdlLiBQbGVhc2UgdXBsb2FkIGFuIGltYWdlIHNtYWxsZXIgdGhhbiA1TUIuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZSB1c2luZyBlbWFpbCBhbmQgdGltZXN0YW1wXHJcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fCAnanBnJztcclxuICAgIGNvbnN0IHNhbml0aXplZEVtYWlsID0gZW1haWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICdfJyk7XHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke3Nhbml0aXplZEVtYWlsfV8ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VuaXF1ZUZpbGVOYW1lfWA7XHJcblxyXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcclxuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlLXBpY3R1cmVzJylcclxuICAgICAgLnVwbG9hZChmaWxlUGF0aCwgYnVmZmVyLCB7XHJcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGVUeXBlLFxyXG4gICAgICAgIHVwc2VydDogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIFN0b3JhZ2UgdXBsb2FkIGVycm9yOicsIHVwbG9hZEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1cGxvYWRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogdXBsb2FkRXJyb3Iuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIGVycm9yOiB1cGxvYWRFcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RvcmFnZSBSTFMgZXJyb3JzXHJcbiAgICAgICAgaWYgKHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBsb2FkRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ1JMUycpIHx8XHJcbiAgICAgICAgICAgIHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdwb2xpY3knKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBSTFMgcG9saWN5IGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgcG9saWNpZXMgaW4gU3VwYWJhc2UgU3RvcmFnZS4gVGhlIGJ1Y2tldCBuZWVkcyBwb2xpY2llcyB0aGF0IGFsbG93IGF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gdXBsb2FkIGZpbGVzLicsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBidWNrZXQgZG9lc24ndCBleGlzdCwgcmV0dXJuIGhlbHBmdWwgZXJyb3JcclxuICAgICAgICBpZiAodXBsb2FkRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykgfHwgdXBsb2FkRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQnVja2V0JykpIHtcclxuICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICAgIGVycm9yOiAnU3RvcmFnZSBidWNrZXQgbm90IGNvbmZpZ3VyZWQuIFBsZWFzZSBjcmVhdGUgYSBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgaW4gU3VwYWJhc2UgU3RvcmFnZS4nLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICBlcnJvcjogdXBsb2FkRXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwbG9hZCBmaWxlJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgLy8gR2V0IHB1YmxpYyBVUkxcclxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogdXJsRGF0YS5wdWJsaWNVcmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBsb2FkUHJvZmlsZVBpY3R1cmU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBsb2FkIHByb2ZpbGUgcGljdHVyZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVQaWN0dXJlKGVtYWlsOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEV4dHJhY3QgZmlsZSBwYXRoIGZyb20gVVJMXHJcbiAgICAvLyBVUkwgZm9ybWF0OiBodHRwczovL1twcm9qZWN0XS5zdXBhYmFzZS5jby9zdG9yYWdlL3YxL29iamVjdC9wdWJsaWMvcHJvZmlsZS1waWN0dXJlcy9hdmF0YXJzL2ZpbGVuYW1lLmpwZ1xyXG4gICAgY29uc3QgdXJsUGF0dGVybiA9IC9cXC9wcm9maWxlLXBpY3R1cmVzXFwvKC4rKSQvO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhdmF0YXJVcmwubWF0Y2godXJsUGF0dGVybik7XHJcbiAgICBcclxuICAgIGlmICghbWF0Y2ggfHwgIW1hdGNoWzFdKSB7XHJcbiAgICAgIC8vIElmIFVSTCBkb2Vzbid0IG1hdGNoIGV4cGVjdGVkIHBhdHRlcm4sIHRyeSBhbHRlcm5hdGl2ZSBwYXJzaW5nXHJcbiAgICAgIGNvbnN0IHVybFBhcnRzID0gYXZhdGFyVXJsLnNwbGl0KCcvYXZhdGFycy8nKTtcclxuICAgICAgaWYgKHVybFBhcnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAvLyBJZiB3ZSBjYW4ndCBwYXJzZSB0aGUgVVJMLCBqdXN0IHJldHVybiBzdWNjZXNzICh0aGUgZmlsZSBtaWdodCBhbHJlYWR5IGJlIGRlbGV0ZWQpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgcGFyc2UgYXZhdGFyIFVSTCBmb3IgZGVsZXRpb246JywgYXZhdGFyVXJsKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VybFBhcnRzWzFdLnNwbGl0KCc/JylbMF19YDtcclxuICAgICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgICAgLnJlbW92ZShbZmlsZVBhdGhdKTtcclxuXHJcbiAgICAgIGlmIChkZWxldGVFcnJvciAmJiAhZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBmaWxlOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGRlbGV0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZVBhdGggPSBtYXRjaFsxXS5zcGxpdCgnPycpWzBdOyAvLyBSZW1vdmUgcXVlcnkgcGFyYW1ldGVycyBpZiBhbnlcclxuXHJcbiAgICAvLyBEZWxldGUgZnJvbSBzdG9yYWdlXHJcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgIC5yZW1vdmUoW2ZpbGVQYXRoXSk7XHJcblxyXG4gICAgaWYgKGRlbGV0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGZpbGU6JywgZGVsZXRlRXJyb3IpO1xyXG4gICAgICAvLyBEb24ndCBmYWlsIGlmIGZpbGUgZG9lc24ndCBleGlzdFxyXG4gICAgICBpZiAoZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykgfHwgZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnTm8gc3VjaCBmaWxlJykpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVQcm9maWxlUGljdHVyZTonLCBlcnJvcik7XHJcbiAgICAvLyBEb24ndCBmYWlsIGNvbXBsZXRlbHkgLSB0aGUgVVJMIGluIGRhdGFiYXNlIHdpbGwgYmUgcmVtb3ZlZCBhbnl3YXlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBkYXRhOiBQcm9maWxlVXBkYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcm9maWxlPzogUHJvZmlsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBGaXJzdCwgdmVyaWZ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgbWF0Y2hlcyB0aGUgZW1haWxcclxuICAgIGNvbnN0IGF1dGhTdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgYXV0aFN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgXHJcbiAgICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBlbWFpbCBwYXJhbWV0ZXIgbWF0Y2hlcyB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgZW1haWxcclxuICAgIC8vIFRoaXMgZW5zdXJlcyB1c2VycyBjYW4gb25seSB1cGRhdGUgdGhlaXIgb3duIHByb2ZpbGVcclxuICAgIGlmICh1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpICE9PSBlbWFpbC50b0xvd2VyQ2FzZSgpICYmIHVzZXIuZW1haWw/LnRvTG93ZXJDYXNlKCkgIT09IGRhdGEuZW1haWw/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkOiBZb3UgY2FuIG9ubHkgdXBkYXRlIHlvdXIgb3duIHByb2ZpbGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUxXQVlTIHVzZSBhZG1pbiBjbGllbnQgZm9yIHByb2ZpbGUgb3BlcmF0aW9ucyAtIGl0IGJ5cGFzc2VzIFJMUyBjb21wbGV0ZWx5XHJcbiAgICAvLyBUaGlzIGlzIFJFUVVJUkVEIC0gd2UgY2Fubm90IHVzZSBhdXRoZW50aWNhdGVkIGNsaWVudCBhcyBpdCBtYXkgc3RpbGwgY2hlY2sgUkxTIHBvbGljaWVzXHJcbiAgICBsZXQgc3VwYWJhc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgVXNpbmcgYWRtaW4gY2xpZW50IGZvciBwcm9maWxlIG9wZXJhdGlvbnMnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIERvIE5PVCBmYWxsIGJhY2sgdG8gYXV0aGVudGljYXRlZCBjbGllbnQgLSBpdCB3aWxsIGNhdXNlIFJMUyBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcign4p2MIEZhaWxlZCB0byBjcmVhdGUgYWRtaW4gY2xpZW50OicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ1NVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaXMgbm90IHNldC4gVGhpcyBpcyBSRVFVSVJFRCBmb3IgcHJvZmlsZSBvcGVyYXRpb25zLiBQbGVhc2UgYWRkIGl0IHRvIHlvdXIgLmVudi5sb2NhbCBmaWxlLiBHZXQgaXQgZnJvbTogU3VwYWJhc2UgRGFzaGJvYXJkIOKGkiBTZXR0aW5ncyDihpIgQVBJIOKGkiBzZXJ2aWNlX3JvbGUga2V5IChzZWNyZXQpJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IHdlIGhhdmUgYSB2YWxpZCBjbGllbnQgKHNob3VsZCBuZXZlciBoYXBwZW4gZHVlIHRvIGVycm9yIGFib3ZlLCBidXQgZG91YmxlLWNoZWNrKVxyXG4gICAgaWYgKCFzdXBhYmFzZSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBkYXRhYmFzZSBjbGllbnQuIFBsZWFzZSBjaGVjayB5b3VyIFNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaW4gLmVudi5sb2NhbCcgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcclxuICAgIGlmICghZGF0YS5maXJzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5sYXN0X25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuZW1haWw/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChkYXRhLmVtYWlsKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGVtYWlsIGZvcm1hdCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIG5ldyBlbWFpbCAoaWYgY2hhbmdlZCkgc3RpbGwgbWF0Y2hlcyB0aGUgYXV0aGVudGljYXRlZCB1c2VyXHJcbiAgICBpZiAoZGF0YS5lbWFpbC50b0xvd2VyQ2FzZSgpICE9PSB1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIC8vIEFsbG93IGVtYWlsIGNoYW5nZSBvbmx5IGlmIGl0J3MgdGhlIHNhbWUgdXNlciAoY2FzZSBpbnNlbnNpdGl2ZSBjaGVjayBhYm92ZSBwYXNzZWQpXHJcbiAgICAgIC8vIEJ1dCB3ZSBzaG91bGQgdmVyaWZ5IGl0J3MgYSB2YWxpZCBjaGFuZ2UgKHVzZXIgdXBkYXRpbmcgdGhlaXIgb3duIGVtYWlsKVxyXG4gICAgICBpZiAoZGF0YS5lbWFpbC50b0xvd2VyQ2FzZSgpICE9PSBlbWFpbC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgLy8gRW1haWwgaXMgYmVpbmcgY2hhbmdlZCAtIHZlcmlmeSBpdCdzIHN0aWxsIHRoZSBzYW1lIHVzZXJcclxuICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBhbGxvdyBpdCBidXQgaW4gcHJvZHVjdGlvbiB5b3UgbWlnaHQgd2FudCB0byByZXF1aXJlIGVtYWlsIHZlcmlmaWNhdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJvZmlsZSBleGlzdHNcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIENoZWNraW5nIGlmIHByb2ZpbGUgZXhpc3RzIGZvciBlbWFpbDonLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBVc2luZyBjbGllbnQgdHlwZTonLCBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZID8gJ0FETUlOIChzZXJ2aWNlIHJvbGUpJyA6ICdBVVRIRU5USUNBVEVEIChhbm9uIGtleSknKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1Byb2ZpbGUsIGVycm9yOiBzZWxlY3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcbiAgICBcclxuICAgIGlmIChzZWxlY3RFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3Igc2VsZWN0aW5nIHByb2ZpbGU6Jywgc2VsZWN0RXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gY2hlY2sgcHJvZmlsZTogJHtzZWxlY3RFcnJvci5tZXNzYWdlfWAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ+KchSBQcm9maWxlIGNoZWNrIHJlc3VsdDonLCBleGlzdGluZ1Byb2ZpbGUgPyAnUHJvZmlsZSBleGlzdHMgKHdpbGwgVVBEQVRFKScgOiAnUHJvZmlsZSBkb2VzIG5vdCBleGlzdCAod2lsbCBJTlNFUlQpJyk7XHJcblxyXG4gICAgLy8gSWYgYXZhdGFyX3VybCBpcyBiZWluZyByZW1vdmVkLCBkZWxldGUgdGhlIG9sZCBmaWxlXHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlPy5hdmF0YXJfdXJsICYmIGRhdGEuYXZhdGFyX3VybCA9PT0gbnVsbCkge1xyXG4gICAgICBhd2FpdCBkZWxldGVQcm9maWxlUGljdHVyZShlbWFpbCwgZXhpc3RpbmdQcm9maWxlLmF2YXRhcl91cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIC8vIElmIGVtYWlsIGNoYW5nZWQsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGNhcmVmdWxseVxyXG4gICAgICBpZiAoZGF0YS5lbWFpbCAhPT0gZW1haWwpIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBuZXcgZW1haWwgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGVtYWlsQ2hlY2sgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIGRhdGEuZW1haWwpXHJcbiAgICAgICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGVtYWlsQ2hlY2spIHtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGFscmVhZHkgZXhpc3RzJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUudHJpbSgpLFxyXG4gICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwudHJpbSgpLFxyXG4gICAgICAgICAgcGhvbmU6IGRhdGEucGhvbmU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGF2YXRhcl91cmw6IHVuZGVmaW5lZCBtZWFucyBkb24ndCBjaGFuZ2UsIG51bGwgbWVhbnMgcmVtb3ZlLCBzdHJpbmcgbWVhbnMgc2V0XHJcbiAgICAgIGlmIChkYXRhLmF2YXRhcl91cmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHVwZGF0ZURhdGEuYXZhdGFyX3VybCA9IGRhdGEuYXZhdGFyX3VybCA9PT0gbnVsbCA/IG51bGwgOiBkYXRhLmF2YXRhcl91cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OdIEF0dGVtcHRpbmcgdG8gVVBEQVRFIHByb2ZpbGUgd2l0aCBkYXRhOicsIHVwZGF0ZURhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBVcGRhdGUgV0hFUkUgZW1haWwgPScsIGVtYWlsKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZFByb2ZpbGUsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm9yIHVwZGF0aW5nIHByb2ZpbGU6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBVcGRhdGUgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBjb2RlOiB1cGRhdGVFcnJvci5jb2RlLFxyXG4gICAgICAgICAgbWVzc2FnZTogdXBkYXRlRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGRldGFpbHM6IHVwZGF0ZUVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICBoaW50OiB1cGRhdGVFcnJvci5oaW50LFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogKHVwZGF0ZUVycm9yIGFzIGFueSkuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIHN0YXR1czogKHVwZGF0ZUVycm9yIGFzIGFueSkuc3RhdHVzLFxyXG4gICAgICAgICAgc2VydmljZVJvbGVLZXlTZXQ6ICEhcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgUkxTIGVycm9ycyBzcGVjaWZpY2FsbHlcclxuICAgICAgICBpZiAodXBkYXRlRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICB1cGRhdGVFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIHVwZGF0ZUVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IGluc2VydERhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE9ubHkgc2V0IGF2YXRhcl91cmwgaWYgaXQncyBwcm92aWRlZFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsKSB7XHJcbiAgICAgICAgaW5zZXJ0RGF0YS5hdmF0YXJfdXJsID0gZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGE6IG5ld1Byb2ZpbGUsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoaW5zZXJ0RGF0YSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9maWxlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgSW5zZXJ0IGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogaW5zZXJ0RXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGluc2VydEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiBpbnNlcnRFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogaW5zZXJ0RXJyb3IuaGludCxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHVuaXF1ZSBjb25zdHJhaW50IHZpb2xhdGlvblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBSTFMgZXJyb3JcclxuICAgICAgICBpZiAoaW5zZXJ0RXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICBpbnNlcnRFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIGluc2VydEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiBpbnNlcnRFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IG5ld1Byb2ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUN1c3RvbWVyUHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyTG9jYXRpb25zKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbnM/OiBMb2NhdGlvbltdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2lzX2RlZmF1bHQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IGZvciBlbWFpbC9waG9uZSBsb29rdXBcclxuICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgfSBlbHNlIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb25zOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyTG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGxvY2F0aW9ucycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBsb2NhdGlvbkRhdGE6IExvY2F0aW9uQ3JlYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbj86IExvY2F0aW9uO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcclxuICAgIGlmICghbG9jYXRpb25EYXRhLm5pY2tuYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmlja25hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWxvY2F0aW9uRGF0YS5hZGRyZXNzPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQWRkcmVzcyBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLnN1YnVyYj8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1N1YnVyYiBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLmNpdHk/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDaXR5IGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHNldHRpbmcgYXMgZGVmYXVsdCwgdW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmlzX2RlZmF1bHQpIHtcclxuICAgICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoZW1haWwgJiYgcGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgdXBkYXRlUXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBuZXdMb2NhdGlvbiwgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyX3Bob25lOiBwaG9uZSB8fCBudWxsLFxyXG4gICAgICAgIG5pY2tuYW1lOiBsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpLFxyXG4gICAgICAgIGFkZHJlc3M6IGxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKSxcclxuICAgICAgICBhcHRfdW5pdDogbG9jYXRpb25EYXRhLmFwdF91bml0Py50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICBzdWJ1cmI6IGxvY2F0aW9uRGF0YS5zdWJ1cmIudHJpbSgpLFxyXG4gICAgICAgIGNpdHk6IGxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKSxcclxuICAgICAgICBwb3N0YWxfY29kZTogbG9jYXRpb25EYXRhLnBvc3RhbF9jb2RlPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICBpc19kZWZhdWx0OiBsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCB8fCBmYWxzZSxcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgbG9jYXRpb246JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsb2NhdGlvbjogbmV3TG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24oXHJcbiAgbG9jYXRpb25JZDogc3RyaW5nLFxyXG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb25VcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uPzogTG9jYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dCBpZiBwcm92aWRlZFxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5uaWNrbmFtZSAhPT0gdW5kZWZpbmVkICYmICFsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05pY2tuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBZGRyZXNzIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5zdWJ1cmIgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLnN1YnVyYi50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU3VidXJiIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5jaXR5ICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDaXR5IGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGxvY2F0aW9uIHRvIGNoZWNrIGN1c3RvbWVyIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1cnJlbnRMb2NhdGlvbiwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfcGhvbmUnKVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFjdXJyZW50TG9jYXRpb24pIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTG9jYXRpb24gbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHNldHRpbmcgYXMgZGVmYXVsdCwgdW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmlzX2RlZmF1bHQpIHtcclxuICAgICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsICYmIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7Y3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke2N1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZX1gKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEb24ndCB1bnNldCB0aGUgY3VycmVudCBsb2NhdGlvblxyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm5lcSgnaWQnLCBsb2NhdGlvbklkKTtcclxuXHJcbiAgICAgIGF3YWl0IHVwZGF0ZVF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHVwZGF0ZSBvYmplY3Qgd2l0aCBvbmx5IHByb3ZpZGVkIGZpZWxkc1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge1xyXG4gICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhdGlvbkRhdGEubmlja25hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLm5pY2tuYW1lID0gbG9jYXRpb25EYXRhLm5pY2tuYW1lLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuYWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuYWRkcmVzcyA9IGxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuYXB0X3VuaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLmFwdF91bml0ID0gbG9jYXRpb25EYXRhLmFwdF91bml0Py50cmltKCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuc3VidXJiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5zdWJ1cmIgPSBsb2NhdGlvbkRhdGEuc3VidXJiLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuY2l0eSA9IGxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLnBvc3RhbF9jb2RlID0gbG9jYXRpb25EYXRhLnBvc3RhbF9jb2RlPy50cmltKCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuaXNfZGVmYXVsdCA9IGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZExvY2F0aW9uLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsb2NhdGlvbjonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiB1cGRhdGVkTG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBsb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0RGVmYXVsdExvY2F0aW9uKFxyXG4gIGxvY2F0aW9uSWQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgbG9jYXRpb24/OiBMb2NhdGlvbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGxvY2F0aW9uIHRvIHZlcmlmeSBvd25lcnNoaXBcclxuICAgIGNvbnN0IHsgZGF0YTogY3VycmVudExvY2F0aW9uLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMb2NhdGlvbiBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgY29uc3QgaXNPd25lciA9IFxyXG4gICAgICBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwgPT09IGVtYWlsIHx8XHJcbiAgICAgIChwaG9uZSAmJiBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUgPT09IHBob25lKTtcclxuXHJcbiAgICBpZiAoIWlzT3duZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVuc2V0IGFsbCBvdGhlciBkZWZhdWx0cyBmb3IgdGhpcyBjdXN0b21lclxyXG4gICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZW1haWwgJiYgcGhvbmUpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfZW1haWwnLCBlbWFpbCk7XHJcbiAgICB9IGVsc2UgaWYgKHBob25lKSB7XHJcbiAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX3Bob25lJywgcGhvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvbid0IHVuc2V0IHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm5lcSgnaWQnLCBsb2NhdGlvbklkKTtcclxuXHJcbiAgICBhd2FpdCB1cGRhdGVRdWVyeTtcclxuXHJcbiAgICAvLyBTZXQgdGhpcyBsb2NhdGlvbiBhcyBkZWZhdWx0XHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRMb2NhdGlvbiwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IGlzX2RlZmF1bHQ6IHRydWUgfSlcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgZGVmYXVsdCBsb2NhdGlvbjonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiB1cGRhdGVkTG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2V0RGVmYXVsdExvY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNldCBkZWZhdWx0IGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVSZWZlcnJhbENvZGUoXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHJlZmVycmFsQ29kZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHByb2ZpbGUgZXhpc3RzIGFuZCBoYXMgYSByZWZlcnJhbCBjb2RlXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGUsIGVycm9yOiBwcm9maWxlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChwcm9maWxlRXJyb3IgJiYgcHJvZmlsZUVycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZTonLCBwcm9maWxlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHByb2ZpbGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgcHJvZmlsZSBleGlzdHMgYW5kIGhhcyBhIHJlZmVycmFsIGNvZGUsIHJldHVybiBpdFxyXG4gICAgaWYgKHByb2ZpbGU/LnJlZmVycmFsX2NvZGUpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiBwcm9maWxlLnJlZmVycmFsX2NvZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIG5ldyByZWZlcnJhbCBjb2RlXHJcbiAgICAvLyBUcnkgdXNpbmcgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uIGZpcnN0LCBidXQgZmFsbGJhY2sgdG8gY2xpZW50LXNpZGUgZ2VuZXJhdGlvblxyXG4gICAgbGV0IGdlbmVyYXRlZENvZGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGRiQ29kZSwgZXJyb3I6IGNvZGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAucnBjKCdnZW5lcmF0ZV9yZWZlcnJhbF9jb2RlJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWNvZGVFcnJvciAmJiBkYkNvZGUpIHtcclxuICAgICAgICBnZW5lcmF0ZWRDb2RlID0gZGJDb2RlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChycGNFcnJvcikge1xyXG4gICAgICAvLyBSUEMgZnVuY3Rpb24gbWlnaHQgbm90IGV4aXN0IHlldCwgdGhhdCdzIG9rYXlcclxuICAgICAgY29uc29sZS5sb2coJ1JQQyBmdW5jdGlvbiBub3QgYXZhaWxhYmxlLCB1c2luZyBmYWxsYmFjaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZ2VuZXJhdGVkQ29kZSkge1xyXG4gICAgICAvLyBGYWxsYmFjazogZ2VuZXJhdGUgY29kZSBjbGllbnQtc2lkZSBzdHlsZVxyXG4gICAgICBjb25zdCBmYWxsYmFja0NvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoZWNrIGlmIGZhbGxiYWNrIGNvZGUgZXhpc3RzLCByZXRyeSBpZiBpdCBkb2VzXHJcbiAgICAgIGxldCBmaW5hbENvZGUgPSBmYWxsYmFja0NvZGU7XHJcbiAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcbiAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNTtcclxuXHJcbiAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBleGlzdGluZyB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgICAgICAuZXEoJ3JlZmVycmFsX2NvZGUnLCBmaW5hbENvZGUpXHJcbiAgICAgICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgYnJlYWs7IC8vIENvZGUgaXMgdW5pcXVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBjb2RlXHJcbiAgICAgICAgZmluYWxDb2RlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIG9yIGluc2VydCBwcm9maWxlIHdpdGggcmVmZXJyYWwgY29kZVxyXG4gICAgICAvLyBGaXJzdCwgdHJ5IHRvIHVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZScpXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgICAgbGV0IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByb2ZpbGVcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWQsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgcmVmZXJyYWxfY29kZTogZmluYWxDb2RlLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVmZXJyYWwgY29kZTonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlZFByb2ZpbGUgPSB1cGRhdGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEluc2VydCBuZXcgcHJvZmlsZSB3aXRoIHJlZmVycmFsIGNvZGVcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICByZWZlcnJhbF9jb2RlOiBmaW5hbENvZGUsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGVtYWlsLnNwbGl0KCdAJylbMF0sXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVmZXJyYWwgY29kZTonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlZFByb2ZpbGUgPSBpbnNlcnRlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiB1cGRhdGVkUHJvZmlsZT8ucmVmZXJyYWxfY29kZSB8fCBmaW5hbENvZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIGdlbmVyYXRlZCBjb2RlIGZyb20gZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIC8vIFVwZGF0ZSBvciBpbnNlcnQgcHJvZmlsZSB3aXRoIGdlbmVyYXRlZCBjb2RlXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nUHJvZmlsZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZScpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgbGV0IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZSkge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWQsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcmVmZXJyYWxfY29kZTogZ2VuZXJhdGVkQ29kZSxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyByZWZlcnJhbCBjb2RlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkUHJvZmlsZSA9IHVwZGF0ZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJbnNlcnQgbmV3IHByb2ZpbGUgd2l0aCByZWZlcnJhbCBjb2RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogaW5zZXJ0ZWQsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICByZWZlcnJhbF9jb2RlOiBnZW5lcmF0ZWRDb2RlLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogZW1haWwuc3BsaXQoJ0AnKVswXSxcclxuICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZWZlcnJhbCBjb2RlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkUHJvZmlsZSA9IGluc2VydGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHJlZmVycmFsQ29kZTogdXBkYXRlZFByb2ZpbGU/LnJlZmVycmFsX2NvZGUgfHwgZ2VuZXJhdGVkQ29kZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRPckNyZWF0ZVJlZmVycmFsQ29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRSZWZlcnJhbEludml0ZXMoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBpbnZpdGVFbWFpbHM6IHN0cmluZ1tdLFxyXG4gIHJlZmVycmFsQ29kZTogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGVtYWlsIGFkZHJlc3Nlc1xyXG4gICAgY29uc3QgdmFsaWRFbWFpbHMgPSBpbnZpdGVFbWFpbHNcclxuICAgICAgLm1hcCgoZSkgPT4gZS50cmltKCkpXHJcbiAgICAgIC5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHZhbGlkRW1haWxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdObyB2YWxpZCBlbWFpbCBhZGRyZXNzZXMgcHJvdmlkZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHJlZmVycmFsIHJlY29yZHMgZm9yIHRyYWNraW5nXHJcbiAgICBjb25zdCByZWZlcnJhbFJlY29yZHMgPSB2YWxpZEVtYWlscy5tYXAoKHJlZmVycmVkRW1haWwpID0+ICh7XHJcbiAgICAgIHJlZmVycmVyX2VtYWlsOiBlbWFpbCxcclxuICAgICAgcmVmZXJyZWRfZW1haWw6IHJlZmVycmVkRW1haWwsXHJcbiAgICAgIHJlZmVycmFsX2NvZGU6IHJlZmVycmFsQ29kZSxcclxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdyZWZlcnJhbHMnKVxyXG4gICAgICAuaW5zZXJ0KHJlZmVycmFsUmVjb3Jkcyk7XHJcblxyXG4gICAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlZmVycmFsIHJlY29yZHM6JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICAvLyBDb250aW51ZSBldmVuIGlmIGluc2VydCBmYWlscyAtIHdlIHN0aWxsIHdhbnQgdG8gc2VuZCBlbWFpbHNcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSByZWZlcnJhbCBsaW5rXHJcbiAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHBzOi8vc2hhbGVhbi5jby56YSc7XHJcbiAgICBjb25zdCByZWZlcnJhbExpbmsgPSBgJHtiYXNlVXJsfS9ib29raW5nL2RldGFpbHM/cmVmPSR7cmVmZXJyYWxDb2RlfWA7XHJcblxyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGFjdHVhbCBlbWFpbCBzZW5kaW5nIHVzaW5nIHlvdXIgZW1haWwgc2VydmljZSAoUmVzZW5kLCBTZW5kR3JpZCwgZXRjLilcclxuICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3QgbG9nIHRoZSBlbWFpbHMgdGhhdCB3b3VsZCBiZSBzZW50XHJcbiAgICBjb25zb2xlLmxvZygnUmVmZXJyYWwgaW52aXRlcyB0byBzZW5kOicsIHtcclxuICAgICAgZnJvbTogZW1haWwsXHJcbiAgICAgIHRvOiB2YWxpZEVtYWlscyxcclxuICAgICAgcmVmZXJyYWxDb2RlLFxyXG4gICAgICByZWZlcnJhbExpbmssXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbiBhIHJlYWwgaW1wbGVtZW50YXRpb24sIHlvdSB3b3VsZCBzZW5kIGVtYWlscyBoZXJlXHJcbiAgICAvLyBFeGFtcGxlIHdpdGggUmVzZW5kOlxyXG4gICAgLy8gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgIC8vICAgZnJvbTogJ1NoYWxlYW4gPG5vcmVwbHlAc2hhbGVhbi5jby56YT4nLFxyXG4gICAgLy8gICB0bzogdmFsaWRFbWFpbHMsXHJcbiAgICAvLyAgIHN1YmplY3Q6ICdZb3VcXCd2ZSBiZWVuIGludml0ZWQgdG8gdHJ5IFNoYWxlYW4gQ2xlYW5pbmcgU2VydmljZXMhJyxcclxuICAgIC8vICAgaHRtbDogYDxwPllvdXIgZnJpZW5kIGhhcyBpbnZpdGVkIHlvdSB0byB0cnkgU2hhbGVhbi4gVXNlIGNvZGUgJHtyZWZlcnJhbENvZGV9IHRvIGdldCBSMTUwIG9mZiB5b3VyIGZpcnN0IGJvb2tpbmchPC9wPjxwPjxhIGhyZWY9XCIke3JlZmVycmFsTGlua31cIj5Cb29rIE5vdzwvYT48L3A+YCxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlbnQ6IHZhbGlkRW1haWxzLmxlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzZW5kUmVmZXJyYWxJbnZpdGVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNlbmQgaW52aXRlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZmVycmFsU3RhdHMoXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxSZWZlcnJhbHM6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlZFJlZmVycmFsczogbnVtYmVyO1xyXG4gICAgcGVuZGluZ1Jld2FyZHM6IG51bWJlcjtcclxuICAgIHRvdGFsUmV3YXJkczogbnVtYmVyO1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZmVycmFscywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdyZWZlcnJhbHMnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHJlZmVycmVyX3Jld2FyZF9hbW91bnQsIHJlZmVycmVyX3Jld2FyZF9zdGF0dXMnKVxyXG4gICAgICAuZXEoJ3JlZmVycmVyX2VtYWlsJywgZW1haWwpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZWZlcnJhbCBzdGF0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXRzID0ge1xyXG4gICAgICB0b3RhbFJlZmVycmFsczogcmVmZXJyYWxzPy5sZW5ndGggfHwgMCxcclxuICAgICAgY29tcGxldGVkUmVmZXJyYWxzOlxyXG4gICAgICAgIHJlZmVycmFscz8uZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBwZW5kaW5nUmV3YXJkczpcclxuICAgICAgICByZWZlcnJhbHM/LmZpbHRlcigocikgPT4gci5yZWZlcnJlcl9yZXdhcmRfc3RhdHVzID09PSAncGVuZGluZycpLmxlbmd0aCB8fCAwLFxyXG4gICAgICB0b3RhbFJld2FyZHM6XHJcbiAgICAgICAgcmVmZXJyYWxzXHJcbiAgICAgICAgICA/LmZpbHRlcigocikgPT4gci5yZWZlcnJlcl9yZXdhcmRfc3RhdHVzID09PSAnY3JlZGl0ZWQnKVxyXG4gICAgICAgICAgLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyAoci5yZWZlcnJlcl9yZXdhcmRfYW1vdW50IHx8IDApLCAwKSB8fCAwLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzdGF0cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZWZlcnJhbFN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJlZmVycmFsIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIGNyZWRpdCBwdXJjaGFzZSB3aXRoIFBheXN0YWNrXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdFB1cmNoYXNlKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgYW1vdW50OiBudW1iZXIsXHJcbiAgcGF5bWVudE1ldGhvZDogJ2NyZWRpdF9jYXJkJyB8ICdlZnQnXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYXV0aG9yaXphdGlvblVybD86IHN0cmluZztcclxuICByZWZlcmVuY2U/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKGFtb3VudCA8IDIwIHx8IGFtb3VudCA+IDUwMDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ0Ftb3VudCBtdXN0IGJlIGJldHdlZW4gUjIwIGFuZCBSNTAwMCcsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgcmVmZXJlbmNlIGZvciB0aGlzIGNyZWRpdCBwdXJjaGFzZVxyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gYENSRURJVF8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpfWA7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgcGVuZGluZyBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEdldCBvciBjcmVhdGUgcHJvZmlsZVxyXG4gICAgbGV0IHsgZGF0YTogcHJvZmlsZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXByb2ZpbGUpIHtcclxuICAgICAgLy8gQ3JlYXRlIGEgYmFzaWMgcHJvZmlsZSBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbmV3UHJvZmlsZSwgZXJyb3I6IGNyZWF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIGNyZWRpdF9iYWxhbmNlOiAwLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0X25hbWU6ICcnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoY3JlYXRlRXJyb3IgfHwgIW5ld1Byb2ZpbGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZmlsZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBwcm9maWxlID0gbmV3UHJvZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgcGVuZGluZyBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IHsgZXJyb3I6IHRyYW5zYWN0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjcmVkaXRfdHJhbnNhY3Rpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgcHJvZmlsZV9pZDogcHJvZmlsZS5pZCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiAncHVyY2hhc2UnLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICBiYWxhbmNlX2JlZm9yZTogcHJvZmlsZS5jcmVkaXRfYmFsYW5jZSB8fCAwLFxyXG4gICAgICAgIGJhbGFuY2VfYWZ0ZXI6IHByb2ZpbGUuY3JlZGl0X2JhbGFuY2UgfHwgMCwgLy8gV29uJ3QgdXBkYXRlIHVudGlsIHBheW1lbnQgc3VjY2VlZHNcclxuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHJlZmVyZW5jZSxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUHVyY2hhc2Ugb2YgUiR7YW1vdW50fSBTaGFsZWFuQ3JlZGAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0cmFuc2FjdGlvbkVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNyZWRpdCB0cmFuc2FjdGlvbjonLCB0cmFuc2FjdGlvbkVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gcmVjb3JkJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIFBheXN0YWNrIHBheW1lbnRcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGF5c3RhY2svaW5pdGlhbGl6ZScsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIHJlZmVyZW5jZSxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogJ2NyZWRpdF9wdXJjaGFzZScsXHJcbiAgICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLmVycm9yIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXltZW50RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnREYXRhLnN0YXR1cykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBwYXltZW50RGF0YS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50RGF0YS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxyXG4gICAgICByZWZlcmVuY2U6IHBheW1lbnREYXRhLmRhdGEucmVmZXJlbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNyZWRpdCBwdXJjaGFzZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlclJlZGVtcHRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdm91Y2hlcl9jb2RlOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgcmVkZWVtZWRfYXQ6IHN0cmluZztcclxuICBib29raW5nX2lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkZWVtVm91Y2hlcihcclxuICBjb2RlOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFtb3VudD86IG51bWJlcjtcclxuICBuZXdCYWxhbmNlPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gdG8gcmVkZWVtIHRoZSB2b3VjaGVyXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ3JlZGVlbV92b3VjaGVyJywge1xyXG4gICAgICBwX2NvZGU6IGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIHBfZW1haWw6IGVtYWlsLnRyaW0oKSxcclxuICAgICAgcF9waG9uZTogcGhvbmU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZGVlbWluZyB2b3VjaGVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHJlZGVlbSB2b3VjaGVyJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgcmVzdWx0IGZyb20gdGhlIGZ1bmN0aW9uIChoYW5kbGUgYm90aCBvYmplY3QgYW5kIHN0cmluZyBKU09OQilcclxuICAgIGxldCByZXN1bHQgPSBkYXRhO1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHZvdWNoZXIgcmVkZW1wdGlvbiByZXN1bHQ6JywgcGFyc2VFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlIGZyb20gc2VydmVyJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiAnc3VjY2VzcycgaW4gcmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yIHx8ICdGYWlsZWQgdG8gcmVkZWVtIHZvdWNoZXInLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBhbW91bnQ6IHJlc3VsdC5hbW91bnQsXHJcbiAgICAgICAgbmV3QmFsYW5jZTogcmVzdWx0Lm5ld19iYWxhbmNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcmVkZWVtVm91Y2hlcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byByZWRlZW0gdm91Y2hlcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZvdWNoZXJSZWRlbXB0aW9ucyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcmVkZW1wdGlvbnM/OiBWb3VjaGVyUmVkZW1wdGlvbltdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ZvdWNoZXJfcmVkZW1wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdm91Y2hlcl9jb2RlLCBhbW91bnQsIHJlZGVlbWVkX2F0LCBib29raW5nX2lkJylcclxuICAgICAgLm9yZGVyKCdyZWRlZW1lZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBmb3IgZW1haWwvcGhvbmUgbG9va3VwXHJcbiAgICAvLyBQcmlvcml0aXplIGVtYWlsIGFzIGl0J3MgdGhlIHByaW1hcnkgaWRlbnRpZmllciB0byBwcmV2ZW50IGNyb3NzLWFjY291bnQgdmlzaWJpbGl0eVxyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgICAvLyBJZiBwaG9uZSBpcyBhbHNvIHByb3ZpZGVkLCB3ZSBjYW4gb3B0aW9uYWxseSBmaWx0ZXIgYnkgYm90aCBmb3IgZXh0cmEgc2VjdXJpdHlcclxuICAgICAgLy8gYnV0IGVtYWlsIGFsb25lIHNob3VsZCBiZSBzdWZmaWNpZW50IHNpbmNlIGl0J3MgdW5pcXVlXHJcbiAgICB9IGVsc2UgaWYgKHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3Bob25lJywgcGhvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgb3IgcGhvbmUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZvdWNoZXIgcmVkZW1wdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFuc2Zvcm0gdGhlIGRhdGEgdG8gbWF0Y2ggdGhlIGludGVyZmFjZVxyXG4gICAgY29uc3QgcmVkZW1wdGlvbnM6IFZvdWNoZXJSZWRlbXB0aW9uW10gPSAoZGF0YSB8fCBbXSkubWFwKChyZWRlbXB0aW9uKSA9PiAoe1xyXG4gICAgICBpZDogcmVkZW1wdGlvbi5pZCxcclxuICAgICAgdm91Y2hlcl9jb2RlOiByZWRlbXB0aW9uLnZvdWNoZXJfY29kZSxcclxuICAgICAgYW1vdW50OiByZWRlbXB0aW9uLmFtb3VudCxcclxuICAgICAgcmVkZWVtZWRfYXQ6IHJlZGVtcHRpb24ucmVkZWVtZWRfYXQsXHJcbiAgICAgIGJvb2tpbmdfaWQ6IHJlZGVtcHRpb24uYm9va2luZ19pZCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVkZW1wdGlvbnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Vm91Y2hlclJlZGVtcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHZvdWNoZXIgcmVkZW1wdGlvbnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBUXNCLGlNQUFBIn0=
}),
"[project]/app/dashboard/data:441f5a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomerProfile",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6084cd10c62845228da5e5be538409d2395dd8d958":"getCustomerProfile"},"app/dashboard/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6084cd10c62845228da5e5be538409d2395dd8d958", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCustomerProfile");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBQcm9maWxlVXBkYXRlSW5wdXQgfSBmcm9tICdAL3R5cGVzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25DcmVhdGVJbnB1dCwgTG9jYXRpb25VcGRhdGVJbnB1dCB9IGZyb20gJ0AvdHlwZXMvbG9jYXRpb24nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRVc2VyKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZW1haWw6IHVzZXIuZW1haWwgfHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEF1dGhlbnRpY2F0ZWRVc2VyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCB1c2VyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5ncyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nLFxyXG4gIGZpbHRlcj86ICdhbGwnIHwgJ3VwY29taW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2NhbmNlbGxlZCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IHN0YXR1cyBmaWx0ZXJcclxuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICBpZiAoZmlsdGVyID09PSAndXBjb21pbmcnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQm9va2luZ1N0YXRzKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzdGF0cz86IHtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB1cGNvbWluZzogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBjYW5jZWxsZWQ6IG51bWJlcjtcclxuICAgIHRvdGFsU3BlbnQ6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJyk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHtcclxuICAgICAgdG90YWw6IGRhdGE/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICB1cGNvbWluZzogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ3BlbmRpbmcnIHx8IGIuc3RhdHVzID09PSAnY29uZmlybWVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIGNvbXBsZXRlZDogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBjYW5jZWxsZWQ6IGRhdGE/LmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKS5sZW5ndGggfHwgMCxcclxuICAgICAgdG90YWxTcGVudDogZGF0YVxyXG4gICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcpXHJcbiAgICAgICAgLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi50b3RhbF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByb2ZpbGU/OiBQcm9maWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgcHJvZmlsZSBmcm9tIHByb2ZpbGVzIHRhYmxlXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdwcm9maWxlcycpLnNlbGVjdCgnKicpO1xyXG5cclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVEYXRhLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBxdWVyeS5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIC8vIElmIHByb2ZpbGUgZXhpc3RzLCByZXR1cm4gaXRcclxuICAgIGlmIChwcm9maWxlRGF0YSAmJiAhcHJvZmlsZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2ZpbGU6IHByb2ZpbGVEYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gcHJvZmlsZSBleGlzdHMsIGRlcml2ZSBmcm9tIG1vc3QgcmVjZW50IGJvb2tpbmdcclxuICAgIGxldCBib29raW5nUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9maXJzdF9uYW1lLCBjdXN0b21lcl9sYXN0X25hbWUsIGN1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSk7XHJcblxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIGJvb2tpbmdRdWVyeSA9IGJvb2tpbmdRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdEYXRhLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBib29raW5nUXVlcnkubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nRGF0YSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnTm8gcHJvZmlsZSBvciBib29raW5nIGZvdW5kLiBQbGVhc2UgY3JlYXRlIGEgYm9va2luZyBmaXJzdC4nLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIHByb2ZpbGUgb2JqZWN0IGZyb20gYm9va2luZyBkYXRhXHJcbiAgICBjb25zdCBkZXJpdmVkUHJvZmlsZTogUHJvZmlsZSA9IHtcclxuICAgICAgaWQ6ICcnLCAvLyBXaWxsIGJlIGdlbmVyYXRlZCB3aGVuIHNhdmVkXHJcbiAgICAgIGVtYWlsOiBib29raW5nRGF0YS5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcGhvbmU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX3Bob25lIHx8IG51bGwsXHJcbiAgICAgIGZpcnN0X25hbWU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX2ZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZTogYm9va2luZ0RhdGEuY3VzdG9tZXJfbGFzdF9uYW1lLFxyXG4gICAgICByZWZlcnJhbF9jb2RlOiBudWxsLFxyXG4gICAgICBhdmF0YXJfdXJsOiBudWxsLFxyXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogZGVyaXZlZFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljdHVyZShcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGZpbGVEYXRhOiBzdHJpbmcsIC8vIGJhc2U2NCBlbmNvZGVkIHN0cmluZ1xyXG4gIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgZmlsZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVybD86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBVc2UgYWRtaW4gY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZHMgaWYgc2VydmljZSByb2xlIGtleSBpcyBhdmFpbGFibGVcclxuICAgIC8vIElmIG5vdCBhdmFpbGFibGUsIGZhbGwgYmFjayB0byBhdXRoZW50aWNhdGVkIGNsaWVudCBmb3Igc3RvcmFnZSAoc3RvcmFnZSBwb2xpY2llcyBtYXkgc3RpbGwgd29yaylcclxuICAgIGxldCBzdXBhYmFzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ+KchSBVc2luZyBhZG1pbiBjbGllbnQgZm9yIHN0b3JhZ2UgdXBsb2FkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBTZXJ2aWNlIHJvbGUga2V5IG5vdCBzZXQsIHVzaW5nIGF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZCcpO1xyXG4gICAgICBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxyXG4gICAgY29uc3QgdmFsaWRJbWFnZVR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvd2VicCddO1xyXG4gICAgaWYgKCF2YWxpZEltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGEgSlBFRywgUE5HLCBvciBXZWJQIGltYWdlLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWNvZGUgYmFzZTY0IGRhdGFcclxuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBmaWxlRGF0YS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sICcnKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsICdiYXNlNjQnKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCA1TUIpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNSAqIDEwMjQgKiAxMDI0OyAvLyA1TUIgaW4gYnl0ZXNcclxuICAgIGlmIChidWZmZXIubGVuZ3RoID4gbWF4U2l6ZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGaWxlIHNpemUgdG9vIGxhcmdlLiBQbGVhc2UgdXBsb2FkIGFuIGltYWdlIHNtYWxsZXIgdGhhbiA1TUIuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZSB1c2luZyBlbWFpbCBhbmQgdGltZXN0YW1wXHJcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fCAnanBnJztcclxuICAgIGNvbnN0IHNhbml0aXplZEVtYWlsID0gZW1haWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICdfJyk7XHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke3Nhbml0aXplZEVtYWlsfV8ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VuaXF1ZUZpbGVOYW1lfWA7XHJcblxyXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcclxuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlLXBpY3R1cmVzJylcclxuICAgICAgLnVwbG9hZChmaWxlUGF0aCwgYnVmZmVyLCB7XHJcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGVUeXBlLFxyXG4gICAgICAgIHVwc2VydDogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIFN0b3JhZ2UgdXBsb2FkIGVycm9yOicsIHVwbG9hZEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1cGxvYWRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogdXBsb2FkRXJyb3Iuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIGVycm9yOiB1cGxvYWRFcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RvcmFnZSBSTFMgZXJyb3JzXHJcbiAgICAgICAgaWYgKHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBsb2FkRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ1JMUycpIHx8XHJcbiAgICAgICAgICAgIHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdwb2xpY3knKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBSTFMgcG9saWN5IGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgcG9saWNpZXMgaW4gU3VwYWJhc2UgU3RvcmFnZS4gVGhlIGJ1Y2tldCBuZWVkcyBwb2xpY2llcyB0aGF0IGFsbG93IGF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gdXBsb2FkIGZpbGVzLicsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBidWNrZXQgZG9lc24ndCBleGlzdCwgcmV0dXJuIGhlbHBmdWwgZXJyb3JcclxuICAgICAgICBpZiAodXBsb2FkRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykgfHwgdXBsb2FkRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQnVja2V0JykpIHtcclxuICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICAgIGVycm9yOiAnU3RvcmFnZSBidWNrZXQgbm90IGNvbmZpZ3VyZWQuIFBsZWFzZSBjcmVhdGUgYSBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgaW4gU3VwYWJhc2UgU3RvcmFnZS4nLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICBlcnJvcjogdXBsb2FkRXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwbG9hZCBmaWxlJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgLy8gR2V0IHB1YmxpYyBVUkxcclxuICAgIGNvbnN0IHsgZGF0YTogdXJsRGF0YSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZVBhdGgpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogdXJsRGF0YS5wdWJsaWNVcmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBsb2FkUHJvZmlsZVBpY3R1cmU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBsb2FkIHByb2ZpbGUgcGljdHVyZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVQaWN0dXJlKGVtYWlsOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEV4dHJhY3QgZmlsZSBwYXRoIGZyb20gVVJMXHJcbiAgICAvLyBVUkwgZm9ybWF0OiBodHRwczovL1twcm9qZWN0XS5zdXBhYmFzZS5jby9zdG9yYWdlL3YxL29iamVjdC9wdWJsaWMvcHJvZmlsZS1waWN0dXJlcy9hdmF0YXJzL2ZpbGVuYW1lLmpwZ1xyXG4gICAgY29uc3QgdXJsUGF0dGVybiA9IC9cXC9wcm9maWxlLXBpY3R1cmVzXFwvKC4rKSQvO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBhdmF0YXJVcmwubWF0Y2godXJsUGF0dGVybik7XHJcbiAgICBcclxuICAgIGlmICghbWF0Y2ggfHwgIW1hdGNoWzFdKSB7XHJcbiAgICAgIC8vIElmIFVSTCBkb2Vzbid0IG1hdGNoIGV4cGVjdGVkIHBhdHRlcm4sIHRyeSBhbHRlcm5hdGl2ZSBwYXJzaW5nXHJcbiAgICAgIGNvbnN0IHVybFBhcnRzID0gYXZhdGFyVXJsLnNwbGl0KCcvYXZhdGFycy8nKTtcclxuICAgICAgaWYgKHVybFBhcnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAvLyBJZiB3ZSBjYW4ndCBwYXJzZSB0aGUgVVJMLCBqdXN0IHJldHVybiBzdWNjZXNzICh0aGUgZmlsZSBtaWdodCBhbHJlYWR5IGJlIGRlbGV0ZWQpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgcGFyc2UgYXZhdGFyIFVSTCBmb3IgZGVsZXRpb246JywgYXZhdGFyVXJsKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VybFBhcnRzWzFdLnNwbGl0KCc/JylbMF19YDtcclxuICAgICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgICAgLnJlbW92ZShbZmlsZVBhdGhdKTtcclxuXHJcbiAgICAgIGlmIChkZWxldGVFcnJvciAmJiAhZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBmaWxlOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGRlbGV0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZVBhdGggPSBtYXRjaFsxXS5zcGxpdCgnPycpWzBdOyAvLyBSZW1vdmUgcXVlcnkgcGFyYW1ldGVycyBpZiBhbnlcclxuXHJcbiAgICAvLyBEZWxldGUgZnJvbSBzdG9yYWdlXHJcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZS1waWN0dXJlcycpXHJcbiAgICAgIC5yZW1vdmUoW2ZpbGVQYXRoXSk7XHJcblxyXG4gICAgaWYgKGRlbGV0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGZpbGU6JywgZGVsZXRlRXJyb3IpO1xyXG4gICAgICAvLyBEb24ndCBmYWlsIGlmIGZpbGUgZG9lc24ndCBleGlzdFxyXG4gICAgICBpZiAoZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbm90IGZvdW5kJykgfHwgZGVsZXRlRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnTm8gc3VjaCBmaWxlJykpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVQcm9maWxlUGljdHVyZTonLCBlcnJvcik7XHJcbiAgICAvLyBEb24ndCBmYWlsIGNvbXBsZXRlbHkgLSB0aGUgVVJMIGluIGRhdGFiYXNlIHdpbGwgYmUgcmVtb3ZlZCBhbnl3YXlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBkYXRhOiBQcm9maWxlVXBkYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcm9maWxlPzogUHJvZmlsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBGaXJzdCwgdmVyaWZ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgbWF0Y2hlcyB0aGUgZW1haWxcclxuICAgIGNvbnN0IGF1dGhTdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgYXV0aFN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgXHJcbiAgICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBlbWFpbCBwYXJhbWV0ZXIgbWF0Y2hlcyB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgZW1haWxcclxuICAgIC8vIFRoaXMgZW5zdXJlcyB1c2VycyBjYW4gb25seSB1cGRhdGUgdGhlaXIgb3duIHByb2ZpbGVcclxuICAgIGlmICh1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpICE9PSBlbWFpbC50b0xvd2VyQ2FzZSgpICYmIHVzZXIuZW1haWw/LnRvTG93ZXJDYXNlKCkgIT09IGRhdGEuZW1haWw/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkOiBZb3UgY2FuIG9ubHkgdXBkYXRlIHlvdXIgb3duIHByb2ZpbGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUxXQVlTIHVzZSBhZG1pbiBjbGllbnQgZm9yIHByb2ZpbGUgb3BlcmF0aW9ucyAtIGl0IGJ5cGFzc2VzIFJMUyBjb21wbGV0ZWx5XHJcbiAgICAvLyBUaGlzIGlzIFJFUVVJUkVEIC0gd2UgY2Fubm90IHVzZSBhdXRoZW50aWNhdGVkIGNsaWVudCBhcyBpdCBtYXkgc3RpbGwgY2hlY2sgUkxTIHBvbGljaWVzXHJcbiAgICBsZXQgc3VwYWJhc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgVXNpbmcgYWRtaW4gY2xpZW50IGZvciBwcm9maWxlIG9wZXJhdGlvbnMnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIERvIE5PVCBmYWxsIGJhY2sgdG8gYXV0aGVudGljYXRlZCBjbGllbnQgLSBpdCB3aWxsIGNhdXNlIFJMUyBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcign4p2MIEZhaWxlZCB0byBjcmVhdGUgYWRtaW4gY2xpZW50OicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ1NVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaXMgbm90IHNldC4gVGhpcyBpcyBSRVFVSVJFRCBmb3IgcHJvZmlsZSBvcGVyYXRpb25zLiBQbGVhc2UgYWRkIGl0IHRvIHlvdXIgLmVudi5sb2NhbCBmaWxlLiBHZXQgaXQgZnJvbTogU3VwYWJhc2UgRGFzaGJvYXJkIOKGkiBTZXR0aW5ncyDihpIgQVBJIOKGkiBzZXJ2aWNlX3JvbGUga2V5IChzZWNyZXQpJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IHdlIGhhdmUgYSB2YWxpZCBjbGllbnQgKHNob3VsZCBuZXZlciBoYXBwZW4gZHVlIHRvIGVycm9yIGFib3ZlLCBidXQgZG91YmxlLWNoZWNrKVxyXG4gICAgaWYgKCFzdXBhYmFzZSkge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBkYXRhYmFzZSBjbGllbnQuIFBsZWFzZSBjaGVjayB5b3VyIFNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaW4gLmVudi5sb2NhbCcgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcclxuICAgIGlmICghZGF0YS5maXJzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5sYXN0X25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuZW1haWw/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChkYXRhLmVtYWlsKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGVtYWlsIGZvcm1hdCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIG5ldyBlbWFpbCAoaWYgY2hhbmdlZCkgc3RpbGwgbWF0Y2hlcyB0aGUgYXV0aGVudGljYXRlZCB1c2VyXHJcbiAgICBpZiAoZGF0YS5lbWFpbC50b0xvd2VyQ2FzZSgpICE9PSB1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIC8vIEFsbG93IGVtYWlsIGNoYW5nZSBvbmx5IGlmIGl0J3MgdGhlIHNhbWUgdXNlciAoY2FzZSBpbnNlbnNpdGl2ZSBjaGVjayBhYm92ZSBwYXNzZWQpXHJcbiAgICAgIC8vIEJ1dCB3ZSBzaG91bGQgdmVyaWZ5IGl0J3MgYSB2YWxpZCBjaGFuZ2UgKHVzZXIgdXBkYXRpbmcgdGhlaXIgb3duIGVtYWlsKVxyXG4gICAgICBpZiAoZGF0YS5lbWFpbC50b0xvd2VyQ2FzZSgpICE9PSBlbWFpbC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgLy8gRW1haWwgaXMgYmVpbmcgY2hhbmdlZCAtIHZlcmlmeSBpdCdzIHN0aWxsIHRoZSBzYW1lIHVzZXJcclxuICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBhbGxvdyBpdCBidXQgaW4gcHJvZHVjdGlvbiB5b3UgbWlnaHQgd2FudCB0byByZXF1aXJlIGVtYWlsIHZlcmlmaWNhdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJvZmlsZSBleGlzdHNcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIENoZWNraW5nIGlmIHByb2ZpbGUgZXhpc3RzIGZvciBlbWFpbDonLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBVc2luZyBjbGllbnQgdHlwZTonLCBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZID8gJ0FETUlOIChzZXJ2aWNlIHJvbGUpJyA6ICdBVVRIRU5USUNBVEVEIChhbm9uIGtleSknKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1Byb2ZpbGUsIGVycm9yOiBzZWxlY3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcbiAgICBcclxuICAgIGlmIChzZWxlY3RFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3Igc2VsZWN0aW5nIHByb2ZpbGU6Jywgc2VsZWN0RXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gY2hlY2sgcHJvZmlsZTogJHtzZWxlY3RFcnJvci5tZXNzYWdlfWAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ+KchSBQcm9maWxlIGNoZWNrIHJlc3VsdDonLCBleGlzdGluZ1Byb2ZpbGUgPyAnUHJvZmlsZSBleGlzdHMgKHdpbGwgVVBEQVRFKScgOiAnUHJvZmlsZSBkb2VzIG5vdCBleGlzdCAod2lsbCBJTlNFUlQpJyk7XHJcblxyXG4gICAgLy8gSWYgYXZhdGFyX3VybCBpcyBiZWluZyByZW1vdmVkLCBkZWxldGUgdGhlIG9sZCBmaWxlXHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlPy5hdmF0YXJfdXJsICYmIGRhdGEuYXZhdGFyX3VybCA9PT0gbnVsbCkge1xyXG4gICAgICBhd2FpdCBkZWxldGVQcm9maWxlUGljdHVyZShlbWFpbCwgZXhpc3RpbmdQcm9maWxlLmF2YXRhcl91cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIC8vIElmIGVtYWlsIGNoYW5nZWQsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGNhcmVmdWxseVxyXG4gICAgICBpZiAoZGF0YS5lbWFpbCAhPT0gZW1haWwpIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBuZXcgZW1haWwgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGVtYWlsQ2hlY2sgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIGRhdGEuZW1haWwpXHJcbiAgICAgICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGVtYWlsQ2hlY2spIHtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGFscmVhZHkgZXhpc3RzJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUudHJpbSgpLFxyXG4gICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwudHJpbSgpLFxyXG4gICAgICAgICAgcGhvbmU6IGRhdGEucGhvbmU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGF2YXRhcl91cmw6IHVuZGVmaW5lZCBtZWFucyBkb24ndCBjaGFuZ2UsIG51bGwgbWVhbnMgcmVtb3ZlLCBzdHJpbmcgbWVhbnMgc2V0XHJcbiAgICAgIGlmIChkYXRhLmF2YXRhcl91cmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHVwZGF0ZURhdGEuYXZhdGFyX3VybCA9IGRhdGEuYXZhdGFyX3VybCA9PT0gbnVsbCA/IG51bGwgOiBkYXRhLmF2YXRhcl91cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OdIEF0dGVtcHRpbmcgdG8gVVBEQVRFIHByb2ZpbGUgd2l0aCBkYXRhOicsIHVwZGF0ZURhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBVcGRhdGUgV0hFUkUgZW1haWwgPScsIGVtYWlsKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZFByb2ZpbGUsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm9yIHVwZGF0aW5nIHByb2ZpbGU6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBVcGRhdGUgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBjb2RlOiB1cGRhdGVFcnJvci5jb2RlLFxyXG4gICAgICAgICAgbWVzc2FnZTogdXBkYXRlRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGRldGFpbHM6IHVwZGF0ZUVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICBoaW50OiB1cGRhdGVFcnJvci5oaW50LFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogKHVwZGF0ZUVycm9yIGFzIGFueSkuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIHN0YXR1czogKHVwZGF0ZUVycm9yIGFzIGFueSkuc3RhdHVzLFxyXG4gICAgICAgICAgc2VydmljZVJvbGVLZXlTZXQ6ICEhcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgUkxTIGVycm9ycyBzcGVjaWZpY2FsbHlcclxuICAgICAgICBpZiAodXBkYXRlRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICB1cGRhdGVFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIHVwZGF0ZUVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IGluc2VydERhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE9ubHkgc2V0IGF2YXRhcl91cmwgaWYgaXQncyBwcm92aWRlZFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsKSB7XHJcbiAgICAgICAgaW5zZXJ0RGF0YS5hdmF0YXJfdXJsID0gZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGE6IG5ld1Byb2ZpbGUsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoaW5zZXJ0RGF0YSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9maWxlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgSW5zZXJ0IGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogaW5zZXJ0RXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGluc2VydEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiBpbnNlcnRFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogaW5zZXJ0RXJyb3IuaGludCxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHVuaXF1ZSBjb25zdHJhaW50IHZpb2xhdGlvblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBSTFMgZXJyb3JcclxuICAgICAgICBpZiAoaW5zZXJ0RXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICBpbnNlcnRFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIGluc2VydEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiBpbnNlcnRFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IG5ld1Byb2ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUN1c3RvbWVyUHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyTG9jYXRpb25zKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbnM/OiBMb2NhdGlvbltdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2lzX2RlZmF1bHQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IGZvciBlbWFpbC9waG9uZSBsb29rdXBcclxuICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgfSBlbHNlIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb25zOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyTG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGxvY2F0aW9ucycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBsb2NhdGlvbkRhdGE6IExvY2F0aW9uQ3JlYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbj86IExvY2F0aW9uO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcclxuICAgIGlmICghbG9jYXRpb25EYXRhLm5pY2tuYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmlja25hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWxvY2F0aW9uRGF0YS5hZGRyZXNzPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQWRkcmVzcyBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLnN1YnVyYj8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1N1YnVyYiBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLmNpdHk/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDaXR5IGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHNldHRpbmcgYXMgZGVmYXVsdCwgdW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmlzX2RlZmF1bHQpIHtcclxuICAgICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoZW1haWwgJiYgcGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgdXBkYXRlUXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBuZXdMb2NhdGlvbiwgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgY3VzdG9tZXJfZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyX3Bob25lOiBwaG9uZSB8fCBudWxsLFxyXG4gICAgICAgIG5pY2tuYW1lOiBsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpLFxyXG4gICAgICAgIGFkZHJlc3M6IGxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKSxcclxuICAgICAgICBhcHRfdW5pdDogbG9jYXRpb25EYXRhLmFwdF91bml0Py50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICBzdWJ1cmI6IGxvY2F0aW9uRGF0YS5zdWJ1cmIudHJpbSgpLFxyXG4gICAgICAgIGNpdHk6IGxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKSxcclxuICAgICAgICBwb3N0YWxfY29kZTogbG9jYXRpb25EYXRhLnBvc3RhbF9jb2RlPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICBpc19kZWZhdWx0OiBsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCB8fCBmYWxzZSxcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgbG9jYXRpb246JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsb2NhdGlvbjogbmV3TG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24oXHJcbiAgbG9jYXRpb25JZDogc3RyaW5nLFxyXG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb25VcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uPzogTG9jYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dCBpZiBwcm92aWRlZFxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5uaWNrbmFtZSAhPT0gdW5kZWZpbmVkICYmICFsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05pY2tuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBZGRyZXNzIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5zdWJ1cmIgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLnN1YnVyYi50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU3VidXJiIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5jaXR5ICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDaXR5IGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGxvY2F0aW9uIHRvIGNoZWNrIGN1c3RvbWVyIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1cnJlbnRMb2NhdGlvbiwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfcGhvbmUnKVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFjdXJyZW50TG9jYXRpb24pIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTG9jYXRpb24gbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHNldHRpbmcgYXMgZGVmYXVsdCwgdW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmlzX2RlZmF1bHQpIHtcclxuICAgICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsICYmIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7Y3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke2N1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZX1gKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEb24ndCB1bnNldCB0aGUgY3VycmVudCBsb2NhdGlvblxyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm5lcSgnaWQnLCBsb2NhdGlvbklkKTtcclxuXHJcbiAgICAgIGF3YWl0IHVwZGF0ZVF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHVwZGF0ZSBvYmplY3Qgd2l0aCBvbmx5IHByb3ZpZGVkIGZpZWxkc1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge1xyXG4gICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhdGlvbkRhdGEubmlja25hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLm5pY2tuYW1lID0gbG9jYXRpb25EYXRhLm5pY2tuYW1lLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuYWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuYWRkcmVzcyA9IGxvY2F0aW9uRGF0YS5hZGRyZXNzLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuYXB0X3VuaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLmFwdF91bml0ID0gbG9jYXRpb25EYXRhLmFwdF91bml0Py50cmltKCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuc3VidXJiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5zdWJ1cmIgPSBsb2NhdGlvbkRhdGEuc3VidXJiLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuY2l0eSA9IGxvY2F0aW9uRGF0YS5jaXR5LnRyaW0oKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLnBvc3RhbF9jb2RlID0gbG9jYXRpb25EYXRhLnBvc3RhbF9jb2RlPy50cmltKCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuaXNfZGVmYXVsdCA9IGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZExvY2F0aW9uLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsb2NhdGlvbjonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiB1cGRhdGVkTG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBsb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0RGVmYXVsdExvY2F0aW9uKFxyXG4gIGxvY2F0aW9uSWQ6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgbG9jYXRpb24/OiBMb2NhdGlvbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IGxvY2F0aW9uIHRvIHZlcmlmeSBvd25lcnNoaXBcclxuICAgIGNvbnN0IHsgZGF0YTogY3VycmVudExvY2F0aW9uLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMb2NhdGlvbiBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgY29uc3QgaXNPd25lciA9IFxyXG4gICAgICBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwgPT09IGVtYWlsIHx8XHJcbiAgICAgIChwaG9uZSAmJiBjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUgPT09IHBob25lKTtcclxuXHJcbiAgICBpZiAoIWlzT3duZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVuc2V0IGFsbCBvdGhlciBkZWZhdWx0cyBmb3IgdGhpcyBjdXN0b21lclxyXG4gICAgbGV0IHVwZGF0ZVF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZW1haWwgJiYgcGhvbmUpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfZW1haWwnLCBlbWFpbCk7XHJcbiAgICB9IGVsc2UgaWYgKHBob25lKSB7XHJcbiAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX3Bob25lJywgcGhvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvbid0IHVuc2V0IHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm5lcSgnaWQnLCBsb2NhdGlvbklkKTtcclxuXHJcbiAgICBhd2FpdCB1cGRhdGVRdWVyeTtcclxuXHJcbiAgICAvLyBTZXQgdGhpcyBsb2NhdGlvbiBhcyBkZWZhdWx0XHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRMb2NhdGlvbiwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IGlzX2RlZmF1bHQ6IHRydWUgfSlcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgZGVmYXVsdCBsb2NhdGlvbjonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiB1cGRhdGVkTG9jYXRpb24gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2V0RGVmYXVsdExvY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNldCBkZWZhdWx0IGxvY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVSZWZlcnJhbENvZGUoXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHJlZmVycmFsQ29kZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHByb2ZpbGUgZXhpc3RzIGFuZCBoYXMgYSByZWZlcnJhbCBjb2RlXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGUsIGVycm9yOiBwcm9maWxlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChwcm9maWxlRXJyb3IgJiYgcHJvZmlsZUVycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZTonLCBwcm9maWxlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHByb2ZpbGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgcHJvZmlsZSBleGlzdHMgYW5kIGhhcyBhIHJlZmVycmFsIGNvZGUsIHJldHVybiBpdFxyXG4gICAgaWYgKHByb2ZpbGU/LnJlZmVycmFsX2NvZGUpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiBwcm9maWxlLnJlZmVycmFsX2NvZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIG5ldyByZWZlcnJhbCBjb2RlXHJcbiAgICAvLyBUcnkgdXNpbmcgdGhlIGRhdGFiYXNlIGZ1bmN0aW9uIGZpcnN0LCBidXQgZmFsbGJhY2sgdG8gY2xpZW50LXNpZGUgZ2VuZXJhdGlvblxyXG4gICAgbGV0IGdlbmVyYXRlZENvZGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGRiQ29kZSwgZXJyb3I6IGNvZGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAucnBjKCdnZW5lcmF0ZV9yZWZlcnJhbF9jb2RlJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWNvZGVFcnJvciAmJiBkYkNvZGUpIHtcclxuICAgICAgICBnZW5lcmF0ZWRDb2RlID0gZGJDb2RlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChycGNFcnJvcikge1xyXG4gICAgICAvLyBSUEMgZnVuY3Rpb24gbWlnaHQgbm90IGV4aXN0IHlldCwgdGhhdCdzIG9rYXlcclxuICAgICAgY29uc29sZS5sb2coJ1JQQyBmdW5jdGlvbiBub3QgYXZhaWxhYmxlLCB1c2luZyBmYWxsYmFjaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZ2VuZXJhdGVkQ29kZSkge1xyXG4gICAgICAvLyBGYWxsYmFjazogZ2VuZXJhdGUgY29kZSBjbGllbnQtc2lkZSBzdHlsZVxyXG4gICAgICBjb25zdCBmYWxsYmFja0NvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoZWNrIGlmIGZhbGxiYWNrIGNvZGUgZXhpc3RzLCByZXRyeSBpZiBpdCBkb2VzXHJcbiAgICAgIGxldCBmaW5hbENvZGUgPSBmYWxsYmFja0NvZGU7XHJcbiAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcbiAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNTtcclxuXHJcbiAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBleGlzdGluZyB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgICAgICAuZXEoJ3JlZmVycmFsX2NvZGUnLCBmaW5hbENvZGUpXHJcbiAgICAgICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgYnJlYWs7IC8vIENvZGUgaXMgdW5pcXVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBjb2RlXHJcbiAgICAgICAgZmluYWxDb2RlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIG9yIGluc2VydCBwcm9maWxlIHdpdGggcmVmZXJyYWwgY29kZVxyXG4gICAgICAvLyBGaXJzdCwgdHJ5IHRvIHVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZScpXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgICAgbGV0IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByb2ZpbGVcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWQsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgcmVmZXJyYWxfY29kZTogZmluYWxDb2RlLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVmZXJyYWwgY29kZTonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlZFByb2ZpbGUgPSB1cGRhdGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEluc2VydCBuZXcgcHJvZmlsZSB3aXRoIHJlZmVycmFsIGNvZGVcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICByZWZlcnJhbF9jb2RlOiBmaW5hbENvZGUsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGVtYWlsLnNwbGl0KCdAJylbMF0sXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVmZXJyYWwgY29kZTonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlZFByb2ZpbGUgPSBpbnNlcnRlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiB1cGRhdGVkUHJvZmlsZT8ucmVmZXJyYWxfY29kZSB8fCBmaW5hbENvZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIGdlbmVyYXRlZCBjb2RlIGZyb20gZGF0YWJhc2UgZnVuY3Rpb25cclxuICAgIC8vIFVwZGF0ZSBvciBpbnNlcnQgcHJvZmlsZSB3aXRoIGdlbmVyYXRlZCBjb2RlXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nUHJvZmlsZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZScpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgbGV0IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZSkge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWQsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcmVmZXJyYWxfY29kZTogZ2VuZXJhdGVkQ29kZSxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyByZWZlcnJhbCBjb2RlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkUHJvZmlsZSA9IHVwZGF0ZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJbnNlcnQgbmV3IHByb2ZpbGUgd2l0aCByZWZlcnJhbCBjb2RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogaW5zZXJ0ZWQsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICByZWZlcnJhbF9jb2RlOiBnZW5lcmF0ZWRDb2RlLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogZW1haWwuc3BsaXQoJ0AnKVswXSxcclxuICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZWZlcnJhbCBjb2RlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkUHJvZmlsZSA9IGluc2VydGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHJlZmVycmFsQ29kZTogdXBkYXRlZFByb2ZpbGU/LnJlZmVycmFsX2NvZGUgfHwgZ2VuZXJhdGVkQ29kZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRPckNyZWF0ZVJlZmVycmFsQ29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBnZXQgcmVmZXJyYWwgY29kZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRSZWZlcnJhbEludml0ZXMoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBpbnZpdGVFbWFpbHM6IHN0cmluZ1tdLFxyXG4gIHJlZmVycmFsQ29kZTogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VudD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGVtYWlsIGFkZHJlc3Nlc1xyXG4gICAgY29uc3QgdmFsaWRFbWFpbHMgPSBpbnZpdGVFbWFpbHNcclxuICAgICAgLm1hcCgoZSkgPT4gZS50cmltKCkpXHJcbiAgICAgIC5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHZhbGlkRW1haWxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdObyB2YWxpZCBlbWFpbCBhZGRyZXNzZXMgcHJvdmlkZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHJlZmVycmFsIHJlY29yZHMgZm9yIHRyYWNraW5nXHJcbiAgICBjb25zdCByZWZlcnJhbFJlY29yZHMgPSB2YWxpZEVtYWlscy5tYXAoKHJlZmVycmVkRW1haWwpID0+ICh7XHJcbiAgICAgIHJlZmVycmVyX2VtYWlsOiBlbWFpbCxcclxuICAgICAgcmVmZXJyZWRfZW1haWw6IHJlZmVycmVkRW1haWwsXHJcbiAgICAgIHJlZmVycmFsX2NvZGU6IHJlZmVycmFsQ29kZSxcclxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdyZWZlcnJhbHMnKVxyXG4gICAgICAuaW5zZXJ0KHJlZmVycmFsUmVjb3Jkcyk7XHJcblxyXG4gICAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlZmVycmFsIHJlY29yZHM6JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICAvLyBDb250aW51ZSBldmVuIGlmIGluc2VydCBmYWlscyAtIHdlIHN0aWxsIHdhbnQgdG8gc2VuZCBlbWFpbHNcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSByZWZlcnJhbCBsaW5rXHJcbiAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHBzOi8vc2hhbGVhbi5jby56YSc7XHJcbiAgICBjb25zdCByZWZlcnJhbExpbmsgPSBgJHtiYXNlVXJsfS9ib29raW5nL2RldGFpbHM/cmVmPSR7cmVmZXJyYWxDb2RlfWA7XHJcblxyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGFjdHVhbCBlbWFpbCBzZW5kaW5nIHVzaW5nIHlvdXIgZW1haWwgc2VydmljZSAoUmVzZW5kLCBTZW5kR3JpZCwgZXRjLilcclxuICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3QgbG9nIHRoZSBlbWFpbHMgdGhhdCB3b3VsZCBiZSBzZW50XHJcbiAgICBjb25zb2xlLmxvZygnUmVmZXJyYWwgaW52aXRlcyB0byBzZW5kOicsIHtcclxuICAgICAgZnJvbTogZW1haWwsXHJcbiAgICAgIHRvOiB2YWxpZEVtYWlscyxcclxuICAgICAgcmVmZXJyYWxDb2RlLFxyXG4gICAgICByZWZlcnJhbExpbmssXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbiBhIHJlYWwgaW1wbGVtZW50YXRpb24sIHlvdSB3b3VsZCBzZW5kIGVtYWlscyBoZXJlXHJcbiAgICAvLyBFeGFtcGxlIHdpdGggUmVzZW5kOlxyXG4gICAgLy8gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgIC8vICAgZnJvbTogJ1NoYWxlYW4gPG5vcmVwbHlAc2hhbGVhbi5jby56YT4nLFxyXG4gICAgLy8gICB0bzogdmFsaWRFbWFpbHMsXHJcbiAgICAvLyAgIHN1YmplY3Q6ICdZb3VcXCd2ZSBiZWVuIGludml0ZWQgdG8gdHJ5IFNoYWxlYW4gQ2xlYW5pbmcgU2VydmljZXMhJyxcclxuICAgIC8vICAgaHRtbDogYDxwPllvdXIgZnJpZW5kIGhhcyBpbnZpdGVkIHlvdSB0byB0cnkgU2hhbGVhbi4gVXNlIGNvZGUgJHtyZWZlcnJhbENvZGV9IHRvIGdldCBSMTUwIG9mZiB5b3VyIGZpcnN0IGJvb2tpbmchPC9wPjxwPjxhIGhyZWY9XCIke3JlZmVycmFsTGlua31cIj5Cb29rIE5vdzwvYT48L3A+YCxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlbnQ6IHZhbGlkRW1haWxzLmxlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzZW5kUmVmZXJyYWxJbnZpdGVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNlbmQgaW52aXRlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZmVycmFsU3RhdHMoXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxSZWZlcnJhbHM6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlZFJlZmVycmFsczogbnVtYmVyO1xyXG4gICAgcGVuZGluZ1Jld2FyZHM6IG51bWJlcjtcclxuICAgIHRvdGFsUmV3YXJkczogbnVtYmVyO1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZmVycmFscywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdyZWZlcnJhbHMnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHJlZmVycmVyX3Jld2FyZF9hbW91bnQsIHJlZmVycmVyX3Jld2FyZF9zdGF0dXMnKVxyXG4gICAgICAuZXEoJ3JlZmVycmVyX2VtYWlsJywgZW1haWwpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZWZlcnJhbCBzdGF0czonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXRzID0ge1xyXG4gICAgICB0b3RhbFJlZmVycmFsczogcmVmZXJyYWxzPy5sZW5ndGggfHwgMCxcclxuICAgICAgY29tcGxldGVkUmVmZXJyYWxzOlxyXG4gICAgICAgIHJlZmVycmFscz8uZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBwZW5kaW5nUmV3YXJkczpcclxuICAgICAgICByZWZlcnJhbHM/LmZpbHRlcigocikgPT4gci5yZWZlcnJlcl9yZXdhcmRfc3RhdHVzID09PSAncGVuZGluZycpLmxlbmd0aCB8fCAwLFxyXG4gICAgICB0b3RhbFJld2FyZHM6XHJcbiAgICAgICAgcmVmZXJyYWxzXHJcbiAgICAgICAgICA/LmZpbHRlcigocikgPT4gci5yZWZlcnJlcl9yZXdhcmRfc3RhdHVzID09PSAnY3JlZGl0ZWQnKVxyXG4gICAgICAgICAgLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyAoci5yZWZlcnJlcl9yZXdhcmRfYW1vdW50IHx8IDApLCAwKSB8fCAwLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzdGF0cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZWZlcnJhbFN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJlZmVycmFsIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIGNyZWRpdCBwdXJjaGFzZSB3aXRoIFBheXN0YWNrXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdFB1cmNoYXNlKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgYW1vdW50OiBudW1iZXIsXHJcbiAgcGF5bWVudE1ldGhvZDogJ2NyZWRpdF9jYXJkJyB8ICdlZnQnXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYXV0aG9yaXphdGlvblVybD86IHN0cmluZztcclxuICByZWZlcmVuY2U/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKGFtb3VudCA8IDIwIHx8IGFtb3VudCA+IDUwMDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ0Ftb3VudCBtdXN0IGJlIGJldHdlZW4gUjIwIGFuZCBSNTAwMCcsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgcmVmZXJlbmNlIGZvciB0aGlzIGNyZWRpdCBwdXJjaGFzZVxyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gYENSRURJVF8ke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpfWA7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgcGVuZGluZyBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEdldCBvciBjcmVhdGUgcHJvZmlsZVxyXG4gICAgbGV0IHsgZGF0YTogcHJvZmlsZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoIXByb2ZpbGUpIHtcclxuICAgICAgLy8gQ3JlYXRlIGEgYmFzaWMgcHJvZmlsZSBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbmV3UHJvZmlsZSwgZXJyb3I6IGNyZWF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIGNyZWRpdF9iYWxhbmNlOiAwLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0X25hbWU6ICcnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoY3JlYXRlRXJyb3IgfHwgIW5ld1Byb2ZpbGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZmlsZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBwcm9maWxlID0gbmV3UHJvZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgcGVuZGluZyBjcmVkaXQgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IHsgZXJyb3I6IHRyYW5zYWN0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjcmVkaXRfdHJhbnNhY3Rpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgcHJvZmlsZV9pZDogcHJvZmlsZS5pZCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiAncHVyY2hhc2UnLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICBiYWxhbmNlX2JlZm9yZTogcHJvZmlsZS5jcmVkaXRfYmFsYW5jZSB8fCAwLFxyXG4gICAgICAgIGJhbGFuY2VfYWZ0ZXI6IHByb2ZpbGUuY3JlZGl0X2JhbGFuY2UgfHwgMCwgLy8gV29uJ3QgdXBkYXRlIHVudGlsIHBheW1lbnQgc3VjY2VlZHNcclxuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICBwYXlzdGFja19yZWZlcmVuY2U6IHJlZmVyZW5jZSxcclxuICAgICAgICBwYXltZW50X3N0YXR1czogJ3BlbmRpbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUHVyY2hhc2Ugb2YgUiR7YW1vdW50fSBTaGFsZWFuQ3JlZGAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0cmFuc2FjdGlvbkVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNyZWRpdCB0cmFuc2FjdGlvbjonLCB0cmFuc2FjdGlvbkVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gcmVjb3JkJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIFBheXN0YWNrIHBheW1lbnRcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGF5c3RhY2svaW5pdGlhbGl6ZScsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIHJlZmVyZW5jZSxcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgdHJhbnNhY3Rpb25fdHlwZTogJ2NyZWRpdF9wdXJjaGFzZScsXHJcbiAgICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLmVycm9yIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXltZW50RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXBheW1lbnREYXRhLnN0YXR1cykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBwYXltZW50RGF0YS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwYXltZW50JyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiBwYXltZW50RGF0YS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxyXG4gICAgICByZWZlcmVuY2U6IHBheW1lbnREYXRhLmRhdGEucmVmZXJlbmNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNyZWRpdCBwdXJjaGFzZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlclJlZGVtcHRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdm91Y2hlcl9jb2RlOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgcmVkZWVtZWRfYXQ6IHN0cmluZztcclxuICBib29raW5nX2lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkZWVtVm91Y2hlcihcclxuICBjb2RlOiBzdHJpbmcsXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFtb3VudD86IG51bWJlcjtcclxuICBuZXdCYWxhbmNlPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gdG8gcmVkZWVtIHRoZSB2b3VjaGVyXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ3JlZGVlbV92b3VjaGVyJywge1xyXG4gICAgICBwX2NvZGU6IGNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIHBfZW1haWw6IGVtYWlsLnRyaW0oKSxcclxuICAgICAgcF9waG9uZTogcGhvbmU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZGVlbWluZyB2b3VjaGVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHJlZGVlbSB2b3VjaGVyJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgcmVzdWx0IGZyb20gdGhlIGZ1bmN0aW9uIChoYW5kbGUgYm90aCBvYmplY3QgYW5kIHN0cmluZyBKU09OQilcclxuICAgIGxldCByZXN1bHQgPSBkYXRhO1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHZvdWNoZXIgcmVkZW1wdGlvbiByZXN1bHQ6JywgcGFyc2VFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlIGZyb20gc2VydmVyJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiAnc3VjY2VzcycgaW4gcmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogcmVzdWx0LmVycm9yIHx8ICdGYWlsZWQgdG8gcmVkZWVtIHZvdWNoZXInLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBhbW91bnQ6IHJlc3VsdC5hbW91bnQsXHJcbiAgICAgICAgbmV3QmFsYW5jZTogcmVzdWx0Lm5ld19iYWxhbmNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcmVkZWVtVm91Y2hlcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byByZWRlZW0gdm91Y2hlcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZvdWNoZXJSZWRlbXB0aW9ucyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcmVkZW1wdGlvbnM/OiBWb3VjaGVyUmVkZW1wdGlvbltdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ZvdWNoZXJfcmVkZW1wdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgdm91Y2hlcl9jb2RlLCBhbW91bnQsIHJlZGVlbWVkX2F0LCBib29raW5nX2lkJylcclxuICAgICAgLm9yZGVyKCdyZWRlZW1lZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBmb3IgZW1haWwvcGhvbmUgbG9va3VwXHJcbiAgICAvLyBQcmlvcml0aXplIGVtYWlsIGFzIGl0J3MgdGhlIHByaW1hcnkgaWRlbnRpZmllciB0byBwcmV2ZW50IGNyb3NzLWFjY291bnQgdmlzaWJpbGl0eVxyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgICAvLyBJZiBwaG9uZSBpcyBhbHNvIHByb3ZpZGVkLCB3ZSBjYW4gb3B0aW9uYWxseSBmaWx0ZXIgYnkgYm90aCBmb3IgZXh0cmEgc2VjdXJpdHlcclxuICAgICAgLy8gYnV0IGVtYWlsIGFsb25lIHNob3VsZCBiZSBzdWZmaWNpZW50IHNpbmNlIGl0J3MgdW5pcXVlXHJcbiAgICB9IGVsc2UgaWYgKHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3Bob25lJywgcGhvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgb3IgcGhvbmUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZvdWNoZXIgcmVkZW1wdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFuc2Zvcm0gdGhlIGRhdGEgdG8gbWF0Y2ggdGhlIGludGVyZmFjZVxyXG4gICAgY29uc3QgcmVkZW1wdGlvbnM6IFZvdWNoZXJSZWRlbXB0aW9uW10gPSAoZGF0YSB8fCBbXSkubWFwKChyZWRlbXB0aW9uKSA9PiAoe1xyXG4gICAgICBpZDogcmVkZW1wdGlvbi5pZCxcclxuICAgICAgdm91Y2hlcl9jb2RlOiByZWRlbXB0aW9uLnZvdWNoZXJfY29kZSxcclxuICAgICAgYW1vdW50OiByZWRlbXB0aW9uLmFtb3VudCxcclxuICAgICAgcmVkZWVtZWRfYXQ6IHJlZGVtcHRpb24ucmVkZWVtZWRfYXQsXHJcbiAgICAgIGJvb2tpbmdfaWQ6IHJlZGVtcHRpb24uYm9va2luZ19pZCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVkZW1wdGlvbnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Vm91Y2hlclJlZGVtcHRpb25zOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHZvdWNoZXIgcmVkZW1wdGlvbnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1JBNEtzQiwrTEFBQSJ9
}),
"[project]/app/dashboard/components/DashboardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$ca0108__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/data:ca0108 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$441f5a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/data:441f5a [app-ssr] (ecmascript) <text/javascript>");
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
function DashboardHeader() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userInitials, setUserInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const loadUserProfile = async ()=>{
            try {
                // Get authenticated user's email
                const authResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$ca0108__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAuthenticatedUser"])();
                if (authResult.success && authResult.email) {
                    setUserEmail(authResult.email);
                    // Fetch profile to get avatar and name
                    const profileResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$441f5a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerProfile"])(authResult.email);
                    if (profileResult.success && profileResult.profile) {
                        setProfile(profileResult.profile);
                        // Use actual name for initials if available
                        if (profileResult.profile.first_name && profileResult.profile.last_name) {
                            setUserInitials((profileResult.profile.first_name[0] + profileResult.profile.last_name[0]).toUpperCase());
                        } else {
                            // Fallback to email-based initials
                            const nameParts = authResult.email.split('@')[0].split(/[._-]/);
                            if (nameParts.length >= 2) {
                                setUserInitials((nameParts[0][0] + nameParts[1][0]).toUpperCase());
                            } else {
                                setUserInitials(authResult.email.substring(0, 2).toUpperCase());
                            }
                        }
                    } else {
                        // No profile found, use email-based initials
                        const nameParts = authResult.email.split('@')[0].split(/[._-]/);
                        if (nameParts.length >= 2) {
                            setUserInitials((nameParts[0][0] + nameParts[1][0]).toUpperCase());
                        } else {
                            setUserInitials(authResult.email.substring(0, 2).toUpperCase());
                        }
                    }
                }
            } catch (error) {
                console.error('Error loading user profile:', error);
            }
        };
        loadUserProfile();
        // Listen for auth changes
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session)=>{
            if (session?.user?.email) {
                setUserEmail(session.user.email);
                // Reload profile when auth state changes
                try {
                    const profileResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$441f5a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerProfile"])(session.user.email);
                    if (profileResult.success && profileResult.profile) {
                        setProfile(profileResult.profile);
                        if (profileResult.profile.first_name && profileResult.profile.last_name) {
                            setUserInitials((profileResult.profile.first_name[0] + profileResult.profile.last_name[0]).toUpperCase());
                        } else {
                            const nameParts = session.user.email.split('@')[0].split(/[._-]/);
                            if (nameParts.length >= 2) {
                                setUserInitials((nameParts[0][0] + nameParts[1][0]).toUpperCase());
                            } else {
                                setUserInitials(session.user.email.substring(0, 2).toUpperCase());
                            }
                        }
                    } else {
                        const nameParts = session.user.email.split('@')[0].split(/[._-]/);
                        if (nameParts.length >= 2) {
                            setUserInitials((nameParts[0][0] + nameParts[1][0]).toUpperCase());
                        } else {
                            setUserInitials(session.user.email.substring(0, 2).toUpperCase());
                        }
                    }
                } catch (error) {
                    console.error('Error loading profile on auth change:', error);
                }
            } else {
                setUserEmail(null);
                setUserInitials('');
                setProfile(null);
            }
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
            router.push('/login');
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
                className: "flex items-center gap-2 md:gap-3 min-w-0 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo.png",
                            alt: "Shalean Logo",
                            width: 32,
                            height: 32,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-base md:text-lg truncate",
                        children: "Shalean"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ml-auto",
                children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-9 w-9 md:h-10 md:w-10",
                                    children: [
                                        profile?.avatar_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: profile.avatar_url,
                                            alt: profile.first_name && profile.last_name ? `${profile.first_name} ${profile.last_name}` : userEmail || 'User',
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                            lineNumber: 169,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "text-xs md:text-sm",
                                            children: userInitials || 'U'
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                            align: "end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                    children: profile?.first_name && profile?.last_name ? `${profile.first_name} ${profile.last_name}` : userEmail || 'My Account'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                profile?.first_name && profile?.last_name && userEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                    className: "text-xs text-muted-foreground font-normal",
                                    children: userEmail
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/dashboard/profile",
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/dashboard/settings",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    onClick: handleLogout,
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                    disabled: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-9 w-9 md:h-10 md:w-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                            className: "text-xs md:text-sm",
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dashboard/components/MobileBottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileBottomNav",
    ()=>MobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-ssr] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const navItems = [
    {
        title: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/dashboard'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/dashboard/bookings'
    },
    {
        title: 'Profile',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        href: '/dashboard/profile'
    }
];
const moreMenuItems = [
    {
        title: 'Locations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        href: '/dashboard/locations'
    },
    {
        title: 'ShaleanCred',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"],
        href: '/dashboard/shaleancred'
    },
    {
        title: 'Vouchers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/dashboard/vouchers'
    },
    {
        title: 'Refer & Earn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        href: '/dashboard/refer'
    },
    {
        title: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        href: '/dashboard/settings'
    }
];
function MobileBottomNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        window.location.href = '/';
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
                            const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                lineNumber: 81,
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
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium",
                                    children: "More"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                lineNumber: 72,
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
                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                            lineNumber: 112,
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
                                            children: "Shalean"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMoreMenuOpen(false),
                                            className: "p-2 rounded-md hover:bg-muted transition-colors",
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: moreMenuItems.map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMenuItemClick(item.href),
                                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-light text-primary' : 'hover:bg-muted text-foreground'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-medium",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.href, true, {
                                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 126,
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
                                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/dashboard/layout-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayoutClient",
    ()=>DashboardLayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/DashboardSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/DashboardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/MobileBottomNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function DashboardLayoutClient({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col overflow-x-hidden pt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardHeader"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/layout-client.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardSidebar"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/layout-client.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarInset"], {
                            className: "flex flex-col overflow-x-hidden w-full min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/layout-client.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "flex-1 p-4 md:p-6 pb-20 md:pb-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-full overflow-x-hidden",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/layout-client.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/layout-client.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "hidden md:block border-t bg-muted/30 py-4 px-4 md:px-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground text-center",
                                        children: "© 2026 Shalean (Pty) Ltd, all rights reserved"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/layout-client.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/layout-client.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/layout-client.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/layout-client.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileBottomNav"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/layout-client.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/layout-client.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/layout-client.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ccb5bf91._.js.map