import { InputHandler } from '../domains/handlers/inputHandler/inputHandler';
import { MockInputHandler } from '../domains/handlers/inputHandler/mockInputHandler';
import { MockOutputHandler } from '../domains/handlers/outputHandler/mockOutpuHandler';
import { OutputHandler } from '../domains/handlers/outputHandler/outputHandler';
import { Logger } from '../logger/logger';
import { EnvManager } from './evnManager';

export class TestEnvManager extends EnvManager {
  private inputFileName: string;
  private outputFileName: string;
  private logType?: string;
  constructor(
    inputFileName: string,
    outputFileName: string,
    logType: string | undefined,
    logger: Logger
  ) {
    super(logger);
    this.inputFileName = inputFileName;
    this.outputFileName = outputFileName;
    this.logType = logType;
  }
  buildInputHandler = (): InputHandler => {
    return new MockInputHandler(
      this.inputFileName,
      this.outputFileName,
      this.logType,
      this.logger
    );
  };
  buildOutpuHandler = (): OutputHandler => {
    return new MockOutputHandler(this.logger);
  };
  exit = (): void => {};
}
