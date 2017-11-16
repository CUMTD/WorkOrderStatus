"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactDom = require("react-dom");
const App_1 = require("./Components/App");
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
//# sourceMappingURL=index.js.map