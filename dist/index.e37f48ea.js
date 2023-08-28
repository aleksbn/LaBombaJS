// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _sliderStudiosViewJs = require("./views/sliderStudiosView.js");
var _sliderStudiosViewJsDefault = parcelHelpers.interopDefault(_sliderStudiosViewJs);
var _sliderEventsViewJs = require("./views/sliderEventsView.js");
var _sliderEventsViewJsDefault = parcelHelpers.interopDefault(_sliderEventsViewJs);
var _modalViewJs = require("./views/modalView.js");
var _modalViewJsDefault = parcelHelpers.interopDefault(_modalViewJs);
var _mapViewJs = require("./views/mapView.js");
var _mapViewJsDefault = parcelHelpers.interopDefault(_mapViewJs);
var _filtersViewJs = require("./views/filtersView.js");
var _filtersViewJsDefault = parcelHelpers.interopDefault(_filtersViewJs);
var _sliderViewJs = require("./views/sliderView.js");
var _sliderViewJsDefault = parcelHelpers.interopDefault(_sliderViewJs);
var _sliderArrowsViewJs = require("./views/sliderArrowsView.js");
var _sliderArrowsViewJsDefault = parcelHelpers.interopDefault(_sliderArrowsViewJs);
var _locationContainerViewJs = require("./views/locationContainerView.js");
var _locationContainerViewJsDefault = parcelHelpers.interopDefault(_locationContainerViewJs);
var _sidebarViewJs = require("./views/sidebarView.js");
var _sidebarViewJsDefault = parcelHelpers.interopDefault(_sidebarViewJs);
var _detailsViewJs = require("./views/detailsView.js");
var _detailsViewJsDefault = parcelHelpers.interopDefault(_detailsViewJs);
let mapMarkers = [];
const controlSliderStudiosView = function() {
    // Generate list of studios
    (0, _sliderStudiosViewJsDefault.default).render(_modelJs.state.danceStudios);
};
const controlSliderEventsView = function() {
    // Generate list of studios
    (0, _sliderEventsViewJsDefault.default).render(_modelJs.state.danceEvents);
};
const controlModalView = function() {
    // Hides modal elements
    (0, _modalViewJsDefault.default).modal.classList.add("hidden");
    (0, _modalViewJsDefault.default).overlay.classList.add("hidden");
};
const controlMapView = function() {
    // loading initial data
    mapMarkers = mapMarkers.concat([
        ...(0, _mapViewJsDefault.default).loadEventsToMap(_modelJs.state.danceEvents)
    ]);
    mapMarkers = mapMarkers.concat([
        ...(0, _mapViewJsDefault.default).loadStudiosToMap(_modelJs.state.danceStudios)
    ]);
    // adding click event to the markers
    addClickEventToMapMarkers();
    // adding map click event
    (0, _mapViewJsDefault.default).map.on("click", function() {
        clearAllListElements();
        (0, _locationContainerViewJsDefault.default).toggleIfButtonIsDisabled(true);
    });
};
const controlFiltersView = function() {
    (0, _filtersViewJsDefault.default).render(_modelJs.state.filters);
};
const controlSliderView = function(e) {
    // add "stopping the wheel" event
    (0, _sliderViewJsDefault.default).stopsTheWheel(e);
};
const controlSliderArrowsView = function(dir) {
    (0, _sliderViewJsDefault.default).scrollToTheTop();
    (0, _sliderViewJsDefault.default).changeSlide(dir);
};
const controlApplyFilters = function() {
    // toggle filters slider
    (0, _sidebarViewJsDefault.default).toggleSlider();
    //clear all markers from map
    (0, _mapViewJsDefault.default).clearAllMarkersFromMap(mapMarkers);
    //update filters
    (0, _filtersViewJsDefault.default).updateFilters(_modelJs.state.filtersSelected);
    //get updated studios and events
    const studiosForDisplay = _modelJs.updateStudios();
    const eventsForDisplay = _modelJs.updateEvents();
    //update studios and events
    (0, _sliderStudiosViewJsDefault.default).update(studiosForDisplay);
    (0, _sliderEventsViewJsDefault.default).update(eventsForDisplay);
    //render updated studios and events to map
    mapMarkers = [];
    mapMarkers = mapMarkers.concat((0, _mapViewJsDefault.default).loadStudiosToMap(studiosForDisplay));
    mapMarkers = mapMarkers.concat((0, _mapViewJsDefault.default).loadEventsToMap(eventsForDisplay));
    //add click events to the markers
    addClickEventToMapMarkers();
    //scroll to the top
    (0, _sliderViewJsDefault.default).scrollToTheTop();
};
const controlSidebarViewToggleFilters = function() {
    setTimeout(function() {
        (0, _sidebarViewJsDefault.default).toggleSlider();
    }, 10);
};
const controlSliderEventsViewClick = function(e) {
    // finding clicked element (sliderEventsView)
    const el = (0, _sliderEventsViewJsDefault.default).findClickedElement(e);
    // finding selected event (model)
    if (!el) return;
    const selectedElement = _modelJs.findElement(el.dataset.id);
    _modelJs.state.selectedId = el.dataset.id;
    // move to selected marker on the map (mapView)
    (0, _mapViewJsDefault.default).goToMarker(selectedElement.coords);
    // memorizing selected element id ???
    _modelJs.state.selectedId = el.dataset.id;
    // clear previous highlighted element
    clearAllListElements();
    // highlighting element (sliderEventsView)
    highlightListElement(el.dataset.id);
};
const controlSliderStudiosViewClick = function(e) {
    // finding clicked element (sliderEventsView)
    const el = (0, _sliderStudiosViewJsDefault.default).findClickedElement(e);
    // finding selected event (model)
    if (!el) return;
    const selectedElement = _modelJs.findElement(el.dataset.id);
    _modelJs.state.selectedId = el.dataset.id;
    // move to selected marker on the map (mapView)
    (0, _mapViewJsDefault.default).goToMarker(selectedElement.coords);
    // memorizing selected element id ???
    _modelJs.state.selectedId = el.dataset.id;
    // clear previous highlighted element
    clearAllListElements();
    // highlighting element (sliderEventsView)
    highlightListElement(el.dataset.id);
};
const controlDescriptionViewClick = function() {
    // check if data should be displayed
    const descriptionContent = document.querySelector(".description__content");
    if (document.querySelector(".description__content").classList.contains("hidden")) {
        // load details
        const id = +_modelJs.state.selectedId;
        const data = (id + "").length === 6 ? _modelJs.state.danceStudios.find((ds)=>ds.id === id) : _modelJs.state.danceEvents.find((ds)=>ds.id === id);
        (0, _detailsViewJsDefault.default).render(data);
        // display details data
        (0, _locationContainerViewJsDefault.default).goToContainer(1);
        (0, _locationContainerViewJsDefault.default).toggleDescriptionButton();
        descriptionContent.classList.remove("hidden");
    } else {
        // hides details data
        (0, _locationContainerViewJsDefault.default).goToContainer(0);
        (0, _locationContainerViewJsDefault.default).toggleDescriptionButton();
        setTimeout(()=>{
            descriptionContent.classList.add("hidden");
        }, 1000);
    }
};
const highlightListElement = function(id, type = "slider") {
    (0, _mapViewJsDefault.default).openPopup(mapMarkers, id, type);
    document.querySelectorAll(".slide__item").forEach((el)=>{
        if (+el.dataset.id === +id) {
            const sliderNumber = +el.dataset.slider;
            const targetPosition = el.getBoundingClientRect().top - document.querySelector(".slider").getBoundingClientRect().top;
            (0, _sliderViewJsDefault.default).scrollToPosition(targetPosition, sliderNumber);
            el.classList.add("selected");
            (0, _locationContainerViewJsDefault.default).toggleIfButtonIsDisabled(false);
        }
    });
};
const clearAllListElements = function() {
    (0, _locationContainerViewJsDefault.default).goToContainer(0);
    (0, _locationContainerViewJsDefault.default).toggleIfButtonIsDisabled(false);
    (0, _sliderStudiosViewJsDefault.default).clearElements();
    (0, _sliderEventsViewJsDefault.default).clearElements();
    (0, _mapViewJsDefault.default).closeAllMarkers();
};
const addClickEventToMapMarkers = function() {
    mapMarkers.forEach((marker)=>marker.on("click", function() {
            const id = +marker.getPopup().getContent().split('data-id="')[1].split('"')[0];
            clearAllListElements();
            _modelJs.state.selectedId = id;
            highlightListElement(id, "marker");
        }));
};
const init = function() {
    window.addEventListener("scroll", ()=>{
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        document.querySelector(".sidebar__row--slider").style.top = `${scrollTop}px`;
        document.querySelector(".sidebar__row--filter").style.top = `${scrollTop}px`;
    });
    (0, _mapViewJsDefault.default).addHandlerLoad(controlMapView);
    (0, _sliderStudiosViewJsDefault.default).addHandlerRender(controlSliderStudiosView);
    (0, _sliderEventsViewJsDefault.default).addHandlerRender(controlSliderEventsView);
    (0, _modalViewJsDefault.default).addHandlerClick(controlModalView);
    (0, _modalViewJsDefault.default).addHandlerKeyDown(controlModalView);
    (0, _filtersViewJsDefault.default).addHandlerRender(controlFiltersView);
    (0, _sliderViewJsDefault.default).addHandlerWheel(controlSliderView);
    (0, _sliderArrowsViewJsDefault.default).addHandlerArrowClick(controlSliderArrowsView, "left");
    (0, _sliderArrowsViewJsDefault.default).addHandlerArrowClick(controlSliderArrowsView, "right");
    (0, _sidebarViewJsDefault.default).addHandlerToggleFilters(controlSidebarViewToggleFilters);
    (0, _filtersViewJsDefault.default).addHandlerClickApply(controlApplyFilters);
    (0, _sliderEventsViewJsDefault.default).addHandlerClick(controlSliderEventsViewClick);
    (0, _sliderStudiosViewJsDefault.default).addHandlerClick(controlSliderStudiosViewClick);
    (0, _locationContainerViewJsDefault.default).addHandlerClick(controlDescriptionViewClick);
};
init();

},{"./model.js":"Y4A21","./views/sliderStudiosView.js":"kXto8","./views/sliderEventsView.js":"bfx6u","./views/modalView.js":"8QpnA","./views/mapView.js":"b2AA2","./views/filtersView.js":"1KtRZ","./views/sliderView.js":"1N8qu","./views/sliderArrowsView.js":"bdp6O","./views/locationContainerView.js":"4dchp","./views/sidebarView.js":"eUObu","./views/detailsView.js":"25RBo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "updateStudios", ()=>updateStudios);
parcelHelpers.export(exports, "updateEvents", ()=>updateEvents);
parcelHelpers.export(exports, "findElement", ()=>findElement);
var _dataJson = require("../data/data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
const state = {
    filtersSelected: {},
    filters: {},
    danceEvents: [],
    danceStudios: [],
    selectedId: ""
};
const init = function() {
    state.filtersSelected = (0, _dataJsonDefault.default).filtersSelected;
    state.filters = (0, _dataJsonDefault.default).filters;
    state.danceEvents = (0, _dataJsonDefault.default).danceEvents;
    state.danceStudios = (0, _dataJsonDefault.default).danceStudios;
};
const updateStudios = function() {
    const selectedTypes = Object.entries(state.filtersSelected.types).filter(([_, isChecked])=>isChecked).map(([type])=>type);
    const selectedDances = Object.entries(state.filtersSelected.dances).filter(([_, isChecked])=>isChecked).map(([type])=>type);
    return state.danceStudios.filter((s)=>s.type.some((type)=>selectedTypes.includes(type))).filter((s)=>s.danceTypes.some((dance)=>selectedDances.includes(dance)));
};
const updateEvents = function() {
    const selectedEventTypes = Object.entries(state.filtersSelected.events).filter(([_, isChecked])=>isChecked).map(([eventType])=>eventType);
    const selectedDances = Object.entries(state.filtersSelected.dances).filter(([_, isChecked])=>isChecked).map(([type])=>type);
    return state.danceEvents.filter((e)=>selectedEventTypes.includes(e.type)).filter((e)=>e.dances.some((dance)=>selectedDances.includes(dance)));
};
const findElement = function(id) {
    return id.length === 6 ? state.danceStudios.find((el)=>el.id === +id) : state.danceEvents.find((el)=>el.id === +id);
};
init();

},{"../data/data.json":"SJt20","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SJt20":[function(require,module,exports) {
module.exports = JSON.parse('{"filtersSelected":{"events":{"party":true,"festival":true,"workshop":true},"dances":{"salsa":true,"bachata":true,"kizomba":true,"tango":true,"reggaeton":true,"zumba":true,"rumba":true,"samba":true},"types":{"club":true,"school":true,"studio":true}},"filters":{"events":["party","festival","workshop"],"dances":["salsa","bachata","kizomba","tango","reggaeton","zumba","samba"],"types":["club","school","studio"]},"danceEvents":[{"id":986247812,"organizerId":852147,"type":"party","title":"Grande Latino Party","description":"Come to our grande latino party and enjoy dancing most popular latino dances! Two floors, salsa and sensual, are awaiting!","dances":["salsa","bachata","kizomba"],"address":"Svetog Save 60, Bijeljina 76300","coords":[44.756244,19.2117792],"start":"2023-09-26T21:00:00","end":"2023-09-27T03:00:00"},{"id":512479632,"organizerId":852147,"type":"party","title":"Grande Latino Party","description":"Come to our grande latino party and enjoy dancing most popular latino dances! Two floors, salsa and sensual, are awaiting!","dances":["salsa","bachata","kizomba"],"address":"Patrijarha Pavla 1, Bijeljina 76300","coords":[44.7568797,19.2174305],"start":"2023-11-15T21:00:00","end":"2023-11-16T03:00:00"},{"id":256789654,"organizerId":852147,"type":"party","title":"Sensual party","description":"Hola, sensual gente! Come join us on our sensual floor and dance bachata and kizomba!","dances":["bachata","kizomba"],"address":"Gavrila Principa, Bijeljina 76300","coords":[44.7562342,19.2139896],"start":"2023-10-19T21:00:00","end":"2023-10-20T03:00:00"},{"id":112489632,"organizerId":852147,"type":"festival","title":"Салаш Salsa fest","description":"Did you ever want to try out native serbian cousine, dance to the sunset by the pool and enjoy the best coctails? Well, in that case, Салаш Salsa Fest is just for you!","dances":["salsa","bachata","kizomba"],"address":"Pavlovića put, Dvorovi 76300","coords":[44.7860709,19.2779482],"start":"2024-06-14T21:00:00","end":"2024-06-17T05:00:00"},{"id":220158962,"organizerId":852147,"type":"workshop","title":"Don Marko y su Salsa Familia Workshop","description":"Join us and learn from the best! Don Marko y su Salsa Familia are one of the best dance schools in Belgrade for the past 10 years!","dances":["salsa"],"address":"Srpske vojske 2, Bijeljina 76300","coords":[44.7543854,19.2171592],"start":"2023-12-12T12:00:00","end":"2023-12-12T14:00:00"},{"id":885792105,"organizerId":758962,"type":"workshop","title":"El grande tango","description":"We have an honor of bringing Tango world champions, Vedran and Valentina from Sarajevo, to Bijeljina for their amazing workshop!","dances":["tango"],"address":"Gradski park, Bijeljina 76300","coords":[44.7546408,19.2200756],"start":"2023-09-19T12:00:00","end":"2023-09-19T15:00:00"},{"id":962358956,"organizerId":748512,"type":"workshop","title":"Freedom is in elegance","description":"Ilya Gavrikov and Liza Semashko are world rumba champions! Seize this amazing opportunity to dance and learn rumba from the best!","dances":["rumba"],"address":"Njegoševa 8, Bijeljina 76300","coords":[44.7596387,19.2187028],"start":"2023-11-22T14:00:00","end":"2023-11-22T16:00:00"},{"id":124555789,"organizerId":125967,"type":"workshop","title":"El fuego Brasiliero","description":"Ever wanted to learn samba from the world champions? Well, Riccardo Cocchi and Yulia Zagoruychenko are holding workshop in Bijeljina!","dances":["samba"],"address":"Sremska, Bijeljina 76300","coords":[44.7613323,19.2017821],"start":"2024-02-26T14:00:00","end":"2024-02-26T17:00:00"},{"id":221447963,"organizerId":125967,"type":"party","title":"Feel the energy","description":"Feel the pure energy of reggaeton while dancing with us on our party!","dances":["reggaeton"],"address":"Majora Dragutina Gavrilovića 3, Bijeljina 76300","coords":[44.7571576,19.2121159],"start":"2024-01-04T21:00:00","end":"2024-01-05T03:00:00"},{"id":332665547,"organizerId":521747,"type":"workshop","title":"Zumba workshop","description":"Guess what, everyone? Rina Elena is coming to Bijeljina! Don\'t miss out on this great opportunity to learn a few moves from her!","dances":["zumba"],"address":"Sremska 4, Bijeljina 76300","coords":[44.7626719,19.2097289],"start":"2024-03-03T12:00:00","end":"2024-03-03T14:00:00"}],"danceStudios":[{"id":758962,"name":"101 dance club","address":"Ive Andrića, Bijeljina 76300","coords":[44.7613323,19.2017821],"type":["club","studio"],"danceTypes":["tango","reggaeton","rumba","zumba","samba"],"pageUrl":"https://www.facebook.com/plesniklub101/","phoneNumber":"065/111-222","description":"Više od tri decenije rada su garancija da cete sa nama naučiti sve vrste plesova.","workingTimes":[{"day":"Monday","startTime":"20:00:00","endTime":"21:00:00"},{"day":"Tuesday","startTime":"19:00:00","endTime":"20:00:00"},{"day":"Thursday","startTime":"20:00:00","endTime":"21:00:00"}]},{"id":125967,"name":"Megadance dance club","address":"Patrijarha Pavla 1, Bijeljina 76300","coords":[44.7568797,19.2174305],"type":["club","studio"],"danceTypes":["salsa","bachata","tango","reggaeton","rumba","zumba","samba"],"pageUrl":"https://www.facebook.com/MegadanceDanceStudio/","phoneNumber":"065/333-444","description":"MEGADANCE plesni studio nudi vam različite vrste plesova, profesionalnog (takmičarskog) i rekreativno-socijalnog.","workingTimes":[{"day":"Friday","startTime":"12:00:00","endTime":"22:00:00"},{"day":"Saturday","startTime":"12:00:00","endTime":"22:00:00"},{"day":"Sunday","startTime":"12:00:00","endTime":"22:00:00"}]},{"id":852147,"name":"El Ritmo Loco škola plesa","address":"Srpske Vojske 2, Bijeljina 76300","coords":[44.7543854,19.2171592],"type":["school","studio"],"danceTypes":["salsa","bachata","kizomba","reggaeton"],"pageUrl":"https://www.instagram.com/elritmolocosalsa/?hl=en","phoneNumber":"065/555-666","description":"Plesom do zvezda \uD83D\uDC83\uD83D\uDD7A⭐⭐⭐, ili makar do dobre zabave!","workingTimes":[{"day":"Tuesday","startTime":"19:00:00","endTime":"21:00:00"},{"day":"Thursday","startTime":"20:00:00","endTime":"21:00:00"},{"day":"Saturday","startTime":"16:00:00","endTime":"18:00:00"}]},{"id":521747,"name":"ZumFit dance studio","address":"Njegoseva bb, Bijeljina 76300","coords":[44.7596387,19.2187028],"type":["studio"],"danceTypes":["reggaeton","zumba"],"pageUrl":"https://www.facebook.com/profile.php?id=100052848158383","phoneNumber":"065/777-888","description":"ZUMBA je spoj latinskih i internacionalnih ritmova koji uz tematski ples stvaraju dinamičan, uzbudljiv i eksplozivan osjecaj.","workingTimes":[{"day":"Tuesday","startTime":"20:00:00","endTime":"21:00:00"},{"day":"Thursday","startTime":"20:00:00","endTime":"21:00:00"}]},{"id":748512,"name":"Olena dance studio","address":"Ive Andrića 56, Bijeljina 76300","coords":[44.7615958,19.20176],"type":["club","studio"],"danceTypes":["salsa","bachata","reggaeton","zumba","rumba"],"pageUrl":"","phoneNumber":"065/999-000","description":"Trust us, everyone can dance.","workingTimes":[{"day":"Wednesday","startTime":"20:00:00","endTime":"21:00:00"},{"day":"Sunday","startTime":"20:00:00","endTime":"21:00:00"}]}]}');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kXto8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SliderStudiosView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".slide--studios");
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", handler);
    }
    _generateMarkup() {
        if (this._data.length > 0) {
            let studiosHTML = "<h3><i>Schools/clubs/studios</i></h3>";
            this._data.forEach((ds)=>studiosHTML += this._generateStudio(ds));
            return studiosHTML;
        } else return "<h1>There are no selected studios, schools or clubs. Check the options you selected to filter out and try again.</h1>";
    }
    _generateStudio(ds) {
        let text = "";
        text += `<div class="slide__item" data-id="${ds.id}" data-slider="0"><h2>${ds.name}</h2>`;
        text += `Address: <h3>${ds.address}</h3>Types: `;
        ds.type.forEach((t)=>text += `<b>${t}</b>, `);
        text = text.split("").slice(0, text.length - 2).join("");
        text += "</div>";
        return text;
    }
    highlightElement(id) {
        document.querySelectorAll(".slide__item").forEach((el)=>{
            if (+el.dataset.id === +id) {
                const slider = document.querySelector(".slider");
                const sliderNumber = +el.dataset.slider;
                const targetPosition = el.getBoundingClientRect().top - slider.getBoundingClientRect().top;
                slider.scrollTop += targetPosition;
                el.classList.add("selected");
                return sliderNumber;
            }
        });
    }
    findClickedElement(e) {
        return e.target.closest(".slide__item");
    }
    clearElements() {
        const slideItems = Array.from(this._parentElement.childNodes);
        slideItems.forEach((item)=>item.classList.remove("selected"));
    }
}
exports.default = new SliderStudiosView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this.render(data);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfx6u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _modelJs = require("../model.js");
class SliderEventsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".slide--events");
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", handler);
    }
    _generateMarkup() {
        if (this._data.length > 0) {
            let eventsHTML = "<h3><i>Events</i></h3>";
            this._data.forEach((de)=>eventsHTML += this._generateEvent(de));
            return eventsHTML;
        } else return "<h1>There are no selected events. Check the options you selected to filter out and try again.</h1>";
    }
    _generateEvent(de) {
        let text = "";
        text += `<div class="slide__item" data-id="${de.id}" data-slider="1"><h2>${de.title}</h2>`;
        text += `Address: <h3>${de.address}</h3>`;
        text += `Organizer: <h3>${_modelJs.state.danceStudios.filter((s)=>s.id === de.organizerId)[0].name}</h3>Dances: <b>`;
        de.dances.forEach((d)=>text += `${d}, `);
        text = text.split("").slice(0, text.length - 2).join("");
        text += "</b></div>";
        return text;
    }
    highlightElement(id) {
        document.querySelectorAll(".slide__item").forEach((el)=>{
            if (+el.dataset.id === +id) {
                const slider = document.querySelector(".slider");
                const sliderNumber = +el.dataset.slider;
                const targetPosition = el.getBoundingClientRect().top - slider.getBoundingClientRect().top;
                slider.scrollTop += targetPosition;
                el.classList.add("selected");
                return sliderNumber;
            }
        });
    }
    findClickedElement(e) {
        return e.target.closest(".slide__item");
    }
    clearElements() {
        const slideItems = Array.from(this._parentElement.childNodes);
        slideItems.forEach((item)=>item.classList.remove("selected"));
    }
}
exports.default = new SliderEventsView();

},{"./view":"bWlJ9","../model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QpnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ModalView {
    modal = document.querySelector(".modal");
    overlay = document.querySelector(".overlay");
    addHandlerClick(handler) {
        document.querySelectorAll(".close-modal").forEach((el)=>el.addEventListener("click", handler));
    }
    addHandlerKeyDown(handler) {
        document.addEventListener("keydown", function(e) {
            if (e.code === "Escape") handler();
        });
    }
}
exports.default = new ModalView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2AA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../model.js");
var _icon = require("../icon");
var _iconDefault = parcelHelpers.interopDefault(_icon);
var _config = require("../config");
class MapView {
    _parentElement = document.querySelector(".description__content");
    _mapMarkers = [];
    map;
    addHandlerLoad(handler) {
        window.addEventListener("load", handler);
    }
    constructor(){
        this.map = L.map("map").setView([
            44.757461,
            19.212
        ], 16);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }
    _generateEventMarker(e) {
        return `<div class="dance-event--${e.type}" data-id="${e.id}" >
    <div style="text-align: center;"><h3>${e.title}</h3></div>
    <hr>
      <div>Organized by: <b>${_modelJs.state.danceStudios.find((ds)=>ds.id === e.organizerId).name}</b></div><hr>
      <div style="text-align: center;"><b>${e.type}</b></div><hr>
      <div><b>${new Intl.DateTimeFormat("sr-SR").format(new Date(e.start.split("T")[0]))} ${e.start.split("T")[1].slice(0, -3)} - ${new Intl.DateTimeFormat("sr-SR").format(new Date(e.end.split("T")[0]))} ${e.end.split("T")[1].slice(0, -3)}</b></div><hr>
        <div>Dances: <b>${e.dances.reduce((cur, acc)=>acc + ", " + cur)}</b></div>
        </div>`;
    }
    _generateStudioMarker(s) {
        return `<div class="dance-studio" data-id="${s.id}" ><div style="text-align: center;"><h3>${s.name}</h3></div>
    <hr><b>Dance ${s.type.reduce((cur, acc)=>acc + ", dance " + cur)}</b><br>
      <hr><b>${s.address}</b><hr></div>`;
    }
    loadStudiosToMap(studios) {
        this._mapMarkers = [];
        studios.forEach((ds)=>{
            const marker = L.marker(ds.coords, {
                maxWidth: 300,
                minWidth: 100,
                riseOnHover: true
            }).addTo(this.map).bindPopup(this._generateStudioMarker(ds));
            this._mapMarkers.push(marker);
        });
        return this._mapMarkers;
    }
    loadEventsToMap(events) {
        this._mapMarkers = [];
        let customIcon = L.icon({
            iconUrl: (0, _iconDefault.default),
            iconSize: [
                35,
                35
            ],
            popupAnchor: [
                0,
                -15
            ]
        });
        events.forEach((de)=>{
            const marker = L.marker(de.coords, {
                icon: customIcon,
                maxWidth: 400,
                minWidth: 100,
                riseOnHover: true
            }).addTo(this.map).bindPopup(this._generateEventMarker(de));
            this._mapMarkers.push(marker);
        });
        return this._mapMarkers;
    }
    clearAllMarkersFromMap(mapMarkers) {
        if (mapMarkers.length > 0) mapMarkers.forEach((marker)=>{
            this.map.removeLayer(marker);
        });
    }
    goToMarker(coords) {
        this.map.setView(coords, (0, _config.MAP_ZOOM_LEVEL), {
            animate: true,
            pan: {
                duration: 1
            }
        });
    }
    openPopup(mapMarkers, requiredId, type) {
        setTimeout(function() {
            mapMarkers.forEach((marker)=>{
                const markerId = +marker.getPopup().getContent().split(" ")[2].split('"')[1];
                if (markerId === +requiredId) marker.openPopup();
            });
        }, type === "marker" ? 10 : (0, _config.DEFAULT_ANIMATION_DURATION));
    }
    closeAllMarkers() {
        this._mapMarkers.forEach((marker)=>marker.closePopup());
    }
}
exports.default = new MapView();

},{"../model.js":"Y4A21","../icon":"9Dvxh","../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Dvxh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _placeholderPng = require("../../media/placeholder.png");
var _placeholderPngDefault = parcelHelpers.interopDefault(_placeholderPng);
exports.default = (0, _placeholderPngDefault.default);

},{"../../media/placeholder.png":"8Db2b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Db2b":[function(require,module,exports) {
module.exports = require("fded3a9be4f56634").getBundleURL("hWUTQ") + "placeholder.c417ac6b.png" + "?" + Date.now();

},{"fded3a9be4f56634":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAP_ZOOM_LEVEL", ()=>MAP_ZOOM_LEVEL);
parcelHelpers.export(exports, "DEFAULT_ANIMATION_DURATION", ()=>DEFAULT_ANIMATION_DURATION);
const MAP_ZOOM_LEVEL = 17;
const DEFAULT_ANIMATION_DURATION = 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KtRZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _helpers = require("../helpers");
class FiltersView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".form-container");
    _applyFiltersButton = document.querySelector(".btn--filter-apply");
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerClickApply(handler) {
        this._applyFiltersButton.addEventListener("click", handler);
    }
    _generateMarkup() {
        let markup = '<div class="form-container--studios">';
        markup += this._loadFilterParts("types");
        markup += '</div><div class="form-container--type-of-events">';
        markup += this._loadFilterParts("events");
        markup += '</div><div class="form-container--dances">';
        markup += this._loadFilterParts("dances") + "</div>";
        return markup;
    }
    updateFilters(filters) {
        const checkboxes = [
            ...document.querySelectorAll('.form-control input[type="checkbox"]')
        ];
        checkboxes.forEach((checkbox)=>{
            const id = checkbox.id;
            const checked = checkbox.checked;
            if (id in filters.events) filters.events[id] = checked;
            if (id in filters.types) filters.types[id] = checked;
            if (id in filters.dances) filters.dances[id] = checked;
        });
    }
    _loadFilterParts(type) {
        let markup = "";
        switch(type){
            case "types":
                markup += `<label class="form__label">Schools/clubs/studios</label>`;
                break;
            case "events":
                markup += `<label class="form__label">Events</label>`;
                break;
            case "dances":
                markup += `<label class="form__label">Preffered dances</label>`;
                break;
        }
        [
            ...this._data[type]
        ].forEach((el)=>markup += `
					<div class="form-control">
						<input id="${el}" type="checkbox" checked />
						<label>${type === "types" ? "Dance " + el + "s" : (0, _helpers.CapitalCase)(el)}</label>
					</div>
				`);
        return markup;
    }
}
exports.default = new FiltersView();

},{"./view":"bWlJ9","../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CapitalCase", ()=>CapitalCase);
const CapitalCase = function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1N8qu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SliderView extends (0, _viewDefault.default) {
    _curSlide = 0;
    _parentElement = document.querySelector(".slider");
    _slides = document.querySelectorAll(".slide");
    _currentlyActiveSlideOfSlider = "slide--studios";
    _maxSlide = this._slides.length;
    addHandlerWheel(handler) {
        this._parentElement.addEventListener("wheel", function(e) {
            handler(e);
        });
    }
    constructor(){
        super();
        this._slides.forEach((s, i)=>s.style.transform = `translateX(${i * 100}%)`);
    }
    goToSlide(slide) {
        this._curSlide = slide;
        this._currentlyActiveSlideOfSlider = slide === 1 ? "slide--events" : "slide--studios";
        this._slides.forEach((s, i)=>s.style.transform = `translateX(${100 * (i - slide)}%)`);
    }
    changeSlide(dir) {
        this._curSlide = dir === "left" ? this._curSlide === 0 ? this._maxSlide - 1 : this._curSlide - 1 : this._curSlide === this._maxSlide - 1 ? 0 : this._curSlide + 1;
        this._slides.scrollTop = 0;
        this.goToSlide(this._curSlide);
    }
    scrollToPosition(position, slide) {
        this._parentElement.scrollTop += position;
        this.goToSlide(slide);
    }
    stopsTheWheel(e) {
        if (e.deltaY > 0) {
            const topCoord = [].slice.call(document.querySelector(`.${this._currentlyActiveSlideOfSlider}`).children).slice(-1)[0].getBoundingClientRect().top;
            if (topCoord <= this._parentElement.getBoundingClientRect().top) e.preventDefault();
        }
    }
    scrollToTheTop() {
        this._parentElement.scrollTop = 0;
    }
}
exports.default = new SliderView();

},{"./view":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdp6O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SliderArrowsView {
    _curSlide = 0;
    _slides = document.querySelectorAll(".slide");
    _leftArrow = document.querySelector(".slider__arrow--left");
    _rightArrow = document.querySelector(".slider__arrow--right");
    _maxSlide = this._slides.length;
    addHandlerArrowClick(handler, direction) {
        if (direction === "left") this._leftArrow.addEventListener("click", function() {
            handler("left");
        });
        else this._rightArrow.addEventListener("click", function() {
            handler("right");
        });
    }
}
exports.default = new SliderArrowsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4dchp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LocationContainerView {
    _curContainer = 0;
    _locationContainer = document.querySelector(".locations__container");
    _containers = document.querySelectorAll(".container");
    _toggleDisplayDescriptionButton = document.querySelector(".btn--description-control");
    addHandlerClick(handler) {
        this._toggleDisplayDescriptionButton.addEventListener("click", handler);
    }
    constructor(){
        this._containers.forEach((c, i)=>c.style.transform = `translateY(${i * 90}%)`);
    }
    goToContainer(cont) {
        this._curContainer = cont;
        this._containers.forEach((s, i)=>s.style.transform = `translateY(${90 * (i - cont)}%)`);
    }
    toggleDescriptionButton() {
        this._toggleDisplayDescriptionButton.innerHTML = this._toggleDisplayDescriptionButton.innerHTML.trim() === "Display details" ? "Hide details" : "Display details";
    }
    toggleIfButtonIsDisabled(enable) {
        if (enable) this._toggleDisplayDescriptionButton.setAttribute("disabled", "");
        else this._toggleDisplayDescriptionButton.removeAttribute("disabled");
    }
}
exports.default = new LocationContainerView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUObu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
class SidebarView {
    _curSlideOfSidebar = 0;
    _rootElement = document.querySelector(".sidebar");
    _sidebarRows = document.querySelectorAll(".sidebar__row");
    _toggleFiltersButton = document.querySelector(".btn--toggle-filters");
    constructor(){
        this._sidebarRows.forEach((s, i)=>s.style.transform = `translateY(${i * 100}%)`);
        this._sidebarRows[1].classList.toggle("hidden");
    }
    addHandlerToggleFilters(handler) {
        this._toggleFiltersButton.addEventListener("click", handler);
    }
    toggleSlider() {
        const prevSlide = this._curSlideOfSidebar;
        this._curSlideOfSidebar = this._curSlideOfSidebar === 0 ? 1 : 0;
        this._sidebarRows[this._curSlideOfSidebar].classList.remove("hidden");
        this._sidebarRows.forEach((s, i)=>s.style.transform = `translateY(${100 * (i - this._curSlideOfSidebar)}%)`);
        setTimeout(()=>{
            this._sidebarRows[prevSlide].classList.add("hidden");
        }, (0, _config.DEFAULT_ANIMATION_DURATION));
    }
}
exports.default = new SidebarView();

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25RBo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class DetailsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".description__content");
    _generateMarkup() {
        // console.log(this._data);
        let markup = "";
        if ((this._data.id + "").length === 6) {
            // STUDIO
            markup += `<h1 class='content--studio-name'>${this._data.name}</h1>`;
            markup += `<div class='content--studio-description'><span class='studio-description'>"${this._data.description}"</span></div>`;
            if (this._data.type.length > 1) {
                markup += `<div class='content--studio-types'><ul>Types:`;
                this._data.type.forEach((type)=>markup += `<li class='content--studio-type-item'>${type}</li>`);
                markup += `</ul></div>`;
            } else markup += `<div class='content--studio-type'>Type: <span class='studio-type'>${this._data.type[0]}</span></div>`;
            if (this._data.danceTypes.length > 1) {
                markup += `<div class='content--studio-dance-types'><ul>Dances:`;
                this._data.danceTypes.forEach((danceType)=>markup += `<li class='content--studio-dance-type-item'>${danceType}</li>`);
                markup += `</ul></div>`;
            } else markup += `<div class='content--studio-dance-type'>Dance: <span class='studio-dance-type'>${this._data.danceTypes[0]}</span></div>`;
            markup += `<div class='content--studio-address'>Address: <span class='studio-address'>${this._data.address}</span></div>`;
            if (this._data.pageUrl !== "") markup += `<div class='content--studio-page'>Page URL: <a href='${studio.pageUrl}' target='_blank' class='studio-page'>${this._data.name}</a></div>`;
            else markup += `<div class='content--studio-page'>Page URL: <span class='studio-page'>They apparently have no page :(</span></div>`;
            markup += `<div class='content--studio-phone'>Phone number: <span class='studio-phone'>${this._data.phoneNumber}</span></div>`;
            if (this._data.workingTimes.length > 1) {
                markup += `<div class='content--studio-working-times'><ul>Working times:`;
                this._data.workingTimes.forEach((wt)=>markup += `<li class='content--studio-working-time-item'>${wt.day}: ${wt.startTime.substring(0, 5)} - ${wt.endTime.substring(0, 5)}</li>`);
                markup += `</ul></div>`;
            } else markup += `<div class='content--studio-working-time'>Workingtime: <span class='studio-working-time'>${this._data.workingTimes[0].day}: ${this._data.workingTimes[0].startTime.substring(0, 5)} - ${this._data.workingTimes[0].endTime.substring(0, 5)}</span></div>`;
        } else {
            //EVENT
            markup += `<h1 class='content--dance-event-title'>${this._data.title}</h1>`;
            markup += `<div class='content--dance-event-description'><span class='dance-event-description'>${this._data.description}</span></div>`;
            markup += `<div class='content--dance-event-type'>Type of event: <span class='dance-event-type'>${this._data.type}</span></div>`;
            if (this._data.dances.length > 1) {
                markup += `<div class='content--dance-event-dances'><ul>Dances included:`;
                this._data.dances.forEach((dance)=>markup += `<li class='dance--event-dance-item'>${dance}</li>`);
                markup += `</ul></div>`;
            } else markup += `<div class='content--dance-event-dance'>Dance: <span class='dance-event-dance'>${this._data.dances[0]}</span></div>`;
            markup += `<div class='content--dance-event-address'>Address: <span class='dance-event-address'>${this._data.address}</span></div>`;
            const startDateAndTimeSplit = this._data.start.split("T");
            const startDateAndTime = `${startDateAndTimeSplit[0].split("-").reverse().join(".")} - ${startDateAndTimeSplit[1].substring(0, 5)}`;
            const endDateAndTimeSplit = this._data.end.split("T");
            const endDateAndTime = `${endDateAndTimeSplit[0].split("-").reverse().join(".")} - ${endDateAndTimeSplit[1].substring(0, 5)}`;
            markup += `<div class='content--dance-event-start-time'>Start time: <span class='dance-event-start-time'>${startDateAndTime}</span></div> `;
            markup += `<div class='content--dance-event-end-time'>End time: <span class='dance-event-end-time'>${endDateAndTime}</span></div> `;
        }
        return markup;
    }
}
exports.default = new DetailsView();

},{"./view":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequirea262")

//# sourceMappingURL=index.e37f48ea.js.map
