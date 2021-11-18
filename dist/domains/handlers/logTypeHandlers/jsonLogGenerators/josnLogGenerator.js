"use strict";
exports.__esModule = true;
exports.JsonLogGenerator = void 0;
var JsonLogGenerator = /** @class */ (function () {
    function JsonLogGenerator(logger) {
        var _this = this;
        this.printError = function (e, lineNumber) {
            _this.logger.error(e);
            _this.logger.info("skipped line : " + (lineNumber + 1) + " ===========");
        };
        this.logger = logger;
    }
    return JsonLogGenerator;
}());
exports.JsonLogGenerator = JsonLogGenerator;
