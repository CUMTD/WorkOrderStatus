"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
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
            const json = (yield response.json());
            return json;
        });
    }
    WorkOrderApi.getOpen = getOpen;
    ;
})(WorkOrderApi = exports.WorkOrderApi || (exports.WorkOrderApi = {}));
//# sourceMappingURL=workOrderApi.js.map