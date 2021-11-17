"use strict";
exports.__esModule = true;
var logFormatHnadler_1 = require("../../domains/handlers/logFormatHnadler");
var logErrorHandler_1 = require("../../domains/handlers/logTypeHandlers/logErrorHandler");
var enums_1 = require("../../enums");
var testLogger_1 = require("../../logger/testLogger");
var logger;
var logErrorHandler;
var logFormatHandler;
beforeEach(function () {
    logger = new testLogger_1.TestLogger();
    logErrorHandler = new logErrorHandler_1.LogErrorHandler(logger);
    logFormatHandler = new logFormatHnadler_1.LogFormatHandler(logger);
    logFormatHandler.setNext(logErrorHandler);
});
describe('logError', function () {
    it('should have LogErrorHandler', function () {
        expect(typeof logErrorHandler_1.LogErrorHandler).toBe('function');
    });
    it('should reutrn 1 error log', function () {
        var res = logFormatHandler.handle('./src/tests/unit-tests/mock_data/logwith1error.log');
        var errors = JSON.parse(res);
        expect(errors.length).toBe(1);
        var error = errors[0];
        expect(error.logLevel).toBe(enums_1.LogType.Error);
        expect(error.timeStamp).toBe(new Date('2021-08-09T02:12:51.259Z').getTime());
        expect(error.transactionId).toBe('9abc55b2-807b-4361-9dbe-aa88b1b2e978');
        expect(error.err).toBe('Not found');
    });
    it('shoud return 0 error log', function () {
        var res = logFormatHandler.handle('./src/tests/unit-tests/mock_data/wrongformatlog.log');
        var errors = JSON.parse(res);
        expect(errors.length).toBe(0);
    });
});
