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
var exeptions_1 = require("../../../exeptions");
var handler_1 = require("../../handler");
var jsonlogGeneratorFactory_1 = require("./jsonlogGeneratorFactory");
var LogTypeHandler = /** @class */ (function (_super) {
    __extends(LogTypeHandler, _super);
    function LogTypeHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            var _a;
            if (request.basicFormatLog && request.input) {
                var jsonLogFactory = new jsonlogGeneratorFactory_1.JsonLogGeneratorFactory(_this.logger);
                var jsonLogGenerator = jsonLogFactory.run((_a = request.input) === null || _a === void 0 ? void 0 : _a.logType);
                var jsonLogs = jsonLogGenerator.run(request === null || request === void 0 ? void 0 : request.basicFormatLog);
                request.jsonFormatLog = jsonLogs;
                return _super.prototype.handle.call(_this, request);
            }
            else {
                throw new exeptions_1.NullRefreanceError(LogTypeHandler.name, 'basiclogModel && iput shoud have value');
            }
        };
        return _this;
    }
    return LogTypeHandler;
}(handler_1.AbstractHandler));
exports.LogTypeHandler = LogTypeHandler;
