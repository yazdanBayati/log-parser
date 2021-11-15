import { Handler } from './domains/handler';
import { LogFormatHandler } from './domains/handlers/logFormatHnadler';
import { logErrorHandler } from './domains/handlers/logTypeHandlers/logErrorHandler';
import { LogTypeHandler } from './domains/handlers/logTypeHandlers/logTypeHandler';
import { LogTypeHandlerFactory } from './domains/handlers/logTypeHandlers/logTypeHandlerFactory';
import { PrintHandler } from './domains/handlers/printHandler';
import { LogType } from './enums';
import { InvalidInput, InvalidLogType } from './exeptions';
import { Logger } from './logger/logger';
import { SimpleLogger } from './logger/simpleLogger';

export default class Parser {
  private logger: Logger;
  /**
   *
   */
  constructor() {
    this.logger = new SimpleLogger();
  }
  pars() {
    console.log(process.argv);
    try {
      if (process.argv.length < 4) {
        throw new InvalidInput(
          Parser.name,
          'Usage: node ' + process.argv[1] + ' wrong input'
        );
      }
      const inputFileName = process.argv[2];

      const handler = this.buildChain();
      handler.handle(inputFileName);
    } catch (e: any) {
      this.logger.error(e);
      process.exit(1);
    }
  }

  private buildChain(): Handler {
    const outpuFileName = process.argv[3];
    const logFormatHander = new LogFormatHandler(this.logger);
    const printHandler = new PrintHandler(outpuFileName, this.logger);
    const logTypeInput = process.argv.length >= 5 ? process.argv[4] : '';
    const logTypeHandlerFactory = new LogTypeHandlerFactory(this.logger);
    const logTypeHandler = logTypeHandlerFactory.run(logTypeInput);
    logFormatHander.setNext(logTypeHandler).setNext(printHandler);

    return logFormatHander;
  }
}

new Parser().pars();
