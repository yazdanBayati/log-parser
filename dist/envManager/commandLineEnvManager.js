"use strict";
exports.__esModule = true;
exports.CommandLineEnvManager = void 0;
var CommandLineEnvManager = /** @class */ (function () {
    function CommandLineEnvManager() {
        this.getInputs = function () {
            // if (process.argv.length < 4) {
            //   throw new InvalidInput(
            //     CommandLineEnvManager.name,
            //     'Usage: node ' + process.argv[1] + ' wrong input'
            //   );
            // }
            var result = {
                inputFileName: process.argv[2],
                outputFileName: process.argv[3],
                logType: process.argv.length >= 5 ? process.argv[4] : ''
            };
            return result;
        };
        this.exit = function () {
            process.exit(1);
        };
    }
    return CommandLineEnvManager;
}());
exports.CommandLineEnvManager = CommandLineEnvManager;
