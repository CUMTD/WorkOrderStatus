"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WorkOrderComponent = (props) => React.createElement("div", { className: "work-order" },
    React.createElement("div", { className: "heading" },
        React.createElement("h2", null, props.assetNumber),
        React.createElement("h3", null, props.workOrderNumber)));
exports.default = WorkOrderComponent;
//# sourceMappingURL=workOrder.js.map