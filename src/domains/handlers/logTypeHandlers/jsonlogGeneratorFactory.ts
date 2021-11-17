import { LogType } from '../../../enums';
import { InvalidLogTypeError } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { JsonLogGenerator } from './jsonLogGenerators/josnLogGenerator';
import { JsonErrorLogGenerator } from './jsonLogGenerators/jsonErrorLogGenerator';

export class JsonLogGeneratorFactory {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  run = (logType?: string): JsonLogGenerator => {
    let result: JsonLogGenerator;
    if (logType) {
      switch (logType) {
        case LogType.Error:
          result = new JsonErrorLogGenerator(this.logger);
        case LogType.Debug:
          throw new InvalidLogTypeError(
            JsonLogGeneratorFactory.name,
            'Debug log Type is not supported '
          );
        case LogType.Info:
          throw new InvalidLogTypeError(
            JsonLogGeneratorFactory.name,
            'Info log Type is not supported '
          );
        case LogType.Warn:
          throw new InvalidLogTypeError(
            JsonLogGeneratorFactory.name,
            'Warn log Type is not supported '
          );
        default:
          throw new InvalidLogTypeError(
            JsonLogGeneratorFactory.name,
            'Invalid Log Type'
          );
      }
    } else {
      result = new JsonErrorLogGenerator(this.logger);
    }

    return result;
  };
}
