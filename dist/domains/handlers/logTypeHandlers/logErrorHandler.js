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
exports.logErrorHandler = void 0;
var enums_1 = require("../../../enums");
var exeptions_1 = require("../../../exeptions");
var logTypeHandler_1 = require("./logTypeHandler");
var logErrorHandler = /** @class */ (function (_super) {
    __extends(logErrorHandler, _super);
    function logErrorHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            var logs = _this.parseToBasicLogModel(request);
            var errors = [];
            logs.forEach(function (log, index) {
                var errorLogModel = _this.convertToErrorLogModel(log, index);
                if (errorLogModel) {
                    errors.push(errorLogModel);
                }
            });
            _super.prototype.handle.call(_this, JSON.stringify(errors));
        };
        _this.convertToErrorLogModel = function (log, lineNumber) {
            console.log("line number " + lineNumber);
            if (log.logLevel === enums_1.LogType.Error) {
                try {
                    var logDetails = _this.parseToLogDetails(log.details);
                    if (!log.timeStamp) {
                        throw new exeptions_1.InvalidFileFormat(logErrorHandler.name, ' timeStamp is invalid');
                    }
                    if (!logDetails.err) {
                        throw new exeptions_1.InvalidFileFormat(logErrorHandler.name, 'error section is missing');
                    }
                    var error = {
                        timeStamp: new Date(log.timeStamp).getTime(),
                        logLevel: enums_1.LogType.Error,
                        transactionId: logDetails.transactionId,
                        err: logDetails.err
                    };
                    return error;
                }
                catch (e) {
                    _this.printError(e, lineNumber);
                    return null;
                }
            }
        };
        _this.printError = function (e, lineNumber) {
            _this.logger.error(e);
            _this.logger.info("skipped line : " + (lineNumber + 1));
        };
        return _this;
    }
    return logErrorHandler;
}(logTypeHandler_1.LogTypeHandler));
exports.logErrorHandler = logErrorHandler;
