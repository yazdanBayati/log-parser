import { AbstractHandler } from '../../handler';
import { Logger } from '../../../logger/logger';
import { NullRefreanceError } from '../../../exeptions';
import { ParseLogRequest } from '../../../types';

export class MockOutputHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  handle = (request: ParseLogRequest): string => {
    if (request.jsonFormatLog) {
      return request.jsonFormatLog;
    } else {
      throw new NullRefreanceError(
        MockOutputHandler.name,
        'request can not be null'
      );
    }
  };
}
