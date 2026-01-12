module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/utils/password.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
const pbkdf2Async = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["pbkdf2"]);
async function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    const iterations = 100000;
    const keyLength = 64;
    const digest = 'sha256';
    const hash = await pbkdf2Async(password, salt, iterations, keyLength, digest);
    const hashHex = hash.toString('hex');
    // Store as: iterations:salt:hash
    return `${iterations}:${salt}:${hashHex}`;
}
async function verifyPassword(password, storedHash) {
    try {
        const [iterations, salt, hashHex] = storedHash.split(':');
        if (!iterations || !salt || !hashHex) {
            return false;
        }
        const keyLength = 64;
        const digest = 'sha256';
        const hash = await pbkdf2Async(password, salt, parseInt(iterations, 10), keyLength, digest);
        const computedHash = hash.toString('hex');
        return computedHash === hashHex;
    } catch (error) {
        console.error('Error verifying password:', error);
        return false;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eaa26cbd._.js.map