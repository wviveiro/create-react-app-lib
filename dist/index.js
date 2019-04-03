"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var logo = require('../lib/logo.svg');
var MyComponenent = /** @class */ (function (_super) {
    __extends(MyComponenent, _super);
    function MyComponenent(props) {
        return _super.call(this, props) || this;
    }
    MyComponenent.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("header", { className: "App-header" },
                react_1.default.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
                react_1.default.createElement("p", null,
                    "Edit ",
                    react_1.default.createElement("code", null, "src/components/index.tsx"),
                    " and save to reload."),
                react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "My Component!"))));
    };
    return MyComponenent;
}(react_1.default.Component));
exports.default = MyComponenent;
