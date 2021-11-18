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
exports.LogFormatHandler = void 0;
var handler_1 = require("../handler");
var lineByLine = require('n-readlines');
var exeptions_1 = require("../../exeptions");
var LogFormatHandler = /** @class */ (function (_super) {
    __extends(LogFormatHandler, _super);
    function LogFormatHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            if (request.input) {
                var liner = new lineByLine(request.input.inputFileName);
                var line = void 0;
                var logs = [];
                var lineNumber = 1;
                while ((line = liner.next())) {
                    var log = _this.ConvertToLogModel(line, lineNumber);
                    if (log) {
                        logs.push(log);
                    }
                }
                request.basicFormatLog = logs;
                return _super.prototype.handle.call(_this, request);
            }
            else {
                throw new exeptions_1.NullRefreanceError(LogFormatHandler.name, 'input can not be null');
            }
        };
        return _this;
    }
    LogFormatHandler.prototype.ConvertToLogModel = function (line, lineNumber) {
        var lineStr = line.toString();
        try {
            var items = lineStr.split(' - ');
            if (items.length != 3) {
                throw new exeptions_1.InvalidFileFormatError(LogFormatHandler.name, 'invalid file format');
            }
            else {
                var log = {
                    timeStamp: new Date(items[0]),
                    logLevel: items[1],
                    details: items[2]
                };
                return log;
            }
        }
        catch (e) {
            this.logger.error(e);
            this.logger.info("skipped line : " + lineNumber + " ================");
            return undefined;
        }
    };
    return LogFormatHandler;
}(handler_1.AbstractHandler));
exports.LogFormatHandler = LogFormatHandler;
