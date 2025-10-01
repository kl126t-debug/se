// MD5 implementation
function r(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function n(n, t, e, o, u, c) {
    return r((t = r(r(t, n), r(o, c))) << u | t >>> 32 - u, e);
}

function t(r, t, e, o, u, c, f) {
    return n(t & e | ~t & o, r, t, u, c, f);
}

function e(r, t, e, o, u, c, f) {
    return n(t & o | e & ~o, r, t, u, c, f);
}

function o(r, t, e, o, u, c, f) {
    return n(t ^ e ^ o, r, t, u, c, f);
}

function u(r, t, e, o, u, c, f) {
    return n(e ^ (t | ~o), r, t, u, c, f);
}

function c(n) {
    for (var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0; h < n.length; h += 16) {
        var l = c, g = f, v = i, d = a;
        c = t(c, f, i, a, n[h + 0], 7, -680876936),
        a = t(a, c, f, i, n[h + 1], 12, -389564586),
        i = t(i, a, c, f, n[h + 2], 17, 606105819),
        f = t(f, i, a, c, n[h + 3], 22, -1044525330),
        c = t(c, f, i, a, n[h + 4], 7, -176418897),
        a = t(a, c, f, i, n[h + 5], 12, 1200080426),
        i = t(i, a, c, f, n[h + 6], 17, -1473231341),
        f = t(f, i, a, c, n[h + 7], 22, -45705983),
        c = t(c, f, i, a, n[h + 8], 7, 1770035416),
        a = t(a, c, f, i, n[h + 9], 12, -1958414417),
        i = t(i, a, c, f, n[h + 10], 17, -42063),
        f = t(f, i, a, c, n[h + 11], 22, -1990404162),
        c = t(c, f, i, a, n[h + 12], 7, 1804603682),
        a = t(a, c, f, i, n[h + 13], 12, -40341101),
        i = t(i, a, c, f, n[h + 14], 17, -1502002290),
        f = t(f, i, a, c, n[h + 15], 22, 1236535329),
        c = e(c, f, i, a, n[h + 1], 5, -165796510),
        a = e(a, c, f, i, n[h + 6], 9, -1069501632),
        i = e(i, a, c, f, n[h + 11], 14, 643717713),
        f = e(f, i, a, c, n[h + 0], 20, -373897302),
        c = e(c, f, i, a, n[h + 5], 5, -701558691),
        a = e(a, c, f, i, n[h + 10], 9, 38016083),
        i = e(i, a, c, f, n[h + 15], 14, -660478335),
        f = e(f, i, a, c, n[h + 4], 20, -405537848),
        c = e(c, f, i, a, n[h + 9], 5, 568446438),
        a = e(a, c, f, i, n[h + 14], 9, -1019803690),
        i = e(i, a, c, f, n[h + 3], 14, -187363961),
        f = e(f, i, a, c, n[h + 8], 20, 1163531501),
        c = e(c, f, i, a, n[h + 13], 5, -1444681467),
        a = e(a, c, f, i, n[h + 2], 9, -51403784),
        i = e(i, a, c, f, n[h + 7], 14, 1735328473),
        f = e(f, i, a, c, n[h + 12], 20, -1926607734),
        c = o(c, f, i, a, n[h + 5], 4, -378558),
        a = o(a, c, f, i, n[h + 8], 11, -2022574463),
        i = o(i, a, c, f, n[h + 11], 16, 1839030562),
        f = o(f, i, a, c, n[h + 14], 23, -35309556),
        c = o(c, f, i, a, n[h + 1], 4, -1530992060),
        a = o(a, c, f, i, n[h + 4], 11, 1272893353),
        i = o(i, a, c, f, n[h + 7], 16, -155497632),
        f = o(f, i, a, c, n[h + 10], 23, -1094730640),
        c = o(c, f, i, a, n[h + 13], 4, 681279174),
        a = o(a, c, f, i, n[h + 0], 11, -358537222),
        i = o(i, a, c, f, n[h + 3], 16, -722521979),
        f = o(f, i, a, c, n[h + 6], 23, 76029189),
        c = o(c, f, i, a, n[h + 9], 4, -640364487),
        a = o(a, c, f, i, n[h + 12], 11, -421815835),
        i = o(i, a, c, f, n[h + 15], 16, 530742520),
        f = o(f, i, a, c, n[h + 2], 23, -995338651),
        c = u(c, f, i, a, n[h + 0], 6, -198630844),
        a = u(a, c, f, i, n[h + 7], 10, 1126891415),
        i = u(i, a, c, f, n[h + 14], 15, -1416354905),
        f = u(f, i, a, c, n[h + 5], 21, -57434055),
        c = u(c, f, i, a, n[h + 12], 6, 1700485571),
        a = u(a, c, f, i, n[h + 3], 10, -1894986606),
        i = u(i, a, c, f, n[h + 10], 15, -1051523),
        f = u(f, i, a, c, n[h + 1], 21, -2054922799),
        c = u(c, f, i, a, n[h + 8], 6, 1873313359),
        a = u(a, c, f, i, n[h + 15], 10, -30611744),
        i = u(i, a, c, f, n[h + 6], 15, -1560198380),
        f = u(f, i, a, c, n[h + 13], 21, 1309151649),
        c = u(c, f, i, a, n[h + 4], 6, -145523070),
        a = u(a, c, f, i, n[h + 11], 10, -1120210379),
        i = u(i, a, c, f, n[h + 2], 15, 718787259),
        f = u(f, i, a, c, n[h + 9], 21, -343485551),
        c = r(c, l),
        f = r(f, g),
        i = r(i, v),
        a = r(a, d);
    }
    return [c, f, i, a];
}

function f(r) {
    for (var n = [], t = 0; t < 64 * r.length; t += 8) n.push(r[t >> 5] >>> t % 32 & 255);
    return n;
}

function i(r) {
    for (var n = [], t = 0; t < 8 * r.length; t += 8) n.push(t >>> 5 >>> t % 32 & 255);
    return n;
}

function a(r) {
    for (var n = [], t = (1 << 16) - 1, e = 0; e < 16 * r.length; e += 16) n.push(r[e >> 4] & t);
    return n;
}

function hexMD5(str) {
    var hexChars = '0123456789abcdef';
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        bytes.push(charCode & 0xff);
        bytes.push((charCode >> 8) & 0xff);
    }
    var words = [];
    for (var i = 0; i < bytes.length; i += 4) {
        words.push(
            bytes[i] |
            (bytes[i + 1] << 8) |
            (bytes[i + 2] << 16) |
            (bytes[i + 3] << 24)
        );
    }
    var md5Bytes = f(c(words));
    var result = '';
    for (var i = 0; i < md5Bytes.length; i++) {
        result += hexChars.charAt((md5Bytes[i] >> 4) & 0xf) +
                 hexChars.charAt(md5Bytes[i] & 0xf);
    }
    return result;
}

// 将 hexMD5 函数添加到全局作用域
window.hexMD5 = hexMD5;