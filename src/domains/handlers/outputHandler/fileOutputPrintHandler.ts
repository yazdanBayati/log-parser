import { AbstractHandler } from '../../handler';
import { writeFile } from 'fs';
import {
  FailedToPrintFileError,
  NullHandlerRequestError,
} from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { OutputHandlerRequest } from '../../../types';
import { OutputHandler } from './outputHandler';

export class FileOutputHandler extends OutputHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  handle = (request?: OutputHandlerRequest): string => {
    if (request) {
      writeFile(request?.outputFileName, request?.jsonLogs, (error) => {
        if (error) {
          throw new FailedToPrintFileError(
            FileOutputHandler.name,
            error.message
          );
        }
      });

      this.logger.info('successfully added the result');

      return request?.jsonLogs;
    } else {
      throw new NullHandlerRequestError(
        FileOutputHandler.name,
        'request can not be null'
      );
    }
  };
}
