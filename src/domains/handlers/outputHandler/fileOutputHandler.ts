import { writeFile } from 'fs';
import { FailedToPrintFileError, NullRefreanceError } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { ParseLogRequest } from '../../../types';
import { OutputHandler } from './outputHandler';

export class FileOutputHandler extends OutputHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  handle = (request: ParseLogRequest): string => {
    if (request.input && request.jsonFormatLog) {
      writeFile(
        request.input.outputFileName,
        request.jsonFormatLog,
        (error) => {
          if (error) {
            throw new FailedToPrintFileError(
              FileOutputHandler.name,
              error.message
            );
          }
        }
      );

      this.logger.info('successfully added the result');

      return request.jsonFormatLog;
    } else {
      throw new NullRefreanceError(
        FileOutputHandler.name,
        'input && jsonFormatLog should have value'
      );
    }
  };
}
