"use strict";
exports.__esModule = true;
exports.TestEnvManager = void 0;
var testPrintHandler_1 = require("../domains/handlers/printHandler/testPrintHandler");
var TestEnvManager = /** @class */ (function () {
    function TestEnvManager(inputFileName, outputFileName, logType) {
        this.buildPrintHandler = function () {
            return new testPrintHandler_1.TestPrintHandler();
        };
        this.exit = function () { };
        this._inputFileName = inputFileName;
        this._outputFileName = outputFileName;
        this._logType = logType;
    }
    Object.defineProperty(TestEnvManager.prototype, "inputFileName", {
        get: function () {
            return this._inputFileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TestEnvManager.prototype, "outputFileName", {
        get: function () {
            return this._outputFileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TestEnvManager.prototype, "logType", {
        get: function () {
            return this._logType;
        },
        enumerable: false,
        configurable: true
    });
    return TestEnvManager;
}());
exports.TestEnvManager = TestEnvManager;
