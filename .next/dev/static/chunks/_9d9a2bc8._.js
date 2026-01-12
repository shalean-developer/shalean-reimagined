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
"[project]/app/admin/data:ec433e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentAdmin",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0097f6a77558e0ca0b2bd800bbbb35227b2ff8d496":"getCurrentAdmin"},"app/admin/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0097f6a77558e0ca0b2bd800bbbb35227b2ff8d496", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCurrentAdmin");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcsIENsZWFuZXJVcGRhdGVJbnB1dCwgUHJpY2luZ1J1bGUgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBDbGVhbmVyIH0gZnJvbSAnQC90eXBlcy9ib29raW5nJztcclxuaW1wb3J0IHsgUHJvZmlsZSwgUHJvZmlsZVVwZGF0ZUlucHV0IH0gZnJvbSAnQC90eXBlcy9wcm9maWxlJztcclxuaW1wb3J0IHsgU2VydmljZSwgQWRkaXRpb25hbFNlcnZpY2UgfSBmcm9tICdAL3R5cGVzL3F1b3RlJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB1c2VyIGlzIGFuIGFkbWluXHJcbiAqIEFkbWlucyBhcmUgaWRlbnRpZmllZCBieSBlbWFpbCBwYXR0ZXJuOiAqQGFkbWluLnNoYWxlYW4ubG9jYWxcclxuICogb3IgdXNlciBtZXRhZGF0YSB3aXRoIHJvbGU6ICdhZG1pbidcclxuICovXHJcbmZ1bmN0aW9uIGlzQWRtaW5Vc2VyKGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQsIHVzZXJNZXRhZGF0YT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIGlmICghZW1haWwpIHJldHVybiBmYWxzZTtcclxuICBcclxuICAvLyBDaGVjayBlbWFpbCBwYXR0ZXJuXHJcbiAgaWYgKGVtYWlsLmluY2x1ZGVzKCdAYWRtaW4uc2hhbGVhbi5sb2NhbCcpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2hlY2sgdXNlciBtZXRhZGF0YVxyXG4gIGlmICh1c2VyTWV0YWRhdGE/LnJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBIYXJkY29kZWQgYWRtaW4gZW1haWxzIChmYWxsYmFjaylcclxuICBjb25zdCBhZG1pbkVtYWlscyA9IFtcclxuICAgICdhZG1pbkBzaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBhZG1pbi5zaGFsZWFuLmxvY2FsJyxcclxuICAgICdhZG1pbkBzaGFsZWFuLmNvbScsXHJcbiAgXTtcclxuICBcclxuICByZXR1cm4gYWRtaW5FbWFpbHMuaW5jbHVkZXMoZW1haWwudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY3VycmVudCBhdXRoZW50aWNhdGVkIGFkbWluXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudEFkbWluKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGFkbWluXHJcbiAgICBpZiAoIWlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGFuIGFkbWluIHVzZXInIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgYWRtaW46IHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogdXNlci51c2VyX21ldGFkYXRhPy5uYW1lIHx8IHVzZXIuZW1haWw/LnNwbGl0KCdAJylbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDdXJyZW50QWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2V0IGFkbWluJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXV0aGVudGljYXRlIGFkbWluIChzZXJ2ZXItc2lkZSlcclxuICogTm90ZTogQWN0dWFsIGF1dGhlbnRpY2F0aW9uIGhhcHBlbnMgY2xpZW50LXNpZGUsIHRoaXMganVzdCB2ZXJpZmllcyB0aGUgcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlQWRtaW4oXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRtaW4/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBtYXRjaGVzIGFkbWluIHBhdHRlcm5cclxuICAgIGlmICghaXNBZG1pblVzZXIoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhbiBhZG1pbiBlbWFpbCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRoZW50aWNhdGlvbiBoYXBwZW5zIGNsaWVudC1zaWRlLCB0aGlzIGlzIGp1c3QgdmFsaWRhdGlvblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhZG1pbjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCEsXHJcbiAgICAgICAgbmFtZTogZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWUgfHwgZGF0YS51c2VyLmVtYWlsPy5zcGxpdCgnQCcpWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXV0aGVudGljYXRlQWRtaW46JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBdXRoZW50aWNhdGlvbiBmYWlsZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWRtaW4gc3RhdGlzdGljc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHN0YXRzPzoge1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgYWN0aXZlQm9va2luZ3M6IG51bWJlcjtcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgbW9udGhseVJldmVudWU6IG51bWJlcjtcclxuICAgIHRvdGFsQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbENsZWFuZXJzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDbGVhbmVyczogbnVtYmVyO1xyXG4gICAgY29tcGxldGlvblJhdGU6IG51bWJlcjtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIGJvb2tpbmdzIHF1ZXJ5IHdpdGggZmlsdGVyc1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIHNlcnZpY2VfZGF0ZSwgY3JlYXRlZF9hdCwgc2VydmljZV90eXBlJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBib29raW5nc1F1ZXJ5ID0gYm9va2luZ3NRdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zZXJ2aWNlVHlwZSkge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5LmVxKCdzZXJ2aWNlX3R5cGUnLCBmaWx0ZXIuc2VydmljZVR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgYm9va2luZ3NFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjdXN0b21lcnMgKHByb2ZpbGVzKVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lcnMsIGVycm9yOiBjdXN0b21lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGN1c3RvbWVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjdXN0b21lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGFsbCBjbGVhbmVyc1xyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBpc19hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBjbGVhbmVyc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGNvbnN0IGFsbEJvb2tpbmdzID0gYm9va2luZ3MgfHwgW107XHJcbiAgICBjb25zdCBhY3RpdmVCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcihcclxuICAgICAgKGIpID0+IFsncGVuZGluZycsICdjb25maXJtZWQnLCAnb25fbXlfd2F5JywgJ3N0YXJ0ZWQnXS5pbmNsdWRlcyhiLnN0YXR1cylcclxuICAgICkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYWlkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoKGIpID0+IGIucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyk7XHJcbiAgICAvLyBPbmx5IGRpdmlkZSBzZWVkIGRhdGEgKGFtb3VudHMgPj0gMTAwMDApIGJ5IDEwMCwgc3lzdGVtLWNyZWF0ZWQgYm9va2luZ3MgYXJlIGFscmVhZHkgY29ycmVjdFxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gcGFpZEJvb2tpbmdzLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IGIudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIHJldHVybiBzdW0gKyAoYW1vdW50ID49IDEwMDAwID8gYW1vdW50IC8gMTAwIDogYW1vdW50KTtcclxuICAgIH0sIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBtb250aGx5UGFpZEJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4gYi5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnICYmIGIuc2VydmljZV9kYXRlID49IGZpcnN0RGF5T2ZNb250aFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gbW9udGhseVBhaWRCb29raW5ncy5yZWR1Y2UoKHN1bSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBhbW91bnQgPSBiLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICByZXR1cm4gc3VtICsgKGFtb3VudCA+PSAxMDAwMCA/IGFtb3VudCAvIDEwMCA6IGFtb3VudCk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcigoYikgPT4gYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKS5sZW5ndGg7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IGFsbEJvb2tpbmdzLmxlbmd0aCA+IDAgPyAoY29tcGxldGVkQm9va2luZ3MgLyBhbGxCb29raW5ncy5sZW5ndGgpICogMTAwIDogMDtcclxuXHJcbiAgICBjb25zdCBhbGxDbGVhbmVycyA9IGNsZWFuZXJzIHx8IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlQ2xlYW5lcnMgPSBhbGxDbGVhbmVycy5maWx0ZXIoKGMpID0+IGMuaXNfYWN0aXZlKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc3RhdHM6IHtcclxuICAgICAgICB0b3RhbEJvb2tpbmdzOiBhbGxCb29raW5ncy5sZW5ndGgsXHJcbiAgICAgICAgYWN0aXZlQm9va2luZ3MsXHJcbiAgICAgICAgdG90YWxSZXZlbnVlLFxyXG4gICAgICAgIG1vbnRobHlSZXZlbnVlLFxyXG4gICAgICAgIHRvdGFsQ3VzdG9tZXJzOiBjdXN0b21lcnM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgIHRvdGFsQ2xlYW5lcnM6IGFsbENsZWFuZXJzLmxlbmd0aCxcclxuICAgICAgICBhY3RpdmVDbGVhbmVycyxcclxuICAgICAgICBjb21wbGV0aW9uUmF0ZTogTWF0aC5yb3VuZChjb21wbGV0aW9uUmF0ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBZG1pblN0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHN0YXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBib29raW5ncyB3aXRoIG9wdGlvbmFsIGZpbHRlcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCb29raW5ncyhcclxuICBmaWx0ZXI/OiB7XHJcbiAgICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBkYXRlRnJvbT86IHN0cmluZztcclxuICAgIGRhdGVUbz86IHN0cmluZztcclxuICAgIGN1c3RvbWVyRW1haWw/OiBzdHJpbmc7XHJcbiAgICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAvLyBPcmRlciBieSB5ZWFyIGFuZCBtb250aCBkZXNjZW5kaW5nIChuZXdlc3QgbW9udGhzIGZpcnN0KSwgdGhlbiBieSBkYXkgYXNjZW5kaW5nICgxc3QgdG8gbGFzdCBkYXkgb2YgbW9udGgpXHJcbiAgICAgIC5vcmRlcignc2VydmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlLCBudWxsc0ZpcnN0OiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzICYmIGZpbHRlci5zdGF0dXMgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlVG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY3VzdG9tZXJFbWFpbCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZmlsdGVyLmN1c3RvbWVyRW1haWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY2xlYW5lcklkKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29raW5nczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1c3RvbSBzb3J0OiBtb250aHMgaW4gZGVzY2VuZGluZyBvcmRlciAobmV3ZXN0IGZpcnN0KSwgZGF5cyBpbiBhc2NlbmRpbmcgb3JkZXIgKDFzdCB0byBsYXN0KVxyXG4gICAgY29uc3Qgc29ydGVkQm9va2luZ3MgPSAoZGF0YSB8fCBbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBjb25zdCBkYXRlQSA9IGEuc2VydmljZV9kYXRlID8gbmV3IERhdGUoYS5zZXJ2aWNlX2RhdGUpIDogbmV3IERhdGUoMCk7XHJcbiAgICAgIGNvbnN0IGRhdGVCID0gYi5zZXJ2aWNlX2RhdGUgPyBuZXcgRGF0ZShiLnNlcnZpY2VfZGF0ZSkgOiBuZXcgRGF0ZSgwKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEdldCB5ZWFyIGFuZCBtb250aCBmb3IgY29tcGFyaXNvblxyXG4gICAgICBjb25zdCB5ZWFyQSA9IGRhdGVBLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGNvbnN0IG1vbnRoQSA9IGRhdGVBLmdldE1vbnRoKCk7XHJcbiAgICAgIGNvbnN0IHllYXJCID0gZGF0ZUIuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgbW9udGhCID0gZGF0ZUIuZ2V0TW9udGgoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZpcnN0LCBjb21wYXJlIGJ5IHllYXIgYW5kIG1vbnRoIChkZXNjZW5kaW5nIC0gbmV3ZXN0IG1vbnRocyBmaXJzdClcclxuICAgICAgaWYgKHllYXJBICE9PSB5ZWFyQikge1xyXG4gICAgICAgIHJldHVybiB5ZWFyQiAtIHllYXJBOyAvLyBEZXNjZW5kaW5nIGJ5IHllYXJcclxuICAgICAgfVxyXG4gICAgICBpZiAobW9udGhBICE9PSBtb250aEIpIHtcclxuICAgICAgICByZXR1cm4gbW9udGhCIC0gbW9udGhBOyAvLyBEZXNjZW5kaW5nIGJ5IG1vbnRoXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFdpdGhpbiB0aGUgc2FtZSBtb250aCwgc29ydCBieSBkYXkgYXNjZW5kaW5nICgxc3QgdG8gbGFzdCBkYXkpXHJcbiAgICAgIGNvbnN0IGRheUEgPSBkYXRlQS5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRheUIgPSBkYXRlQi5nZXREYXRlKCk7XHJcbiAgICAgIHJldHVybiBkYXlBIC0gZGF5QjsgLy8gQXNjZW5kaW5nIGJ5IGRheVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZ3M6IHNvcnRlZEJvb2tpbmdzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjdXN0b21lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDdXN0b21lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcnM/OiBQcm9maWxlW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGNsZWFuZXJzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2xlYW5lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbENsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdXNlciByZWdpc3RyYXRpb24gZGF0YSBmb3IgY2hhcnRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVVzZXJEYXRhKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IG1vbnRoOiBzdHJpbmc7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH1bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBjbGVhbmVycyBxdWVyeSB3aXRoIGRhdGUgZmlsdGVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgLy8gQnVpbGQgY3VzdG9tZXJzIHF1ZXJ5IHdpdGggZGF0ZSBmaWx0ZXJzXHJcbiAgICBsZXQgY3VzdG9tZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVycywgZXJyb3I6IGN1c3RvbWVyc0Vycm9yIH0gPSBhd2FpdCBjdXN0b21lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvciB8fCBjdXN0b21lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3VwIGJ5IG1vbnRoXHJcbiAgICBjb25zdCBtb250aGx5RGF0YTogeyBba2V5OiBudW1iZXJdOiB7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBwcm92aWRlcjogMCwgY2xpZW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5lcnM/LmZvckVhY2goKGNsZWFuZXIpID0+IHtcclxuICAgICAgaWYgKGNsZWFuZXIuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjbGVhbmVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLnByb3ZpZGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXN0b21lcnM/LmZvckVhY2goKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lci5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1c3RvbWVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLmNsaWVudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgcHJvdmlkZXI6IG1vbnRobHlEYXRhW2luZGV4XS5wcm92aWRlcixcclxuICAgICAgY2xpZW50OiBtb250aGx5RGF0YVtpbmRleF0uY2xpZW50LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRNb250aGx5VXNlckRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbW9udGhseSB1c2VyIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uIGZvciBkb251dCBjaGFydFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgc3RhdHVzOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9W107XHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgZ3Jvd3RoUGVyY2VudGFnZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIGNyZWF0ZWRfYXQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBib29raW5nLnN0YXR1cyB8fCAndW5rbm93bic7XHJcbiAgICAgIHN0YXR1c0NvdW50c1tzdGF0dXNdID0gKHN0YXR1c0NvdW50c1tzdGF0dXNdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHN0YXR1c0NvdW50cykubWFwKChbc3RhdHVzLCBjb3VudF0pID0+ICh7XHJcbiAgICAgIHN0YXR1czogc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdHVzLnNsaWNlKDEpLFxyXG4gICAgICBjb3VudCxcclxuICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY291bnQgLyB0b3RhbCkgKiAxMDApIDogMCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgZ3Jvd3RoIHBlcmNlbnRhZ2UgKGNvbXBhcmUgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aClcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoID09PSAwID8gMTEgOiBjdXJyZW50TW9udGggLSAxO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gY3VycmVudE1vbnRoID09PSAwID8gY3VycmVudFllYXIgLSAxIDogY3VycmVudFllYXI7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoU3RhcnQgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxKTtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhTdGFydCA9IG5ldyBEYXRlKHByZXZpb3VzWWVhciwgcHJldmlvdXNNb250aCwgMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoRW5kID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoQm9va2luZ3MgPSBib29raW5ncz8uZmlsdGVyKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZWREYXRlID49IGN1cnJlbnRNb250aFN0YXJ0ICYmIGNyZWF0ZWREYXRlIDwgbm93O1xyXG4gICAgfSkubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNNb250aEJvb2tpbmdzID0gYm9va2luZ3M/LmZpbHRlcigoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVkRGF0ZSA+PSBwcmV2aW91c01vbnRoU3RhcnQgJiYgY3JlYXRlZERhdGUgPD0gcHJldmlvdXNNb250aEVuZDtcclxuICAgIH0pLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGxldCBncm93dGhQZXJjZW50YWdlID0gMDtcclxuICAgIGlmIChwcmV2aW91c01vbnRoQm9va2luZ3MgPiAwKSB7XHJcbiAgICAgIGdyb3d0aFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKCgoY3VycmVudE1vbnRoQm9va2luZ3MgLSBwcmV2aW91c01vbnRoQm9va2luZ3MpIC8gcHJldmlvdXNNb250aEJvb2tpbmdzKSAqIDEwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRNb250aEJvb2tpbmdzID4gMCkge1xyXG4gICAgICBncm93dGhQZXJjZW50YWdlID0gMTAwOyAvLyAxMDAlIGdyb3d0aCBpZiBwcmV2aW91cyBtb250aCBoYWQgbm8gYm9va2luZ3NcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIHRvdGFsLCBncm93dGhQZXJjZW50YWdlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdHJhbnNhY3Rpb24vcmV2ZW51ZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgbW9udGg6IHN0cmluZzsgY29tcGxldGVkOiBudW1iZXI7IHBlbmRpbmc6IG51bWJlciB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWF0ZWRfYXQsIHBheW1lbnRfc3RhdHVzLCB0b3RhbF9hbW91bnQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSk7XHJcbiAgICBcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogbnVtYmVyXTogeyBjb21wbGV0ZWQ6IG51bWJlcjsgcGVuZGluZzogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBjb21wbGV0ZWQ6IDAsIHBlbmRpbmc6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoYm9va2luZy5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudFllYXIpIHtcclxuICAgICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgICAgIC8vIE9ubHkgZGl2aWRlIHNlZWQgZGF0YSAoYW1vdW50cyA+PSAxMDAwMCkgYnkgMTAwLCBzeXN0ZW0tY3JlYXRlZCBib29raW5ncyBhcmUgYWxyZWFkeSBjb3JyZWN0XHJcbiAgICAgICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcbiAgICAgICAgICBpZiAoYm9va2luZy5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKSB7XHJcbiAgICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXS5jb21wbGV0ZWQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9udGhseURhdGFbbW9udGhdLnBlbmRpbmcgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgY29tcGxldGVkOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5jb21wbGV0ZWQpLFxyXG4gICAgICBwZW5kaW5nOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5wZW5kaW5nKSxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBtb250aGx5IHRyYW5zYWN0aW9uIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdG9wIGFjdGl2ZSB1c2VycyAoY3VzdG9tZXJzIHdpdGggbW9zdCBib29raW5ncylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BBY3RpdmVVc2VycygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVzZXJzPzogQXJyYXk8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBib29raW5nQ291bnQ6IG51bWJlcjtcclxuICAgIGF2YXRhcj86IHN0cmluZztcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IGJvb2tpbmdzIGdyb3VwZWQgYnkgY3VzdG9tZXJcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfZmlyc3RfbmFtZSwgY3VzdG9tZXJfbGFzdF9uYW1lJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3VudCBib29raW5ncyBwZXIgY3VzdG9tZXJcclxuICAgIGNvbnN0IGN1c3RvbWVyQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBjb25zdCBuYW1lID0gYCR7Ym9va2luZy5jdXN0b21lcl9maXJzdF9uYW1lIHx8ICcnfSAke2Jvb2tpbmcuY3VzdG9tZXJfbGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xyXG4gICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICBpZiAoIWN1c3RvbWVyQ291bnRzW2VtYWlsXSkge1xyXG4gICAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdID0geyBuYW1lOiBuYW1lIHx8IGVtYWlsLCBlbWFpbCwgY291bnQ6IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdLmNvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCB0b3AgMTBcclxuICAgIGNvbnN0IHRvcFVzZXJzID0gT2JqZWN0LnZhbHVlcyhjdXN0b21lckNvdW50cylcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxyXG4gICAgICAuc2xpY2UoMCwgMTApXHJcbiAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGlkOiBgY3VzdG9tZXItJHtpbmRleH1gLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICByb2xlOiAnQ3VzdG9tZXInLFxyXG4gICAgICAgIGJvb2tpbmdDb3VudDogdXNlci5jb3VudCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJzOiB0b3BVc2VycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRUb3BBY3RpdmVVc2VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB0b3AgYWN0aXZlIHVzZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHNlcnZpY2UgcG9wdWxhcml0eSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVBvcHVsYXJpdHkoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2VzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIGNyZWF0ZWRfYXQsIHN0YXR1cycpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzZXJ2aWNlVHlwZSA9IGJvb2tpbmcuc2VydmljZV90eXBlIHx8ICdVbmtub3duJztcclxuICAgICAgc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gPSAoc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gfHwgMCkgKyAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoc2VydmljZUNvdW50cylcclxuICAgICAgLm1hcCgoW25hbWUsIGNvdW50XSkgPT4gKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNvdW50LFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvdW50IC8gdG90YWwpICogMTAwKSA6IDAsXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2VzOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVBvcHVsYXJpdHk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBwb3B1bGFyaXR5JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJhdGluZyBzdGF0aXN0aWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmF0aW5nU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICBhdmVyYWdlUmF0aW5nOiBudW1iZXI7XHJcbiAgICB0b3RhbFJhdGluZ3M6IG51bWJlcjtcclxuICAgIGJyZWFrZG93bjogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfTtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBJZiBzZXJ2aWNlVHlwZSBmaWx0ZXIgaXMgYXBwbGllZCwgd2UgbmVlZCB0byBmaWx0ZXIgY2xlYW5lcnMgYmFzZWQgb24gdGhlaXIgYm9va2luZ3NcclxuICAgIC8vIEZvciBzaW1wbGljaXR5LCB3ZSdsbCBqdXN0IGdldCBhbGwgY2xlYW5lcnMuIFNlcnZpY2UgdHlwZSBmaWx0ZXJpbmcgd291bGQgcmVxdWlyZVxyXG4gICAgLy8gam9pbmluZyB3aXRoIGJvb2tpbmdzIHdoaWNoIGlzIG1vcmUgY29tcGxleC5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ3JhdGluZywgY3JlYXRlZF9hdCcpO1xyXG5cclxuICAgIC8vIEFwcGx5IGRhdGUgZmlsdGVyIHRvIGNsZWFuZXIgY3JlYXRpb24gZGF0ZSBpZiBwcm92aWRlZFxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZUZyb20pIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhdGluZ3MgPSBjbGVhbmVycz8ubWFwKChjKSA9PiBjLnJhdGluZyB8fCAwKSB8fCBbXTtcclxuICAgIGNvbnN0IHRvdGFsUmF0aW5ncyA9IHJhdGluZ3MubGVuZ3RoO1xyXG4gICAgY29uc3QgYXZlcmFnZVJhdGluZyA9IHRvdGFsUmF0aW5ncyA+IDBcclxuICAgICAgPyByYXRpbmdzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByLCAwKSAvIHRvdGFsUmF0aW5nc1xyXG4gICAgICA6IDA7XHJcblxyXG4gICAgLy8gQ291bnQgYnkgcmF0aW5nICgxLTUpXHJcbiAgICBjb25zdCBicmVha2Rvd246IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7IDE6IDAsIDI6IDAsIDM6IDAsIDQ6IDAsIDU6IDAgfTtcclxuICAgIHJhdGluZ3MuZm9yRWFjaCgocmF0aW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJhdGluZyk7XHJcbiAgICAgIGlmIChyb3VuZGVkID49IDEgJiYgcm91bmRlZCA8PSA1KSB7XHJcbiAgICAgICAgYnJlYWtkb3duW3JvdW5kZWRdKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgYXZlcmFnZVJhdGluZzogTWF0aC5yb3VuZChhdmVyYWdlUmF0aW5nICogMTApIC8gMTAsXHJcbiAgICAgICAgdG90YWxSYXRpbmdzLFxyXG4gICAgICAgIGJyZWFrZG93bixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJhdGluZ1N0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJhdGluZyBzdGF0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uIGZvciBzdWJzY3JpcHRpb24gY2hhcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbihmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgdHlwZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdHlwZSwgY2xlYW5pbmdfZnJlcXVlbmN5LCBjcmVhdGVkX2F0LCBzdGF0dXMnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdXAgYnkgZnJlcXVlbmN5IHR5cGU6IE9uZS1UaW1lLCBXZWVrbHksIEJpLVdlZWtseSwgTW9udGhseVxyXG4gICAgY29uc3QgZnJlcXVlbmN5Q291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gICAgICAnT25lLVRpbWUnOiAwLFxyXG4gICAgICAnV2Vla2x5JzogMCxcclxuICAgICAgJ0JpLVdlZWtseSc6IDAsXHJcbiAgICAgICdNb250aGx5JzogMCxcclxuICAgIH07XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gYm9va2luZy5jbGVhbmluZ19mcmVxdWVuY3kgfHwgJ29uZS10aW1lJztcclxuICAgICAgaWYgKGZyZXF1ZW5jeSA9PT0gJ29uZS10aW1lJykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snT25lLVRpbWUnXSsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyZXF1ZW5jeSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ1dlZWtseSddKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZnJlcXVlbmN5ID09PSAnYmktd2Vla2x5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snQmktV2Vla2x5J10rKztcclxuICAgICAgfSBlbHNlIGlmIChmcmVxdWVuY3kgPT09ICdtb250aGx5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snTW9udGhseSddKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKGZyZXF1ZW5jeUNvdW50cylcclxuICAgICAgLm1hcCgoW3R5cGUsIGNvdW50XSkgPT4gKHsgdHlwZSwgY291bnQgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNsZWFuZXIgZGV0YWlsc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsZWFuZXIoXHJcbiAgY2xlYW5lcklkOiBzdHJpbmcsXHJcbiAgZGF0YTogQ2xlYW5lclVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcj86IENsZWFuZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXBkYXRlIG9iamVjdCB3aXRoIG9ubHkgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7fTtcclxuICAgIGlmIChkYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICBpZiAoZGF0YS5waG9uZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnBob25lID0gZGF0YS5waG9uZTtcclxuICAgIGlmIChkYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmlzX2FjdGl2ZSA9IGRhdGEuaXNfYWN0aXZlO1xyXG4gICAgaWYgKGRhdGEuYmlvICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYmlvID0gZGF0YS5iaW87XHJcbiAgICBpZiAoZGF0YS5hcmVhcyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmFyZWFzID0gZGF0YS5hcmVhcztcclxuICAgIGlmIChkYXRhLnNwZWNpYWx0aWVzICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuc3BlY2lhbHRpZXMgPSBkYXRhLnNwZWNpYWx0aWVzO1xyXG4gICAgaWYgKGRhdGEueWVhcnNfZXhwZXJpZW5jZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnllYXJzX2V4cGVyaWVuY2UgPSBkYXRhLnllYXJzX2V4cGVyaWVuY2U7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfbW9uZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX21vbmRheSA9IGRhdGEuYXZhaWxhYmxlX21vbmRheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV90dWVzZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3R1ZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV90dWVzZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3dlZG5lc2RheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgPSBkYXRhLmF2YWlsYWJsZV90aHVyc2RheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV9mcmlkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfZnJpZGF5ID0gZGF0YS5hdmFpbGFibGVfZnJpZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ID0gZGF0YS5hdmFpbGFibGVfc2F0dXJkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfc3VuZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3N1bmRheSA9IGRhdGEuYXZhaWxhYmxlX3N1bmRheTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNsZWFuZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyOiBjbGVhbmVyIGFzIENsZWFuZXIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ2xlYW5lcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY2xlYW5lcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc2V0IGNsZWFuZXIgcGFzc3dvcmRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldENsZWFuZXJQYXNzd29yZChcclxuICBjbGVhbmVySWQ6IHN0cmluZyxcclxuICBuZXdQYXNzd29yZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBwYXNzd29yZFxyXG4gICAgaWYgKCFuZXdQYXNzd29yZCB8fCBuZXdQYXNzd29yZC50cmltKCkubGVuZ3RoIDwgNikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBGZXRjaCBjbGVhbmVyIHRvIGdldCBhdXRoX3VzZXJfaWRcclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lciwgZXJyb3I6IGNsZWFuZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGF1dGhfdXNlcl9pZCwgbmFtZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY2xlYW5lckVycm9yIHx8ICFjbGVhbmVyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXI6JywgY2xlYW5lckVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xlYW5lciBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVyLmF1dGhfdXNlcl9pZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDbGVhbmVyIGRvZXMgbm90IGhhdmUgYW4gYXV0aGVudGljYXRpb24gYWNjb3VudC4gQ2Fubm90IHJlc2V0IHBhc3N3b3JkLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCBwYXNzd29yZCB1c2luZyBTdXBhYmFzZSBBZG1pbiBBUElcclxuICAgIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmFkbWluLnVwZGF0ZVVzZXJCeUlkKFxyXG4gICAgICBjbGVhbmVyLmF1dGhfdXNlcl9pZCxcclxuICAgICAge1xyXG4gICAgICAgIHBhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVzZXR0aW5nIHBhc3N3b3JkOicsIHVwZGF0ZUVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB1cGRhdGVFcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcmVzZXQgcGFzc3dvcmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiByZXNldENsZWFuZXJQYXNzd29yZDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byByZXNldCBwYXNzd29yZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBjdXN0b21lciBwcm9maWxlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXIoXHJcbiAgY3VzdG9tZXJJZDogc3RyaW5nLFxyXG4gIGRhdGE6IFByb2ZpbGVVcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGN1c3RvbWVyPzogUHJvZmlsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcclxuICAgIGlmICghZGF0YS5maXJzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5sYXN0X25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuZW1haWw/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVyLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgbnVsbCxcclxuICAgICAgICBhdmF0YXJfdXJsOiBkYXRhLmF2YXRhcl91cmwgfHwgbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXI6IGN1c3RvbWVyIGFzIFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGN1c3RvbWVyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmdzIGF2YWlsYWJsZSBmb3IgYXNzaWdubWVudCAoZXhjbHVkZSBjb21wbGV0ZWQgYW5kIGNhbmNlbGxlZClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nc0ZvckFzc2lnbm1lbnQoZmlsdGVyPzoge1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAubm90KCdzdGF0dXMnLCAnaW4nLCAnKGNvbXBsZXRlZCxjYW5jZWxsZWQpJylcclxuICAgICAgLm9yZGVyKCdzZXJ2aWNlX2RhdGUnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMgJiYgZmlsdGVyLnN0YXR1cyAhPT0gJ2FsbCcpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnc2VydmljZV9kYXRlJywgZmlsdGVyLmRhdGVUbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3MgZm9yIGFzc2lnbm1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nc0ZvckFzc2lnbm1lbnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZ3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc3NpZ24gY2xlYW5lcnMgdG8gYm9va2luZ3MgKHN1cHBvcnRzIG11bHRpLXNlbGVjdClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZ3MoXHJcbiAgY2xlYW5lcklkczogc3RyaW5nW10sXHJcbiAgYm9va2luZ0lkczogc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB1cGRhdGVkPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVySWRzIHx8IGNsZWFuZXJJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0F0IGxlYXN0IG9uZSBjbGVhbmVyIG11c3QgYmUgc2VsZWN0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWRzIHx8IGJvb2tpbmdJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0F0IGxlYXN0IG9uZSBib29raW5nIG11c3QgYmUgc2VsZWN0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVycyBleGlzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB2ZXJpZnkgY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVycyB8fCBjbGVhbmVycy5sZW5ndGggIT09IGNsZWFuZXJJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ09uZSBvciBtb3JlIGNsZWFuZXJzIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZ3MgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGJvb2tpbmdzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoICE9PSBib29raW5nSWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBib29raW5ncyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGVhY2ggYm9va2luZ1xyXG4gICAgbGV0IHVwZGF0ZWRDb3VudCA9IDA7XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIC8vIEdldCBleGlzdGluZyBjbGVhbmVyIElEc1xyXG4gICAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBmcm9tIHByZWZlcnJlZF9jbGVhbmVyX2lkIGlmIGV4aXN0c1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBmcm9tIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBhcnJheSBpZiBleGlzdHNcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lcmdlIHdpdGggbmV3IGNsZWFuZXIgSURzIChhdm9pZCBkdXBsaWNhdGVzKVxyXG4gICAgICBjb25zdCBhbGxDbGVhbmVySWRzID0gWy4uLm5ldyBTZXQoWy4uLmV4aXN0aW5nSWRzLCAuLi5jbGVhbmVySWRzXSldO1xyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIHByZWZlcnJlZF9jbGVhbmVyX2lkIChmaXJzdCBjbGVhbmVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gICAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSBhbGxDbGVhbmVySWRzWzBdIHx8IG51bGw7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWQ6IHByZWZlcnJlZENsZWFuZXJJZCxcclxuICAgICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogYWxsQ2xlYW5lcklkcyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBib29raW5nLmlkKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKGBGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgJHtib29raW5nLmlkfTogJHt1cGRhdGVFcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVwZGF0ZWRDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdXBkYXRlZENvdW50ID4gMCxcclxuICAgICAgICB1cGRhdGVkOiB1cGRhdGVkQ291bnQsXHJcbiAgICAgICAgZXJyb3I6IGBTb21lIGJvb2tpbmdzIGZhaWxlZCB0byB1cGRhdGU6ICR7ZXJyb3JzLmpvaW4oJzsgJyl9YCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cGRhdGVkOiB1cGRhdGVkQ291bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFzc2lnbiBjbGVhbmVycyB0byBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBpZiBzZXJ2aWNlIHR5cGUgYWxsb3dzIG11bHRpcGxlIGNsZWFuZXJzXHJcbiAqL1xyXG5mdW5jdGlvbiBhbGxvd3NNdWx0aXBsZUNsZWFuZXJzKHNlcnZpY2VUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBpZiAoIXNlcnZpY2VUeXBlKSByZXR1cm4gdHJ1ZTsgLy8gRGVmYXVsdCB0byBhbGxvd2luZyBtdWx0aXBsZVxyXG4gIFxyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBzZXJ2aWNlVHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICBcclxuICAvLyBEZWVwIENsZWFuaW5nIGFuZCBNb3ZlIEluL091dCBhbHdheXMgYWxsb3cgbXVsdGlwbGVcclxuICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygnZGVlcCcpIHx8IFxyXG4gICAgICAobm9ybWFsaXplZC5pbmNsdWRlcygnbW92ZScpICYmIChub3JtYWxpemVkLmluY2x1ZGVzKCdpbi9vdXQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdpbiBvdXQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdpbm91dCcpKSkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBTdGFuZGFyZCBhbmQgQWlyYm5iIGFsbG93IG11bHRpcGxlIChtb3JlIHRoYW4gMSlcclxuICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygnc3RhbmRhcmQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdhaXJibmInKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE90aGVyIHNlcnZpY2VzIGFsc28gYWxsb3cgbXVsdGlwbGVcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBib29raW5nIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIHVwZGF0ZURhdGE6IHtcclxuICAgIHNlcnZpY2VfZGF0ZT86IHN0cmluZztcclxuICAgIHNlcnZpY2VfdGltZT86IHN0cmluZztcclxuICAgIHNlcnZpY2VfYWRkcmVzcz86IHN0cmluZztcclxuICAgIHNlcnZpY2VfYXB0X3VuaXQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc2VydmljZV9zdWJ1cmI/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2NpdHk/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9maXJzdF9uYW1lPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfbGFzdF9uYW1lPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9waG9uZT86IHN0cmluZztcclxuICAgIHNwZWNpYWxfaW5zdHJ1Y3Rpb25zPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJlZHJvb21zPzogc3RyaW5nO1xyXG4gICAgYmF0aHJvb21zPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV90eXBlPzogc3RyaW5nO1xyXG4gIH1cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5nIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0Jvb2tpbmcsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWV4aXN0aW5nQm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYm9va2luZyBzdGF0dXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCb29raW5nU3RhdHVzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIHN0YXR1czogQm9va2luZ1snc3RhdHVzJ11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzXHJcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzOiBCb29raW5nWydzdGF0dXMnXVtdID0gWydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdvbl9teV93YXknLCAnc3RhcnRlZCcsICdjb21wbGV0ZWQnLCAnY2FuY2VsbGVkJ107XHJcbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmcgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQm9va2luZywgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhZXhpc3RpbmdCb29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBzdGF0dXNcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7IHN0YXR1cyB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBib29raW5nIHN0YXR1czonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQm9va2luZ1N0YXR1czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZyBzdGF0dXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc3NpZ24gY2xlYW5lcnMgdG8gYSBzaW5nbGUgYm9va2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZHM6IHN0cmluZ1tdLFxyXG4gIHJlcGxhY2VFeGlzdGluZzogYm9vbGVhbiA9IGZhbHNlXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcklkcyB8fCBjbGVhbmVySWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgY2xlYW5lciBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZyBleGlzdHMgYW5kIGdldCBzZXJ2aWNlIHR5cGVcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHNlcnZpY2VfdHlwZSwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgc2VydmljZSB0eXBlIGFsbG93cyBtdWx0aXBsZSBjbGVhbmVycyBpZiBtb3JlIHRoYW4gMSBjbGVhbmVyIGlzIGJlaW5nIGFzc2lnbmVkXHJcbiAgICBpZiAoY2xlYW5lcklkcy5sZW5ndGggPiAxICYmICFhbGxvd3NNdWx0aXBsZUNsZWFuZXJzKGJvb2tpbmcuc2VydmljZV90eXBlKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUaGlzIHNlcnZpY2UgdHlwZSBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVycyBleGlzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB2ZXJpZnkgY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVycyB8fCBjbGVhbmVycy5sZW5ndGggIT09IGNsZWFuZXJJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ09uZSBvciBtb3JlIGNsZWFuZXJzIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgZmluYWwgY2xlYW5lciBJRHNcclxuICAgIGxldCBmaW5hbENsZWFuZXJJZHM6IHN0cmluZ1tdO1xyXG4gICAgaWYgKHJlcGxhY2VFeGlzdGluZykge1xyXG4gICAgICBmaW5hbENsZWFuZXJJZHMgPSBjbGVhbmVySWRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gR2V0IGV4aXN0aW5nIGNsZWFuZXIgSURzXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gTWVyZ2Ugd2l0aCBuZXcgY2xlYW5lciBJRHMgKGF2b2lkIGR1cGxpY2F0ZXMpXHJcbiAgICAgIGZpbmFsQ2xlYW5lcklkcyA9IFsuLi5uZXcgU2V0KFsuLi5leGlzdGluZ0lkcywgLi4uY2xlYW5lcklkc10pXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgcHJlZmVycmVkX2NsZWFuZXJfaWQgKGZpcnN0IGNsZWFuZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSBmaW5hbENsZWFuZXJJZHNbMF0gfHwgbnVsbDtcclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZDogcHJlZmVycmVkQ2xlYW5lcklkLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogZmluYWxDbGVhbmVySWRzLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhc3NpZ25pbmcgY2xlYW5lcnMgdG8gYm9va2luZzonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYXNzaWduIGNsZWFuZXJzIHRvIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgY2xlYW5lciBmcm9tIGJvb2tpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDbGVhbmVyRnJvbUJvb2tpbmcoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgY2xlYW5lcklkOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkIHx8ICFjbGVhbmVySWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBhbmQgQ2xlYW5lciBJRCBhcmUgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdFcnJvciB8fCAhYm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2xlYW5lciBJRHNcclxuICAgIGNvbnN0IGV4aXN0aW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgZXhpc3RpbmdJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgIH1cclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBjbGVhbmVyIElEXHJcbiAgICBjb25zdCBub3JtYWxpemVkQ2xlYW5lcklkID0gY2xlYW5lcklkLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgY29uc3QgdXBkYXRlZElkcyA9IGV4aXN0aW5nSWRzLmZpbHRlcihpZCA9PiBpZC50b0xvd2VyQ2FzZSgpLnRyaW0oKSAhPT0gbm9ybWFsaXplZENsZWFuZXJJZCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZWRJZHMubGVuZ3RoID09PSBleGlzdGluZ0lkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xlYW5lciBub3QgZm91bmQgaW4gYm9va2luZyBhc3NpZ25tZW50JyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVybWluZSBwcmVmZXJyZWRfY2xlYW5lcl9pZCAoZmlyc3QgY2xlYW5lciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgIGNvbnN0IHByZWZlcnJlZENsZWFuZXJJZCA9IHVwZGF0ZWRJZHMubGVuZ3RoID4gMCA/IHVwZGF0ZWRJZHNbMF0gOiBudWxsO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBwcmVmZXJyZWRDbGVhbmVySWQsXHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWRzOiB1cGRhdGVkSWRzLmxlbmd0aCA+IDAgPyB1cGRhdGVkSWRzIDogbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgY2xlYW5lciBmcm9tIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHJlbW92ZUNsZWFuZXJGcm9tQm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byByZW1vdmUgY2xlYW5lciBmcm9tIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgY2xlYW5lciBlYXJuaW5ncyBmb3IgYSBib29raW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2xlYW5lckVhcm5pbmdzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIGVhcm5pbmdzOiB7XHJcbiAgICBiYXNlRWFybmluZ3M6IG51bWJlcjtcclxuICAgIHRpcEFtb3VudDogbnVtYmVyO1xyXG4gICAgdG90YWxFYXJuaW5nczogbnVtYmVyO1xyXG4gIH0gfCBudWxsXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCB8fCAhY2xlYW5lcklkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgYW5kIENsZWFuZXIgSUQgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGNsZWFuZXIgaXMgYXNzaWduZWQgdG8gYm9va2luZ1xyXG4gICAgY29uc3Qgbm9ybWFsaXplVXVpZCA9IChpZDogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgaWYgKCFpZCkgcmV0dXJuICcnO1xyXG4gICAgICByZXR1cm4gU3RyaW5nKGlkKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBub3JtYWxpemVkQ2xlYW5lcklkID0gbm9ybWFsaXplVXVpZChjbGVhbmVySWQpO1xyXG5cclxuICAgIGNvbnN0IGlzQXNzaWduZWRTaW5nbGUgPSBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkICYmIFxyXG4gICAgICBub3JtYWxpemVVdWlkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpID09PSBub3JtYWxpemVkQ2xlYW5lcklkO1xyXG5cclxuICAgIGxldCBpc0Fzc2lnbmVkTXVsdGlwbGUgPSBmYWxzZTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBpc0Fzc2lnbmVkTXVsdGlwbGUgPSBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5zb21lKFxyXG4gICAgICAgIChpZDogc3RyaW5nKSA9PiBub3JtYWxpemVVdWlkKGlkKSA9PT0gbm9ybWFsaXplZENsZWFuZXJJZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNBc3NpZ25lZFNpbmdsZSAmJiAhaXNBc3NpZ25lZE11bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsZWFuZXIgaXMgbm90IGFzc2lnbmVkIHRvIHRoaXMgYm9va2luZycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZXhpc3Rpbmcgb3ZlcnJpZGUgb3IgY3JlYXRlIG5ld1xyXG4gICAgbGV0IG92ZXJyaWRlOiBSZWNvcmQ8c3RyaW5nLCB7IGJhc2VFYXJuaW5nczogbnVtYmVyOyB0aXBBbW91bnQ6IG51bWJlcjsgdG90YWxFYXJuaW5nczogbnVtYmVyIH0+ID0ge307XHJcbiAgICBpZiAoYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlICYmIHR5cGVvZiBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIG92ZXJyaWRlID0geyAuLi5ib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgb3IgcmVtb3ZlIG92ZXJyaWRlXHJcbiAgICBpZiAoZWFybmluZ3MgPT09IG51bGwpIHtcclxuICAgICAgLy8gUmVtb3ZlIG92ZXJyaWRlIGZvciB0aGlzIGNsZWFuZXJcclxuICAgICAgZGVsZXRlIG92ZXJyaWRlW2NsZWFuZXJJZF07XHJcbiAgICAgIC8vIElmIG5vIG92ZXJyaWRlcyBsZWZ0LCBzZXQgdG8gbnVsbFxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3ZlcnJpZGUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG92ZXJyaWRlID0gbnVsbCBhcyBhbnk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNldCBvdmVycmlkZSBmb3IgdGhpcyBjbGVhbmVyXHJcbiAgICAgIG92ZXJyaWRlW2NsZWFuZXJJZF0gPSBlYXJuaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBjbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlOiBvdmVycmlkZSxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2xlYW5lciBlYXJuaW5nczonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ2xlYW5lckVhcm5pbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjbGVhbmVyIGVhcm5pbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgd2l0aCBjbGVhbmVyIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nV2l0aENsZWFuZXJzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgY2xlYW5lcnM/OiBBcnJheTx7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcGhvbmU/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXIgSURzXHJcbiAgICBjb25zdCBjbGVhbmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgY2xlYW5lcklkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoaWQgJiYgIWNsZWFuZXJJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICBjbGVhbmVySWRzLnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXIgZGV0YWlsc1xyXG4gICAgbGV0IGNsZWFuZXJzOiBBcnJheTx7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW1haWw/OiBzdHJpbmcgfCBudWxsOyBwaG9uZT86IHN0cmluZyB8IG51bGwgfT4gPSBbXTtcclxuICAgIGlmIChjbGVhbmVySWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyc0RhdGEsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIG5hbWUsIGVtYWlsLCBwaG9uZScpXHJcbiAgICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgICAgaWYgKCFjbGVhbmVyc0Vycm9yICYmIGNsZWFuZXJzRGF0YSkge1xyXG4gICAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnNEYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogYm9va2luZyBhcyBCb29raW5nLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nV2l0aENsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmcgd2l0aCBjbGVhbmVycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgc2VydmljZXMgKGluY2x1ZGluZyBpbmFjdGl2ZSksIG9yZGVyZWQgYnkgZGlzcGxheV9vcmRlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFNlcnZpY2VzKCk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc2VydmljZXM/OiBTZXJ2aWNlW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2VzOiAoZGF0YSB8fCBbXSkgYXMgU2VydmljZVtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbFNlcnZpY2VzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2VzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBhZGRpdGlvbmFsIHNlcnZpY2VzIChpbmNsdWRpbmcgaW5hY3RpdmUpLCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBZGRpdGlvbmFsU2VydmljZXMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZGRpdGlvbmFsU2VydmljZXM/OiBBZGRpdGlvbmFsU2VydmljZVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhZGRpdGlvbmFsIHNlcnZpY2VzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYWRkaXRpb25hbFNlcnZpY2VzOiAoZGF0YSB8fCBbXSkgYXMgQWRkaXRpb25hbFNlcnZpY2VbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxBZGRpdGlvbmFsU2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYWRkaXRpb25hbCBzZXJ2aWNlcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYWluIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXJ2aWNlKGRhdGE6IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaWNvbl9uYW1lOiBzdHJpbmc7XHJcbiAgZGlzcGxheV9vcmRlcjogbnVtYmVyO1xyXG4gIGlzX2FjdGl2ZT86IGJvb2xlYW47XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2U/OiBTZXJ2aWNlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGlmICghZGF0YS5uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5pY29uX25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJY29uIG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcclxuICAgICAgICBpY29uX25hbWU6IGRhdGEuaWNvbl9uYW1lLFxyXG4gICAgICAgIGRpc3BsYXlfb3JkZXI6IGRhdGEuZGlzcGxheV9vcmRlciA/PyAwLFxyXG4gICAgICAgIGlzX2FjdGl2ZTogZGF0YS5pc19hY3RpdmUgPz8gdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2U6IHNlcnZpY2UgYXMgU2VydmljZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjcmVhdGVTZXJ2aWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGFuIGV4aXN0aW5nIG1haW4gc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2UoXHJcbiAgc2VydmljZUlkOiBzdHJpbmcsXHJcbiAgZGF0YToge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGljb25fbmFtZT86IHN0cmluZztcclxuICAgIGRpc3BsYXlfb3JkZXI/OiBudW1iZXI7XHJcbiAgICBpc19hY3RpdmU/OiBib29sZWFuO1xyXG4gIH1cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBzZXJ2aWNlPzogU2VydmljZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7fTtcclxuICAgIGlmIChkYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5uYW1lID0gZGF0YS5uYW1lLnRyaW0oKTtcclxuICAgIGlmIChkYXRhLmljb25fbmFtZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmljb25fbmFtZSA9IGRhdGEuaWNvbl9uYW1lO1xyXG4gICAgaWYgKGRhdGEuZGlzcGxheV9vcmRlciAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmRpc3BsYXlfb3JkZXIgPSBkYXRhLmRpc3BsYXlfb3JkZXI7XHJcbiAgICBpZiAoZGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pc19hY3RpdmUgPSBkYXRhLmlzX2FjdGl2ZTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlcnZpY2UsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnc2VydmljZXMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBzZXJ2aWNlSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXJ2aWNlOiBzZXJ2aWNlIGFzIFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG1haW4gc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlcnZpY2Uoc2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBZGRpdGlvbmFsU2VydmljZShkYXRhOiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGljb25fbmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlfb3JkZXI6IG51bWJlcjtcclxuICByZXF1aXJlc19xdWFudGl0eT86IGJvb2xlYW47XHJcbiAgaXNfYWN0aXZlPzogYm9vbGVhbjtcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYWRkaXRpb25hbFNlcnZpY2U/OiBBZGRpdGlvbmFsU2VydmljZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBpZiAoIWRhdGEubmFtZT8udHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuaWNvbl9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSWNvbiBuYW1lIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYWRkaXRpb25hbFNlcnZpY2UsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXHJcbiAgICAgICAgaWNvbl9uYW1lOiBkYXRhLmljb25fbmFtZSxcclxuICAgICAgICBkaXNwbGF5X29yZGVyOiBkYXRhLmRpc3BsYXlfb3JkZXIgPz8gMCxcclxuICAgICAgICByZXF1aXJlc19xdWFudGl0eTogZGF0YS5yZXF1aXJlc19xdWFudGl0eSA/PyBmYWxzZSxcclxuICAgICAgICBpc19hY3RpdmU6IGRhdGEuaXNfYWN0aXZlID8/IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGFkZGl0aW9uYWwgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFkZGl0aW9uYWxTZXJ2aWNlOiBhZGRpdGlvbmFsU2VydmljZSBhcyBBZGRpdGlvbmFsU2VydmljZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjcmVhdGVBZGRpdGlvbmFsU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgYWRkaXRpb25hbCBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGFuIGV4aXN0aW5nIGFkZGl0aW9uYWwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFkZGl0aW9uYWxTZXJ2aWNlKFxyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlSWQ6IHN0cmluZyxcclxuICBkYXRhOiB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgaWNvbl9uYW1lPzogc3RyaW5nO1xyXG4gICAgZGlzcGxheV9vcmRlcj86IG51bWJlcjtcclxuICAgIHJlcXVpcmVzX3F1YW50aXR5PzogYm9vbGVhbjtcclxuICAgIGlzX2FjdGl2ZT86IGJvb2xlYW47XHJcbiAgfVxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlPzogQWRkaXRpb25hbFNlcnZpY2U7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICBpZiAoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEubmFtZSA9IGRhdGEubmFtZS50cmltKCk7XHJcbiAgICBpZiAoZGF0YS5pY29uX25hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pY29uX25hbWUgPSBkYXRhLmljb25fbmFtZTtcclxuICAgIGlmIChkYXRhLmRpc3BsYXlfb3JkZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5kaXNwbGF5X29yZGVyID0gZGF0YS5kaXNwbGF5X29yZGVyO1xyXG4gICAgaWYgKGRhdGEucmVxdWlyZXNfcXVhbnRpdHkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5yZXF1aXJlc19xdWFudGl0eSA9IGRhdGEucmVxdWlyZXNfcXVhbnRpdHk7XHJcbiAgICBpZiAoZGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5pc19hY3RpdmUgPSBkYXRhLmlzX2FjdGl2ZTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGFkZGl0aW9uYWxTZXJ2aWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBhZGRpdGlvbmFsU2VydmljZUlkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBhZGRpdGlvbmFsIHNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBhZGRpdGlvbmFsU2VydmljZTogYWRkaXRpb25hbFNlcnZpY2UgYXMgQWRkaXRpb25hbFNlcnZpY2UgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQWRkaXRpb25hbFNlcnZpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGFkZGl0aW9uYWwgc2VydmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhbiBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBZGRpdGlvbmFsU2VydmljZShhZGRpdGlvbmFsU2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdhZGRpdGlvbmFsX3NlcnZpY2VzJylcclxuICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgIC5lcSgnaWQnLCBhZGRpdGlvbmFsU2VydmljZUlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBkZWxldGVBZGRpdGlvbmFsU2VydmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgYWRkaXRpb25hbCBzZXJ2aWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFkZGl0aW9uYWwgc2VydmljZXMgbGlua2VkIHRvIGEgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVJ1bGVzKHNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZGRpdGlvbmFsU2VydmljZUlkcz86IHN0cmluZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2FkZGl0aW9uYWxfc2VydmljZV9pZCcpXHJcbiAgICAgIC5lcSgnc2VydmljZV9pZCcsIHNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZpY2UgcnVsZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRpdGlvbmFsU2VydmljZUlkcyA9IChkYXRhIHx8IFtdKS5tYXAoKHJ1bGU6IGFueSkgPT4gcnVsZS5hZGRpdGlvbmFsX3NlcnZpY2VfaWQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGFkZGl0aW9uYWxTZXJ2aWNlSWRzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFNlcnZpY2VSdWxlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHJ1bGVzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJlbGF0aW9uc2hpcHMgYmV0d2VlbiBtYWluIHNlcnZpY2UgYW5kIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXJ2aWNlUnVsZXMoXHJcbiAgc2VydmljZUlkOiBzdHJpbmcsXHJcbiAgYWRkaXRpb25hbFNlcnZpY2VJZHM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gRGVsZXRlIGV4aXN0aW5nIHJ1bGVzXHJcbiAgICBjb25zdCB7IGVycm9yOiBkZWxldGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3NlcnZpY2VfYWRkaXRpb25hbF9zZXJ2aWNlX3J1bGVzJylcclxuICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgIC5lcSgnc2VydmljZV9pZCcsIHNlcnZpY2VJZCk7XHJcblxyXG4gICAgaWYgKGRlbGV0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNlcnZpY2UgcnVsZXM6JywgZGVsZXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGRlbGV0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgbmV3IHJ1bGVzXHJcbiAgICBpZiAoYWRkaXRpb25hbFNlcnZpY2VJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBydWxlcyA9IGFkZGl0aW9uYWxTZXJ2aWNlSWRzLm1hcCgoYWRkaXRpb25hbFNlcnZpY2VJZCkgPT4gKHtcclxuICAgICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlSWQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9zZXJ2aWNlX2lkOiBhZGRpdGlvbmFsU2VydmljZUlkLFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBjb25zdCB7IGVycm9yOiBpbnNlcnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnc2VydmljZV9hZGRpdGlvbmFsX3NlcnZpY2VfcnVsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQocnVsZXMpO1xyXG5cclxuICAgICAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIHNlcnZpY2UgcnVsZXM6JywgaW5zZXJ0RXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogaW5zZXJ0RXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVTZXJ2aWNlUnVsZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIHNlcnZpY2UgcnVsZXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcHJpY2luZyBydWxlIGZvciBhIHNlcnZpY2UgKGJhc2VfcHJpY2UpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVByaWNlKHNlcnZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBwcmljaW5nUnVsZT86IFByaWNpbmdSdWxlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgncnVsZV90eXBlJywgJ2Jhc2VfcHJpY2UnKVxyXG4gICAgICAuZXEoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfCB1bmRlZmluZWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVByaWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgcHJpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgb3IgY3JlYXRlIHByaWNpbmcgcnVsZSBmb3IgYSBzZXJ2aWNlIChiYXNlX3ByaWNlKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2VQcmljZShcclxuICBzZXJ2aWNlSWQ6IHN0cmluZyxcclxuICBwcmljZTogbnVtYmVyXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJpY2luZ1J1bGU/OiBQcmljaW5nUnVsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBwcmljaW5nIHJ1bGUgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nLCBlcnJvcjogY2hlY2tFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdydWxlX3R5cGUnLCAnYmFzZV9wcmljZScpXHJcbiAgICAgIC5lcSgnc2VydmljZV9pZCcsIHNlcnZpY2VJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGNoZWNrRXJyb3IgJiYgY2hlY2tFcnJvci5jb2RlICE9PSAnUEdSU1QxMTYnKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHNlcnZpY2UgcHJpY2U6JywgY2hlY2tFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogY2hlY2tFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcmljaW5nIHJ1bGVcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7IHByaWNlLCB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmcuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IHByaWNpbmcgcnVsZVxyXG4gICAgICAvLyBHZXQgc2VydmljZSB0byBkZXRlcm1pbmUgZGlzcGxheV9vcmRlclxyXG4gICAgICBjb25zdCB7IGRhdGE6IHNlcnZpY2UsIGVycm9yOiBzZXJ2aWNlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3NlcnZpY2VzJylcclxuICAgICAgICAuc2VsZWN0KCdkaXNwbGF5X29yZGVyJylcclxuICAgICAgICAuZXEoJ2lkJywgc2VydmljZUlkKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChzZXJ2aWNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlOicsIHNlcnZpY2VFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBzZXJ2aWNlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcmljaW5nX3J1bGVzJylcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHJ1bGVfdHlwZTogJ2Jhc2VfcHJpY2UnLFxyXG4gICAgICAgICAgc2VydmljZV9pZDogc2VydmljZUlkLFxyXG4gICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICBpc19hY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBkaXNwbGF5X29yZGVyOiBzZXJ2aWNlLmRpc3BsYXlfb3JkZXIgfHwgMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB9O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVTZXJ2aWNlUHJpY2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIHNlcnZpY2UgcHJpY2UnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcHJpY2luZyBydWxlIGZvciBhbiBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsU2VydmljZVByaWNlKGFkZGl0aW9uYWxTZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJpY2luZ1J1bGU/OiBQcmljaW5nUnVsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJpY2luZ19ydWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ3J1bGVfdHlwZScsICdhZGRpdGlvbmFsX3NlcnZpY2UnKVxyXG4gICAgICAuZXEoJ2FkZGl0aW9uYWxfc2VydmljZV9pZCcsIGFkZGl0aW9uYWxTZXJ2aWNlSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhZGRpdGlvbmFsIHNlcnZpY2UgcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcmljaW5nUnVsZTogZGF0YSBhcyBQcmljaW5nUnVsZSB8IHVuZGVmaW5lZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBZGRpdGlvbmFsU2VydmljZVByaWNlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBvciBjcmVhdGUgcHJpY2luZyBydWxlIGZvciBhbiBhZGRpdGlvbmFsIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZGRpdGlvbmFsU2VydmljZVByaWNlKFxyXG4gIGFkZGl0aW9uYWxTZXJ2aWNlSWQ6IHN0cmluZyxcclxuICBwcmljZTogbnVtYmVyXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJpY2luZ1J1bGU/OiBQcmljaW5nUnVsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBwcmljaW5nIHJ1bGUgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nLCBlcnJvcjogY2hlY2tFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdydWxlX3R5cGUnLCAnYWRkaXRpb25hbF9zZXJ2aWNlJylcclxuICAgICAgLmVxKCdhZGRpdGlvbmFsX3NlcnZpY2VfaWQnLCBhZGRpdGlvbmFsU2VydmljZUlkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY2hlY2tFcnJvciAmJiBjaGVja0Vycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlOicsIGNoZWNrRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNoZWNrRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgcHJpY2luZyBydWxlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBwcmljZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nLmlkKVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGFkZGl0aW9uYWwgc2VydmljZSBwcmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByaWNpbmdSdWxlOiBkYXRhIGFzIFByaWNpbmdSdWxlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IHByaWNpbmcgcnVsZVxyXG4gICAgICAvLyBHZXQgYWRkaXRpb25hbCBzZXJ2aWNlIHRvIGRldGVybWluZSBkaXNwbGF5X29yZGVyXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogYWRkaXRpb25hbFNlcnZpY2UsIGVycm9yOiBzZXJ2aWNlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ2FkZGl0aW9uYWxfc2VydmljZXMnKVxyXG4gICAgICAgIC5zZWxlY3QoJ2Rpc3BsYXlfb3JkZXInKVxyXG4gICAgICAgIC5lcSgnaWQnLCBhZGRpdGlvbmFsU2VydmljZUlkKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChzZXJ2aWNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhZGRpdGlvbmFsIHNlcnZpY2U6Jywgc2VydmljZUVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHNlcnZpY2VFcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3ByaWNpbmdfcnVsZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgcnVsZV90eXBlOiAnYWRkaXRpb25hbF9zZXJ2aWNlJyxcclxuICAgICAgICAgIGFkZGl0aW9uYWxfc2VydmljZV9pZDogYWRkaXRpb25hbFNlcnZpY2VJZCxcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgaXNfYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgZGlzcGxheV9vcmRlcjogYWRkaXRpb25hbFNlcnZpY2UuZGlzcGxheV9vcmRlciB8fCAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcHJpY2luZ1J1bGU6IGRhdGEgYXMgUHJpY2luZ1J1bGUgfTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQWRkaXRpb25hbFNlcnZpY2VQcmljZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgYWRkaXRpb25hbCBzZXJ2aWNlIHByaWNlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBSRVZFTlVFIEFOQUxZVElDUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEdldCByZXZlbnVlIHRyZW5kcyAoZGFpbHkvd2Vla2x5L21vbnRobHkpIHdpdGggZ3Jvd3RoIHBlcmNlbnRhZ2VzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmV2ZW51ZVRyZW5kcyhmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHBlcmlvZD86ICdkYWlseScgfCAnd2Vla2x5JyB8ICdtb250aGx5JztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgcGVyaW9kOiBzdHJpbmc7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlcjsgZ3Jvd3RoPzogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgcGVyaW9kID0gZmlsdGVyPy5wZXJpb2QgfHwgJ21vbnRobHknO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCwgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cycpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAuZXEoJ3BheW1lbnRfc3RhdHVzJywgJ3BhaWQnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldmVudWVCeVBlcmlvZDogeyBba2V5OiBzdHJpbmddOiB7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlciB9IH0gPSB7fTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgbGV0IHBlcmlvZEtleTogc3RyaW5nO1xyXG4gICAgICBpZiAocGVyaW9kID09PSAnZGFpbHknKSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHdlZWtTdGFydC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gd2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFyZXZlbnVlQnlQZXJpb2RbcGVyaW9kS2V5XSkge1xyXG4gICAgICAgIHJldmVudWVCeVBlcmlvZFtwZXJpb2RLZXldID0geyByZXZlbnVlOiAwLCBib29raW5nczogMCB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldmVudWVCeVBlcmlvZFtwZXJpb2RLZXldLnJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgICByZXZlbnVlQnlQZXJpb2RbcGVyaW9kS2V5XS5ib29raW5ncyArPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc29ydGVkUGVyaW9kcyA9IE9iamVjdC5rZXlzKHJldmVudWVCeVBlcmlvZCkuc29ydCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gc29ydGVkUGVyaW9kcy5tYXAoKHBlcmlvZEtleSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHJldmVudWVCeVBlcmlvZFtwZXJpb2RLZXldO1xyXG4gICAgICBjb25zdCBwcmV2aW91cyA9IGluZGV4ID4gMCA/IHJldmVudWVCeVBlcmlvZFtzb3J0ZWRQZXJpb2RzW2luZGV4IC0gMV1dIDogbnVsbDtcclxuICAgICAgY29uc3QgZ3Jvd3RoID0gcHJldmlvdXMgJiYgcHJldmlvdXMucmV2ZW51ZSA+IDBcclxuICAgICAgICA/ICgoY3VycmVudC5yZXZlbnVlIC0gcHJldmlvdXMucmV2ZW51ZSkgLyBwcmV2aW91cy5yZXZlbnVlKSAqIDEwMFxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwZXJpb2Q6IHBlcmlvZEtleSxcclxuICAgICAgICByZXZlbnVlOiBNYXRoLnJvdW5kKGN1cnJlbnQucmV2ZW51ZSksXHJcbiAgICAgICAgYm9va2luZ3M6IGN1cnJlbnQuYm9va2luZ3MsXHJcbiAgICAgICAgZ3Jvd3RoOiBncm93dGggIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQoZ3Jvd3RoICogMTApIC8gMTAgOiB1bmRlZmluZWQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UmV2ZW51ZVRyZW5kczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByZXZlbnVlIHRyZW5kcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZXZlbnVlIGJyZWFrZG93biBieSBzZXJ2aWNlIHR5cGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXZlbnVlQnlTZXJ2aWNlVHlwZShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8eyBzZXJ2aWNlVHlwZTogc3RyaW5nOyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdHlwZSwgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cycpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAuZXEoJ3BheW1lbnRfc3RhdHVzJywgJ3BhaWQnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldmVudWVCeVNlcnZpY2U6IHsgW2tleTogc3RyaW5nXTogeyByZXZlbnVlOiBudW1iZXI7IGJvb2tpbmdzOiBudW1iZXIgfSB9ID0ge307XHJcbiAgICBsZXQgdG90YWxSZXZlbnVlID0gMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzZXJ2aWNlVHlwZSA9IGJvb2tpbmcuc2VydmljZV90eXBlIHx8ICdVbmtub3duJztcclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgaWYgKCFyZXZlbnVlQnlTZXJ2aWNlW3NlcnZpY2VUeXBlXSkge1xyXG4gICAgICAgIHJldmVudWVCeVNlcnZpY2Vbc2VydmljZVR5cGVdID0geyByZXZlbnVlOiAwLCBib29raW5nczogMCB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldmVudWVCeVNlcnZpY2Vbc2VydmljZVR5cGVdLnJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgICByZXZlbnVlQnlTZXJ2aWNlW3NlcnZpY2VUeXBlXS5ib29raW5ncyArPSAxO1xyXG4gICAgICB0b3RhbFJldmVudWUgKz0gYW1vdW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMocmV2ZW51ZUJ5U2VydmljZSlcclxuICAgICAgLm1hcCgoW3NlcnZpY2VUeXBlLCBkYXRhXSkgPT4gKHtcclxuICAgICAgICBzZXJ2aWNlVHlwZSxcclxuICAgICAgICByZXZlbnVlOiBNYXRoLnJvdW5kKGRhdGEucmV2ZW51ZSksXHJcbiAgICAgICAgYm9va2luZ3M6IGRhdGEuYm9va2luZ3MsXHJcbiAgICAgICAgcGVyY2VudGFnZTogdG90YWxSZXZlbnVlID4gMCA/IE1hdGgucm91bmQoKGRhdGEucmV2ZW51ZSAvIHRvdGFsUmV2ZW51ZSkgKiAxMDAgKiAxMCkgLyAxMCA6IDAsXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5yZXZlbnVlIC0gYS5yZXZlbnVlKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UmV2ZW51ZUJ5U2VydmljZVR5cGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcmV2ZW51ZSBieSBzZXJ2aWNlIHR5cGUnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgcmV2ZW51ZSBieSBwYXltZW50IHN0YXR1c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJldmVudWVCeVBheW1lbnRTdGF0dXMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgc3RhdHVzOiBzdHJpbmc7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlcjsgcGVyY2VudGFnZTogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgncGF5bWVudF9zdGF0dXMsIHRvdGFsX2Ftb3VudCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldmVudWVCeVN0YXR1czogeyBba2V5OiBzdHJpbmddOiB7IHJldmVudWU6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlciB9IH0gPSB7fTtcclxuICAgIGxldCB0b3RhbFJldmVudWUgPSAwO1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGJvb2tpbmcucGF5bWVudF9zdGF0dXMgfHwgJ3Vua25vd24nO1xyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBpZiAoIXJldmVudWVCeVN0YXR1c1tzdGF0dXNdKSB7XHJcbiAgICAgICAgcmV2ZW51ZUJ5U3RhdHVzW3N0YXR1c10gPSB7IHJldmVudWU6IDAsIGJvb2tpbmdzOiAwIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV2ZW51ZUJ5U3RhdHVzW3N0YXR1c10ucmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICAgIHJldmVudWVCeVN0YXR1c1tzdGF0dXNdLmJvb2tpbmdzICs9IDE7XHJcbiAgICAgIHRvdGFsUmV2ZW51ZSArPSBhbW91bnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhyZXZlbnVlQnlTdGF0dXMpXHJcbiAgICAgIC5tYXAoKFtzdGF0dXMsIGRhdGFdKSA9PiAoe1xyXG4gICAgICAgIHN0YXR1czogc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdHVzLnNsaWNlKDEpLFxyXG4gICAgICAgIHJldmVudWU6IE1hdGgucm91bmQoZGF0YS5yZXZlbnVlKSxcclxuICAgICAgICBib29raW5nczogZGF0YS5ib29raW5ncyxcclxuICAgICAgICBwZXJjZW50YWdlOiB0b3RhbFJldmVudWUgPiAwID8gTWF0aC5yb3VuZCgoZGF0YS5yZXZlbnVlIC8gdG90YWxSZXZlbnVlKSAqIDEwMCAqIDEwKSAvIDEwIDogMCxcclxuICAgICAgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnJldmVudWUgLSBhLnJldmVudWUpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRSZXZlbnVlQnlQYXltZW50U3RhdHVzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJldmVudWUgYnkgcGF5bWVudCBzdGF0dXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXZlcmFnZSBvcmRlciB2YWx1ZSAoQU9WKSB0cmVuZHMgb3ZlciB0aW1lXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZlcmFnZU9yZGVyVmFsdWUoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBwZXJpb2Q/OiAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseSc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHBlcmlvZDogc3RyaW5nOyBhb3Y6IG51bWJlcjsgYm9va2luZ3M6IG51bWJlcjsgZ3Jvd3RoPzogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgcGVyaW9kID0gZmlsdGVyPy5wZXJpb2QgfHwgJ21vbnRobHknO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3JlYXRlZF9hdCwgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cycpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAuZXEoJ3BheW1lbnRfc3RhdHVzJywgJ3BhaWQnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFvdkJ5UGVyaW9kOiB7IFtrZXk6IHN0cmluZ106IHsgdG90YWw6IG51bWJlcjsgY291bnQ6IG51bWJlciB9IH0gPSB7fTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgY29uc3QgYW1vdW50ID0gcmF3QW1vdW50ID49IDEwMDAwID8gcmF3QW1vdW50IC8gMTAwIDogcmF3QW1vdW50O1xyXG5cclxuICAgICAgbGV0IHBlcmlvZEtleTogc3RyaW5nO1xyXG4gICAgICBpZiAocGVyaW9kID09PSAnZGFpbHknKSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHdlZWtTdGFydC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gd2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFhb3ZCeVBlcmlvZFtwZXJpb2RLZXldKSB7XHJcbiAgICAgICAgYW92QnlQZXJpb2RbcGVyaW9kS2V5XSA9IHsgdG90YWw6IDAsIGNvdW50OiAwIH07XHJcbiAgICAgIH1cclxuICAgICAgYW92QnlQZXJpb2RbcGVyaW9kS2V5XS50b3RhbCArPSBhbW91bnQ7XHJcbiAgICAgIGFvdkJ5UGVyaW9kW3BlcmlvZEtleV0uY291bnQgKz0gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRlZFBlcmlvZHMgPSBPYmplY3Qua2V5cyhhb3ZCeVBlcmlvZCkuc29ydCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gc29ydGVkUGVyaW9kcy5tYXAoKHBlcmlvZEtleSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IGFvdkJ5UGVyaW9kW3BlcmlvZEtleV07XHJcbiAgICAgIGNvbnN0IGFvdiA9IGN1cnJlbnQuY291bnQgPiAwID8gY3VycmVudC50b3RhbCAvIGN1cnJlbnQuY291bnQgOiAwO1xyXG4gICAgICBjb25zdCBwcmV2aW91cyA9IGluZGV4ID4gMCA/IGFvdkJ5UGVyaW9kW3NvcnRlZFBlcmlvZHNbaW5kZXggLSAxXV0gOiBudWxsO1xyXG4gICAgICBjb25zdCBwcmV2aW91c0FvdiA9IHByZXZpb3VzICYmIHByZXZpb3VzLmNvdW50ID4gMCA/IHByZXZpb3VzLnRvdGFsIC8gcHJldmlvdXMuY291bnQgOiAwO1xyXG4gICAgICBjb25zdCBncm93dGggPSBwcmV2aW91c0FvdiA+IDAgPyAoKGFvdiAtIHByZXZpb3VzQW92KSAvIHByZXZpb3VzQW92KSAqIDEwMCA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGVyaW9kOiBwZXJpb2RLZXksXHJcbiAgICAgICAgYW92OiBNYXRoLnJvdW5kKGFvdiAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgYm9va2luZ3M6IGN1cnJlbnQuY291bnQsXHJcbiAgICAgICAgZ3Jvd3RoOiBncm93dGggIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQoZ3Jvd3RoICogMTApIC8gMTAgOiB1bmRlZmluZWQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0QXZlcmFnZU9yZGVyVmFsdWU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYXZlcmFnZSBvcmRlciB2YWx1ZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZXZlbnVlIGZvcmVjYXN0IGJhc2VkIG9uIHRyZW5kc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJldmVudWVGb3JlY2FzdChmaWx0ZXI/OiB7XHJcbiAgcGVyaW9kcz86IG51bWJlcjtcclxuICBwZXJpb2Q/OiAnZGFpbHknIHwgJ3dlZWtseScgfCAnbW9udGhseSc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7IHBlcmlvZDogc3RyaW5nOyBmb3JlY2FzdDogbnVtYmVyOyBsb3dlckJvdW5kOiBudW1iZXI7IHVwcGVyQm91bmQ6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBoaXN0b3JpY2FsIGRhdGFcclxuICAgIGNvbnN0IGhpc3RvcmljYWxSZXN1bHQgPSBhd2FpdCBnZXRSZXZlbnVlVHJlbmRzKHtcclxuICAgICAgcGVyaW9kOiBmaWx0ZXI/LnBlcmlvZCB8fCAnbW9udGhseScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWhpc3RvcmljYWxSZXN1bHQuc3VjY2VzcyB8fCAhaGlzdG9yaWNhbFJlc3VsdC5kYXRhIHx8IGhpc3RvcmljYWxSZXN1bHQuZGF0YS5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0luc3VmZmljaWVudCBoaXN0b3JpY2FsIGRhdGEgZm9yIGZvcmVjYXN0aW5nJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpc3RvcmljYWwgPSBoaXN0b3JpY2FsUmVzdWx0LmRhdGE7XHJcbiAgICBjb25zdCBwZXJpb2RzID0gZmlsdGVyPy5wZXJpb2RzIHx8IDM7XHJcblxyXG4gICAgLy8gU2ltcGxlIGxpbmVhciByZWdyZXNzaW9uIGZvciBmb3JlY2FzdGluZ1xyXG4gICAgY29uc3QgbiA9IGhpc3RvcmljYWwubGVuZ3RoO1xyXG4gICAgY29uc3Qgc3VtWCA9IChuICogKG4gKyAxKSkgLyAyO1xyXG4gICAgY29uc3Qgc3VtWSA9IGhpc3RvcmljYWwucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucmV2ZW51ZSwgMCk7XHJcbiAgICBjb25zdCBzdW1YWSA9IGhpc3RvcmljYWwucmVkdWNlKChzdW0sIGl0ZW0sIGluZGV4KSA9PiBzdW0gKyAoaW5kZXggKyAxKSAqIGl0ZW0ucmV2ZW51ZSwgMCk7XHJcbiAgICBjb25zdCBzdW1YMiA9IChuICogKG4gKyAxKSAqICgyICogbiArIDEpKSAvIDY7XHJcblxyXG4gICAgY29uc3Qgc2xvcGUgPSAobiAqIHN1bVhZIC0gc3VtWCAqIHN1bVkpIC8gKG4gKiBzdW1YMiAtIHN1bVggKiBzdW1YKTtcclxuICAgIGNvbnN0IGludGVyY2VwdCA9IChzdW1ZIC0gc2xvcGUgKiBzdW1YKSAvIG47XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN0YW5kYXJkIGRldmlhdGlvbiBmb3IgY29uZmlkZW5jZSBpbnRlcnZhbHNcclxuICAgIGNvbnN0IHJlc2lkdWFscyA9IGhpc3RvcmljYWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmVkaWN0ZWQgPSBpbnRlcmNlcHQgKyBzbG9wZSAqIChpbmRleCArIDEpO1xyXG4gICAgICByZXR1cm4gaXRlbS5yZXZlbnVlIC0gcHJlZGljdGVkO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2YXJpYW5jZSA9IHJlc2lkdWFscy5yZWR1Y2UoKHN1bSwgcikgPT4gc3VtICsgciAqIHIsIDApIC8gKG4gLSAyKTtcclxuICAgIGNvbnN0IHN0ZERldiA9IE1hdGguc3FydCh2YXJpYW5jZSk7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgZm9yZWNhc3RcclxuICAgIGNvbnN0IGZvcmVjYXN0OiBBcnJheTx7IHBlcmlvZDogc3RyaW5nOyBmb3JlY2FzdDogbnVtYmVyOyBsb3dlckJvdW5kOiBudW1iZXI7IHVwcGVyQm91bmQ6IG51bWJlciB9PiA9IFtdO1xyXG4gICAgY29uc3QgbGFzdFBlcmlvZCA9IGhpc3RvcmljYWxbaGlzdG9yaWNhbC5sZW5ndGggLSAxXS5wZXJpb2Q7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZ1dHVyZUluZGV4ID0gbiArIGk7XHJcbiAgICAgIGNvbnN0IHByZWRpY3RlZCA9IGludGVyY2VwdCArIHNsb3BlICogZnV0dXJlSW5kZXg7XHJcbiAgICAgIGNvbnN0IGNvbmZpZGVuY2VJbnRlcnZhbCA9IDEuOTYgKiBzdGREZXY7IC8vIDk1JSBjb25maWRlbmNlXHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBwZXJpb2Qga2V5IChzaW1wbGlmaWVkIC0gd291bGQgbmVlZCBwcm9wZXIgZGF0ZSBoYW5kbGluZyBpbiBwcm9kdWN0aW9uKVxyXG4gICAgICBsZXQgcGVyaW9kS2V5OiBzdHJpbmc7XHJcbiAgICAgIGlmIChmaWx0ZXI/LnBlcmlvZCA9PT0gJ2RhaWx5Jykge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlID0gbmV3IERhdGUobGFzdFBlcmlvZCk7XHJcbiAgICAgICAgbGFzdERhdGUuc2V0RGF0ZShsYXN0RGF0ZS5nZXREYXRlKCkgKyBpKTtcclxuICAgICAgICBwZXJpb2RLZXkgPSBsYXN0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyPy5wZXJpb2QgPT09ICd3ZWVrbHknKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGUgPSBuZXcgRGF0ZShsYXN0UGVyaW9kKTtcclxuICAgICAgICBsYXN0RGF0ZS5zZXREYXRlKGxhc3REYXRlLmdldERhdGUoKSArIGkgKiA3KTtcclxuICAgICAgICBwZXJpb2RLZXkgPSBsYXN0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGUgPSBuZXcgRGF0ZShsYXN0UGVyaW9kICsgJy0wMScpO1xyXG4gICAgICAgIGxhc3REYXRlLnNldE1vbnRoKGxhc3REYXRlLmdldE1vbnRoKCkgKyBpKTtcclxuICAgICAgICBwZXJpb2RLZXkgPSBgJHtsYXN0RGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhsYXN0RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JlY2FzdC5wdXNoKHtcclxuICAgICAgICBwZXJpb2Q6IHBlcmlvZEtleSxcclxuICAgICAgICBmb3JlY2FzdDogTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChwcmVkaWN0ZWQpKSxcclxuICAgICAgICBsb3dlckJvdW5kOiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHByZWRpY3RlZCAtIGNvbmZpZGVuY2VJbnRlcnZhbCkpLFxyXG4gICAgICAgIHVwcGVyQm91bmQ6IE1hdGgucm91bmQocHJlZGljdGVkICsgY29uZmlkZW5jZUludGVydmFsKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZm9yZWNhc3QgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UmV2ZW51ZUZvcmVjYXN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGdlbmVyYXRlIHJldmVudWUgZm9yZWNhc3QnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENMRUFORVIgUEVSRk9STUFOQ0UgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2xlYW5lciBwZXJmb3JtYW5jZSBtZXRyaWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xlYW5lclBlcmZvcm1hbmNlTWV0cmljcyhmaWx0ZXI/OiB7XHJcbiAgY2xlYW5lcklkPzogc3RyaW5nO1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHtcclxuICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgIHRvdGFsQm9va2luZ3M6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlZEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBjYW5jZWxsZWRCb29raW5nczogbnVtYmVyO1xyXG4gICAgY29tcGxldGlvblJhdGU6IG51bWJlcjtcclxuICAgIG9uVGltZVJhdGU6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VSYXRpbmc6IG51bWJlcjtcclxuICAgIHRvdGFsRWFybmluZ3M6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VFYXJuaW5nc1BlckJvb2tpbmc6IG51bWJlcjtcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgY2xlYW5lcnNcclxuICAgIGxldCBjbGVhbmVyc1F1ZXJ5ID0gc3VwYWJhc2UuZnJvbSgnY2xlYW5lcnMnKS5zZWxlY3QoJ2lkLCBuYW1lLCByYXRpbmcnKTtcclxuICAgIGlmIChmaWx0ZXI/LmNsZWFuZXJJZCkge1xyXG4gICAgICBjbGVhbmVyc1F1ZXJ5ID0gY2xlYW5lcnNRdWVyeS5lcSgnaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGF0YTogY2xlYW5lcnMsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBjbGVhbmVyc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogY2xlYW5lcnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdzIHdpdGggY2xlYW5lciBhc3NpZ25tZW50c1xyXG4gICAgbGV0IGJvb2tpbmdzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgc3RhdHVzLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzLCB0b3RhbF9hbW91bnQsIHBheW1lbnRfc3RhdHVzLCBjbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlLCBzZXJ2aWNlX2RhdGUsIHNlcnZpY2VfdGltZSwgZXhwZWN0ZWRfYXJyaXZhbF90aW1lLCBjcmVhdGVkX2F0JylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBib29raW5nc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvY2VzcyBjbGVhbmVyIHBlcmZvcm1hbmNlXHJcbiAgICBjb25zdCBjbGVhbmVyU3RhdHM6IHsgW2tleTogc3RyaW5nXToge1xyXG4gICAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgICBjb21wbGV0ZWRCb29raW5nczogbnVtYmVyO1xyXG4gICAgICBjYW5jZWxsZWRCb29raW5nczogbnVtYmVyO1xyXG4gICAgICBvblRpbWVCb29raW5nczogbnVtYmVyO1xyXG4gICAgICB0b3RhbEVhcm5pbmdzOiBudW1iZXI7XHJcbiAgICAgIHJhdGluZ3M6IG51bWJlcltdO1xyXG4gICAgfSB9ID0ge307XHJcblxyXG4gICAgY2xlYW5lcnM/LmZvckVhY2goKGNsZWFuZXIpID0+IHtcclxuICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXIuaWRdID0ge1xyXG4gICAgICAgIGNsZWFuZXJJZDogY2xlYW5lci5pZCxcclxuICAgICAgICBjbGVhbmVyTmFtZTogY2xlYW5lci5uYW1lLFxyXG4gICAgICAgIHRvdGFsQm9va2luZ3M6IDAsXHJcbiAgICAgICAgY29tcGxldGVkQm9va2luZ3M6IDAsXHJcbiAgICAgICAgY2FuY2VsbGVkQm9va2luZ3M6IDAsXHJcbiAgICAgICAgb25UaW1lQm9va2luZ3M6IDAsXHJcbiAgICAgICAgdG90YWxFYXJuaW5nczogMCxcclxuICAgICAgICByYXRpbmdzOiBjbGVhbmVyLnJhdGluZyA/IFtjbGVhbmVyLnJhdGluZ10gOiBbXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJvb2tpbmdzPy5mb3JFYWNoKChib29raW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsZWFuZXJJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKSB7XHJcbiAgICAgICAgY2xlYW5lcklkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGlmIChpZCAmJiAhY2xlYW5lcklkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgY2xlYW5lcklkcy5wdXNoKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2xlYW5lcklkcy5mb3JFYWNoKChjbGVhbmVySWQpID0+IHtcclxuICAgICAgICBpZiAoIWNsZWFuZXJTdGF0c1tjbGVhbmVySWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVySWRdLnRvdGFsQm9va2luZ3MgKz0gMTtcclxuXHJcbiAgICAgICAgaWYgKGJvb2tpbmcuc3RhdHVzID09PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0uY29tcGxldGVkQm9va2luZ3MgKz0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJvb2tpbmcuc3RhdHVzID09PSAnY2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgY2xlYW5lclN0YXRzW2NsZWFuZXJJZF0uY2FuY2VsbGVkQm9va2luZ3MgKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIG9uLXRpbWUgcGVyZm9ybWFuY2VcclxuICAgICAgICBpZiAoYm9va2luZy5zdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmIGJvb2tpbmcuZXhwZWN0ZWRfYXJyaXZhbF90aW1lICYmIGJvb2tpbmcuc2VydmljZV90aW1lKSB7XHJcbiAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IG5ldyBEYXRlKGAke2Jvb2tpbmcuc2VydmljZV9kYXRlfVQke2Jvb2tpbmcuZXhwZWN0ZWRfYXJyaXZhbF90aW1lfWApO1xyXG4gICAgICAgICAgY29uc3Qgc2NoZWR1bGVkID0gbmV3IERhdGUoYCR7Ym9va2luZy5zZXJ2aWNlX2RhdGV9VCR7Ym9va2luZy5zZXJ2aWNlX3RpbWV9YCk7XHJcbiAgICAgICAgICBpZiAoZXhwZWN0ZWQgPD0gc2NoZWR1bGVkIHx8IE1hdGguYWJzKGV4cGVjdGVkLmdldFRpbWUoKSAtIHNjaGVkdWxlZC5nZXRUaW1lKCkpIDw9IDE1ICogNjAgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVySWRdLm9uVGltZUJvb2tpbmdzICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgZWFybmluZ3NcclxuICAgICAgICBpZiAoYm9va2luZy5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKSB7XHJcbiAgICAgICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICAgICAgY29uc3QgdG90YWxBbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGVhcm5pbmdzIG92ZXJyaWRlXHJcbiAgICAgICAgICBsZXQgZWFybmluZ3MgPSAwO1xyXG4gICAgICAgICAgaWYgKGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSAmJiB0eXBlb2YgYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBvdmVycmlkZSA9IGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZVtjbGVhbmVySWRdO1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgICBlYXJuaW5ncyA9IG92ZXJyaWRlLnRvdGFsRWFybmluZ3MgfHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRGVmYXVsdDogNzAlIG9mIHRvdGFsIGFtb3VudCAoY2FuIGJlIGFkanVzdGVkKVxyXG4gICAgICAgICAgICBlYXJuaW5ncyA9IHRvdGFsQW1vdW50ICogMC43O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNsZWFuZXJTdGF0c1tjbGVhbmVySWRdLnRvdGFsRWFybmluZ3MgKz0gZWFybmluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC52YWx1ZXMoY2xlYW5lclN0YXRzKS5tYXAoKHN0YXRzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25SYXRlID0gc3RhdHMudG90YWxCb29raW5ncyA+IDBcclxuICAgICAgICA/IChzdGF0cy5jb21wbGV0ZWRCb29raW5ncyAvIHN0YXRzLnRvdGFsQm9va2luZ3MpICogMTAwXHJcbiAgICAgICAgOiAwO1xyXG4gICAgICBjb25zdCBvblRpbWVSYXRlID0gc3RhdHMuY29tcGxldGVkQm9va2luZ3MgPiAwXHJcbiAgICAgICAgPyAoc3RhdHMub25UaW1lQm9va2luZ3MgLyBzdGF0cy5jb21wbGV0ZWRCb29raW5ncykgKiAxMDBcclxuICAgICAgICA6IDA7XHJcbiAgICAgIGNvbnN0IGF2ZXJhZ2VSYXRpbmcgPSBzdGF0cy5yYXRpbmdzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHN0YXRzLnJhdGluZ3MucmVkdWNlKChzdW0sIHIpID0+IHN1bSArIHIsIDApIC8gc3RhdHMucmF0aW5ncy5sZW5ndGhcclxuICAgICAgICA6IDA7XHJcbiAgICAgIGNvbnN0IGF2ZXJhZ2VFYXJuaW5nc1BlckJvb2tpbmcgPSBzdGF0cy5jb21wbGV0ZWRCb29raW5ncyA+IDBcclxuICAgICAgICA/IHN0YXRzLnRvdGFsRWFybmluZ3MgLyBzdGF0cy5jb21wbGV0ZWRCb29raW5nc1xyXG4gICAgICAgIDogMDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYW5lcklkOiBzdGF0cy5jbGVhbmVySWQsXHJcbiAgICAgICAgY2xlYW5lck5hbWU6IHN0YXRzLmNsZWFuZXJOYW1lLFxyXG4gICAgICAgIHRvdGFsQm9va2luZ3M6IHN0YXRzLnRvdGFsQm9va2luZ3MsXHJcbiAgICAgICAgY29tcGxldGVkQm9va2luZ3M6IHN0YXRzLmNvbXBsZXRlZEJvb2tpbmdzLFxyXG4gICAgICAgIGNhbmNlbGxlZEJvb2tpbmdzOiBzdGF0cy5jYW5jZWxsZWRCb29raW5ncyxcclxuICAgICAgICBjb21wbGV0aW9uUmF0ZTogTWF0aC5yb3VuZChjb21wbGV0aW9uUmF0ZSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIG9uVGltZVJhdGU6IE1hdGgucm91bmQob25UaW1lUmF0ZSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIGF2ZXJhZ2VSYXRpbmc6IE1hdGgucm91bmQoYXZlcmFnZVJhdGluZyAqIDEwKSAvIDEwLFxyXG4gICAgICAgIHRvdGFsRWFybmluZ3M6IE1hdGgucm91bmQoc3RhdHMudG90YWxFYXJuaW5ncyAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgYXZlcmFnZUVhcm5pbmdzUGVyQm9va2luZzogTWF0aC5yb3VuZChhdmVyYWdlRWFybmluZ3NQZXJCb29raW5nICogMTAwKSAvIDEwMCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDbGVhbmVyUGVyZm9ybWFuY2VNZXRyaWNzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXIgcGVyZm9ybWFuY2UgbWV0cmljcycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0b3AgcGVyZm9ybWluZyBjbGVhbmVycyBieSB2YXJpb3VzIG1ldHJpY3NcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BQZXJmb3JtZXJzKGZpbHRlcj86IHtcclxuICBtZXRyaWM/OiAnY29tcGxldGlvblJhdGUnIHwgJ2Vhcm5pbmdzJyB8ICdib29raW5ncycgfCAncmF0aW5nJztcclxuICBsaW1pdD86IG51bWJlcjtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBtZXRyaWM6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICByYW5rOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGVyZm9ybWFuY2VSZXN1bHQgPSBhd2FpdCBnZXRDbGVhbmVyUGVyZm9ybWFuY2VNZXRyaWNzKHtcclxuICAgICAgZGF0ZUZyb206IGZpbHRlcj8uZGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogZmlsdGVyPy5kYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBlcmZvcm1hbmNlUmVzdWx0LnN1Y2Nlc3MgfHwgIXBlcmZvcm1hbmNlUmVzdWx0LmRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHBlcmZvcm1hbmNlIGRhdGEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWV0cmljID0gZmlsdGVyPy5tZXRyaWMgfHwgJ2Vhcm5pbmdzJztcclxuICAgIGNvbnN0IGxpbWl0ID0gZmlsdGVyPy5saW1pdCB8fCAxMDtcclxuXHJcbiAgICBsZXQgc29ydGVkID0gWy4uLnBlcmZvcm1hbmNlUmVzdWx0LmRhdGFdO1xyXG4gICAgaWYgKG1ldHJpYyA9PT0gJ2NvbXBsZXRpb25SYXRlJykge1xyXG4gICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gYi5jb21wbGV0aW9uUmF0ZSAtIGEuY29tcGxldGlvblJhdGUpO1xyXG4gICAgfSBlbHNlIGlmIChtZXRyaWMgPT09ICdlYXJuaW5ncycpIHtcclxuICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IGIudG90YWxFYXJuaW5ncyAtIGEudG90YWxFYXJuaW5ncyk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldHJpYyA9PT0gJ2Jvb2tpbmdzJykge1xyXG4gICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gYi50b3RhbEJvb2tpbmdzIC0gYS50b3RhbEJvb2tpbmdzKTtcclxuICAgIH0gZWxzZSBpZiAobWV0cmljID09PSAncmF0aW5nJykge1xyXG4gICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4gYi5hdmVyYWdlUmF0aW5nIC0gYS5hdmVyYWdlUmF0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBzb3J0ZWQuc2xpY2UoMCwgbGltaXQpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHZhbHVlOiBudW1iZXI7XHJcbiAgICAgIGlmIChtZXRyaWMgPT09ICdjb21wbGV0aW9uUmF0ZScpIHtcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0uY29tcGxldGlvblJhdGU7XHJcbiAgICAgIH0gZWxzZSBpZiAobWV0cmljID09PSAnZWFybmluZ3MnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLnRvdGFsRWFybmluZ3M7XHJcbiAgICAgIH0gZWxzZSBpZiAobWV0cmljID09PSAnYm9va2luZ3MnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLnRvdGFsQm9va2luZ3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmF2ZXJhZ2VSYXRpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYW5lcklkOiBpdGVtLmNsZWFuZXJJZCxcclxuICAgICAgICBjbGVhbmVyTmFtZTogaXRlbS5jbGVhbmVyTmFtZSxcclxuICAgICAgICBtZXRyaWM6IG1ldHJpYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldHJpYy5zbGljZSgxKSxcclxuICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgcmFuazogaW5kZXggKyAxLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFRvcFBlcmZvcm1lcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggdG9wIHBlcmZvcm1lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2xlYW5lciBlYXJuaW5ncyByZXBvcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmVyRWFybmluZ3NSZXBvcnQoZmlsdGVyPzoge1xyXG4gIGNsZWFuZXJJZD86IHN0cmluZztcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgcGVyaW9kPzogJ2RhaWx5JyB8ICd3ZWVrbHknIHwgJ21vbnRobHknO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgcGVyaW9kOiBzdHJpbmc7XHJcbiAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgIGNsZWFuZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlYXJuaW5nczogbnVtYmVyO1xyXG4gICAgYm9va2luZ3M6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VFYXJuaW5nczogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgcGVyaW9kID0gZmlsdGVyPy5wZXJpb2QgfHwgJ21vbnRobHknO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXJzXHJcbiAgICBsZXQgY2xlYW5lcnNRdWVyeSA9IHN1cGFiYXNlLmZyb20oJ2NsZWFuZXJzJykuc2VsZWN0KCdpZCwgbmFtZScpO1xyXG4gICAgaWYgKGZpbHRlcj8uY2xlYW5lcklkKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5LmVxKCdpZCcsIGZpbHRlci5jbGVhbmVySWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ3NcclxuICAgIGxldCBib29raW5nc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGNyZWF0ZWRfYXQsIHByZWZlcnJlZF9jbGVhbmVyX2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZHMsIHRvdGFsX2Ftb3VudCwgcGF5bWVudF9zdGF0dXMsIGNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLmVxKCdwYXltZW50X3N0YXR1cycsICdwYWlkJyk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3I6IGJvb2tpbmdzRXJyb3IgfSA9IGF3YWl0IGJvb2tpbmdzUXVlcnk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlYXJuaW5nc0J5UGVyaW9kOiB7IFtrZXk6IHN0cmluZ106IHsgW2NsZWFuZXJJZDogc3RyaW5nXTogeyBlYXJuaW5nczogbnVtYmVyOyBib29raW5nczogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB9IH0gPSB7fTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgbGV0IHBlcmlvZEtleTogc3RyaW5nO1xyXG4gICAgICBpZiAocGVyaW9kID09PSAnZGFpbHknKSB7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHdlZWtTdGFydC5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSk7XHJcbiAgICAgICAgcGVyaW9kS2V5ID0gd2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwZXJpb2RLZXkgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2xlYW5lcklkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgICBjbGVhbmVySWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFjbGVhbmVySWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBjbGVhbmVySWRzLnB1c2goaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCB0b3RhbEFtb3VudCA9IHJhd0Ftb3VudCA+PSAxMDAwMCA/IHJhd0Ftb3VudCAvIDEwMCA6IHJhd0Ftb3VudDtcclxuXHJcbiAgICAgIGNsZWFuZXJJZHMuZm9yRWFjaCgoY2xlYW5lcklkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xlYW5lciA9IGNsZWFuZXJzPy5maW5kKGMgPT4gYy5pZCA9PT0gY2xlYW5lcklkKTtcclxuICAgICAgICBpZiAoIWNsZWFuZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCFlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV0pIHtcclxuICAgICAgICAgIGVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVhcm5pbmdzQnlQZXJpb2RbcGVyaW9kS2V5XVtjbGVhbmVySWRdKSB7XHJcbiAgICAgICAgICBlYXJuaW5nc0J5UGVyaW9kW3BlcmlvZEtleV1bY2xlYW5lcklkXSA9IHtcclxuICAgICAgICAgICAgZWFybmluZ3M6IDAsXHJcbiAgICAgICAgICAgIGJvb2tpbmdzOiAwLFxyXG4gICAgICAgICAgICBuYW1lOiBjbGVhbmVyLm5hbWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVhcm5pbmdzID0gMDtcclxuICAgICAgICBpZiAoYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlICYmIHR5cGVvZiBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBjb25zdCBvdmVycmlkZSA9IGJvb2tpbmcuY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZVtjbGVhbmVySWRdO1xyXG4gICAgICAgICAgaWYgKG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGVhcm5pbmdzID0gb3ZlcnJpZGUudG90YWxFYXJuaW5ncyB8fCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlYXJuaW5ncyA9IHRvdGFsQW1vdW50ICogMC43OyAvLyBEZWZhdWx0IDcwJVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldW2NsZWFuZXJJZF0uZWFybmluZ3MgKz0gZWFybmluZ3M7XHJcbiAgICAgICAgZWFybmluZ3NCeVBlcmlvZFtwZXJpb2RLZXldW2NsZWFuZXJJZF0uYm9va2luZ3MgKz0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHtcclxuICAgICAgcGVyaW9kOiBzdHJpbmc7XHJcbiAgICAgIGNsZWFuZXJJZDogc3RyaW5nO1xyXG4gICAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgICBlYXJuaW5nczogbnVtYmVyO1xyXG4gICAgICBib29raW5nczogbnVtYmVyO1xyXG4gICAgICBhdmVyYWdlRWFybmluZ3M6IG51bWJlcjtcclxuICAgIH0+ID0gW107XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMoZWFybmluZ3NCeVBlcmlvZCkuZm9yRWFjaCgoW3BlcmlvZCwgY2xlYW5lckRhdGFdKSA9PiB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGNsZWFuZXJEYXRhKS5mb3JFYWNoKChbY2xlYW5lcklkLCBkYXRhXSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgIGNsZWFuZXJJZCxcclxuICAgICAgICAgIGNsZWFuZXJOYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBlYXJuaW5nczogTWF0aC5yb3VuZChkYXRhLmVhcm5pbmdzICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGJvb2tpbmdzOiBkYXRhLmJvb2tpbmdzLFxyXG4gICAgICAgICAgYXZlcmFnZUVhcm5pbmdzOiBkYXRhLmJvb2tpbmdzID4gMFxyXG4gICAgICAgICAgICA/IE1hdGgucm91bmQoKGRhdGEuZWFybmluZ3MgLyBkYXRhLmJvb2tpbmdzKSAqIDEwMCkgLyAxMDBcclxuICAgICAgICAgICAgOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDbGVhbmVyRWFybmluZ3NSZXBvcnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xlYW5lciBlYXJuaW5ncyByZXBvcnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2xlYW5lciBib29raW5nIHN0YXRpc3RpY3NcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmVyQm9va2luZ1N0YXRzKGZpbHRlcj86IHtcclxuICBjbGVhbmVySWQ/OiBzdHJpbmc7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgY2xlYW5lcklkOiBzdHJpbmc7XHJcbiAgICBjbGVhbmVyTmFtZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXJzXHJcbiAgICBsZXQgY2xlYW5lcnNRdWVyeSA9IHN1cGFiYXNlLmZyb20oJ2NsZWFuZXJzJykuc2VsZWN0KCdpZCwgbmFtZScpO1xyXG4gICAgaWYgKGZpbHRlcj8uY2xlYW5lcklkKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5LmVxKCdpZCcsIGZpbHRlci5jbGVhbmVySWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgaWYgKGNsZWFuZXJzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBjbGVhbmVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ3NcclxuICAgIGxldCBib29raW5nc1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnc3RhdHVzLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzLCBjcmVhdGVkX2F0JylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBib29raW5nc1F1ZXJ5O1xyXG5cclxuICAgIGlmIChib29raW5nc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYm9va2luZ3NFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHNCeUNsZWFuZXI6IHsgW2tleTogc3RyaW5nXTogeyBbc3RhdHVzOiBzdHJpbmddOiBudW1iZXI7IHRvdGFsOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9IH0gPSB7fTtcclxuXHJcbiAgICBjbGVhbmVycz8uZm9yRWFjaCgoY2xlYW5lcikgPT4ge1xyXG4gICAgICBzdGF0c0J5Q2xlYW5lcltjbGVhbmVyLmlkXSA9IHtcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBuYW1lOiBjbGVhbmVyLm5hbWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBjbGVhbmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGNsZWFuZXJJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMgJiYgQXJyYXkuaXNBcnJheShib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcykpIHtcclxuICAgICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWQgJiYgIWNsZWFuZXJJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGJvb2tpbmcuc3RhdHVzIHx8ICd1bmtub3duJztcclxuXHJcbiAgICAgIGNsZWFuZXJJZHMuZm9yRWFjaCgoY2xlYW5lcklkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0c0J5Q2xlYW5lcltjbGVhbmVySWRdKSByZXR1cm47XHJcbiAgICAgICAgc3RhdHNCeUNsZWFuZXJbY2xlYW5lcklkXS50b3RhbCArPSAxO1xyXG4gICAgICAgIHN0YXRzQnlDbGVhbmVyW2NsZWFuZXJJZF1bc3RhdHVzXSA9IChzdGF0c0J5Q2xlYW5lcltjbGVhbmVySWRdW3N0YXR1c10gfHwgMCkgKyAxO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8e1xyXG4gICAgICBjbGVhbmVySWQ6IHN0cmluZztcclxuICAgICAgY2xlYW5lck5hbWU6IHN0cmluZztcclxuICAgICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICAgIH0+ID0gW107XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMoc3RhdHNCeUNsZWFuZXIpLmZvckVhY2goKFtjbGVhbmVySWQsIHN0YXRzXSkgPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhzdGF0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3RvdGFsJyB8fCBrZXkgPT09ICduYW1lJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBzdGF0cy50b3RhbCA+IDAgPyAoY291bnQgLyBzdGF0cy50b3RhbCkgKiAxMDAgOiAwO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIGNsZWFuZXJJZCxcclxuICAgICAgICAgIGNsZWFuZXJOYW1lOiBzdGF0cy5uYW1lLFxyXG4gICAgICAgICAgc3RhdHVzOiBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSksXHJcbiAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6IE1hdGgucm91bmQocGVyY2VudGFnZSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRDbGVhbmVyQm9va2luZ1N0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXIgYm9va2luZyBzdGF0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ1VTVE9NRVIgQU5BTFlUSUNTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogR2V0IGN1c3RvbWVyIGxpZmV0aW1lIHZhbHVlIChDTFYpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJMaWZldGltZVZhbHVlKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBjdXN0b21lckVtYWlsOiBzdHJpbmc7XHJcbiAgICBjdXN0b21lck5hbWU6IHN0cmluZztcclxuICAgIHRvdGFsUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgdG90YWxCb29raW5nczogbnVtYmVyO1xyXG4gICAgYXZlcmFnZU9yZGVyVmFsdWU6IG51bWJlcjtcclxuICAgIGNsdjogbnVtYmVyO1xyXG4gICAgZmlyc3RCb29raW5nRGF0ZTogc3RyaW5nO1xyXG4gICAgbGFzdEJvb2tpbmdEYXRlOiBzdHJpbmc7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYXRlRnJvbSA9IGZpbHRlcj8uZGF0ZUZyb20gfHwgbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMSwgMCwgMSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZmlsdGVyPy5kYXRlVG8gfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGN1c3RvbWVyX2ZpcnN0X25hbWUsIGN1c3RvbWVyX2xhc3RfbmFtZSwgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cywgY3JlYXRlZF9hdCcpXHJcbiAgICAgIC5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLmx0ZSgnY3JlYXRlZF9hdCcsIGRhdGVUbyArICdUMjM6NTk6NTknKVxyXG4gICAgICAuZXEoJ3BheW1lbnRfc3RhdHVzJywgJ3BhaWQnKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbWVyRGF0YTogeyBbZW1haWw6IHN0cmluZ106IHtcclxuICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICByZXZlbnVlOiBudW1iZXI7XHJcbiAgICAgIGJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICAgIGZpcnN0Qm9va2luZzogc3RyaW5nO1xyXG4gICAgICBsYXN0Qm9va2luZzogc3RyaW5nO1xyXG4gICAgfSB9ID0ge307XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBpZiAoIWVtYWlsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCByYXdBbW91bnQgPSBib29raW5nLnRvdGFsX2Ftb3VudCB8fCAwO1xyXG4gICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcblxyXG4gICAgICBpZiAoIWN1c3RvbWVyRGF0YVtlbWFpbF0pIHtcclxuICAgICAgICBjdXN0b21lckRhdGFbZW1haWxdID0ge1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiBgJHtib29raW5nLmN1c3RvbWVyX2ZpcnN0X25hbWUgfHwgJyd9ICR7Ym9va2luZy5jdXN0b21lcl9sYXN0X25hbWUgfHwgJyd9YC50cmltKCkgfHwgZW1haWwsXHJcbiAgICAgICAgICByZXZlbnVlOiAwLFxyXG4gICAgICAgICAgYm9va2luZ3M6IDAsXHJcbiAgICAgICAgICBmaXJzdEJvb2tpbmc6IGJvb2tpbmcuY3JlYXRlZF9hdCB8fCAnJyxcclxuICAgICAgICAgIGxhc3RCb29raW5nOiBib29raW5nLmNyZWF0ZWRfYXQgfHwgJycsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VzdG9tZXJEYXRhW2VtYWlsXS5yZXZlbnVlICs9IGFtb3VudDtcclxuICAgICAgY3VzdG9tZXJEYXRhW2VtYWlsXS5ib29raW5ncyArPSAxO1xyXG5cclxuICAgICAgaWYgKGJvb2tpbmcuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGlmICghY3VzdG9tZXJEYXRhW2VtYWlsXS5maXJzdEJvb2tpbmcgfHwgYm9va2luZy5jcmVhdGVkX2F0IDwgY3VzdG9tZXJEYXRhW2VtYWlsXS5maXJzdEJvb2tpbmcpIHtcclxuICAgICAgICAgIGN1c3RvbWVyRGF0YVtlbWFpbF0uZmlyc3RCb29raW5nID0gYm9va2luZy5jcmVhdGVkX2F0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWN1c3RvbWVyRGF0YVtlbWFpbF0ubGFzdEJvb2tpbmcgfHwgYm9va2luZy5jcmVhdGVkX2F0ID4gY3VzdG9tZXJEYXRhW2VtYWlsXS5sYXN0Qm9va2luZykge1xyXG4gICAgICAgICAgY3VzdG9tZXJEYXRhW2VtYWlsXS5sYXN0Qm9va2luZyA9IGJvb2tpbmcuY3JlYXRlZF9hdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC52YWx1ZXMoY3VzdG9tZXJEYXRhKS5tYXAoKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFvdiA9IGN1c3RvbWVyLmJvb2tpbmdzID4gMCA/IGN1c3RvbWVyLnJldmVudWUgLyBjdXN0b21lci5ib29raW5ncyA6IDA7XHJcbiAgICAgIC8vIFNpbXBsZSBDTFYgY2FsY3VsYXRpb246IGF2ZXJhZ2Ugb3JkZXIgdmFsdWUgKiBhdmVyYWdlIHB1cmNoYXNlIGZyZXF1ZW5jeSAqIGN1c3RvbWVyIGxpZmVzcGFuXHJcbiAgICAgIC8vIEZvciBzaW1wbGljaXR5LCB1c2luZyB0b3RhbCByZXZlbnVlIGFzIENMViBwcm94eVxyXG4gICAgICBjb25zdCBjbHYgPSBjdXN0b21lci5yZXZlbnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjdXN0b21lckVtYWlsOiBjdXN0b21lci5lbWFpbCxcclxuICAgICAgICBjdXN0b21lck5hbWU6IGN1c3RvbWVyLm5hbWUsXHJcbiAgICAgICAgdG90YWxSZXZlbnVlOiBNYXRoLnJvdW5kKGN1c3RvbWVyLnJldmVudWUgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQm9va2luZ3M6IGN1c3RvbWVyLmJvb2tpbmdzLFxyXG4gICAgICAgIGF2ZXJhZ2VPcmRlclZhbHVlOiBNYXRoLnJvdW5kKGFvdiAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgY2x2OiBNYXRoLnJvdW5kKGNsdiAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgZmlyc3RCb29raW5nRGF0ZTogY3VzdG9tZXIuZmlyc3RCb29raW5nLFxyXG4gICAgICAgIGxhc3RCb29raW5nRGF0ZTogY3VzdG9tZXIubGFzdEJvb2tpbmcsXHJcbiAgICAgIH07XHJcbiAgICB9KS5zb3J0KChhLCBiKSA9PiBiLmNsdiAtIGEuY2x2KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJMaWZldGltZVZhbHVlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIGxpZmV0aW1lIHZhbHVlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGN1c3RvbWVyIHJldGVudGlvbiByYXRlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJSZXRlbnRpb25SYXRlKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7XHJcbiAgICByZXRlbnRpb25SYXRlOiBudW1iZXI7XHJcbiAgICBuZXdDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIHJldHVybmluZ0N1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgdG90YWxDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIHBlcmlvZEJyZWFrZG93bjogQXJyYXk8eyBwZXJpb2Q6IHN0cmluZzsgbmV3Q3VzdG9tZXJzOiBudW1iZXI7IHJldHVybmluZ0N1c3RvbWVyczogbnVtYmVyOyByZXRlbnRpb25SYXRlOiBudW1iZXIgfT47XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgYm9va2luZ3MgaW4gdGhlIHBlcmlvZFxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGNyZWF0ZWRfYXQnKVxyXG4gICAgICAuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pXHJcbiAgICAgIC5sdGUoJ2NyZWF0ZWRfYXQnLCBkYXRlVG8gKyAnVDIzOjU5OjU5JylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZmlyc3QgYm9va2luZyBkYXRlIGZvciBlYWNoIGN1c3RvbWVyIChiZWZvcmUgdGhlIHBlcmlvZClcclxuICAgIGNvbnN0IGZpcnN0Qm9va2luZ1F1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY3VzdG9tZXJfZW1haWwsIGNyZWF0ZWRfYXQnKVxyXG4gICAgICAubHQoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSlcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBmaXJzdEJvb2tpbmdzLCBlcnJvcjogZmlyc3RFcnJvciB9ID0gYXdhaXQgZmlyc3RCb29raW5nUXVlcnk7XHJcblxyXG4gICAgaWYgKGZpcnN0RXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBmaXJzdEVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdEJvb2tpbmdCeUN1c3RvbWVyOiB7IFtlbWFpbDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgIGZpcnN0Qm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBpZiAoZW1haWwgJiYgIWZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdKSB7XHJcbiAgICAgICAgZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0gPSBib29raW5nLmNyZWF0ZWRfYXQgfHwgJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbWVyc0luUGVyaW9kOiB7IFtlbWFpbDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBjb25zdCBuZXdDdXN0b21lcnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xyXG4gICAgY29uc3QgcmV0dXJuaW5nQ3VzdG9tZXJzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGJvb2tpbmcuY3VzdG9tZXJfZW1haWwgfHwgJyc7XHJcbiAgICAgIGlmICghZW1haWwpIHJldHVybjtcclxuXHJcbiAgICAgIGN1c3RvbWVyc0luUGVyaW9kW2VtYWlsXSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoZmlyc3RCb29raW5nQnlDdXN0b21lcltlbWFpbF0pIHtcclxuICAgICAgICByZXR1cm5pbmdDdXN0b21lcnMuYWRkKGVtYWlsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdDdXN0b21lcnMuYWRkKGVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG90YWxDdXN0b21lcnMgPSBPYmplY3Qua2V5cyhjdXN0b21lcnNJblBlcmlvZCkubGVuZ3RoO1xyXG4gICAgY29uc3QgbmV3Q291bnQgPSBuZXdDdXN0b21lcnMuc2l6ZTtcclxuICAgIGNvbnN0IHJldHVybmluZ0NvdW50ID0gcmV0dXJuaW5nQ3VzdG9tZXJzLnNpemU7XHJcbiAgICBjb25zdCByZXRlbnRpb25SYXRlID0gdG90YWxDdXN0b21lcnMgPiAwID8gKHJldHVybmluZ0NvdW50IC8gdG90YWxDdXN0b21lcnMpICogMTAwIDogMDtcclxuXHJcbiAgICAvLyBNb250aGx5IGJyZWFrZG93blxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogc3RyaW5nXTogeyBuZXc6IFNldDxzdHJpbmc+OyByZXR1cm5pbmc6IFNldDxzdHJpbmc+IH0gfSA9IHt9O1xyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgaWYgKCFib29raW5nLmNyZWF0ZWRfYXQpIHJldHVybjtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIGNvbnN0IG1vbnRoS2V5ID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWA7XHJcblxyXG4gICAgICBpZiAoIW1vbnRobHlEYXRhW21vbnRoS2V5XSkge1xyXG4gICAgICAgIG1vbnRobHlEYXRhW21vbnRoS2V5XSA9IHsgbmV3OiBuZXcgU2V0KCksIHJldHVybmluZzogbmV3IFNldCgpIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGVtYWlsID0gYm9va2luZy5jdXN0b21lcl9lbWFpbCB8fCAnJztcclxuICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKGZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdICYmIG5ldyBEYXRlKGZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdKSA8IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCkpIHtcclxuICAgICAgICBtb250aGx5RGF0YVttb250aEtleV0ucmV0dXJuaW5nLmFkZChlbWFpbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWZpcnN0Qm9va2luZ0J5Q3VzdG9tZXJbZW1haWxdKSB7XHJcbiAgICAgICAgbW9udGhseURhdGFbbW9udGhLZXldLm5ldy5hZGQoZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwZXJpb2RCcmVha2Rvd24gPSBPYmplY3QuZW50cmllcyhtb250aGx5RGF0YSlcclxuICAgICAgLnNvcnQoKVxyXG4gICAgICAubWFwKChbcGVyaW9kLCBkYXRhXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gZGF0YS5uZXcuc2l6ZSArIGRhdGEucmV0dXJuaW5nLnNpemU7XHJcbiAgICAgICAgY29uc3QgcmV0ZW50aW9uID0gdG90YWwgPiAwID8gKGRhdGEucmV0dXJuaW5nLnNpemUgLyB0b3RhbCkgKiAxMDAgOiAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgICBuZXdDdXN0b21lcnM6IGRhdGEubmV3LnNpemUsXHJcbiAgICAgICAgICByZXR1cm5pbmdDdXN0b21lcnM6IGRhdGEucmV0dXJuaW5nLnNpemUsXHJcbiAgICAgICAgICByZXRlbnRpb25SYXRlOiBNYXRoLnJvdW5kKHJldGVudGlvbiAqIDEwKSAvIDEwLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICByZXRlbnRpb25SYXRlOiBNYXRoLnJvdW5kKHJldGVudGlvblJhdGUgKiAxMCkgLyAxMCxcclxuICAgICAgICBuZXdDdXN0b21lcnM6IG5ld0NvdW50LFxyXG4gICAgICAgIHJldHVybmluZ0N1c3RvbWVyczogcmV0dXJuaW5nQ291bnQsXHJcbiAgICAgICAgdG90YWxDdXN0b21lcnMsXHJcbiAgICAgICAgcGVyaW9kQnJlYWtkb3duLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJSZXRlbnRpb25SYXRlOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIHJldGVudGlvbiByYXRlJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGN1c3RvbWVyIHNlZ21lbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyU2VnbWVudGF0aW9uKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBzZWdtZW50OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lckNvdW50OiBudW1iZXI7XHJcbiAgICB0b3RhbFJldmVudWU6IG51bWJlcjtcclxuICAgIGF2ZXJhZ2VSZXZlbnVlOiBudW1iZXI7XHJcbiAgICBwZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2x2UmVzdWx0ID0gYXdhaXQgZ2V0Q3VzdG9tZXJMaWZldGltZVZhbHVlKHtcclxuICAgICAgZGF0ZUZyb206IGZpbHRlcj8uZGF0ZUZyb20sXHJcbiAgICAgIGRhdGVUbzogZmlsdGVyPy5kYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWNsdlJlc3VsdC5zdWNjZXNzIHx8ICFjbHZSZXN1bHQuZGF0YSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgZGF0YScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21lcnMgPSBjbHZSZXN1bHQuZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IGN1c3RvbWVycy5yZWR1Y2UoKHN1bSwgYykgPT4gc3VtICsgYy50b3RhbFJldmVudWUsIDApO1xyXG4gICAgY29uc3QgYXZlcmFnZVJldmVudWUgPSBjdXN0b21lcnMubGVuZ3RoID4gMCA/IHRvdGFsUmV2ZW51ZSAvIGN1c3RvbWVycy5sZW5ndGggOiAwO1xyXG5cclxuICAgIC8vIFNlZ21lbnQgY3VzdG9tZXJzOiBIaWdoIFZhbHVlICg+MnggYXZnKSwgTWVkaXVtIFZhbHVlICgwLjV4LTJ4IGF2ZyksIExvdyBWYWx1ZSAoPDAuNXggYXZnKVxyXG4gICAgY29uc3Qgc2VnbWVudHMgPSB7XHJcbiAgICAgICdIaWdoIFZhbHVlJzogeyBjdXN0b21lcnM6IDAsIHJldmVudWU6IDAgfSxcclxuICAgICAgJ01lZGl1bSBWYWx1ZSc6IHsgY3VzdG9tZXJzOiAwLCByZXZlbnVlOiAwIH0sXHJcbiAgICAgICdMb3cgVmFsdWUnOiB7IGN1c3RvbWVyczogMCwgcmV2ZW51ZTogMCB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21lcnMuZm9yRWFjaCgoY3VzdG9tZXIpID0+IHtcclxuICAgICAgaWYgKGN1c3RvbWVyLnRvdGFsUmV2ZW51ZSA+PSBhdmVyYWdlUmV2ZW51ZSAqIDIpIHtcclxuICAgICAgICBzZWdtZW50c1snSGlnaCBWYWx1ZSddLmN1c3RvbWVycyArPSAxO1xyXG4gICAgICAgIHNlZ21lbnRzWydIaWdoIFZhbHVlJ10ucmV2ZW51ZSArPSBjdXN0b21lci50b3RhbFJldmVudWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VzdG9tZXIudG90YWxSZXZlbnVlID49IGF2ZXJhZ2VSZXZlbnVlICogMC41KSB7XHJcbiAgICAgICAgc2VnbWVudHNbJ01lZGl1bSBWYWx1ZSddLmN1c3RvbWVycyArPSAxO1xyXG4gICAgICAgIHNlZ21lbnRzWydNZWRpdW0gVmFsdWUnXS5yZXZlbnVlICs9IGN1c3RvbWVyLnRvdGFsUmV2ZW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWdtZW50c1snTG93IFZhbHVlJ10uY3VzdG9tZXJzICs9IDE7XHJcbiAgICAgICAgc2VnbWVudHNbJ0xvdyBWYWx1ZSddLnJldmVudWUgKz0gY3VzdG9tZXIudG90YWxSZXZlbnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhzZWdtZW50cykubWFwKChbc2VnbWVudCwgZGF0YV0pID0+ICh7XHJcbiAgICAgIHNlZ21lbnQsXHJcbiAgICAgIGN1c3RvbWVyQ291bnQ6IGRhdGEuY3VzdG9tZXJzLFxyXG4gICAgICB0b3RhbFJldmVudWU6IE1hdGgucm91bmQoZGF0YS5yZXZlbnVlICogMTAwKSAvIDEwMCxcclxuICAgICAgYXZlcmFnZVJldmVudWU6IGRhdGEuY3VzdG9tZXJzID4gMCA/IE1hdGgucm91bmQoKGRhdGEucmV2ZW51ZSAvIGRhdGEuY3VzdG9tZXJzKSAqIDEwMCkgLyAxMDAgOiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiBjdXN0b21lcnMubGVuZ3RoID4gMCA/IE1hdGgucm91bmQoKGRhdGEuY3VzdG9tZXJzIC8gY3VzdG9tZXJzLmxlbmd0aCkgKiAxMDAgKiAxMCkgLyAxMCA6IDAsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1c3RvbWVyU2VnbWVudGF0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIHNlZ21lbnRhdGlvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCByZXBlYXQgY3VzdG9tZXIgcmF0ZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcGVhdEN1c3RvbWVyUmF0ZShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzoge1xyXG4gICAgcmVwZWF0Q3VzdG9tZXJSYXRlOiBudW1iZXI7XHJcbiAgICB0b3RhbEN1c3RvbWVyczogbnVtYmVyO1xyXG4gICAgcmVwZWF0Q3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICBvbmVUaW1lQ3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgfTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgIGNvbnN0IGRhdGVUbyA9IGZpbHRlcj8uZGF0ZVRvIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2N1c3RvbWVyX2VtYWlsJylcclxuICAgICAgLmd0ZSgnY3JlYXRlZF9hdCcsIGRhdGVGcm9tKVxyXG4gICAgICAubHRlKCdjcmVhdGVkX2F0JywgZGF0ZVRvICsgJ1QyMzo1OTo1OScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJCb29raW5nQ291bnRzOiB7IFtlbWFpbDogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGJvb2tpbmcuY3VzdG9tZXJfZW1haWwgfHwgJyc7XHJcbiAgICAgIGlmIChlbWFpbCkge1xyXG4gICAgICAgIGN1c3RvbWVyQm9va2luZ0NvdW50c1tlbWFpbF0gPSAoY3VzdG9tZXJCb29raW5nQ291bnRzW2VtYWlsXSB8fCAwKSArIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsQ3VzdG9tZXJzID0gT2JqZWN0LmtleXMoY3VzdG9tZXJCb29raW5nQ291bnRzKS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXBlYXRDdXN0b21lcnMgPSBPYmplY3QudmFsdWVzKGN1c3RvbWVyQm9va2luZ0NvdW50cykuZmlsdGVyKGNvdW50ID0+IGNvdW50ID4gMSkubGVuZ3RoO1xyXG4gICAgY29uc3Qgb25lVGltZUN1c3RvbWVycyA9IHRvdGFsQ3VzdG9tZXJzIC0gcmVwZWF0Q3VzdG9tZXJzO1xyXG4gICAgY29uc3QgcmVwZWF0Q3VzdG9tZXJSYXRlID0gdG90YWxDdXN0b21lcnMgPiAwID8gKHJlcGVhdEN1c3RvbWVycyAvIHRvdGFsQ3VzdG9tZXJzKSAqIDEwMCA6IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlcGVhdEN1c3RvbWVyUmF0ZTogTWF0aC5yb3VuZChyZXBlYXRDdXN0b21lclJhdGUgKiAxMCkgLyAxMCxcclxuICAgICAgICB0b3RhbEN1c3RvbWVycyxcclxuICAgICAgICByZXBlYXRDdXN0b21lcnMsXHJcbiAgICAgICAgb25lVGltZUN1c3RvbWVycyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJlcGVhdEN1c3RvbWVyUmF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCByZXBlYXQgY3VzdG9tZXIgcmF0ZScsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjdXN0b21lciBhY3F1aXNpdGlvbiBjb3N0IChzaW1wbGlmaWVkIC0gd291bGQgbmVlZCBtYXJrZXRpbmcgc3BlbmQgZGF0YSlcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lckFjcXVpc2l0aW9uQ29zdChmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzoge1xyXG4gICAgbmV3Q3VzdG9tZXJzOiBudW1iZXI7XHJcbiAgICBlc3RpbWF0ZWRDQUM6IG51bWJlcjtcclxuICAgIG5vdGU6IHN0cmluZztcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJldGVudGlvblJlc3VsdCA9IGF3YWl0IGdldEN1c3RvbWVyUmV0ZW50aW9uUmF0ZSh7XHJcbiAgICAgIGRhdGVGcm9tOiBmaWx0ZXI/LmRhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IGZpbHRlcj8uZGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXRlbnRpb25SZXN1bHQuc3VjY2VzcyB8fCAhcmV0ZW50aW9uUmVzdWx0LmRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGN1c3RvbWVyIGRhdGEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3Q3VzdG9tZXJzID0gcmV0ZW50aW9uUmVzdWx0LmRhdGEubmV3Q3VzdG9tZXJzO1xyXG5cclxuICAgIC8vIE5vdGU6IFRoaXMgaXMgYSBwbGFjZWhvbGRlci4gUmVhbCBDQUMgd291bGQgcmVxdWlyZSBtYXJrZXRpbmcgc3BlbmQgZGF0YVxyXG4gICAgLy8gRm9yIG5vdywgd2UnbGwgcmV0dXJuIGEgbm90ZSBleHBsYWluaW5nIHRoaXNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuZXdDdXN0b21lcnMsXHJcbiAgICAgICAgZXN0aW1hdGVkQ0FDOiAwLFxyXG4gICAgICAgIG5vdGU6ICdDQUMgY2FsY3VsYXRpb24gcmVxdWlyZXMgbWFya2V0aW5nIHNwZW5kIGRhdGEuIFBsZWFzZSBpbnRlZ3JhdGUgbWFya2V0aW5nIGNvc3QgdHJhY2tpbmcgdG8gY2FsY3VsYXRlIGFjY3VyYXRlIENBQy4nLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJBY3F1aXNpdGlvbkNvc3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3VzdG9tZXIgYWNxdWlzaXRpb24gY29zdCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ09NUEFSQVRJVkUgQU5BTFlUSUNTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQ29tcGFyZSBjdXJyZW50IHBlcmlvZCB3aXRoIHByZXZpb3VzIHBlcmlvZFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBlcmlvZENvbXBhcmlzb24oZmlsdGVyPzoge1xyXG4gIHBlcmlvZD86ICdkYWlseScgfCAnd2Vla2x5JyB8ICdtb250aGx5JyB8ICd5ZWFybHknO1xyXG4gIGN1cnJlbnREYXRlRnJvbT86IHN0cmluZztcclxuICBjdXJyZW50RGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzoge1xyXG4gICAgbWV0cmljOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50OiBudW1iZXI7XHJcbiAgICBwcmV2aW91czogbnVtYmVyO1xyXG4gICAgY2hhbmdlOiBudW1iZXI7XHJcbiAgICBjaGFuZ2VQZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgfVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgY29uc3QgcGVyaW9kID0gZmlsdGVyPy5wZXJpb2QgfHwgJ21vbnRobHknO1xyXG5cclxuICAgIGxldCBjdXJyZW50RGF0ZUZyb206IHN0cmluZztcclxuICAgIGxldCBjdXJyZW50RGF0ZVRvOiBzdHJpbmc7XHJcbiAgICBsZXQgcHJldmlvdXNEYXRlRnJvbTogc3RyaW5nO1xyXG4gICAgbGV0IHByZXZpb3VzRGF0ZVRvOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGlmIChwZXJpb2QgPT09ICdkYWlseScpIHtcclxuICAgICAgY3VycmVudERhdGVUbyA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGN1cnJlbnREYXRlRnJvbSA9IGN1cnJlbnREYXRlVG87XHJcbiAgICAgIGNvbnN0IHByZXZEYXRlID0gbmV3IERhdGUobm93KTtcclxuICAgICAgcHJldkRhdGUuc2V0RGF0ZShwcmV2RGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICAgICAgcHJldmlvdXNEYXRlVG8gPSBwcmV2RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIHByZXZpb3VzRGF0ZUZyb20gPSBwcmV2aW91c0RhdGVUbztcclxuICAgIH0gZWxzZSBpZiAocGVyaW9kID09PSAnd2Vla2x5Jykge1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShub3cpO1xyXG4gICAgICB3ZWVrU3RhcnQuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gbm93LmdldERheSgpKTtcclxuICAgICAgY3VycmVudERhdGVUbyA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGN1cnJlbnREYXRlRnJvbSA9IHdlZWtTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGNvbnN0IHByZXZXZWVrU3RhcnQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xyXG4gICAgICBwcmV2V2Vla1N0YXJ0LnNldERhdGUocHJldldlZWtTdGFydC5nZXREYXRlKCkgLSA3KTtcclxuICAgICAgY29uc3QgcHJldldlZWtFbmQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xyXG4gICAgICBwcmV2V2Vla0VuZC5zZXREYXRlKHByZXZXZWVrRW5kLmdldERhdGUoKSAtIDEpO1xyXG4gICAgICBwcmV2aW91c0RhdGVUbyA9IHByZXZXZWVrRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgcHJldmlvdXNEYXRlRnJvbSA9IHByZXZXZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgfSBlbHNlIGlmIChwZXJpb2QgPT09ICdtb250aGx5Jykge1xyXG4gICAgICBjb25zdCBtb250aFN0YXJ0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKTtcclxuICAgICAgY3VycmVudERhdGVUbyA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIGN1cnJlbnREYXRlRnJvbSA9IG1vbnRoU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjb25zdCBwcmV2TW9udGhTdGFydCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIDEsIDEpO1xyXG4gICAgICBjb25zdCBwcmV2TW9udGhFbmQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIDApO1xyXG4gICAgICBwcmV2aW91c0RhdGVUbyA9IHByZXZNb250aEVuZC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgIHByZXZpb3VzRGF0ZUZyb20gPSBwcmV2TW9udGhTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgIGN1cnJlbnREYXRlVG8gPSBub3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjdXJyZW50RGF0ZUZyb20gPSB5ZWFyU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBjb25zdCBwcmV2WWVhclN0YXJ0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCkgLSAxLCAwLCAxKTtcclxuICAgICAgY29uc3QgcHJldlllYXJFbmQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSAtIDEsIDExLCAzMSk7XHJcbiAgICAgIHByZXZpb3VzRGF0ZVRvID0gcHJldlllYXJFbmQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICBwcmV2aW91c0RhdGVGcm9tID0gcHJldlllYXJTdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnJpZGUgd2l0aCBwcm92aWRlZCBkYXRlcyBpZiBhdmFpbGFibGVcclxuICAgIGlmIChmaWx0ZXI/LmN1cnJlbnREYXRlRnJvbSkgY3VycmVudERhdGVGcm9tID0gZmlsdGVyLmN1cnJlbnREYXRlRnJvbTtcclxuICAgIGlmIChmaWx0ZXI/LmN1cnJlbnREYXRlVG8pIGN1cnJlbnREYXRlVG8gPSBmaWx0ZXIuY3VycmVudERhdGVUbztcclxuXHJcbiAgICAvLyBHZXQgY3VycmVudCBwZXJpb2Qgc3RhdHNcclxuICAgIGNvbnN0IGN1cnJlbnRTdGF0c1Jlc3VsdCA9IGF3YWl0IGdldEFkbWluU3RhdHMoe1xyXG4gICAgICBkYXRlRnJvbTogY3VycmVudERhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IGN1cnJlbnREYXRlVG8sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgcHJldmlvdXMgcGVyaW9kIHN0YXRzXHJcbiAgICBjb25zdCBwcmV2aW91c1N0YXRzUmVzdWx0ID0gYXdhaXQgZ2V0QWRtaW5TdGF0cyh7XHJcbiAgICAgIGRhdGVGcm9tOiBwcmV2aW91c0RhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IHByZXZpb3VzRGF0ZVRvLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50U3RhdHNSZXN1bHQuc3VjY2VzcyB8fCAhcHJldmlvdXNTdGF0c1Jlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjb21wYXJpc29uIGRhdGEnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRTdGF0c1Jlc3VsdC5zdGF0cyB8fCB7fTtcclxuICAgIGNvbnN0IHByZXZpb3VzID0gcHJldmlvdXNTdGF0c1Jlc3VsdC5zdGF0cyB8fCB7fTtcclxuXHJcbiAgICBjb25zdCBtZXRyaWNzID0gW1xyXG4gICAgICB7IGtleTogJ3RvdGFsUmV2ZW51ZScsIGxhYmVsOiAnVG90YWwgUmV2ZW51ZScgfSxcclxuICAgICAgeyBrZXk6ICd0b3RhbEJvb2tpbmdzJywgbGFiZWw6ICdUb3RhbCBCb29raW5ncycgfSxcclxuICAgICAgeyBrZXk6ICd0b3RhbEN1c3RvbWVycycsIGxhYmVsOiAnVG90YWwgQ3VzdG9tZXJzJyB9LFxyXG4gICAgICB7IGtleTogJ2FjdGl2ZUJvb2tpbmdzJywgbGFiZWw6ICdBY3RpdmUgQm9va2luZ3MnIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1ldHJpY3MubWFwKCh7IGtleSwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV0gfHwgMDtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzW2tleV0gfHwgMDtcclxuICAgICAgY29uc3QgY2hhbmdlID0gY3VycmVudFZhbHVlIC0gcHJldmlvdXNWYWx1ZTtcclxuICAgICAgY29uc3QgY2hhbmdlUGVyY2VudGFnZSA9IHByZXZpb3VzVmFsdWUgPiAwID8gKGNoYW5nZSAvIHByZXZpb3VzVmFsdWUpICogMTAwIDogKGN1cnJlbnRWYWx1ZSA+IDAgPyAxMDAgOiAwKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWV0cmljOiBsYWJlbCxcclxuICAgICAgICBjdXJyZW50OiBNYXRoLnJvdW5kKGN1cnJlbnRWYWx1ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgcHJldmlvdXM6IE1hdGgucm91bmQocHJldmlvdXNWYWx1ZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgY2hhbmdlOiBNYXRoLnJvdW5kKGNoYW5nZSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgY2hhbmdlUGVyY2VudGFnZTogTWF0aC5yb3VuZChjaGFuZ2VQZXJjZW50YWdlICogMTApIC8gMTAsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0UGVyaW9kQ29tcGFyaXNvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBwZXJpb2QgY29tcGFyaXNvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB5ZWFyLW92ZXIteWVhciBncm93dGhcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRZZWFyT3ZlclllYXJHcm93dGgoZmlsdGVyPzoge1xyXG4gIHllYXI/OiBudW1iZXI7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiBBcnJheTx7XHJcbiAgICBtb250aDogc3RyaW5nO1xyXG4gICAgY3VycmVudFllYXI6IG51bWJlcjtcclxuICAgIHByZXZpb3VzWWVhcjogbnVtYmVyO1xyXG4gICAgZ3Jvd3RoOiBudW1iZXI7XHJcbiAgICBncm93dGhQZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBmaWx0ZXI/LnllYXIgfHwgbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBjdXJyZW50WWVhciAtIDE7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgeWVhciBtb250aGx5IGRhdGFcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyRGF0YSA9IGF3YWl0IGdldFJldmVudWVUcmVuZHMoe1xyXG4gICAgICBkYXRlRnJvbTogYCR7Y3VycmVudFllYXJ9LTAxLTAxYCxcclxuICAgICAgZGF0ZVRvOiBgJHtjdXJyZW50WWVhcn0tMTItMzFgLFxyXG4gICAgICBwZXJpb2Q6ICdtb250aGx5JyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBwcmV2aW91cyB5ZWFyIG1vbnRobHkgZGF0YVxyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyRGF0YSA9IGF3YWl0IGdldFJldmVudWVUcmVuZHMoe1xyXG4gICAgICBkYXRlRnJvbTogYCR7cHJldmlvdXNZZWFyfS0wMS0wMWAsXHJcbiAgICAgIGRhdGVUbzogYCR7cHJldmlvdXNZZWFyfS0xMi0zMWAsXHJcbiAgICAgIHBlcmlvZDogJ21vbnRobHknLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50WWVhckRhdGEuc3VjY2VzcyB8fCAhcHJldmlvdXNZZWFyRGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCB5ZWFyLW92ZXIteWVhciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50WWVhckRhdGEuZGF0YSB8fCBbXTtcclxuICAgIGNvbnN0IHByZXZpb3VzID0gcHJldmlvdXNZZWFyRGF0YS5kYXRhIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IG1vbnRocyA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXTtcclxuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBgJHtjdXJyZW50WWVhcn0tJHttb250aH1gO1xyXG4gICAgICBjb25zdCBwcmV2aW91c1BlcmlvZCA9IGAke3ByZXZpb3VzWWVhcn0tJHttb250aH1gO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudERhdGEgPSBjdXJyZW50LmZpbmQoZCA9PiBkLnBlcmlvZCA9PT0gY3VycmVudFBlcmlvZCk7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IHByZXZpb3VzLmZpbmQoZCA9PiBkLnBlcmlvZCA9PT0gcHJldmlvdXNQZXJpb2QpO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFJldmVudWUgPSBjdXJyZW50RGF0YT8ucmV2ZW51ZSB8fCAwO1xyXG4gICAgICBjb25zdCBwcmV2aW91c1JldmVudWUgPSBwcmV2aW91c0RhdGE/LnJldmVudWUgfHwgMDtcclxuICAgICAgY29uc3QgZ3Jvd3RoID0gY3VycmVudFJldmVudWUgLSBwcmV2aW91c1JldmVudWU7XHJcbiAgICAgIGNvbnN0IGdyb3d0aFBlcmNlbnRhZ2UgPSBwcmV2aW91c1JldmVudWUgPiAwID8gKGdyb3d0aCAvIHByZXZpb3VzUmV2ZW51ZSkgKiAxMDAgOiAoY3VycmVudFJldmVudWUgPiAwID8gMTAwIDogMCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1vbnRoOiBtb250aE5hbWVzW2luZGV4XSxcclxuICAgICAgICBjdXJyZW50WWVhcjogTWF0aC5yb3VuZChjdXJyZW50UmV2ZW51ZSksXHJcbiAgICAgICAgcHJldmlvdXNZZWFyOiBNYXRoLnJvdW5kKHByZXZpb3VzUmV2ZW51ZSksXHJcbiAgICAgICAgZ3Jvd3RoOiBNYXRoLnJvdW5kKGdyb3d0aCksXHJcbiAgICAgICAgZ3Jvd3RoUGVyY2VudGFnZTogTWF0aC5yb3VuZChncm93dGhQZXJjZW50YWdlICogMTApIC8gMTAsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0WWVhck92ZXJZZWFyR3Jvd3RoOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHllYXItb3Zlci15ZWFyIGdyb3d0aCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHR5cGUgcGVyZm9ybWFuY2UgY29tcGFyaXNvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZpY2VUeXBlQ29tcGFyaXNvbihmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG59KTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBkYXRhPzogQXJyYXk8e1xyXG4gICAgc2VydmljZVR5cGU6IHN0cmluZztcclxuICAgIHJldmVudWU6IG51bWJlcjtcclxuICAgIGJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBhdmVyYWdlUmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgZ3Jvd3RoOiBudW1iZXI7XHJcbiAgICBncm93dGhQZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgfT47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBmaWx0ZXI/LmRhdGVGcm9tIHx8IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBkYXRlVG8gPSBmaWx0ZXI/LmRhdGVUbyB8fCBub3cudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBwcmV2aW91cyBwZXJpb2RcclxuICAgIGNvbnN0IGN1cnJlbnRTdGFydCA9IG5ldyBEYXRlKGRhdGVGcm9tKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbmQgPSBuZXcgRGF0ZShkYXRlVG8pO1xyXG4gICAgY29uc3QgcGVyaW9kRGF5cyA9IE1hdGguY2VpbCgoY3VycmVudEVuZC5nZXRUaW1lKCkgLSBjdXJyZW50U3RhcnQuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBjb25zdCBwcmV2aW91c1N0YXJ0ID0gbmV3IERhdGUoY3VycmVudFN0YXJ0KTtcclxuICAgIHByZXZpb3VzU3RhcnQuc2V0RGF0ZShwcmV2aW91c1N0YXJ0LmdldERhdGUoKSAtIHBlcmlvZERheXMgLSAxKTtcclxuICAgIGNvbnN0IHByZXZpb3VzRW5kID0gbmV3IERhdGUoY3VycmVudFN0YXJ0KTtcclxuICAgIHByZXZpb3VzRW5kLnNldERhdGUocHJldmlvdXNFbmQuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgcGVyaW9kIHNlcnZpY2UgcmV2ZW51ZVxyXG4gICAgY29uc3QgY3VycmVudFJlc3VsdCA9IGF3YWl0IGdldFJldmVudWVCeVNlcnZpY2VUeXBlKHtcclxuICAgICAgZGF0ZUZyb206IGRhdGVGcm9tLFxyXG4gICAgICBkYXRlVG86IGRhdGVUbyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCBwcmV2aW91cyBwZXJpb2Qgc2VydmljZSByZXZlbnVlXHJcbiAgICBjb25zdCBwcmV2aW91c1Jlc3VsdCA9IGF3YWl0IGdldFJldmVudWVCeVNlcnZpY2VUeXBlKHtcclxuICAgICAgZGF0ZUZyb206IHByZXZpb3VzU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxyXG4gICAgICBkYXRlVG86IHByZXZpb3VzRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY3VycmVudFJlc3VsdC5zdWNjZXNzIHx8ICFwcmV2aW91c1Jlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHR5cGUgY29tcGFyaXNvbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50ID0gY3VycmVudFJlc3VsdC5kYXRhIHx8IFtdO1xyXG4gICAgY29uc3QgcHJldmlvdXMgPSBwcmV2aW91c1Jlc3VsdC5kYXRhIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGN1cnJlbnQubWFwKChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0l0ZW0gPSBwcmV2aW91cy5maW5kKHAgPT4gcC5zZXJ2aWNlVHlwZSA9PT0gY3VycmVudEl0ZW0uc2VydmljZVR5cGUpO1xyXG4gICAgICBjb25zdCBwcmV2aW91c1JldmVudWUgPSBwcmV2aW91c0l0ZW0/LnJldmVudWUgfHwgMDtcclxuICAgICAgY29uc3QgZ3Jvd3RoID0gY3VycmVudEl0ZW0ucmV2ZW51ZSAtIHByZXZpb3VzUmV2ZW51ZTtcclxuICAgICAgY29uc3QgZ3Jvd3RoUGVyY2VudGFnZSA9IHByZXZpb3VzUmV2ZW51ZSA+IDAgPyAoZ3Jvd3RoIC8gcHJldmlvdXNSZXZlbnVlKSAqIDEwMCA6IChjdXJyZW50SXRlbS5yZXZlbnVlID4gMCA/IDEwMCA6IDApO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZXJ2aWNlVHlwZTogY3VycmVudEl0ZW0uc2VydmljZVR5cGUsXHJcbiAgICAgICAgcmV2ZW51ZTogY3VycmVudEl0ZW0ucmV2ZW51ZSxcclxuICAgICAgICBib29raW5nczogY3VycmVudEl0ZW0uYm9va2luZ3MsXHJcbiAgICAgICAgYXZlcmFnZVJldmVudWU6IGN1cnJlbnRJdGVtLmJvb2tpbmdzID4gMCA/IE1hdGgucm91bmQoKGN1cnJlbnRJdGVtLnJldmVudWUgLyBjdXJyZW50SXRlbS5ib29raW5ncykgKiAxMDApIC8gMTAwIDogMCxcclxuICAgICAgICBncm93dGg6IE1hdGgucm91bmQoZ3Jvd3RoKSxcclxuICAgICAgICBncm93dGhQZXJjZW50YWdlOiBNYXRoLnJvdW5kKGdyb3d0aFBlcmNlbnRhZ2UgKiAxMCkgLyAxMCxcclxuICAgICAgfTtcclxuICAgIH0pLnNvcnQoKGEsIGIpID0+IGIucmV2ZW51ZSAtIGEucmV2ZW51ZSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFNlcnZpY2VUeXBlQ29tcGFyaXNvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHR5cGUgY29tcGFyaXNvbicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgY3VzdG9tZXJzIHdpdGggdGhlaXIgY3JlZGl0IGJhbGFuY2VzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ3VzdG9tZXJzV2l0aENyZWRpdHMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcnM/OiAoUHJvZmlsZSAmIHsgY3JlZGl0X2JhbGFuY2U6IG51bWJlciB9KVtdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJyosIGNyZWRpdF9iYWxhbmNlJylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjdXN0b21lcnMgd2l0aCBjcmVkaXRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJzID0gKGRhdGEgfHwgW10pLm1hcCgoY3VzdG9tZXIpID0+ICh7XHJcbiAgICAgIC4uLmN1c3RvbWVyLFxyXG4gICAgICBjcmVkaXRfYmFsYW5jZTogY3VzdG9tZXIuY3JlZGl0X2JhbGFuY2UgfHwgMCxcclxuICAgIH0pKSBhcyAoUHJvZmlsZSAmIHsgY3JlZGl0X2JhbGFuY2U6IG51bWJlciB9KVtdO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGN1c3RvbWVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRBbGxDdXN0b21lcnNXaXRoQ3JlZGl0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lcnMgd2l0aCBjcmVkaXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNyZWRpdCB0cmFuc2FjdGlvbnMgZm9yIGEgY3VzdG9tZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lckNyZWRpdFRyYW5zYWN0aW9ucyhcclxuICBjdXN0b21lcklkOiBzdHJpbmcsXHJcbiAgbGltaXQ6IG51bWJlciA9IDUwLFxyXG4gIG9mZnNldDogbnVtYmVyID0gMFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHRyYW5zYWN0aW9ucz86IGFueVtdO1xyXG4gIHRvdGFsPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXN0b21lciBlbWFpbCBmaXJzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3I6IGN1c3RvbWVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2VtYWlsJylcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoY3VzdG9tZXJFcnJvciB8fCAhY3VzdG9tZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ3VzdG9tZXIgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0cmFuc2FjdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogdHJhbnNhY3Rpb25zLCBlcnJvcjogdHJhbnNhY3Rpb25zRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjcmVkaXRfdHJhbnNhY3Rpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgncHJvZmlsZV9pZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAucmFuZ2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCAtIDEpO1xyXG5cclxuICAgIGlmICh0cmFuc2FjdGlvbnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjcmVkaXQgdHJhbnNhY3Rpb25zOicsIHRyYW5zYWN0aW9uc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB0cmFuc2FjdGlvbnNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRvdGFsIGNvdW50XHJcbiAgICBjb25zdCB7IGNvdW50LCBlcnJvcjogY291bnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NyZWRpdF90cmFuc2FjdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJywgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxyXG4gICAgICAuZXEoJ3Byb2ZpbGVfaWQnLCBjdXN0b21lcklkKTtcclxuXHJcbiAgICBpZiAoY291bnRFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb3VudGluZyB0cmFuc2FjdGlvbnM6JywgY291bnRFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnMgfHwgW10sXHJcbiAgICAgIHRvdGFsOiBjb3VudCB8fCAwLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Q3VzdG9tZXJDcmVkaXRUcmFuc2FjdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY3JlZGl0IHRyYW5zYWN0aW9ucycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG9jYXRlIGNyZWRpdHMgdG8gYSBjdXN0b21lciAoYWRkIGNyZWRpdHMpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWxsb2NhdGVDcmVkaXRzVG9DdXN0b21lcihcclxuICBjdXN0b21lcklkOiBzdHJpbmcsXHJcbiAgYW1vdW50OiBudW1iZXIsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB0cmFuc2FjdGlvbklkPzogc3RyaW5nO1xyXG4gIG5ld0JhbGFuY2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBjdXN0b21lciBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3I6IGN1c3RvbWVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2VtYWlsLCBjcmVkaXRfYmFsYW5jZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbWVyRXJyb3IgfHwgIWN1c3RvbWVyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbWVyIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIGFkZF9jcmVkaXRzIFJQQyBmdW5jdGlvblxyXG4gICAgY29uc3QgeyBkYXRhOiB0cmFuc2FjdGlvbklkLCBlcnJvcjogcnBjRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnYWRkX2NyZWRpdHMnLCB7XHJcbiAgICAgIHBfZW1haWw6IGN1c3RvbWVyLmVtYWlsLFxyXG4gICAgICBwX2Ftb3VudDogYW1vdW50LFxyXG4gICAgICBwX3RyYW5zYWN0aW9uX3R5cGU6ICdhZG1pbl9hbGxvY2F0aW9uJyxcclxuICAgICAgcF9kZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfHwgYEFkbWluIGNyZWRpdCBhbGxvY2F0aW9uOiBSJHthbW91bnQudG9GaXhlZCgyKX1gLFxyXG4gICAgICBwX21ldGFkYXRhOiB7XHJcbiAgICAgICAgYWRtaW5faWQ6IGFkbWluUmVzdWx0LmFkbWluPy5pZCxcclxuICAgICAgICBhZG1pbl9lbWFpbDogYWRtaW5SZXN1bHQuYWRtaW4/LmVtYWlsLFxyXG4gICAgICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcklkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJwY0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsbG9jYXRpbmcgY3JlZGl0czonLCBycGNFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogcnBjRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB1cGRhdGVkIGJhbGFuY2VcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEN1c3RvbWVyLCBlcnJvcjogYmFsYW5jZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVkaXRfYmFsYW5jZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2VFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1cGRhdGVkIGJhbGFuY2U6JywgYmFsYW5jZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2FjdGlvbklkOiB0cmFuc2FjdGlvbklkPy50b1N0cmluZygpLFxyXG4gICAgICBuZXdCYWxhbmNlOiB1cGRhdGVkQ3VzdG9tZXI/LmNyZWRpdF9iYWxhbmNlIHx8IGN1c3RvbWVyLmNyZWRpdF9iYWxhbmNlICsgYW1vdW50LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWxsb2NhdGVDcmVkaXRzVG9DdXN0b21lcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBhbGxvY2F0ZSBjcmVkaXRzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2V0IGN1c3RvbWVyIGNyZWRpdHMgdG8gYW4gYWJzb2x1dGUgdmFsdWVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRDdXN0b21lckNyZWRpdHMoXHJcbiAgY3VzdG9tZXJJZDogc3RyaW5nLFxyXG4gIHRhcmdldEJhbGFuY2U6IG51bWJlcixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgbmV3QmFsYW5jZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXRCYWxhbmNlIDwgMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCYWxhbmNlIGNhbm5vdCBiZSBuZWdhdGl2ZScgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1cnJlbnQgYmFsYW5jZVxyXG4gICAgY29uc3QgeyBkYXRhOiBjdXN0b21lciwgZXJyb3I6IGN1c3RvbWVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5zZWxlY3QoJ2VtYWlsLCBjcmVkaXRfYmFsYW5jZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbWVyRXJyb3IgfHwgIWN1c3RvbWVyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbWVyIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50QmFsYW5jZSA9IGN1c3RvbWVyLmNyZWRpdF9iYWxhbmNlIHx8IDA7XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdGFyZ2V0QmFsYW5jZSAtIGN1cnJlbnRCYWxhbmNlO1xyXG5cclxuICAgIC8vIElmIGJhbGFuY2UgaXMgYWxyZWFkeSBhdCB0YXJnZXQsIHJldHVybiBzdWNjZXNzXHJcbiAgICBpZiAoTWF0aC5hYnMoZGlmZmVyZW5jZSkgPCAwLjAxKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBuZXdCYWxhbmNlOiB0YXJnZXRCYWxhbmNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSB0aGUgYWRkX2NyZWRpdHMgUlBDIGZ1bmN0aW9uIHdpdGggdGhlIGRpZmZlcmVuY2VcclxuICAgIGNvbnN0IHsgZGF0YTogdHJhbnNhY3Rpb25JZCwgZXJyb3I6IHJwY0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ2FkZF9jcmVkaXRzJywge1xyXG4gICAgICBwX2VtYWlsOiBjdXN0b21lci5lbWFpbCxcclxuICAgICAgcF9hbW91bnQ6IGRpZmZlcmVuY2UsXHJcbiAgICAgIHBfdHJhbnNhY3Rpb25fdHlwZTogJ2FkbWluX2FkanVzdG1lbnQnLFxyXG4gICAgICBwX2Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBgQWRtaW4gY3JlZGl0IGFkanVzdG1lbnQ6IFNldCB0byBSJHt0YXJnZXRCYWxhbmNlLnRvRml4ZWQoMil9YCxcclxuICAgICAgcF9tZXRhZGF0YToge1xyXG4gICAgICAgIGFkbWluX2lkOiBhZG1pblJlc3VsdC5hZG1pbj8uaWQsXHJcbiAgICAgICAgYWRtaW5fZW1haWw6IGFkbWluUmVzdWx0LmFkbWluPy5lbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJJZCxcclxuICAgICAgICBhZGp1c3RtZW50X3R5cGU6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdGFyZ2V0X2JhbGFuY2U6IHRhcmdldEJhbGFuY2UsXHJcbiAgICAgICAgcHJldmlvdXNfYmFsYW5jZTogY3VycmVudEJhbGFuY2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocnBjRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyBjcmVkaXRzOicsIHJwY0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBycGNFcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNhY3Rpb25JZD8udG9TdHJpbmcoKSxcclxuICAgICAgbmV3QmFsYW5jZTogdGFyZ2V0QmFsYW5jZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHNldEN1c3RvbWVyQ3JlZGl0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBzZXQgY3JlZGl0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkanVzdCBjdXN0b21lciBjcmVkaXRzIChhZGQgb3Igc3VidHJhY3QpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRqdXN0Q3VzdG9tZXJDcmVkaXRzKFxyXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcclxuICBhZGp1c3RtZW50QW1vdW50OiBudW1iZXIsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB0cmFuc2FjdGlvbklkPzogc3RyaW5nO1xyXG4gIG5ld0JhbGFuY2U/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWRqdXN0bWVudEFtb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBZGp1c3RtZW50IGFtb3VudCBjYW5ub3QgYmUgemVybycgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGN1c3RvbWVyIGVtYWlsIGFuZCBjdXJyZW50IGJhbGFuY2VcclxuICAgIGNvbnN0IHsgZGF0YTogY3VzdG9tZXIsIGVycm9yOiBjdXN0b21lckVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdlbWFpbCwgY3JlZGl0X2JhbGFuY2UnKVxyXG4gICAgICAuZXEoJ2lkJywgY3VzdG9tZXJJZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChjdXN0b21lckVycm9yIHx8ICFjdXN0b21lcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDdXN0b21lciBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJhbGFuY2UgPSBjdXN0b21lci5jcmVkaXRfYmFsYW5jZSB8fCAwO1xyXG4gICAgY29uc3QgbmV3QmFsYW5jZSA9IGN1cnJlbnRCYWxhbmNlICsgYWRqdXN0bWVudEFtb3VudDtcclxuXHJcbiAgICBpZiAobmV3QmFsYW5jZSA8IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogYEluc3VmZmljaWVudCBjcmVkaXRzLiBDdXJyZW50IGJhbGFuY2U6IFIke2N1cnJlbnRCYWxhbmNlLnRvRml4ZWQoMil9LCBhZGp1c3RtZW50OiBSJHthZGp1c3RtZW50QW1vdW50LnRvRml4ZWQoMil9YCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIGFkZF9jcmVkaXRzIFJQQyBmdW5jdGlvblxyXG4gICAgY29uc3QgeyBkYXRhOiB0cmFuc2FjdGlvbklkLCBlcnJvcjogcnBjRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnYWRkX2NyZWRpdHMnLCB7XHJcbiAgICAgIHBfZW1haWw6IGN1c3RvbWVyLmVtYWlsLFxyXG4gICAgICBwX2Ftb3VudDogYWRqdXN0bWVudEFtb3VudCxcclxuICAgICAgcF90cmFuc2FjdGlvbl90eXBlOiAnYWRtaW5fYWRqdXN0bWVudCcsXHJcbiAgICAgIHBfZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8IGBBZG1pbiBjcmVkaXQgYWRqdXN0bWVudDogJHthZGp1c3RtZW50QW1vdW50ID49IDAgPyAnKycgOiAnJ31SJHthZGp1c3RtZW50QW1vdW50LnRvRml4ZWQoMil9YCxcclxuICAgICAgcF9tZXRhZGF0YToge1xyXG4gICAgICAgIGFkbWluX2lkOiBhZG1pblJlc3VsdC5hZG1pbj8uaWQsXHJcbiAgICAgICAgYWRtaW5fZW1haWw6IGFkbWluUmVzdWx0LmFkbWluPy5lbWFpbCxcclxuICAgICAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJJZCxcclxuICAgICAgICBhZGp1c3RtZW50X3R5cGU6ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYWRqdXN0bWVudF9hbW91bnQ6IGFkanVzdG1lbnRBbW91bnQsXHJcbiAgICAgICAgcHJldmlvdXNfYmFsYW5jZTogY3VycmVudEJhbGFuY2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocnBjRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRqdXN0aW5nIGNyZWRpdHM6JywgcnBjRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJwY0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdXBkYXRlZCBiYWxhbmNlIHRvIGNvbmZpcm1cclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEN1c3RvbWVyLCBlcnJvcjogYmFsYW5jZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVkaXRfYmFsYW5jZScpXHJcbiAgICAgIC5lcSgnaWQnLCBjdXN0b21lcklkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2VFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1cGRhdGVkIGJhbGFuY2U6JywgYmFsYW5jZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2FjdGlvbklkOiB0cmFuc2FjdGlvbklkPy50b1N0cmluZygpLFxyXG4gICAgICBuZXdCYWxhbmNlOiB1cGRhdGVkQ3VzdG9tZXI/LmNyZWRpdF9iYWxhbmNlIHx8IG5ld0JhbGFuY2UsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhZGp1c3RDdXN0b21lckNyZWRpdHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYWRqdXN0IGNyZWRpdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkF3Q3NCLDRMQUFBIn0=
}),
"[project]/app/admin/components/AdminSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$ec433e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:ec433e [app-client] (ecmascript) <text/javascript>");
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
;
const menuItems = [
    {
        title: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"],
        href: '/admin'
    },
    {
        title: 'Manage Clients',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/users'
    },
    {
        title: 'Manage Providers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        href: '/admin/create-cleaner'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        href: '/admin/bookings'
    },
    {
        title: 'Services',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        href: '/admin/settings'
    },
    {
        title: 'Reports',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        href: '/admin/reports'
    },
    {
        title: 'Discount Codes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        href: '/admin/discount-codes'
    },
    {
        title: 'Manage Transactions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        href: '/admin/payments'
    },
    {
        title: 'ShaleanCred Management',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        href: '/admin/shaleancred'
    }
];
function AdminSidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminSidebar.useEffect": ()=>{
            const loadAdminProfile = {
                "AdminSidebar.useEffect.loadAdminProfile": async ()=>{
                    try {
                        const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$ec433e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
                        if (adminResult.success && adminResult.admin) {
                            setAdmin(adminResult.admin);
                        }
                    } catch (error) {
                        console.error('Error loading admin profile:', error);
                    }
                }
            }["AdminSidebar.useEffect.loadAdminProfile"];
            loadAdminProfile();
        }
    }["AdminSidebar.useEffect"], []);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
        className: "!top-16 !h-[calc(100vh-4rem)] bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                            className: "space-y-1",
                            children: menuItems.map((item, index)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "!w-5 !h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                className: "border-t border-sidebar-border p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "lg",
                    className: "w-full justify-start",
                    onClick: handleLogout,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "!w-6 !h-6 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/components/AdminSidebar.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(AdminSidebar, "5LhpF2k2G70Za7paiW7csiGwojg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
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
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
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
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
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
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
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
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notifications/data:6e5291 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotifications",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1":"getNotifications"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("604a497a04f05efcb11f4e8a9d3ae8b946c7792ff1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNotifications");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FtR3NCLDZMQUFBIn0=
}),
"[project]/app/notifications/data:62e83a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUnreadCount",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40413e7f909489684c9bcc1668a76d1b32f129be8d":"getUnreadCount"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40413e7f909489684c9bcc1668a76d1b32f129be8d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUnreadCount");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFpS3NCLDJMQUFBIn0=
}),
"[project]/app/notifications/data:7c9f33 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markAsRead",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"601f2dae89943fdd7ad4e92320842554fcff41980d":"markAsRead"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("601f2dae89943fdd7ad4e92320842554fcff41980d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAsRead");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkE0TnNCLHVMQUFBIn0=
}),
"[project]/app/notifications/data:4e4fad [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markAllAsRead",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401b62d8bda24466c2f55521a8a9fced9394cbf750":"markAllAsRead"},"app/notifications/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401b62d8bda24466c2f55521a8a9fced9394cbf750", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAllAsRead");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdXNlciBpcyBhbiBhZG1pbiAoc2FtZSBsb2dpYyBhcyBhZG1pbiBhY3Rpb25zKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcl9pZD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl9lbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICByZWFkOiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICB1cGRhdGVkX2F0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zIHtcclxuICB1c2VyX2lkPzogc3RyaW5nO1xyXG4gIHVzZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgdXNlcl90eXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgZGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKHBhcmFtczogQ3JlYXRlTm90aWZpY2F0aW9uUGFyYW1zKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb247XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyYW1zLnVzZXJfaWQgfHwgbnVsbCxcclxuICAgICAgICB1c2VyX2VtYWlsOiBwYXJhbXMudXNlcl9lbWFpbCB8fCBudWxsLFxyXG4gICAgICAgIHVzZXJfdHlwZTogcGFyYW1zLnVzZXJfdHlwZSxcclxuICAgICAgICB0eXBlOiBwYXJhbXMudHlwZSxcclxuICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIHJlYWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb246IGRhdGEgYXMgTm90aWZpY2F0aW9uIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNyZWF0ZU5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgbm90aWZpY2F0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5vdGlmaWNhdGlvbnMgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgdXNlclR5cGU6ICdhZG1pbicgfCAnY3VzdG9tZXInIHwgJ2NsZWFuZXInLFxyXG4gIGxpbWl0OiBudW1iZXIgPSA1MFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnM/OiBOb3RpZmljYXRpb25bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciBhZG1pbiwgdXNlIGFkbWluIGNsaWVudCB0byBieXBhc3MgUkxTIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgcXVlcnlTdXBhYmFzZSA9IHVzZXJUeXBlID09PSAnYWRtaW4nICYmIGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSlcclxuICAgICAgPyBjcmVhdGVBZG1pbkNsaWVudCgpXHJcbiAgICAgIDogc3VwYWJhc2U7XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgYmFzZWQgb24gdXNlciB0eXBlXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQobGltaXQpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICAvLyBBZG1pbiBjYW4gc2VlIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIG9yIHRoZWlyIHNwZWNpZmljIG9uZXNcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBub3RpZmljYXRpb25zOiAoZGF0YSB8fCBbXSkgYXMgTm90aWZpY2F0aW9uW10gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0Tm90aWZpY2F0aW9uczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVucmVhZCBub3RpZmljYXRpb24gY291bnQgZm9yIGN1cnJlbnQgdXNlclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVucmVhZENvdW50KFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSBiYXNlZCBvbiB1c2VyIHR5cGVcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcsIHsgY291bnQ6ICdleGFjdCcsIGhlYWQ6IHRydWUgfSlcclxuICAgICAgLmVxKCd1c2VyX3R5cGUnLCB1c2VyVHlwZSlcclxuICAgICAgLmVxKCdyZWFkJywgZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvciBjdXN0b21lcnMgYW5kIGNsZWFuZXJzLCBtYXRjaCBieSB1c2VyX2lkIG9yIGVtYWlsXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIC8vIEZvciBhZG1pbiwgbWF0Y2ggYnkgZW1haWwgKG9yIGFsbCBhZG1pbiBub3RpZmljYXRpb25zIGlmIGVtYWlsIHBhdHRlcm4gbWF0Y2hlcylcclxuICAgICAgaWYgKGlzQWRtaW5Vc2VyKHVzZXIuZW1haWwsIHVzZXIudXNlcl9tZXRhZGF0YSkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2VtYWlsLmVxLiR7dXNlci5lbWFpbH0sdXNlcl9lbWFpbC5pcy5udWxsYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgndXNlcl9lbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bnJlYWQgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogY291bnQgfHwgMCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRVbnJlYWRDb3VudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB1bnJlYWQgY291bnQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIG5vdGlmaWNhdGlvbihzKSBhcyByZWFkXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChcclxuICBub3RpZmljYXRpb25JZHM6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25JZHMpID8gbm90aWZpY2F0aW9uSWRzIDogW25vdGlmaWNhdGlvbklkc107XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBlbnN1cmUgdXNlciBjYW4gb25seSBtYXJrIHRoZWlyIG93biBub3RpZmljYXRpb25zIGFzIHJlYWRcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3VwYWJhc2VcclxuICAgICAgLmZyb20oJ25vdGlmaWNhdGlvbnMnKVxyXG4gICAgICAudXBkYXRlKHsgcmVhZDogdHJ1ZSwgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpXHJcbiAgICAgIC5pbignaWQnLCBpZHMpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBpZiAoaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkub3IoYHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfSx1c2VyX2VtYWlsLmlzLm51bGxgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhcyByZWFkJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFyayBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkIGZvciBjdXJyZW50IHVzZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrQWxsQXNSZWFkKFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGFkbWluLCB1c2UgYWRtaW4gY2xpZW50IHRvIGJ5cGFzcyBSTFMgaWYgbmVlZGVkXHJcbiAgICBjb25zdCBxdWVyeVN1cGFiYXNlID0gdXNlclR5cGUgPT09ICdhZG1pbicgJiYgaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKVxyXG4gICAgICA/IGNyZWF0ZUFkbWluQ2xpZW50KClcclxuICAgICAgOiBzdXBhYmFzZTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB0byBtYXJrIGFsbCB1bnJlYWQgbm90aWZpY2F0aW9ucyBhcyByZWFkXHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdub3RpZmljYXRpb25zJylcclxuICAgICAgLnVwZGF0ZSh7IHJlYWQ6IHRydWUsIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgICAuZXEoJ3VzZXJfdHlwZScsIHVzZXJUeXBlKVxyXG4gICAgICAuZXEoJ3JlYWQnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gQWRkIHVzZXIgbWF0Y2hpbmcgY29uZGl0aW9uXHJcbiAgICBpZiAodXNlclR5cGUgPT09ICdjdXN0b21lcicgfHwgdXNlclR5cGUgPT09ICdjbGVhbmVyJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5Lm9yKGB1c2VyX2lkLmVxLiR7dXNlci5pZH0sdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJUeXBlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIGlmIChpc0FkbWluVXNlcih1c2VyLmVtYWlsLCB1c2VyLnVzZXJfbWV0YWRhdGEpKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9lbWFpbC5lcS4ke3VzZXIuZW1haWx9LHVzZXJfZW1haWwuaXMubnVsbGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3VzZXJfZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXJraW5nIGFsbCBub3RpZmljYXRpb25zIGFzIHJlYWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtBbGxBc1JlYWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gbWFyayBhbGwgYXMgcmVhZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBhIG5vdGlmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvbihcclxuICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gIHVzZXJUeXBlOiAnYWRtaW4nIHwgJ2N1c3RvbWVyJyB8ICdjbGVhbmVyJ1xyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgcXVlcnkgdG8gZW5zdXJlIHVzZXIgY2FuIG9ubHkgZGVsZXRlIHRoZWlyIG93biBub3RpZmljYXRpb25zXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbm90aWZpY2F0aW9ucycpXHJcbiAgICAgIC5kZWxldGUoKVxyXG4gICAgICAuZXEoJ2lkJywgbm90aWZpY2F0aW9uSWQpXHJcbiAgICAgIC5lcSgndXNlcl90eXBlJywgdXNlclR5cGUpO1xyXG5cclxuICAgIC8vIEFkZCB1c2VyIG1hdGNoaW5nIGNvbmRpdGlvblxyXG4gICAgaWYgKHVzZXJUeXBlID09PSAnY3VzdG9tZXInIHx8IHVzZXJUeXBlID09PSAnY2xlYW5lcicpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5vcihgdXNlcl9pZC5lcS4ke3VzZXIuaWR9LHVzZXJfZW1haWwuZXEuJHt1c2VyLmVtYWlsfWApO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyVHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCd1c2VyX2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlTm90aWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBub3RpZmljYXRpb24nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkF3UnNCLDBMQUFBIn0=
}),
"[project]/src/components/NotificationBell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationBell",
    ()=>NotificationBell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$6e5291__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:6e5291 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$62e83a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:62e83a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$7c9f33__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:7c9f33 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$4e4fad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/notifications/data:4e4fad [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.mjs [app-client] (ecmascript)");
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch notifications
    const { data: notifications, isLoading, error: notificationsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'notifications',
            userType
        ],
        queryFn: {
            "NotificationBell.useQuery": async ()=>{
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$6e5291__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNotifications"])(userType);
                if (!result.success) {
                    console.error('Error fetching notifications:', result.error);
                    return [];
                }
                return result.notifications || [];
            }
        }["NotificationBell.useQuery"],
        refetchInterval: 30000,
        staleTime: 10000,
        retry: 1
    });
    // Fetch unread count
    const { data: unreadCount, error: unreadCountError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'notifications-unread',
            userType
        ],
        queryFn: {
            "NotificationBell.useQuery": async ()=>{
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$62e83a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUnreadCount"])(userType);
                if (!result.success) {
                    console.error('Error fetching unread count:', result.error);
                    return 0;
                }
                return result.count || 0;
            }
        }["NotificationBell.useQuery"],
        refetchInterval: 30000,
        staleTime: 10000,
        retry: 1
    });
    // Set mounted state on client side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            setMounted(true);
        }
    }["NotificationBell.useEffect"], []);
    // Set up real-time subscription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            if (!mounted) return;
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const channel = supabase.channel('notifications').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'notifications',
                filter: `user_type=eq.${userType}`
            }, {
                "NotificationBell.useEffect.channel": (payload)=>{
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
                }
            }["NotificationBell.useEffect.channel"]).subscribe();
            return ({
                "NotificationBell.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], [
        userType,
        queryClient,
        mounted
    ]);
    const handleNotificationClick = async (notification)=>{
        // Mark as read
        if (!notification.read) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$7c9f33__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAsRead"])(notification.id, userType);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notifications$2f$data$3a$4e4fad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAllAsRead"])(userType);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "relative",
            disabled: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotificationBell.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationBell.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "end",
                className: "w-[380px] p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationBell.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            unreadCount && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleMarkAllAsRead,
                                className: "h-7 px-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "h-[400px]",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                        }, this) : notifications && notifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y",
                            children: [
                                unreadNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        unreadNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-4 cursor-pointer hover:bg-muted/50 transition-colors', !notification.read && 'bg-muted/30'),
                                                onClick: ()=>handleNotificationClick(notification),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 mt-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground mt-1 line-clamp-2",
                                                                    children: notification.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground mt-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(notification.created_at), {
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
                                        readNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2 bg-muted/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                readNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 cursor-pointer hover:bg-muted/50 transition-colors",
                                        onClick: ()=>handleNotificationClick(notification),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-muted-foreground",
                                                            children: notification.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mt-1 line-clamp-2",
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationBell.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(notification.created_at), {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-12 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "h-12 w-12 text-muted-foreground/50 mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationBell.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(NotificationBell, "/2UgYgXf1V3JcjLAfFYJ5y4mBHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotificationBell;
var _c;
__turbopack_context__.k.register(_c, "NotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/components/AdminHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminHeader",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$ec433e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:ec433e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationBell.tsx [app-client] (ecmascript)");
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
;
function AdminHeader() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userInitials, setUserInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminHeader.useEffect": ()=>{
            setMounted(true);
            const loadAdminProfile = {
                "AdminHeader.useEffect.loadAdminProfile": async ()=>{
                    try {
                        const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$ec433e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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
                }
            }["AdminHeader.useEffect.loadAdminProfile"];
            loadAdminProfile();
            // Listen for auth changes
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: { subscription } } = supabase.auth.onAuthStateChange({
                "AdminHeader.useEffect": async ()=>{
                    // Reload admin profile when auth state changes
                    await loadAdminProfile();
                }
            }["AdminHeader.useEffect"]);
            return ({
                "AdminHeader.useEffect": ()=>subscription.unsubscribe()
            })["AdminHeader.useEffect"];
        }
    }["AdminHeader.useEffect"], []);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
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
                className: "flex items-center flex-shrink-0 mr-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 md:gap-3 ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationBell"], {
                        userType: "admin"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "flex items-center gap-2 h-auto p-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-9 w-9 md:h-10 md:w-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block text-left",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        children: admin?.name || 'Admin Account'
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    admin?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-xs text-muted-foreground font-normal",
                                        children: admin.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminHeader.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "relative h-9 w-9 md:h-10 md:w-10 rounded-full",
                        disabled: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "h-9 w-9 md:h-10 md:w-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
_s(AdminHeader, "0CB4anmn2xY4cjc+aQ91uxqvF/4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminHeader;
var _c;
__turbopack_context__.k.register(_c, "AdminHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/components/AdminMobileBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminMobileBottomNav",
    ()=>AdminMobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
const navItems = [
    {
        title: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        href: '/admin'
    },
    {
        title: 'Users',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/users'
    },
    {
        title: 'Bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/admin/bookings'
    },
    {
        title: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        href: '/admin/settings'
    }
];
const moreMenuItems = [
    {
        title: 'Reports',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        href: '/admin/reports'
    },
    {
        title: 'Discount Codes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        href: '/admin/discount-codes'
    },
    {
        title: 'Create Cleaner',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        href: '/admin/create-cleaner'
    }
];
function AdminMobileBottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.auth.signOut();
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to sign out');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed out successfully');
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An error occurred while signing out');
        }
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
                            const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMoreMenuOpen(true),
                            className: `flex flex-col items-center justify-center gap-1 transition-colors ${isMoreMenuOpen ? 'text-primary' : 'text-muted-foreground active:text-foreground'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                            lineNumber: 124,
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
                                            children: "Shalean Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMoreMenuOpen(false),
                                            className: "p-2 rounded-md hover:bg-muted transition-colors",
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: moreMenuItems.map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = pathname === item.href || item.href !== '/admin' && pathname.startsWith(item.href);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMenuItemClick(item.href),
                                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-light text-primary' : 'hover:bg-muted text-foreground'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                fileName: "[project]/app/admin/components/AdminMobileBottomNav.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(AdminMobileBottomNav, "G2FuM4Yo2bkbkhovLv2Q+iuPlq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminMobileBottomNav;
var _c;
__turbopack_context__.k.register(_c, "AdminMobileBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/(dashboard)/layout-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLayoutClient",
    ()=>AdminLayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminMobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/components/AdminMobileBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function AdminLayoutClient({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col overflow-x-hidden pt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminHeader"], {}, void 0, false, {
                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminSidebar"], {}, void 0, false, {
                            fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarInset"], {
                            className: "flex flex-col overflow-x-hidden w-full min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/app/admin/(dashboard)/layout-client.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "flex-1 p-4 md:p-6 pb-20 md:pb-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "hidden md:block border-t bg-muted/30 py-4 px-4 md:px-6 w-full min-w-0 overflow-x-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$components$2f$AdminMobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminMobileBottomNav"], {}, void 0, false, {
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
_c = AdminLayoutClient;
var _c;
__turbopack_context__.k.register(_c, "AdminLayoutClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9d9a2bc8._.js.map