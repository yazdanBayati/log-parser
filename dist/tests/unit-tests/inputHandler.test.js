"use strict";
exports.__esModule = true;
var inputHandler_1 = require("../../domains/handlers/inputHandler/inputHandler");
var mockInputHandler_1 = require("../../domains/handlers/inputHandler/mockInputHandler");
var testLogger_1 = require("../../logger/testLogger");
var logger;
beforeEach(function () {
    logger = new testLogger_1.TestLogger();
});
describe('input handler', function () {
    it('should have InputHandler', function () {
        expect(typeof inputHandler_1.InputHandler).toBe('function');
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
