"use strict";
exports.__esModule = true;
var logFormatHnadler_1 = require("./domains/handlers/logFormatHnadler");
var logTypeHandlerFactory_1 = require("./domains/handlers/logTypeHandlers/logTypeHandlerFactory");
var printHandler_1 = require("./domains/handlers/printHandler");
var exeptions_1 = require("./exeptions");
var simpleLogger_1 = require("./logger/simpleLogger");
var Parser = /** @class */ (function () {
    /**
     *
     */
    function Parser() {
        this.logger = new simpleLogger_1.SimpleLogger();
    }
    Parser.prototype.pars = function () {
        console.log(process.argv);
        try {
            if (process.argv.length < 4) {
                throw new exeptions_1.InvalidInput(Parser.name, 'Usage: node ' + process.argv[1] + ' wrong input');
            }
            var inputFileName = process.argv[2];
            var handler = this.buildChain();
            handler.handle(inputFileName);
        }
        catch (e) {
            this.logger.error(e);
            process.exit(1);
        }
    };
    Parser.prototype.buildChain = function () {
        var outpuFileName = process.argv[3];
        var logFormatHander = new logFormatHnadler_1.LogFormatHandler(this.logger);
        var printHandler = new printHandler_1.PrintHandler(outpuFileName, this.logger);
        var logTypeInput = process.argv.length >= 5 ? process.argv[4] : '';
        var logTypeHandlerFactory = new logTypeHandlerFactory_1.LogTypeHandlerFactory(this.logger);
        var logTypeHandler = logTypeHandlerFactory.run(logTypeInput);
        logFormatHander.setNext(logTypeHandler).setNext(printHandler);
        return logFormatHander;
    };
    return Parser;
}());
exports["default"] = Parser;
new Parser().pars();
