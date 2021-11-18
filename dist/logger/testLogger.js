"use strict";
exports.__esModule = true;
exports.TestLogger = void 0;
var TestLogger = /** @class */ (function () {
    function TestLogger() {
        this.error = function (error) {
            console.error(error.message);
        };
        this.info = function (message) { };
    }
    return TestLogger;
}());
exports.TestLogger = TestLogger;
