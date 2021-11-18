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
exports.CommandLineInputHandler = void 0;
var exeptions_1 = require("../../../exeptions");
var inputHandler_1 = require("./inputHandler");
var CommandLineInputHandler = /** @class */ (function (_super) {
    __extends(CommandLineInputHandler, _super);
    function CommandLineInputHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            if (process.argv.length < 4) {
                throw new exeptions_1.InvalidInputError(CommandLineInputHandler.name, 'Usage: node ' + process.argv[1] + ' wrong input');
            }
            request.input = {
                inputFileName: process.argv[2],
                outputFileName: process.argv[3],
                logType: process.argv.length >= 5 ? process.argv[4] : ''
            };
            // request.input = {
            //   inputFileName: './log/app.log',
            //   outputFileName: 'error.json',
            // };
            return _super.prototype.handle.call(_this, request);
        };
        return _this;
    }
    return CommandLineInputHandler;
}(inputHandler_1.InputHandler));
exports.CommandLineInputHandler = CommandLineInputHandler;
