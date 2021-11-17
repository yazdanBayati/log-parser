"use strict";
exports.__esModule = true;
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
        var res = logFormatHandler.handle('./src/tests/mock_data/logwith1error.log');
        var basicLogs = JSON.parse(res);
        var errorLogs = basicLogs.filter(function (x) { return x.logLevel === enums_1.LogType.Error; });
        expect(basicLogs.length).toBe(12);
        expect(errorLogs.length).toBe(1);
    });
    it('should return basicLogModel array with 11 records', function () {
        var res = logFormatHandler.handle('./src/tests/mock_data/logwithouterror.log');
        var basicLogs = JSON.parse(res);
        var errorLogs = basicLogs.filter(function (x) { return x.logLevel === enums_1.LogType.Error; });
        expect(basicLogs.length).toBe(11);
        expect(errorLogs.length).toBe(0);
    });
});
