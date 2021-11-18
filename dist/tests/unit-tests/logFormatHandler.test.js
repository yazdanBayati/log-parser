"use strict";
exports.__esModule = true;
var mockInputHandler_1 = require("../../domains/handlers/inputHandler/mockInputHandler");
var logFormatHnadler_1 = require("../../domains/handlers/logFormatHnadler");
var enums_1 = require("../../enums");
var testLogger_1 = require("../../logger/testLogger");
var logger;
var logFormatHandler;
beforeEach(function () {
    logger = new testLogger_1.TestLogger();
    logFormatHandler = new logFormatHnadler_1.LogFormatHandler(logger);
});
describe('logForamt', function () {
    it('should have LogFormatHandler', function () {
        expect(typeof logFormatHnadler_1.LogFormatHandler).toBe('function');
    });
    it('should reutrn basicLogModel array with 12 records', function () {
        var _a, _b;
        var inputHander = new mockInputHandler_1.MockInputHandler('./src/tests/mock_data/logwith1error.log', 'error.json', undefined, logger);
        inputHander.setNext(logFormatHandler);
        var request = {};
        inputHander.handle(request);
        var errorLogs = request.basicFormatLog
            ? (_a = request.basicFormatLog) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.logLevel === enums_1.LogType.Error; })
            : [];
        expect((_b = request.basicFormatLog) === null || _b === void 0 ? void 0 : _b.length).toBe(12);
        expect(errorLogs.length).toBe(1);
    });
    it('should return basicLogModel array with 11 records', function () {
        var _a, _b;
        var inputHander = new mockInputHandler_1.MockInputHandler('./src/tests/mock_data/logwithouterror.log', 'error.json', undefined, logger);
        inputHander.setNext(logFormatHandler);
        var request = {};
        inputHander.handle(request);
        var errorLogs = request.basicFormatLog
            ? (_a = request.basicFormatLog) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.logLevel === enums_1.LogType.Error; })
            : [];
        expect((_b = request.basicFormatLog) === null || _b === void 0 ? void 0 : _b.length).toBe(11);
        expect(errorLogs.length).toBe(0);
    });
});
