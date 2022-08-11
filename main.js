// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var I = Object.create;
var $ = Object.defineProperty;
var q = Object.getOwnPropertyDescriptor;
var U = Object.getOwnPropertyNames;
var z = Object.getPrototypeOf, Z = Object.prototype.hasOwnProperty;
var G = (a, m)=>()=>(m || a((m = {
            exports: {}
        }).exports, m), m.exports);
var H = (a, m, x, b)=>{
    if (m && typeof m == "object" || typeof m == "function") for (let o of U(m))!Z.call(a, o) && o !== x && $(a, o, {
        get: ()=>m[o],
        enumerable: !(b = q(m, o)) || b.enumerable
    });
    return a;
};
var V = (a, m, x)=>(x = a != null ? I(z(a)) : {}, H(m || !a || !a.__esModule ? $(x, "default", {
        value: a,
        enumerable: !0
    }) : x, a));
var _ = G((T, O)=>{
    (function(a, m) {
        if (typeof define == "function" && define.amd) define("webextension-polyfill", [
            "module"
        ], m);
        else if (typeof T < "u") m(O);
        else {
            var x = {
                exports: {}
            };
            m(x), a.browser = x.exports;
        }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : T, function(a) {
        "use strict";
        if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
        if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            let m = "The message port closed before a response was received.", x = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", b = (o)=>{
                let k = {
                    alarms: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        clearAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    bookmarks: {
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getChildren: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getRecent: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getSubTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTree: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    browserAction: {
                        disable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        enable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        getBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getBadgeText: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        openPopup: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setBadgeText: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    browsingData: {
                        remove: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        removeCache: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCookies: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeDownloads: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFormData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeHistory: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeLocalStorage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePasswords: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePluginData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        settings: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    commands: {
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    contextMenus: {
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    cookies: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAllCookieStores: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    devtools: {
                        inspectedWindow: {
                            eval: {
                                minArgs: 1,
                                maxArgs: 2,
                                singleCallbackArg: !1
                            }
                        },
                        panels: {
                            create: {
                                minArgs: 3,
                                maxArgs: 3,
                                singleCallbackArg: !0
                            },
                            elements: {
                                createSidebarPane: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        }
                    },
                    downloads: {
                        cancel: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        download: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        erase: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFileIcon: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        open: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        pause: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFile: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        resume: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    extension: {
                        isAllowedFileSchemeAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        isAllowedIncognitoAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    history: {
                        addUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        deleteRange: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getVisits: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    i18n: {
                        detectLanguage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAcceptLanguages: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    identity: {
                        launchWebAuthFlow: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    idle: {
                        queryState: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    management: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getSelf: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setEnabled: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        uninstallSelf: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    notifications: {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPermissionLevel: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    pageAction: {
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        hide: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    permissions: {
                        contains: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        request: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    runtime: {
                        getBackgroundPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPlatformInfo: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        openOptionsPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        requestUpdateCheck: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        sendMessage: {
                            minArgs: 1,
                            maxArgs: 3
                        },
                        sendNativeMessage: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        setUninstallURL: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    sessions: {
                        getDevices: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getRecentlyClosed: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        restore: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    storage: {
                        local: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        managed: {
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        sync: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        }
                    },
                    tabs: {
                        captureVisibleTab: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        detectLanguage: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        discard: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        duplicate: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        executeScript: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getZoom: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getZoomSettings: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goBack: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        goForward: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        highlight: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        insertCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        query: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        reload: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        sendMessage: {
                            minArgs: 2,
                            maxArgs: 3
                        },
                        setZoom: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        setZoomSettings: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        update: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    topSites: {
                        get: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    webNavigation: {
                        getAllFrames: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFrame: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    webRequest: {
                        handlerBehaviorChanged: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    windows: {
                        create: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getLastFocused: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    }
                };
                if (Object.keys(k).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                class v extends WeakMap {
                    constructor(r, n = void 0){
                        super(n), this.createItem = r;
                    }
                    get(r) {
                        return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
                    }
                }
                let F = (e)=>e && typeof e == "object" && typeof e.then == "function", P = (e, r)=>(...n)=>{
                        o.runtime.lastError ? e.reject(new Error(o.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? e.resolve(n[0]) : e.resolve(n);
                    }, h = (e)=>e == 1 ? "argument" : "arguments", L = (e, r)=>function(g, ...i) {
                        if (i.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${i.length}`);
                        if (i.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${i.length}`);
                        return new Promise((A, l)=>{
                            if (r.fallbackToNoCallback) try {
                                g[e](...i, P({
                                    resolve: A,
                                    reject: l
                                }, r));
                            } catch (s) {
                                console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s), g[e](...i), r.fallbackToNoCallback = !1, r.noCallback = !0, A();
                            }
                            else r.noCallback ? (g[e](...i), A()) : g[e](...i, P({
                                resolve: A,
                                reject: l
                            }, r));
                        });
                    }, S = (e, r, n)=>new Proxy(r, {
                        apply (g, i, A) {
                            return n.call(i, e, ...A);
                        }
                    }), p = Function.call.bind(Object.prototype.hasOwnProperty), w = (e, r = {}, n = {})=>{
                    let g = Object.create(null), i = {
                        has (l, s) {
                            return s in e || s in g;
                        },
                        get (l, s, c) {
                            if (s in g) return g[s];
                            if (!(s in e)) return;
                            let t = e[s];
                            if (typeof t == "function") if (typeof r[s] == "function") t = S(e, e[s], r[s]);
                            else if (p(n, s)) {
                                let d = L(s, n[s]);
                                t = S(e, e[s], d);
                            } else t = t.bind(e);
                            else if (typeof t == "object" && t !== null && (p(r, s) || p(n, s))) t = w(t, r[s], n[s]);
                            else if (p(n, "*")) t = w(t, r[s], n["*"]);
                            else return Object.defineProperty(g, s, {
                                configurable: !0,
                                enumerable: !0,
                                get () {
                                    return e[s];
                                },
                                set (d) {
                                    e[s] = d;
                                }
                            }), t;
                            return g[s] = t, t;
                        },
                        set (l, s, c, t) {
                            return s in g ? g[s] = c : e[s] = c, !0;
                        },
                        defineProperty (l, s, c) {
                            return Reflect.defineProperty(g, s, c);
                        },
                        deleteProperty (l, s) {
                            return Reflect.deleteProperty(g, s);
                        }
                    }, A = Object.create(e);
                    return new Proxy(A, i);
                }, y = (e)=>({
                        addListener (r, n, ...g) {
                            r.addListener(e.get(n), ...g);
                        },
                        hasListener (r, n) {
                            return r.hasListener(e.get(n));
                        },
                        removeListener (r, n) {
                            r.removeListener(e.get(n));
                        }
                    }), B = new v((e)=>typeof e != "function" ? e : function(n) {
                        let g = w(n, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        e(g);
                    }), M = !1, R = new v((e)=>typeof e != "function" ? e : function(n, g, i) {
                        let A = !1, l, s = new Promise((f)=>{
                            l = function(u) {
                                M || (console.warn(x, new Error().stack), M = !0), A = !0, f(u);
                            };
                        }), c;
                        try {
                            c = e(n, g, l);
                        } catch (f) {
                            c = Promise.reject(f);
                        }
                        let t = c !== !0 && F(c);
                        if (c !== !0 && !t && !A) return !1;
                        let d = (f)=>{
                            f.then((u)=>{
                                i(u);
                            }, (u)=>{
                                let E;
                                u && (u instanceof Error || typeof u.message == "string") ? E = u.message : E = "An unexpected error occurred", i({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            }).catch((u)=>{
                                console.error("Failed to send onMessage rejected reply", u);
                            });
                        };
                        return d(t ? c : s), !0;
                    }), W = ({ reject: e , resolve: r  }, n)=>{
                    o.runtime.lastError ? o.runtime.lastError.message === m ? r() : e(new Error(o.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : r(n);
                }, N = (e, r, n, ...g)=>{
                    if (g.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${g.length}`);
                    if (g.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${g.length}`);
                    return new Promise((i, A)=>{
                        let l = W.bind(null, {
                            resolve: i,
                            reject: A
                        });
                        g.push(l), n.sendMessage(...g);
                    });
                }, D = {
                    devtools: {
                        network: {
                            onRequestFinished: y(B)
                        }
                    },
                    runtime: {
                        onMessage: y(R),
                        onMessageExternal: y(R),
                        sendMessage: N.bind(null, "sendMessage", {
                            minArgs: 1,
                            maxArgs: 3
                        })
                    },
                    tabs: {
                        sendMessage: N.bind(null, "sendMessage", {
                            minArgs: 2,
                            maxArgs: 3
                        })
                    }
                }, C = {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                };
                return k.privacy = {
                    network: {
                        "*": C
                    },
                    services: {
                        "*": C
                    },
                    websites: {
                        "*": C
                    }
                }, w(o, D, k);
            };
            a.exports = b(chrome);
        } else a.exports = globalThis.browser;
    });
});
var K = V(_()), { default: j , ...J } = K, X = j !== void 0 ? j : J;
function getTextNode(element) {
    const nodes = Array.from(element.childNodes);
    for (const node of nodes){
        if (node.nodeName == "#text") {
            return node;
        }
    }
}
function readJSON(filename) {
    const url = X.runtime.getURL(filename);
    const data = fetch(url).then((r)=>r.json()).catch(()=>console.error(`[${filename}]の読み込みに失敗しました。`));
    return data;
}
const LANG_LOOT = "/lang/ja/";
async function locarizeByJSON(filename) {
    const locarizeData = await readReplacerJSON(LANG_LOOT + filename);
    for (const v of locarizeData){
        locarize(v);
    }
}
function locarize({ query , replace , pattern  }) {
    const doms = document.querySelectorAll(query);
    doms.forEach((d)=>{
        const text = getTextNode(d);
        if (text === undefined) return;
        console.log(`{query: ${query}, replace: ${replace}, pattern: ${pattern}}`);
        if (pattern === undefined) {
            text.textContent = replace;
        } else if (text.textContent !== null) {
            text.textContent = text.textContent.replace(new RegExp(pattern), replace);
            console.log(`textContent: ${text.textContent}`);
        }
    });
}
async function readReplacerJSON(filename) {
    const json = await readJSON(filename);
    const data = [];
    for (const j of json){
        data.push({
            query: j.query,
            replace: j.replace,
            pattern: j.pattern == null ? undefined : j.pattern
        });
    }
    return data;
}
const PAGE_CONFIG_PATH = "/lang/config.json";
async function searchLangfileByURI(uri) {
    const config = await readPageConfig();
    const files = [];
    for (const c of config){
        for (const m of c.patterns){
            const result = uri.match(new RegExp(m));
            if (result === null) continue;
            for (const f of c.files){
                files.push(f);
            }
            break;
        }
    }
    return Array.from(new Set(files));
}
async function readPageConfig(filename = PAGE_CONFIG_PATH) {
    const json = await readJSON(filename);
    const config = [];
    for (const data of json){
        config.push({
            patterns: data.patterns,
            files: data.files
        });
    }
    return config;
}
async function main() {
    const files = await searchLangfileByURI(location.pathname);
    for (const f of files){
        console.log(`[${f}]を読み込みました`);
        await locarizeByJSON(f);
    }
}
main();
