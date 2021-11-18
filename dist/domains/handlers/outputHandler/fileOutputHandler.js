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
exports.FileOutputHandler = void 0;
var fs_1 = require("fs");
var exeptions_1 = require("../../../exeptions");
var outputHandler_1 = require("./outputHandler");
var FileOutputHandler = /** @class */ (function (_super) {
    __extends(FileOutputHandler, _super);
    function FileOutputHandler(logger) {
        var _this = _super.call(this, logger) || this;
        _this.handle = function (request) {
            if (request.input && request.jsonFormatLog) {
                (0, fs_1.writeFile)(request.input.outputFileName, request.jsonFormatLog, function (error) {
                    if (error) {
                        throw new exeptions_1.FailedToPrintFileError(FileOutputHandler.name, error.message);
                    }
                });
                _this.logger.info('successfully added the result');
                return request.jsonFormatLog;
            }
            else {
                throw new exeptions_1.NullRefreanceError(FileOutputHandler.name, 'input && jsonFormatLog should have value');
            }
        };
        return _this;
    }
    return FileOutputHandler;
}(outputHandler_1.OutputHandler));
exports.FileOutputHandler = FileOutputHandler;
