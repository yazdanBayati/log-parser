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
exports.NullRefreanceError = exports.InvalidInputError = exports.InvalidLogTypeError = exports.FailedToPrintFileError = exports.InvalidFileFormatError = exports.BaseError = void 0;
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(type, message) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.date = new Date();
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
var InvalidFileFormatError = /** @class */ (function (_super) {
    __extends(InvalidFileFormatError, _super);
    function InvalidFileFormatError(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidFileFormatError;
}(BaseError));
exports.InvalidFileFormatError = InvalidFileFormatError;
var FailedToPrintFileError = /** @class */ (function (_super) {
    __extends(FailedToPrintFileError, _super);
    function FailedToPrintFileError(type, message) {
        return _super.call(this, type, message) || this;
    }
    return FailedToPrintFileError;
}(BaseError));
exports.FailedToPrintFileError = FailedToPrintFileError;
var InvalidLogTypeError = /** @class */ (function (_super) {
    __extends(InvalidLogTypeError, _super);
    function InvalidLogTypeError(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidLogTypeError;
}(BaseError));
exports.InvalidLogTypeError = InvalidLogTypeError;
var InvalidInputError = /** @class */ (function (_super) {
    __extends(InvalidInputError, _super);
    function InvalidInputError(type, message) {
        return _super.call(this, type, message) || this;
    }
    return InvalidInputError;
}(BaseError));
exports.InvalidInputError = InvalidInputError;
var NullRefreanceError = /** @class */ (function (_super) {
    __extends(NullRefreanceError, _super);
    function NullRefreanceError(type, message) {
        return _super.call(this, type, message) || this;
    }
    return NullRefreanceError;
}(BaseError));
exports.NullRefreanceError = NullRefreanceError;
