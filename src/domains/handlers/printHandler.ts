import { AbstractHandler } from '../handler';
import { writeFile } from 'fs';
import { FailedToPrintFile } from '../../exeptions';
import { Logger } from '../../logger/logger';

export class PrintHandler extends AbstractHandler {
  outputFileName: string;

  constructor(outputfileName: string, logger: Logger) {
    super(logger);
    this.outputFileName = outputfileName;
  }
  handle = (request: string): void => {
    writeFile(this.outputFileName, request, (error) => {
      if (error) {
        throw new FailedToPrintFile(PrintHandler.name, error.message);
      }
    });

    this.logger.info('successfully added the result !!!!');
  };
}
