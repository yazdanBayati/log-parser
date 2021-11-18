"use strict";
exports.__esModule = true;
exports.JsonLogGeneratorFactory = void 0;
var enums_1 = require("../../../enums");
var exeptions_1 = require("../../../exeptions");
var jsonErrorLogGenerator_1 = require("./jsonLogGenerators/jsonErrorLogGenerator");
var JsonLogGeneratorFactory = /** @class */ (function () {
    function JsonLogGeneratorFactory(logger) {
        var _this = this;
        this.run = function (logType) {
            var result;
            if (logType) {
                switch (logType) {
                    case enums_1.LogType.Error:
                        result = new jsonErrorLogGenerator_1.JsonErrorLogGenerator(_this.logger);
                    case enums_1.LogType.Debug:
                        throw new exeptions_1.InvalidLogTypeError(JsonLogGeneratorFactory.name, 'Debug log Type is not supported ');
                    case enums_1.LogType.Info:
                        throw new exeptions_1.InvalidLogTypeError(JsonLogGeneratorFactory.name, 'Info log Type is not supported ');
                    case enums_1.LogType.Warn:
                        throw new exeptions_1.InvalidLogTypeError(JsonLogGeneratorFactory.name, 'Warn log Type is not supported ');
                    default:
                        throw new exeptions_1.InvalidLogTypeError(JsonLogGeneratorFactory.name, 'Invalid Log Type');
                }
            }
            else {
                result = new jsonErrorLogGenerator_1.JsonErrorLogGenerator(_this.logger);
            }
            return result;
        };
        this.logger = logger;
    }
    return JsonLogGeneratorFactory;
}());
exports.JsonLogGeneratorFactory = JsonLogGeneratorFactory;
