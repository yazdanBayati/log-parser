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
exports.MockInputHandler = void 0;
var inputHandler_1 = require("./inputHandler");
var MockInputHandler = /** @class */ (function (_super) {
    __extends(MockInputHandler, _super);
    function MockInputHandler(inputFileName, outputFileName, logType, logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            request.input = {
                inputFileName: _this.inputFileName,
                outputFileName: _this.outputFileName,
                logType: _this.logType
            };
            return _super.prototype.handle.call(_this, request);
        };
        _this.inputFileName = inputFileName;
        _this.outputFileName = outputFileName;
        _this.logType = logType;
        return _this;
    }
    return MockInputHandler;
}(inputHandler_1.InputHandler));
exports.MockInputHandler = MockInputHandler;
