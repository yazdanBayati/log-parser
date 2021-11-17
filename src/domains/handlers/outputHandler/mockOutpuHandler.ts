import { AbstractHandler } from '../../handler';
import { Logger } from '../../../logger/logger';
import { OutputHandlerRequest } from '../../../types';
import { NullHandlerRequestError } from '../../../exeptions';

export class MockOutputHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  handle = (request?: OutputHandlerRequest): string => {
    if (request) {
      return request.jsonLogs;
    } else {
      throw new NullHandlerRequestError(
        MockOutputHandler.name,
        'request can not be null'
      );
    }
  };
}
