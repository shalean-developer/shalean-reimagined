(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
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
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SidebarProvider = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s1(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SidebarProvider.useCallback[setOpen]": (value)=>{
            const openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            } else {
                _setOpen(openState);
            }
            // This sets the cookie to keep the sidebar state.
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
        }
    }["SidebarProvider.useCallback[setOpen]"], [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SidebarProvider.useCallback[toggleSidebar]": ()=>{
            return isMobile ? setOpenMobile({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]) : setOpen({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]);
        }
    }["SidebarProvider.useCallback[toggleSidebar]"], [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SidebarProvider.useEffect": ()=>{
            const handleKeyDown = {
                "SidebarProvider.useEffect.handleKeyDown": (event)=>{
                    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                        event.preventDefault();
                        toggleSidebar();
                    }
                }
            }["SidebarProvider.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "SidebarProvider.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["SidebarProvider.useEffect"];
        }
    }["SidebarProvider.useEffect"], [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SidebarProvider.useMemo[contextValue]": ()=>({
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar
            })
    }["SidebarProvider.useMemo[contextValue]"], [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
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
}, "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
})), "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s2(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    _s2();
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                        className: "sr-only",
                        children: "Navigation Menu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}, "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
})), "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
});
_c3 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = _s3(({ className, onClick, ...props }, ref)=>{
    _s3();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c5 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 250,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c7 = SidebarRail;
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 291,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = SidebarInput;
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 306,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c13 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 311,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c15 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c16 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 318,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c17 = SidebarSeparator;
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c18 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c19 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c20 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c21 = SidebarGroup;
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c22 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 361,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c23 = SidebarGroupLabel;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c24 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 381,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c25 = SidebarGroupAction;
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c26 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c27 = SidebarGroupContent;
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c28 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 406,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c29 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c30 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 411,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c31 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
const SidebarMenuButton = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c32 = _s5(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    _s5();
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
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
}, "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
})), "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
});
_c33 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c34 = ({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c35 = SidebarMenuAction;
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c36 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 511,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c37 = SidebarMenuBadge;
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ _s6(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c38 = _s6(({ className, showIcon = false, ...props }, ref)=>{
    _s6();
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SidebarMenuSkeleton.useMemo[width]": ()=>{
            return `${Math.floor(Math.random() * 40) + 50}%`;
        }
    }["SidebarMenuSkeleton.useMemo[width]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 547,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
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
}, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=")), "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c39 = SidebarMenuSkeleton;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c40 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c41 = SidebarMenuSub;
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c42 = ({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 579,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c43 = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c44 = ({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 594,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c45 = SidebarMenuSubButton;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45;
__turbopack_context__.k.register(_c, "SidebarProvider$React.forwardRef");
__turbopack_context__.k.register(_c1, "SidebarProvider");
__turbopack_context__.k.register(_c2, "Sidebar$React.forwardRef");
__turbopack_context__.k.register(_c3, "Sidebar");
__turbopack_context__.k.register(_c4, "SidebarTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "SidebarTrigger");
__turbopack_context__.k.register(_c6, "SidebarRail$React.forwardRef");
__turbopack_context__.k.register(_c7, "SidebarRail");
__turbopack_context__.k.register(_c8, "SidebarInset$React.forwardRef");
__turbopack_context__.k.register(_c9, "SidebarInset");
__turbopack_context__.k.register(_c10, "SidebarInput$React.forwardRef");
__turbopack_context__.k.register(_c11, "SidebarInput");
__turbopack_context__.k.register(_c12, "SidebarHeader$React.forwardRef");
__turbopack_context__.k.register(_c13, "SidebarHeader");
__turbopack_context__.k.register(_c14, "SidebarFooter$React.forwardRef");
__turbopack_context__.k.register(_c15, "SidebarFooter");
__turbopack_context__.k.register(_c16, "SidebarSeparator$React.forwardRef");
__turbopack_context__.k.register(_c17, "SidebarSeparator");
__turbopack_context__.k.register(_c18, "SidebarContent$React.forwardRef");
__turbopack_context__.k.register(_c19, "SidebarContent");
__turbopack_context__.k.register(_c20, "SidebarGroup$React.forwardRef");
__turbopack_context__.k.register(_c21, "SidebarGroup");
__turbopack_context__.k.register(_c22, "SidebarGroupLabel$React.forwardRef");
__turbopack_context__.k.register(_c23, "SidebarGroupLabel");
__turbopack_context__.k.register(_c24, "SidebarGroupAction$React.forwardRef");
__turbopack_context__.k.register(_c25, "SidebarGroupAction");
__turbopack_context__.k.register(_c26, "SidebarGroupContent$React.forwardRef");
__turbopack_context__.k.register(_c27, "SidebarGroupContent");
__turbopack_context__.k.register(_c28, "SidebarMenu$React.forwardRef");
__turbopack_context__.k.register(_c29, "SidebarMenu");
__turbopack_context__.k.register(_c30, "SidebarMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c31, "SidebarMenuItem");
__turbopack_context__.k.register(_c32, "SidebarMenuButton$React.forwardRef");
__turbopack_context__.k.register(_c33, "SidebarMenuButton");
__turbopack_context__.k.register(_c34, "SidebarMenuAction$React.forwardRef");
__turbopack_context__.k.register(_c35, "SidebarMenuAction");
__turbopack_context__.k.register(_c36, "SidebarMenuBadge$React.forwardRef");
__turbopack_context__.k.register(_c37, "SidebarMenuBadge");
__turbopack_context__.k.register(_c38, "SidebarMenuSkeleton$React.forwardRef");
__turbopack_context__.k.register(_c39, "SidebarMenuSkeleton");
__turbopack_context__.k.register(_c40, "SidebarMenuSub$React.forwardRef");
__turbopack_context__.k.register(_c41, "SidebarMenuSub");
__turbopack_context__.k.register(_c42, "SidebarMenuSubItem$React.forwardRef");
__turbopack_context__.k.register(_c43, "SidebarMenuSubItem");
__turbopack_context__.k.register(_c44, "SidebarMenuSubButton$React.forwardRef");
__turbopack_context__.k.register(_c45, "SidebarMenuSubButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/components/DashboardSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardSidebar",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const menuItems = [
    {
        title: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/dashboard'
    },
    {
        title: 'Profile',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        href: '/dashboard/profile'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/dashboard/bookings'
    },
    {
        title: 'Locations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        href: '/dashboard/locations'
    },
    {
        title: 'ShaleanCred',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"],
        href: '/dashboard/shaleancred'
    },
    {
        title: 'Vouchers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/dashboard/vouchers'
    },
    {
        title: 'Refer & Earn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        href: '/dashboard/refer'
    }
];
function DashboardSidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
        className: "!top-16 !h-[calc(100vh-4rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                        asChild: true,
                                        isActive: isActive,
                                        tooltip: item.title,
                                        size: "lg",
                                        className: `[&>svg]:!size-6 ${isActive ? 'bg-primary-light text-primary' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "!w-6 !h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                className: "border-t border-sidebar-border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "lg",
                    className: "w-full justify-start",
                    onClick: ()=>{
                        // Handle logout - redirect to home for now
                        window.location.href = '/';
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "!w-6 !h-6 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/DashboardSidebar.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(DashboardSidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardSidebar;
var _c;
__turbopack_context__.k.register(_c, "DashboardSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
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
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
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
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
'use client';
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://orrmzbaztgajftxytduk.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ycm16YmF6dGdhamZ0eHl0ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkyMTgsImV4cCI6MjA4Mjk2NTIxOH0.ei-T1BLhgmaYwxxd1YQqKkvv-mgXovrY2KpPPompHPw"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/data:7c2eef [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthenticatedUser",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00d62cc413d9b16ce2ea0ff37e9486d3704f49d049":"getAuthenticatedUser"},"app/dashboard/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00d62cc413d9b16ce2ea0ff37e9486d3704f49d049", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAuthenticatedUser");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBQcm9maWxlVXBkYXRlSW5wdXQgfSBmcm9tICdAL3R5cGVzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25DcmVhdGVJbnB1dCwgTG9jYXRpb25VcGRhdGVJbnB1dCB9IGZyb20gJ0AvdHlwZXMvbG9jYXRpb24nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRVc2VyKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZW1haWw6IHVzZXIuZW1haWwgfHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEF1dGhlbnRpY2F0ZWRVc2VyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCB1c2VyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5ncyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nLFxyXG4gIGZpbHRlcj86ICdhbGwnIHwgJ3VwY29taW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2NhbmNlbGxlZCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IHN0YXR1cyBmaWx0ZXJcclxuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICBpZiAoZmlsdGVyID09PSAndXBjb21pbmcnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQm9va2luZ1N0YXRzKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzdGF0cz86IHtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB1cGNvbWluZzogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBjYW5jZWxsZWQ6IG51bWJlcjtcclxuICAgIHRvdGFsU3BlbnQ6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJyk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHtcclxuICAgICAgdG90YWw6IGRhdGE/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICB1cGNvbWluZzogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ3BlbmRpbmcnIHx8IGIuc3RhdHVzID09PSAnY29uZmlybWVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIGNvbXBsZXRlZDogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBjYW5jZWxsZWQ6IGRhdGE/LmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKS5sZW5ndGggfHwgMCxcclxuICAgICAgdG90YWxTcGVudDogZGF0YVxyXG4gICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcpXHJcbiAgICAgICAgLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi50b3RhbF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByb2ZpbGU/OiBQcm9maWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgcHJvZmlsZSBmcm9tIHByb2ZpbGVzIHRhYmxlXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdwcm9maWxlcycpLnNlbGVjdCgnKicpO1xyXG5cclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVEYXRhLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBxdWVyeS5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIC8vIElmIHByb2ZpbGUgZXhpc3RzLCByZXR1cm4gaXRcclxuICAgIGlmIChwcm9maWxlRGF0YSAmJiAhcHJvZmlsZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2ZpbGU6IHByb2ZpbGVEYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gcHJvZmlsZSBleGlzdHMsIGRlcml2ZSBmcm9tIG1vc3QgcmVjZW50IGJvb2tpbmdcclxuICAgIGxldCBib29raW5nUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9maXJzdF9uYW1lLCBjdXN0b21lcl9sYXN0X25hbWUsIGN1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSk7XHJcblxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIGJvb2tpbmdRdWVyeSA9IGJvb2tpbmdRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdEYXRhLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBib29raW5nUXVlcnkubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nRGF0YSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnTm8gcHJvZmlsZSBvciBib29raW5nIGZvdW5kLiBQbGVhc2UgY3JlYXRlIGEgYm9va2luZyBmaXJzdC4nLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIHByb2ZpbGUgb2JqZWN0IGZyb20gYm9va2luZyBkYXRhXHJcbiAgICBjb25zdCBkZXJpdmVkUHJvZmlsZTogUHJvZmlsZSA9IHtcclxuICAgICAgaWQ6ICcnLCAvLyBXaWxsIGJlIGdlbmVyYXRlZCB3aGVuIHNhdmVkXHJcbiAgICAgIGVtYWlsOiBib29raW5nRGF0YS5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcGhvbmU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX3Bob25lIHx8IG51bGwsXHJcbiAgICAgIGZpcnN0X25hbWU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX2ZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZTogYm9va2luZ0RhdGEuY3VzdG9tZXJfbGFzdF9uYW1lLFxyXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogZGVyaXZlZFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljdHVyZShcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGZpbGVEYXRhOiBzdHJpbmcsIC8vIGJhc2U2NCBlbmNvZGVkIHN0cmluZ1xyXG4gIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgZmlsZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVybD86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBVc2UgYWRtaW4gY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZHMgaWYgc2VydmljZSByb2xlIGtleSBpcyBhdmFpbGFibGVcclxuICAgIC8vIElmIG5vdCBhdmFpbGFibGUsIGZhbGwgYmFjayB0byBhdXRoZW50aWNhdGVkIGNsaWVudCBmb3Igc3RvcmFnZSAoc3RvcmFnZSBwb2xpY2llcyBtYXkgc3RpbGwgd29yaylcclxuICAgIGxldCBzdXBhYmFzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ+KchSBVc2luZyBhZG1pbiBjbGllbnQgZm9yIHN0b3JhZ2UgdXBsb2FkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBTZXJ2aWNlIHJvbGUga2V5IG5vdCBzZXQsIHVzaW5nIGF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZCcpO1xyXG4gICAgICBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxyXG4gICAgY29uc3QgdmFsaWRJbWFnZVR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvd2VicCddO1xyXG4gICAgaWYgKCF2YWxpZEltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGEgSlBFRywgUE5HLCBvciBXZWJQIGltYWdlLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWNvZGUgYmFzZTY0IGRhdGFcclxuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBmaWxlRGF0YS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sICcnKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsICdiYXNlNjQnKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCA1TUIpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNSAqIDEwMjQgKiAxMDI0OyAvLyA1TUIgaW4gYnl0ZXNcclxuICAgIGlmIChidWZmZXIubGVuZ3RoID4gbWF4U2l6ZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGaWxlIHNpemUgdG9vIGxhcmdlLiBQbGVhc2UgdXBsb2FkIGFuIGltYWdlIHNtYWxsZXIgdGhhbiA1TUIuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZSB1c2luZyBlbWFpbCBhbmQgdGltZXN0YW1wXHJcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fCAnanBnJztcclxuICAgIGNvbnN0IHNhbml0aXplZEVtYWlsID0gZW1haWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICdfJyk7XHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke3Nhbml0aXplZEVtYWlsfV8ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VuaXF1ZUZpbGVOYW1lfWA7XHJcblxyXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcclxuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlLXBpY3R1cmVzJylcclxuICAgICAgLnVwbG9hZChmaWxlUGF0aCwgYnVmZmVyLCB7XHJcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGVUeXBlLFxyXG4gICAgICAgIHVwc2VydDogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIFN0b3JhZ2UgdXBsb2FkIGVycm9yOicsIHVwbG9hZEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1cGxvYWRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogdXBsb2FkRXJyb3Iuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIGVycm9yOiB1cGxvYWRFcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RvcmFnZSBSTFMgZXJyb3JzXHJcbiAgICAgICAgaWYgKHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBsb2FkRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ1JMUycpIHx8XHJcbiAgICAgICAgICAgIHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdwb2xpY3knKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBSTFMgcG9saWN5IGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgcG9saWNpZXMgaW4gU3VwYWJhc2UgU3RvcmFnZS4gVGhlIGJ1Y2tldCBuZWVkcyBwb2xpY2llcyB0aGF0IGFsbG93IGF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gdXBsb2FkIGZpbGVzLicsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogdXBsb2FkRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIGJ1Y2tldCBkb2Vzbid0IGV4aXN0LCByZXR1cm4gaGVscGZ1bCBlcnJvclxyXG4gICAgICAgIGlmICh1cGxvYWRFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdub3QgZm91bmQnKSB8fCB1cGxvYWRFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdCdWNrZXQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBub3QgY29uZmlndXJlZC4gUGxlYXNlIGNyZWF0ZSBhIFwicHJvZmlsZS1waWN0dXJlc1wiIGJ1Y2tldCBpbiBTdXBhYmFzZSBTdG9yYWdlLicsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogdXBsb2FkRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgICAgZXJyb3I6IHVwbG9hZEVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byB1cGxvYWQgZmlsZScsXHJcbiAgICAgICAgICBlcnJvckRldGFpbHM6IHVwbG9hZEVycm9yLmVycm9yIHx8IHVwbG9hZEVycm9yLnN0YXR1c0NvZGU/LnRvU3RyaW5nKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vIEdldCBwdWJsaWMgVVJMXHJcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IHVybERhdGEucHVibGljVXJsIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwbG9hZFByb2ZpbGVQaWN0dXJlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwbG9hZCBwcm9maWxlIHBpY3R1cmUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9maWxlUGljdHVyZShlbWFpbDogc3RyaW5nLCBhdmF0YXJVcmw6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBFeHRyYWN0IGZpbGUgcGF0aCBmcm9tIFVSTFxyXG4gICAgLy8gVVJMIGZvcm1hdDogaHR0cHM6Ly9bcHJvamVjdF0uc3VwYWJhc2UuY28vc3RvcmFnZS92MS9vYmplY3QvcHVibGljL3Byb2ZpbGUtcGljdHVyZXMvYXZhdGFycy9maWxlbmFtZS5qcGdcclxuICAgIGNvbnN0IHVybFBhdHRlcm4gPSAvXFwvcHJvZmlsZS1waWN0dXJlc1xcLyguKykkLztcclxuICAgIGNvbnN0IG1hdGNoID0gYXZhdGFyVXJsLm1hdGNoKHVybFBhdHRlcm4pO1xyXG4gICAgXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaFsxXSkge1xyXG4gICAgICAvLyBJZiBVUkwgZG9lc24ndCBtYXRjaCBleHBlY3RlZCBwYXR0ZXJuLCB0cnkgYWx0ZXJuYXRpdmUgcGFyc2luZ1xyXG4gICAgICBjb25zdCB1cmxQYXJ0cyA9IGF2YXRhclVybC5zcGxpdCgnL2F2YXRhcnMvJyk7XHJcbiAgICAgIGlmICh1cmxQYXJ0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgcGFyc2UgdGhlIFVSTCwganVzdCByZXR1cm4gc3VjY2VzcyAodGhlIGZpbGUgbWlnaHQgYWxyZWFkeSBiZSBkZWxldGVkKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IHBhcnNlIGF2YXRhciBVUkwgZm9yIGRlbGV0aW9uOicsIGF2YXRhclVybCk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYGF2YXRhcnMvJHt1cmxQYXJ0c1sxXS5zcGxpdCgnPycpWzBdfWA7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IGRlbGV0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAgIC5yZW1vdmUoW2ZpbGVQYXRoXSk7XHJcblxyXG4gICAgICBpZiAoZGVsZXRlRXJyb3IgJiYgIWRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25vdCBmb3VuZCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgZmlsZTonLCBkZWxldGVFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gbWF0Y2hbMV0uc3BsaXQoJz8nKVswXTsgLy8gUmVtb3ZlIHF1ZXJ5IHBhcmFtZXRlcnMgaWYgYW55XHJcblxyXG4gICAgLy8gRGVsZXRlIGZyb20gc3RvcmFnZVxyXG4gICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAucmVtb3ZlKFtmaWxlUGF0aF0pO1xyXG5cclxuICAgIGlmIChkZWxldGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBmaWxlOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgLy8gRG9uJ3QgZmFpbCBpZiBmaWxlIGRvZXNuJ3QgZXhpc3RcclxuICAgICAgaWYgKGRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25vdCBmb3VuZCcpIHx8IGRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ05vIHN1Y2ggZmlsZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZGVsZXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlUHJvZmlsZVBpY3R1cmU6JywgZXJyb3IpO1xyXG4gICAgLy8gRG9uJ3QgZmFpbCBjb21wbGV0ZWx5IC0gdGhlIFVSTCBpbiBkYXRhYmFzZSB3aWxsIGJlIHJlbW92ZWQgYW55d2F5XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJQcm9maWxlKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZGF0YTogUHJvZmlsZVVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJvZmlsZT86IFByb2ZpbGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gRmlyc3QsIHZlcmlmeSB0aGUgYXV0aGVudGljYXRlZCB1c2VyIG1hdGNoZXMgdGhlIGVtYWlsXHJcbiAgICBjb25zdCBhdXRoU3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IGF1dGhTdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIFxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgZW1haWwgcGFyYW1ldGVyIG1hdGNoZXMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcidzIGVtYWlsXHJcbiAgICAvLyBUaGlzIGVuc3VyZXMgdXNlcnMgY2FuIG9ubHkgdXBkYXRlIHRoZWlyIG93biBwcm9maWxlXHJcbiAgICBpZiAodXNlci5lbWFpbD8udG9Mb3dlckNhc2UoKSAhPT0gZW1haWwudG9Mb3dlckNhc2UoKSAmJiB1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpICE9PSBkYXRhLmVtYWlsPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VuYXV0aG9yaXplZDogWW91IGNhbiBvbmx5IHVwZGF0ZSB5b3VyIG93biBwcm9maWxlJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFMV0FZUyB1c2UgYWRtaW4gY2xpZW50IGZvciBwcm9maWxlIG9wZXJhdGlvbnMgLSBpdCBieXBhc3NlcyBSTFMgY29tcGxldGVseVxyXG4gICAgLy8gVGhpcyBpcyBSRVFVSVJFRCAtIHdlIGNhbm5vdCB1c2UgYXV0aGVudGljYXRlZCBjbGllbnQgYXMgaXQgbWF5IHN0aWxsIGNoZWNrIFJMUyBwb2xpY2llc1xyXG4gICAgbGV0IHN1cGFiYXNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygn4pyFIFVzaW5nIGFkbWluIGNsaWVudCBmb3IgcHJvZmlsZSBvcGVyYXRpb25zJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBEbyBOT1QgZmFsbCBiYWNrIHRvIGF1dGhlbnRpY2F0ZWQgY2xpZW50IC0gaXQgd2lsbCBjYXVzZSBSTFMgZXJyb3JzXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBGYWlsZWQgdG8gY3JlYXRlIGFkbWluIGNsaWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6ICdTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIGlzIG5vdCBzZXQuIFRoaXMgaXMgUkVRVUlSRUQgZm9yIHByb2ZpbGUgb3BlcmF0aW9ucy4gUGxlYXNlIGFkZCBpdCB0byB5b3VyIC5lbnYubG9jYWwgZmlsZS4gR2V0IGl0IGZyb206IFN1cGFiYXNlIERhc2hib2FyZCDihpIgU2V0dGluZ3Mg4oaSIEFQSSDihpIgc2VydmljZV9yb2xlIGtleSAoc2VjcmV0KScsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFZlcmlmeSB3ZSBoYXZlIGEgdmFsaWQgY2xpZW50IChzaG91bGQgbmV2ZXIgaGFwcGVuIGR1ZSB0byBlcnJvciBhYm92ZSwgYnV0IGRvdWJsZS1jaGVjaylcclxuICAgIGlmICghc3VwYWJhc2UpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgZGF0YWJhc2UgY2xpZW50LiBQbGVhc2UgY2hlY2sgeW91ciBTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIGluIC5lbnYubG9jYWwnIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIWRhdGEuZmlyc3RfbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEubGFzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmVtYWlsPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZGF0YS5lbWFpbCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBlbWFpbCBmb3JtYXQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSBuZXcgZW1haWwgKGlmIGNoYW5nZWQpIHN0aWxsIG1hdGNoZXMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4gICAgaWYgKGRhdGEuZW1haWwudG9Mb3dlckNhc2UoKSAhPT0gdXNlci5lbWFpbD8udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBBbGxvdyBlbWFpbCBjaGFuZ2Ugb25seSBpZiBpdCdzIHRoZSBzYW1lIHVzZXIgKGNhc2UgaW5zZW5zaXRpdmUgY2hlY2sgYWJvdmUgcGFzc2VkKVxyXG4gICAgICAvLyBCdXQgd2Ugc2hvdWxkIHZlcmlmeSBpdCdzIGEgdmFsaWQgY2hhbmdlICh1c2VyIHVwZGF0aW5nIHRoZWlyIG93biBlbWFpbClcclxuICAgICAgaWYgKGRhdGEuZW1haWwudG9Mb3dlckNhc2UoKSAhPT0gZW1haWwudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIC8vIEVtYWlsIGlzIGJlaW5nIGNoYW5nZWQgLSB2ZXJpZnkgaXQncyBzdGlsbCB0aGUgc2FtZSB1c2VyXHJcbiAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgYWxsb3cgaXQgYnV0IGluIHByb2R1Y3Rpb24geW91IG1pZ2h0IHdhbnQgdG8gcmVxdWlyZSBlbWFpbCB2ZXJpZmljYXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHByb2ZpbGUgZXhpc3RzXHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBDaGVja2luZyBpZiBwcm9maWxlIGV4aXN0cyBmb3IgZW1haWw6JywgZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVXNpbmcgY2xpZW50IHR5cGU6JywgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSA/ICdBRE1JTiAoc2VydmljZSByb2xlKScgOiAnQVVUSEVOVElDQVRFRCAoYW5vbiBrZXkpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlLCBlcnJvcjogc2VsZWN0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG4gICAgXHJcbiAgICBpZiAoc2VsZWN0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm9yIHNlbGVjdGluZyBwcm9maWxlOicsIHNlbGVjdEVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGNoZWNrIHByb2ZpbGU6ICR7c2VsZWN0RXJyb3IubWVzc2FnZX1gIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfinIUgUHJvZmlsZSBjaGVjayByZXN1bHQ6JywgZXhpc3RpbmdQcm9maWxlID8gJ1Byb2ZpbGUgZXhpc3RzICh3aWxsIFVQREFURSknIDogJ1Byb2ZpbGUgZG9lcyBub3QgZXhpc3QgKHdpbGwgSU5TRVJUKScpO1xyXG5cclxuICAgIC8vIElmIGF2YXRhcl91cmwgaXMgYmVpbmcgcmVtb3ZlZCwgZGVsZXRlIHRoZSBvbGQgZmlsZVxyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZT8uYXZhdGFyX3VybCAmJiBkYXRhLmF2YXRhcl91cmwgPT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgZGVsZXRlUHJvZmlsZVBpY3R1cmUoZW1haWwsIGV4aXN0aW5nUHJvZmlsZS5hdmF0YXJfdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZSkge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICAvLyBJZiBlbWFpbCBjaGFuZ2VkLCB3ZSBuZWVkIHRvIGhhbmRsZSBpdCBjYXJlZnVsbHlcclxuICAgICAgaWYgKGRhdGEuZW1haWwgIT09IGVtYWlsKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgbmV3IGVtYWlsIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBlbWFpbENoZWNrIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAgIC5lcSgnZW1haWwnLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmIChlbWFpbENoZWNrKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBhdmF0YXJfdXJsOiB1bmRlZmluZWQgbWVhbnMgZG9uJ3QgY2hhbmdlLCBudWxsIG1lYW5zIHJlbW92ZSwgc3RyaW5nIG1lYW5zIHNldFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cGRhdGVEYXRhLmF2YXRhcl91cmwgPSBkYXRhLmF2YXRhcl91cmwgPT09IG51bGwgPyBudWxsIDogZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBdHRlbXB0aW5nIHRvIFVQREFURSBwcm9maWxlIHdpdGggZGF0YTonLCB1cGRhdGVEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coJ/Cfk50gVXBkYXRlIFdIRVJFIGVtYWlsID0nLCBlbWFpbCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRQcm9maWxlLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgVXBkYXRlIGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogdXBkYXRlRXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IHVwZGF0ZUVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiB1cGRhdGVFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogdXBkYXRlRXJyb3IuaGludCxcclxuICAgICAgICAgIHN0YXR1c0NvZGU6ICh1cGRhdGVFcnJvciBhcyBhbnkpLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICBzdGF0dXM6ICh1cGRhdGVFcnJvciBhcyBhbnkpLnN0YXR1cyxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIFJMUyBlcnJvcnMgc3BlY2lmaWNhbGx5XHJcbiAgICAgICAgaWYgKHVwZGF0ZUVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBkYXRlRXJyb3IuY29kZSA9PT0gJzQyNTAxJyB8fFxyXG4gICAgICAgICAgICB1cGRhdGVFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnUkxTJykpIHtcclxuICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICAgIGVycm9yOiAnUm93IExldmVsIFNlY3VyaXR5IGVycm9yLiBQbGVhc2UgZW5zdXJlOiAxKSBSTFMgaXMgZGlzYWJsZWQgb24gcHJvZmlsZXMgdGFibGUsIDIpIFNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaXMgc2V0IGluIC5lbnYubG9jYWwnLFxyXG4gICAgICAgICAgICBlcnJvckRldGFpbHM6IGBFcnJvciBjb2RlOiAke3VwZGF0ZUVycm9yLmNvZGUgfHwgJ3Vua25vd24nfS4gJHt1cGRhdGVFcnJvci5oaW50IHx8ICcnfWAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgICAgZXJyb3JEZXRhaWxzOiB1cGRhdGVFcnJvci5kZXRhaWxzIHx8IHVwZGF0ZUVycm9yLmhpbnQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IGluc2VydERhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE9ubHkgc2V0IGF2YXRhcl91cmwgaWYgaXQncyBwcm92aWRlZFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsKSB7XHJcbiAgICAgICAgaW5zZXJ0RGF0YS5hdmF0YXJfdXJsID0gZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGE6IG5ld1Byb2ZpbGUsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoaW5zZXJ0RGF0YSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9maWxlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgSW5zZXJ0IGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogaW5zZXJ0RXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGluc2VydEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiBpbnNlcnRFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogaW5zZXJ0RXJyb3IuaGludCxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHVuaXF1ZSBjb25zdHJhaW50IHZpb2xhdGlvblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBSTFMgZXJyb3JcclxuICAgICAgICBpZiAoaW5zZXJ0RXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICBpbnNlcnRFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIGluc2VydEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogYEVycm9yIGNvZGU6ICR7aW5zZXJ0RXJyb3IuY29kZSB8fCAndW5rbm93bid9LiAke2luc2VydEVycm9yLmhpbnQgfHwgJyd9YCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgICAgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZmlsZScsXHJcbiAgICAgICAgICBlcnJvckRldGFpbHM6IGluc2VydEVycm9yLmRldGFpbHMgfHwgaW5zZXJ0RXJyb3IuaGludCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0ID0gbmV3UHJvZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9maWxlOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJMb2NhdGlvbnMoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9ucz86IExvY2F0aW9uW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignaXNfZGVmYXVsdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsb2NhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsb2NhdGlvbnM6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJMb2NhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbG9jYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb25DcmVhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uPzogTG9jYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEubmlja25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOaWNrbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLmFkZHJlc3M/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBZGRyZXNzIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEuc3VidXJiPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU3VidXJiIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEuY2l0eT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NpdHkgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBhbGwgb3RoZXIgZGVmYXVsdHMgZm9yIHRoaXMgY3VzdG9tZXJcclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCkge1xyXG4gICAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX3Bob25lJywgcGhvbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCB1cGRhdGVRdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IG5ld0xvY2F0aW9uLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IHBob25lIHx8IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IGxvY2F0aW9uRGF0YS5uaWNrbmFtZS50cmltKCksXHJcbiAgICAgICAgYWRkcmVzczogbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpLFxyXG4gICAgICAgIGFwdF91bml0OiBsb2NhdGlvbkRhdGEuYXB0X3VuaXQ/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgIHN1YnVyYjogbG9jYXRpb25EYXRhLnN1YnVyYi50cmltKCksXHJcbiAgICAgICAgY2l0eTogbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpLFxyXG4gICAgICAgIHBvc3RhbF9jb2RlOiBsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgIGlzX2RlZmF1bHQ6IGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0IHx8IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBsb2NhdGlvbjonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiBuZXdMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjcmVhdGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihcclxuICBsb2NhdGlvbklkOiBzdHJpbmcsXHJcbiAgbG9jYXRpb25EYXRhOiBMb2NhdGlvblVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgbG9jYXRpb24/OiBMb2NhdGlvbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0IGlmIHByb3ZpZGVkXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLm5pY2tuYW1lICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5uaWNrbmFtZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmlja25hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0FkZHJlc3MgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLnN1YnVyYiAhPT0gdW5kZWZpbmVkICYmICFsb2NhdGlvbkRhdGEuc3VidXJiLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTdWJ1cmIgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmNpdHkgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NpdHkgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgbG9jYXRpb24gdG8gY2hlY2sgY3VzdG9tZXIgZW1haWxcclxuICAgIGNvbnN0IHsgZGF0YTogY3VycmVudExvY2F0aW9uLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMb2NhdGlvbiBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBhbGwgb3RoZXIgZGVmYXVsdHMgZm9yIHRoaXMgY3VzdG9tZXJcclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCkge1xyXG4gICAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwgJiYgY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7Y3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERvbid0IHVuc2V0IHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkubmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgICAgYXdhaXQgdXBkYXRlUXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdXBkYXRlIG9iamVjdCB3aXRoIG9ubHkgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7XHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5uaWNrbmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEubmlja25hbWUgPSBsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hZGRyZXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5hZGRyZXNzID0gbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hcHRfdW5pdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuYXB0X3VuaXQgPSBsb2NhdGlvbkRhdGEuYXB0X3VuaXQ/LnRyaW0oKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5zdWJ1cmIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLnN1YnVyYiA9IGxvY2F0aW9uRGF0YS5zdWJ1cmIudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5jaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5jaXR5ID0gbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5wb3N0YWxfY29kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEucG9zdGFsX2NvZGUgPSBsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGU/LnRyaW0oKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5pc19kZWZhdWx0ID0gbG9jYXRpb25EYXRhLmlzX2RlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkTG9jYXRpb24sIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGxvY2F0aW9uOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb246IHVwZGF0ZWRMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGxvY2F0aW9uOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXREZWZhdWx0TG9jYXRpb24oXHJcbiAgbG9jYXRpb25JZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbj86IExvY2F0aW9uO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgbG9jYXRpb24gdG8gdmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXJyZW50TG9jYXRpb24sIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGN1c3RvbWVyX3Bob25lJylcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhY3VycmVudExvY2F0aW9uKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0xvY2F0aW9uIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgb3duZXJzaGlwXHJcbiAgICBjb25zdCBpc093bmVyID0gXHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCA9PT0gZW1haWwgfHxcclxuICAgICAgKHBob25lICYmIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSA9PT0gcGhvbmUpO1xyXG5cclxuICAgIGlmICghaXNPd25lcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IGlzX2RlZmF1bHQ6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgfSBlbHNlIGlmIChlbWFpbCkge1xyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgdW5zZXQgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkubmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgIGF3YWl0IHVwZGF0ZVF1ZXJ5O1xyXG5cclxuICAgIC8vIFNldCB0aGlzIGxvY2F0aW9uIGFzIGRlZmF1bHRcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZExvY2F0aW9uLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogdHJ1ZSB9KVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyBkZWZhdWx0IGxvY2F0aW9uOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb246IHVwZGF0ZWRMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzZXREZWZhdWx0TG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2V0IGRlZmF1bHQgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZVJlZmVycmFsQ29kZShcclxuICBlbWFpbDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcmVmZXJyYWxDb2RlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJvZmlsZSBleGlzdHMgYW5kIGhhcyBhIHJlZmVycmFsIGNvZGVcclxuICAgIGNvbnN0IHsgZGF0YTogcHJvZmlsZSwgZXJyb3I6IHByb2ZpbGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHByb2ZpbGVFcnJvciAmJiBwcm9maWxlRXJyb3IuY29kZSAhPT0gJ1BHUlNUMTE2Jykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlOicsIHByb2ZpbGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcHJvZmlsZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBwcm9maWxlIGV4aXN0cyBhbmQgaGFzIGEgcmVmZXJyYWwgY29kZSwgcmV0dXJuIGl0XHJcbiAgICBpZiAocHJvZmlsZT8ucmVmZXJyYWxfY29kZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWZlcnJhbENvZGU6IHByb2ZpbGUucmVmZXJyYWxfY29kZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgbmV3IHJlZmVycmFsIGNvZGVcclxuICAgIC8vIFRyeSB1c2luZyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gZmlyc3QsIGJ1dCBmYWxsYmFjayB0byBjbGllbnQtc2lkZSBnZW5lcmF0aW9uXHJcbiAgICBsZXQgZ2VuZXJhdGVkQ29kZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZGJDb2RlLCBlcnJvcjogY29kZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5ycGMoJ2dlbmVyYXRlX3JlZmVycmFsX2NvZGUnKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghY29kZUVycm9yICYmIGRiQ29kZSkge1xyXG4gICAgICAgIGdlbmVyYXRlZENvZGUgPSBkYkNvZGU7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKHJwY0Vycm9yKSB7XHJcbiAgICAgIC8vIFJQQyBmdW5jdGlvbiBtaWdodCBub3QgZXhpc3QgeWV0LCB0aGF0J3Mgb2theVxyXG4gICAgICBjb25zb2xlLmxvZygnUlBDIGZ1bmN0aW9uIG5vdCBhdmFpbGFibGUsIHVzaW5nIGZhbGxiYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFnZW5lcmF0ZWRDb2RlKSB7XHJcbiAgICAgIC8vIEZhbGxiYWNrOiBnZW5lcmF0ZSBjb2RlIGNsaWVudC1zaWRlIHN0eWxlXHJcbiAgICAgIGNvbnN0IGZhbGxiYWNrQ29kZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgZmFsbGJhY2sgY29kZSBleGlzdHMsIHJldHJ5IGlmIGl0IGRvZXNcclxuICAgICAgbGV0IGZpbmFsQ29kZSA9IGZhbGxiYWNrQ29kZTtcclxuICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA1O1xyXG5cclxuICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAgIC5lcSgncmVmZXJyYWxfY29kZScsIGZpbmFsQ29kZSlcclxuICAgICAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XHJcbiAgICAgICAgICBicmVhazsgLy8gQ29kZSBpcyB1bmlxdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IGNvZGVcclxuICAgICAgICBmaW5hbENvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgb3IgaW5zZXJ0IHByb2ZpbGUgd2l0aCByZWZlcnJhbCBjb2RlXHJcbiAgICAgIC8vIEZpcnN0LCB0cnkgdG8gdXBkYXRlIGV4aXN0aW5nIHByb2ZpbGVcclxuICAgICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1Byb2ZpbGUgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAuc2VsZWN0KCdpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lJylcclxuICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgICBsZXQgdXBkYXRlZFByb2ZpbGU7XHJcbiAgICAgIGlmIChleGlzdGluZ1Byb2ZpbGUpIHtcclxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZCwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICByZWZlcnJhbF9jb2RlOiBmaW5hbENvZGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyByZWZlcnJhbCBjb2RlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVkUHJvZmlsZSA9IHVwZGF0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBwcm9maWxlIHdpdGggcmVmZXJyYWwgY29kZVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogaW5zZXJ0ZWQsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHJlZmVycmFsX2NvZGU6IGZpbmFsQ29kZSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZW1haWwuc3BsaXQoJ0AnKVswXSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZWZlcnJhbCBjb2RlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVkUHJvZmlsZSA9IGluc2VydGVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWZlcnJhbENvZGU6IHVwZGF0ZWRQcm9maWxlPy5yZWZlcnJhbF9jb2RlIHx8IGZpbmFsQ29kZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgZ2VuZXJhdGVkIGNvZGUgZnJvbSBkYXRhYmFzZSBmdW5jdGlvblxyXG4gICAgLy8gVXBkYXRlIG9yIGluc2VydCBwcm9maWxlIHdpdGggZ2VuZXJhdGVkIGNvZGVcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBsZXQgdXBkYXRlZFByb2ZpbGU7XHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZCwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICByZWZlcnJhbF9jb2RlOiBnZW5lcmF0ZWRDb2RlLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHJlZmVycmFsIGNvZGU6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRQcm9maWxlID0gdXBkYXRlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEluc2VydCBuZXcgcHJvZmlsZSB3aXRoIHJlZmVycmFsIGNvZGVcclxuICAgICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZCwgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHJlZmVycmFsX2NvZGU6IGdlbmVyYXRlZENvZGUsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBlbWFpbC5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlZmVycmFsIGNvZGU6JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRQcm9maWxlID0gaW5zZXJ0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiB1cGRhdGVkUHJvZmlsZT8ucmVmZXJyYWxfY29kZSB8fCBnZW5lcmF0ZWRDb2RlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE9yQ3JlYXRlUmVmZXJyYWxDb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2RlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFJlZmVycmFsSW52aXRlcyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGludml0ZUVtYWlsczogc3RyaW5nW10sXHJcbiAgcmVmZXJyYWxDb2RlOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgZW1haWwgYWRkcmVzc2VzXHJcbiAgICBjb25zdCB2YWxpZEVtYWlscyA9IGludml0ZUVtYWlsc1xyXG4gICAgICAubWFwKChlKSA9PiBlLnRyaW0oKSlcclxuICAgICAgLmZpbHRlcigoZSkgPT4ge1xyXG4gICAgICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodmFsaWRFbWFpbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vIHZhbGlkIGVtYWlsIGFkZHJlc3NlcyBwcm92aWRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgcmVmZXJyYWwgcmVjb3JkcyBmb3IgdHJhY2tpbmdcclxuICAgIGNvbnN0IHJlZmVycmFsUmVjb3JkcyA9IHZhbGlkRW1haWxzLm1hcCgocmVmZXJyZWRFbWFpbCkgPT4gKHtcclxuICAgICAgcmVmZXJyZXJfZW1haWw6IGVtYWlsLFxyXG4gICAgICByZWZlcnJlZF9lbWFpbDogcmVmZXJyZWRFbWFpbCxcclxuICAgICAgcmVmZXJyYWxfY29kZTogcmVmZXJyYWxDb2RlLFxyXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3JlZmVycmFscycpXHJcbiAgICAgIC5pbnNlcnQocmVmZXJyYWxSZWNvcmRzKTtcclxuXHJcbiAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVmZXJyYWwgcmVjb3JkczonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgIC8vIENvbnRpbnVlIGV2ZW4gaWYgaW5zZXJ0IGZhaWxzIC0gd2Ugc3RpbGwgd2FudCB0byBzZW5kIGVtYWlsc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHJlZmVycmFsIGxpbmtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCB8fCAnaHR0cHM6Ly9zaGFsZWFuLmNvLnphJztcclxuICAgIGNvbnN0IHJlZmVycmFsTGluayA9IGAke2Jhc2VVcmx9L2Jvb2tpbmcvZGV0YWlscz9yZWY9JHtyZWZlcnJhbENvZGV9YDtcclxuXHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYWN0dWFsIGVtYWlsIHNlbmRpbmcgdXNpbmcgeW91ciBlbWFpbCBzZXJ2aWNlIChSZXNlbmQsIFNlbmRHcmlkLCBldGMuKVxyXG4gICAgLy8gRm9yIG5vdywgd2UnbGwganVzdCBsb2cgdGhlIGVtYWlscyB0aGF0IHdvdWxkIGJlIHNlbnRcclxuICAgIGNvbnNvbGUubG9nKCdSZWZlcnJhbCBpbnZpdGVzIHRvIHNlbmQ6Jywge1xyXG4gICAgICBmcm9tOiBlbWFpbCxcclxuICAgICAgdG86IHZhbGlkRW1haWxzLFxyXG4gICAgICByZWZlcnJhbENvZGUsXHJcbiAgICAgIHJlZmVycmFsTGluayxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluIGEgcmVhbCBpbXBsZW1lbnRhdGlvbiwgeW91IHdvdWxkIHNlbmQgZW1haWxzIGhlcmVcclxuICAgIC8vIEV4YW1wbGUgd2l0aCBSZXNlbmQ6XHJcbiAgICAvLyBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgLy8gICBmcm9tOiAnU2hhbGVhbiA8bm9yZXBseUBzaGFsZWFuLmNvLnphPicsXHJcbiAgICAvLyAgIHRvOiB2YWxpZEVtYWlscyxcclxuICAgIC8vICAgc3ViamVjdDogJ1lvdVxcJ3ZlIGJlZW4gaW52aXRlZCB0byB0cnkgU2hhbGVhbiBDbGVhbmluZyBTZXJ2aWNlcyEnLFxyXG4gICAgLy8gICBodG1sOiBgPHA+WW91ciBmcmllbmQgaGFzIGludml0ZWQgeW91IHRvIHRyeSBTaGFsZWFuLiBVc2UgY29kZSAke3JlZmVycmFsQ29kZX0gdG8gZ2V0IFIxNTAgb2ZmIHlvdXIgZmlyc3QgYm9va2luZyE8L3A+PHA+PGEgaHJlZj1cIiR7cmVmZXJyYWxMaW5rfVwiPkJvb2sgTm93PC9hPjwvcD5gLFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VudDogdmFsaWRFbWFpbHMubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHNlbmRSZWZlcnJhbEludml0ZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCBpbnZpdGVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVmZXJyYWxTdGF0cyhcclxuICBlbWFpbDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICB0b3RhbFJlZmVycmFsczogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkUmVmZXJyYWxzOiBudW1iZXI7XHJcbiAgICBwZW5kaW5nUmV3YXJkczogbnVtYmVyO1xyXG4gICAgdG90YWxSZXdhcmRzOiBudW1iZXI7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogcmVmZXJyYWxzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3JlZmVycmFscycpXHJcbiAgICAgIC5zZWxlY3QoJ3N0YXR1cywgcmVmZXJyZXJfcmV3YXJkX2Ftb3VudCwgcmVmZXJyZXJfcmV3YXJkX3N0YXR1cycpXHJcbiAgICAgIC5lcSgncmVmZXJyZXJfZW1haWwnLCBlbWFpbCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlZmVycmFsIHN0YXRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHMgPSB7XHJcbiAgICAgIHRvdGFsUmVmZXJyYWxzOiByZWZlcnJhbHM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICBjb21wbGV0ZWRSZWZlcnJhbHM6XHJcbiAgICAgICAgcmVmZXJyYWxzPy5maWx0ZXIoKHIpID0+IHIuc3RhdHVzID09PSAnY29tcGxldGVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIHBlbmRpbmdSZXdhcmRzOlxyXG4gICAgICAgIHJlZmVycmFscz8uZmlsdGVyKChyKSA9PiByLnJlZmVycmVyX3Jld2FyZF9zdGF0dXMgPT09ICdwZW5kaW5nJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIHRvdGFsUmV3YXJkczpcclxuICAgICAgICByZWZlcnJhbHNcclxuICAgICAgICAgID8uZmlsdGVyKChyKSA9PiByLnJlZmVycmVyX3Jld2FyZF9zdGF0dXMgPT09ICdjcmVkaXRlZCcpXHJcbiAgICAgICAgICAucmVkdWNlKChzdW0sIHIpID0+IHN1bSArIChyLnJlZmVycmVyX3Jld2FyZF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJlZmVycmFsU3RhdHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmVmZXJyYWwgc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgY3JlZGl0IHB1cmNoYXNlIHdpdGggUGF5c3RhY2tcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplQ3JlZGl0UHVyY2hhc2UoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBhbW91bnQ6IG51bWJlcixcclxuICBwYXltZW50TWV0aG9kOiAnY3JlZGl0X2NhcmQnIHwgJ2VmdCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoYW1vdW50IDwgMjAgfHwgYW1vdW50ID4gNTAwMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQW1vdW50IG11c3QgYmUgYmV0d2VlbiBSMjAgYW5kIFI1MDAwJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSByZWZlcmVuY2UgZm9yIHRoaXMgY3JlZGl0IHB1cmNoYXNlXHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBgQ1JFRElUXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSl9YDtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBwZW5kaW5nIGNyZWRpdCB0cmFuc2FjdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IG9yIGNyZWF0ZSBwcm9maWxlXHJcbiAgICBsZXQgeyBkYXRhOiBwcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghcHJvZmlsZSkge1xyXG4gICAgICAvLyBDcmVhdGUgYSBiYXNpYyBwcm9maWxlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgICAgY29uc3QgeyBkYXRhOiBuZXdQcm9maWxlLCBlcnJvcjogY3JlYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgY3JlZGl0X2JhbGFuY2U6IDAsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdpZCwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChjcmVhdGVFcnJvciB8fCAhbmV3UHJvZmlsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBwcm9maWxlJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHByb2ZpbGUgPSBuZXdQcm9maWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBwZW5kaW5nIGNyZWRpdCB0cmFuc2FjdGlvblxyXG4gICAgY29uc3QgeyBlcnJvcjogdHJhbnNhY3Rpb25FcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NyZWRpdF90cmFuc2FjdGlvbnMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBwcm9maWxlX2lkOiBwcm9maWxlLmlkLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6ICdwdXJjaGFzZScsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIGJhbGFuY2VfYmVmb3JlOiBwcm9maWxlLmNyZWRpdF9iYWxhbmNlIHx8IDAsXHJcbiAgICAgICAgYmFsYW5jZV9hZnRlcjogcHJvZmlsZS5jcmVkaXRfYmFsYW5jZSB8fCAwLCAvLyBXb24ndCB1cGRhdGUgdW50aWwgcGF5bWVudCBzdWNjZWVkc1xyXG4gICAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kLFxyXG4gICAgICAgIHBheXN0YWNrX3JlZmVyZW5jZTogcmVmZXJlbmNlLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBQdXJjaGFzZSBvZiBSJHthbW91bnR9IFNoYWxlYW5DcmVkYCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHRyYW5zYWN0aW9uRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3JlZGl0IHRyYW5zYWN0aW9uOicsIHRyYW5zYWN0aW9uRXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiByZWNvcmQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgUGF5c3RhY2sgcGF5bWVudFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wYXlzdGFjay9pbml0aWFsaXplJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiAnY3JlZGl0X3B1cmNoYXNlJyxcclxuICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IgfHwgJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBheW1lbnREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcGF5bWVudERhdGEuc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHBheW1lbnREYXRhLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6IHBheW1lbnREYXRhLmRhdGEuYXV0aG9yaXphdGlvbl91cmwsXHJcbiAgICAgIHJlZmVyZW5jZTogcGF5bWVudERhdGEuZGF0YS5yZWZlcmVuY2UsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgY3JlZGl0IHB1cmNoYXNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWb3VjaGVyUmVkZW1wdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB2b3VjaGVyX2NvZGU6IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICByZWRlZW1lZF9hdDogc3RyaW5nO1xyXG4gIGJvb2tpbmdfaWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRlZW1Wb3VjaGVyKFxyXG4gIGNvZGU6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYW1vdW50PzogbnVtYmVyO1xyXG4gIG5ld0JhbGFuY2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBkYXRhYmFzZSBmdW5jdGlvbiB0byByZWRlZW0gdGhlIHZvdWNoZXJcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygncmVkZWVtX3ZvdWNoZXInLCB7XHJcbiAgICAgIHBfY29kZTogY29kZS50cmltKCkudG9VcHBlckNhc2UoKSxcclxuICAgICAgcF9lbWFpbDogZW1haWwudHJpbSgpLFxyXG4gICAgICBwX3Bob25lOiBwaG9uZT8udHJpbSgpIHx8IG51bGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVkZWVtaW5nIHZvdWNoZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcmVkZWVtIHZvdWNoZXInLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSByZXN1bHQgZnJvbSB0aGUgZnVuY3Rpb24gKGhhbmRsZSBib3RoIG9iamVjdCBhbmQgc3RyaW5nIEpTT05CKVxyXG4gICAgbGV0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgdm91Y2hlciByZWRlbXB0aW9uIHJlc3VsdDonLCBwYXJzZUVycm9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdzdWNjZXNzJyBpbiByZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgfHwgJ0ZhaWxlZCB0byByZWRlZW0gdm91Y2hlcicsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGFtb3VudDogcmVzdWx0LmFtb3VudCxcclxuICAgICAgICBuZXdCYWxhbmNlOiByZXN1bHQubmV3X2JhbGFuY2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiAnVW5leHBlY3RlZCByZXNwb25zZSBmcm9tIHNlcnZlcicsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZWRlZW1Wb3VjaGVyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHJlZGVlbSB2b3VjaGVyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vm91Y2hlclJlZGVtcHRpb25zKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICByZWRlbXB0aW9ucz86IFZvdWNoZXJSZWRlbXB0aW9uW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgndm91Y2hlcl9yZWRlbXB0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB2b3VjaGVyX2NvZGUsIGFtb3VudCwgcmVkZWVtZWRfYXQsIGJvb2tpbmdfaWQnKVxyXG4gICAgICAub3JkZXIoJ3JlZGVlbWVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IGZvciBlbWFpbC9waG9uZSBsb29rdXBcclxuICAgIC8vIFByaW9yaXRpemUgZW1haWwgYXMgaXQncyB0aGUgcHJpbWFyeSBpZGVudGlmaWVyIHRvIHByZXZlbnQgY3Jvc3MtYWNjb3VudCB2aXNpYmlsaXR5XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgIC8vIElmIHBob25lIGlzIGFsc28gcHJvdmlkZWQsIHdlIGNhbiBvcHRpb25hbGx5IGZpbHRlciBieSBib3RoIGZvciBleHRyYSBzZWN1cml0eVxyXG4gICAgICAvLyBidXQgZW1haWwgYWxvbmUgc2hvdWxkIGJlIHN1ZmZpY2llbnQgc2luY2UgaXQncyB1bmlxdWVcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdm91Y2hlciByZWRlbXB0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zZm9ybSB0aGUgZGF0YSB0byBtYXRjaCB0aGUgaW50ZXJmYWNlXHJcbiAgICBjb25zdCByZWRlbXB0aW9uczogVm91Y2hlclJlZGVtcHRpb25bXSA9IChkYXRhIHx8IFtdKS5tYXAoKHJlZGVtcHRpb24pID0+ICh7XHJcbiAgICAgIGlkOiByZWRlbXB0aW9uLmlkLFxyXG4gICAgICB2b3VjaGVyX2NvZGU6IHJlZGVtcHRpb24udm91Y2hlcl9jb2RlLFxyXG4gICAgICBhbW91bnQ6IHJlZGVtcHRpb24uYW1vdW50LFxyXG4gICAgICByZWRlZW1lZF9hdDogcmVkZW1wdGlvbi5yZWRlZW1lZF9hdCxcclxuICAgICAgYm9va2luZ19pZDogcmVkZW1wdGlvbi5ib29raW5nX2lkIHx8IHVuZGVmaW5lZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWRlbXB0aW9ucyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRWb3VjaGVyUmVkZW1wdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggdm91Y2hlciByZWRlbXB0aW9ucycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FRc0IsaU1BQUEifQ==
}),
"[project]/app/dashboard/data:c62c93 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomerProfile",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d1908fde86ac220eb7a80a2be1b3941c55a8b34b":"getCustomerProfile"},"app/dashboard/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d1908fde86ac220eb7a80a2be1b3941c55a8b34b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCustomerProfile");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBQcm9maWxlVXBkYXRlSW5wdXQgfSBmcm9tICdAL3R5cGVzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25DcmVhdGVJbnB1dCwgTG9jYXRpb25VcGRhdGVJbnB1dCB9IGZyb20gJ0AvdHlwZXMvbG9jYXRpb24nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRVc2VyKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZW1haWw6IHVzZXIuZW1haWwgfHwgdW5kZWZpbmVkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEF1dGhlbnRpY2F0ZWRVc2VyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCB1c2VyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5ncyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nLFxyXG4gIGZpbHRlcj86ICdhbGwnIHwgJ3VwY29taW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2NhbmNlbGxlZCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5ncz86IEJvb2tpbmdbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ3NlcnZpY2VfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IHN0YXR1cyBmaWx0ZXJcclxuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICBpZiAoZmlsdGVyID09PSAndXBjb21pbmcnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5pbignc3RhdHVzJywgWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJCb29raW5nczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQm9va2luZ1N0YXRzKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzdGF0cz86IHtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB1cGNvbWluZzogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBjYW5jZWxsZWQ6IG51bWJlcjtcclxuICAgIHRvdGFsU3BlbnQ6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzJyk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHtcclxuICAgICAgdG90YWw6IGRhdGE/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICB1cGNvbWluZzogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ3BlbmRpbmcnIHx8IGIuc3RhdHVzID09PSAnY29uZmlybWVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIGNvbXBsZXRlZDogZGF0YT8uZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aCB8fCAwLFxyXG4gICAgICBjYW5jZWxsZWQ6IGRhdGE/LmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKS5sZW5ndGggfHwgMCxcclxuICAgICAgdG90YWxTcGVudDogZGF0YVxyXG4gICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcpXHJcbiAgICAgICAgLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi50b3RhbF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va2luZ0J5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgYm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclByb2ZpbGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHByb2ZpbGU/OiBQcm9maWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIHRyeSB0byBnZXQgcHJvZmlsZSBmcm9tIHByb2ZpbGVzIHRhYmxlXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZS5mcm9tKCdwcm9maWxlcycpLnNlbGVjdCgnKicpO1xyXG5cclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVEYXRhLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBxdWVyeS5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIC8vIElmIHByb2ZpbGUgZXhpc3RzLCByZXR1cm4gaXRcclxuICAgIGlmIChwcm9maWxlRGF0YSAmJiAhcHJvZmlsZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2ZpbGU6IHByb2ZpbGVEYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gcHJvZmlsZSBleGlzdHMsIGRlcml2ZSBmcm9tIG1vc3QgcmVjZW50IGJvb2tpbmdcclxuICAgIGxldCBib29raW5nUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9maXJzdF9uYW1lLCBjdXN0b21lcl9sYXN0X25hbWUsIGN1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSk7XHJcblxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIGJvb2tpbmdRdWVyeSA9IGJvb2tpbmdRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtlbWFpbH0sY3VzdG9tZXJfcGhvbmUuZXEuJHtwaG9uZX1gKTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgYm9va2luZ1F1ZXJ5ID0gYm9va2luZ1F1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdEYXRhLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBib29raW5nUXVlcnkubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ0Vycm9yIHx8ICFib29raW5nRGF0YSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnTm8gcHJvZmlsZSBvciBib29raW5nIGZvdW5kLiBQbGVhc2UgY3JlYXRlIGEgYm9va2luZyBmaXJzdC4nLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIHByb2ZpbGUgb2JqZWN0IGZyb20gYm9va2luZyBkYXRhXHJcbiAgICBjb25zdCBkZXJpdmVkUHJvZmlsZTogUHJvZmlsZSA9IHtcclxuICAgICAgaWQ6ICcnLCAvLyBXaWxsIGJlIGdlbmVyYXRlZCB3aGVuIHNhdmVkXHJcbiAgICAgIGVtYWlsOiBib29raW5nRGF0YS5jdXN0b21lcl9lbWFpbCxcclxuICAgICAgcGhvbmU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX3Bob25lIHx8IG51bGwsXHJcbiAgICAgIGZpcnN0X25hbWU6IGJvb2tpbmdEYXRhLmN1c3RvbWVyX2ZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZTogYm9va2luZ0RhdGEuY3VzdG9tZXJfbGFzdF9uYW1lLFxyXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJvZmlsZTogZGVyaXZlZFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljdHVyZShcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGZpbGVEYXRhOiBzdHJpbmcsIC8vIGJhc2U2NCBlbmNvZGVkIHN0cmluZ1xyXG4gIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgZmlsZVR5cGU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVybD86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBVc2UgYWRtaW4gY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZHMgaWYgc2VydmljZSByb2xlIGtleSBpcyBhdmFpbGFibGVcclxuICAgIC8vIElmIG5vdCBhdmFpbGFibGUsIGZhbGwgYmFjayB0byBhdXRoZW50aWNhdGVkIGNsaWVudCBmb3Igc3RvcmFnZSAoc3RvcmFnZSBwb2xpY2llcyBtYXkgc3RpbGwgd29yaylcclxuICAgIGxldCBzdXBhYmFzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ+KchSBVc2luZyBhZG1pbiBjbGllbnQgZm9yIHN0b3JhZ2UgdXBsb2FkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBTZXJ2aWNlIHJvbGUga2V5IG5vdCBzZXQsIHVzaW5nIGF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBzdG9yYWdlIHVwbG9hZCcpO1xyXG4gICAgICBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxyXG4gICAgY29uc3QgdmFsaWRJbWFnZVR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvd2VicCddO1xyXG4gICAgaWYgKCF2YWxpZEltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZVR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGEgSlBFRywgUE5HLCBvciBXZWJQIGltYWdlLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWNvZGUgYmFzZTY0IGRhdGFcclxuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBmaWxlRGF0YS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sICcnKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsICdiYXNlNjQnKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHNpemUgKG1heCA1TUIpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNSAqIDEwMjQgKiAxMDI0OyAvLyA1TUIgaW4gYnl0ZXNcclxuICAgIGlmIChidWZmZXIubGVuZ3RoID4gbWF4U2l6ZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGaWxlIHNpemUgdG9vIGxhcmdlLiBQbGVhc2UgdXBsb2FkIGFuIGltYWdlIHNtYWxsZXIgdGhhbiA1TUIuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZSB1c2luZyBlbWFpbCBhbmQgdGltZXN0YW1wXHJcbiAgICBjb25zdCBmaWxlRXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fCAnanBnJztcclxuICAgIGNvbnN0IHNhbml0aXplZEVtYWlsID0gZW1haWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICdfJyk7XHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke3Nhbml0aXplZEVtYWlsfV8ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgYXZhdGFycy8ke3VuaXF1ZUZpbGVOYW1lfWA7XHJcblxyXG4gICAgLy8gVXBsb2FkIHRvIFN1cGFiYXNlIFN0b3JhZ2VcclxuICAgIGNvbnN0IHsgZGF0YTogdXBsb2FkRGF0YSwgZXJyb3I6IHVwbG9hZEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlLXBpY3R1cmVzJylcclxuICAgICAgLnVwbG9hZChmaWxlUGF0aCwgYnVmZmVyLCB7XHJcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGVUeXBlLFxyXG4gICAgICAgIHVwc2VydDogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIFN0b3JhZ2UgdXBsb2FkIGVycm9yOicsIHVwbG9hZEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1cGxvYWRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgc3RhdHVzQ29kZTogdXBsb2FkRXJyb3Iuc3RhdHVzQ29kZSxcclxuICAgICAgICAgIGVycm9yOiB1cGxvYWRFcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RvcmFnZSBSTFMgZXJyb3JzXHJcbiAgICAgICAgaWYgKHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBsb2FkRXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ1JMUycpIHx8XHJcbiAgICAgICAgICAgIHVwbG9hZEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdwb2xpY3knKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBSTFMgcG9saWN5IGVycm9yLiBQbGVhc2UgY2hlY2sgeW91ciBcInByb2ZpbGUtcGljdHVyZXNcIiBidWNrZXQgcG9saWNpZXMgaW4gU3VwYWJhc2UgU3RvcmFnZS4gVGhlIGJ1Y2tldCBuZWVkcyBwb2xpY2llcyB0aGF0IGFsbG93IGF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gdXBsb2FkIGZpbGVzLicsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogdXBsb2FkRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIGJ1Y2tldCBkb2Vzbid0IGV4aXN0LCByZXR1cm4gaGVscGZ1bCBlcnJvclxyXG4gICAgICAgIGlmICh1cGxvYWRFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdub3QgZm91bmQnKSB8fCB1cGxvYWRFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdCdWNrZXQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdTdG9yYWdlIGJ1Y2tldCBub3QgY29uZmlndXJlZC4gUGxlYXNlIGNyZWF0ZSBhIFwicHJvZmlsZS1waWN0dXJlc1wiIGJ1Y2tldCBpbiBTdXBhYmFzZSBTdG9yYWdlLicsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogdXBsb2FkRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgICAgZXJyb3I6IHVwbG9hZEVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byB1cGxvYWQgZmlsZScsXHJcbiAgICAgICAgICBlcnJvckRldGFpbHM6IHVwbG9hZEVycm9yLmVycm9yIHx8IHVwbG9hZEVycm9yLnN0YXR1c0NvZGU/LnRvU3RyaW5nKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vIEdldCBwdWJsaWMgVVJMXHJcbiAgICBjb25zdCB7IGRhdGE6IHVybERhdGEgfSA9IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IHVybERhdGEucHVibGljVXJsIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwbG9hZFByb2ZpbGVQaWN0dXJlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwbG9hZCBwcm9maWxlIHBpY3R1cmUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9maWxlUGljdHVyZShlbWFpbDogc3RyaW5nLCBhdmF0YXJVcmw6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBFeHRyYWN0IGZpbGUgcGF0aCBmcm9tIFVSTFxyXG4gICAgLy8gVVJMIGZvcm1hdDogaHR0cHM6Ly9bcHJvamVjdF0uc3VwYWJhc2UuY28vc3RvcmFnZS92MS9vYmplY3QvcHVibGljL3Byb2ZpbGUtcGljdHVyZXMvYXZhdGFycy9maWxlbmFtZS5qcGdcclxuICAgIGNvbnN0IHVybFBhdHRlcm4gPSAvXFwvcHJvZmlsZS1waWN0dXJlc1xcLyguKykkLztcclxuICAgIGNvbnN0IG1hdGNoID0gYXZhdGFyVXJsLm1hdGNoKHVybFBhdHRlcm4pO1xyXG4gICAgXHJcbiAgICBpZiAoIW1hdGNoIHx8ICFtYXRjaFsxXSkge1xyXG4gICAgICAvLyBJZiBVUkwgZG9lc24ndCBtYXRjaCBleHBlY3RlZCBwYXR0ZXJuLCB0cnkgYWx0ZXJuYXRpdmUgcGFyc2luZ1xyXG4gICAgICBjb25zdCB1cmxQYXJ0cyA9IGF2YXRhclVybC5zcGxpdCgnL2F2YXRhcnMvJyk7XHJcbiAgICAgIGlmICh1cmxQYXJ0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgcGFyc2UgdGhlIFVSTCwganVzdCByZXR1cm4gc3VjY2VzcyAodGhlIGZpbGUgbWlnaHQgYWxyZWFkeSBiZSBkZWxldGVkKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IHBhcnNlIGF2YXRhciBVUkwgZm9yIGRlbGV0aW9uOicsIGF2YXRhclVybCk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYGF2YXRhcnMvJHt1cmxQYXJ0c1sxXS5zcGxpdCgnPycpWzBdfWA7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IGRlbGV0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAgIC5yZW1vdmUoW2ZpbGVQYXRoXSk7XHJcblxyXG4gICAgICBpZiAoZGVsZXRlRXJyb3IgJiYgIWRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25vdCBmb3VuZCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgZmlsZTonLCBkZWxldGVFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBkZWxldGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gbWF0Y2hbMV0uc3BsaXQoJz8nKVswXTsgLy8gUmVtb3ZlIHF1ZXJ5IHBhcmFtZXRlcnMgaWYgYW55XHJcblxyXG4gICAgLy8gRGVsZXRlIGZyb20gc3RvcmFnZVxyXG4gICAgY29uc3QgeyBlcnJvcjogZGVsZXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGUtcGljdHVyZXMnKVxyXG4gICAgICAucmVtb3ZlKFtmaWxlUGF0aF0pO1xyXG5cclxuICAgIGlmIChkZWxldGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBmaWxlOicsIGRlbGV0ZUVycm9yKTtcclxuICAgICAgLy8gRG9uJ3QgZmFpbCBpZiBmaWxlIGRvZXNuJ3QgZXhpc3RcclxuICAgICAgaWYgKGRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25vdCBmb3VuZCcpIHx8IGRlbGV0ZUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ05vIHN1Y2ggZmlsZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZGVsZXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlUHJvZmlsZVBpY3R1cmU6JywgZXJyb3IpO1xyXG4gICAgLy8gRG9uJ3QgZmFpbCBjb21wbGV0ZWx5IC0gdGhlIFVSTCBpbiBkYXRhYmFzZSB3aWxsIGJlIHJlbW92ZWQgYW55d2F5XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJQcm9maWxlKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZGF0YTogUHJvZmlsZVVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJvZmlsZT86IFByb2ZpbGU7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gRmlyc3QsIHZlcmlmeSB0aGUgYXV0aGVudGljYXRlZCB1c2VyIG1hdGNoZXMgdGhlIGVtYWlsXHJcbiAgICBjb25zdCBhdXRoU3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IGF1dGhTdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIFxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgZW1haWwgcGFyYW1ldGVyIG1hdGNoZXMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcidzIGVtYWlsXHJcbiAgICAvLyBUaGlzIGVuc3VyZXMgdXNlcnMgY2FuIG9ubHkgdXBkYXRlIHRoZWlyIG93biBwcm9maWxlXHJcbiAgICBpZiAodXNlci5lbWFpbD8udG9Mb3dlckNhc2UoKSAhPT0gZW1haWwudG9Mb3dlckNhc2UoKSAmJiB1c2VyLmVtYWlsPy50b0xvd2VyQ2FzZSgpICE9PSBkYXRhLmVtYWlsPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VuYXV0aG9yaXplZDogWW91IGNhbiBvbmx5IHVwZGF0ZSB5b3VyIG93biBwcm9maWxlJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFMV0FZUyB1c2UgYWRtaW4gY2xpZW50IGZvciBwcm9maWxlIG9wZXJhdGlvbnMgLSBpdCBieXBhc3NlcyBSTFMgY29tcGxldGVseVxyXG4gICAgLy8gVGhpcyBpcyBSRVFVSVJFRCAtIHdlIGNhbm5vdCB1c2UgYXV0aGVudGljYXRlZCBjbGllbnQgYXMgaXQgbWF5IHN0aWxsIGNoZWNrIFJMUyBwb2xpY2llc1xyXG4gICAgbGV0IHN1cGFiYXNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygn4pyFIFVzaW5nIGFkbWluIGNsaWVudCBmb3IgcHJvZmlsZSBvcGVyYXRpb25zJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBEbyBOT1QgZmFsbCBiYWNrIHRvIGF1dGhlbnRpY2F0ZWQgY2xpZW50IC0gaXQgd2lsbCBjYXVzZSBSTFMgZXJyb3JzXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBGYWlsZWQgdG8gY3JlYXRlIGFkbWluIGNsaWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6ICdTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIGlzIG5vdCBzZXQuIFRoaXMgaXMgUkVRVUlSRUQgZm9yIHByb2ZpbGUgb3BlcmF0aW9ucy4gUGxlYXNlIGFkZCBpdCB0byB5b3VyIC5lbnYubG9jYWwgZmlsZS4gR2V0IGl0IGZyb206IFN1cGFiYXNlIERhc2hib2FyZCDihpIgU2V0dGluZ3Mg4oaSIEFQSSDihpIgc2VydmljZV9yb2xlIGtleSAoc2VjcmV0KScsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFZlcmlmeSB3ZSBoYXZlIGEgdmFsaWQgY2xpZW50IChzaG91bGQgbmV2ZXIgaGFwcGVuIGR1ZSB0byBlcnJvciBhYm92ZSwgYnV0IGRvdWJsZS1jaGVjaylcclxuICAgIGlmICghc3VwYWJhc2UpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgZGF0YWJhc2UgY2xpZW50LiBQbGVhc2UgY2hlY2sgeW91ciBTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIGluIC5lbnYubG9jYWwnIFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIWRhdGEuZmlyc3RfbmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEubGFzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhLmVtYWlsPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZGF0YS5lbWFpbCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBlbWFpbCBmb3JtYXQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSBuZXcgZW1haWwgKGlmIGNoYW5nZWQpIHN0aWxsIG1hdGNoZXMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4gICAgaWYgKGRhdGEuZW1haWwudG9Mb3dlckNhc2UoKSAhPT0gdXNlci5lbWFpbD8udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBBbGxvdyBlbWFpbCBjaGFuZ2Ugb25seSBpZiBpdCdzIHRoZSBzYW1lIHVzZXIgKGNhc2UgaW5zZW5zaXRpdmUgY2hlY2sgYWJvdmUgcGFzc2VkKVxyXG4gICAgICAvLyBCdXQgd2Ugc2hvdWxkIHZlcmlmeSBpdCdzIGEgdmFsaWQgY2hhbmdlICh1c2VyIHVwZGF0aW5nIHRoZWlyIG93biBlbWFpbClcclxuICAgICAgaWYgKGRhdGEuZW1haWwudG9Mb3dlckNhc2UoKSAhPT0gZW1haWwudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIC8vIEVtYWlsIGlzIGJlaW5nIGNoYW5nZWQgLSB2ZXJpZnkgaXQncyBzdGlsbCB0aGUgc2FtZSB1c2VyXHJcbiAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgYWxsb3cgaXQgYnV0IGluIHByb2R1Y3Rpb24geW91IG1pZ2h0IHdhbnQgdG8gcmVxdWlyZSBlbWFpbCB2ZXJpZmljYXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHByb2ZpbGUgZXhpc3RzXHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBDaGVja2luZyBpZiBwcm9maWxlIGV4aXN0cyBmb3IgZW1haWw6JywgZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVXNpbmcgY2xpZW50IHR5cGU6JywgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSA/ICdBRE1JTiAoc2VydmljZSByb2xlKScgOiAnQVVUSEVOVElDQVRFRCAoYW5vbiBrZXkpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlLCBlcnJvcjogc2VsZWN0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG4gICAgXHJcbiAgICBpZiAoc2VsZWN0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm9yIHNlbGVjdGluZyBwcm9maWxlOicsIHNlbGVjdEVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGNoZWNrIHByb2ZpbGU6ICR7c2VsZWN0RXJyb3IubWVzc2FnZX1gIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfinIUgUHJvZmlsZSBjaGVjayByZXN1bHQ6JywgZXhpc3RpbmdQcm9maWxlID8gJ1Byb2ZpbGUgZXhpc3RzICh3aWxsIFVQREFURSknIDogJ1Byb2ZpbGUgZG9lcyBub3QgZXhpc3QgKHdpbGwgSU5TRVJUKScpO1xyXG5cclxuICAgIC8vIElmIGF2YXRhcl91cmwgaXMgYmVpbmcgcmVtb3ZlZCwgZGVsZXRlIHRoZSBvbGQgZmlsZVxyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZT8uYXZhdGFyX3VybCAmJiBkYXRhLmF2YXRhcl91cmwgPT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgZGVsZXRlUHJvZmlsZVBpY3R1cmUoZW1haWwsIGV4aXN0aW5nUHJvZmlsZS5hdmF0YXJfdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKGV4aXN0aW5nUHJvZmlsZSkge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICAvLyBJZiBlbWFpbCBjaGFuZ2VkLCB3ZSBuZWVkIHRvIGhhbmRsZSBpdCBjYXJlZnVsbHlcclxuICAgICAgaWYgKGRhdGEuZW1haWwgIT09IGVtYWlsKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgbmV3IGVtYWlsIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBlbWFpbENoZWNrIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAgIC5lcSgnZW1haWwnLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgICAgIGlmIChlbWFpbENoZWNrKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBhdmF0YXJfdXJsOiB1bmRlZmluZWQgbWVhbnMgZG9uJ3QgY2hhbmdlLCBudWxsIG1lYW5zIHJlbW92ZSwgc3RyaW5nIG1lYW5zIHNldFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cGRhdGVEYXRhLmF2YXRhcl91cmwgPSBkYXRhLmF2YXRhcl91cmwgPT09IG51bGwgPyBudWxsIDogZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBdHRlbXB0aW5nIHRvIFVQREFURSBwcm9maWxlIHdpdGggZGF0YTonLCB1cGRhdGVEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coJ/Cfk50gVXBkYXRlIFdIRVJFIGVtYWlsID0nLCBlbWFpbCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRQcm9maWxlLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgVXBkYXRlIGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogdXBkYXRlRXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IHVwZGF0ZUVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiB1cGRhdGVFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogdXBkYXRlRXJyb3IuaGludCxcclxuICAgICAgICAgIHN0YXR1c0NvZGU6ICh1cGRhdGVFcnJvciBhcyBhbnkpLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICBzdGF0dXM6ICh1cGRhdGVFcnJvciBhcyBhbnkpLnN0YXR1cyxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIFJMUyBlcnJvcnMgc3BlY2lmaWNhbGx5XHJcbiAgICAgICAgaWYgKHVwZGF0ZUVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdyb3ctbGV2ZWwgc2VjdXJpdHknKSB8fCBcclxuICAgICAgICAgICAgdXBkYXRlRXJyb3IuY29kZSA9PT0gJzQyNTAxJyB8fFxyXG4gICAgICAgICAgICB1cGRhdGVFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnUkxTJykpIHtcclxuICAgICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXHJcbiAgICAgICAgICAgIGVycm9yOiAnUm93IExldmVsIFNlY3VyaXR5IGVycm9yLiBQbGVhc2UgZW5zdXJlOiAxKSBSTFMgaXMgZGlzYWJsZWQgb24gcHJvZmlsZXMgdGFibGUsIDIpIFNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgaXMgc2V0IGluIC5lbnYubG9jYWwnLFxyXG4gICAgICAgICAgICBlcnJvckRldGFpbHM6IGBFcnJvciBjb2RlOiAke3VwZGF0ZUVycm9yLmNvZGUgfHwgJ3Vua25vd24nfS4gJHt1cGRhdGVFcnJvci5oaW50IHx8ICcnfWAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnLFxyXG4gICAgICAgICAgZXJyb3JEZXRhaWxzOiB1cGRhdGVFcnJvci5kZXRhaWxzIHx8IHVwZGF0ZUVycm9yLmhpbnQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlIG5ldyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IGluc2VydERhdGE6IGFueSA9IHtcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLnRyaW0oKSxcclxuICAgICAgICAgIHBob25lOiBkYXRhLnBob25lPy50cmltKCkgfHwgbnVsbCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZS50cmltKCksXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLnRyaW0oKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE9ubHkgc2V0IGF2YXRhcl91cmwgaWYgaXQncyBwcm92aWRlZFxyXG4gICAgICBpZiAoZGF0YS5hdmF0YXJfdXJsKSB7XHJcbiAgICAgICAgaW5zZXJ0RGF0YS5hdmF0YXJfdXJsID0gZGF0YS5hdmF0YXJfdXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGE6IG5ld1Byb2ZpbGUsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoaW5zZXJ0RGF0YSlcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9maWxlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgSW5zZXJ0IGVycm9yIGRldGFpbHM6Jywge1xyXG4gICAgICAgICAgY29kZTogaW5zZXJ0RXJyb3IuY29kZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGluc2VydEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBkZXRhaWxzOiBpbnNlcnRFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgaGludDogaW5zZXJ0RXJyb3IuaGludCxcclxuICAgICAgICAgIHNlcnZpY2VSb2xlS2V5U2V0OiAhIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHVuaXF1ZSBjb25zdHJhaW50IHZpb2xhdGlvblxyXG4gICAgICAgIGlmIChpbnNlcnRFcnJvci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBSTFMgZXJyb3JcclxuICAgICAgICBpZiAoaW5zZXJ0RXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ3Jvdy1sZXZlbCBzZWN1cml0eScpIHx8IFxyXG4gICAgICAgICAgICBpbnNlcnRFcnJvci5jb2RlID09PSAnNDI1MDEnIHx8XHJcbiAgICAgICAgICAgIGluc2VydEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdSTFMnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICAgICAgZXJyb3I6ICdSb3cgTGV2ZWwgU2VjdXJpdHkgZXJyb3IuIFBsZWFzZSBlbnN1cmU6IDEpIFJMUyBpcyBkaXNhYmxlZCBvbiBwcm9maWxlcyB0YWJsZSwgMikgU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSBpcyBzZXQgaW4gLmVudi5sb2NhbCcsXHJcbiAgICAgICAgICAgIGVycm9yRGV0YWlsczogYEVycm9yIGNvZGU6ICR7aW5zZXJ0RXJyb3IuY29kZSB8fCAndW5rbm93bid9LiAke2luc2VydEVycm9yLmhpbnQgfHwgJyd9YCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgICAgZXJyb3I6IGluc2VydEVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZmlsZScsXHJcbiAgICAgICAgICBlcnJvckRldGFpbHM6IGluc2VydEVycm9yLmRldGFpbHMgfHwgaW5zZXJ0RXJyb3IuaGludCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0ID0gbmV3UHJvZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9maWxlOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ3VzdG9tZXJQcm9maWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJMb2NhdGlvbnMoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZT86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9ucz86IExvY2F0aW9uW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignaXNfZGVmYXVsdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgZm9yIGVtYWlsL3Bob25lIGxvb2t1cFxyXG4gICAgaWYgKGVtYWlsICYmIHBob25lKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZW1haWwpO1xyXG4gICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIHBob25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIG9yIHBob25lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsb2NhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBsb2NhdGlvbnM6IGRhdGEgfHwgW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJMb2NhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbG9jYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwaG9uZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb25DcmVhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGxvY2F0aW9uPzogTG9jYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEubmlja25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOaWNrbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYXRpb25EYXRhLmFkZHJlc3M/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBZGRyZXNzIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEuc3VidXJiPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU3VidXJiIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFsb2NhdGlvbkRhdGEuY2l0eT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NpdHkgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBhbGwgb3RoZXIgZGVmYXVsdHMgZm9yIHRoaXMgY3VzdG9tZXJcclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCkge1xyXG4gICAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkub3IoYGN1c3RvbWVyX2VtYWlsLmVxLiR7ZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7cGhvbmV9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZW1haWwpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgICAgfSBlbHNlIGlmIChwaG9uZSkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX3Bob25lJywgcGhvbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCB1cGRhdGVRdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IG5ld0xvY2F0aW9uLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBjdXN0b21lcl9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgY3VzdG9tZXJfcGhvbmU6IHBob25lIHx8IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IGxvY2F0aW9uRGF0YS5uaWNrbmFtZS50cmltKCksXHJcbiAgICAgICAgYWRkcmVzczogbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpLFxyXG4gICAgICAgIGFwdF91bml0OiBsb2NhdGlvbkRhdGEuYXB0X3VuaXQ/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgIHN1YnVyYjogbG9jYXRpb25EYXRhLnN1YnVyYi50cmltKCksXHJcbiAgICAgICAgY2l0eTogbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpLFxyXG4gICAgICAgIHBvc3RhbF9jb2RlOiBsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGU/LnRyaW0oKSB8fCBudWxsLFxyXG4gICAgICAgIGlzX2RlZmF1bHQ6IGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0IHx8IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBsb2NhdGlvbjonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9uOiBuZXdMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjcmVhdGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihcclxuICBsb2NhdGlvbklkOiBzdHJpbmcsXHJcbiAgbG9jYXRpb25EYXRhOiBMb2NhdGlvblVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgbG9jYXRpb24/OiBMb2NhdGlvbjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0IGlmIHByb3ZpZGVkXHJcbiAgICBpZiAobG9jYXRpb25EYXRhLm5pY2tuYW1lICE9PSB1bmRlZmluZWQgJiYgIWxvY2F0aW9uRGF0YS5uaWNrbmFtZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmlja25hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0FkZHJlc3MgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLnN1YnVyYiAhPT0gdW5kZWZpbmVkICYmICFsb2NhdGlvbkRhdGEuc3VidXJiLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTdWJ1cmIgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25EYXRhLmNpdHkgIT09IHVuZGVmaW5lZCAmJiAhbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NpdHkgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgbG9jYXRpb24gdG8gY2hlY2sgY3VzdG9tZXIgZW1haWxcclxuICAgIGNvbnN0IHsgZGF0YTogY3VycmVudExvY2F0aW9uLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsLCBjdXN0b21lcl9waG9uZScpXHJcbiAgICAgIC5lcSgnaWQnLCBsb2NhdGlvbklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMb2NhdGlvbiBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBhbGwgb3RoZXIgZGVmYXVsdHMgZm9yIHRoaXMgY3VzdG9tZXJcclxuICAgIGlmIChsb2NhdGlvbkRhdGEuaXNfZGVmYXVsdCkge1xyXG4gICAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBpc19kZWZhdWx0OiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWwgJiYgY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lKSB7XHJcbiAgICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5vcihgY3VzdG9tZXJfZW1haWwuZXEuJHtjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfZW1haWx9LGN1c3RvbWVyX3Bob25lLmVxLiR7Y3VycmVudExvY2F0aW9uLmN1c3RvbWVyX3Bob25lfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCkge1xyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgY3VycmVudExvY2F0aW9uLmN1c3RvbWVyX2VtYWlsKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TG9jYXRpb24uY3VzdG9tZXJfcGhvbmUpIHtcclxuICAgICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9waG9uZScsIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERvbid0IHVuc2V0IHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkubmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgICAgYXdhaXQgdXBkYXRlUXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdXBkYXRlIG9iamVjdCB3aXRoIG9ubHkgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7XHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5uaWNrbmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEubmlja25hbWUgPSBsb2NhdGlvbkRhdGEubmlja25hbWUudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hZGRyZXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5hZGRyZXNzID0gbG9jYXRpb25EYXRhLmFkZHJlc3MudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5hcHRfdW5pdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEuYXB0X3VuaXQgPSBsb2NhdGlvbkRhdGEuYXB0X3VuaXQ/LnRyaW0oKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5zdWJ1cmIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVEYXRhLnN1YnVyYiA9IGxvY2F0aW9uRGF0YS5zdWJ1cmIudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5jaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5jaXR5ID0gbG9jYXRpb25EYXRhLmNpdHkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5wb3N0YWxfY29kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEucG9zdGFsX2NvZGUgPSBsb2NhdGlvbkRhdGEucG9zdGFsX2NvZGU/LnRyaW0oKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uRGF0YS5pc19kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXBkYXRlRGF0YS5pc19kZWZhdWx0ID0gbG9jYXRpb25EYXRhLmlzX2RlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkTG9jYXRpb24sIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC51cGRhdGUodXBkYXRlRGF0YSlcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGxvY2F0aW9uOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb246IHVwZGF0ZWRMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2xvY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGxvY2F0aW9uOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVMb2NhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXREZWZhdWx0TG9jYXRpb24oXHJcbiAgbG9jYXRpb25JZDogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBsb2NhdGlvbj86IExvY2F0aW9uO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgbG9jYXRpb24gdG8gdmVyaWZ5IG93bmVyc2hpcFxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXJyZW50TG9jYXRpb24sIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGN1c3RvbWVyX3Bob25lJylcclxuICAgICAgLmVxKCdpZCcsIGxvY2F0aW9uSWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhY3VycmVudExvY2F0aW9uKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0xvY2F0aW9uIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgb3duZXJzaGlwXHJcbiAgICBjb25zdCBpc093bmVyID0gXHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9lbWFpbCA9PT0gZW1haWwgfHxcclxuICAgICAgKHBob25lICYmIGN1cnJlbnRMb2NhdGlvbi5jdXN0b21lcl9waG9uZSA9PT0gcGhvbmUpO1xyXG5cclxuICAgIGlmICghaXNPd25lcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVW5zZXQgYWxsIG90aGVyIGRlZmF1bHRzIGZvciB0aGlzIGN1c3RvbWVyXHJcbiAgICBsZXQgdXBkYXRlUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbG9jYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IGlzX2RlZmF1bHQ6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlbWFpbCAmJiBwaG9uZSkge1xyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5Lm9yKGBjdXN0b21lcl9lbWFpbC5lcS4ke2VtYWlsfSxjdXN0b21lcl9waG9uZS5lcS4ke3Bob25lfWApO1xyXG4gICAgfSBlbHNlIGlmIChlbWFpbCkge1xyXG4gICAgICB1cGRhdGVRdWVyeSA9IHVwZGF0ZVF1ZXJ5LmVxKCdjdXN0b21lcl9lbWFpbCcsIGVtYWlsKTtcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgdXBkYXRlUXVlcnkgPSB1cGRhdGVRdWVyeS5lcSgnY3VzdG9tZXJfcGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgdW5zZXQgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuICAgIHVwZGF0ZVF1ZXJ5ID0gdXBkYXRlUXVlcnkubmVxKCdpZCcsIGxvY2F0aW9uSWQpO1xyXG5cclxuICAgIGF3YWl0IHVwZGF0ZVF1ZXJ5O1xyXG5cclxuICAgIC8vIFNldCB0aGlzIGxvY2F0aW9uIGFzIGRlZmF1bHRcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZExvY2F0aW9uLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdsb2NhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgaXNfZGVmYXVsdDogdHJ1ZSB9KVxyXG4gICAgICAuZXEoJ2lkJywgbG9jYXRpb25JZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyBkZWZhdWx0IGxvY2F0aW9uOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbG9jYXRpb246IHVwZGF0ZWRMb2NhdGlvbiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzZXREZWZhdWx0TG9jYXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2V0IGRlZmF1bHQgbG9jYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZVJlZmVycmFsQ29kZShcclxuICBlbWFpbDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcmVmZXJyYWxDb2RlPzogc3RyaW5nO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHJvZmlsZSBleGlzdHMgYW5kIGhhcyBhIHJlZmVycmFsIGNvZGVcclxuICAgIGNvbnN0IHsgZGF0YTogcHJvZmlsZSwgZXJyb3I6IHByb2ZpbGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgncmVmZXJyYWxfY29kZScpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHByb2ZpbGVFcnJvciAmJiBwcm9maWxlRXJyb3IuY29kZSAhPT0gJ1BHUlNUMTE2Jykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlOicsIHByb2ZpbGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcHJvZmlsZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBwcm9maWxlIGV4aXN0cyBhbmQgaGFzIGEgcmVmZXJyYWwgY29kZSwgcmV0dXJuIGl0XHJcbiAgICBpZiAocHJvZmlsZT8ucmVmZXJyYWxfY29kZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWZlcnJhbENvZGU6IHByb2ZpbGUucmVmZXJyYWxfY29kZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgbmV3IHJlZmVycmFsIGNvZGVcclxuICAgIC8vIFRyeSB1c2luZyB0aGUgZGF0YWJhc2UgZnVuY3Rpb24gZmlyc3QsIGJ1dCBmYWxsYmFjayB0byBjbGllbnQtc2lkZSBnZW5lcmF0aW9uXHJcbiAgICBsZXQgZ2VuZXJhdGVkQ29kZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZGJDb2RlLCBlcnJvcjogY29kZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5ycGMoJ2dlbmVyYXRlX3JlZmVycmFsX2NvZGUnKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghY29kZUVycm9yICYmIGRiQ29kZSkge1xyXG4gICAgICAgIGdlbmVyYXRlZENvZGUgPSBkYkNvZGU7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKHJwY0Vycm9yKSB7XHJcbiAgICAgIC8vIFJQQyBmdW5jdGlvbiBtaWdodCBub3QgZXhpc3QgeWV0LCB0aGF0J3Mgb2theVxyXG4gICAgICBjb25zb2xlLmxvZygnUlBDIGZ1bmN0aW9uIG5vdCBhdmFpbGFibGUsIHVzaW5nIGZhbGxiYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFnZW5lcmF0ZWRDb2RlKSB7XHJcbiAgICAgIC8vIEZhbGxiYWNrOiBnZW5lcmF0ZSBjb2RlIGNsaWVudC1zaWRlIHN0eWxlXHJcbiAgICAgIGNvbnN0IGZhbGxiYWNrQ29kZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2hlY2sgaWYgZmFsbGJhY2sgY29kZSBleGlzdHMsIHJldHJ5IGlmIGl0IGRvZXNcclxuICAgICAgbGV0IGZpbmFsQ29kZSA9IGZhbGxiYWNrQ29kZTtcclxuICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA1O1xyXG5cclxuICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAgIC5lcSgncmVmZXJyYWxfY29kZScsIGZpbmFsQ29kZSlcclxuICAgICAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XHJcbiAgICAgICAgICBicmVhazsgLy8gQ29kZSBpcyB1bmlxdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IGNvZGVcclxuICAgICAgICBmaW5hbENvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgb3IgaW5zZXJ0IHByb2ZpbGUgd2l0aCByZWZlcnJhbCBjb2RlXHJcbiAgICAgIC8vIEZpcnN0LCB0cnkgdG8gdXBkYXRlIGV4aXN0aW5nIHByb2ZpbGVcclxuICAgICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1Byb2ZpbGUgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAuc2VsZWN0KCdpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lJylcclxuICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgICBsZXQgdXBkYXRlZFByb2ZpbGU7XHJcbiAgICAgIGlmIChleGlzdGluZ1Byb2ZpbGUpIHtcclxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJvZmlsZVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZCwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICByZWZlcnJhbF9jb2RlOiBmaW5hbENvZGUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyByZWZlcnJhbCBjb2RlOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVkUHJvZmlsZSA9IHVwZGF0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBwcm9maWxlIHdpdGggcmVmZXJyYWwgY29kZVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogaW5zZXJ0ZWQsIGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHJlZmVycmFsX2NvZGU6IGZpbmFsQ29kZSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZW1haWwuc3BsaXQoJ0AnKVswXSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuc2VsZWN0KCdyZWZlcnJhbF9jb2RlJylcclxuICAgICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgICAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZWZlcnJhbCBjb2RlOicsIGluc2VydEVycm9yKTtcclxuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVkUHJvZmlsZSA9IGluc2VydGVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWZlcnJhbENvZGU6IHVwZGF0ZWRQcm9maWxlPy5yZWZlcnJhbF9jb2RlIHx8IGZpbmFsQ29kZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgZ2VuZXJhdGVkIGNvZGUgZnJvbSBkYXRhYmFzZSBmdW5jdGlvblxyXG4gICAgLy8gVXBkYXRlIG9yIGluc2VydCBwcm9maWxlIHdpdGggZ2VuZXJhdGVkIGNvZGVcclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmdQcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBsZXQgdXBkYXRlZFByb2ZpbGU7XHJcbiAgICBpZiAoZXhpc3RpbmdQcm9maWxlKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9maWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZCwgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICByZWZlcnJhbF9jb2RlOiBnZW5lcmF0ZWRDb2RlLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsKVxyXG4gICAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHJlZmVycmFsIGNvZGU6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRQcm9maWxlID0gdXBkYXRlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEluc2VydCBuZXcgcHJvZmlsZSB3aXRoIHJlZmVycmFsIGNvZGVcclxuICAgICAgY29uc3QgeyBkYXRhOiBpbnNlcnRlZCwgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHJlZmVycmFsX2NvZGU6IGdlbmVyYXRlZENvZGUsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiBlbWFpbC5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoJ3JlZmVycmFsX2NvZGUnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChpbnNlcnRFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlZmVycmFsIGNvZGU6JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRQcm9maWxlID0gaW5zZXJ0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJyYWxDb2RlOiB1cGRhdGVkUHJvZmlsZT8ucmVmZXJyYWxfY29kZSB8fCBnZW5lcmF0ZWRDb2RlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE9yQ3JlYXRlUmVmZXJyYWxDb2RlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdldCByZWZlcnJhbCBjb2RlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFJlZmVycmFsSW52aXRlcyhcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIGludml0ZUVtYWlsczogc3RyaW5nW10sXHJcbiAgcmVmZXJyYWxDb2RlOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgZW1haWwgYWRkcmVzc2VzXHJcbiAgICBjb25zdCB2YWxpZEVtYWlscyA9IGludml0ZUVtYWlsc1xyXG4gICAgICAubWFwKChlKSA9PiBlLnRyaW0oKSlcclxuICAgICAgLmZpbHRlcigoZSkgPT4ge1xyXG4gICAgICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodmFsaWRFbWFpbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vIHZhbGlkIGVtYWlsIGFkZHJlc3NlcyBwcm92aWRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgcmVmZXJyYWwgcmVjb3JkcyBmb3IgdHJhY2tpbmdcclxuICAgIGNvbnN0IHJlZmVycmFsUmVjb3JkcyA9IHZhbGlkRW1haWxzLm1hcCgocmVmZXJyZWRFbWFpbCkgPT4gKHtcclxuICAgICAgcmVmZXJyZXJfZW1haWw6IGVtYWlsLFxyXG4gICAgICByZWZlcnJlZF9lbWFpbDogcmVmZXJyZWRFbWFpbCxcclxuICAgICAgcmVmZXJyYWxfY29kZTogcmVmZXJyYWxDb2RlLFxyXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3JlZmVycmFscycpXHJcbiAgICAgIC5pbnNlcnQocmVmZXJyYWxSZWNvcmRzKTtcclxuXHJcbiAgICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVmZXJyYWwgcmVjb3JkczonLCBpbnNlcnRFcnJvcik7XHJcbiAgICAgIC8vIENvbnRpbnVlIGV2ZW4gaWYgaW5zZXJ0IGZhaWxzIC0gd2Ugc3RpbGwgd2FudCB0byBzZW5kIGVtYWlsc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHJlZmVycmFsIGxpbmtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCB8fCAnaHR0cHM6Ly9zaGFsZWFuLmNvLnphJztcclxuICAgIGNvbnN0IHJlZmVycmFsTGluayA9IGAke2Jhc2VVcmx9L2Jvb2tpbmcvZGV0YWlscz9yZWY9JHtyZWZlcnJhbENvZGV9YDtcclxuXHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYWN0dWFsIGVtYWlsIHNlbmRpbmcgdXNpbmcgeW91ciBlbWFpbCBzZXJ2aWNlIChSZXNlbmQsIFNlbmRHcmlkLCBldGMuKVxyXG4gICAgLy8gRm9yIG5vdywgd2UnbGwganVzdCBsb2cgdGhlIGVtYWlscyB0aGF0IHdvdWxkIGJlIHNlbnRcclxuICAgIGNvbnNvbGUubG9nKCdSZWZlcnJhbCBpbnZpdGVzIHRvIHNlbmQ6Jywge1xyXG4gICAgICBmcm9tOiBlbWFpbCxcclxuICAgICAgdG86IHZhbGlkRW1haWxzLFxyXG4gICAgICByZWZlcnJhbENvZGUsXHJcbiAgICAgIHJlZmVycmFsTGluayxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluIGEgcmVhbCBpbXBsZW1lbnRhdGlvbiwgeW91IHdvdWxkIHNlbmQgZW1haWxzIGhlcmVcclxuICAgIC8vIEV4YW1wbGUgd2l0aCBSZXNlbmQ6XHJcbiAgICAvLyBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgLy8gICBmcm9tOiAnU2hhbGVhbiA8bm9yZXBseUBzaGFsZWFuLmNvLnphPicsXHJcbiAgICAvLyAgIHRvOiB2YWxpZEVtYWlscyxcclxuICAgIC8vICAgc3ViamVjdDogJ1lvdVxcJ3ZlIGJlZW4gaW52aXRlZCB0byB0cnkgU2hhbGVhbiBDbGVhbmluZyBTZXJ2aWNlcyEnLFxyXG4gICAgLy8gICBodG1sOiBgPHA+WW91ciBmcmllbmQgaGFzIGludml0ZWQgeW91IHRvIHRyeSBTaGFsZWFuLiBVc2UgY29kZSAke3JlZmVycmFsQ29kZX0gdG8gZ2V0IFIxNTAgb2ZmIHlvdXIgZmlyc3QgYm9va2luZyE8L3A+PHA+PGEgaHJlZj1cIiR7cmVmZXJyYWxMaW5rfVwiPkJvb2sgTm93PC9hPjwvcD5gLFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VudDogdmFsaWRFbWFpbHMubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHNlbmRSZWZlcnJhbEludml0ZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCBpbnZpdGVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVmZXJyYWxTdGF0cyhcclxuICBlbWFpbDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICB0b3RhbFJlZmVycmFsczogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkUmVmZXJyYWxzOiBudW1iZXI7XHJcbiAgICBwZW5kaW5nUmV3YXJkczogbnVtYmVyO1xyXG4gICAgdG90YWxSZXdhcmRzOiBudW1iZXI7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogcmVmZXJyYWxzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3JlZmVycmFscycpXHJcbiAgICAgIC5zZWxlY3QoJ3N0YXR1cywgcmVmZXJyZXJfcmV3YXJkX2Ftb3VudCwgcmVmZXJyZXJfcmV3YXJkX3N0YXR1cycpXHJcbiAgICAgIC5lcSgncmVmZXJyZXJfZW1haWwnLCBlbWFpbCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlZmVycmFsIHN0YXRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHMgPSB7XHJcbiAgICAgIHRvdGFsUmVmZXJyYWxzOiByZWZlcnJhbHM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICBjb21wbGV0ZWRSZWZlcnJhbHM6XHJcbiAgICAgICAgcmVmZXJyYWxzPy5maWx0ZXIoKHIpID0+IHIuc3RhdHVzID09PSAnY29tcGxldGVkJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIHBlbmRpbmdSZXdhcmRzOlxyXG4gICAgICAgIHJlZmVycmFscz8uZmlsdGVyKChyKSA9PiByLnJlZmVycmVyX3Jld2FyZF9zdGF0dXMgPT09ICdwZW5kaW5nJykubGVuZ3RoIHx8IDAsXHJcbiAgICAgIHRvdGFsUmV3YXJkczpcclxuICAgICAgICByZWZlcnJhbHNcclxuICAgICAgICAgID8uZmlsdGVyKChyKSA9PiByLnJlZmVycmVyX3Jld2FyZF9zdGF0dXMgPT09ICdjcmVkaXRlZCcpXHJcbiAgICAgICAgICAucmVkdWNlKChzdW0sIHIpID0+IHN1bSArIChyLnJlZmVycmVyX3Jld2FyZF9hbW91bnQgfHwgMCksIDApIHx8IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN0YXRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJlZmVycmFsU3RhdHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmVmZXJyYWwgc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgY3JlZGl0IHB1cmNoYXNlIHdpdGggUGF5c3RhY2tcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplQ3JlZGl0UHVyY2hhc2UoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBhbW91bnQ6IG51bWJlcixcclxuICBwYXltZW50TWV0aG9kOiAnY3JlZGl0X2NhcmQnIHwgJ2VmdCdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhdXRob3JpemF0aW9uVXJsPzogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoYW1vdW50IDwgMjAgfHwgYW1vdW50ID4gNTAwMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQW1vdW50IG11c3QgYmUgYmV0d2VlbiBSMjAgYW5kIFI1MDAwJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSByZWZlcmVuY2UgZm9yIHRoaXMgY3JlZGl0IHB1cmNoYXNlXHJcbiAgICBjb25zdCByZWZlcmVuY2UgPSBgQ1JFRElUXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSl9YDtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBwZW5kaW5nIGNyZWRpdCB0cmFuc2FjdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IG9yIGNyZWF0ZSBwcm9maWxlXHJcbiAgICBsZXQgeyBkYXRhOiBwcm9maWxlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmICghcHJvZmlsZSkge1xyXG4gICAgICAvLyBDcmVhdGUgYSBiYXNpYyBwcm9maWxlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgICAgY29uc3QgeyBkYXRhOiBuZXdQcm9maWxlLCBlcnJvcjogY3JlYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgY3JlZGl0X2JhbGFuY2U6IDAsXHJcbiAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdpZCwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChjcmVhdGVFcnJvciB8fCAhbmV3UHJvZmlsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBwcm9maWxlJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHByb2ZpbGUgPSBuZXdQcm9maWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBwZW5kaW5nIGNyZWRpdCB0cmFuc2FjdGlvblxyXG4gICAgY29uc3QgeyBlcnJvcjogdHJhbnNhY3Rpb25FcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NyZWRpdF90cmFuc2FjdGlvbnMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBwcm9maWxlX2lkOiBwcm9maWxlLmlkLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6ICdwdXJjaGFzZScsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIGJhbGFuY2VfYmVmb3JlOiBwcm9maWxlLmNyZWRpdF9iYWxhbmNlIHx8IDAsXHJcbiAgICAgICAgYmFsYW5jZV9hZnRlcjogcHJvZmlsZS5jcmVkaXRfYmFsYW5jZSB8fCAwLCAvLyBXb24ndCB1cGRhdGUgdW50aWwgcGF5bWVudCBzdWNjZWVkc1xyXG4gICAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kLFxyXG4gICAgICAgIHBheXN0YWNrX3JlZmVyZW5jZTogcmVmZXJlbmNlLFxyXG4gICAgICAgIHBheW1lbnRfc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBQdXJjaGFzZSBvZiBSJHthbW91bnR9IFNoYWxlYW5DcmVkYCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHRyYW5zYWN0aW9uRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3JlZGl0IHRyYW5zYWN0aW9uOicsIHRyYW5zYWN0aW9uRXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiByZWNvcmQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgUGF5c3RhY2sgcGF5bWVudFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wYXlzdGFjay9pbml0aWFsaXplJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiAnY3JlZGl0X3B1cmNoYXNlJyxcclxuICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IgfHwgJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBheW1lbnREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcGF5bWVudERhdGEuc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHBheW1lbnREYXRhLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBpbml0aWFsaXplIHBheW1lbnQnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6IHBheW1lbnREYXRhLmRhdGEuYXV0aG9yaXphdGlvbl91cmwsXHJcbiAgICAgIHJlZmVyZW5jZTogcGF5bWVudERhdGEuZGF0YS5yZWZlcmVuY2UsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgY3JlZGl0IHB1cmNoYXNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGluaXRpYWxpemUgcGF5bWVudCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWb3VjaGVyUmVkZW1wdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB2b3VjaGVyX2NvZGU6IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICByZWRlZW1lZF9hdDogc3RyaW5nO1xyXG4gIGJvb2tpbmdfaWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRlZW1Wb3VjaGVyKFxyXG4gIGNvZGU6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBob25lPzogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYW1vdW50PzogbnVtYmVyO1xyXG4gIG5ld0JhbGFuY2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBkYXRhYmFzZSBmdW5jdGlvbiB0byByZWRlZW0gdGhlIHZvdWNoZXJcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygncmVkZWVtX3ZvdWNoZXInLCB7XHJcbiAgICAgIHBfY29kZTogY29kZS50cmltKCkudG9VcHBlckNhc2UoKSxcclxuICAgICAgcF9lbWFpbDogZW1haWwudHJpbSgpLFxyXG4gICAgICBwX3Bob25lOiBwaG9uZT8udHJpbSgpIHx8IG51bGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVkZWVtaW5nIHZvdWNoZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcmVkZWVtIHZvdWNoZXInLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnNlIHRoZSByZXN1bHQgZnJvbSB0aGUgZnVuY3Rpb24gKGhhbmRsZSBib3RoIG9iamVjdCBhbmQgc3RyaW5nIEpTT05CKVxyXG4gICAgbGV0IHJlc3VsdCA9IGRhdGE7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgdm91Y2hlciByZWRlbXB0aW9uIHJlc3VsdDonLCBwYXJzZUVycm9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdzdWNjZXNzJyBpbiByZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgfHwgJ0ZhaWxlZCB0byByZWRlZW0gdm91Y2hlcicsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIGFtb3VudDogcmVzdWx0LmFtb3VudCxcclxuICAgICAgICBuZXdCYWxhbmNlOiByZXN1bHQubmV3X2JhbGFuY2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiAnVW5leHBlY3RlZCByZXNwb25zZSBmcm9tIHNlcnZlcicsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZWRlZW1Wb3VjaGVyOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHJlZGVlbSB2b3VjaGVyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vm91Y2hlclJlZGVtcHRpb25zKFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgcGhvbmU/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICByZWRlbXB0aW9ucz86IFZvdWNoZXJSZWRlbXB0aW9uW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgndm91Y2hlcl9yZWRlbXB0aW9ucycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCB2b3VjaGVyX2NvZGUsIGFtb3VudCwgcmVkZWVtZWRfYXQsIGJvb2tpbmdfaWQnKVxyXG4gICAgICAub3JkZXIoJ3JlZGVlbWVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEJ1aWxkIHF1ZXJ5IGZvciBlbWFpbC9waG9uZSBsb29rdXBcclxuICAgIC8vIFByaW9yaXRpemUgZW1haWwgYXMgaXQncyB0aGUgcHJpbWFyeSBpZGVudGlmaWVyIHRvIHByZXZlbnQgY3Jvc3MtYWNjb3VudCB2aXNpYmlsaXR5XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICAgIC8vIElmIHBob25lIGlzIGFsc28gcHJvdmlkZWQsIHdlIGNhbiBvcHRpb25hbGx5IGZpbHRlciBieSBib3RoIGZvciBleHRyYSBzZWN1cml0eVxyXG4gICAgICAvLyBidXQgZW1haWwgYWxvbmUgc2hvdWxkIGJlIHN1ZmZpY2llbnQgc2luY2UgaXQncyB1bmlxdWVcclxuICAgIH0gZWxzZSBpZiAocGhvbmUpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncGhvbmUnLCBwaG9uZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBvciBwaG9uZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdm91Y2hlciByZWRlbXB0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zZm9ybSB0aGUgZGF0YSB0byBtYXRjaCB0aGUgaW50ZXJmYWNlXHJcbiAgICBjb25zdCByZWRlbXB0aW9uczogVm91Y2hlclJlZGVtcHRpb25bXSA9IChkYXRhIHx8IFtdKS5tYXAoKHJlZGVtcHRpb24pID0+ICh7XHJcbiAgICAgIGlkOiByZWRlbXB0aW9uLmlkLFxyXG4gICAgICB2b3VjaGVyX2NvZGU6IHJlZGVtcHRpb24udm91Y2hlcl9jb2RlLFxyXG4gICAgICBhbW91bnQ6IHJlZGVtcHRpb24uYW1vdW50LFxyXG4gICAgICByZWRlZW1lZF9hdDogcmVkZW1wdGlvbi5yZWRlZW1lZF9hdCxcclxuICAgICAgYm9va2luZ19pZDogcmVkZW1wdGlvbi5ib29raW5nX2lkIHx8IHVuZGVmaW5lZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZWRlbXB0aW9ucyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRWb3VjaGVyUmVkZW1wdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggdm91Y2hlciByZWRlbXB0aW9ucycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkE0S3NCLCtMQUFBIn0=
}),
"[project]/app/dashboard/components/DashboardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$7c2eef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/data:7c2eef [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$c62c93__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/dashboard/data:c62c93 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
function DashboardHeader() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userInitials, setUserInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardHeader.useEffect": ()=>{
            setMounted(true);
            const loadUserProfile = {
                "DashboardHeader.useEffect.loadUserProfile": async ()=>{
                    try {
                        // Get authenticated user's email
                        const authResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$7c2eef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAuthenticatedUser"])();
                        if (authResult.success && authResult.email) {
                            setUserEmail(authResult.email);
                            // Fetch profile to get avatar and name
                            const profileResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$c62c93__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerProfile"])(authResult.email);
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
                }
            }["DashboardHeader.useEffect.loadUserProfile"];
            loadUserProfile();
            // Listen for auth changes
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: { subscription } } = supabase.auth.onAuthStateChange({
                "DashboardHeader.useEffect": async (_event, session)=>{
                    if (session?.user?.email) {
                        setUserEmail(session.user.email);
                        // Reload profile when auth state changes
                        try {
                            const profileResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$data$3a$c62c93__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerProfile"])(session.user.email);
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
                }
            }["DashboardHeader.useEffect"]);
            return ({
                "DashboardHeader.useEffect": ()=>subscription.unsubscribe()
            })["DashboardHeader.useEffect"];
        }
    }["DashboardHeader.useEffect"], []);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 w-full max-w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 md:gap-3 min-w-0 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ml-auto",
                children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-9 w-9 md:h-10 md:w-10",
                                    children: [
                                        profile?.avatar_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: profile.avatar_url,
                                            alt: profile.first_name && profile.last_name ? `${profile.first_name} ${profile.last_name}` : userEmail || 'User',
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                            lineNumber: 169,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                            align: "end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                    children: profile?.first_name && profile?.last_name ? `${profile.first_name} ${profile.last_name}` : userEmail || 'My Account'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                profile?.first_name && profile?.last_name && userEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                    className: "text-xs text-muted-foreground font-normal",
                                    children: userEmail
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/DashboardHeader.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                    disabled: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-9 w-9 md:h-10 md:w-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
_s(DashboardHeader, "wlexPjiYX7kO60vj7BICKk9utps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/components/MobileBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileBottomNav",
    ()=>MobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const navItems = [
    {
        title: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/dashboard'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/dashboard/bookings'
    },
    {
        title: 'Profile',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        href: '/dashboard/profile'
    }
];
const moreMenuItems = [
    {
        title: 'Locations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        href: '/dashboard/locations'
    },
    {
        title: 'ShaleanCred',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"],
        href: '/dashboard/shaleancred'
    },
    {
        title: 'Vouchers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/dashboard/vouchers'
    },
    {
        title: 'Refer & Earn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        href: '/dashboard/refer'
    },
    {
        title: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        href: '/dashboard/settings'
    }
];
function MobileBottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        window.location.href = '/';
    };
    const handleMenuItemClick = (href)=>{
        setIsMoreMenuOpen(false);
        router.push(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden safe-area-inset-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 h-16",
                    children: [
                        navItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMoreMenuOpen(true),
                            className: `flex flex-col items-center justify-center gap-1 transition-colors ${isMoreMenuOpen ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: isMoreMenuOpen,
                onOpenChange: setIsMoreMenuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                    side: "right",
                    className: "w-full sm:max-w-sm p-0 [&>button]:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            className: "sr-only",
                            children: "More Menu"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Shalean"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMoreMenuOpen(false),
                                            className: "p-2 rounded-md hover:bg-muted transition-colors",
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: moreMenuItems.map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMenuItemClick(item.href),
                                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-light text-primary' : 'hover:bg-muted text-foreground'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-start gap-3 h-12 text-base",
                                        onClick: handleLogout,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/components/MobileBottomNav.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(MobileBottomNav, "G2FuM4Yo2bkbkhovLv2Q+iuPlq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MobileBottomNav;
var _c;
__turbopack_context__.k.register(_c, "MobileBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/layout-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayoutClient",
    ()=>DashboardLayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/DashboardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/components/MobileBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function DashboardLayoutClient({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col overflow-x-hidden pt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/layout-client.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardSidebar"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/layout-client.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarInset"], {
                            className: "flex flex-col overflow-x-hidden w-full min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/app/dashboard/layout-client.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "flex-1 p-4 md:p-6 pb-20 md:pb-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "hidden md:block border-t bg-muted/30 py-4 px-4 md:px-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileBottomNav"], {}, void 0, false, {
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
_c = DashboardLayoutClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayoutClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_96cf9388._.js.map