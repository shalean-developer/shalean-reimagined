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
"[project]/app/admin/data:2f8ceb [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcsIENsZWFuZXJVcGRhdGVJbnB1dCwgUHJpY2luZ1J1bGUgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBDbGVhbmVyIH0gZnJvbSAnQC90eXBlcy9ib29raW5nJztcclxuaW1wb3J0IHsgUHJvZmlsZSwgUHJvZmlsZVVwZGF0ZUlucHV0IH0gZnJvbSAnQC90eXBlcy9wcm9maWxlJztcclxuaW1wb3J0IHsgU2VydmljZSwgQWRkaXRpb25hbFNlcnZpY2UgfSBmcm9tICdAL3R5cGVzL3F1b3RlJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB1c2VyIGlzIGFuIGFkbWluXHJcbiAqIEFkbWlucyBhcmUgaWRlbnRpZmllZCBieSBlbWFpbCBwYXR0ZXJuOiAqQGFkbWluLnNoYWxlYW4ubG9jYWxcclxuICogb3IgdXNlciBtZXRhZGF0YSB3aXRoIHJvbGU6ICdhZG1pbidcclxuICovXHJcbmZ1bmN0aW9uIGlzQWRtaW5Vc2VyKGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQsIHVzZXJNZXRhZGF0YT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcclxuICBcclxuICAvLyBDaGVjayBlbWFpbCBwYXR0ZXJuXHJcbiAgaWYgKGVtYWlsLmluY2x1ZGVzKCdAYWRtaW4uc2hhbGVhbi5sb2NhbCcpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2hlY2sgdXNlciBtZXRhZGF0YVxyXG4gIGlmICh1c2VyTWV0YWRhdGE/LnJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYXJkY29kZWQgYWRtaW4gZW1haWxzIChmYWxsYmFjaylcclxuICBjb25zdCBhZG1pbkVtYWlscyA9IFtcclxuICAgICdhZG1pbkBzaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBhZG1pbi5zaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBzaGFsZWFuLmNvbScsXHJcbiAgXTtcclxuICBcclxuICByZXR1cm4gYWRtaW5FbWFpbHMuaW5jbHVkZXMoZW1haWwudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VycmVudCBhdXRoZW50aWNhdGVkIGFkbWluXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEFkbWluKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGFkbWluXHJcbiAgICBpZiAoIWlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGFuIGFkbWluIHVzZXInIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgYWRtaW46IHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogdXNlci51c2VyX21ldGFkYXRhPy5uYW1lIHx8IHVzZXIuZW1haWw/LnNwbGl0KCdAJylbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXJyZW50QWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2V0IGFkbWluJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXV0aGVudGljYXRlIGFkbWluIChzZXJ2ZXItc2lkZSlcclxuICogTm90ZTogQWN0dWFsIGF1dGhlbnRpY2F0aW9uIGhhcHBlbnMgY2xpZW50LXNpZGUsIHRoaXMganVzdCB2ZXJpZmllcyB0aGUgcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlQWRtaW4oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBtYXRjaGVzIGFkbWluIHBhdHRlcm5cclxuICAgIGlmICghaXNBZG1pblVzZXIoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhbiBhZG1pbiBlbWFpbCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRoZW50aWNhdGlvbiBoYXBwZW5zIGNsaWVudC1zaWRlLCB0aGlzIGlzIGp1c3QgdmFsaWRhdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhZG1pbjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWUgfHwgZGF0YS51c2VyLmVtYWlsPy5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXV0aGVudGljYXRlQWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWRtaW4gc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgYWN0aXZlQm9va2luZ3M6IG51bWJlcjtcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgbW9udGhseVJldmVudWU6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbENsZWFuZXJzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDbGVhbmVyczogbnVtYmVyO1xyXG4gICAgY29tcGxldGlvblJhdGU6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJvb2tpbmdzIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIHNlcnZpY2VfZGF0ZSwgY3JlYXRlZF9hdCwgc2VydmljZV90eXBlJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBib29raW5nc1F1ZXJ5ID0gYm9va2luZ3NRdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5LmVxKCdzZXJ2aWNlX3R5cGUnLCBmaWx0ZXIuc2VydmljZVR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjdXN0b21lcnMgKHByb2ZpbGVzKVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGN1c3RvbWVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjdXN0b21lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjbGVhbmVyc1xyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBpc19hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBjbGVhbmVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IGFsbEJvb2tpbmdzID0gYm9va2luZ3MgfHwgW107XHJcbiAgICBjb25zdCBhY3RpdmVCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcihcclxuICAgICAgKGIpID0+IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnXS5pbmNsdWRlcyhiLnN0YXR1cylcclxuICAgICkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYWlkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoKGIpID0+IGIucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyk7XHJcbiAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gcGFpZEJvb2tpbmdzLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IGIudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIHJldHVybiBzdW0gKyAoYW1vdW50ID49IDEwMDAwID8gYW1vdW50IC8gMTAwIDogYW1vdW50KTtcclxuICAgIH0sIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBtb250aGx5UGFpZEJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4gYi5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnICYmIGIuc2VydmljZV9kYXRlID49IGZpcnN0RGF5T2ZNb250aFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gbW9udGhseVBhaWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBhbW91bnQgPSBiLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICByZXR1cm4gc3VtICsgKGFtb3VudCA+PSAxMDAwMCA/IGFtb3VudCAvIDEwMCA6IGFtb3VudCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKS5sZW5ndGg7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IGFsbEJvb2tpbmdzLmxlbmd0aCA+IDAgPyAoY29tcGxldGVkQm9va2luZ3MgLyBhbGxCb29raW5ncy5sZW5ndGgpICogMTAwIDogMDtcclxuXHJcbiAgICBjb25zdCBhbGxDbGVhbmVycyA9IGNsZWFuZXJzIHx8IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlQ2xlYW5lcnMgPSBhbGxDbGVhbmVycy5maWx0ZXIoKGMpID0+IGMuaXNfYWN0aXZlKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc3RhdHM6IHtcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBhbGxCb29raW5ncy5sZW5ndGgsXHJcbiAgICAgICAgYWN0aXZlQm9va2luZ3MsXHJcbiAgICAgICAgdG90YWxSZXZlbnVlLFxyXG4gICAgICAgIG1vbnRobHlSZXZlbnVlLFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzOiBjdXN0b21lcnM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIHRvdGFsQ2xlYW5lcnM6IGFsbENsZWFuZXJzLmxlbmd0aCxcclxuICAgICAgICBhY3RpdmVDbGVhbmVycyxcclxuICAgICAgICBjb21wbGV0aW9uUmF0ZTogTWF0aC5yb3VuZChjb21wbGV0aW9uUmF0ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBZG1pblN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBib29raW5ncyB3aXRoIG9wdGlvbmFsIGZpbHRlcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCb29raW5ncyhcclxuICBmaWx0ZXI/OiB7XHJcbiAgICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBkYXRlRnJvbT86IHN0cmluZztcclxuICAgIGRhdGVUbz86IHN0cmluZztcclxuICAgIGN1c3RvbWVyRW1haWw/OiBzdHJpbmc7XHJcbiAgICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cyAmJiBmaWx0ZXIuc3RhdHVzICE9PSAnYWxsJykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnc2VydmljZV9kYXRlJywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZVRvKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmN1c3RvbWVyRW1haWwpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGZpbHRlci5jdXN0b21lckVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmNsZWFuZXJJZCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3ByZWZlcnJlZF9jbGVhbmVyX2lkJywgZmlsdGVyLmNsZWFuZXJJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgY3VzdG9tZXJzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ3VzdG9tZXJzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY3VzdG9tZXJzPzogUHJvZmlsZVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGN1c3RvbWVyczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxDdXN0b21lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjbGVhbmVyc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENsZWFuZXJzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcnM/OiBDbGVhbmVyW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2xlYW5lcnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxDbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBtb250aGx5IHVzZXIgcmVnaXN0cmF0aW9uIGRhdGEgZm9yIGNoYXJ0c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vbnRobHlVc2VyRGF0YShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VUeXBlPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogeyBtb250aDogc3RyaW5nOyBwcm92aWRlcjogbnVtYmVyOyBjbGllbnQ6IG51bWJlciB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgY2xlYW5lcnMgcXVlcnkgd2l0aCBkYXRlIGZpbHRlcnNcclxuICAgIGxldCBjbGVhbmVyc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgYCR7Y3VycmVudFllYXJ9LTAxLTAxYDtcclxuICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKTtcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBjbGVhbmVyc1F1ZXJ5ID0gY2xlYW5lcnNRdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBjbGVhbmVyc1F1ZXJ5O1xyXG5cclxuICAgIC8vIEJ1aWxkIGN1c3RvbWVycyBxdWVyeSB3aXRoIGRhdGUgZmlsdGVyc1xyXG4gICAgbGV0IGN1c3RvbWVyc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCcpO1xyXG4gICAgXHJcbiAgICBjdXN0b21lcnNRdWVyeSA9IGN1c3RvbWVyc1F1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKTtcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBjdXN0b21lcnNRdWVyeSA9IGN1c3RvbWVyc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgY3VzdG9tZXJzUXVlcnk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IgfHwgY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm91cCBieSBtb250aFxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogbnVtYmVyXTogeyBwcm92aWRlcjogbnVtYmVyOyBjbGllbnQ6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBtb250aGx5RGF0YVtpXSA9IHsgcHJvdmlkZXI6IDAsIGNsaWVudDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuZXJzPy5mb3JFYWNoKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgIGlmIChjbGVhbmVyLmNyZWF0ZWRfYXQpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY2xlYW5lci5jcmVhdGVkX2F0KTtcclxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50WWVhcikge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbZGF0ZS5nZXRNb250aCgpXS5wcm92aWRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY3VzdG9tZXJzPy5mb3JFYWNoKChjdXN0b21lcikgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXIuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXN0b21lci5jcmVhdGVkX2F0KTtcclxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50WWVhcikge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbZGF0ZS5nZXRNb250aCgpXS5jbGllbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKHtcclxuICAgICAgbW9udGgsXHJcbiAgICAgIHByb3ZpZGVyOiBtb250aGx5RGF0YVtpbmRleF0ucHJvdmlkZXIsXHJcbiAgICAgIGNsaWVudDogbW9udGhseURhdGFbaW5kZXhdLmNsaWVudCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0TW9udGhseVVzZXJEYXRhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIG1vbnRobHkgdXNlciBkYXRhJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgc3RhdHVzIGRpc3RyaWJ1dGlvbiBmb3IgZG9udXQgY2hhcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nU3RhdHVzRGlzdHJpYnV0aW9uKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IHN0YXR1czogc3RyaW5nOyBjb3VudDogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfVtdO1xyXG4gIHRvdGFsPzogbnVtYmVyO1xyXG4gIGdyb3d0aFBlcmNlbnRhZ2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCBjcmVhdGVkX2F0LCBzZXJ2aWNlX3R5cGUnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3NlcnZpY2VfdHlwZScsIGZpbHRlci5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c0NvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgY29uc3QgdG90YWwgPSBib29raW5ncz8ubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gYm9va2luZy5zdGF0dXMgfHwgJ3Vua25vd24nO1xyXG4gICAgICBzdGF0dXNDb3VudHNbc3RhdHVzXSA9IChzdGF0dXNDb3VudHNbc3RhdHVzXSB8fCAwKSArIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhzdGF0dXNDb3VudHMpLm1hcCgoW3N0YXR1cywgY291bnRdKSA9PiAoe1xyXG4gICAgICBzdGF0dXM6IHN0YXR1cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXR1cy5zbGljZSgxKSxcclxuICAgICAgY291bnQsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvdW50IC8gdG90YWwpICogMTAwKSA6IDAsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGdyb3d0aCBwZXJjZW50YWdlIChjb21wYXJlIGN1cnJlbnQgbW9udGggdG8gcHJldmlvdXMgbW9udGgpXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gbm93LmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aCA9PT0gMCA/IDExIDogY3VycmVudE1vbnRoIC0gMTtcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IGN1cnJlbnRNb250aCA9PT0gMCA/IGN1cnJlbnRZZWFyIC0gMSA6IGN1cnJlbnRZZWFyO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRNb250aFN0YXJ0ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoU3RhcnQgPSBuZXcgRGF0ZShwcmV2aW91c1llYXIsIHByZXZpb3VzTW9udGgsIDEpO1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aEVuZCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDApO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRNb250aEJvb2tpbmdzID0gYm9va2luZ3M/LmZpbHRlcigoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVkRGF0ZSA+PSBjdXJyZW50TW9udGhTdGFydCAmJiBjcmVhdGVkRGF0ZSA8IG5vdztcclxuICAgIH0pLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhCb29raW5ncyA9IGJvb2tpbmdzPy5maWx0ZXIoKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgY3JlYXRlZERhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICByZXR1cm4gY3JlYXRlZERhdGUgPj0gcHJldmlvdXNNb250aFN0YXJ0ICYmIGNyZWF0ZWREYXRlIDw9IHByZXZpb3VzTW9udGhFbmQ7XHJcbiAgICB9KS5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBsZXQgZ3Jvd3RoUGVyY2VudGFnZSA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNNb250aEJvb2tpbmdzID4gMCkge1xyXG4gICAgICBncm93dGhQZXJjZW50YWdlID0gTWF0aC5yb3VuZCgoKGN1cnJlbnRNb250aEJvb2tpbmdzIC0gcHJldmlvdXNNb250aEJvb2tpbmdzKSAvIHByZXZpb3VzTW9udGhCb29raW5ncykgKiAxMDApO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50TW9udGhCb29raW5ncyA+IDApIHtcclxuICAgICAgZ3Jvd3RoUGVyY2VudGFnZSA9IDEwMDsgLy8gMTAwJSBncm93dGggaWYgcHJldmlvdXMgbW9udGggaGFkIG5vIGJvb2tpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCB0b3RhbCwgZ3Jvd3RoUGVyY2VudGFnZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nU3RhdHVzRGlzdHJpYnV0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmcgc3RhdHVzIGRpc3RyaWJ1dGlvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBtb250aGx5IHRyYW5zYWN0aW9uL3JldmVudWUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vbnRobHlUcmFuc2FjdGlvbkRhdGEoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IG1vbnRoOiBzdHJpbmc7IGNvbXBsZXRlZDogbnVtYmVyOyBwZW5kaW5nOiBudW1iZXIgfVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0LCBwYXltZW50X3N0YXR1cywgdG90YWxfYW1vdW50LCBzZXJ2aWNlX3R5cGUnKTtcclxuXHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgYCR7Y3VycmVudFllYXJ9LTAxLTAxYDtcclxuICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3NlcnZpY2VfdHlwZScsIGZpbHRlci5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbnRobHlEYXRhOiB7IFtrZXk6IG51bWJlcl06IHsgY29tcGxldGVkOiBudW1iZXI7IHBlbmRpbmc6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBtb250aGx5RGF0YVtpXSA9IHsgY29tcGxldGVkOiAwLCBwZW5kaW5nOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKGJvb2tpbmcuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG4gICAgICAgICAgaWYgKGJvb2tpbmcucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJykge1xyXG4gICAgICAgICAgICBtb250aGx5RGF0YVttb250aF0uY29tcGxldGVkICs9IGFtb3VudDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXS5wZW5kaW5nICs9IGFtb3VudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKHtcclxuICAgICAgbW9udGgsXHJcbiAgICAgIGNvbXBsZXRlZDogTWF0aC5yb3VuZChtb250aGx5RGF0YVtpbmRleF0uY29tcGxldGVkKSxcclxuICAgICAgcGVuZGluZzogTWF0aC5yb3VuZChtb250aGx5RGF0YVtpbmRleF0ucGVuZGluZyksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE1vbnRobHlUcmFuc2FjdGlvbkRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbW9udGhseSB0cmFuc2FjdGlvbiBkYXRhJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRvcCBhY3RpdmUgdXNlcnMgKGN1c3RvbWVycyB3aXRoIG1vc3QgYm9va2luZ3MpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wQWN0aXZlVXNlcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB1c2Vycz86IEFycmF5PHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG4gICAgYm9va2luZ0NvdW50OiBudW1iZXI7XHJcbiAgICBhdmF0YXI/OiBzdHJpbmc7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEdldCBib29raW5ncyBncm91cGVkIGJ5IGN1c3RvbWVyXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGN1c3RvbWVyX2ZpcnN0X25hbWUsIGN1c3RvbWVyX2xhc3RfbmFtZScpO1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ291bnQgYm9va2luZ3MgcGVyIGN1c3RvbWVyXHJcbiAgICBjb25zdCBjdXN0b21lckNvdW50czogeyBba2V5OiBzdHJpbmddOiB7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZzsgY291bnQ6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgY29uc3QgbmFtZSA9IGAke2Jvb2tpbmcuY3VzdG9tZXJfZmlyc3RfbmFtZSB8fCAnJ30gJHtib29raW5nLmN1c3RvbWVyX2xhc3RfbmFtZSB8fCAnJ31gLnRyaW0oKTtcclxuICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgaWYgKCFjdXN0b21lckNvdW50c1tlbWFpbF0pIHtcclxuICAgICAgICAgIGN1c3RvbWVyQ291bnRzW2VtYWlsXSA9IHsgbmFtZTogbmFtZSB8fCBlbWFpbCwgZW1haWwsIGNvdW50OiAwIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c3RvbWVyQ291bnRzW2VtYWlsXS5jb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgdG9wIDEwXHJcbiAgICBjb25zdCB0b3BVc2VycyA9IE9iamVjdC52YWx1ZXMoY3VzdG9tZXJDb3VudHMpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudClcclxuICAgICAgLnNsaWNlKDAsIDEwKVxyXG4gICAgICAubWFwKCh1c2VyLCBpbmRleCkgPT4gKHtcclxuICAgICAgICBpZDogYGN1c3RvbWVyLSR7aW5kZXh9YCxcclxuICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgcm9sZTogJ0N1c3RvbWVyJyxcclxuICAgICAgICBib29raW5nQ291bnQ6IHVzZXIuY291bnQsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1c2VyczogdG9wVXNlcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0VG9wQWN0aXZlVXNlcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggdG9wIGFjdGl2ZSB1c2VycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHBvcHVsYXJpdHkgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VQb3B1bGFyaXR5KGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc3RhdHVzPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlcz86IEFycmF5PHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBcclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc2VydmljZV90eXBlLCBjcmVhdGVkX2F0LCBzdGF0dXMnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VydmljZUNvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgY29uc3QgdG90YWwgPSBib29raW5ncz8ubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc2VydmljZVR5cGUgPSBib29raW5nLnNlcnZpY2VfdHlwZSB8fCAnVW5rbm93bic7XHJcbiAgICAgIHNlcnZpY2VDb3VudHNbc2VydmljZVR5cGVdID0gKHNlcnZpY2VDb3VudHNbc2VydmljZVR5cGVdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHNlcnZpY2VDb3VudHMpXHJcbiAgICAgIC5tYXAoKFtuYW1lLCBjb3VudF0pID0+ICh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb3VudCxcclxuICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKChjb3VudCAvIHRvdGFsKSAqIDEwMCkgOiAwLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlczogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFNlcnZpY2VQb3B1bGFyaXR5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgcG9wdWxhcml0eScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByYXRpbmcgc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJhdGluZ1N0YXRzKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgYXZlcmFnZVJhdGluZzogbnVtYmVyO1xyXG4gICAgdG90YWxSYXRpbmdzOiBudW1iZXI7XHJcbiAgICBicmVha2Rvd246IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH07XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gSWYgc2VydmljZVR5cGUgZmlsdGVyIGlzIGFwcGxpZWQsIHdlIG5lZWQgdG8gZmlsdGVyIGNsZWFuZXJzIGJhc2VkIG9uIHRoZWlyIGJvb2tpbmdzXHJcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSwgd2UnbGwganVzdCBnZXQgYWxsIGNsZWFuZXJzLiBTZXJ2aWNlIHR5cGUgZmlsdGVyaW5nIHdvdWxkIHJlcXVpcmVcclxuICAgIC8vIGpvaW5pbmcgd2l0aCBib29raW5ncyB3aGljaCBpcyBtb3JlIGNvbXBsZXguXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdyYXRpbmcsIGNyZWF0ZWRfYXQnKTtcclxuXHJcbiAgICAvLyBBcHBseSBkYXRlIGZpbHRlciB0byBjbGVhbmVyIGNyZWF0aW9uIGRhdGUgaWYgcHJvdmlkZWRcclxuICAgIGlmIChmaWx0ZXI/LmRhdGVGcm9tKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXI/LmRhdGVUbykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXRpbmdzID0gY2xlYW5lcnM/Lm1hcCgoYykgPT4gYy5yYXRpbmcgfHwgMCkgfHwgW107XHJcbiAgICBjb25zdCB0b3RhbFJhdGluZ3MgPSByYXRpbmdzLmxlbmd0aDtcclxuICAgIGNvbnN0IGF2ZXJhZ2VSYXRpbmcgPSB0b3RhbFJhdGluZ3MgPiAwXHJcbiAgICAgID8gcmF0aW5ncy5yZWR1Y2UoKHN1bSwgcikgPT4gc3VtICsgciwgMCkgLyB0b3RhbFJhdGluZ3NcclxuICAgICAgOiAwO1xyXG5cclxuICAgIC8vIENvdW50IGJ5IHJhdGluZyAoMS01KVxyXG4gICAgY29uc3QgYnJlYWtkb3duOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0geyAxOiAwLCAyOiAwLCAzOiAwLCA0OiAwLCA1OiAwIH07XHJcbiAgICByYXRpbmdzLmZvckVhY2goKHJhdGluZykgPT4ge1xyXG4gICAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyYXRpbmcpO1xyXG4gICAgICBpZiAocm91bmRlZCA+PSAxICYmIHJvdW5kZWQgPD0gNSkge1xyXG4gICAgICAgIGJyZWFrZG93bltyb3VuZGVkXSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBzdGF0czoge1xyXG4gICAgICAgIGF2ZXJhZ2VSYXRpbmc6IE1hdGgucm91bmQoYXZlcmFnZVJhdGluZyAqIDEwKSAvIDEwLFxyXG4gICAgICAgIHRvdGFsUmF0aW5ncyxcclxuICAgICAgICBicmVha2Rvd24sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSYXRpbmdTdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByYXRpbmcgc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgc2VydmljZSB0eXBlIGRpc3RyaWJ1dGlvbiBmb3Igc3Vic2NyaXB0aW9uIGNoYXJ0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVR5cGVEaXN0cmlidXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHR5cGU6IHN0cmluZzsgY291bnQ6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIGNsZWFuaW5nX2ZyZXF1ZW5jeSwgY3JlYXRlZF9hdCwgc3RhdHVzJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3VwIGJ5IGZyZXF1ZW5jeSB0eXBlOiBPbmUtVGltZSwgV2Vla2x5LCBCaS1XZWVrbHksIE1vbnRobHlcclxuICAgIGNvbnN0IGZyZXF1ZW5jeUNvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICAgICAgJ09uZS1UaW1lJzogMCxcclxuICAgICAgJ1dlZWtseSc6IDAsXHJcbiAgICAgICdCaS1XZWVrbHknOiAwLFxyXG4gICAgICAnTW9udGhseSc6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeSA9IGJvb2tpbmcuY2xlYW5pbmdfZnJlcXVlbmN5IHx8ICdvbmUtdGltZSc7XHJcbiAgICAgIGlmIChmcmVxdWVuY3kgPT09ICdvbmUtdGltZScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ09uZS1UaW1lJ10rKztcclxuICAgICAgfSBlbHNlIGlmIChmcmVxdWVuY3kgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgZnJlcXVlbmN5Q291bnRzWydXZWVrbHknXSsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyZXF1ZW5jeSA9PT0gJ2JpLXdlZWtseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ0JpLVdlZWtseSddKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZnJlcXVlbmN5ID09PSAnbW9udGhseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ01vbnRobHknXSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhmcmVxdWVuY3lDb3VudHMpXHJcbiAgICAgIC5tYXAoKFt0eXBlLCBjb3VudF0pID0+ICh7IHR5cGUsIGNvdW50IH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVR5cGVEaXN0cmlidXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSB0eXBlIGRpc3RyaWJ1dGlvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBjbGVhbmVyIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGVhbmVyKFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIGRhdGE6IENsZWFuZXJVcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNsZWFuZXI/OiBDbGVhbmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHVwZGF0ZSBvYmplY3Qgd2l0aCBvbmx5IHByb3ZpZGVkIGZpZWxkc1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICBpZiAoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIGlmIChkYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucGhvbmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZSA9IGRhdGEucGhvbmU7XHJcbiAgICBpZiAoZGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pc19hY3RpdmUgPSBkYXRhLmlzX2FjdGl2ZTtcclxuICAgIGlmIChkYXRhLmJpbyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmJpbyA9IGRhdGEuYmlvO1xyXG4gICAgaWYgKGRhdGEuYXJlYXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hcmVhcyA9IGRhdGEuYXJlYXM7XHJcbiAgICBpZiAoZGF0YS5zcGVjaWFsdGllcyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnNwZWNpYWx0aWVzID0gZGF0YS5zcGVjaWFsdGllcztcclxuICAgIGlmIChkYXRhLnllYXJzX2V4cGVyaWVuY2UgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS55ZWFyc19leHBlcmllbmNlID0gZGF0YS55ZWFyc19leHBlcmllbmNlO1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX21vbmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9tb25kYXkgPSBkYXRhLmF2YWlsYWJsZV9tb25kYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfdHVlc2RheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV90dWVzZGF5ID0gZGF0YS5hdmFpbGFibGVfdHVlc2RheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfd2VkbmVzZGF5ID0gZGF0YS5hdmFpbGFibGVfd2VkbmVzZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3RodXJzZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3RodXJzZGF5ID0gZGF0YS5hdmFpbGFibGVfdGh1cnNkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfZnJpZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX2ZyaWRheSA9IGRhdGEuYXZhaWxhYmxlX2ZyaWRheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV9zYXR1cmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9zYXR1cmRheSA9IGRhdGEuYXZhaWxhYmxlX3NhdHVyZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3N1bmRheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV9zdW5kYXkgPSBkYXRhLmF2YWlsYWJsZV9zdW5kYXk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgY2xlYW5lcklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjbGVhbmVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xlYW5lcjogY2xlYW5lciBhcyBDbGVhbmVyIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUNsZWFuZXI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsZWFuZXInLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgY3VzdG9tZXIgcHJvZmlsZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyKFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBkYXRhOiBQcm9maWxlVXBkYXRlSW5wdXRcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcj86IFByb2ZpbGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXHJcbiAgICBpZiAoIWRhdGEuZmlyc3RfbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEubGFzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmVtYWlsPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lIHx8IG51bGwsXHJcbiAgICAgICAgYXZhdGFyX3VybDogZGF0YS5hdmF0YXJfdXJsIHx8IG51bGwsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjdXN0b21lcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGN1c3RvbWVyOiBjdXN0b21lciBhcyBQcm9maWxlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjdXN0b21lcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5ncyBhdmFpbGFibGUgZm9yIGFzc2lnbm1lbnQgKGV4Y2x1ZGUgY29tcGxldGVkIGFuZCBjYW5jZWxsZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ3NGb3JBc3NpZ25tZW50KGZpbHRlcj86IHtcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm5vdCgnc3RhdHVzJywgJ2luJywgJyhjb21wbGV0ZWQsY2FuY2VsbGVkKScpXHJcbiAgICAgIC5vcmRlcignc2VydmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzICYmIGZpbHRlci5zdGF0dXMgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlVG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzIGZvciBhc3NpZ25tZW50OicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Qm9va2luZ3NGb3JBc3NpZ25tZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXNzaWduIGNsZWFuZXJzIHRvIGJvb2tpbmdzIChzdXBwb3J0cyBtdWx0aS1zZWxlY3QpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmdzKFxyXG4gIGNsZWFuZXJJZHM6IHN0cmluZ1tdLFxyXG4gIGJvb2tpbmdJZHM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgdXBkYXRlZD86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcklkcyB8fCBjbGVhbmVySWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgY2xlYW5lciBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkcyB8fCBib29raW5nSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgYm9va2luZyBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgY2xlYW5lcnMgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcnMgfHwgY2xlYW5lcnMubGVuZ3RoICE9PSBjbGVhbmVySWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBjbGVhbmVycyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmdzIGV4aXN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuaW4oJ2lkJywgYm9va2luZ0lkcyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHZlcmlmeSBib29raW5ncycgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdzIHx8IGJvb2tpbmdzLmxlbmd0aCAhPT0gYm9va2luZ0lkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnT25lIG9yIG1vcmUgYm9va2luZ3Mgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBlYWNoIGJvb2tpbmdcclxuICAgIGxldCB1cGRhdGVkQ291bnQgPSAwO1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgYm9va2luZyBvZiBib29raW5ncykge1xyXG4gICAgICAvLyBHZXQgZXhpc3RpbmcgY2xlYW5lciBJRHNcclxuICAgICAgY29uc3QgZXhpc3RpbmdJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgZnJvbSBwcmVmZXJyZWRfY2xlYW5lcl9pZCBpZiBleGlzdHNcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgZnJvbSBwcmVmZXJyZWRfY2xlYW5lcl9pZHMgYXJyYXkgaWYgZXhpc3RzXHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNZXJnZSB3aXRoIG5ldyBjbGVhbmVyIElEcyAoYXZvaWQgZHVwbGljYXRlcylcclxuICAgICAgY29uc3QgYWxsQ2xlYW5lcklkcyA9IFsuLi5uZXcgU2V0KFsuLi5leGlzdGluZ0lkcywgLi4uY2xlYW5lcklkc10pXTtcclxuXHJcbiAgICAgIC8vIERldGVybWluZSBwcmVmZXJyZWRfY2xlYW5lcl9pZCAoZmlyc3QgY2xlYW5lciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgICAgY29uc3QgcHJlZmVycmVkQ2xlYW5lcklkID0gYWxsQ2xlYW5lcklkc1swXSB8fCBudWxsO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBwcmVmZXJyZWRDbGVhbmVySWQsXHJcbiAgICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGFsbENsZWFuZXJJZHMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgYm9va2luZy5pZCk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgICBlcnJvcnMucHVzaChgRmFpbGVkIHRvIHVwZGF0ZSBib29raW5nICR7Ym9va2luZy5pZH06ICR7dXBkYXRlRXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVkQ291bnQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHVwZGF0ZWRDb3VudCA+IDAsXHJcbiAgICAgICAgdXBkYXRlZDogdXBkYXRlZENvdW50LFxyXG4gICAgICAgIGVycm9yOiBgU29tZSBib29raW5ncyBmYWlsZWQgdG8gdXBkYXRlOiAke2Vycm9ycy5qb2luKCc7ICcpfWAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXBkYXRlZDogdXBkYXRlZENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBhc3NpZ24gY2xlYW5lcnMgdG8gYm9va2luZ3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgaWYgc2VydmljZSB0eXBlIGFsbG93cyBtdWx0aXBsZSBjbGVhbmVyc1xyXG4gKi9cclxuZnVuY3Rpb24gYWxsb3dzTXVsdGlwbGVDbGVhbmVycyhzZXJ2aWNlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFzZXJ2aWNlVHlwZSkgcmV0dXJuIHRydWU7IC8vIERlZmF1bHQgdG8gYWxsb3dpbmcgbXVsdGlwbGVcclxuICBcclxuICBjb25zdCBub3JtYWxpemVkID0gc2VydmljZVR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgXHJcbiAgLy8gRGVlcCBDbGVhbmluZyBhbmQgTW92ZSBJbi9PdXQgYWx3YXlzIGFsbG93IG11bHRpcGxlXHJcbiAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ2RlZXAnKSB8fCBcclxuICAgICAgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ21vdmUnKSAmJiAobm9ybWFsaXplZC5pbmNsdWRlcygnaW4vb3V0JykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnaW4gb3V0JykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnaW5vdXQnKSkpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU3RhbmRhcmQgYW5kIEFpcmJuYiBhbGxvdyBtdWx0aXBsZSAobW9yZSB0aGFuIDEpXHJcbiAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3N0YW5kYXJkJykgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygnYWlyYm5iJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBPdGhlciBzZXJ2aWNlcyBhbHNvIGFsbG93IG11bHRpcGxlXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYm9va2luZyBkZXRhaWxzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQm9va2luZyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICB1cGRhdGVEYXRhOiB7XHJcbiAgICBzZXJ2aWNlX2RhdGU/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX3RpbWU/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2FwdF91bml0Pzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHNlcnZpY2Vfc3VidXJiPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV9jaXR5Pzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfZmlyc3RfbmFtZT86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX2xhc3RfbmFtZT86IHN0cmluZztcclxuICAgIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmc7XHJcbiAgICBzcGVjaWFsX2luc3RydWN0aW9ucz86IHN0cmluZyB8IG51bGw7XHJcbiAgICBiZWRyb29tcz86IHN0cmluZztcclxuICAgIGJhdGhyb29tcz86IHN0cmluZztcclxuICAgIHNlcnZpY2VfdHlwZT86IHN0cmluZztcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZyBleGlzdHNcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdCb29raW5nLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yIHx8ICFleGlzdGluZ0Jvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBib29raW5nOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVCb29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGJvb2tpbmcgc3RhdHVzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQm9va2luZ1N0YXR1cyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IEJvb2tpbmdbJ3N0YXR1cyddXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHN0YXR1c1xyXG4gICAgY29uc3QgdmFsaWRTdGF0dXNlczogQm9va2luZ1snc3RhdHVzJ11bXSA9IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnLCAnY29tcGxldGVkJywgJ2NhbmNlbGxlZCddO1xyXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzdGF0dXMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5nIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0Jvb2tpbmcsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWV4aXN0aW5nQm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgc3RhdHVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoeyBzdGF0dXMgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9va2luZyBzdGF0dXM6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUJvb2tpbmdTdGF0dXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgc3RhdHVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXNzaWduIGNsZWFuZXJzIHRvIGEgc2luZ2xlIGJvb2tpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBjbGVhbmVySWRzOiBzdHJpbmdbXSxcclxuICByZXBsYWNlRXhpc3Rpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNsZWFuZXJJZHMgfHwgY2xlYW5lcklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQXQgbGVhc3Qgb25lIGNsZWFuZXIgbXVzdCBiZSBzZWxlY3RlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmcgZXhpc3RzIGFuZCBnZXQgc2VydmljZSB0eXBlXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBzZXJ2aWNlX3R5cGUsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNlcnZpY2UgdHlwZSBhbGxvd3MgbXVsdGlwbGUgY2xlYW5lcnMgaWYgbW9yZSB0aGFuIDEgY2xlYW5lciBpcyBiZWluZyBhc3NpZ25lZFxyXG4gICAgaWYgKGNsZWFuZXJJZHMubGVuZ3RoID4gMSAmJiAhYWxsb3dzTXVsdGlwbGVDbGVhbmVycyhib29raW5nLnNlcnZpY2VfdHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGhpcyBzZXJ2aWNlIHR5cGUgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBjbGVhbmVycycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgY2xlYW5lcnMgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcnMgfHwgY2xlYW5lcnMubGVuZ3RoICE9PSBjbGVhbmVySWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBjbGVhbmVycyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGZpbmFsIGNsZWFuZXIgSURzXHJcbiAgICBsZXQgZmluYWxDbGVhbmVySWRzOiBzdHJpbmdbXTtcclxuICAgIGlmIChyZXBsYWNlRXhpc3RpbmcpIHtcclxuICAgICAgZmluYWxDbGVhbmVySWRzID0gY2xlYW5lcklkcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBleGlzdGluZyBjbGVhbmVyIElEc1xyXG4gICAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE1lcmdlIHdpdGggbmV3IGNsZWFuZXIgSURzIChhdm9pZCBkdXBsaWNhdGVzKVxyXG4gICAgICBmaW5hbENsZWFuZXJJZHMgPSBbLi4ubmV3IFNldChbLi4uZXhpc3RpbmdJZHMsIC4uLmNsZWFuZXJJZHNdKV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHByZWZlcnJlZF9jbGVhbmVyX2lkIChmaXJzdCBjbGVhbmVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gICAgY29uc3QgcHJlZmVycmVkQ2xlYW5lcklkID0gZmluYWxDbGVhbmVySWRzWzBdIHx8IG51bGw7XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWQ6IHByZWZlcnJlZENsZWFuZXJJZCxcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZHM6IGZpbmFsQ2xlYW5lcklkcyxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXNzaWduaW5nIGNsZWFuZXJzIHRvIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFzc2lnbiBjbGVhbmVycyB0byBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGNsZWFuZXIgZnJvbSBib29raW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ2xlYW5lckZyb21Cb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCB8fCAhY2xlYW5lcklkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgYW5kIENsZWFuZXIgSUQgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIGNsZWFuZXIgSURzXHJcbiAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChpZCAmJiAhZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICBleGlzdGluZ0lkcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgY2xlYW5lciBJRFxyXG4gICAgY29uc3Qgbm9ybWFsaXplZENsZWFuZXJJZCA9IGNsZWFuZXJJZC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRJZHMgPSBleGlzdGluZ0lkcy5maWx0ZXIoaWQgPT4gaWQudG9Mb3dlckNhc2UoKS50cmltKCkgIT09IG5vcm1hbGl6ZWRDbGVhbmVySWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVkSWRzLmxlbmd0aCA9PT0gZXhpc3RpbmdJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsZWFuZXIgbm90IGZvdW5kIGluIGJvb2tpbmcgYXNzaWdubWVudCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgcHJlZmVycmVkX2NsZWFuZXJfaWQgKGZpcnN0IGNsZWFuZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSB1cGRhdGVkSWRzLmxlbmd0aCA+IDAgPyB1cGRhdGVkSWRzWzBdIDogbnVsbDtcclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZDogcHJlZmVycmVkQ2xlYW5lcklkLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogdXBkYXRlZElkcy5sZW5ndGggPiAwID8gdXBkYXRlZElkcyA6IG51bGwsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGNsZWFuZXIgZnJvbSBib29raW5nOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogdXBkYXRlZEJvb2tpbmcgYXMgQm9va2luZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZW1vdmVDbGVhbmVyRnJvbUJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gcmVtb3ZlIGNsZWFuZXIgZnJvbSBib29raW5nJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNsZWFuZXIgZWFybmluZ3MgZm9yIGEgYm9va2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsZWFuZXJFYXJuaW5ncyhcclxuICBib29raW5nSWQ6IHN0cmluZyxcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBlYXJuaW5nczoge1xyXG4gICAgYmFzZUVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICB0aXBBbW91bnQ6IG51bWJlcjtcclxuICAgIHRvdGFsRWFybmluZ3M6IG51bWJlcjtcclxuICB9IHwgbnVsbFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQgfHwgIWNsZWFuZXJJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGFuZCBDbGVhbmVyIElEIGFyZSByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMnKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVyIGlzIGFzc2lnbmVkIHRvIGJvb2tpbmdcclxuICAgIGNvbnN0IG5vcm1hbGl6ZVV1aWQgPSAoaWQ6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgIGlmICghaWQpIHJldHVybiAnJztcclxuICAgICAgcmV0dXJuIFN0cmluZyhpZCkudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZENsZWFuZXJJZCA9IG5vcm1hbGl6ZVV1aWQoY2xlYW5lcklkKTtcclxuXHJcbiAgICBjb25zdCBpc0Fzc2lnbmVkU2luZ2xlID0gYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCAmJiBcclxuICAgICAgbm9ybWFsaXplVXVpZChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSA9PT0gbm9ybWFsaXplZENsZWFuZXJJZDtcclxuXHJcbiAgICBsZXQgaXNBc3NpZ25lZE11bHRpcGxlID0gZmFsc2U7XHJcbiAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgaXNBc3NpZ25lZE11bHRpcGxlID0gYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuc29tZShcclxuICAgICAgICAoaWQ6IHN0cmluZykgPT4gbm9ybWFsaXplVXVpZChpZCkgPT09IG5vcm1hbGl6ZWRDbGVhbmVySWRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzQXNzaWduZWRTaW5nbGUgJiYgIWlzQXNzaWduZWRNdWx0aXBsZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDbGVhbmVyIGlzIG5vdCBhc3NpZ25lZCB0byB0aGlzIGJvb2tpbmcnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGV4aXN0aW5nIG92ZXJyaWRlIG9yIGNyZWF0ZSBuZXdcclxuICAgIGxldCBvdmVycmlkZTogUmVjb3JkPHN0cmluZywgeyBiYXNlRWFybmluZ3M6IG51bWJlcjsgdGlwQW1vdW50OiBudW1iZXI7IHRvdGFsRWFybmluZ3M6IG51bWJlciB9PiA9IHt9O1xyXG4gICAgaWYgKGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSAmJiB0eXBlb2YgYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBvdmVycmlkZSA9IHsgLi4uYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIG9yIHJlbW92ZSBvdmVycmlkZVxyXG4gICAgaWYgKGVhcm5pbmdzID09PSBudWxsKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvdmVycmlkZSBmb3IgdGhpcyBjbGVhbmVyXHJcbiAgICAgIGRlbGV0ZSBvdmVycmlkZVtjbGVhbmVySWRdO1xyXG4gICAgICAvLyBJZiBubyBvdmVycmlkZXMgbGVmdCwgc2V0IHRvIG51bGxcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKG92ZXJyaWRlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBvdmVycmlkZSA9IG51bGwgYXMgYW55O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXQgb3ZlcnJpZGUgZm9yIHRoaXMgY2xlYW5lclxyXG4gICAgICBvdmVycmlkZVtjbGVhbmVySWRdID0gZWFybmluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZTogb3ZlcnJpZGUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNsZWFuZXIgZWFybmluZ3M6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUNsZWFuZXJFYXJuaW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY2xlYW5lciBlYXJuaW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBib29raW5nIHdpdGggY2xlYW5lciBkZXRhaWxzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ1dpdGhDbGVhbmVycyhcclxuICBib29raW5nSWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmc/OiBCb29raW5nO1xyXG4gIGNsZWFuZXJzPzogQXJyYXk8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBob25lPzogc3RyaW5nIHwgbnVsbDtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyIElEc1xyXG4gICAgY29uc3QgY2xlYW5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgIGNsZWFuZXJJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgIH1cclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICYmICFjbGVhbmVySWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgY2xlYW5lcklkcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyIGRldGFpbHNcclxuICAgIGxldCBjbGVhbmVyczogQXJyYXk8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtYWlsPzogc3RyaW5nIHwgbnVsbDsgcGhvbmU/OiBzdHJpbmcgfCBudWxsIH0+ID0gW107XHJcbiAgICBpZiAoY2xlYW5lcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnNEYXRhLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAgIC5zZWxlY3QoJ2lkLCBuYW1lLCBlbWFpbCwgcGhvbmUnKVxyXG4gICAgICAgIC5pbignaWQnLCBjbGVhbmVySWRzKTtcclxuXHJcbiAgICAgIGlmICghY2xlYW5lcnNFcnJvciAmJiBjbGVhbmVyc0RhdGEpIHtcclxuICAgICAgICBjbGVhbmVycyA9IGNsZWFuZXJzRGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IGJvb2tpbmcgYXMgQm9va2luZywgY2xlYW5lcnMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Qm9va2luZ1dpdGhDbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5nIHdpdGggY2xlYW5lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIHNlcnZpY2VzIChpbmNsdWRpbmcgaW5hY3RpdmUpLCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxTZXJ2aWNlcygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2VzPzogU2VydmljZVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlczogKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxTZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWRkaXRpb25hbCBzZXJ2aWNlcyAoaW5jbHVkaW5nIGluYWN0aXZlKSwgb3JkZXJlZCBieSBkaXNwbGF5X29yZGVyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQWRkaXRpb25hbFNlcnZpY2VzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2VzPzogQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2Rpc3BsYXlfb3JkZXInLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRkaXRpb25hbCBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFkZGl0aW9uYWxTZXJ2aWNlczogKGRhdGEgfHwgW10pIGFzIEFkZGl0aW9uYWxTZXJ2aWNlW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0QWxsQWRkaXRpb25hbFNlcnZpY2VzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGFkZGl0aW9uYWwgc2VydmljZXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2VydmljZShkYXRhOiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGljb25fbmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlfb3JkZXI6IG51bWJlcjtcclxuICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlPzogU2VydmljZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBpZiAoIWRhdGEubmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuaWNvbl9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSWNvbiBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogc2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXHJcbiAgICAgICAgaWNvbl9uYW1lOiBkYXRhLmljb25fbmFtZSxcclxuICAgICAgICBkaXNwbGF5X29yZGVyOiBkYXRhLmRpc3BsYXlfb3JkZXIgPz8gMCxcclxuICAgICAgICBpc19hY3RpdmU6IGRhdGEuaXNfYWN0aXZlID8/IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlOiBzZXJ2aWNlIGFzIFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXJ2aWNlKFxyXG4gIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIGRhdGE6IHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBpY29uX25hbWU/OiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5X29yZGVyPzogbnVtYmVyO1xyXG4gICAgaXNfYWN0aXZlPzogYm9vbGVhbjtcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VydmljZT86IFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICBpZiAoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEubmFtZSA9IGRhdGEubmFtZS50cmltKCk7XHJcbiAgICBpZiAoZGF0YS5pY29uX25hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pY29uX25hbWUgPSBkYXRhLmljb25fbmFtZTtcclxuICAgIGlmIChkYXRhLmRpc3BsYXlfb3JkZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5kaXNwbGF5X29yZGVyID0gZGF0YS5kaXNwbGF5X29yZGVyO1xyXG4gICAgaWYgKGRhdGEuaXNfYWN0aXZlICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaXNfYWN0aXZlID0gZGF0YS5pc19hY3RpdmU7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgc2VydmljZUlkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VydmljZTogc2VydmljZSBhcyBTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZVNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgYSBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXJ2aWNlKHNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAuZGVsZXRlKClcclxuICAgICAgLmVxKCdpZCcsIHNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRlbGV0ZVNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWRkaXRpb25hbFNlcnZpY2UoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpY29uX25hbWU6IHN0cmluZztcclxuICBkaXNwbGF5X29yZGVyOiBudW1iZXI7XHJcbiAgcmVxdWlyZXNfcXVhbnRpdHk/OiBib29sZWFuO1xyXG4gIGlzX2FjdGl2ZT86IGJvb2xlYW47XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlPzogQWRkaXRpb25hbFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgaWYgKCFkYXRhLm5hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmljb25fbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ljb24gbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGFkZGl0aW9uYWxTZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxyXG4gICAgICAgIGljb25fbmFtZTogZGF0YS5pY29uX25hbWUsXHJcbiAgICAgICAgZGlzcGxheV9vcmRlcjogZGF0YS5kaXNwbGF5X29yZGVyID8/IDAsXHJcbiAgICAgICAgcmVxdWlyZXNfcXVhbnRpdHk6IGRhdGEucmVxdWlyZXNfcXVhbnRpdHkgPz8gZmFsc2UsXHJcbiAgICAgICAgaXNfYWN0aXZlOiBkYXRhLmlzX2FjdGl2ZSA/PyB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhZGRpdGlvbmFsIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZTogYWRkaXRpb25hbFNlcnZpY2UgYXMgQWRkaXRpb25hbFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY3JlYXRlQWRkaXRpb25hbFNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGFkZGl0aW9uYWwgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZGRpdGlvbmFsU2VydmljZShcclxuICBhZGRpdGlvbmFsU2VydmljZUlkOiBzdHJpbmcsXHJcbiAgZGF0YToge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGljb25fbmFtZT86IHN0cmluZztcclxuICAgIGRpc3BsYXlfb3JkZXI/OiBudW1iZXI7XHJcbiAgICByZXF1aXJlc19xdWFudGl0eT86IGJvb2xlYW47XHJcbiAgICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG4gIH1cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZGRpdGlvbmFsU2VydmljZT86IEFkZGl0aW9uYWxTZXJ2aWNlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLm5hbWUgPSBkYXRhLm5hbWUudHJpbSgpO1xyXG4gICAgaWYgKGRhdGEuaWNvbl9uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaWNvbl9uYW1lID0gZGF0YS5pY29uX25hbWU7XHJcbiAgICBpZiAoZGF0YS5kaXNwbGF5X29yZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZGlzcGxheV9vcmRlciA9IGRhdGEuZGlzcGxheV9vcmRlcjtcclxuICAgIGlmIChkYXRhLnJlcXVpcmVzX3F1YW50aXR5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEucmVxdWlyZXNfcXVhbnRpdHkgPSBkYXRhLnJlcXVpcmVzX3F1YW50aXR5O1xyXG4gICAgaWYgKGRhdGEuaXNfYWN0aXZlICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuaXNfYWN0aXZlID0gZGF0YS5pc19hY3RpdmU7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBhZGRpdGlvbmFsU2VydmljZSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgLnVwZGF0ZSh1cGRhdGVEYXRhKVxyXG4gICAgICAuZXEoJ2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYWRkaXRpb25hbFNlcnZpY2U6IGFkZGl0aW9uYWxTZXJ2aWNlIGFzIEFkZGl0aW9uYWxTZXJ2aWNlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUFkZGl0aW9uYWxTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBhZGRpdGlvbmFsIHNlcnZpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgYW4gYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWRkaXRpb25hbFNlcnZpY2UoYWRkaXRpb25hbFNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFkZGl0aW9uYWwgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlQWRkaXRpb25hbFNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGFkZGl0aW9uYWwgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhZGRpdGlvbmFsIHNlcnZpY2VzIGxpbmtlZCB0byBhIG1haW4gc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VSdWxlcyhzZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2VJZHM/OiBzdHJpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZV9hZGRpdGlvbmFsX3NlcnZpY2VfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdhZGRpdGlvbmFsX3NlcnZpY2VfaWQnKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlIHJ1bGVzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VJZHMgPSAoZGF0YSB8fCBbXSkubWFwKChydWxlOiBhbnkpID0+IHJ1bGUuYWRkaXRpb25hbF9zZXJ2aWNlX2lkKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZUlkcyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlUnVsZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBydWxlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByZWxhdGlvbnNoaXBzIGJldHdlZW4gbWFpbiBzZXJ2aWNlIGFuZCBhZGRpdGlvbmFsIHNlcnZpY2VzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2VydmljZVJ1bGVzKFxyXG4gIHNlcnZpY2VJZDogc3RyaW5nLFxyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlSWRzOiBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIERlbGV0ZSBleGlzdGluZyBydWxlc1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpO1xyXG5cclxuICAgIGlmIChkZWxldGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBzZXJ2aWNlIHJ1bGVzOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5zZXJ0IG5ldyBydWxlc1xyXG4gICAgaWYgKGFkZGl0aW9uYWxTZXJ2aWNlSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcnVsZXMgPSBhZGRpdGlvbmFsU2VydmljZUlkcy5tYXAoKGFkZGl0aW9uYWxTZXJ2aWNlSWQpID0+ICh7XHJcbiAgICAgICAgc2VydmljZV9pZDogc2VydmljZUlkLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfc2VydmljZV9pZDogYWRkaXRpb25hbFNlcnZpY2VJZCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3NlcnZpY2VfYWRkaXRpb25hbF9zZXJ2aWNlX3J1bGVzJylcclxuICAgICAgICAuaW5zZXJ0KHJ1bGVzKTtcclxuXHJcbiAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBzZXJ2aWNlIHJ1bGVzOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlU2VydmljZVJ1bGVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBzZXJ2aWNlIHJ1bGVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHByaWNpbmcgcnVsZSBmb3IgYSBzZXJ2aWNlIChiYXNlX3ByaWNlKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VQcmljZShzZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJpY2luZ1J1bGU/OiBQcmljaW5nUnVsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ3J1bGVfdHlwZScsICdiYXNlX3ByaWNlJylcclxuICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFNlcnZpY2VQcmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHByaWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIG9yIGNyZWF0ZSBwcmljaW5nIHJ1bGUgZm9yIGEgc2VydmljZSAoYmFzZV9wcmljZSlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXJ2aWNlUHJpY2UoXHJcbiAgc2VydmljZUlkOiBzdHJpbmcsXHJcbiAgcHJpY2U6IG51bWJlclxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByaWNpbmdSdWxlPzogUHJpY2luZ1J1bGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJpY2luZyBydWxlIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZywgZXJyb3I6IGNoZWNrRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgncnVsZV90eXBlJywgJ2Jhc2VfcHJpY2UnKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChjaGVja0Vycm9yICYmIGNoZWNrRXJyb3IuY29kZSAhPT0gJ1BHUlNUMTE2Jykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBzZXJ2aWNlIHByaWNlOicsIGNoZWNrRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNoZWNrRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJpY2luZyBydWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwcmljZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nLmlkKVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcmljaW5nIHJ1bGVcclxuICAgICAgLy8gR2V0IHNlcnZpY2UgdG8gZGV0ZXJtaW5lIGRpc3BsYXlfb3JkZXJcclxuICAgICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlLCBlcnJvcjogc2VydmljZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnZGlzcGxheV9vcmRlcicpXHJcbiAgICAgICAgLmVxKCdpZCcsIHNlcnZpY2VJZClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoc2VydmljZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZTonLCBzZXJ2aWNlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogc2VydmljZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBydWxlX3R5cGU6ICdiYXNlX3ByaWNlJyxcclxuICAgICAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VJZCxcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgaXNfYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgZGlzcGxheV9vcmRlcjogc2VydmljZS5kaXNwbGF5X29yZGVyIHx8IDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlU2VydmljZVByaWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBzZXJ2aWNlIHByaWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHByaWNpbmcgcnVsZSBmb3IgYW4gYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbFNlcnZpY2VQcmljZShhZGRpdGlvbmFsU2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByaWNpbmdSdWxlPzogUHJpY2luZ1J1bGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdydWxlX3R5cGUnLCAnYWRkaXRpb25hbF9zZXJ2aWNlJylcclxuICAgICAgLmVxKCdhZGRpdGlvbmFsX3NlcnZpY2VfaWQnLCBhZGRpdGlvbmFsU2VydmljZUlkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfCB1bmRlZmluZWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0QWRkaXRpb25hbFNlcnZpY2VQcmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgb3IgY3JlYXRlIHByaWNpbmcgcnVsZSBmb3IgYW4gYWRkaXRpb25hbCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWRkaXRpb25hbFNlcnZpY2VQcmljZShcclxuICBhZGRpdGlvbmFsU2VydmljZUlkOiBzdHJpbmcsXHJcbiAgcHJpY2U6IG51bWJlclxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByaWNpbmdSdWxlPzogUHJpY2luZ1J1bGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJpY2luZyBydWxlIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZywgZXJyb3I6IGNoZWNrRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgncnVsZV90eXBlJywgJ2FkZGl0aW9uYWxfc2VydmljZScpXHJcbiAgICAgIC5lcSgnYWRkaXRpb25hbF9zZXJ2aWNlX2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGNoZWNrRXJyb3IgJiYgY2hlY2tFcnJvci5jb2RlICE9PSAnUEdSU1QxMTYnKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZTonLCBjaGVja0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjaGVja0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByaWNpbmcgcnVsZVxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgICAudXBkYXRlKHsgcHJpY2UsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBleGlzdGluZy5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcmljaW5nIHJ1bGVcclxuICAgICAgLy8gR2V0IGFkZGl0aW9uYWwgc2VydmljZSB0byBkZXRlcm1pbmUgZGlzcGxheV9vcmRlclxyXG4gICAgICBjb25zdCB7IGRhdGE6IGFkZGl0aW9uYWxTZXJ2aWNlLCBlcnJvcjogc2VydmljZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgICAuc2VsZWN0KCdkaXNwbGF5X29yZGVyJylcclxuICAgICAgICAuZXEoJ2lkJywgYWRkaXRpb25hbFNlcnZpY2VJZClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoc2VydmljZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRkaXRpb25hbCBzZXJ2aWNlOicsIHNlcnZpY2VFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBzZXJ2aWNlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHJ1bGVfdHlwZTogJ2FkZGl0aW9uYWxfc2VydmljZScsXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQ6IGFkZGl0aW9uYWxTZXJ2aWNlSWQsXHJcbiAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlfb3JkZXI6IGFkZGl0aW9uYWxTZXJ2aWNlLmRpc3BsYXlfb3JkZXIgfHwgMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUFkZGl0aW9uYWxTZXJ2aWNlUHJpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gUkVWRU5VRSBBTkFMWVRJQ1MgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmV2ZW51ZSB0cmVuZHMgKGRhaWx5L3dlZWtseS9tb250aGx5KSB3aXRoIGdyb3d0aCBwZXJjZW50YWdlc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJldmVudWVUcmVuZHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBwZXJpb2Q/OiAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseSc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHBlcmlvZDogc3RyaW5nOyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXI7IGdyb3d0aD86IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IHBlcmlvZCA9IGZpbHRlcj8ucGVyaW9kIHx8ICdtb250aGx5JztcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWF0ZWRfYXQsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXZlbnVlQnlQZXJpb2Q6IHsgW2tleTogc3RyaW5nXTogeyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXIgfSB9ID0ge307XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybjtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGxldCBwZXJpb2RLZXk6IHN0cmluZztcclxuICAgICAgaWYgKHBlcmlvZCA9PT0gJ2RhaWx5Jykge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB3ZWVrU3RhcnQuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IHdlZWtTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcmV2ZW51ZUJ5UGVyaW9kW3BlcmlvZEtleV0pIHtcclxuICAgICAgICByZXZlbnVlQnlQZXJpb2RbcGVyaW9kS2V5XSA9IHsgcmV2ZW51ZTogMCwgYm9va2luZ3M6IDAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXZlbnVlQnlQZXJpb2RbcGVyaW9kS2V5XS5yZXZlbnVlICs9IGFtb3VudDtcclxuICAgICAgcmV2ZW51ZUJ5UGVyaW9kW3BlcmlvZEtleV0uYm9va2luZ3MgKz0gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRlZFBlcmlvZHMgPSBPYmplY3Qua2V5cyhyZXZlbnVlQnlQZXJpb2QpLnNvcnQoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZFBlcmlvZHMubWFwKChwZXJpb2RLZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSByZXZlbnVlQnlQZXJpb2RbcGVyaW9kS2V5XTtcclxuICAgICAgY29uc3QgcHJldmlvdXMgPSBpbmRleCA+IDAgPyByZXZlbnVlQnlQZXJpb2Rbc29ydGVkUGVyaW9kc1tpbmRleCAtIDFdXSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IGdyb3d0aCA9IHByZXZpb3VzICYmIHByZXZpb3VzLnJldmVudWUgPiAwXHJcbiAgICAgICAgPyAoKGN1cnJlbnQucmV2ZW51ZSAtIHByZXZpb3VzLnJldmVudWUpIC8gcHJldmlvdXMucmV2ZW51ZSkgKiAxMDBcclxuICAgICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGVyaW9kOiBwZXJpb2RLZXksXHJcbiAgICAgICAgcmV2ZW51ZTogTWF0aC5yb3VuZChjdXJyZW50LnJldmVudWUpLFxyXG4gICAgICAgIGJvb2tpbmdzOiBjdXJyZW50LmJvb2tpbmdzLFxyXG4gICAgICAgIGdyb3d0aDogZ3Jvd3RoICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKGdyb3d0aCAqIDEwKSAvIDEwIDogdW5kZWZpbmVkLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJldmVudWVUcmVuZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmV2ZW51ZSB0cmVuZHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmV2ZW51ZSBicmVha2Rvd24gYnkgc2VydmljZSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmV2ZW51ZUJ5U2VydmljZVR5cGUoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgc2VydmljZVR5cGU6IHN0cmluZzsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyOyBwZXJjZW50YWdlOiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXZlbnVlQnlTZXJ2aWNlOiB7IFtrZXk6IHN0cmluZ106IHsgcmV2ZW51ZTogbnVtYmVyOyBib29raW5nczogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgbGV0IHRvdGFsUmV2ZW51ZSA9IDA7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc2VydmljZVR5cGUgPSBib29raW5nLnNlcnZpY2VfdHlwZSB8fCAnVW5rbm93bic7XHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGlmICghcmV2ZW51ZUJ5U2VydmljZVtzZXJ2aWNlVHlwZV0pIHtcclxuICAgICAgICByZXZlbnVlQnlTZXJ2aWNlW3NlcnZpY2VUeXBlXSA9IHsgcmV2ZW51ZTogMCwgYm9va2luZ3M6IDAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXZlbnVlQnlTZXJ2aWNlW3NlcnZpY2VUeXBlXS5yZXZlbnVlICs9IGFtb3VudDtcclxuICAgICAgcmV2ZW51ZUJ5U2VydmljZVtzZXJ2aWNlVHlwZV0uYm9va2luZ3MgKz0gMTtcclxuICAgICAgdG90YWxSZXZlbnVlICs9IGFtb3VudDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHJldmVudWVCeVNlcnZpY2UpXHJcbiAgICAgIC5tYXAoKFtzZXJ2aWNlVHlwZSwgZGF0YV0pID0+ICh7XHJcbiAgICAgICAgc2VydmljZVR5cGUsXHJcbiAgICAgICAgcmV2ZW51ZTogTWF0aC5yb3VuZChkYXRhLnJldmVudWUpLFxyXG4gICAgICAgIGJvb2tpbmdzOiBkYXRhLmJvb2tpbmdzLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsUmV2ZW51ZSA+IDAgPyBNYXRoLnJvdW5kKChkYXRhLnJldmVudWUgLyB0b3RhbFJldmVudWUpICogMTAwICogMTApIC8gMTAgOiAwLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucmV2ZW51ZSAtIGEucmV2ZW51ZSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJldmVudWVCeVNlcnZpY2VUeXBlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJldmVudWUgYnkgc2VydmljZSB0eXBlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJldmVudWUgYnkgcGF5bWVudCBzdGF0dXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXZlbnVlQnlQYXltZW50U3RhdHVzKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHN0YXR1czogc3RyaW5nOyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3BheW1lbnRfc3RhdHVzLCB0b3RhbF9hbW91bnQnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXZlbnVlQnlTdGF0dXM6IHsgW2tleTogc3RyaW5nXTogeyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXIgfSB9ID0ge307XHJcbiAgICBsZXQgdG90YWxSZXZlbnVlID0gMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBib29raW5nLnBheW1lbnRfc3RhdHVzIHx8ICd1bmtub3duJztcclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgaWYgKCFyZXZlbnVlQnlTdGF0dXNbc3RhdHVzXSkge1xyXG4gICAgICAgIHJldmVudWVCeVN0YXR1c1tzdGF0dXNdID0geyByZXZlbnVlOiAwLCBib29raW5nczogMCB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldmVudWVCeVN0YXR1c1tzdGF0dXNdLnJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgICByZXZlbnVlQnlTdGF0dXNbc3RhdHVzXS5ib29raW5ncyArPSAxO1xyXG4gICAgICB0b3RhbFJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMocmV2ZW51ZUJ5U3RhdHVzKVxyXG4gICAgICAubWFwKChbc3RhdHVzLCBkYXRhXSkgPT4gKHtcclxuICAgICAgICBzdGF0dXM6IHN0YXR1cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXR1cy5zbGljZSgxKSxcclxuICAgICAgICByZXZlbnVlOiBNYXRoLnJvdW5kKGRhdGEucmV2ZW51ZSksXHJcbiAgICAgICAgYm9va2luZ3M6IGRhdGEuYm9va2luZ3MsXHJcbiAgICAgICAgcGVyY2VudGFnZTogdG90YWxSZXZlbnVlID4gMCA/IE1hdGgucm91bmQoKGRhdGEucmV2ZW51ZSAvIHRvdGFsUmV2ZW51ZSkgKiAxMDAgKiAxMCkgLyAxMCA6IDAsXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5yZXZlbnVlIC0gYS5yZXZlbnVlKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UmV2ZW51ZUJ5UGF5bWVudFN0YXR1czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByZXZlbnVlIGJ5IHBheW1lbnQgc3RhdHVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGF2ZXJhZ2Ugb3JkZXIgdmFsdWUgKEFPVikgdHJlbmRzIG92ZXIgdGltZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2ZXJhZ2VPcmRlclZhbHVlKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgcGVyaW9kPzogJ2RhaWx5JyB8ICd3ZWVrbHknIHwgJ21vbnRobHknO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8eyBwZXJpb2Q6IHN0cmluZzsgYW92OiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXI7IGdyb3d0aD86IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IHBlcmlvZCA9IGZpbHRlcj8ucGVyaW9kIHx8ICdtb250aGx5JztcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWF0ZWRfYXQsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhb3ZCeVBlcmlvZDogeyBba2V5OiBzdHJpbmddOiB7IHRvdGFsOiBudW1iZXI7IGNvdW50OiBudW1iZXIgfSB9ID0ge307XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybjtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIGNvbnN0IHJhd0Ftb3VudCA9IGJvb2tpbmcudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGxldCBwZXJpb2RLZXk6IHN0cmluZztcclxuICAgICAgaWYgKHBlcmlvZCA9PT0gJ2RhaWx5Jykge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB3ZWVrU3RhcnQuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IHdlZWtTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYW92QnlQZXJpb2RbcGVyaW9kS2V5XSkge1xyXG4gICAgICAgIGFvdkJ5UGVyaW9kW3BlcmlvZEtleV0gPSB7IHRvdGFsOiAwLCBjb3VudDogMCB9O1xyXG4gICAgICB9XHJcbiAgICAgIGFvdkJ5UGVyaW9kW3BlcmlvZEtleV0udG90YWwgKz0gYW1vdW50O1xyXG4gICAgICBhb3ZCeVBlcmlvZFtwZXJpb2RLZXldLmNvdW50ICs9IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb3J0ZWRQZXJpb2RzID0gT2JqZWN0LmtleXMoYW92QnlQZXJpb2QpLnNvcnQoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRlZFBlcmlvZHMubWFwKChwZXJpb2RLZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhb3ZCeVBlcmlvZFtwZXJpb2RLZXldO1xyXG4gICAgICBjb25zdCBhb3YgPSBjdXJyZW50LmNvdW50ID4gMCA/IGN1cnJlbnQudG90YWwgLyBjdXJyZW50LmNvdW50IDogMDtcclxuICAgICAgY29uc3QgcHJldmlvdXMgPSBpbmRleCA+IDAgPyBhb3ZCeVBlcmlvZFtzb3J0ZWRQZXJpb2RzW2luZGV4IC0gMV1dIDogbnVsbDtcclxuICAgICAgY29uc3QgcHJldmlvdXNBb3YgPSBwcmV2aW91cyAmJiBwcmV2aW91cy5jb3VudCA+IDAgPyBwcmV2aW91cy50b3RhbCAvIHByZXZpb3VzLmNvdW50IDogMDtcclxuICAgICAgY29uc3QgZ3Jvd3RoID0gcHJldmlvdXNBb3YgPiAwID8gKChhb3YgLSBwcmV2aW91c0FvdikgLyBwcmV2aW91c0FvdikgKiAxMDAgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlcmlvZDogcGVyaW9kS2V5LFxyXG4gICAgICAgIGFvdjogTWF0aC5yb3VuZChhb3YgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGJvb2tpbmdzOiBjdXJyZW50LmNvdW50LFxyXG4gICAgICAgIGdyb3d0aDogZ3Jvd3RoICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKGdyb3d0aCAqIDEwKSAvIDEwIDogdW5kZWZpbmVkLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEF2ZXJhZ2VPcmRlclZhbHVlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGF2ZXJhZ2Ugb3JkZXIgdmFsdWUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmV2ZW51ZSBmb3JlY2FzdCBiYXNlZCBvbiB0cmVuZHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXZlbnVlRm9yZWNhc3QoZmlsdGVyPzoge1xyXG4gIHBlcmlvZHM/OiBudW1iZXI7XHJcbiAgcGVyaW9kPzogJ2RhaWx5JyB8ICd3ZWVrbHknIHwgJ21vbnRobHknO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8eyBwZXJpb2Q6IHN0cmluZzsgZm9yZWNhc3Q6IG51bWJlcjsgbG93ZXJCb3VuZDogbnVtYmVyOyB1cHBlckJvdW5kOiBudW1iZXIgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgaGlzdG9yaWNhbCBkYXRhXHJcbiAgICBjb25zdCBoaXN0b3JpY2FsUmVzdWx0ID0gYXdhaXQgZ2V0UmV2ZW51ZVRyZW5kcyh7XHJcbiAgICAgIHBlcmlvZDogZmlsdGVyPy5wZXJpb2QgfHwgJ21vbnRobHknLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFoaXN0b3JpY2FsUmVzdWx0LnN1Y2Nlc3MgfHwgIWhpc3RvcmljYWxSZXN1bHQuZGF0YSB8fCBoaXN0b3JpY2FsUmVzdWx0LmRhdGEubGVuZ3RoIDwgMikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnN1ZmZpY2llbnQgaGlzdG9yaWNhbCBkYXRhIGZvciBmb3JlY2FzdGluZycgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXN0b3JpY2FsID0gaGlzdG9yaWNhbFJlc3VsdC5kYXRhO1xyXG4gICAgY29uc3QgcGVyaW9kcyA9IGZpbHRlcj8ucGVyaW9kcyB8fCAzO1xyXG5cclxuICAgIC8vIFNpbXBsZSBsaW5lYXIgcmVncmVzc2lvbiBmb3IgZm9yZWNhc3RpbmdcclxuICAgIGNvbnN0IG4gPSBoaXN0b3JpY2FsLmxlbmd0aDtcclxuICAgIGNvbnN0IHN1bVggPSAobiAqIChuICsgMSkpIC8gMjtcclxuICAgIGNvbnN0IHN1bVkgPSBoaXN0b3JpY2FsLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnJldmVudWUsIDApO1xyXG4gICAgY29uc3Qgc3VtWFkgPSBoaXN0b3JpY2FsLnJlZHVjZSgoc3VtLCBpdGVtLCBpbmRleCkgPT4gc3VtICsgKGluZGV4ICsgMSkgKiBpdGVtLnJldmVudWUsIDApO1xyXG4gICAgY29uc3Qgc3VtWDIgPSAobiAqIChuICsgMSkgKiAoMiAqIG4gKyAxKSkgLyA2O1xyXG5cclxuICAgIGNvbnN0IHNsb3BlID0gKG4gKiBzdW1YWSAtIHN1bVggKiBzdW1ZKSAvIChuICogc3VtWDIgLSBzdW1YICogc3VtWCk7XHJcbiAgICBjb25zdCBpbnRlcmNlcHQgPSAoc3VtWSAtIHNsb3BlICogc3VtWCkgLyBuO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzdGFuZGFyZCBkZXZpYXRpb24gZm9yIGNvbmZpZGVuY2UgaW50ZXJ2YWxzXHJcbiAgICBjb25zdCByZXNpZHVhbHMgPSBoaXN0b3JpY2FsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgcHJlZGljdGVkID0gaW50ZXJjZXB0ICsgc2xvcGUgKiAoaW5kZXggKyAxKTtcclxuICAgICAgcmV0dXJuIGl0ZW0ucmV2ZW51ZSAtIHByZWRpY3RlZDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdmFyaWFuY2UgPSByZXNpZHVhbHMucmVkdWNlKChzdW0sIHIpID0+IHN1bSArIHIgKiByLCAwKSAvIChuIC0gMik7XHJcbiAgICBjb25zdCBzdGREZXYgPSBNYXRoLnNxcnQodmFyaWFuY2UpO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGZvcmVjYXN0XHJcbiAgICBjb25zdCBmb3JlY2FzdDogQXJyYXk8eyBwZXJpb2Q6IHN0cmluZzsgZm9yZWNhc3Q6IG51bWJlcjsgbG93ZXJCb3VuZDogbnVtYmVyOyB1cHBlckJvdW5kOiBudW1iZXIgfT4gPSBbXTtcclxuICAgIGNvbnN0IGxhc3RQZXJpb2QgPSBoaXN0b3JpY2FsW2hpc3RvcmljYWwubGVuZ3RoIC0gMV0ucGVyaW9kO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZHM7IGkrKykge1xyXG4gICAgICBjb25zdCBmdXR1cmVJbmRleCA9IG4gKyBpO1xyXG4gICAgICBjb25zdCBwcmVkaWN0ZWQgPSBpbnRlcmNlcHQgKyBzbG9wZSAqIGZ1dHVyZUluZGV4O1xyXG4gICAgICBjb25zdCBjb25maWRlbmNlSW50ZXJ2YWwgPSAxLjk2ICogc3RkRGV2OyAvLyA5NSUgY29uZmlkZW5jZVxyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgcGVyaW9kIGtleSAoc2ltcGxpZmllZCAtIHdvdWxkIG5lZWQgcHJvcGVyIGRhdGUgaGFuZGxpbmcgaW4gcHJvZHVjdGlvbilcclxuICAgICAgbGV0IHBlcmlvZEtleTogc3RyaW5nO1xyXG4gICAgICBpZiAoZmlsdGVyPy5wZXJpb2QgPT09ICdkYWlseScpIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZSA9IG5ldyBEYXRlKGxhc3RQZXJpb2QpO1xyXG4gICAgICAgIGxhc3REYXRlLnNldERhdGUobGFzdERhdGUuZ2V0RGF0ZSgpICsgaSk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gbGFzdERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpbHRlcj8ucGVyaW9kID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlID0gbmV3IERhdGUobGFzdFBlcmlvZCk7XHJcbiAgICAgICAgbGFzdERhdGUuc2V0RGF0ZShsYXN0RGF0ZS5nZXREYXRlKCkgKyBpICogNyk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gbGFzdERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlID0gbmV3IERhdGUobGFzdFBlcmlvZCArICctMDEnKTtcclxuICAgICAgICBsYXN0RGF0ZS5zZXRNb250aChsYXN0RGF0ZS5nZXRNb250aCgpICsgaSk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gYCR7bGFzdERhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcobGFzdERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yZWNhc3QucHVzaCh7XHJcbiAgICAgICAgcGVyaW9kOiBwZXJpb2RLZXksXHJcbiAgICAgICAgZm9yZWNhc3Q6IE1hdGgubWF4KDAsIE1hdGgucm91bmQocHJlZGljdGVkKSksXHJcbiAgICAgICAgbG93ZXJCb3VuZDogTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChwcmVkaWN0ZWQgLSBjb25maWRlbmNlSW50ZXJ2YWwpKSxcclxuICAgICAgICB1cHBlckJvdW5kOiBNYXRoLnJvdW5kKHByZWRpY3RlZCArIGNvbmZpZGVuY2VJbnRlcnZhbCksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGZvcmVjYXN0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJldmVudWVGb3JlY2FzdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBnZW5lcmF0ZSByZXZlbnVlIGZvcmVjYXN0JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDTEVBTkVSIFBFUkZPUk1BTkNFID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogR2V0IGNsZWFuZXIgcGVyZm9ybWFuY2UgbWV0cmljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsZWFuZXJQZXJmb3JtYW5jZU1ldHJpY3MoZmlsdGVyPzoge1xyXG4gIGNsZWFuZXJJZD86IHN0cmluZztcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICB0b3RhbEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZWRCb29raW5nczogbnVtYmVyO1xyXG4gICAgY2FuY2VsbGVkQm9va2luZ3M6IG51bWJlcjtcclxuICAgIGNvbXBsZXRpb25SYXRlOiBudW1iZXI7XHJcbiAgICBvblRpbWVSYXRlOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlUmF0aW5nOiBudW1iZXI7XHJcbiAgICB0b3RhbEVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlRWFybmluZ3NQZXJCb29raW5nOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAvLyBHZXQgYWxsIGNsZWFuZXJzXHJcbiAgICBsZXQgY2xlYW5lcnNRdWVyeSA9IHN1cGFiYXNlLmZyb20oJ2NsZWFuZXJzJykuc2VsZWN0KCdpZCwgbmFtZSwgcmF0aW5nJyk7XHJcbiAgICBpZiAoZmlsdGVyPy5jbGVhbmVySWQpIHtcclxuICAgICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZXEoJ2lkJywgZmlsdGVyLmNsZWFuZXJJZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgY2xlYW5lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNsZWFuZXJzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBib29raW5ncyB3aXRoIGNsZWFuZXIgYXNzaWdubWVudHNcclxuICAgIGxldCBib29raW5nc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHN0YXR1cywgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cywgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSwgc2VydmljZV9kYXRlLCBzZXJ2aWNlX3RpbWUsIGV4cGVjdGVkX2Fycml2YWxfdGltZSwgY3JlYXRlZF9hdCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgYm9va2luZ3NRdWVyeTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGJvb2tpbmdzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgY2xlYW5lciBwZXJmb3JtYW5jZVxyXG4gICAgY29uc3QgY2xlYW5lclN0YXRzOiB7IFtrZXk6IHN0cmluZ106IHtcclxuICAgICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgIHRvdGFsQm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgY29tcGxldGVkQm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgY2FuY2VsbGVkQm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgb25UaW1lQm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgdG90YWxFYXJuaW5nczogbnVtYmVyO1xyXG4gICAgICByYXRpbmdzOiBudW1iZXJbXTtcclxuICAgIH0gfSA9IHt9O1xyXG5cclxuICAgIGNsZWFuZXJzPy5mb3JFYWNoKChjbGVhbmVyKSA9PiB7XHJcbiAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVyLmlkXSA9IHtcclxuICAgICAgICBjbGVhbmVySWQ6IGNsZWFuZXIuaWQsXHJcbiAgICAgICAgY2xlYW5lck5hbWU6IGNsZWFuZXIubmFtZSxcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiAwLFxyXG4gICAgICAgIGNvbXBsZXRlZEJvb2tpbmdzOiAwLFxyXG4gICAgICAgIGNhbmNlbGxlZEJvb2tpbmdzOiAwLFxyXG4gICAgICAgIG9uVGltZUJvb2tpbmdzOiAwLFxyXG4gICAgICAgIHRvdGFsRWFybmluZ3M6IDAsXHJcbiAgICAgICAgcmF0aW5nczogY2xlYW5lci5yYXRpbmcgPyBbY2xlYW5lci5yYXRpbmddIDogW10sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBjbGVhbmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGNsZWFuZXJJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWQgJiYgIWNsZWFuZXJJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNsZWFuZXJJZHMuZm9yRWFjaCgoY2xlYW5lcklkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGVhbmVyU3RhdHNbY2xlYW5lcklkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lcklkXS50b3RhbEJvb2tpbmdzICs9IDE7XHJcblxyXG4gICAgICAgIGlmIChib29raW5nLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVySWRdLmNvbXBsZXRlZEJvb2tpbmdzICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib29raW5nLnN0YXR1cyA9PT0gJ2NhbmNlbGxlZCcpIHtcclxuICAgICAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVySWRdLmNhbmNlbGxlZEJvb2tpbmdzICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBvbi10aW1lIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgaWYgKGJvb2tpbmcuc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiBib29raW5nLmV4cGVjdGVkX2Fycml2YWxfdGltZSAmJiBib29raW5nLnNlcnZpY2VfdGltZSkge1xyXG4gICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBuZXcgRGF0ZShgJHtib29raW5nLnNlcnZpY2VfZGF0ZX1UJHtib29raW5nLmV4cGVjdGVkX2Fycml2YWxfdGltZX1gKTtcclxuICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBEYXRlKGAke2Jvb2tpbmcuc2VydmljZV9kYXRlfVQke2Jvb2tpbmcuc2VydmljZV90aW1lfWApO1xyXG4gICAgICAgICAgaWYgKGV4cGVjdGVkIDw9IHNjaGVkdWxlZCB8fCBNYXRoLmFicyhleHBlY3RlZC5nZXRUaW1lKCkgLSBzY2hlZHVsZWQuZ2V0VGltZSgpKSA8PSAxNSAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lcklkXS5vblRpbWVCb29raW5ncyArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGVhcm5pbmdzXHJcbiAgICAgICAgaWYgKGJvb2tpbmcucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJykge1xyXG4gICAgICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGZvciBlYXJuaW5ncyBvdmVycmlkZVxyXG4gICAgICAgICAgbGV0IGVhcm5pbmdzID0gMDtcclxuICAgICAgICAgIGlmIChib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgJiYgdHlwZW9mIGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGVbY2xlYW5lcklkXTtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgICAgZWFybmluZ3MgPSBvdmVycmlkZS50b3RhbEVhcm5pbmdzIHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHQ6IDcwJSBvZiB0b3RhbCBhbW91bnQgKGNhbiBiZSBhZGp1c3RlZClcclxuICAgICAgICAgICAgZWFybmluZ3MgPSB0b3RhbEFtb3VudCAqIDAuNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjbGVhbmVyU3RhdHNbY2xlYW5lcklkXS50b3RhbEVhcm5pbmdzICs9IGVhcm5pbmdzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKGNsZWFuZXJTdGF0cykubWFwKChzdGF0cykgPT4ge1xyXG4gICAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IHN0YXRzLnRvdGFsQm9va2luZ3MgPiAwXHJcbiAgICAgICAgPyAoc3RhdHMuY29tcGxldGVkQm9va2luZ3MgLyBzdGF0cy50b3RhbEJvb2tpbmdzKSAqIDEwMFxyXG4gICAgICAgIDogMDtcclxuICAgICAgY29uc3Qgb25UaW1lUmF0ZSA9IHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzID4gMFxyXG4gICAgICAgID8gKHN0YXRzLm9uVGltZUJvb2tpbmdzIC8gc3RhdHMuY29tcGxldGVkQm9va2luZ3MpICogMTAwXHJcbiAgICAgICAgOiAwO1xyXG4gICAgICBjb25zdCBhdmVyYWdlUmF0aW5nID0gc3RhdHMucmF0aW5ncy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBzdGF0cy5yYXRpbmdzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByLCAwKSAvIHN0YXRzLnJhdGluZ3MubGVuZ3RoXHJcbiAgICAgICAgOiAwO1xyXG4gICAgICBjb25zdCBhdmVyYWdlRWFybmluZ3NQZXJCb29raW5nID0gc3RhdHMuY29tcGxldGVkQm9va2luZ3MgPiAwXHJcbiAgICAgICAgPyBzdGF0cy50b3RhbEVhcm5pbmdzIC8gc3RhdHMuY29tcGxldGVkQm9va2luZ3NcclxuICAgICAgICA6IDA7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFuZXJJZDogc3RhdHMuY2xlYW5lcklkLFxyXG4gICAgICAgIGNsZWFuZXJOYW1lOiBzdGF0cy5jbGVhbmVyTmFtZSxcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBzdGF0cy50b3RhbEJvb2tpbmdzLFxyXG4gICAgICAgIGNvbXBsZXRlZEJvb2tpbmdzOiBzdGF0cy5jb21wbGV0ZWRCb29raW5ncyxcclxuICAgICAgICBjYW5jZWxsZWRCb29raW5nczogc3RhdHMuY2FuY2VsbGVkQm9va2luZ3MsXHJcbiAgICAgICAgY29tcGxldGlvblJhdGU6IE1hdGgucm91bmQoY29tcGxldGlvblJhdGUgKiAxMCkgLyAxMCxcclxuICAgICAgICBvblRpbWVSYXRlOiBNYXRoLnJvdW5kKG9uVGltZVJhdGUgKiAxMCkgLyAxMCxcclxuICAgICAgICBhdmVyYWdlUmF0aW5nOiBNYXRoLnJvdW5kKGF2ZXJhZ2VSYXRpbmcgKiAxMCkgLyAxMCxcclxuICAgICAgICB0b3RhbEVhcm5pbmdzOiBNYXRoLnJvdW5kKHN0YXRzLnRvdGFsRWFybmluZ3MgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGF2ZXJhZ2VFYXJuaW5nc1BlckJvb2tpbmc6IE1hdGgucm91bmQoYXZlcmFnZUVhcm5pbmdzUGVyQm9va2luZyAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q2xlYW5lclBlcmZvcm1hbmNlTWV0cmljczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVyIHBlcmZvcm1hbmNlIG1ldHJpY3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdG9wIHBlcmZvcm1pbmcgY2xlYW5lcnMgYnkgdmFyaW91cyBtZXRyaWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUGVyZm9ybWVycyhmaWx0ZXI/OiB7XHJcbiAgbWV0cmljPzogJ2NvbXBsZXRpb25SYXRlJyB8ICdlYXJuaW5ncycgfCAnYm9va2luZ3MnIHwgJ3JhdGluZyc7XHJcbiAgbGltaXQ/OiBudW1iZXI7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgbWV0cmljOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgcmFuazogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlcmZvcm1hbmNlUmVzdWx0ID0gYXdhaXQgZ2V0Q2xlYW5lclBlcmZvcm1hbmNlTWV0cmljcyh7XHJcbiAgICAgIGRhdGVGcm9tOiBmaWx0ZXI/LmRhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IGZpbHRlcj8uZGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwZXJmb3JtYW5jZVJlc3VsdC5zdWNjZXNzIHx8ICFwZXJmb3JtYW5jZVJlc3VsdC5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ldHJpYyA9IGZpbHRlcj8ubWV0cmljIHx8ICdlYXJuaW5ncyc7XHJcbiAgICBjb25zdCBsaW1pdCA9IGZpbHRlcj8ubGltaXQgfHwgMTA7XHJcblxyXG4gICAgbGV0IHNvcnRlZCA9IFsuLi5wZXJmb3JtYW5jZVJlc3VsdC5kYXRhXTtcclxuICAgIGlmIChtZXRyaWMgPT09ICdjb21wbGV0aW9uUmF0ZScpIHtcclxuICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IGIuY29tcGxldGlvblJhdGUgLSBhLmNvbXBsZXRpb25SYXRlKTtcclxuICAgIH0gZWxzZSBpZiAobWV0cmljID09PSAnZWFybmluZ3MnKSB7XHJcbiAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBiLnRvdGFsRWFybmluZ3MgLSBhLnRvdGFsRWFybmluZ3MpO1xyXG4gICAgfSBlbHNlIGlmIChtZXRyaWMgPT09ICdib29raW5ncycpIHtcclxuICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IGIudG90YWxCb29raW5ncyAtIGEudG90YWxCb29raW5ncyk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gJ3JhdGluZycpIHtcclxuICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IGIuYXZlcmFnZVJhdGluZyAtIGEuYXZlcmFnZVJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gc29ydGVkLnNsaWNlKDAsIGxpbWl0KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTogbnVtYmVyO1xyXG4gICAgICBpZiAobWV0cmljID09PSAnY29tcGxldGlvblJhdGUnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmNvbXBsZXRpb25SYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gJ2Vhcm5pbmdzJykge1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS50b3RhbEVhcm5pbmdzO1xyXG4gICAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gJ2Jvb2tpbmdzJykge1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS50b3RhbEJvb2tpbmdzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5hdmVyYWdlUmF0aW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFuZXJJZDogaXRlbS5jbGVhbmVySWQsXHJcbiAgICAgICAgY2xlYW5lck5hbWU6IGl0ZW0uY2xlYW5lck5hbWUsXHJcbiAgICAgICAgbWV0cmljOiBtZXRyaWMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtZXRyaWMuc2xpY2UoMSksXHJcbiAgICAgICAgdmFsdWU6IE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHJhbms6IGluZGV4ICsgMSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRUb3BQZXJmb3JtZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHRvcCBwZXJmb3JtZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNsZWFuZXIgZWFybmluZ3MgcmVwb3J0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xlYW5lckVhcm5pbmdzUmVwb3J0KGZpbHRlcj86IHtcclxuICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHBlcmlvZD86ICdkYWlseScgfCAnd2Vla2x5JyB8ICdtb250aGx5JztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIHBlcmlvZDogc3RyaW5nO1xyXG4gICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgZWFybmluZ3M6IG51bWJlcjtcclxuICAgIGJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlRWFybmluZ3M6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IHBlcmlvZCA9IGZpbHRlcj8ucGVyaW9kIHx8ICdtb250aGx5JztcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdjbGVhbmVycycpLnNlbGVjdCgnaWQsIG5hbWUnKTtcclxuICAgIGlmIChmaWx0ZXI/LmNsZWFuZXJJZCkge1xyXG4gICAgICBjbGVhbmVyc1F1ZXJ5ID0gY2xlYW5lcnNRdWVyeS5lcSgnaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBjbGVhbmVyc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogY2xlYW5lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdzXHJcbiAgICBsZXQgYm9va2luZ3NRdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBjcmVhdGVkX2F0LCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzLCBjbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlJylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5lcSgncGF5bWVudF9zdGF0dXMnLCAncGFpZCcpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBib29raW5nc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWFybmluZ3NCeVBlcmlvZDogeyBba2V5OiBzdHJpbmddOiB7IFtjbGVhbmVySWQ6IHN0cmluZ106IHsgZWFybmluZ3M6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0gfSB9ID0ge307XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybjtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIGxldCBwZXJpb2RLZXk6IHN0cmluZztcclxuICAgICAgaWYgKHBlcmlvZCA9PT0gJ2RhaWx5Jykge1xyXG4gICAgICAgIHBlcmlvZEtleSA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB3ZWVrU3RhcnQuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkpO1xyXG4gICAgICAgIHBlcmlvZEtleSA9IHdlZWtTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNsZWFuZXJJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgY2xlYW5lcklkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhY2xlYW5lcklkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgY2xlYW5lcklkcy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgdG90YWxBbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBjbGVhbmVySWRzLmZvckVhY2goKGNsZWFuZXJJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsZWFuZXIgPSBjbGVhbmVycz8uZmluZChjID0+IGMuaWQgPT09IGNsZWFuZXJJZCk7XHJcbiAgICAgICAgaWYgKCFjbGVhbmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldKSB7XHJcbiAgICAgICAgICBlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV1bY2xlYW5lcklkXSkge1xyXG4gICAgICAgICAgZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldW2NsZWFuZXJJZF0gPSB7XHJcbiAgICAgICAgICAgIGVhcm5pbmdzOiAwLFxyXG4gICAgICAgICAgICBib29raW5nczogMCxcclxuICAgICAgICAgICAgbmFtZTogY2xlYW5lci5uYW1lLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlYXJuaW5ncyA9IDA7XHJcbiAgICAgICAgaWYgKGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSAmJiB0eXBlb2YgYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGVbY2xlYW5lcklkXTtcclxuICAgICAgICAgIGlmIChvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBlYXJuaW5ncyA9IG92ZXJyaWRlLnRvdGFsRWFybmluZ3MgfHwgMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWFybmluZ3MgPSB0b3RhbEFtb3VudCAqIDAuNzsgLy8gRGVmYXVsdCA3MCVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XVtjbGVhbmVySWRdLmVhcm5pbmdzICs9IGVhcm5pbmdzO1xyXG4gICAgICAgIGVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XVtjbGVhbmVySWRdLmJvb2tpbmdzICs9IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7XHJcbiAgICAgIHBlcmlvZDogc3RyaW5nO1xyXG4gICAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgICAgZWFybmluZ3M6IG51bWJlcjtcclxuICAgICAgYm9va2luZ3M6IG51bWJlcjtcclxuICAgICAgYXZlcmFnZUVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICB9PiA9IFtdO1xyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKGVhcm5pbmdzQnlQZXJpb2QpLmZvckVhY2goKFtwZXJpb2QsIGNsZWFuZXJEYXRhXSkgPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhjbGVhbmVyRGF0YSkuZm9yRWFjaCgoW2NsZWFuZXJJZCwgZGF0YV0pID0+IHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgICBjbGVhbmVySWQsXHJcbiAgICAgICAgICBjbGVhbmVyTmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZWFybmluZ3M6IE1hdGgucm91bmQoZGF0YS5lYXJuaW5ncyAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICBib29raW5nczogZGF0YS5ib29raW5ncyxcclxuICAgICAgICAgIGF2ZXJhZ2VFYXJuaW5nczogZGF0YS5ib29raW5ncyA+IDBcclxuICAgICAgICAgICAgPyBNYXRoLnJvdW5kKChkYXRhLmVhcm5pbmdzIC8gZGF0YS5ib29raW5ncykgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgIDogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q2xlYW5lckVhcm5pbmdzUmVwb3J0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXIgZWFybmluZ3MgcmVwb3J0JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNsZWFuZXIgYm9va2luZyBzdGF0aXN0aWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xlYW5lckJvb2tpbmdTdGF0cyhmaWx0ZXI/OiB7XHJcbiAgY2xlYW5lcklkPzogc3RyaW5nO1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIC8vIEdldCBjbGVhbmVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdjbGVhbmVycycpLnNlbGVjdCgnaWQsIG5hbWUnKTtcclxuICAgIGlmIChmaWx0ZXI/LmNsZWFuZXJJZCkge1xyXG4gICAgICBjbGVhbmVyc1F1ZXJ5ID0gY2xlYW5lcnNRdWVyeS5lcSgnaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBjbGVhbmVyc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogY2xlYW5lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdzXHJcbiAgICBsZXQgYm9va2luZ3NRdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3N0YXR1cywgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcywgY3JlYXRlZF9hdCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgYm9va2luZ3NRdWVyeTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGJvb2tpbmdzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXRzQnlDbGVhbmVyOiB7IFtrZXk6IHN0cmluZ106IHsgW3N0YXR1czogc3RyaW5nXTogbnVtYmVyOyB0b3RhbDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB9ID0ge307XHJcblxyXG4gICAgY2xlYW5lcnM/LmZvckVhY2goKGNsZWFuZXIpID0+IHtcclxuICAgICAgc3RhdHNCeUNsZWFuZXJbY2xlYW5lci5pZF0gPSB7XHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgbmFtZTogY2xlYW5lci5uYW1lLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2xlYW5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBjbGVhbmVySWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFjbGVhbmVySWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBjbGVhbmVySWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzdGF0dXMgPSBib29raW5nLnN0YXR1cyB8fCAndW5rbm93bic7XHJcblxyXG4gICAgICBjbGVhbmVySWRzLmZvckVhY2goKGNsZWFuZXJJZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdHNCeUNsZWFuZXJbY2xlYW5lcklkXSkgcmV0dXJuO1xyXG4gICAgICAgIHN0YXRzQnlDbGVhbmVyW2NsZWFuZXJJZF0udG90YWwgKz0gMTtcclxuICAgICAgICBzdGF0c0J5Q2xlYW5lcltjbGVhbmVySWRdW3N0YXR1c10gPSAoc3RhdHNCeUNsZWFuZXJbY2xlYW5lcklkXVtzdGF0dXNdIHx8IDApICsgMTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHtcclxuICAgICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICBwZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgICB9PiA9IFtdO1xyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKHN0YXRzQnlDbGVhbmVyKS5mb3JFYWNoKChbY2xlYW5lcklkLCBzdGF0c10pID0+IHtcclxuICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd0b3RhbCcgfHwga2V5ID09PSAnbmFtZScpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gc3RhdHMudG90YWwgPiAwID8gKGNvdW50IC8gc3RhdHMudG90YWwpICogMTAwIDogMDtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICBjbGVhbmVySWQsXHJcbiAgICAgICAgICBjbGVhbmVyTmFtZTogc3RhdHMubmFtZSxcclxuICAgICAgICAgIHN0YXR1czoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpLFxyXG4gICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgKiAxMCkgLyAxMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q2xlYW5lckJvb2tpbmdTdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGVhbmVyIGJvb2tpbmcgc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENVU1RPTUVSIEFOQUxZVElDUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEdldCBjdXN0b21lciBsaWZldGltZSB2YWx1ZSAoQ0xWKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyTGlmZXRpbWVWYWx1ZShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgY3VzdG9tZXJFbWFpbDogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJOYW1lOiBzdHJpbmc7XHJcbiAgICB0b3RhbFJldmVudWU6IG51bWJlcjtcclxuICAgIHRvdGFsQm9va2luZ3M6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VPcmRlclZhbHVlOiBudW1iZXI7XHJcbiAgICBjbHY6IG51bWJlcjtcclxuICAgIGZpcnN0Qm9va2luZ0RhdGU6IHN0cmluZztcclxuICAgIGxhc3RCb29raW5nRGF0ZTogc3RyaW5nO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDEsIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9maXJzdF9uYW1lLCBjdXN0b21lcl9sYXN0X25hbWUsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIGNyZWF0ZWRfYXQnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21lckRhdGE6IHsgW2VtYWlsOiBzdHJpbmddOiB7XHJcbiAgICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgcmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgICBib29raW5nczogbnVtYmVyO1xyXG4gICAgICBmaXJzdEJvb2tpbmc6IHN0cmluZztcclxuICAgICAgbGFzdEJvb2tpbmc6IHN0cmluZztcclxuICAgIH0gfSA9IHt9O1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgaWYgKCFjdXN0b21lckRhdGFbZW1haWxdKSB7XHJcbiAgICAgICAgY3VzdG9tZXJEYXRhW2VtYWlsXSA9IHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogYCR7Ym9va2luZy5jdXN0b21lcl9maXJzdF9uYW1lIHx8ICcnfSAke2Jvb2tpbmcuY3VzdG9tZXJfbGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpIHx8IGVtYWlsLFxyXG4gICAgICAgICAgcmV2ZW51ZTogMCxcclxuICAgICAgICAgIGJvb2tpbmdzOiAwLFxyXG4gICAgICAgICAgZmlyc3RCb29raW5nOiBib29raW5nLmNyZWF0ZWRfYXQgfHwgJycsXHJcbiAgICAgICAgICBsYXN0Qm9va2luZzogYm9va2luZy5jcmVhdGVkX2F0IHx8ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1c3RvbWVyRGF0YVtlbWFpbF0ucmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICAgIGN1c3RvbWVyRGF0YVtlbWFpbF0uYm9va2luZ3MgKz0gMTtcclxuXHJcbiAgICAgIGlmIChib29raW5nLmNyZWF0ZWRfYXQpIHtcclxuICAgICAgICBpZiAoIWN1c3RvbWVyRGF0YVtlbWFpbF0uZmlyc3RCb29raW5nIHx8IGJvb2tpbmcuY3JlYXRlZF9hdCA8IGN1c3RvbWVyRGF0YVtlbWFpbF0uZmlyc3RCb29raW5nKSB7XHJcbiAgICAgICAgICBjdXN0b21lckRhdGFbZW1haWxdLmZpcnN0Qm9va2luZyA9IGJvb2tpbmcuY3JlYXRlZF9hdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjdXN0b21lckRhdGFbZW1haWxdLmxhc3RCb29raW5nIHx8IGJvb2tpbmcuY3JlYXRlZF9hdCA+IGN1c3RvbWVyRGF0YVtlbWFpbF0ubGFzdEJvb2tpbmcpIHtcclxuICAgICAgICAgIGN1c3RvbWVyRGF0YVtlbWFpbF0ubGFzdEJvb2tpbmcgPSBib29raW5nLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKGN1c3RvbWVyRGF0YSkubWFwKChjdXN0b21lcikgPT4ge1xyXG4gICAgICBjb25zdCBhb3YgPSBjdXN0b21lci5ib29raW5ncyA+IDAgPyBjdXN0b21lci5yZXZlbnVlIC8gY3VzdG9tZXIuYm9va2luZ3MgOiAwO1xyXG4gICAgICAvLyBTaW1wbGUgQ0xWIGNhbGN1bGF0aW9uOiBhdmVyYWdlIG9yZGVyIHZhbHVlICogYXZlcmFnZSBwdXJjaGFzZSBmcmVxdWVuY3kgKiBjdXN0b21lciBsaWZlc3BhblxyXG4gICAgICAvLyBGb3Igc2ltcGxpY2l0eSwgdXNpbmcgdG90YWwgcmV2ZW51ZSBhcyBDTFYgcHJveHlcclxuICAgICAgY29uc3QgY2x2ID0gY3VzdG9tZXIucmV2ZW51ZTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY3VzdG9tZXJFbWFpbDogY3VzdG9tZXIuZW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJOYW1lOiBjdXN0b21lci5uYW1lLFxyXG4gICAgICAgIHRvdGFsUmV2ZW51ZTogTWF0aC5yb3VuZChjdXN0b21lci5yZXZlbnVlICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBjdXN0b21lci5ib29raW5ncyxcclxuICAgICAgICBhdmVyYWdlT3JkZXJWYWx1ZTogTWF0aC5yb3VuZChhb3YgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGNsdjogTWF0aC5yb3VuZChjbHYgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGZpcnN0Qm9va2luZ0RhdGU6IGN1c3RvbWVyLmZpcnN0Qm9va2luZyxcclxuICAgICAgICBsYXN0Qm9va2luZ0RhdGU6IGN1c3RvbWVyLmxhc3RCb29raW5nLFxyXG4gICAgICB9O1xyXG4gICAgfSkuc29ydCgoYSwgYikgPT4gYi5jbHYgLSBhLmNsdik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyTGlmZXRpbWVWYWx1ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciBsaWZldGltZSB2YWx1ZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjdXN0b21lciByZXRlbnRpb24gcmF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyUmV0ZW50aW9uUmF0ZShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzoge1xyXG4gICAgcmV0ZW50aW9uUmF0ZTogbnVtYmVyO1xyXG4gICAgbmV3Q3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICByZXR1cm5pbmdDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICBwZXJpb2RCcmVha2Rvd246IEFycmF5PHsgcGVyaW9kOiBzdHJpbmc7IG5ld0N1c3RvbWVyczogbnVtYmVyOyByZXR1cm5pbmdDdXN0b21lcnM6IG51bWJlcjsgcmV0ZW50aW9uUmF0ZTogbnVtYmVyIH0+O1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAvLyBHZXQgYWxsIGJvb2tpbmdzIGluIHRoZSBwZXJpb2RcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjcmVhdGVkX2F0JylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGZpcnN0IGJvb2tpbmcgZGF0ZSBmb3IgZWFjaCBjdXN0b21lciAoYmVmb3JlIHRoZSBwZXJpb2QpXHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmdRdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjcmVhdGVkX2F0JylcclxuICAgICAgLmx0KCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZmlyc3RCb29raW5ncywgZXJyb3I6IGZpcnN0RXJyb3IgfSA9IGF3YWl0IGZpcnN0Qm9va2luZ1F1ZXJ5O1xyXG5cclxuICAgIGlmIChmaXJzdEVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZmlyc3RFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RCb29raW5nQnlDdXN0b21lcjogeyBbZW1haWw6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICBmaXJzdEJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgaWYgKGVtYWlsICYmICFmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSkge1xyXG4gICAgICAgIGZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdID0gYm9va2luZy5jcmVhdGVkX2F0IHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjdXN0b21lcnNJblBlcmlvZDogeyBbZW1haWw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgY29uc3QgbmV3Q3VzdG9tZXJzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcclxuICAgIGNvbnN0IHJldHVybmluZ0N1c3RvbWVyczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBpZiAoIWVtYWlsKSByZXR1cm47XHJcblxyXG4gICAgICBjdXN0b21lcnNJblBlcmlvZFtlbWFpbF0gPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKGZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdKSB7XHJcbiAgICAgICAgcmV0dXJuaW5nQ3VzdG9tZXJzLmFkZChlbWFpbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3Q3VzdG9tZXJzLmFkZChlbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsQ3VzdG9tZXJzID0gT2JqZWN0LmtleXMoY3VzdG9tZXJzSW5QZXJpb2QpLmxlbmd0aDtcclxuICAgIGNvbnN0IG5ld0NvdW50ID0gbmV3Q3VzdG9tZXJzLnNpemU7XHJcbiAgICBjb25zdCByZXR1cm5pbmdDb3VudCA9IHJldHVybmluZ0N1c3RvbWVycy5zaXplO1xyXG4gICAgY29uc3QgcmV0ZW50aW9uUmF0ZSA9IHRvdGFsQ3VzdG9tZXJzID4gMCA/IChyZXR1cm5pbmdDb3VudCAvIHRvdGFsQ3VzdG9tZXJzKSAqIDEwMCA6IDA7XHJcblxyXG4gICAgLy8gTW9udGhseSBicmVha2Rvd25cclxuICAgIGNvbnN0IG1vbnRobHlEYXRhOiB7IFtrZXk6IHN0cmluZ106IHsgbmV3OiBTZXQ8c3RyaW5nPjsgcmV0dXJuaW5nOiBTZXQ8c3RyaW5nPiB9IH0gPSB7fTtcclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpO1xyXG4gICAgICBjb25zdCBtb250aEtleSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG5cclxuICAgICAgaWYgKCFtb250aGx5RGF0YVttb250aEtleV0pIHtcclxuICAgICAgICBtb250aGx5RGF0YVttb250aEtleV0gPSB7IG5ldzogbmV3IFNldCgpLCByZXR1cm5pbmc6IG5ldyBTZXQoKSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlbWFpbCA9IGJvb2tpbmcuY3VzdG9tZXJfZW1haWwgfHwgJyc7XHJcbiAgICAgIGlmICghZW1haWwpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSAmJiBuZXcgRGF0ZShmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSkgPCBuZXcgRGF0ZShib29raW5nLmNyZWF0ZWRfYXQpKSB7XHJcbiAgICAgICAgbW9udGhseURhdGFbbW9udGhLZXldLnJldHVybmluZy5hZGQoZW1haWwpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFmaXJzdEJvb2tpbmdCeUN1c3RvbWVyW2VtYWlsXSkge1xyXG4gICAgICAgIG1vbnRobHlEYXRhW21vbnRoS2V5XS5uZXcuYWRkKGVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGVyaW9kQnJlYWtkb3duID0gT2JqZWN0LmVudHJpZXMobW9udGhseURhdGEpXHJcbiAgICAgIC5zb3J0KClcclxuICAgICAgLm1hcCgoW3BlcmlvZCwgZGF0YV0pID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGRhdGEubmV3LnNpemUgKyBkYXRhLnJldHVybmluZy5zaXplO1xyXG4gICAgICAgIGNvbnN0IHJldGVudGlvbiA9IHRvdGFsID4gMCA/IChkYXRhLnJldHVybmluZy5zaXplIC8gdG90YWwpICogMTAwIDogMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgbmV3Q3VzdG9tZXJzOiBkYXRhLm5ldy5zaXplLFxyXG4gICAgICAgICAgcmV0dXJuaW5nQ3VzdG9tZXJzOiBkYXRhLnJldHVybmluZy5zaXplLFxyXG4gICAgICAgICAgcmV0ZW50aW9uUmF0ZTogTWF0aC5yb3VuZChyZXRlbnRpb24gKiAxMCkgLyAxMCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmV0ZW50aW9uUmF0ZTogTWF0aC5yb3VuZChyZXRlbnRpb25SYXRlICogMTApIC8gMTAsXHJcbiAgICAgICAgbmV3Q3VzdG9tZXJzOiBuZXdDb3VudCxcclxuICAgICAgICByZXR1cm5pbmdDdXN0b21lcnM6IHJldHVybmluZ0NvdW50LFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzLFxyXG4gICAgICAgIHBlcmlvZEJyZWFrZG93bixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyUmV0ZW50aW9uUmF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciByZXRlbnRpb24gcmF0ZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjdXN0b21lciBzZWdtZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclNlZ21lbnRhdGlvbihmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgc2VnbWVudDogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJDb3VudDogbnVtYmVyO1xyXG4gICAgdG90YWxSZXZlbnVlOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsdlJlc3VsdCA9IGF3YWl0IGdldEN1c3RvbWVyTGlmZXRpbWVWYWx1ZSh7XHJcbiAgICAgIGRhdGVGcm9tOiBmaWx0ZXI/LmRhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IGZpbHRlcj8uZGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjbHZSZXN1bHQuc3VjY2VzcyB8fCAhY2x2UmVzdWx0LmRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIGRhdGEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJzID0gY2x2UmVzdWx0LmRhdGE7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSBjdXN0b21lcnMucmVkdWNlKChzdW0sIGMpID0+IHN1bSArIGMudG90YWxSZXZlbnVlLCAwKTtcclxuICAgIGNvbnN0IGF2ZXJhZ2VSZXZlbnVlID0gY3VzdG9tZXJzLmxlbmd0aCA+IDAgPyB0b3RhbFJldmVudWUgLyBjdXN0b21lcnMubGVuZ3RoIDogMDtcclxuXHJcbiAgICAvLyBTZWdtZW50IGN1c3RvbWVyczogSGlnaCBWYWx1ZSAoPjJ4IGF2ZyksIE1lZGl1bSBWYWx1ZSAoMC41eC0yeCBhdmcpLCBMb3cgVmFsdWUgKDwwLjV4IGF2ZylcclxuICAgIGNvbnN0IHNlZ21lbnRzID0ge1xyXG4gICAgICAnSGlnaCBWYWx1ZSc6IHsgY3VzdG9tZXJzOiAwLCByZXZlbnVlOiAwIH0sXHJcbiAgICAgICdNZWRpdW0gVmFsdWUnOiB7IGN1c3RvbWVyczogMCwgcmV2ZW51ZTogMCB9LFxyXG4gICAgICAnTG93IFZhbHVlJzogeyBjdXN0b21lcnM6IDAsIHJldmVudWU6IDAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY3VzdG9tZXJzLmZvckVhY2goKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lci50b3RhbFJldmVudWUgPj0gYXZlcmFnZVJldmVudWUgKiAyKSB7XHJcbiAgICAgICAgc2VnbWVudHNbJ0hpZ2ggVmFsdWUnXS5jdXN0b21lcnMgKz0gMTtcclxuICAgICAgICBzZWdtZW50c1snSGlnaCBWYWx1ZSddLnJldmVudWUgKz0gY3VzdG9tZXIudG90YWxSZXZlbnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1c3RvbWVyLnRvdGFsUmV2ZW51ZSA+PSBhdmVyYWdlUmV2ZW51ZSAqIDAuNSkge1xyXG4gICAgICAgIHNlZ21lbnRzWydNZWRpdW0gVmFsdWUnXS5jdXN0b21lcnMgKz0gMTtcclxuICAgICAgICBzZWdtZW50c1snTWVkaXVtIFZhbHVlJ10ucmV2ZW51ZSArPSBjdXN0b21lci50b3RhbFJldmVudWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VnbWVudHNbJ0xvdyBWYWx1ZSddLmN1c3RvbWVycyArPSAxO1xyXG4gICAgICAgIHNlZ21lbnRzWydMb3cgVmFsdWUnXS5yZXZlbnVlICs9IGN1c3RvbWVyLnRvdGFsUmV2ZW51ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoc2VnbWVudHMpLm1hcCgoW3NlZ21lbnQsIGRhdGFdKSA9PiAoe1xyXG4gICAgICBzZWdtZW50LFxyXG4gICAgICBjdXN0b21lckNvdW50OiBkYXRhLmN1c3RvbWVycyxcclxuICAgICAgdG90YWxSZXZlbnVlOiBNYXRoLnJvdW5kKGRhdGEucmV2ZW51ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIGF2ZXJhZ2VSZXZlbnVlOiBkYXRhLmN1c3RvbWVycyA+IDAgPyBNYXRoLnJvdW5kKChkYXRhLnJldmVudWUgLyBkYXRhLmN1c3RvbWVycykgKiAxMDApIC8gMTAwIDogMCxcclxuICAgICAgcGVyY2VudGFnZTogY3VzdG9tZXJzLmxlbmd0aCA+IDAgPyBNYXRoLnJvdW5kKChkYXRhLmN1c3RvbWVycyAvIGN1c3RvbWVycy5sZW5ndGgpICogMTAwICogMTApIC8gMTAgOiAwLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXN0b21lclNlZ21lbnRhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciBzZWdtZW50YXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmVwZWF0IGN1c3RvbWVyIHJhdGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBlYXRDdXN0b21lclJhdGUoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHtcclxuICAgIHJlcGVhdEN1c3RvbWVyUmF0ZTogbnVtYmVyO1xyXG4gICAgdG90YWxDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIHJlcGVhdEN1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgb25lVGltZUN1c3RvbWVyczogbnVtYmVyO1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbWVyQm9va2luZ0NvdW50czogeyBbZW1haWw6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICBjdXN0b21lckJvb2tpbmdDb3VudHNbZW1haWxdID0gKGN1c3RvbWVyQm9va2luZ0NvdW50c1tlbWFpbF0gfHwgMCkgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b3RhbEN1c3RvbWVycyA9IE9iamVjdC5rZXlzKGN1c3RvbWVyQm9va2luZ0NvdW50cykubGVuZ3RoO1xyXG4gICAgY29uc3QgcmVwZWF0Q3VzdG9tZXJzID0gT2JqZWN0LnZhbHVlcyhjdXN0b21lckJvb2tpbmdDb3VudHMpLmZpbHRlcihjb3VudCA9PiBjb3VudCA+IDEpLmxlbmd0aDtcclxuICAgIGNvbnN0IG9uZVRpbWVDdXN0b21lcnMgPSB0b3RhbEN1c3RvbWVycyAtIHJlcGVhdEN1c3RvbWVycztcclxuICAgIGNvbnN0IHJlcGVhdEN1c3RvbWVyUmF0ZSA9IHRvdGFsQ3VzdG9tZXJzID4gMCA/IChyZXBlYXRDdXN0b21lcnMgLyB0b3RhbEN1c3RvbWVycykgKiAxMDAgOiAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZXBlYXRDdXN0b21lclJhdGU6IE1hdGgucm91bmQocmVwZWF0Q3VzdG9tZXJSYXRlICogMTApIC8gMTAsXHJcbiAgICAgICAgdG90YWxDdXN0b21lcnMsXHJcbiAgICAgICAgcmVwZWF0Q3VzdG9tZXJzLFxyXG4gICAgICAgIG9uZVRpbWVDdXN0b21lcnMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZXBlYXRDdXN0b21lclJhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmVwZWF0IGN1c3RvbWVyIHJhdGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VzdG9tZXIgYWNxdWlzaXRpb24gY29zdCAoc2ltcGxpZmllZCAtIHdvdWxkIG5lZWQgbWFya2V0aW5nIHNwZW5kIGRhdGEpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJBY3F1aXNpdGlvbkNvc3QoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHtcclxuICAgIG5ld0N1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgZXN0aW1hdGVkQ0FDOiBudW1iZXI7XHJcbiAgICBub3RlOiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXRlbnRpb25SZXN1bHQgPSBhd2FpdCBnZXRDdXN0b21lclJldGVudGlvblJhdGUoe1xyXG4gICAgICBkYXRlRnJvbTogZmlsdGVyPy5kYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBmaWx0ZXI/LmRhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmV0ZW50aW9uUmVzdWx0LnN1Y2Nlc3MgfHwgIXJldGVudGlvblJlc3VsdC5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0N1c3RvbWVycyA9IHJldGVudGlvblJlc3VsdC5kYXRhLm5ld0N1c3RvbWVycztcclxuXHJcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGEgcGxhY2Vob2xkZXIuIFJlYWwgQ0FDIHdvdWxkIHJlcXVpcmUgbWFya2V0aW5nIHNwZW5kIGRhdGFcclxuICAgIC8vIEZvciBub3csIHdlJ2xsIHJldHVybiBhIG5vdGUgZXhwbGFpbmluZyB0aGlzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmV3Q3VzdG9tZXJzLFxyXG4gICAgICAgIGVzdGltYXRlZENBQzogMCxcclxuICAgICAgICBub3RlOiAnQ0FDIGNhbGN1bGF0aW9uIHJlcXVpcmVzIG1hcmtldGluZyBzcGVuZCBkYXRhLiBQbGVhc2UgaW50ZWdyYXRlIG1hcmtldGluZyBjb3N0IHRyYWNraW5nIHRvIGNhbGN1bGF0ZSBhY2N1cmF0ZSBDQUMuJyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyQWNxdWlzaXRpb25Db3N0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIGFjcXVpc2l0aW9uIGNvc3QnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPTVBBUkFUSVZFIEFOQUxZVElDUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmUgY3VycmVudCBwZXJpb2Qgd2l0aCBwcmV2aW91cyBwZXJpb2RcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJpb2RDb21wYXJpc29uKGZpbHRlcj86IHtcclxuICBwZXJpb2Q/OiAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseScgfCAneWVhcmx5JztcclxuICBjdXJyZW50RGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgY3VycmVudERhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHtcclxuICAgIG1ldHJpYzogc3RyaW5nO1xyXG4gICAgY3VycmVudDogbnVtYmVyO1xyXG4gICAgcHJldmlvdXM6IG51bWJlcjtcclxuICAgIGNoYW5nZTogbnVtYmVyO1xyXG4gICAgY2hhbmdlUGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIH1bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IHBlcmlvZCA9IGZpbHRlcj8ucGVyaW9kIHx8ICdtb250aGx5JztcclxuXHJcbiAgICBsZXQgY3VycmVudERhdGVGcm9tOiBzdHJpbmc7XHJcbiAgICBsZXQgY3VycmVudERhdGVUbzogc3RyaW5nO1xyXG4gICAgbGV0IHByZXZpb3VzRGF0ZUZyb206IHN0cmluZztcclxuICAgIGxldCBwcmV2aW91c0RhdGVUbzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZiAocGVyaW9kID09PSAnZGFpbHknKSB7XHJcbiAgICAgIGN1cnJlbnREYXRlVG8gPSBub3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjdXJyZW50RGF0ZUZyb20gPSBjdXJyZW50RGF0ZVRvO1xyXG4gICAgICBjb25zdCBwcmV2RGF0ZSA9IG5ldyBEYXRlKG5vdyk7XHJcbiAgICAgIHByZXZEYXRlLnNldERhdGUocHJldkRhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcbiAgICAgIHByZXZpb3VzRGF0ZVRvID0gcHJldkRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBwcmV2aW91c0RhdGVGcm9tID0gcHJldmlvdXNEYXRlVG87XHJcbiAgICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUobm93KTtcclxuICAgICAgd2Vla1N0YXJ0LnNldERhdGUobm93LmdldERhdGUoKSAtIG5vdy5nZXREYXkoKSk7XHJcbiAgICAgIGN1cnJlbnREYXRlVG8gPSBub3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjdXJyZW50RGF0ZUZyb20gPSB3ZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjb25zdCBwcmV2V2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcclxuICAgICAgcHJldldlZWtTdGFydC5zZXREYXRlKHByZXZXZWVrU3RhcnQuZ2V0RGF0ZSgpIC0gNyk7XHJcbiAgICAgIGNvbnN0IHByZXZXZWVrRW5kID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcclxuICAgICAgcHJldldlZWtFbmQuc2V0RGF0ZShwcmV2V2Vla0VuZC5nZXREYXRlKCkgLSAxKTtcclxuICAgICAgcHJldmlvdXNEYXRlVG8gPSBwcmV2V2Vla0VuZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIHByZXZpb3VzRGF0ZUZyb20gPSBwcmV2V2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSAnbW9udGhseScpIHtcclxuICAgICAgY29uc3QgbW9udGhTdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSk7XHJcbiAgICAgIGN1cnJlbnREYXRlVG8gPSBub3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjdXJyZW50RGF0ZUZyb20gPSBtb250aFN0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY29uc3QgcHJldk1vbnRoU3RhcnQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSAxLCAxKTtcclxuICAgICAgY29uc3QgcHJldk1vbnRoRW5kID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAwKTtcclxuICAgICAgcHJldmlvdXNEYXRlVG8gPSBwcmV2TW9udGhFbmQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBwcmV2aW91c0RhdGVGcm9tID0gcHJldk1vbnRoU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICBjdXJyZW50RGF0ZVRvID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY3VycmVudERhdGVGcm9tID0geWVhclN0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgY29uc3QgcHJldlllYXJTdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpIC0gMSwgMCwgMSk7XHJcbiAgICAgIGNvbnN0IHByZXZZZWFyRW5kID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCkgLSAxLCAxMSwgMzEpO1xyXG4gICAgICBwcmV2aW91c0RhdGVUbyA9IHByZXZZZWFyRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgcHJldmlvdXNEYXRlRnJvbSA9IHByZXZZZWFyU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlIHdpdGggcHJvdmlkZWQgZGF0ZXMgaWYgYXZhaWxhYmxlXHJcbiAgICBpZiAoZmlsdGVyPy5jdXJyZW50RGF0ZUZyb20pIGN1cnJlbnREYXRlRnJvbSA9IGZpbHRlci5jdXJyZW50RGF0ZUZyb207XHJcbiAgICBpZiAoZmlsdGVyPy5jdXJyZW50RGF0ZVRvKSBjdXJyZW50RGF0ZVRvID0gZmlsdGVyLmN1cnJlbnREYXRlVG87XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgcGVyaW9kIHN0YXRzXHJcbiAgICBjb25zdCBjdXJyZW50U3RhdHNSZXN1bHQgPSBhd2FpdCBnZXRBZG1pblN0YXRzKHtcclxuICAgICAgZGF0ZUZyb206IGN1cnJlbnREYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBjdXJyZW50RGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHByZXZpb3VzIHBlcmlvZCBzdGF0c1xyXG4gICAgY29uc3QgcHJldmlvdXNTdGF0c1Jlc3VsdCA9IGF3YWl0IGdldEFkbWluU3RhdHMoe1xyXG4gICAgICBkYXRlRnJvbTogcHJldmlvdXNEYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBwcmV2aW91c0RhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY3VycmVudFN0YXRzUmVzdWx0LnN1Y2Nlc3MgfHwgIXByZXZpb3VzU3RhdHNSZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY29tcGFyaXNvbiBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50U3RhdHNSZXN1bHQuc3RhdHMgfHwge307XHJcbiAgICBjb25zdCBwcmV2aW91cyA9IHByZXZpb3VzU3RhdHNSZXN1bHQuc3RhdHMgfHwge307XHJcblxyXG4gICAgY29uc3QgbWV0cmljcyA9IFtcclxuICAgICAgeyBrZXk6ICd0b3RhbFJldmVudWUnLCBsYWJlbDogJ1RvdGFsIFJldmVudWUnIH0sXHJcbiAgICAgIHsga2V5OiAndG90YWxCb29raW5ncycsIGxhYmVsOiAnVG90YWwgQm9va2luZ3MnIH0sXHJcbiAgICAgIHsga2V5OiAndG90YWxDdXN0b21lcnMnLCBsYWJlbDogJ1RvdGFsIEN1c3RvbWVycycgfSxcclxuICAgICAgeyBrZXk6ICdhY3RpdmVCb29raW5ncycsIGxhYmVsOiAnQWN0aXZlIEJvb2tpbmdzJyB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBtZXRyaWNzLm1hcCgoeyBrZXksIGxhYmVsIH0pID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldIHx8IDA7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1trZXldIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNoYW5nZSA9IGN1cnJlbnRWYWx1ZSAtIHByZXZpb3VzVmFsdWU7XHJcbiAgICAgIGNvbnN0IGNoYW5nZVBlcmNlbnRhZ2UgPSBwcmV2aW91c1ZhbHVlID4gMCA/IChjaGFuZ2UgLyBwcmV2aW91c1ZhbHVlKSAqIDEwMCA6IChjdXJyZW50VmFsdWUgPiAwID8gMTAwIDogMCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1ldHJpYzogbGFiZWwsXHJcbiAgICAgICAgY3VycmVudDogTWF0aC5yb3VuZChjdXJyZW50VmFsdWUgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHByZXZpb3VzOiBNYXRoLnJvdW5kKHByZXZpb3VzVmFsdWUgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGNoYW5nZTogTWF0aC5yb3VuZChjaGFuZ2UgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGNoYW5nZVBlcmNlbnRhZ2U6IE1hdGgucm91bmQoY2hhbmdlUGVyY2VudGFnZSAqIDEwKSAvIDEwLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFBlcmlvZENvbXBhcmlzb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcGVyaW9kIGNvbXBhcmlzb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgeWVhci1vdmVyLXllYXIgZ3Jvd3RoXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0WWVhck92ZXJZZWFyR3Jvd3RoKGZpbHRlcj86IHtcclxuICB5ZWFyPzogbnVtYmVyO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgbW9udGg6IHN0cmluZztcclxuICAgIGN1cnJlbnRZZWFyOiBudW1iZXI7XHJcbiAgICBwcmV2aW91c1llYXI6IG51bWJlcjtcclxuICAgIGdyb3d0aDogbnVtYmVyO1xyXG4gICAgZ3Jvd3RoUGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZmlsdGVyPy55ZWFyIHx8IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gY3VycmVudFllYXIgLSAxO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHllYXIgbW9udGhseSBkYXRhXHJcbiAgICBjb25zdCBjdXJyZW50WWVhckRhdGEgPSBhd2FpdCBnZXRSZXZlbnVlVHJlbmRzKHtcclxuICAgICAgZGF0ZUZyb206IGAke2N1cnJlbnRZZWFyfS0wMS0wMWAsXHJcbiAgICAgIGRhdGVUbzogYCR7Y3VycmVudFllYXJ9LTEyLTMxYCxcclxuICAgICAgcGVyaW9kOiAnbW9udGhseScsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgcHJldmlvdXMgeWVhciBtb250aGx5IGRhdGFcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhckRhdGEgPSBhd2FpdCBnZXRSZXZlbnVlVHJlbmRzKHtcclxuICAgICAgZGF0ZUZyb206IGAke3ByZXZpb3VzWWVhcn0tMDEtMDFgLFxyXG4gICAgICBkYXRlVG86IGAke3ByZXZpb3VzWWVhcn0tMTItMzFgLFxyXG4gICAgICBwZXJpb2Q6ICdtb250aGx5JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY3VycmVudFllYXJEYXRhLnN1Y2Nlc3MgfHwgIXByZXZpb3VzWWVhckRhdGEuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggeWVhci1vdmVyLXllYXIgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50ID0gY3VycmVudFllYXJEYXRhLmRhdGEgfHwgW107XHJcbiAgICBjb25zdCBwcmV2aW91cyA9IHByZXZpb3VzWWVhckRhdGEuZGF0YSB8fCBbXTtcclxuXHJcbiAgICBjb25zdCBtb250aHMgPSBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ107XHJcbiAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50UGVyaW9kID0gYCR7Y3VycmVudFllYXJ9LSR7bW9udGh9YDtcclxuICAgICAgY29uc3QgcHJldmlvdXNQZXJpb2QgPSBgJHtwcmV2aW91c1llYXJ9LSR7bW9udGh9YDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gY3VycmVudC5maW5kKGQgPT4gZC5wZXJpb2QgPT09IGN1cnJlbnRQZXJpb2QpO1xyXG4gICAgICBjb25zdCBwcmV2aW91c0RhdGEgPSBwcmV2aW91cy5maW5kKGQgPT4gZC5wZXJpb2QgPT09IHByZXZpb3VzUGVyaW9kKTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSZXZlbnVlID0gY3VycmVudERhdGE/LnJldmVudWUgfHwgMDtcclxuICAgICAgY29uc3QgcHJldmlvdXNSZXZlbnVlID0gcHJldmlvdXNEYXRhPy5yZXZlbnVlIHx8IDA7XHJcbiAgICAgIGNvbnN0IGdyb3d0aCA9IGN1cnJlbnRSZXZlbnVlIC0gcHJldmlvdXNSZXZlbnVlO1xyXG4gICAgICBjb25zdCBncm93dGhQZXJjZW50YWdlID0gcHJldmlvdXNSZXZlbnVlID4gMCA/IChncm93dGggLyBwcmV2aW91c1JldmVudWUpICogMTAwIDogKGN1cnJlbnRSZXZlbnVlID4gMCA/IDEwMCA6IDApO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtb250aDogbW9udGhOYW1lc1tpbmRleF0sXHJcbiAgICAgICAgY3VycmVudFllYXI6IE1hdGgucm91bmQoY3VycmVudFJldmVudWUpLFxyXG4gICAgICAgIHByZXZpb3VzWWVhcjogTWF0aC5yb3VuZChwcmV2aW91c1JldmVudWUpLFxyXG4gICAgICAgIGdyb3d0aDogTWF0aC5yb3VuZChncm93dGgpLFxyXG4gICAgICAgIGdyb3d0aFBlcmNlbnRhZ2U6IE1hdGgucm91bmQoZ3Jvd3RoUGVyY2VudGFnZSAqIDEwKSAvIDEwLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFllYXJPdmVyWWVhckdyb3d0aDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB5ZWFyLW92ZXIteWVhciBncm93dGgnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgc2VydmljZSB0eXBlIHBlcmZvcm1hbmNlIGNvbXBhcmlzb25cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlVHlwZUNvbXBhcmlzb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIHNlcnZpY2VUeXBlOiBzdHJpbmc7XHJcbiAgICByZXZlbnVlOiBudW1iZXI7XHJcbiAgICBib29raW5nczogbnVtYmVyO1xyXG4gICAgYXZlcmFnZVJldmVudWU6IG51bWJlcjtcclxuICAgIGdyb3d0aDogbnVtYmVyO1xyXG4gICAgZ3Jvd3RoUGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJldmlvdXMgcGVyaW9kXHJcbiAgICBjb25zdCBjdXJyZW50U3RhcnQgPSBuZXcgRGF0ZShkYXRlRnJvbSk7XHJcbiAgICBjb25zdCBjdXJyZW50RW5kID0gbmV3IERhdGUoZGF0ZVRvKTtcclxuICAgIGNvbnN0IHBlcmlvZERheXMgPSBNYXRoLmNlaWwoKGN1cnJlbnRFbmQuZ2V0VGltZSgpIC0gY3VycmVudFN0YXJ0LmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgY29uc3QgcHJldmlvdXNTdGFydCA9IG5ldyBEYXRlKGN1cnJlbnRTdGFydCk7XHJcbiAgICBwcmV2aW91c1N0YXJ0LnNldERhdGUocHJldmlvdXNTdGFydC5nZXREYXRlKCkgLSBwZXJpb2REYXlzIC0gMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c0VuZCA9IG5ldyBEYXRlKGN1cnJlbnRTdGFydCk7XHJcbiAgICBwcmV2aW91c0VuZC5zZXREYXRlKHByZXZpb3VzRW5kLmdldERhdGUoKSAtIDEpO1xyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHBlcmlvZCBzZXJ2aWNlIHJldmVudWVcclxuICAgIGNvbnN0IGN1cnJlbnRSZXN1bHQgPSBhd2FpdCBnZXRSZXZlbnVlQnlTZXJ2aWNlVHlwZSh7XHJcbiAgICAgIGRhdGVGcm9tOiBkYXRlRnJvbSxcclxuICAgICAgZGF0ZVRvOiBkYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgcHJldmlvdXMgcGVyaW9kIHNlcnZpY2UgcmV2ZW51ZVxyXG4gICAgY29uc3QgcHJldmlvdXNSZXN1bHQgPSBhd2FpdCBnZXRSZXZlbnVlQnlTZXJ2aWNlVHlwZSh7XHJcbiAgICAgIGRhdGVGcm9tOiBwcmV2aW91c1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcclxuICAgICAgZGF0ZVRvOiBwcmV2aW91c0VuZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRSZXN1bHQuc3VjY2VzcyB8fCAhcHJldmlvdXNSZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSB0eXBlIGNvbXBhcmlzb24nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRSZXN1bHQuZGF0YSB8fCBbXTtcclxuICAgIGNvbnN0IHByZXZpb3VzID0gcHJldmlvdXNSZXN1bHQuZGF0YSB8fCBbXTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50Lm1hcCgoY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgcHJldmlvdXNJdGVtID0gcHJldmlvdXMuZmluZChwID0+IHAuc2VydmljZVR5cGUgPT09IGN1cnJlbnRJdGVtLnNlcnZpY2VUeXBlKTtcclxuICAgICAgY29uc3QgcHJldmlvdXNSZXZlbnVlID0gcHJldmlvdXNJdGVtPy5yZXZlbnVlIHx8IDA7XHJcbiAgICAgIGNvbnN0IGdyb3d0aCA9IGN1cnJlbnRJdGVtLnJldmVudWUgLSBwcmV2aW91c1JldmVudWU7XHJcbiAgICAgIGNvbnN0IGdyb3d0aFBlcmNlbnRhZ2UgPSBwcmV2aW91c1JldmVudWUgPiAwID8gKGdyb3d0aCAvIHByZXZpb3VzUmV2ZW51ZSkgKiAxMDAgOiAoY3VycmVudEl0ZW0ucmV2ZW51ZSA+IDAgPyAxMDAgOiAwKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VydmljZVR5cGU6IGN1cnJlbnRJdGVtLnNlcnZpY2VUeXBlLFxyXG4gICAgICAgIHJldmVudWU6IGN1cnJlbnRJdGVtLnJldmVudWUsXHJcbiAgICAgICAgYm9va2luZ3M6IGN1cnJlbnRJdGVtLmJvb2tpbmdzLFxyXG4gICAgICAgIGF2ZXJhZ2VSZXZlbnVlOiBjdXJyZW50SXRlbS5ib29raW5ncyA+IDAgPyBNYXRoLnJvdW5kKChjdXJyZW50SXRlbS5yZXZlbnVlIC8gY3VycmVudEl0ZW0uYm9va2luZ3MpICogMTAwKSAvIDEwMCA6IDAsXHJcbiAgICAgICAgZ3Jvd3RoOiBNYXRoLnJvdW5kKGdyb3d0aCksXHJcbiAgICAgICAgZ3Jvd3RoUGVyY2VudGFnZTogTWF0aC5yb3VuZChncm93dGhQZXJjZW50YWdlICogMTApIC8gMTAsXHJcbiAgICAgIH07XHJcbiAgICB9KS5zb3J0KChhLCBiKSA9PiBiLnJldmVudWUgLSBhLnJldmVudWUpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlVHlwZUNvbXBhcmlzb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSB0eXBlIGNvbXBhcmlzb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkF3Q3NCLDRMQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$2f8ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:2f8ceb [app-ssr] (ecmascript) <text/javascript>");
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
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$2f8ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$2f8ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:2f8ceb [app-ssr] (ecmascript) <text/javascript>");
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
                const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$2f8ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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

//# sourceMappingURL=_ed7f8381._.js.map