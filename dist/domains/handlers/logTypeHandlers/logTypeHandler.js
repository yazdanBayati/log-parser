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
exports.LogTypeHandler = void 0;
var handler_1 = require("../../handler");
var LogTypeHandler = /** @class */ (function (_super) {
    __extends(LogTypeHandler, _super);
    function LogTypeHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parseToBasicLogModel = function (logs) {
            return JSON.parse(logs);
        };
        _this.parseToLogDetails = function (details) {
            return JSON.parse(details);
        };
        return _this;
    }
    return LogTypeHandler;
}(handler_1.AbstractHandler));
exports.LogTypeHandler = LogTypeHandler;
