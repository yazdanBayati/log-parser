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
exports.JsonErrorLogGenerator = void 0;
var enums_1 = require("../../../../enums");
var exeptions_1 = require("../../../../exeptions");
var josnLogGenerator_1 = require("./josnLogGenerator");
var JsonErrorLogGenerator = /** @class */ (function (_super) {
    __extends(JsonErrorLogGenerator, _super);
    function JsonErrorLogGenerator(logger) {
        var _this = _super.call(this, logger) || this;
        _this.run = function (basicLogModels) {
            var errors = [];
            basicLogModels.forEach(function (log, index) {
                var errorLogModel = _this.convertToErrorLogModel(log, index);
                if (errorLogModel) {
                    errors.push(errorLogModel);
                }
            });
            return JSON.stringify(errors);
        };
        _this.convertToErrorLogModel = function (log, lineNumber) {
            if (log.logLevel === enums_1.LogType.Error) {
                try {
                    var logDetails = JSON.parse(log.details);
                    if (!log.timeStamp || log.timeStamp.toString() === 'Invalid Date') {
                        throw new exeptions_1.InvalidFileFormatError(JsonErrorLogGenerator.name, ' timeStamp is invalid');
                    }
                    if (!logDetails.err) {
                        throw new exeptions_1.InvalidFileFormatError(JsonErrorLogGenerator.name, 'error section is missing');
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
                    return undefined;
                }
            }
        };
        return _this;
    }
    return JsonErrorLogGenerator;
}(josnLogGenerator_1.JsonLogGenerator));
exports.JsonErrorLogGenerator = JsonErrorLogGenerator;
