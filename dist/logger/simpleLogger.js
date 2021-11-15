"use strict";
exports.__esModule = true;
exports.SimpleLogger = void 0;
var SimpleLogger = /** @class */ (function () {
    function SimpleLogger() {
        this.error = function (error) {
            console.error(error.name);
            console.error(error.type);
            console.error(error.message);
            console.error(error.stack);
        };
        this.info = function (message) {
            console.log(message);
        };
    }
    return SimpleLogger;
}());
exports.SimpleLogger = SimpleLogger;
