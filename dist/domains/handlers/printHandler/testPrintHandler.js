"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TestPrintHandler = void 0;
var handler_1 = require("../../handler");
var TestPrintHandler = /** @class */ (function (_super) {
    __extends(TestPrintHandler, _super);
    function TestPrintHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            return request;
        };
        return _this;
    }
    return TestPrintHandler;
}(handler_1.AbstractHandler));
exports.TestPrintHandler = TestPrintHandler;
