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
"[project]/app/admin/data:df00de [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVBZG1pbkNsaWVudCB9IGZyb20gJ0AvbGliL3N1cGFiYXNlL3NlcnZlci1hZG1pbic7XHJcbmltcG9ydCB7IEJvb2tpbmcsIENsZWFuZXJVcGRhdGVJbnB1dCB9IGZyb20gJ0AvdHlwZXMvYm9va2luZyc7XHJcbmltcG9ydCB7IENsZWFuZXIgfSBmcm9tICdAL3R5cGVzL2Jvb2tpbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBQcm9maWxlVXBkYXRlSW5wdXQgfSBmcm9tICdAL3R5cGVzL3Byb2ZpbGUnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHVzZXIgaXMgYW4gYWRtaW5cclxuICogQWRtaW5zIGFyZSBpZGVudGlmaWVkIGJ5IGVtYWlsIHBhdHRlcm46ICpAYWRtaW4uc2hhbGVhbi5sb2NhbFxyXG4gKiBvciB1c2VyIG1ldGFkYXRhIHdpdGggcm9sZTogJ2FkbWluJ1xyXG4gKi9cclxuZnVuY3Rpb24gaXNBZG1pblVzZXIoZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgdXNlck1ldGFkYXRhPzogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gIC8vIENoZWNrIGVtYWlsIHBhdHRlcm5cclxuICBpZiAoZW1haWwuaW5jbHVkZXMoJ0BhZG1pbi5zaGFsZWFuLmxvY2FsJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBDaGVjayB1c2VyIG1ldGFkYXRhXHJcbiAgaWYgKHVzZXJNZXRhZGF0YT8ucm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhcmRjb2RlZCBhZG1pbiBlbWFpbHMgKGZhbGxiYWNrKVxyXG4gIGNvbnN0IGFkbWluRW1haWxzID0gW1xyXG4gICAgJ2FkbWluQHNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQGFkbWluLnNoYWxlYW4ubG9jYWwnLFxyXG4gICAgJ2FkbWluQHNoYWxlYW4uY29tJyxcclxuICBdO1xyXG4gIFxyXG4gIHJldHVybiBhZG1pbkVtYWlscy5pbmNsdWRlcyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjdXJyZW50IGF1dGhlbnRpY2F0ZWQgYWRtaW5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50QWRtaW4oKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZG1pbj86IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9LCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuXHJcbiAgICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgYWRtaW5cclxuICAgIGlmICghaXNBZG1pblVzZXIodXNlci5lbWFpbCwgdXNlci51c2VyX21ldGFkYXRhKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYW4gYWRtaW4gdXNlcicgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBhZG1pbjoge1xyXG4gICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsISxcclxuICAgICAgICBuYW1lOiB1c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWUgfHwgdXNlci5lbWFpbD8uc3BsaXQoJ0AnKVswXSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEN1cnJlbnRBZG1pbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBnZXQgYWRtaW4nLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRoZW50aWNhdGUgYWRtaW4gKHNlcnZlci1zaWRlKVxyXG4gKiBOb3RlOiBBY3R1YWwgYXV0aGVudGljYXRpb24gaGFwcGVucyBjbGllbnQtc2lkZSwgdGhpcyBqdXN0IHZlcmlmaWVzIHRoZSByZXN1bHRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVBZG1pbihcclxuICBlbWFpbDogc3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBhZG1pbj86IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIGVtYWlsIG1hdGNoZXMgYWRtaW4gcGF0dGVyblxyXG4gICAgaWYgKCFpc0FkbWluVXNlcihlbWFpbCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGFuIGFkbWluIGVtYWlsJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1dGhlbnRpY2F0aW9uIGhhcHBlbnMgY2xpZW50LXNpZGUsIHRoaXMgaXMganVzdCB2YWxpZGF0aW9uXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoUGFzc3dvcmQoe1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IgfHwgIWRhdGEudXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGFkbWluOiB7XHJcbiAgICAgICAgaWQ6IGRhdGEudXNlci5pZCxcclxuICAgICAgICBlbWFpbDogZGF0YS51c2VyLmVtYWlsISxcclxuICAgICAgICBuYW1lOiBkYXRhLnVzZXIudXNlcl9tZXRhZGF0YT8ubmFtZSB8fCBkYXRhLnVzZXIuZW1haWw/LnNwbGl0KCdAJylbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhdXRoZW50aWNhdGVBZG1pbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhZG1pbiBzdGF0aXN0aWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRtaW5TdGF0cyhmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICB0b3RhbEJvb2tpbmdzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVCb29raW5nczogbnVtYmVyO1xyXG4gICAgdG90YWxSZXZlbnVlOiBudW1iZXI7XHJcbiAgICBtb250aGx5UmV2ZW51ZTogbnVtYmVyO1xyXG4gICAgdG90YWxDdXN0b21lcnM6IG51bWJlcjtcclxuICAgIHRvdGFsQ2xlYW5lcnM6IG51bWJlcjtcclxuICAgIGFjdGl2ZUNsZWFuZXJzOiBudW1iZXI7XHJcbiAgICBjb21wbGV0aW9uUmF0ZTogbnVtYmVyO1xyXG4gIH07XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgYm9va2luZ3MgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgYm9va2luZ3NRdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3N0YXR1cywgdG90YWxfYW1vdW50LCBwYXltZW50X3N0YXR1cywgc2VydmljZV9kYXRlLCBjcmVhdGVkX2F0LCBzZXJ2aWNlX3R5cGUnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBib29raW5nc1F1ZXJ5ID0gYm9va2luZ3NRdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgIGJvb2tpbmdzUXVlcnkgPSBib29raW5nc1F1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgYm9va2luZ3NRdWVyeSA9IGJvb2tpbmdzUXVlcnkuZXEoJ3NlcnZpY2VfdHlwZScsIGZpbHRlci5zZXJ2aWNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmdzLCBlcnJvcjogYm9va2luZ3NFcnJvciB9ID0gYXdhaXQgYm9va2luZ3NRdWVyeTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29raW5nczonLCBib29raW5nc0Vycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYWxsIGN1c3RvbWVycyAocHJvZmlsZXMpXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVycywgZXJyb3I6IGN1c3RvbWVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdpZCcpO1xyXG5cclxuICAgIGlmIChjdXN0b21lcnNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjdXN0b21lcnM6JywgY3VzdG9tZXJzRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGN1c3RvbWVyc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYWxsIGNsZWFuZXJzXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvcjogY2xlYW5lcnNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2NsZWFuZXJzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIGlzX2FjdGl2ZScpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuZXJzOicsIGNsZWFuZXJzRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGNsZWFuZXJzRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgY29uc3QgYWxsQm9va2luZ3MgPSBib29raW5ncyB8fCBbXTtcclxuICAgIGNvbnN0IGFjdGl2ZUJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKFxyXG4gICAgICAoYikgPT4gWydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdvbl9teV93YXknLCAnc3RhcnRlZCddLmluY2x1ZGVzKGIuc3RhdHVzKVxyXG4gICAgKS5sZW5ndGg7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhaWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcigoYikgPT4gYi5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKTtcclxuICAgIC8vIE9ubHkgZGl2aWRlIHNlZWQgZGF0YSAoYW1vdW50cyA+PSAxMDAwMCkgYnkgMTAwLCBzeXN0ZW0tY3JlYXRlZCBib29raW5ncyBhcmUgYWxyZWFkeSBjb3JyZWN0XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSBwYWlkQm9va2luZ3MucmVkdWNlKChzdW0sIGIpID0+IHtcclxuICAgICAgY29uc3QgYW1vdW50ID0gYi50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgcmV0dXJuIHN1bSArIChhbW91bnQgPj0gMTAwMDAgPyBhbW91bnQgLyAxMDAgOiBhbW91bnQpO1xyXG4gICAgfSwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vbnRobHlQYWlkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoXHJcbiAgICAgIChiKSA9PiBiLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgJiYgYi5zZXJ2aWNlX2RhdGUgPj0gZmlyc3REYXlPZk1vbnRoXHJcbiAgICApO1xyXG4gICAgY29uc3QgbW9udGhseVJldmVudWUgPSBtb250aGx5UGFpZEJvb2tpbmdzLnJlZHVjZSgoc3VtLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IGIudG90YWxfYW1vdW50IHx8IDA7XHJcbiAgICAgIHJldHVybiBzdW0gKyAoYW1vdW50ID49IDEwMDAwID8gYW1vdW50IC8gMTAwIDogYW1vdW50KTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZEJvb2tpbmdzID0gYWxsQm9va2luZ3MuZmlsdGVyKChiKSA9PiBiLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbXBsZXRpb25SYXRlID0gYWxsQm9va2luZ3MubGVuZ3RoID4gMCA/IChjb21wbGV0ZWRCb29raW5ncyAvIGFsbEJvb2tpbmdzLmxlbmd0aCkgKiAxMDAgOiAwO1xyXG5cclxuICAgIGNvbnN0IGFsbENsZWFuZXJzID0gY2xlYW5lcnMgfHwgW107XHJcbiAgICBjb25zdCBhY3RpdmVDbGVhbmVycyA9IGFsbENsZWFuZXJzLmZpbHRlcigoYykgPT4gYy5pc19hY3RpdmUpLmxlbmd0aDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBzdGF0czoge1xyXG4gICAgICAgIHRvdGFsQm9va2luZ3M6IGFsbEJvb2tpbmdzLmxlbmd0aCxcclxuICAgICAgICBhY3RpdmVCb29raW5ncyxcclxuICAgICAgICB0b3RhbFJldmVudWUsXHJcbiAgICAgICAgbW9udGhseVJldmVudWUsXHJcbiAgICAgICAgdG90YWxDdXN0b21lcnM6IGN1c3RvbWVycz8ubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgdG90YWxDbGVhbmVyczogYWxsQ2xlYW5lcnMubGVuZ3RoLFxyXG4gICAgICAgIGFjdGl2ZUNsZWFuZXJzLFxyXG4gICAgICAgIGNvbXBsZXRpb25SYXRlOiBNYXRoLnJvdW5kKGNvbXBsZXRpb25SYXRlICogMTAwKSAvIDEwMCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFkbWluU3RhdHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc3RhdHMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGJvb2tpbmdzIHdpdGggb3B0aW9uYWwgZmlsdGVyc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJvb2tpbmdzKFxyXG4gIGZpbHRlcj86IHtcclxuICAgIHN0YXR1cz86IHN0cmluZztcclxuICAgIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gICAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJFbWFpbD86IHN0cmluZztcclxuICAgIGNsZWFuZXJJZD86IHN0cmluZztcclxuICB9XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZ3M/OiBCb29raW5nW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignc2VydmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuc3RhdHVzICYmIGZpbHRlci5zdGF0dXMgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc3RhdHVzJywgZmlsdGVyLnN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdzZXJ2aWNlX2RhdGUnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZVRvKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5sdGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlVG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY3VzdG9tZXJFbWFpbCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ2N1c3RvbWVyX2VtYWlsJywgZmlsdGVyLmN1c3RvbWVyRW1haWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXIuY2xlYW5lcklkKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgncHJlZmVycmVkX2NsZWFuZXJfaWQnLCBmaWx0ZXIuY2xlYW5lcklkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29raW5nczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmdzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEJvb2tpbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBjdXN0b21lcnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDdXN0b21lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjdXN0b21lcnM/OiBQcm9maWxlW107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXJzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbEN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjdXN0b21lcnMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGNsZWFuZXJzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2xlYW5lcnMoKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBjbGVhbmVycz86IENsZWFuZXJbXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjbGVhbmVyczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsZWFuZXJzOiBkYXRhIHx8IFtdIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEFsbENsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGNsZWFuZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdXNlciByZWdpc3RyYXRpb24gZGF0YSBmb3IgY2hhcnRzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVVzZXJEYXRhKGZpbHRlcj86IHtcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbiAgc2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGRhdGE/OiB7IG1vbnRoOiBzdHJpbmc7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH1bXTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBjbGVhbmVycyBxdWVyeSB3aXRoIGRhdGUgZmlsdGVyc1xyXG4gICAgbGV0IGNsZWFuZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgY2xlYW5lcnNRdWVyeSA9IGNsZWFuZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGNsZWFuZXJzUXVlcnkgPSBjbGVhbmVyc1F1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IGNsZWFuZXJzUXVlcnk7XHJcblxyXG4gICAgLy8gQnVpbGQgY3VzdG9tZXJzIHF1ZXJ5IHdpdGggZGF0ZSBmaWx0ZXJzXHJcbiAgICBsZXQgY3VzdG9tZXJzUXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCdjcmVhdGVkX2F0Jyk7XHJcbiAgICBcclxuICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZGF0ZUZyb20pO1xyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIGN1c3RvbWVyc1F1ZXJ5ID0gY3VzdG9tZXJzUXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVycywgZXJyb3I6IGN1c3RvbWVyc0Vycm9yIH0gPSBhd2FpdCBjdXN0b21lcnNRdWVyeTtcclxuXHJcbiAgICBpZiAoY2xlYW5lcnNFcnJvciB8fCBjdXN0b21lcnNFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3VwIGJ5IG1vbnRoXHJcbiAgICBjb25zdCBtb250aGx5RGF0YTogeyBba2V5OiBudW1iZXJdOiB7IHByb3ZpZGVyOiBudW1iZXI7IGNsaWVudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBwcm92aWRlcjogMCwgY2xpZW50OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5lcnM/LmZvckVhY2goKGNsZWFuZXIpID0+IHtcclxuICAgICAgaWYgKGNsZWFuZXIuY3JlYXRlZF9hdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjbGVhbmVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLnByb3ZpZGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXN0b21lcnM/LmZvckVhY2goKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lci5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1c3RvbWVyLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyKSB7XHJcbiAgICAgICAgICBtb250aGx5RGF0YVtkYXRlLmdldE1vbnRoKCldLmNsaWVudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgcHJvdmlkZXI6IG1vbnRobHlEYXRhW2luZGV4XS5wcm92aWRlcixcclxuICAgICAgY2xpZW50OiBtb250aGx5RGF0YVtpbmRleF0uY2xpZW50LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRNb250aGx5VXNlckRhdGE6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggbW9udGhseSB1c2VyIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uIGZvciBkb251dCBjaGFydFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb24oZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgc3RhdHVzOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9W107XHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgZ3Jvd3RoUGVyY2VudGFnZT86IG51bWJlcjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzdGF0dXMsIGNyZWF0ZWRfYXQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBib29raW5nLnN0YXR1cyB8fCAndW5rbm93bic7XHJcbiAgICAgIHN0YXR1c0NvdW50c1tzdGF0dXNdID0gKHN0YXR1c0NvdW50c1tzdGF0dXNdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHN0YXR1c0NvdW50cykubWFwKChbc3RhdHVzLCBjb3VudF0pID0+ICh7XHJcbiAgICAgIHN0YXR1czogc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdHVzLnNsaWNlKDEpLFxyXG4gICAgICBjb3VudCxcclxuICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY291bnQgLyB0b3RhbCkgKiAxMDApIDogMCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgZ3Jvd3RoIHBlcmNlbnRhZ2UgKGNvbXBhcmUgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aClcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoID09PSAwID8gMTEgOiBjdXJyZW50TW9udGggLSAxO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gY3VycmVudE1vbnRoID09PSAwID8gY3VycmVudFllYXIgLSAxIDogY3VycmVudFllYXI7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoU3RhcnQgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxKTtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhTdGFydCA9IG5ldyBEYXRlKHByZXZpb3VzWWVhciwgcHJldmlvdXNNb250aCwgMSk7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoRW5kID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vbnRoQm9va2luZ3MgPSBib29raW5ncz8uZmlsdGVyKChib29raW5nKSA9PiB7XHJcbiAgICAgIGlmICghYm9va2luZy5jcmVhdGVkX2F0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlID0gbmV3IERhdGUoYm9va2luZy5jcmVhdGVkX2F0KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZWREYXRlID49IGN1cnJlbnRNb250aFN0YXJ0ICYmIGNyZWF0ZWREYXRlIDwgbm93O1xyXG4gICAgfSkubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNNb250aEJvb2tpbmdzID0gYm9va2luZ3M/LmZpbHRlcigoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoIWJvb2tpbmcuY3JlYXRlZF9hdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVkRGF0ZSA+PSBwcmV2aW91c01vbnRoU3RhcnQgJiYgY3JlYXRlZERhdGUgPD0gcHJldmlvdXNNb250aEVuZDtcclxuICAgIH0pLmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGxldCBncm93dGhQZXJjZW50YWdlID0gMDtcclxuICAgIGlmIChwcmV2aW91c01vbnRoQm9va2luZ3MgPiAwKSB7XHJcbiAgICAgIGdyb3d0aFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKCgoY3VycmVudE1vbnRoQm9va2luZ3MgLSBwcmV2aW91c01vbnRoQm9va2luZ3MpIC8gcHJldmlvdXNNb250aEJvb2tpbmdzKSAqIDEwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRNb250aEJvb2tpbmdzID4gMCkge1xyXG4gICAgICBncm93dGhQZXJjZW50YWdlID0gMTAwOyAvLyAxMDAlIGdyb3d0aCBpZiBwcmV2aW91cyBtb250aCBoYWQgbm8gYm9va2luZ3NcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIHRvdGFsLCBncm93dGhQZXJjZW50YWdlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEJvb2tpbmdTdGF0dXNEaXN0cmlidXRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZyBzdGF0dXMgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG1vbnRobHkgdHJhbnNhY3Rpb24vcmV2ZW51ZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YShmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IHsgbW9udGg6IHN0cmluZzsgY29tcGxldGVkOiBudW1iZXI7IHBlbmRpbmc6IG51bWJlciB9W107XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcclxuXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NyZWF0ZWRfYXQsIHBheW1lbnRfc3RhdHVzLCB0b3RhbF9hbW91bnQsIHNlcnZpY2VfdHlwZScpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZmlsdGVyPy5kYXRlRnJvbSB8fCBgJHtjdXJyZW50WWVhcn0tMDEtMDFgO1xyXG4gICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBkYXRlRnJvbSk7XHJcbiAgICBcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnNlcnZpY2VUeXBlKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5lcSgnc2VydmljZV90eXBlJywgZmlsdGVyLnNlcnZpY2VUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9udGhseURhdGE6IHsgW2tleTogbnVtYmVyXTogeyBjb21wbGV0ZWQ6IG51bWJlcjsgcGVuZGluZzogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIG1vbnRobHlEYXRhW2ldID0geyBjb21wbGV0ZWQ6IDAsIHBlbmRpbmc6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBpZiAoYm9va2luZy5jcmVhdGVkX2F0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuY3JlYXRlZF9hdCk7XHJcbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudFllYXIpIHtcclxuICAgICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmF3QW1vdW50ID0gYm9va2luZy50b3RhbF9hbW91bnQgfHwgMDtcclxuICAgICAgICAgIC8vIE9ubHkgZGl2aWRlIHNlZWQgZGF0YSAoYW1vdW50cyA+PSAxMDAwMCkgYnkgMTAwLCBzeXN0ZW0tY3JlYXRlZCBib29raW5ncyBhcmUgYWxyZWFkeSBjb3JyZWN0XHJcbiAgICAgICAgICBjb25zdCBhbW91bnQgPSByYXdBbW91bnQgPj0gMTAwMDAgPyByYXdBbW91bnQgLyAxMDAgOiByYXdBbW91bnQ7XHJcbiAgICAgICAgICBpZiAoYm9va2luZy5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKSB7XHJcbiAgICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXS5jb21wbGV0ZWQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9udGhseURhdGFbbW9udGhdLnBlbmRpbmcgKz0gYW1vdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiAoe1xyXG4gICAgICBtb250aCxcclxuICAgICAgY29tcGxldGVkOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5jb21wbGV0ZWQpLFxyXG4gICAgICBwZW5kaW5nOiBNYXRoLnJvdW5kKG1vbnRobHlEYXRhW2luZGV4XS5wZW5kaW5nKSxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0TW9udGhseVRyYW5zYWN0aW9uRGF0YTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBtb250aGx5IHRyYW5zYWN0aW9uIGRhdGEnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdG9wIGFjdGl2ZSB1c2VycyAoY3VzdG9tZXJzIHdpdGggbW9zdCBib29raW5ncylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BBY3RpdmVVc2VycygpOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHVzZXJzPzogQXJyYXk8e1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBib29raW5nQ291bnQ6IG51bWJlcjtcclxuICAgIGF2YXRhcj86IHN0cmluZztcclxuICB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IGJvb2tpbmdzIGdyb3VwZWQgYnkgY3VzdG9tZXJcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdjdXN0b21lcl9lbWFpbCwgY3VzdG9tZXJfZmlyc3RfbmFtZSwgY3VzdG9tZXJfbGFzdF9uYW1lJyk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBib29raW5nc0Vycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3VudCBib29raW5ncyBwZXIgY3VzdG9tZXJcclxuICAgIGNvbnN0IGN1c3RvbWVyQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0gfSA9IHt9O1xyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZW1haWwgPSBib29raW5nLmN1c3RvbWVyX2VtYWlsIHx8ICcnO1xyXG4gICAgICBjb25zdCBuYW1lID0gYCR7Ym9va2luZy5jdXN0b21lcl9maXJzdF9uYW1lIHx8ICcnfSAke2Jvb2tpbmcuY3VzdG9tZXJfbGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xyXG4gICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICBpZiAoIWN1c3RvbWVyQ291bnRzW2VtYWlsXSkge1xyXG4gICAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdID0geyBuYW1lOiBuYW1lIHx8IGVtYWlsLCBlbWFpbCwgY291bnQ6IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJDb3VudHNbZW1haWxdLmNvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCB0b3AgMTBcclxuICAgIGNvbnN0IHRvcFVzZXJzID0gT2JqZWN0LnZhbHVlcyhjdXN0b21lckNvdW50cylcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxyXG4gICAgICAuc2xpY2UoMCwgMTApXHJcbiAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGlkOiBgY3VzdG9tZXItJHtpbmRleH1gLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICByb2xlOiAnQ3VzdG9tZXInLFxyXG4gICAgICAgIGJvb2tpbmdDb3VudDogdXNlci5jb3VudCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJzOiB0b3BVc2VycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRUb3BBY3RpdmVVc2VyczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCB0b3AgYWN0aXZlIHVzZXJzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHNlcnZpY2UgcG9wdWxhcml0eSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmljZVBvcHVsYXJpdHkoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIHNlcnZpY2VzPzogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9PjtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuICAgIFxyXG4gICAgLy8gQnVpbGQgcXVlcnkgd2l0aCBmaWx0ZXJzXHJcbiAgICBsZXQgcXVlcnkgPSBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdzZXJ2aWNlX3R5cGUsIGNyZWF0ZWRfYXQsIHN0YXR1cycpO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5kYXRlRnJvbSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZ3RlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVGcm9tKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVUbykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoJ3N0YXR1cycsIGZpbHRlci5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5ncywgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5O1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlQ291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgICBjb25zdCB0b3RhbCA9IGJvb2tpbmdzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBib29raW5ncz8uZm9yRWFjaCgoYm9va2luZykgPT4ge1xyXG4gICAgICBjb25zdCBzZXJ2aWNlVHlwZSA9IGJvb2tpbmcuc2VydmljZV90eXBlIHx8ICdVbmtub3duJztcclxuICAgICAgc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gPSAoc2VydmljZUNvdW50c1tzZXJ2aWNlVHlwZV0gfHwgMCkgKyAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMoc2VydmljZUNvdW50cylcclxuICAgICAgLm1hcCgoW25hbWUsIGNvdW50XSkgPT4gKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNvdW50LFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvdW50IC8gdG90YWwpICogMTAwKSA6IDAsXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlcnZpY2VzOiByZXN1bHQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0U2VydmljZVBvcHVsYXJpdHk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggc2VydmljZSBwb3B1bGFyaXR5JyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHJhdGluZyBzdGF0aXN0aWNzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmF0aW5nU3RhdHMoZmlsdGVyPzoge1xyXG4gIGRhdGVGcm9tPzogc3RyaW5nO1xyXG4gIGRhdGVUbz86IHN0cmluZztcclxuICBzZXJ2aWNlVHlwZT86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgc3RhdHM/OiB7XHJcbiAgICBhdmVyYWdlUmF0aW5nOiBudW1iZXI7XHJcbiAgICB0b3RhbFJhdGluZ3M6IG51bWJlcjtcclxuICAgIGJyZWFrZG93bjogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfTtcclxuICB9O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBJZiBzZXJ2aWNlVHlwZSBmaWx0ZXIgaXMgYXBwbGllZCwgd2UgbmVlZCB0byBmaWx0ZXIgY2xlYW5lcnMgYmFzZWQgb24gdGhlaXIgYm9va2luZ3NcclxuICAgIC8vIEZvciBzaW1wbGljaXR5LCB3ZSdsbCBqdXN0IGdldCBhbGwgY2xlYW5lcnMuIFNlcnZpY2UgdHlwZSBmaWx0ZXJpbmcgd291bGQgcmVxdWlyZVxyXG4gICAgLy8gam9pbmluZyB3aXRoIGJvb2tpbmdzIHdoaWNoIGlzIG1vcmUgY29tcGxleC5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ3JhdGluZywgY3JlYXRlZF9hdCcpO1xyXG5cclxuICAgIC8vIEFwcGx5IGRhdGUgZmlsdGVyIHRvIGNsZWFuZXIgY3JlYXRpb24gZGF0ZSBpZiBwcm92aWRlZFxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZUZyb20pIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ2NyZWF0ZWRfYXQnLCBmaWx0ZXIuZGF0ZUZyb20pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlcj8uZGF0ZVRvKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkubHRlKCdjcmVhdGVkX2F0JywgZmlsdGVyLmRhdGVUbyArICdUMjM6NTk6NTknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXJzLCBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhdGluZ3MgPSBjbGVhbmVycz8ubWFwKChjKSA9PiBjLnJhdGluZyB8fCAwKSB8fCBbXTtcclxuICAgIGNvbnN0IHRvdGFsUmF0aW5ncyA9IHJhdGluZ3MubGVuZ3RoO1xyXG4gICAgY29uc3QgYXZlcmFnZVJhdGluZyA9IHRvdGFsUmF0aW5ncyA+IDBcclxuICAgICAgPyByYXRpbmdzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByLCAwKSAvIHRvdGFsUmF0aW5nc1xyXG4gICAgICA6IDA7XHJcblxyXG4gICAgLy8gQ291bnQgYnkgcmF0aW5nICgxLTUpXHJcbiAgICBjb25zdCBicmVha2Rvd246IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7IDE6IDAsIDI6IDAsIDM6IDAsIDQ6IDAsIDU6IDAgfTtcclxuICAgIHJhdGluZ3MuZm9yRWFjaCgocmF0aW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJhdGluZyk7XHJcbiAgICAgIGlmIChyb3VuZGVkID49IDEgJiYgcm91bmRlZCA8PSA1KSB7XHJcbiAgICAgICAgYnJlYWtkb3duW3JvdW5kZWRdKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgYXZlcmFnZVJhdGluZzogTWF0aC5yb3VuZChhdmVyYWdlUmF0aW5nICogMTApIC8gMTAsXHJcbiAgICAgICAgdG90YWxSYXRpbmdzLFxyXG4gICAgICAgIGJyZWFrZG93bixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFJhdGluZ1N0YXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIHJhdGluZyBzdGF0cycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uIGZvciBzdWJzY3JpcHRpb24gY2hhcnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbihmaWx0ZXI/OiB7XHJcbiAgZGF0ZUZyb20/OiBzdHJpbmc7XHJcbiAgZGF0ZVRvPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxufSk6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IEFycmF5PHsgdHlwZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG4gICAgXHJcbiAgICAvLyBCdWlsZCBxdWVyeSB3aXRoIGZpbHRlcnNcclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ3NlcnZpY2VfdHlwZSwgY2xlYW5pbmdfZnJlcXVlbmN5LCBjcmVhdGVkX2F0LCBzdGF0dXMnKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIGlmIChmaWx0ZXIuZGF0ZUZyb20pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmd0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnY3JlYXRlZF9hdCcsIGZpbHRlci5kYXRlVG8gKyAnVDIzOjU5OjU5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdXAgYnkgZnJlcXVlbmN5IHR5cGU6IE9uZS1UaW1lLCBXZWVrbHksIEJpLVdlZWtseSwgTW9udGhseVxyXG4gICAgY29uc3QgZnJlcXVlbmN5Q291bnRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gICAgICAnT25lLVRpbWUnOiAwLFxyXG4gICAgICAnV2Vla2x5JzogMCxcclxuICAgICAgJ0JpLVdlZWtseSc6IDAsXHJcbiAgICAgICdNb250aGx5JzogMCxcclxuICAgIH07XHJcblxyXG4gICAgYm9va2luZ3M/LmZvckVhY2goKGJvb2tpbmcpID0+IHtcclxuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gYm9va2luZy5jbGVhbmluZ19mcmVxdWVuY3kgfHwgJ29uZS10aW1lJztcclxuICAgICAgaWYgKGZyZXF1ZW5jeSA9PT0gJ29uZS10aW1lJykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snT25lLVRpbWUnXSsrO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyZXF1ZW5jeSA9PT0gJ3dlZWtseScpIHtcclxuICAgICAgICBmcmVxdWVuY3lDb3VudHNbJ1dlZWtseSddKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoZnJlcXVlbmN5ID09PSAnYmktd2Vla2x5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snQmktV2Vla2x5J10rKztcclxuICAgICAgfSBlbHNlIGlmIChmcmVxdWVuY3kgPT09ICdtb250aGx5Jykge1xyXG4gICAgICAgIGZyZXF1ZW5jeUNvdW50c1snTW9udGhseSddKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKGZyZXF1ZW5jeUNvdW50cylcclxuICAgICAgLm1hcCgoW3R5cGUsIGNvdW50XSkgPT4gKHsgdHlwZSwgY291bnQgfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRTZXJ2aWNlVHlwZURpc3RyaWJ1dGlvbjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIHR5cGUgZGlzdHJpYnV0aW9uJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNsZWFuZXIgZGV0YWlsc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsZWFuZXIoXHJcbiAgY2xlYW5lcklkOiBzdHJpbmcsXHJcbiAgZGF0YTogQ2xlYW5lclVwZGF0ZUlucHV0XHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgY2xlYW5lcj86IENsZWFuZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXBkYXRlIG9iamVjdCB3aXRoIG9ubHkgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7fTtcclxuICAgIGlmIChkYXRhLm5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICBpZiAoZGF0YS5waG9uZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnBob25lID0gZGF0YS5waG9uZTtcclxuICAgIGlmIChkYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmlzX2FjdGl2ZSA9IGRhdGEuaXNfYWN0aXZlO1xyXG4gICAgaWYgKGRhdGEuYmlvICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYmlvID0gZGF0YS5iaW87XHJcbiAgICBpZiAoZGF0YS5hcmVhcyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmFyZWFzID0gZGF0YS5hcmVhcztcclxuICAgIGlmIChkYXRhLnNwZWNpYWx0aWVzICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuc3BlY2lhbHRpZXMgPSBkYXRhLnNwZWNpYWx0aWVzO1xyXG4gICAgaWYgKGRhdGEueWVhcnNfZXhwZXJpZW5jZSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnllYXJzX2V4cGVyaWVuY2UgPSBkYXRhLnllYXJzX2V4cGVyaWVuY2U7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfbW9uZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX21vbmRheSA9IGRhdGEuYXZhaWxhYmxlX21vbmRheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV90dWVzZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3R1ZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV90dWVzZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3dlZG5lc2RheSAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXkgPSBkYXRhLmF2YWlsYWJsZV93ZWRuZXNkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfdGh1cnNkYXkgPSBkYXRhLmF2YWlsYWJsZV90aHVyc2RheTtcclxuICAgIGlmIChkYXRhLmF2YWlsYWJsZV9mcmlkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5hdmFpbGFibGVfZnJpZGF5ID0gZGF0YS5hdmFpbGFibGVfZnJpZGF5O1xyXG4gICAgaWYgKGRhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3NhdHVyZGF5ID0gZGF0YS5hdmFpbGFibGVfc2F0dXJkYXk7XHJcbiAgICBpZiAoZGF0YS5hdmFpbGFibGVfc3VuZGF5ICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuYXZhaWxhYmxlX3N1bmRheSA9IGRhdGEuYXZhaWxhYmxlX3N1bmRheTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNsZWFuZXIsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5lcnMnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBjbGVhbmVySWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNsZWFuZXI6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjbGVhbmVyOiBjbGVhbmVyIGFzIENsZWFuZXIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ2xlYW5lcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgY2xlYW5lcicsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBjdXN0b21lciBwcm9maWxlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXIoXHJcbiAgY3VzdG9tZXJJZDogc3RyaW5nLFxyXG4gIGRhdGE6IFByb2ZpbGVVcGRhdGVJbnB1dFxyXG4pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGN1c3RvbWVyPzogUHJvZmlsZTtcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcclxuICAgIGlmICghZGF0YS5maXJzdF9uYW1lPy50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YS5sYXN0X25hbWU/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEuZW1haWw/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGN1c3RvbWVyLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgbnVsbCxcclxuICAgICAgICBhdmF0YXJfdXJsOiBkYXRhLmF2YXRhcl91cmwgfHwgbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGN1c3RvbWVySWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY3VzdG9tZXI6IGN1c3RvbWVyIGFzIFByb2ZpbGUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGN1c3RvbWVyJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmdzIGF2YWlsYWJsZSBmb3IgYXNzaWdubWVudCAoZXhjbHVkZSBjb21wbGV0ZWQgYW5kIGNhbmNlbGxlZClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nc0ZvckFzc2lnbm1lbnQoZmlsdGVyPzoge1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBkYXRlRnJvbT86IHN0cmluZztcclxuICBkYXRlVG8/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGJvb2tpbmdzPzogQm9va2luZ1tdO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIGxldCBxdWVyeSA9IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAubm90KCdzdGF0dXMnLCAnaW4nLCAnKGNvbXBsZXRlZCxjYW5jZWxsZWQpJylcclxuICAgICAgLm9yZGVyKCdzZXJ2aWNlX2RhdGUnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgaWYgKGZpbHRlci5zdGF0dXMgJiYgZmlsdGVyLnN0YXR1cyAhPT0gJ2FsbCcpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LmVxKCdzdGF0dXMnLCBmaWx0ZXIuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlsdGVyLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5ndGUoJ3NlcnZpY2VfZGF0ZScsIGZpbHRlci5kYXRlRnJvbSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpbHRlci5kYXRlVG8pIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5Lmx0ZSgnc2VydmljZV9kYXRlJywgZmlsdGVyLmRhdGVUbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3MgZm9yIGFzc2lnbm1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nczogZGF0YSB8fCBbXSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nc0ZvckFzc2lnbm1lbnQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggYm9va2luZ3MnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc3NpZ24gY2xlYW5lcnMgdG8gYm9va2luZ3MgKHN1cHBvcnRzIG11bHRpLXNlbGVjdClcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NpZ25DbGVhbmVyc1RvQm9va2luZ3MoXHJcbiAgY2xlYW5lcklkczogc3RyaW5nW10sXHJcbiAgYm9va2luZ0lkczogc3RyaW5nW11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICB1cGRhdGVkPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVySWRzIHx8IGNsZWFuZXJJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0F0IGxlYXN0IG9uZSBjbGVhbmVyIG11c3QgYmUgc2VsZWN0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWRzIHx8IGJvb2tpbmdJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0F0IGxlYXN0IG9uZSBib29raW5nIG11c3QgYmUgc2VsZWN0ZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVycyBleGlzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB2ZXJpZnkgY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVycyB8fCBjbGVhbmVycy5sZW5ndGggIT09IGNsZWFuZXJJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ09uZSBvciBtb3JlIGNsZWFuZXJzIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZ3MgZXhpc3RcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZ3MsIGVycm9yOiBib29raW5nc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5pbignaWQnLCBib29raW5nSWRzKTtcclxuXHJcbiAgICBpZiAoYm9va2luZ3NFcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdmVyaWZ5IGJvb2tpbmdzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ3MgfHwgYm9va2luZ3MubGVuZ3RoICE9PSBib29raW5nSWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdPbmUgb3IgbW9yZSBib29raW5ncyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGVhY2ggYm9va2luZ1xyXG4gICAgbGV0IHVwZGF0ZWRDb3VudCA9IDA7XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBib29raW5nIG9mIGJvb2tpbmdzKSB7XHJcbiAgICAgIC8vIEdldCBleGlzdGluZyBjbGVhbmVyIElEc1xyXG4gICAgICBjb25zdCBleGlzdGluZ0lkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBmcm9tIHByZWZlcnJlZF9jbGVhbmVyX2lkIGlmIGV4aXN0c1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBmcm9tIHByZWZlcnJlZF9jbGVhbmVyX2lkcyBhcnJheSBpZiBleGlzdHNcclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1lcmdlIHdpdGggbmV3IGNsZWFuZXIgSURzIChhdm9pZCBkdXBsaWNhdGVzKVxyXG4gICAgICBjb25zdCBhbGxDbGVhbmVySWRzID0gWy4uLm5ldyBTZXQoWy4uLmV4aXN0aW5nSWRzLCAuLi5jbGVhbmVySWRzXSldO1xyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIHByZWZlcnJlZF9jbGVhbmVyX2lkIChmaXJzdCBjbGVhbmVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG4gICAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSBhbGxDbGVhbmVySWRzWzBdIHx8IG51bGw7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWQ6IHByZWZlcnJlZENsZWFuZXJJZCxcclxuICAgICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogYWxsQ2xlYW5lcklkcyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBib29raW5nLmlkKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKGBGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcgJHtib29raW5nLmlkfTogJHt1cGRhdGVFcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVwZGF0ZWRDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdXBkYXRlZENvdW50ID4gMCxcclxuICAgICAgICB1cGRhdGVkOiB1cGRhdGVkQ291bnQsXHJcbiAgICAgICAgZXJyb3I6IGBTb21lIGJvb2tpbmdzIGZhaWxlZCB0byB1cGRhdGU6ICR7ZXJyb3JzLmpvaW4oJzsgJyl9YCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cGRhdGVkOiB1cGRhdGVkQ291bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFzc2lnbiBjbGVhbmVycyB0byBib29raW5ncycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBpZiBzZXJ2aWNlIHR5cGUgYWxsb3dzIG11bHRpcGxlIGNsZWFuZXJzXHJcbiAqL1xyXG5mdW5jdGlvbiBhbGxvd3NNdWx0aXBsZUNsZWFuZXJzKHNlcnZpY2VUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBpZiAoIXNlcnZpY2VUeXBlKSByZXR1cm4gdHJ1ZTsgLy8gRGVmYXVsdCB0byBhbGxvd2luZyBtdWx0aXBsZVxyXG4gIFxyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBzZXJ2aWNlVHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICBcclxuICAvLyBEZWVwIENsZWFuaW5nIGFuZCBNb3ZlIEluL091dCBhbHdheXMgYWxsb3cgbXVsdGlwbGVcclxuICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygnZGVlcCcpIHx8IFxyXG4gICAgICAobm9ybWFsaXplZC5pbmNsdWRlcygnbW92ZScpICYmIChub3JtYWxpemVkLmluY2x1ZGVzKCdpbi9vdXQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdpbiBvdXQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdpbm91dCcpKSkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvLyBTdGFuZGFyZCBhbmQgQWlyYm5iIGFsbG93IG11bHRpcGxlIChtb3JlIHRoYW4gMSlcclxuICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygnc3RhbmRhcmQnKSB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdhaXJibmInKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE90aGVyIHNlcnZpY2VzIGFsc28gYWxsb3cgbXVsdGlwbGVcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBib29raW5nIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIHVwZGF0ZURhdGE6IHtcclxuICAgIHNlcnZpY2VfZGF0ZT86IHN0cmluZztcclxuICAgIHNlcnZpY2VfdGltZT86IHN0cmluZztcclxuICAgIHNlcnZpY2VfYWRkcmVzcz86IHN0cmluZztcclxuICAgIHNlcnZpY2VfYXB0X3VuaXQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc2VydmljZV9zdWJ1cmI/OiBzdHJpbmc7XHJcbiAgICBzZXJ2aWNlX2NpdHk/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9maXJzdF9uYW1lPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfbGFzdF9uYW1lPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21lcl9waG9uZT86IHN0cmluZztcclxuICAgIHNwZWNpYWxfaW5zdHJ1Y3Rpb25zPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJlZHJvb21zPzogc3RyaW5nO1xyXG4gICAgYmF0aHJvb21zPzogc3RyaW5nO1xyXG4gICAgc2VydmljZV90eXBlPzogc3RyaW5nO1xyXG4gIH1cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIFZlcmlmeSBib29raW5nIGV4aXN0c1xyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0Jvb2tpbmcsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGZldGNoRXJyb3IgfHwgIWV4aXN0aW5nQm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHVwZGF0ZURhdGEpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUJvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYm9va2luZyBzdGF0dXNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCb29raW5nU3RhdHVzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIHN0YXR1czogQm9va2luZ1snc3RhdHVzJ11cclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzXHJcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzOiBCb29raW5nWydzdGF0dXMnXVtdID0gWydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdvbl9teV93YXknLCAnc3RhcnRlZCcsICdjb21wbGV0ZWQnLCAnY2FuY2VsbGVkJ107XHJcbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHN0YXR1cycgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IGJvb2tpbmcgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQm9va2luZywgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAubWF5YmVTaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvciB8fCAhZXhpc3RpbmdCb29raW5nKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgbm90IGZvdW5kJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBzdGF0dXNcclxuICAgIGNvbnN0IHsgZGF0YTogdXBkYXRlZEJvb2tpbmcsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnVwZGF0ZSh7IHN0YXR1cyB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBib29raW5nIHN0YXR1czonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQm9va2luZ1N0YXR1czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgYm9va2luZyBzdGF0dXMnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc3NpZ24gY2xlYW5lcnMgdG8gYSBzaW5nbGUgYm9va2luZ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkNsZWFuZXJzVG9Cb29raW5nKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZHM6IHN0cmluZ1tdLFxyXG4gIHJlcGxhY2VFeGlzdGluZzogYm9vbGVhbiA9IGZhbHNlXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIElEIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xlYW5lcklkcyB8fCBjbGVhbmVySWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBdCBsZWFzdCBvbmUgY2xlYW5lciBtdXN0IGJlIHNlbGVjdGVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBWZXJpZnkgYm9va2luZyBleGlzdHMgYW5kIGdldCBzZXJ2aWNlIHR5cGVcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnaWQsIHNlcnZpY2VfdHlwZSwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgc2VydmljZSB0eXBlIGFsbG93cyBtdWx0aXBsZSBjbGVhbmVycyBpZiBtb3JlIHRoYW4gMSBjbGVhbmVyIGlzIGJlaW5nIGFzc2lnbmVkXHJcbiAgICBpZiAoY2xlYW5lcklkcy5sZW5ndGggPiAxICYmICFhbGxvd3NNdWx0aXBsZUNsZWFuZXJzKGJvb2tpbmcuc2VydmljZV90eXBlKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUaGlzIHNlcnZpY2UgdHlwZSBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGNsZWFuZXJzJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSBjbGVhbmVycyBleGlzdFxyXG4gICAgY29uc3QgeyBkYXRhOiBjbGVhbmVycywgZXJyb3I6IGNsZWFuZXJzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgIGlmIChjbGVhbmVyc0Vycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byB2ZXJpZnkgY2xlYW5lcnMnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjbGVhbmVycyB8fCBjbGVhbmVycy5sZW5ndGggIT09IGNsZWFuZXJJZHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ09uZSBvciBtb3JlIGNsZWFuZXJzIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgZmluYWwgY2xlYW5lciBJRHNcclxuICAgIGxldCBmaW5hbENsZWFuZXJJZHM6IHN0cmluZ1tdO1xyXG4gICAgaWYgKHJlcGxhY2VFeGlzdGluZykge1xyXG4gICAgICBmaW5hbENsZWFuZXJJZHMgPSBjbGVhbmVySWRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gR2V0IGV4aXN0aW5nIGNsZWFuZXIgSURzXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBpZiAoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCkge1xyXG4gICAgICAgIGV4aXN0aW5nSWRzLnB1c2goYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgICAgYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gTWVyZ2Ugd2l0aCBuZXcgY2xlYW5lciBJRHMgKGF2b2lkIGR1cGxpY2F0ZXMpXHJcbiAgICAgIGZpbmFsQ2xlYW5lcklkcyA9IFsuLi5uZXcgU2V0KFsuLi5leGlzdGluZ0lkcywgLi4uY2xlYW5lcklkc10pXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgcHJlZmVycmVkX2NsZWFuZXJfaWQgKGZpcnN0IGNsZWFuZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXHJcbiAgICBjb25zdCBwcmVmZXJyZWRDbGVhbmVySWQgPSBmaW5hbENsZWFuZXJJZHNbMF0gfHwgbnVsbDtcclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBwcmVmZXJyZWRfY2xlYW5lcl9pZDogcHJlZmVycmVkQ2xlYW5lcklkLFxyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkczogZmluYWxDbGVhbmVySWRzLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgYm9va2luZ0lkKVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhc3NpZ25pbmcgY2xlYW5lcnMgdG8gYm9va2luZzonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYXNzaWduQ2xlYW5lcnNUb0Jvb2tpbmc6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYXNzaWduIGNsZWFuZXJzIHRvIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgY2xlYW5lciBmcm9tIGJvb2tpbmdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDbGVhbmVyRnJvbUJvb2tpbmcoXHJcbiAgYm9va2luZ0lkOiBzdHJpbmcsXHJcbiAgY2xlYW5lcklkOiBzdHJpbmdcclxuKTogUHJvbWlzZTx7XHJcbiAgc3VjY2VzczogYm9vbGVhbjtcclxuICBib29raW5nPzogQm9va2luZztcclxuICBlcnJvcj86IHN0cmluZztcclxufT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWZXJpZnkgYWRtaW4gYWNjZXNzXHJcbiAgICBjb25zdCBhZG1pblJlc3VsdCA9IGF3YWl0IGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgaWYgKCFhZG1pblJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIGFzIGFkbWluJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va2luZ0lkIHx8ICFjbGVhbmVySWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBhbmQgQ2xlYW5lciBJRCBhcmUgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVBZG1pbkNsaWVudCgpO1xyXG5cclxuICAgIC8vIEdldCBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IGJvb2tpbmcsIGVycm9yOiBib29raW5nRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2lkLCBwcmVmZXJyZWRfY2xlYW5lcl9pZCwgcHJlZmVycmVkX2NsZWFuZXJfaWRzJylcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLm1heWJlU2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGJvb2tpbmdFcnJvciB8fCAhYm9va2luZykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb29raW5nIG5vdCBmb3VuZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2xlYW5lciBJRHNcclxuICAgIGNvbnN0IGV4aXN0aW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgZXhpc3RpbmdJZHMucHVzaChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkKTtcclxuICAgIH1cclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkICYmICFleGlzdGluZ0lkcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgIGV4aXN0aW5nSWRzLnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBjbGVhbmVyIElEXHJcbiAgICBjb25zdCBub3JtYWxpemVkQ2xlYW5lcklkID0gY2xlYW5lcklkLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgY29uc3QgdXBkYXRlZElkcyA9IGV4aXN0aW5nSWRzLmZpbHRlcihpZCA9PiBpZC50b0xvd2VyQ2FzZSgpLnRyaW0oKSAhPT0gbm9ybWFsaXplZENsZWFuZXJJZCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZWRJZHMubGVuZ3RoID09PSBleGlzdGluZ0lkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xlYW5lciBub3QgZm91bmQgaW4gYm9va2luZyBhc3NpZ25tZW50JyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVybWluZSBwcmVmZXJyZWRfY2xlYW5lcl9pZCAoZmlyc3QgY2xlYW5lciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSlcclxuICAgIGNvbnN0IHByZWZlcnJlZENsZWFuZXJJZCA9IHVwZGF0ZWRJZHMubGVuZ3RoID4gMCA/IHVwZGF0ZWRJZHNbMF0gOiBudWxsO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBib29raW5nXHJcbiAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZWRCb29raW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdib29raW5ncycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHByZWZlcnJlZF9jbGVhbmVyX2lkOiBwcmVmZXJyZWRDbGVhbmVySWQsXHJcbiAgICAgICAgcHJlZmVycmVkX2NsZWFuZXJfaWRzOiB1cGRhdGVkSWRzLmxlbmd0aCA+IDAgPyB1cGRhdGVkSWRzIDogbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgY2xlYW5lciBmcm9tIGJvb2tpbmc6JywgdXBkYXRlRXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHVwZGF0ZUVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib29raW5nOiB1cGRhdGVkQm9va2luZyBhcyBCb29raW5nIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHJlbW92ZUNsZWFuZXJGcm9tQm9va2luZzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byByZW1vdmUgY2xlYW5lciBmcm9tIGJvb2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgY2xlYW5lciBlYXJuaW5ncyBmb3IgYSBib29raW5nXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2xlYW5lckVhcm5pbmdzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nLFxyXG4gIGNsZWFuZXJJZDogc3RyaW5nLFxyXG4gIGVhcm5pbmdzOiB7XHJcbiAgICBiYXNlRWFybmluZ3M6IG51bWJlcjtcclxuICAgIHRpcEFtb3VudDogbnVtYmVyO1xyXG4gICAgdG90YWxFYXJuaW5nczogbnVtYmVyO1xyXG4gIH0gfCBudWxsXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFkbWluIGFjY2Vzc1xyXG4gICAgY29uc3QgYWRtaW5SZXN1bHQgPSBhd2FpdCBnZXRDdXJyZW50QWRtaW4oKTtcclxuICAgIGlmICghYWRtaW5SZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCBhcyBhZG1pbicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tpbmdJZCB8fCAhY2xlYW5lcklkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Jvb2tpbmcgSUQgYW5kIENsZWFuZXIgSUQgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQWRtaW5DbGllbnQoKTtcclxuXHJcbiAgICAvLyBHZXQgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBib29raW5nLCBlcnJvcjogYm9va2luZ0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAuc2VsZWN0KCdpZCwgY2xlYW5lcl9lYXJuaW5nc19vdmVycmlkZSwgcHJlZmVycmVkX2NsZWFuZXJfaWQsIHByZWZlcnJlZF9jbGVhbmVyX2lkcycpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGNsZWFuZXIgaXMgYXNzaWduZWQgdG8gYm9va2luZ1xyXG4gICAgY29uc3Qgbm9ybWFsaXplVXVpZCA9IChpZDogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgaWYgKCFpZCkgcmV0dXJuICcnO1xyXG4gICAgICByZXR1cm4gU3RyaW5nKGlkKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBub3JtYWxpemVkQ2xlYW5lcklkID0gbm9ybWFsaXplVXVpZChjbGVhbmVySWQpO1xyXG5cclxuICAgIGNvbnN0IGlzQXNzaWduZWRTaW5nbGUgPSBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkICYmIFxyXG4gICAgICBub3JtYWxpemVVdWlkKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpID09PSBub3JtYWxpemVkQ2xlYW5lcklkO1xyXG5cclxuICAgIGxldCBpc0Fzc2lnbmVkTXVsdGlwbGUgPSBmYWxzZTtcclxuICAgIGlmIChib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcyAmJiBBcnJheS5pc0FycmF5KGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzKSkge1xyXG4gICAgICBpc0Fzc2lnbmVkTXVsdGlwbGUgPSBib29raW5nLnByZWZlcnJlZF9jbGVhbmVyX2lkcy5zb21lKFxyXG4gICAgICAgIChpZDogc3RyaW5nKSA9PiBub3JtYWxpemVVdWlkKGlkKSA9PT0gbm9ybWFsaXplZENsZWFuZXJJZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNBc3NpZ25lZFNpbmdsZSAmJiAhaXNBc3NpZ25lZE11bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsZWFuZXIgaXMgbm90IGFzc2lnbmVkIHRvIHRoaXMgYm9va2luZycgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgZXhpc3Rpbmcgb3ZlcnJpZGUgb3IgY3JlYXRlIG5ld1xyXG4gICAgbGV0IG92ZXJyaWRlOiBSZWNvcmQ8c3RyaW5nLCB7IGJhc2VFYXJuaW5nczogbnVtYmVyOyB0aXBBbW91bnQ6IG51bWJlcjsgdG90YWxFYXJuaW5nczogbnVtYmVyIH0+ID0ge307XHJcbiAgICBpZiAoYm9va2luZy5jbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlICYmIHR5cGVvZiBib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIG92ZXJyaWRlID0geyAuLi5ib29raW5nLmNsZWFuZXJfZWFybmluZ3Nfb3ZlcnJpZGUgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgb3IgcmVtb3ZlIG92ZXJyaWRlXHJcbiAgICBpZiAoZWFybmluZ3MgPT09IG51bGwpIHtcclxuICAgICAgLy8gUmVtb3ZlIG92ZXJyaWRlIGZvciB0aGlzIGNsZWFuZXJcclxuICAgICAgZGVsZXRlIG92ZXJyaWRlW2NsZWFuZXJJZF07XHJcbiAgICAgIC8vIElmIG5vIG92ZXJyaWRlcyBsZWZ0LCBzZXQgdG8gbnVsbFxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3ZlcnJpZGUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG92ZXJyaWRlID0gbnVsbCBhcyBhbnk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNldCBvdmVycmlkZSBmb3IgdGhpcyBjbGVhbmVyXHJcbiAgICAgIG92ZXJyaWRlW2NsZWFuZXJJZF0gPSBlYXJuaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgYm9va2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiB1cGRhdGVkQm9va2luZywgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnYm9va2luZ3MnKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBjbGVhbmVyX2Vhcm5pbmdzX292ZXJyaWRlOiBvdmVycmlkZSxcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGJvb2tpbmdJZClcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2xlYW5lciBlYXJuaW5nczonLCB1cGRhdGVFcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXBkYXRlRXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvb2tpbmc6IHVwZGF0ZWRCb29raW5nIGFzIEJvb2tpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlQ2xlYW5lckVhcm5pbmdzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjbGVhbmVyIGVhcm5pbmdzJyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGJvb2tpbmcgd2l0aCBjbGVhbmVyIGRldGFpbHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29raW5nV2l0aENsZWFuZXJzKFxyXG4gIGJvb2tpbmdJZDogc3RyaW5nXHJcbik6IFByb21pc2U8e1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgYm9va2luZz86IEJvb2tpbmc7XHJcbiAgY2xlYW5lcnM/OiBBcnJheTx7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcGhvbmU/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH0+O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmeSBhZG1pbiBhY2Nlc3NcclxuICAgIGNvbnN0IGFkbWluUmVzdWx0ID0gYXdhaXQgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgICBpZiAoIWFkbWluUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgYXMgYWRtaW4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29raW5nSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBJRCBpcyByZXF1aXJlZCcgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUFkbWluQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gR2V0IGJvb2tpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogYm9va2luZywgZXJyb3I6IGJvb2tpbmdFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBib29raW5nSWQpXHJcbiAgICAgIC5tYXliZVNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChib29raW5nRXJyb3IgfHwgIWJvb2tpbmcpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXIgSURzXHJcbiAgICBjb25zdCBjbGVhbmVySWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpIHtcclxuICAgICAgY2xlYW5lcklkcy5wdXNoKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzICYmIEFycmF5LmlzQXJyYXkoYm9va2luZy5wcmVmZXJyZWRfY2xlYW5lcl9pZHMpKSB7XHJcbiAgICAgIGJvb2tpbmcucHJlZmVycmVkX2NsZWFuZXJfaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoaWQgJiYgIWNsZWFuZXJJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICBjbGVhbmVySWRzLnB1c2goaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGNsZWFuZXIgZGV0YWlsc1xyXG4gICAgbGV0IGNsZWFuZXJzOiBBcnJheTx7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZW1haWw/OiBzdHJpbmcgfCBudWxsOyBwaG9uZT86IHN0cmluZyB8IG51bGwgfT4gPSBbXTtcclxuICAgIGlmIChjbGVhbmVySWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjbGVhbmVyc0RhdGEsIGVycm9yOiBjbGVhbmVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdjbGVhbmVycycpXHJcbiAgICAgICAgLnNlbGVjdCgnaWQsIG5hbWUsIGVtYWlsLCBwaG9uZScpXHJcbiAgICAgICAgLmluKCdpZCcsIGNsZWFuZXJJZHMpO1xyXG5cclxuICAgICAgaWYgKCFjbGVhbmVyc0Vycm9yICYmIGNsZWFuZXJzRGF0YSkge1xyXG4gICAgICAgIGNsZWFuZXJzID0gY2xlYW5lcnNEYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYm9va2luZzogYm9va2luZyBhcyBCb29raW5nLCBjbGVhbmVycyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRCb29raW5nV2l0aENsZWFuZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGJvb2tpbmcgd2l0aCBjbGVhbmVycycsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQXVDc0IsNExBQUEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$df00de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:df00de [app-client] (ecmascript) <text/javascript>");
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
                        const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$df00de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$df00de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/data:df00de [app-client] (ecmascript) <text/javascript>");
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
                        const adminResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$data$3a$df00de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentAdmin"])();
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

//# sourceMappingURL=_cef09f38._.js.map