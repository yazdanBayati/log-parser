"use strict";
exports.__esModule = true;
var logFormatHnadler_1 = require("./domains/handlers/logFormatHnadler");
var logTypeHandler_1 = require("./domains/handlers/logTypeHandlers/logTypeHandler");
var commandLineEnvManager_1 = require("./envManager/commandLineEnvManager");
var simpleLogger_1 = require("./logger/simpleLogger");
var Parser = /** @class */ (function () {
    function Parser(logger, envManager) {
        this.logger = logger;
        this.envManager = envManager;
    }
    Parser.prototype.pars = function () {
        try {
            var handler = this.buildChain();
            var res = handler.handle({});
            this.logger.info(res);
            return res;
        }
        catch (e) {
            this.logger.error(e);
            process.exit(1);
        }
    };
    Parser.prototype.buildChain = function () {
        var inputHandler = this.envManager.buildInputHandler();
        var logFormatHander = new logFormatHnadler_1.LogFormatHandler(this.logger);
        var logTypeHandler = new logTypeHandler_1.LogTypeHandler(this.logger);
        var outputHandler = this.envManager.buildOutpuHandler();
        inputHandler
            .setNext(logFormatHander)
            .setNext(logTypeHandler)
            .setNext(outputHandler);
        return inputHandler;
    };
    return Parser;
}());
exports["default"] = Parser;
new Parser(new simpleLogger_1.SimpleLogger(), new commandLineEnvManager_1.CommandLineEnvManager(new simpleLogger_1.SimpleLogger())).pars(); // dev mode
