"use strict";
exports.__esModule = true;
var logFormatHnadler_1 = require("./domains/handlers/logFormatHnadler");
var logTypeHandlerFactory_1 = require("./domains/handlers/logTypeHandlers/logTypeHandlerFactory");
var filePrintHandler_1 = require("./domains/handlers/printHandler/filePrintHandler");
var commandLineEnvManager_1 = require("./envManager/commandLineEnvManager");
var simpleLogger_1 = require("./logger/simpleLogger");
var Parser = /** @class */ (function () {
    function Parser(logger, envManager, printHandelr) {
        this.logger = logger;
        this.envManager = envManager;
        this.printHandler = printHandelr;
    }
    Parser.prototype.pars = function () {
        try {
            var input = this.envManager.getInputs();
            input.inputFileName = './log/app.log';
            input.outputFileName = './errors.json';
            var handler = this.buildChain(input);
            var res = handler.handle(input.inputFileName);
            this.logger.info(res);
        }
        catch (e) {
            this.logger.error(e);
            process.exit(1);
        }
    };
    Parser.prototype.buildChain = function (input) {
        var logFormatHander = new logFormatHnadler_1.LogFormatHandler(this.logger);
        var printHandler = new filePrintHandler_1.FilePrintHandler(input.outputFileName, this.logger);
        var logTypeHandlerFactory = new logTypeHandlerFactory_1.LogTypeHandlerFactory(this.logger);
        var logTypeHandler = logTypeHandlerFactory.run(input.logType);
        logFormatHander.setNext(logTypeHandler).setNext(printHandler);
        return logFormatHander;
    };
    return Parser;
}());
exports["default"] = Parser;
new Parser(new simpleLogger_1.SimpleLogger(), new commandLineEnvManager_1.CommandLineEnvManager()).pars(); // dev mode
