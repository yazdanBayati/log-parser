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
exports.MockOutputHandler = void 0;
var handler_1 = require("../../handler");
var exeptions_1 = require("../../../exeptions");
var MockOutputHandler = /** @class */ (function (_super) {
    __extends(MockOutputHandler, _super);
    function MockOutputHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            if (request.jsonFormatLog) {
                return request.jsonFormatLog;
            }
            else {
                throw new exeptions_1.NullRefreanceError(MockOutputHandler.name, 'request can not be null');
            }
        };
        return _this;
    }
    return MockOutputHandler;
}(handler_1.AbstractHandler));
exports.MockOutputHandler = MockOutputHandler;
