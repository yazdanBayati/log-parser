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
exports.CommandLineEnvManager = void 0;
var commandLineInputHandler_1 = require("../domains/handlers/inputHandler/commandLineInputHandler");
var fileOutputHandler_1 = require("../domains/handlers/outputHandler/fileOutputHandler");
var evnManager_1 = require("./evnManager");
var CommandLineEnvManager = /** @class */ (function (_super) {
    __extends(CommandLineEnvManager, _super);
    function CommandLineEnvManager(logger) {
        var _this = _super.call(this, logger) || this;
        _this.buildInputHandler = function () {
            return new commandLineInputHandler_1.CommandLineInputHandler(_this.logger);
        };
        _this.buildOutpuHandler = function () {
            return new fileOutputHandler_1.FileOutputHandler(_this.logger);
        };
        _this.exit = function () {
            process.exit(1);
        };
        return _this;
    }
    return CommandLineEnvManager;
}(evnManager_1.EnvManager));
exports.CommandLineEnvManager = CommandLineEnvManager;
