"use strict";
exports.__esModule = true;
var mockInputHandler_1 = require("../../domains/handlers/inputHandler/mockInputHandler");
var logFormatHnadler_1 = require("../../domains/handlers/logFormatHnadler");
var logTypeHandler_1 = require("../../domains/handlers/logTypeHandlers/logTypeHandler");
var enums_1 = require("../../enums");
var testLogger_1 = require("../../logger/testLogger");
var logger;
var logErrorHandler;
var logFormatHandler;
beforeEach(function () {
    logger = new testLogger_1.TestLogger();
    logErrorHandler = new logTypeHandler_1.LogTypeHandler(logger);
    logFormatHandler = new logFormatHnadler_1.LogFormatHandler(logger);
});
describe('logTypeHanler', function () {
    it('should have logTypeHandler', function () {
        expect(typeof logTypeHandler_1.LogTypeHandler).toBe('function');
    });
    it('should reutrn 1 error log', function () {
        var inputHander = new mockInputHandler_1.MockInputHandler('./src/tests/mock_data/logwith1error.log', 'error.json', undefined, logger);
        inputHander.setNext(logFormatHandler).setNext(logErrorHandler);
        var request = {};
        inputHander.handle(request);
        //expect(request.jsonFormatLog).toEqual(expect.any(Function));
        var errors = request.jsonFormatLog
            ? JSON.parse(request === null || request === void 0 ? void 0 : request.jsonFormatLog)
            : [];
        expect(errors.length).toBe(1);
        var error = errors[0];
        expect(error.logLevel).toBe(enums_1.LogType.Error);
        expect(error.timeStamp).toBe(new Date('2021-08-09T02:12:51.259Z').getTime());
        expect(error.transactionId).toBe('9abc55b2-807b-4361-9dbe-aa88b1b2e978');
        expect(error.err).toBe('Not found');
    });
    it('shoud return 0 error log', function () {
        var inputHander = new mockInputHandler_1.MockInputHandler('./src/tests/mock_data/wrongformatlog.log', 'error.json', undefined, logger);
        inputHander.setNext(logFormatHandler).setNext(logErrorHandler);
        var request = {};
        inputHander.handle(request);
        //expect(request.jsonFormatLog).toEqual(expect.any(Function));
        var errors = request.jsonFormatLog
            ? JSON.parse(request === null || request === void 0 ? void 0 : request.jsonFormatLog)
            : [];
        expect(errors.length).toBe(0);
    });
    it('should reutrn input', function () {
        var inputHander = new mockInputHandler_1.MockInputHandler('./src/tests/mock_data/logwith1error.log', 'error.json', undefined, logger);
        var request = {};
        inputHander.handle(request);
        expect(request.input).toEqual({
            inputFileName: './src/tests/mock_data/logwith1error.log',
            logType: undefined,
            outputFileName: 'error.json'
        });
    });
});
