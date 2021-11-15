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
exports.InvalidInput = exports.InvalidLogType = exports.FailedToPrintFile = exports.InvalidFileFormat = exports.BaseError = void 0;
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(type, message) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.date = new Date();
        Object.setPrototypeOf(_this, BaseError.prototype);
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
var InvalidFileFormat = /** @class */ (function (_super) {
    __extends(InvalidFileFormat, _super);
    function InvalidFileFormat(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidFileFormat;
}(BaseError));
exports.InvalidFileFormat = InvalidFileFormat;
var FailedToPrintFile = /** @class */ (function (_super) {
    __extends(FailedToPrintFile, _super);
    function FailedToPrintFile(type, message) {
        return _super.call(this, type, message) || this;
    }
    return FailedToPrintFile;
}(BaseError));
exports.FailedToPrintFile = FailedToPrintFile;
var InvalidLogType = /** @class */ (function (_super) {
    __extends(InvalidLogType, _super);
    function InvalidLogType(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidLogType;
}(BaseError));
exports.InvalidLogType = InvalidLogType;
var InvalidInput = /** @class */ (function (_super) {
    __extends(InvalidInput, _super);
    function InvalidInput(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidInput;
}(BaseError));
exports.InvalidInput = InvalidInput;
