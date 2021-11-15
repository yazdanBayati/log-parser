"use strict";
exports.__esModule = true;
exports.LogTypeHandlerFactory = void 0;
var enums_1 = require("../../../enums");
var exeptions_1 = require("../../../exeptions");
var logErrorHandler_1 = require("./logErrorHandler");
var LogTypeHandlerFactory = /** @class */ (function () {
    function LogTypeHandlerFactory(logger) {
        var _this = this;
        this.run = function (formatType) {
            var result;
            if (formatType) {
                switch (process.argv[4]) {
                    case enums_1.LogType.Error:
                        result = new logErrorHandler_1.logErrorHandler(_this.logger);
                    case enums_1.LogType.Debug:
                        throw new exeptions_1.InvalidLogType(LogTypeHandlerFactory.name, 'Debug log Type is not supported ');
                    case enums_1.LogType.Info:
                        throw new exeptions_1.InvalidLogType(LogTypeHandlerFactory.name, 'Info log Type is not supported ');
                    case enums_1.LogType.Warn:
                        throw new exeptions_1.InvalidLogType(LogTypeHandlerFactory.name, 'Warn log Type is not supported ');
                    case enums_1.LogType.Debug:
                        return new logErrorHandler_1.logErrorHandler(_this.logger);
                    default:
                        throw new exeptions_1.InvalidLogType(LogTypeHandlerFactory.name, 'Invalid Log Type');
                }
            }
            else {
                result = new logErrorHandler_1.logErrorHandler(_this.logger);
            }
            return result;
        };
        this.logger = logger;
    }
    return LogTypeHandlerFactory;
}());
exports.LogTypeHandlerFactory = LogTypeHandlerFactory;
