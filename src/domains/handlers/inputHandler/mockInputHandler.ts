import { Logger } from '../../../logger/logger';
import { LogFormatHandlerRequest } from '../../../types';
import { InputHandler } from './inputHandler';

export class MockInputHandler extends InputHandler {
  private inputFileName: string;
  private outputFileName: string;
  private logType: string | undefined;

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

  public handle = (): string => {
    const res: LogFormatHandlerRequest = {
      inputFileName: this.inputFileName,
      outputFileName: this.outputFileName,
      logType: this.logType,
    };

    return super.handle(res);
  };
}
