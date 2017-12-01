var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const reactDom = __webpack_require__(3);
const App_1 = __webpack_require__(4);
class Index {
    constructor(elementName) {
        this.render = () => reactDom.render(this.jsxElement, this.domElement);
        this.domElement = document.getElementById(elementName);
        this.jsxElement = React.createElement(App_1.App, null);
    }
}
const init = () => {
    const app = new Index('app');
    app.render();
    document.removeEventListener('DOMContentLoaded', init);
};
document.addEventListener('DOMContentLoaded', init, false);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(1);
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const workOrderGroup_1 = __webpack_require__(5);
const workOrderApi_1 = __webpack_require__(7);
class App extends react_1.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.update = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('updating');
            try {
                const groups = yield workOrderApi_1.WorkOrderApi.getOpen();
                const pages = this.toPages(groups);
                this.setState(Object.assign({}, this.state, { pages, currentIndex: 0 }), this.startTimer);
            }
            catch (ex) {
                console.log('Can\'t load work orders', ex);
            }
        });
        this.calculateGroupHeight = (group) => {
            if (group == null || group.workOrders.length === 0) {
                return 0;
            }
            const heights = App.HEIGHTS;
            const base = heights['header'] + heights['th'] + heights['bottomMargin'];
            let totalRowHeight = 0;
            for (let wo of group.workOrders) {
                let rows = 1;
                if (wo.workStatus && wo.workStatus.length > 0) {
                    rows = Math.max(1, wo.workStatus.length);
                }
                totalRowHeight += heights['trPadding'] + (heights['trItem'] * rows);
            }
            return base + totalRowHeight;
        };
        this.toPages = (groups) => {
            if (groups == null || groups.length === 0) {
                return [];
            }
            const pages = [];
            let remainingHeight = App.PAGE_HEIGHT;
            let currentPage = [];
            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                const pageHeight = this.calculateGroupHeight(group);
                remainingHeight -= pageHeight;
                // we have to add at least one group to a page
                if (currentPage.length > 0 && remainingHeight <= 0) {
                    pages.push(currentPage);
                    currentPage = [group];
                    remainingHeight = App.PAGE_HEIGHT - remainingHeight;
                }
                else {
                    currentPage.push(group);
                }
            }
            pages.push(currentPage);
            return pages;
        };
        this.clearTimer = () => {
            if (this.timer != null) {
                window.clearTimeout(this.timer);
            }
        };
        this.startTimer = () => {
            this.clearTimer();
            this.setState(Object.assign({}, this.state, { currentIndex: 0 }), () => {
                this.timer = window.setTimeout(this.tickTimer, App.UPDATE_INTERVAL);
            });
        };
        this.tickTimer = () => {
            this.clearTimer();
            if (this.state.currentIndex !== 0 && this.state.currentIndex === this.state.pages.length - 1) {
                this.update();
            }
            else {
                this.setState(Object.assign({}, this.state, { currentIndex: this.state.currentIndex + 1 }), () => {
                    this.timer = window.setTimeout(this.tickTimer, App.UPDATE_INTERVAL);
                });
            }
        };
        this.state = {
            currentIndex: 0,
            pages: []
        };
    }
    render() {
        if (this.state.pages == null || this.state.pages.length === 0 || this.state.pages[0] == null || this.state.pages[0].length === 0) {
            return new Array();
        }
        return this
            .state
            .pages[this.state.currentIndex]
            .map((wo) => React.createElement(workOrderGroup_1.default, Object.assign({}, wo, { key: `${wo.status}` })));
    }
    componentDidMount() {
        this.update();
    }
}
App.UPDATE_INTERVAL = 60000;
App.PAGE_HEIGHT = 1040;
App.HEIGHTS = {
    header: 51,
    th: 38,
    trPadding: 13,
    trItem: 27,
    bottomMargin: 30
};
exports.App = App;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const workOrder_1 = __webpack_require__(6);
const WorkOrderGroup = (props) => {
    const hasStatus = props.workOrders.filter((wo) => wo.workStatus !== null).length > 0;
    const renderEmployeeColInfo = () => {
        if (hasStatus) {
            return [
                React.createElement("col", { className: "employee", key: "employee" }),
                React.createElement("col", { className: "start", key: "start" }),
                React.createElement("col", { className: "op", key: "op" })
            ];
        }
        return null;
    };
    const renderEmployeeHeaderInfo = () => {
        if (hasStatus) {
            return [
                React.createElement("th", { key: "emp" }, "Employee"),
                React.createElement("th", { key: "ts" }, "Time Started"),
                React.createElement("th", { key: "opcode" }, "Op. Code")
            ];
        }
        return null;
    };
    return React.createElement("section", { className: "group" },
        React.createElement("h2", null, props.status),
        React.createElement("table", { className: hasStatus ? 'status' : 'no-status' },
            React.createElement("colgroup", null,
                React.createElement("col", { className: "asset" }),
                React.createElement("col", { className: "wo" }),
                React.createElement("col", { className: "open" }),
                React.createElement("col", { className: "down" }),
                React.createElement("col", { className: "description" }),
                renderEmployeeColInfo()),
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Asset #"),
                    React.createElement("th", null, "WO #"),
                    React.createElement("th", null, "Open"),
                    React.createElement("th", null, "Down Time"),
                    React.createElement("th", null, "Description"),
                    renderEmployeeHeaderInfo())),
            React.createElement("tbody", null, props.workOrders.map((wo) => React.createElement(workOrder_1.default, Object.assign({}, wo, { hasStatus: hasStatus, key: `${wo.assetNumber}-${wo.workOrderNumber}` }))))));
};
exports.default = WorkOrderGroup;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const renderDescription = (description) => {
    if (description == null || description.length === 0) {
        return React.createElement("td", null);
    }
    return React.createElement("td", { className: "description-cell" },
        React.createElement("span", null, ''.concat(...description)));
};
const renderWorkStatus = (ws, hasStatus) => {
    const toKey = (s) => `${s.employeeName}-${s.timeStarted}-${s.operatorCode}`;
    if (!hasStatus) {
        return null;
    }
    if (ws == null) {
        return [
            React.createElement("td", { className: "status hidden", colSpan: 3, key: "none" })
        ];
    }
    return [
        React.createElement("td", { className: "status split", key: "en" }, ws.map((s) => React.createElement("span", { className: "row", key: toKey(s) }, s.employeeName))),
        React.createElement("td", { className: "status", key: "ts" }, ws.map((s) => React.createElement("span", { className: "row", key: toKey(s) }, s.timeStarted))),
        React.createElement("td", { className: "status", key: "oc" }, ws.map((s) => React.createElement("span", { className: "row", key: toKey(s) }, s.operatorCode)))
    ];
};
const WorkOrder = (props) => React.createElement("tr", null,
    React.createElement("td", null, props.assetNumber),
    React.createElement("td", null, props.workOrderNumber),
    React.createElement("td", null, props.open),
    React.createElement("td", null, props.downTime),
    renderDescription(props.description),
    renderWorkStatus(props.workStatus, props.hasStatus));
exports.default = WorkOrder;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(1);
var WorkOrderApi;
(function (WorkOrderApi) {
    const OPEN_URL = '/work-orders/open/';
    function getOpen() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const init = {
                method: 'GET',
                credentials: 'same-origin'
            };
            const request = new Request(OPEN_URL, init);
            const response = yield fetch(request);
            if (response.status !== 200) {
                throw response.status;
            }
            const json = (yield response.json());
            return json;
        });
    }
    WorkOrderApi.getOpen = getOpen;
    ;
})(WorkOrderApi = exports.WorkOrderApi || (exports.WorkOrderApi = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=index.map