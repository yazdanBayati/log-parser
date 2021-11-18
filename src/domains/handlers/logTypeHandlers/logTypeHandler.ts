import { NullRefreanceError } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { ParseLogRequest } from '../../../types';
import { AbstractHandler } from '../../handler';
import { JsonLogGeneratorFactory } from './jsonlogGeneratorFactory';
import { JsonLogGenerator } from './jsonLogGenerators/josnLogGenerator';

export class LogTypeHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  public handle = (request: ParseLogRequest): string => {
    if (request.basicFormatLog && request.input) {
      const jsonLogFactory = new JsonLogGeneratorFactory(this.logger);
      const jsonLogGenerator: JsonLogGenerator = jsonLogFactory.run(
        request.input?.logType
      );
      const jsonLogs = jsonLogGenerator.run(request?.basicFormatLog);
      request.jsonFormatLog = jsonLogs;
      return super.handle(request);
    } else {
      throw new NullRefreanceError(
        LogTypeHandler.name,
        'basiclogModel && iput shoud have value'
      );
    }
  };
}
