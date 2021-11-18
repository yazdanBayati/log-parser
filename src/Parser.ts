import { Handler } from './domains/handler';
import { LogFormatHandler } from './domains/handlers/logFormatHnadler';
import { JsonLogGeneratorFactory } from './domains/handlers/logTypeHandlers/jsonlogGeneratorFactory';
import { LogTypeHandler } from './domains/handlers/logTypeHandlers/logTypeHandler';
import { CommandLineEnvManager } from './envManager/commandLineEnvManager';
import { EnvManager } from './envManager/evnManager';
import { Logger } from './logger/logger';
import { SimpleLogger } from './logger/simpleLogger';
import { ParseLogRequest } from './types';

export default class Parser {
  private logger: Logger;
  private envManager: EnvManager;
  constructor(logger: Logger, envManager: EnvManager) {
    this.logger = logger;
    this.envManager = envManager;
  }
  pars(): string {
    try {
      const handler = this.buildChain();
      const res = handler.handle({} as ParseLogRequest);
      this.logger.info(res);
      return res;
    } catch (e: any) {
      this.logger.error(e);
      process.exit(1);
    }
  }

  private buildChain(): Handler {
    const inputHandler = this.envManager.buildInputHandler();
    const logFormatHander = new LogFormatHandler(this.logger);
    const logTypeHandler = new LogTypeHandler(this.logger);
    const outputHandler = this.envManager.buildOutpuHandler();
    inputHandler
      .setNext(logFormatHander)
      .setNext(logTypeHandler)
      .setNext(outputHandler);
    return inputHandler;
  }
}

new Parser(
  new SimpleLogger(),
  new CommandLineEnvManager(new SimpleLogger())
).pars(); // dev mode
