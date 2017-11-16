"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const react_1 = require("react");
const workOrder_1 = require("./workOrder");
const workOrderApi_1 = require("../api/workOrderApi");
class App extends react_1.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.update = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const workOrders = yield workOrderApi_1.WorkOrderApi.getOpen();
            this.setState(Object.assign({}, this.state, { workOrders }));
        });
        this.state = {
            workOrders: []
        };
    }
    render() {
        return this.state.workOrders.map((wo) => React.createElement(workOrder_1.default, Object.assign({}, wo)));
    }
    componentDidMount() {
        window.setInterval(this.update, App.UPDATE_INTERVAL);
        this.update();
    }
}
App.UPDATE_INTERVAL = 10000;
exports.App = App;
//# sourceMappingURL=App.js.map