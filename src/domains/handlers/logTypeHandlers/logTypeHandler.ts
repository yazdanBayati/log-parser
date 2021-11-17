import { NullHandlerRequestError } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import {
  LogTypeHnadlerRequest,
  OutputHandlerRequest as OutputHandlerRequest,
} from '../../../types';
import { AbstractHandler } from '../../handler';
import { JsonLogGeneratorFactory } from './jsonlogGeneratorFactory';
import { JsonLogGenerator } from './jsonLogGenerators/josnLogGenerator';

export class LogTypeHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  public handle = (request?: LogTypeHnadlerRequest): string => {
    if (request) {
      const jsonLogFactory = new JsonLogGeneratorFactory(this.logger);
      const jsonLogGenerator: JsonLogGenerator = jsonLogFactory.run(
        request?.logType
      );
      const jsonLogs = jsonLogGenerator.run(request?.logs);
      const res: OutputHandlerRequest = {
        jsonLogs: jsonLogs,
        outputFileName: request.outputFileName,
      };
      return super.handle(res);
    } else {
      throw new NullHandlerRequestError(
        LogTypeHandler.name,
        'request can not be null'
      );
    }
  };
}
