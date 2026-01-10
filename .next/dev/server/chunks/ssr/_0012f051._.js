module.exports = [
"[project]/app/booking/book/components/ProgressIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressIndicator",
    ()=>ProgressIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ProgressIndicator({ currentStep, serviceSlug, onStepClick, isStepCompleted }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const getStepUrl = (step)=>{
        const baseUrls = {
            1: '/booking/details',
            2: '/booking/worker',
            3: '/booking/submit'
        };
        const baseUrl = baseUrls[step] || '/booking/details';
        return serviceSlug ? `${baseUrl}/${serviceSlug}` : baseUrl;
    };
    const steps = [
        {
            number: 1,
            label: 'Details',
            url: getStepUrl(1)
        },
        {
            number: 2,
            label: 'Worker',
            url: getStepUrl(2)
        },
        {
            number: 3,
            label: 'Submit',
            url: getStepUrl(3)
        }
    ];
    const handleStepClick = (step, url)=>{
        // Allow clicking on current step or completed steps (backward navigation)
        // Prevent clicking on future incomplete steps
        if (step <= currentStep || isStepCompleted && isStepCompleted(step)) {
            if (onStepClick) {
                onStepClick(step, url);
            } else {
                router.push(url);
            }
        }
    };
    const isStepClickable = (step)=>{
        return step <= currentStep || isStepCompleted && isStepCompleted(step);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center justify-center flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between relative w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-4 right-4 top-4 h-0.5 bg-border z-0"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        steps.map((step)=>{
                            const isActive = step.number === currentStep;
                            const isCompleted = step.number < currentStep || isStepCompleted && isStepCompleted(step.number);
                            const isClickable = isStepClickable(step.number);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-2 relative z-10", step.number === 2 && "absolute left-1/2 -translate-x-1/2", isClickable && "cursor-pointer hover:opacity-80 transition-opacity", !isClickable && "cursor-not-allowed"),
                                onClick: ()=>isClickable && handleStepClick(step.number, step.url),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold transition-colors", isActive && "bg-primary border-primary text-primary-foreground", isCompleted && !isActive && "bg-muted border border-border text-muted-foreground", !isActive && !isCompleted && "bg-muted border border-border text-foreground"),
                                        children: step.number
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium whitespace-nowrap transition-colors", isActive && "text-primary font-semibold", isCompleted && !isActive && "text-muted-foreground", !isActive && !isCompleted && "text-foreground"),
                                        children: step.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, step.number, true, {
                                fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden flex items-center justify-center flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between relative w-[200px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-3 right-3 top-3 h-0.5 bg-border z-0"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        steps.map((step)=>{
                            const isActive = step.number === currentStep;
                            const isCompleted = step.number < currentStep || isStepCompleted && isStepCompleted(step.number);
                            const isClickable = isStepClickable(step.number);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 relative z-10", step.number === 2 && "absolute left-1/2 -translate-x-1/2", isClickable && "cursor-pointer hover:opacity-80 transition-opacity", !isClickable && "cursor-not-allowed"),
                                onClick: ()=>isClickable && handleStepClick(step.number, step.url),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded-full border flex items-center justify-center text-xs font-semibold transition-colors", isActive && "bg-primary border-primary text-primary-foreground", isCompleted && !isActive && "bg-muted border border-border text-muted-foreground", !isActive && !isCompleted && "bg-muted border border-border text-foreground"),
                                        children: step.number
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium whitespace-nowrap transition-colors", isActive && "text-primary font-semibold", isCompleted && !isActive && "text-muted-foreground", !isActive && !isCompleted && "text-foreground"),
                                        children: step.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, step.number, true, {
                                fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/ProgressIndicator.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findServiceBySlug",
    ()=>findServiceBySlug,
    "generateSlug",
    ()=>generateSlug,
    "getServiceSlugById",
    ()=>getServiceSlugById
]);
function generateSlug(name) {
    return name.toLowerCase().trim()// Replace slashes with hyphens
    .replace(/\//g, '-')// Replace spaces and special characters with hyphens
    .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')// Remove multiple consecutive hyphens
    .replace(/-+/g, '-')// Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}
function findServiceBySlug(services, slug) {
    return services.find((service)=>generateSlug(service.name) === slug);
}
function getServiceSlugById(services, serviceId) {
    const service = services.find((s)=>s.id === serviceId);
    return service ? generateSlug(service.name) : undefined;
}
}),
"[project]/app/booking/book/hooks/useBookingForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookingForm",
    ()=>useBookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/slug.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const STORAGE_KEY = 'shalean_booking_form_draft';
const DISCOUNT_AMOUNT_KEY = 'shalean_booking_discount_amount';
// URL to step mapping (supports both with and without slug)
const getStepFromPath = (pathname)=>{
    if (pathname.startsWith('/booking/details')) return 1;
    if (pathname.startsWith('/booking/worker')) return 2;
    if (pathname.startsWith('/booking/submit')) return 3;
    return 1;
};
// Extract service slug from pathname
const extractServiceSlug = (pathname)=>{
    const match = pathname.match(/\/booking\/(details|worker|submit)\/([^/]+)/);
    return match ? match[2] : null;
};
const defaultFormData = {
    // Step 1
    serviceId: '',
    bedrooms: '0',
    bathrooms: '1',
    additionalServices: [],
    cleaningEquipment: '',
    serviceDate: '',
    serviceTime: '',
    serviceDuration: 3.5,
    specialInstructions: '',
    // Carpet Cleaning specific fields
    carpetTypes: [],
    roomStatus: '',
    numberOfFittedRooms: '',
    numberOfLooseCarpets: '',
    numberOfCleaners: 1,
    // Step 2
    serviceAddress: '',
    serviceAptUnit: '',
    serviceSuburb: '',
    serviceCity: '',
    preferredCleanerIds: [],
    cleaningFrequency: 'one-time',
    // Step 3
    customerFirstName: '',
    customerLastName: '',
    customerEmail: '',
    customerPhone: '',
    tipAmount: 0,
    discountCode: '',
    referralCode: ''
};
function useBookingForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultFormData);
    const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Get current step from URL
    const currentStep = getStepFromPath(pathname);
    // Get service slug from URL
    const serviceSlug = extractServiceSlug(pathname);
    // Load draft from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            const savedReferralCode = localStorage.getItem('shalean_referral_code');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Migrate old preferredCleanerId to preferredCleanerIds array
                if (parsed.preferredCleanerId !== undefined && parsed.preferredCleanerIds === undefined) {
                    parsed.preferredCleanerIds = parsed.preferredCleanerId ? [
                        parsed.preferredCleanerId
                    ] : [];
                    delete parsed.preferredCleanerId; // Remove old field
                }
                // Ensure preferredCleanerIds is always an array
                if (!Array.isArray(parsed.preferredCleanerIds)) {
                    parsed.preferredCleanerIds = [];
                }
                // Preserve referral code from localStorage if not in saved data
                if (savedReferralCode && !parsed.referralCode) {
                    parsed.referralCode = savedReferralCode;
                }
                setFormData({
                    ...defaultFormData,
                    ...parsed
                });
            } else if (savedReferralCode) {
                // If no saved form data but referral code exists, set it
                setFormData({
                    ...defaultFormData,
                    referralCode: savedReferralCode
                });
            }
        } catch (error) {
            console.error('Error loading form draft:', error);
        }
    }, []);
    // Auto-save to localStorage when form data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDirty) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
            } catch (error) {
                console.error('Error saving form draft:', error);
            }
        }
    }, [
        formData,
        isDirty
    ]);
    const updateFormData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updates)=>{
        setFormData((prev)=>{
            const updated = {
                ...prev,
                ...updates
            };
            // Ensure preferredCleanerIds is always an array
            if (updated.preferredCleanerIds !== undefined && !Array.isArray(updated.preferredCleanerIds)) {
                updated.preferredCleanerIds = [];
            }
            setIsDirty(true);
            return updated;
        });
    }, []);
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setFormData(defaultFormData);
        setIsDirty(false);
        try {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(DISCOUNT_AMOUNT_KEY);
        } catch (error) {
            console.error('Error clearing form draft:', error);
        }
        router.push('/booking/details');
    }, [
        router
    ]);
    // Get URL for a step, preserving service slug if available
    const getStepUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((step, slug)=>{
        const stepPaths = {
            1: '/booking/details',
            2: '/booking/worker',
            3: '/booking/submit'
        };
        const baseUrl = stepPaths[step];
        if (!baseUrl) return '/booking/details';
        // Priority: provided slug > current URL slug > generate from formData > no slug
        let finalSlug = slug;
        // If no slug provided, use current URL slug
        if (!finalSlug) {
            finalSlug = serviceSlug;
        }
        // If still no slug, try to generate from formData (only if services are loaded)
        if (!finalSlug && formData.serviceId && services.length > 0) {
            finalSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServiceSlugById"])(services, formData.serviceId) || null;
        }
        return finalSlug ? `${baseUrl}/${finalSlug}` : baseUrl;
    }, [
        formData.serviceId,
        services,
        serviceSlug
    ]);
    const nextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentStep < 3) {
            const nextStepNumber = currentStep + 1;
            const nextUrl = getStepUrl(nextStepNumber);
            // Always navigate to next step
            router.push(nextUrl);
        }
    }, [
        currentStep,
        router,
        getStepUrl
    ]);
    const previousStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentStep > 1) {
            const prevUrl = getStepUrl(currentStep - 1);
            router.push(prevUrl);
        }
    }, [
        currentStep,
        router,
        getStepUrl
    ]);
    const goToStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((step)=>{
        if (step >= 1 && step <= 3) {
            const url = getStepUrl(step);
            router.push(url);
        }
    }, [
        router,
        getStepUrl
    ]);
    const goToStepByUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((url)=>{
        const step = getStepFromPath(url);
        if (step >= 1 && step <= 3) {
            router.push(url);
        }
    }, [
        router
    ]);
    // Set services for slug generation
    const setServicesForSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((servicesList)=>{
        setServices(servicesList);
    }, []);
    // Validation for each step
    const validateStep1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const errors = [];
        if (!formData.serviceId) {
            errors.push('Please select a service');
        }
        if (!formData.serviceDate) {
            errors.push('Please select a date');
        }
        if (!formData.serviceTime) {
            errors.push('Please select a time');
        }
        if (formData.serviceTime && (!formData.serviceDuration || formData.serviceDuration < 3.5 || formData.serviceDuration > 10)) {
            errors.push('Service duration must be between 3.5 and 10 hours');
        }
        // Only require cleaning equipment for Standard and Airbnb services
        // Note: We can't check service name here without services data, so we'll check in the component
        // For now, we'll make it optional and validate in the component if needed
        return {
            valid: errors.length === 0,
            errors
        };
    }, [
        formData
    ]);
    const validateStep2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const errors = [];
        if (!formData.serviceAddress.trim()) {
            errors.push('Please enter service address');
        }
        if (!formData.serviceSuburb.trim()) {
            errors.push('Please enter suburb');
        }
        if (!formData.serviceCity.trim()) {
            errors.push('Please enter city');
        }
        // Validate cleaner selection count
        if (formData.numberOfCleaners > 1) {
            const selectedCleaners = formData.preferredCleanerIds || [];
            if (selectedCleaners.length !== formData.numberOfCleaners) {
                errors.push(`Please select exactly ${formData.numberOfCleaners} cleaners`);
            }
        }
        // For single cleaner (numberOfCleaners === 1), no validation needed - user can select 0 or 1
        return {
            valid: errors.length === 0,
            errors
        };
    }, [
        formData
    ]);
    const validateStep3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const errors = [];
        if (!formData.customerFirstName.trim()) {
            errors.push('Please enter your first name');
        }
        if (!formData.customerLastName.trim()) {
            errors.push('Please enter your last name');
        }
        if (!formData.customerEmail.trim()) {
            errors.push('Please enter your email');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
            errors.push('Please enter a valid email address');
        }
        if (!formData.customerPhone.trim()) {
            errors.push('Please enter your phone number');
        }
        return {
            valid: errors.length === 0,
            errors
        };
    }, [
        formData
    ]);
    const validateCurrentStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        switch(currentStep){
            case 1:
                return validateStep1();
            case 2:
                return validateStep2();
            case 3:
                return validateStep3();
            default:
                return {
                    valid: false,
                    errors: [
                        'Invalid step'
                    ]
                };
        }
    }, [
        currentStep,
        validateStep1,
        validateStep2,
        validateStep3
    ]);
    // Check if a step is completed (for navigation validation)
    const isStepCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((step)=>{
        switch(step){
            case 1:
                return validateStep1().valid;
            case 2:
                return validateStep1().valid && validateStep2().valid;
            case 3:
                return validateStep1().valid && validateStep2().valid && validateStep3().valid;
            default:
                return false;
        }
    }, [
        validateStep1,
        validateStep2,
        validateStep3
    ]);
    // Get discount amount from localStorage
    const getDiscountAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            const saved = localStorage.getItem(DISCOUNT_AMOUNT_KEY);
            return saved ? parseFloat(saved) : 0;
        } catch (error) {
            console.error('Error reading discount amount:', error);
            return 0;
        }
    }, []);
    // Set discount amount in localStorage
    const setDiscountAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount)=>{
        try {
            localStorage.setItem(DISCOUNT_AMOUNT_KEY, amount.toString());
        } catch (error) {
            console.error('Error saving discount amount:', error);
        }
    }, []);
    // Clear discount amount
    const clearDiscountAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            localStorage.removeItem(DISCOUNT_AMOUNT_KEY);
        } catch (error) {
            console.error('Error clearing discount amount:', error);
        }
    }, []);
    return {
        currentStep,
        serviceSlug,
        formData,
        updateFormData,
        resetForm,
        nextStep,
        previousStep,
        goToStep,
        goToStepByUrl,
        getStepUrl,
        setServicesForSlug,
        isStepCompleted,
        getDiscountAmount,
        setDiscountAmount,
        clearDiscountAmount,
        validateStep1,
        validateStep2,
        validateStep3,
        validateCurrentStep
    };
}
}),
"[project]/app/booking/book/context/BookingFormContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingFormProvider",
    ()=>BookingFormProvider,
    "useBookingFormContext",
    ()=>useBookingFormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$hooks$2f$useBookingForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/hooks/useBookingForm.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const BookingFormContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function BookingFormProvider({ children }) {
    const bookingForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$hooks$2f$useBookingForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingForm"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingFormContext.Provider, {
        value: bookingForm,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/booking/book/context/BookingFormContext.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function useBookingFormContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BookingFormContext);
    if (context === undefined) {
        throw new Error('useBookingFormContext must be used within a BookingFormProvider');
    }
    return context;
}
}),
"[project]/app/booking/quote/data:efce58 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServices",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00f6a41d53889140d7e9eb8567bc58b1384742947f":"getServices"},"app/booking/quote/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00f6a41d53889140d7e9eb8567bc58b1384742947f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getServices");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBRdW90ZUZvcm1EYXRhLCBRdW90ZVN0YXR1cywgUXVvdGUsIFNlcnZpY2UsIEFkZGl0aW9uYWxTZXJ2aWNlLCBIb21lRGV0YWlsT3B0aW9uLCBDbGVhbmluZ0VxdWlwbWVudCB9IGZyb20gJ0AvdHlwZXMvcXVvdGUnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlUXVvdGVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IFF1b3RlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU2F2ZSBvciB1cGRhdGUgYSBxdW90ZSBkcmFmdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVRdW90ZURyYWZ0KFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZm9ybURhdGE6IFF1b3RlRm9ybURhdGFcclxuKTogUHJvbWlzZTxTYXZlUXVvdGVSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBkcmFmdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nRHJhZnQuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdkcmFmdCcsXHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGF0ZXN0IGRyYWZ0IHF1b3RlIGZvciBhbiBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RlRHJhZnQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8UXVvdGUgfCBudWxsPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ3N0YXR1cycsICdkcmFmdCcpXHJcbiAgICAgIC5vcmRlcigndXBkYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBJZiBubyBkcmFmdCBleGlzdHMsIHRoYXQncyBva2F5IC0gcmV0dXJuIG51bGxcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQR1JTVDExNicpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZSBkcmFmdDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhIGFzIFF1b3RlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgcXVvdGVzIChkcmFmdHMgYW5kIHN1Ym1pdHRlZCkgZm9yIGFuIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGVzQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxRdW90ZVtdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBRdW90ZVtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3VibWl0IGEgcXVvdGUgKGNoYW5nZSBzdGF0dXMgZnJvbSBkcmFmdCB0byBzdWJtaXR0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVvdGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBmb3JtRGF0YTogUXVvdGVGb3JtRGF0YVxyXG4pOiBQcm9taXNlPFNhdmVRdW90ZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIGRyYWZ0IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0IHRvIHN1Ym1pdHRlZFxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnc3VibWl0dGVkJyxcclxuICAgICAgICAgIGZvcm1fZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmdEcmFmdC5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIHF1b3RlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9ib29raW5nL3F1b3RlJyk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgUXVvdGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgc3VibWl0dGVkIHF1b3RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdzdWJtaXR0ZWQnLFxyXG4gICAgICAgICAgZm9ybV9kYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHN1Ym1pdHRlZCBxdW90ZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKCcvYm9va2luZy9xdW90ZScpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc3VibWl0dGluZyBxdW90ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGFjdGl2ZSBzZXJ2aWNlcyBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlcygpOiBQcm9taXNlPFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFkZGl0aW9uYWwgc2VydmljZXMsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbFNlcnZpY2VzKHNlcnZpY2VJZD86IHN0cmluZyk6IFByb21pc2U8QWRkaXRpb25hbFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlSWQpIHtcclxuICAgICAgLy8gR2V0IGFkZGl0aW9uYWwgc2VydmljZXMgZmlsdGVyZWQgYnkgc2VydmljZSBydWxlc1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQsXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOmFkZGl0aW9uYWxfc2VydmljZV9pZCgqKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXMgYnkgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IGFuZCBmb3JtYXQgdGhlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VzID0gKGRhdGEgfHwgW10pXHJcbiAgICAgICAgLm1hcCgocnVsZTogYW55KSA9PiBydWxlLmFkZGl0aW9uYWxfc2VydmljZXMpXHJcbiAgICAgICAgLmZpbHRlcigoc2VydmljZTogQWRkaXRpb25hbFNlcnZpY2UpID0+IHNlcnZpY2UgJiYgc2VydmljZS5pc19hY3RpdmUpXHJcbiAgICAgICAgLnNvcnQoKGE6IEFkZGl0aW9uYWxTZXJ2aWNlLCBiOiBBZGRpdGlvbmFsU2VydmljZSkgPT4gYS5kaXNwbGF5X29yZGVyIC0gYi5kaXNwbGF5X29yZGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBhZGRpdGlvbmFsU2VydmljZXMgYXMgQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBhbGwgYWN0aXZlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBBZGRpdGlvbmFsU2VydmljZVtdO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBob21lIGRldGFpbCBvcHRpb25zIGZvciBhIHNwZWNpZmljIHR5cGUgKGJlZHJvb21zLCBiYXRocm9vbXMsIGNhcnBldF90eXBlLCByb29tX3N0YXR1cylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIb21lRGV0YWlsT3B0aW9ucyhvcHRpb25UeXBlOiBzdHJpbmcpOiBQcm9taXNlPEhvbWVEZXRhaWxPcHRpb25bXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdob21lX2RldGFpbF9vcHRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnb3B0aW9uX3R5cGUnLCBvcHRpb25UeXBlKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBob21lIGRldGFpbCBvcHRpb25zIGZvciAke29wdGlvblR5cGV9OmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoZGF0YSB8fCBbXSkgYXMgSG9tZURldGFpbE9wdGlvbltdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGhvbWUgZGV0YWlsIG9wdGlvbnMgZm9yICR7b3B0aW9uVHlwZX06YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWN0aXZlIGNsZWFuaW5nIGVxdWlwbWVudCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmluZ0VxdWlwbWVudCgpOiBQcm9taXNlPENsZWFuaW5nRXF1aXBtZW50W10+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5pbmdfZXF1aXBtZW50JylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuaW5nIGVxdWlwbWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIENsZWFuaW5nRXF1aXBtZW50W107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5pbmcgZXF1aXBtZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBK05zQix3TEFBQSJ9
}),
"[project]/app/booking/quote/data:6f8c80 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdditionalServices",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ba270d5bde2a8477c429febb815e3168fe1f680c":"getAdditionalServices"},"app/booking/quote/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ba270d5bde2a8477c429febb815e3168fe1f680c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAdditionalServices");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBRdW90ZUZvcm1EYXRhLCBRdW90ZVN0YXR1cywgUXVvdGUsIFNlcnZpY2UsIEFkZGl0aW9uYWxTZXJ2aWNlLCBIb21lRGV0YWlsT3B0aW9uLCBDbGVhbmluZ0VxdWlwbWVudCB9IGZyb20gJ0AvdHlwZXMvcXVvdGUnO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlUXVvdGVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZGF0YT86IFF1b3RlO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU2F2ZSBvciB1cGRhdGUgYSBxdW90ZSBkcmFmdFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVRdW90ZURyYWZ0KFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbiAgZm9ybURhdGE6IFF1b3RlRm9ybURhdGFcclxuKTogUHJvbWlzZTxTYXZlUXVvdGVSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBkcmFmdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCdpZCcsIGV4aXN0aW5nRHJhZnQuaWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgbmV3IGRyYWZ0XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdkcmFmdCcsXHJcbiAgICAgICAgICBmb3JtX2RhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcXVvdGUgZHJhZnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbGF0ZXN0IGRyYWZ0IHF1b3RlIGZvciBhbiBlbWFpbFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFF1b3RlRHJhZnQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8UXVvdGUgfCBudWxsPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdlbWFpbCcsIGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAuZXEoJ3N0YXR1cycsICdkcmFmdCcpXHJcbiAgICAgIC5vcmRlcigndXBkYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSlcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBJZiBubyBkcmFmdCBleGlzdHMsIHRoYXQncyBva2F5IC0gcmV0dXJuIG51bGxcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdQR1JTVDExNicpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZSBkcmFmdDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhIGFzIFF1b3RlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlIGRyYWZ0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgcXVvdGVzIChkcmFmdHMgYW5kIHN1Ym1pdHRlZCkgZm9yIGFuIGVtYWlsXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVvdGVzQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxRdW90ZVtdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnZW1haWwnLCBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdW90ZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBRdW90ZVtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIHF1b3RlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogU3VibWl0IGEgcXVvdGUgKGNoYW5nZSBzdGF0dXMgZnJvbSBkcmFmdCB0byBzdWJtaXR0ZWQpXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVvdGUoXHJcbiAgZW1haWw6IHN0cmluZyxcclxuICBmb3JtRGF0YTogUXVvdGVGb3JtRGF0YVxyXG4pOiBQcm9taXNlPFNhdmVRdW90ZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIGRyYWZ0IGV4aXN0cyBmb3IgdGhpcyBlbWFpbFxyXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ0RyYWZ0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncXVvdGVzJylcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuZXEoJ2VtYWlsJywgZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIC5lcSgnc3RhdHVzJywgJ2RyYWZ0JylcclxuICAgICAgLm9yZGVyKCd1cGRhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC5saW1pdCgxKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGRyYWZ0IHRvIHN1Ym1pdHRlZFxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdxdW90ZXMnKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnc3VibWl0dGVkJyxcclxuICAgICAgICAgIGZvcm1fZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXEoJ2lkJywgZXhpc3RpbmdEcmFmdC5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIHF1b3RlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9ib29raW5nL3F1b3RlJyk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgYXMgUXVvdGUgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZSBuZXcgc3VibWl0dGVkIHF1b3RlXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3F1b3RlcycpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBzdGF0dXM6ICdzdWJtaXR0ZWQnLFxyXG4gICAgICAgICAgZm9ybV9kYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHN1Ym1pdHRlZCBxdW90ZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldmFsaWRhdGVQYXRoKCcvYm9va2luZy9xdW90ZScpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIGFzIFF1b3RlIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igc3VibWl0dGluZyBxdW90ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIGFjdGl2ZSBzZXJ2aWNlcyBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2aWNlcygpOiBQcm9taXNlPFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdzZXJ2aWNlcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIFNlcnZpY2VbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBzZXJ2aWNlczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFkZGl0aW9uYWwgc2VydmljZXMsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgbWFpbiBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbFNlcnZpY2VzKHNlcnZpY2VJZD86IHN0cmluZyk6IFByb21pc2U8QWRkaXRpb25hbFNlcnZpY2VbXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlSWQpIHtcclxuICAgICAgLy8gR2V0IGFkZGl0aW9uYWwgc2VydmljZXMgZmlsdGVyZWQgYnkgc2VydmljZSBydWxlc1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdzZXJ2aWNlX2FkZGl0aW9uYWxfc2VydmljZV9ydWxlcycpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VfaWQsXHJcbiAgICAgICAgICBhZGRpdGlvbmFsX3NlcnZpY2VzOmFkZGl0aW9uYWxfc2VydmljZV9pZCgqKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKCdzZXJ2aWNlX2lkJywgc2VydmljZUlkKTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXMgYnkgc2VydmljZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IGFuZCBmb3JtYXQgdGhlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNlcnZpY2VzID0gKGRhdGEgfHwgW10pXHJcbiAgICAgICAgLm1hcCgocnVsZTogYW55KSA9PiBydWxlLmFkZGl0aW9uYWxfc2VydmljZXMpXHJcbiAgICAgICAgLmZpbHRlcigoc2VydmljZTogQWRkaXRpb25hbFNlcnZpY2UpID0+IHNlcnZpY2UgJiYgc2VydmljZS5pc19hY3RpdmUpXHJcbiAgICAgICAgLnNvcnQoKGE6IEFkZGl0aW9uYWxTZXJ2aWNlLCBiOiBBZGRpdGlvbmFsU2VydmljZSkgPT4gYS5kaXNwbGF5X29yZGVyIC0gYi5kaXNwbGF5X29yZGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBhZGRpdGlvbmFsU2VydmljZXMgYXMgQWRkaXRpb25hbFNlcnZpY2VbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEdldCBhbGwgYWN0aXZlIGFkZGl0aW9uYWwgc2VydmljZXNcclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnYWRkaXRpb25hbF9zZXJ2aWNlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLmVxKCdpc19hY3RpdmUnLCB0cnVlKVxyXG4gICAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChkYXRhIHx8IFtdKSBhcyBBZGRpdGlvbmFsU2VydmljZVtdO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGFkZGl0aW9uYWwgc2VydmljZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBob21lIGRldGFpbCBvcHRpb25zIGZvciBhIHNwZWNpZmljIHR5cGUgKGJlZHJvb21zLCBiYXRocm9vbXMsIGNhcnBldF90eXBlLCByb29tX3N0YXR1cylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIb21lRGV0YWlsT3B0aW9ucyhvcHRpb25UeXBlOiBzdHJpbmcpOiBQcm9taXNlPEhvbWVEZXRhaWxPcHRpb25bXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdob21lX2RldGFpbF9vcHRpb25zJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnb3B0aW9uX3R5cGUnLCBvcHRpb25UeXBlKVxyXG4gICAgICAuZXEoJ2lzX2FjdGl2ZScsIHRydWUpXHJcbiAgICAgIC5vcmRlcignZGlzcGxheV9vcmRlcicsIHsgYXNjZW5kaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBob21lIGRldGFpbCBvcHRpb25zIGZvciAke29wdGlvblR5cGV9OmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoZGF0YSB8fCBbXSkgYXMgSG9tZURldGFpbE9wdGlvbltdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBVbmV4cGVjdGVkIGVycm9yIGZldGNoaW5nIGhvbWUgZGV0YWlsIG9wdGlvbnMgZm9yICR7b3B0aW9uVHlwZX06YCwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgYWN0aXZlIGNsZWFuaW5nIGVxdWlwbWVudCBvcmRlcmVkIGJ5IGRpc3BsYXlfb3JkZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGVhbmluZ0VxdWlwbWVudCgpOiBQcm9taXNlPENsZWFuaW5nRXF1aXBtZW50W10+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnY2xlYW5pbmdfZXF1aXBtZW50JylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaXNfYWN0aXZlJywgdHJ1ZSlcclxuICAgICAgLm9yZGVyKCdkaXNwbGF5X29yZGVyJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsZWFuaW5nIGVxdWlwbWVudDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRhdGEgfHwgW10pIGFzIENsZWFuaW5nRXF1aXBtZW50W107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZmV0Y2hpbmcgY2xlYW5pbmcgZXF1aXBtZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBd1BzQixrTUFBQSJ9
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
"[project]/src/lib/utils/cleaner-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCompletionRate",
    ()=>calculateCompletionRate,
    "calculateOnTimeRate",
    ()=>calculateOnTimeRate,
    "calculateReliabilityScore",
    ()=>calculateReliabilityScore,
    "formatReliabilityScore",
    ()=>formatReliabilityScore,
    "sortCleanersByCriteria",
    ()=>sortCleanersByCriteria
]);
function calculateReliabilityScore(cleaner) {
    const totalBookings = cleaner.total_bookings || 0;
    const completedBookings = cleaner.completed_bookings || 0;
    const onTimeBookings = cleaner.on_time_bookings || 0;
    const rating = cleaner.rating || 0;
    // If no bookings, return default score of 50
    if (totalBookings === 0) {
        return 50.0;
    }
    // Calculate completion rate score (40% weight)
    const completionRateScore = completedBookings / totalBookings * 40.0;
    // Calculate on-time rate score (30% weight)
    const onTimeRateScore = onTimeBookings / totalBookings * 30.0;
    // Calculate rating score (20% weight)
    const ratingScore = rating / 5.0 * 20.0;
    // Calculate volume score (10% weight) - normalized to max 50 bookings
    const volumeScore = Math.min(totalBookings / 50.0, 1.0) * 10.0;
    // Calculate final score
    let finalScore = completionRateScore + onTimeRateScore + ratingScore + volumeScore;
    // Ensure score is between 0 and 100
    finalScore = Math.max(0.0, Math.min(100.0, finalScore));
    return Math.round(finalScore * 100) / 100; // Round to 2 decimal places
}
function formatReliabilityScore(score) {
    if (score === null || score === undefined) {
        return 'N/A';
    }
    return `${score.toFixed(0)}%`;
}
function sortCleanersByCriteria(cleaners, criteria) {
    const sorted = [
        ...cleaners
    ];
    switch(criteria){
        case 'best-match':
            // Sort by: reliability_score (60%) + rating (40%)
            sorted.sort((a, b)=>{
                const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
                const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
                return scoreB - scoreA;
            });
            break;
        case 'highest-rated':
            sorted.sort((a, b)=>(b.rating || 0) - (a.rating || 0));
            break;
        case 'most-reliable':
            sorted.sort((a, b)=>(b.reliability_score || 0) - (a.reliability_score || 0));
            break;
        case 'most-experienced':
            sorted.sort((a, b)=>(b.years_experience || 0) - (a.years_experience || 0));
            break;
        default:
            // Default to best-match
            sorted.sort((a, b)=>{
                const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
                const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
                return scoreB - scoreA;
            });
    }
    return sorted;
}
function calculateCompletionRate(cleaner) {
    const total = cleaner.total_bookings || 0;
    const completed = cleaner.completed_bookings || 0;
    if (total === 0) return 0;
    return Math.round(completed / total * 100);
}
function calculateOnTimeRate(cleaner) {
    const total = cleaner.total_bookings || 0;
    const onTime = cleaner.on_time_bookings || 0;
    if (total === 0) return 0;
    return Math.round(onTime / total * 100);
}
}),
"[project]/app/booking/book/actions-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkCleanerBookingConflictClient",
    ()=>checkCleanerBookingConflictClient,
    "getAvailableCleanersClient",
    ()=>getAvailableCleanersClient,
    "getAvailableCleanersWithCriteriaClient",
    ()=>getAvailableCleanersWithCriteriaClient,
    "getPricingRulesClient",
    ()=>getPricingRulesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cleaner-utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
async function getPricingRulesClient() {
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('pricing_rules').select('*').eq('is_active', true).order('display_order', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching pricing rules:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error fetching pricing rules:', error);
        return [];
    }
}
async function getAvailableCleanersClient(serviceSuburb) {
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        // Build query - only filter by is_active
        let query = supabase.from('cleaners').select('*').eq('is_active', true);
        const { data, error } = await query.order('rating', {
            ascending: false
        }).order('name', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching cleaners:', error);
            return {
                success: false,
                error: 'Failed to fetch cleaners'
            };
        }
        let cleaners = data || [];
        // Filter by is_available if the column exists (client-side filter as fallback)
        cleaners = cleaners.filter((cleaner)=>{
            // If is_available column doesn't exist or is null/undefined, include the cleaner
            // Otherwise, only include if is_available is true
            return cleaner.is_available !== false;
        });
        // Filter by area if suburb is provided
        if (serviceSuburb && cleaners.length > 0) {
            const suburbLower = serviceSuburb.toLowerCase().trim();
            cleaners = cleaners.filter((cleaner)=>{
                // If cleaner has no areas specified, include them (they serve all areas)
                if (!cleaner.areas || cleaner.areas.length === 0) {
                    return true;
                }
                // Check if any area matches the suburb (case-insensitive partial match)
                return cleaner.areas.some((area)=>{
                    const areaLower = area.toLowerCase();
                    return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
                });
            });
        }
        return {
            success: true,
            cleaners: cleaners
        };
    } catch (error) {
        console.error('Unexpected error fetching cleaners:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
async function checkCleanerBookingConflictClient(cleanerId, serviceDate, serviceTime, serviceDuration) {
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        // Query bookings for this cleaner on the specified date
        const { data: bookings, error } = await supabase.from('bookings').select('service_time, service_duration').eq('preferred_cleaner_id', cleanerId).eq('service_date', serviceDate).in('status', [
            'pending',
            'confirmed'
        ]);
        if (error) {
            console.error('Error checking booking conflicts:', error);
            return false; // Assume no conflict on error
        }
        if (!bookings || bookings.length === 0) {
            return false; // No bookings, no conflict
        }
        // Parse the new booking start time
        const [newStartHours, newStartMinutes] = serviceTime.split(':').map(Number);
        const newStartTimeMinutes = newStartHours * 60 + newStartMinutes;
        const serviceDurationMinutes = Math.round(serviceDuration * 60);
        const newEndTimeMinutes = newStartTimeMinutes + serviceDurationMinutes;
        // Check each existing booking for overlap
        for (const booking of bookings){
            if (!booking.service_time) continue;
            // Parse booking start time
            const [bookingStartHours, bookingStartMinutes] = booking.service_time.split(':').slice(0, 2).map(Number);
            const bookingStartTimeMinutes = bookingStartHours * 60 + bookingStartMinutes;
            // Parse booking duration
            const bookingDurationMinutes = Math.round((typeof booking.service_duration === 'number' ? booking.service_duration : parseFloat(booking.service_duration || '0')) * 60);
            const bookingEndTimeMinutes = bookingStartTimeMinutes + bookingDurationMinutes;
            // Check for overlap: new start < existing end AND new end > existing start
            if (newStartTimeMinutes < bookingEndTimeMinutes && newEndTimeMinutes > bookingStartTimeMinutes) {
                return true; // Conflict found
            }
        }
        return false; // No conflicts
    } catch (error) {
        console.error('Unexpected error checking booking conflict:', error);
        return false;
    }
}
async function getAvailableCleanersWithCriteriaClient(params) {
    try {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { serviceSuburb, serviceDate, serviceTime, serviceDuration = 3, minRating = 0, minReliabilityScore = 0 } = params;
        // Build base query
        let query = supabase.from('cleaners').select('*').eq('is_active', true);
        const { data, error } = await query.order('reliability_score', {
            ascending: false,
            nullsFirst: false
        }).order('rating', {
            ascending: false
        }).order('name', {
            ascending: true
        });
        if (error) {
            console.error('Error fetching cleaners:', error);
            return {
                success: false,
                error: 'Failed to fetch cleaners'
            };
        }
        let cleaners = data || [];
        // Filter by is_available
        cleaners = cleaners.filter((cleaner)=>cleaner.is_available !== false);
        // Filter by location (suburb)
        if (serviceSuburb && cleaners.length > 0) {
            const suburbLower = serviceSuburb.toLowerCase().trim();
            cleaners = cleaners.filter((cleaner)=>{
                if (!cleaner.areas || cleaner.areas.length === 0) {
                    return true; // Serve all areas
                }
                return cleaner.areas.some((area)=>{
                    const areaLower = area.toLowerCase();
                    return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
                });
            });
        }
        // Filter by day of week availability if date is provided
        if (serviceDate) {
            const date = new Date(serviceDate);
            const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
            cleaners = cleaners.filter((cleaner)=>{
                const dayMap = {
                    0: 'available_sunday',
                    1: 'available_monday',
                    2: 'available_tuesday',
                    3: 'available_wednesday',
                    4: 'available_thursday',
                    5: 'available_friday',
                    6: 'available_saturday'
                };
                const dayField = dayMap[dayOfWeek];
                return cleaner[dayField] !== false;
            });
        }
        // Filter by minimum rating
        if (minRating > 0) {
            cleaners = cleaners.filter((cleaner)=>(cleaner.rating || 0) >= minRating);
        }
        // Filter by minimum reliability score
        if (minReliabilityScore > 0) {
            cleaners = cleaners.filter((cleaner)=>(cleaner.reliability_score || 0) >= minReliabilityScore);
        }
        // Enrich cleaners with availability and booking conflict information
        const enrichedCleaners = await Promise.all(cleaners.map(async (cleaner)=>{
            let isAvailableForSlot = true;
            let bookingConflict = false;
            // Check booking conflict if date and time are provided
            if (serviceDate && serviceTime && serviceDuration) {
                bookingConflict = await checkCleanerBookingConflictClient(cleaner.id, serviceDate, serviceTime, serviceDuration);
                isAvailableForSlot = !bookingConflict;
            }
            // Calculate reliability score if not present
            const reliabilityScore = cleaner.reliability_score ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateReliabilityScore"])(cleaner);
            return {
                ...cleaner,
                reliability_score: reliabilityScore,
                isAvailableForSlot,
                bookingConflict,
                completionRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCompletionRate"])(cleaner),
                onTimeRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cleaner$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateOnTimeRate"])(cleaner)
            };
        }));
        // Sort by reliability score and rating
        enrichedCleaners.sort((a, b)=>{
            const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
            const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
            return scoreB - scoreA;
        });
        return {
            success: true,
            cleaners: enrichedCleaners
        };
    } catch (error) {
        console.error('Unexpected error fetching cleaners with criteria:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
}),
"[project]/src/lib/utils/service-validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service validation utilities for recurring bookings
 * 
 * Only Standard Cleaning and Airbnb Cleaning support recurring bookings.
 * All other services (Deep Cleaning, Move In/Out, Carpet Cleaning) are One-Time only.
 */ /**
 * Check if a service supports recurring bookings
 * @param serviceName - The name of the service (case-insensitive)
 * @returns true if the service supports recurring bookings, false otherwise
 */ __turbopack_context__.s([
    "getAvailableFrequencies",
    ()=>getAvailableFrequencies,
    "isValidFrequencyForService",
    ()=>isValidFrequencyForService,
    "supportsRecurringBookings",
    ()=>supportsRecurringBookings
]);
function supportsRecurringBookings(serviceName) {
    if (!serviceName) return false;
    const normalizedName = serviceName.toLowerCase().trim();
    // Standard Cleaning supports recurring
    if (normalizedName.includes('standard')) {
        return true;
    }
    // Airbnb Cleaning supports recurring
    if (normalizedName.includes('airbnb')) {
        return true;
    }
    // All other services are One-Time only
    return false;
}
function getAvailableFrequencies(serviceName) {
    if (supportsRecurringBookings(serviceName)) {
        return [
            'one-time',
            'weekly',
            'bi-weekly',
            'monthly'
        ];
    }
    // Non-supported services only allow One-Time
    return [
        'one-time'
    ];
}
function isValidFrequencyForService(serviceName, frequency) {
    const availableFrequencies = getAvailableFrequencies(serviceName);
    return availableFrequencies.includes(frequency);
}
}),
"[project]/src/lib/pricing/calculator-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePriceBreakdownClient",
    ()=>calculatePriceBreakdownClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-ssr] (ecmascript)");
'use client';
;
function calculatePriceBreakdownClient(pricingRules, serviceId, bedrooms, bathrooms, additionalServiceIds, cleaningFrequency, discountAmount = 0, numberOfFittedRooms = '', numberOfLooseCarpets = '', isCarpetCleaning = false, serviceName, cleaningEquipment, numberOfCleaners = 1) {
    // Equipment supply charge constant
    const EQUIPMENT_SUPPLY_CHARGE = 500;
    // Additional cleaner charge constant (R250 per additional cleaner)
    const ADDITIONAL_CLEANER_CHARGE = 250;
    // Base price
    const basePriceRule = pricingRules.find((rule)=>rule.rule_type === 'base_price' && rule.service_id === serviceId);
    const basePrice = basePriceRule?.price || 0;
    // Bedroom price (only for non-carpet services)
    const bedroomRule = pricingRules.find((rule)=>rule.rule_type === 'bedroom' && rule.rule_value === bedrooms);
    const bedroomsPrice = isCarpetCleaning ? 0 : bedroomRule?.price || 0;
    // Bathroom price (only for non-carpet services)
    const bathroomRule = pricingRules.find((rule)=>rule.rule_type === 'bathroom' && rule.rule_value === bathrooms);
    const bathroomsPrice = isCarpetCleaning ? 0 : bathroomRule?.price || 0;
    // Carpet pricing (for carpet cleaning service)
    // Fitted rooms price (per room)
    const fittedRoomRule = pricingRules.find((rule)=>rule.rule_type === 'fitted_room' && rule.rule_key === 'per_room');
    const fittedRoomsPrice = fittedRoomRule?.price ? (parseFloat(numberOfFittedRooms) || 0) * (fittedRoomRule.price || 0) : 0;
    // Loose carpets price (per carpet/rug)
    const looseCarpetRule = pricingRules.find((rule)=>rule.rule_type === 'loose_carpet' && rule.rule_key === 'per_carpet');
    const looseCarpetsPrice = looseCarpetRule?.price ? (parseFloat(numberOfLooseCarpets) || 0) * (looseCarpetRule.price || 0) : 0;
    // Additional services price
    let additionalServicesPrice = 0;
    for (const serviceId of additionalServiceIds){
        const serviceRule = pricingRules.find((rule)=>rule.rule_type === 'additional_service' && rule.additional_service_id === serviceId);
        additionalServicesPrice += serviceRule?.price || 0;
    }
    // Equipment supply charge - only for Standard and Airbnb services when user selects 'yes'
    let equipmentSupplyPrice = 0;
    if (cleaningEquipment === 'yes' && serviceName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName)) {
        equipmentSupplyPrice = EQUIPMENT_SUPPLY_CHARGE;
    }
    // Additional cleaners charge - only for Standard and Airbnb services
    // First cleaner is included in base price, charge for each additional cleaner
    let additionalCleanersPrice = 0;
    if (serviceName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName) && numberOfCleaners > 1) {
        const additionalCleanersCount = Math.max(0, Math.min(numberOfCleaners - 1, 4)); // Max 4 additional (total 5 cleaners)
        additionalCleanersPrice = additionalCleanersCount * ADDITIONAL_CLEANER_CHARGE;
    }
    // Subtotal before discounts
    const subtotal = basePrice + bedroomsPrice + bathroomsPrice + fittedRoomsPrice + looseCarpetsPrice + additionalServicesPrice + equipmentSupplyPrice + additionalCleanersPrice;
    // Frequency discount - only apply to Standard and Airbnb cleaning services
    let frequencyDiscountPercent = 0;
    let frequencyDiscountAmount = 0;
    // Only apply frequency discount if ALL conditions are met:
    // 1. Frequency is not one-time
    // 2. Service name is provided (not undefined, not empty)
    // 3. Service supports recurring bookings (Standard or Airbnb only)
    if (cleaningFrequency !== 'one-time' && serviceName && serviceName.trim() !== '') {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName)) {
            const discountRule = pricingRules.find((rule)=>rule.rule_type === 'frequency_discount' && rule.rule_value === cleaningFrequency);
            frequencyDiscountPercent = discountRule?.percentage || 0;
            frequencyDiscountAmount = subtotal * frequencyDiscountPercent / 100;
        }
    // Explicitly: If service doesn't support recurring, discount remains 0
    // This ensures Deep Cleaning, Move In/Out, and Carpet Cleaning NEVER get discounts
    }
    // Subtotal after frequency discount
    const subtotalAfterFrequencyDiscount = subtotal - frequencyDiscountAmount;
    // Apply discount code (passed in as discountAmount)
    const finalSubtotal = Math.max(0, subtotalAfterFrequencyDiscount - discountAmount);
    // Service fee (calculated on subtotal after frequency discount, before discount code)
    const feeRule = pricingRules.find((rule)=>rule.rule_type === 'service_fee');
    const serviceFeePercentage = feeRule?.percentage || 0;
    const serviceFee = subtotalAfterFrequencyDiscount * serviceFeePercentage / 100;
    // Total amount (subtotal after all discounts + service fee)
    const totalAmount = finalSubtotal + serviceFee;
    return {
        basePrice,
        bedroomsPrice,
        bathroomsPrice,
        fittedRoomsPrice,
        looseCarpetsPrice,
        additionalServicesPrice,
        equipmentSupplyPrice,
        additionalCleanersPrice,
        subtotal,
        frequencyDiscountPercent,
        frequencyDiscountAmount,
        discountAmount,
        serviceFee,
        totalAmount
    };
}
}),
"[project]/src/lib/utils/recurring-dates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculate all booking dates for the current month based on frequency
 * @param startDate - The initial booking date selected by the user
 * @param frequency - 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
 * @returns Array of dates for bookings in the current month
 */ __turbopack_context__.s([
    "calculateBookingDatesForMonth",
    ()=>calculateBookingDatesForMonth,
    "calculateNextBookingDate",
    ()=>calculateNextBookingDate,
    "formatDateForDB",
    ()=>formatDateForDB
]);
function calculateBookingDatesForMonth(startDate, frequency) {
    const dates = [];
    const currentDate = new Date(startDate);
    // Get the month and year of the start date
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    // Get the last day of the month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    switch(frequency){
        case 'one-time':
            // Return only the start date
            dates.push(new Date(startDate));
            break;
        case 'weekly':
            // Find all occurrences of the same day of week in the month
            const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
            const startDay = currentDate.getDate();
            // Start from the selected date
            let weeklyDate = new Date(year, month, startDay);
            // Add all remaining occurrences in the month
            while(weeklyDate.getMonth() === month && weeklyDate.getDate() <= lastDayOfMonth){
                dates.push(new Date(weeklyDate));
                weeklyDate.setDate(weeklyDate.getDate() + 7); // Add 7 days
            }
            break;
        case 'bi-weekly':
            // Find occurrences every 2 weeks in the month
            const biWeeklyStartDay = currentDate.getDate();
            let biWeeklyDate = new Date(year, month, biWeeklyStartDay);
            // Add all occurrences in the month (every 2 weeks)
            while(biWeeklyDate.getMonth() === month && biWeeklyDate.getDate() <= lastDayOfMonth){
                dates.push(new Date(biWeeklyDate));
                biWeeklyDate.setDate(biWeeklyDate.getDate() + 14); // Add 14 days
            }
            break;
        case 'monthly':
            // Return only the start date (one booking per month)
            dates.push(new Date(startDate));
            break;
        default:
            dates.push(new Date(startDate));
    }
    return dates;
}
function calculateNextBookingDate(lastDate, frequency) {
    const nextDate = new Date(lastDate);
    switch(frequency){
        case 'one-time':
            // Should not be called for one-time, but return next month just in case
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case 'weekly':
            // Next booking is 1 week from last date, but we want first of next month
            // So calculate first occurrence of next month
            nextDate.setMonth(nextDate.getMonth() + 1);
            // Keep the same day of week - find first occurrence in next month
            const dayOfWeek = lastDate.getDay();
            const dayOfMonth = lastDate.getDate();
            // Start from the 1st of next month
            nextDate.setDate(1);
            // Find the first occurrence of the same day of week
            while(nextDate.getDay() !== dayOfWeek){
                nextDate.setDate(nextDate.getDate() + 1);
            }
            break;
        case 'bi-weekly':
            // Next booking is 2 weeks from last date, but we want first of next month
            // Calculate first occurrence in next month (same day of week)
            nextDate.setMonth(nextDate.getMonth() + 1);
            const biWeeklyDayOfWeek = lastDate.getDay();
            nextDate.setDate(1);
            // Find the first occurrence of the same day of week
            while(nextDate.getDay() !== biWeeklyDayOfWeek){
                nextDate.setDate(nextDate.getDate() + 1);
            }
            break;
        case 'monthly':
            // Next booking is same day next month
            nextDate.setMonth(nextDate.getMonth() + 1);
            // Handle edge case where day doesn't exist in next month (e.g., Jan 31 -> Feb 28/29)
            const originalDay = lastDate.getDate();
            const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
            nextDate.setDate(Math.min(originalDay, daysInNextMonth));
            break;
        default:
            nextDate.setMonth(nextDate.getMonth() + 1);
    }
    return nextDate;
}
function formatDateForDB(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
}),
"[project]/app/booking/book/components/BookingSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingSummary",
    ()=>BookingSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/service-validation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$recurring$2d$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/recurring-dates.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function BookingSummary({ formData, priceBreakdown, serviceName, additionalServices = [], pricingRules = [] }) {
    // Check if service is carpet cleaning
    const isCarpetCleaning = serviceName?.toLowerCase().includes('carpet') ?? false;
    // Check if service supports recurring bookings (for frequency discount display)
    // Only Standard Cleaning and Airbnb Cleaning support recurring bookings
    const supportsRecurring = serviceName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$service$2d$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRecurringBookings"])(serviceName) : false;
    // CRITICAL: Only show frequency discount if:
    // 1. Service name is provided AND supports recurring bookings
    // 2. Discount amount is greater than 0
    // This ensures Deep Cleaning, Move In/Out, and Carpet Cleaning NEVER show discounts
    const shouldShowFrequencyDiscount = Boolean(serviceName && supportsRecurring && priceBreakdown.frequencyDiscountAmount > 0);
    // Filter additional services to only show those relevant to the selected service type
    const relevantAdditionalServices = formData.additionalServices.filter((serviceId)=>additionalServices.some((s)=>s.id === serviceId));
    // Calculate final subtotal (after all discounts, before service fee)
    const finalSubtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount - priceBreakdown.discountAmount;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-6 sticky top-24 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Booking Summary"
            }, void 0, false, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-muted-foreground",
                        children: "Service"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: serviceName || 'Not selected'
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 pt-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold mb-2",
                        children: "Price Breakdown"
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Base Price"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.basePrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    !isCarpetCleaning && (priceBreakdown.bedroomsPrice > 0 || priceBreakdown.bathroomsPrice > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Bedrooms & Bathrooms (",
                                    formData.bedrooms,
                                    " bed, ",
                                    formData.bathrooms,
                                    " bath)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    (priceBreakdown.bedroomsPrice + priceBreakdown.bathroomsPrice).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    isCarpetCleaning && priceBreakdown.fittedRoomsPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Fitted Rooms (",
                                    formData.numberOfFittedRooms || 0,
                                    " room",
                                    parseInt(formData.numberOfFittedRooms || '0') !== 1 ? 's' : '',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.fittedRoomsPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    isCarpetCleaning && priceBreakdown.looseCarpetsPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Loose Carpets/Rugs (",
                                    formData.numberOfLooseCarpets || 0,
                                    " carpet",
                                    parseInt(formData.numberOfLooseCarpets || '0') !== 1 ? 's' : '',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.looseCarpetsPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    relevantAdditionalServices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: relevantAdditionalServices.map((serviceId)=>{
                            const service = additionalServices.find((s)=>s.id === serviceId);
                            const priceRule = pricingRules.find((r)=>r.rule_type === 'additional_service' && r.additional_service_id === serviceId);
                            const price = priceRule?.price || 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: service?.name || 'Additional Service'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "R",
                                            price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, serviceId, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this) : priceBreakdown.additionalServicesPrice > 0 ? // Fallback: Show total if price > 0 but services not found (shouldn't happen with proper filtering)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Additional Services"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.additionalServicesPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this) : null,
                    priceBreakdown.equipmentSupplyPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Equipment & Supplies"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.equipmentSupplyPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    priceBreakdown.additionalCleanersPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Additional Cleaners (",
                                    formData.numberOfCleaners - 1,
                                    " × R250)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.additionalCleanersPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    shouldShowFrequencyDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-green-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Frequency Discount (",
                                    priceBreakdown.frequencyDiscountPercent.toFixed(0),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "-R",
                                    priceBreakdown.frequencyDiscountAmount.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    priceBreakdown.discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-green-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Discount Code",
                                    formData.discountCode ? ` (${formData.discountCode})` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "-R",
                                    priceBreakdown.discountAmount.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm font-semibold pt-2 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    Math.max(0, finalSubtotal).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Service Fee"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    priceBreakdown.serviceFee.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    formData.tipAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "Tip",
                                    isRecurring && shouldCalculateRecurringTotal ? ' (one-time, first booking only)' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "R",
                                    formData.tipAmount.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            formData.serviceDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: "Schedule"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(formData.serviceDate), 'MMMM do, yyyy'),
                                    " @ ",
                                    formData.serviceTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            formData.serviceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formData.serviceDuration % 1 === 0 ? `${formData.serviceDuration} hours` : `${formData.serviceDuration.toFixed(1)} hours`
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            formData.serviceAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-4 h-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: "Address"
                            }, void 0, false, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: formData.serviceCity
                    }, void 0, false, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 border-t border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold block",
                                        children: shouldCalculateRecurringTotal ? `Total (${numberOfBookingsInMonth} ${numberOfBookingsInMonth === 1 ? 'booking' : 'bookings'} this month)` : 'Total'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: shouldCalculateRecurringTotal ? `${getFrequencyLabel()} recurring - All fees included` : isRecurring && !hasServiceDate ? 'Select a date to see monthly total' : 'All fees included'
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-primary",
                                children: [
                                    "R",
                                    shouldCalculateRecurringTotal ? recurringTotal.toFixed(2) : (priceBreakdown.totalAmount + tipAmount).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    shouldCalculateRecurringTotal && numberOfBookingsInMonth > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-muted-foreground text-right",
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
                        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/book/components/BookingSummary.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-foreground text-primary-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo.png",
                                                alt: "Shalean Logo",
                                                width: 40,
                                                height: 40,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 13,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xl",
                                            children: "Shalean"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary-foreground/70 mb-6",
                                    children: "Professional cleaning services across South Africa. Your trusted partner for spotless spaces."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.facebook.com/shaleancleaning",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://x.com/shaloclean",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/shalean_cleaning_services/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/shalean-cleaning-services-5599a4256/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        "Home",
                                        "About Us",
                                        "Services",
                                        "Pricing",
                                        "Blog",
                                        "Contact"
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-primary-foreground/70 hover:text-primary transition-colors",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, link, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        "Residential Cleaning",
                                        "Commercial Cleaning",
                                        "Deep Cleaning",
                                        "Move In/Out Cleaning",
                                        "Industrial Cleaning",
                                        "Office Cleaning"
                                    ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-primary-foreground/70 hover:text-primary transition-colors",
                                                children: service
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, service, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-5 h-5 text-primary mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary-foreground/70",
                                                    children: "39 Harvey Rd, Claremont, Cape Town, 7780, South Africa"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+27871535250",
                                                    className: "text-primary-foreground/70 hover:text-primary transition-colors",
                                                    children: "(+27) 87 153 5250"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-5 h-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:info@shalean.co.za",
                                                    className: "text-primary-foreground/70 hover:text-primary transition-colors",
                                                    children: "info@shalean.co.za"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-foreground/50 text-sm",
                            children: "© 2026 Shalean Cleaning Services. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-primary-foreground/50 hover:text-primary text-sm transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-primary-foreground/50 hover:text-primary text-sm transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/app/booking/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$ProgressIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/components/ProgressIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/context/BookingFormContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$efce58__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:efce58 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$quote$2f$data$3a$6f8c80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/booking/quote/data:6f8c80 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$actions$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/actions-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing/calculator-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$BookingSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/booking/book/components/BookingSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
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
// Get step from pathname (supports both with and without slug)
const getStepFromPath = (pathname)=>{
    if (pathname.startsWith('/booking/details')) return 1;
    if (pathname.startsWith('/booking/worker')) return 2;
    if (pathname.startsWith('/booking/submit')) return 3;
    return 1;
};
function BookingLayoutContent({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const currentStep = getStepFromPath(pathname);
    const serviceSlug = params.serviceSlug;
    const { formData, updateFormData, isStepCompleted, getDiscountAmount, clearDiscountAmount, setServicesForSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingFormContext"])();
    // Get discount amount from localStorage (reactive)
    // Initialize to 0 to match server render and prevent hydration mismatch
    const [discountAmount, setDiscountAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const hasClearedDiscountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Store functions in refs to ensure stable references
    const updateFormDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(updateFormData);
    const clearDiscountAmountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(clearDiscountAmount);
    // Always update refs to latest functions (they should be stable due to useCallback)
    updateFormDataRef.current = updateFormData;
    clearDiscountAmountRef.current = clearDiscountAmount;
    // Clear discount code and amount on page refresh/initial load
    // This only runs once on mount (page refresh), not during client-side navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasClearedDiscountRef.current) {
            // Clear discount code from formData
            updateFormDataRef.current({
                discountCode: ''
            });
            // Clear discount amount from localStorage
            clearDiscountAmountRef.current();
            setDiscountAmount(0);
            hasClearedDiscountRef.current = true;
        }
    }, []); // Empty array - refs ensure we always have access to latest functions
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
    // Track previous serviceId to detect changes
    const previousServiceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(formData.serviceId);
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
        }
        // Update the ref for next comparison
        previousServiceIdRef.current = currentServiceId;
    }, [
        formData.serviceId,
        updateFormData
    ]);
    // Fetch services for service name
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
    // Validate and set service from slug if present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (serviceSlug && services.length > 0) {
            const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findServiceBySlug"])(services, serviceSlug);
            if (service && (!formData.serviceId || formData.serviceId !== service.id)) {
                updateFormData({
                    serviceId: service.id
                });
            }
        }
    }, [
        serviceSlug,
        services,
        formData.serviceId,
        updateFormData
    ]);
    // Fetch and cache pricing rules (only fetched once)
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
    // IMPORTANT: All formData properties that affect pricing are in the dependency array below to ensure real-time updates
    const priceBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // For carpet cleaning, we don't need bedrooms/bathrooms
        // For other services, we need bedrooms/bathrooms
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
        // Filter additional services to only include those relevant to the selected service type
        // This ensures the price calculation matches what's displayed in the summary
        const relevantAdditionalServiceIds = formData.additionalServices.filter((serviceId)=>additionalServices.some((s)=>s.id === serviceId));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2f$calculator$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePriceBreakdownClient"])(pricingRules, formData.serviceId, formData.bedrooms || '0', formData.bathrooms || '1', relevantAdditionalServiceIds, formData.cleaningFrequency, discountAmount, formData.numberOfFittedRooms || '', formData.numberOfLooseCarpets || '', isCarpetCleaning, selectedService?.name, formData.cleaningEquipment, formData.numberOfCleaners || 1);
    }, [
        pricingRules,
        formData.serviceId,
        formData.bedrooms,
        formData.bathrooms,
        // Use JSON.stringify for array dependency to ensure proper change detection
        // This ensures real-time updates when additionalServices array contents change
        JSON.stringify(formData.additionalServices),
        formData.cleaningFrequency,
        formData.numberOfFittedRooms,
        formData.numberOfLooseCarpets,
        formData.cleaningEquipment,
        formData.numberOfCleaners,
        discountAmount,
        isCarpetCleaning,
        // additionalServices from query - React Query manages cache stability
        // We track it to detect when available services change for the selected service
        additionalServices,
        selectedService?.name
    ]);
    // Check if we're on the confirmation page
    const isConfirmationPage = pathname.startsWith('/booking/confirmation');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-muted/30",
        children: [
            !isConfirmationPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 bg-white border-b border-border mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-6 py-4 max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 absolute left-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: "Shalean Logo",
                                            width: 40,
                                            height: 40,
                                            className: "object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/layout.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/layout.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline font-bold text-xl text-foreground",
                                        children: "Shalean"
                                    }, void 0, false, {
                                        fileName: "[project]/app/booking/layout.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/layout.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$ProgressIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressIndicator"], {
                                currentStep: currentStep,
                                serviceSlug: serviceSlug || null,
                                isStepCompleted: isStepCompleted
                            }, void 0, false, {
                                fileName: "[project]/app/booking/layout.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/layout.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/booking/layout.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/layout.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 md:px-6 py-8 max-w-7xl",
                children: isConfirmationPage ? // On confirmation page, render children directly without grid layout
                children : // On other booking pages, use grid layout with sidebar
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-8",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/booking/layout.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$components$2f$BookingSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingSummary"], {
                                formData: formData,
                                priceBreakdown: priceBreakdown,
                                serviceName: selectedService?.name,
                                additionalServices: additionalServices,
                                pricingRules: pricingRules
                            }, void 0, false, {
                                fileName: "[project]/app/booking/layout.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/booking/layout.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/layout.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/booking/layout.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            !isConfirmationPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/booking/layout.tsx",
                lineNumber: 290,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/booking/layout.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
function BookingLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$booking$2f$book$2f$context$2f$BookingFormContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingFormProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingLayoutContent, {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/booking/layout.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/layout.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0012f051._.js.map