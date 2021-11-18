"use strict";
exports.__esModule = true;
exports.AbstractHandler = void 0;
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler(logger) {
        this.logger = logger;
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        else {
            return '';
        }
    };
    return AbstractHandler;
}());
exports.AbstractHandler = AbstractHandler;
