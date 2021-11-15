import { LogType } from '../../../enums';
import { InvalidLogType } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { logErrorHandler } from './logErrorHandler';
import { LogTypeHandler } from './logTypeHandler';

export class LogTypeHandlerFactory {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  run = (formatType?: string) => {
    let result: LogTypeHandler;
    if (formatType) {
      switch (process.argv[4]) {
        case LogType.Error:
          result = new logErrorHandler(this.logger);
        case LogType.Debug:
          throw new InvalidLogType(
            LogTypeHandlerFactory.name,
            'Debug log Type is not supported '
          );
        case LogType.Info:
          throw new InvalidLogType(
            LogTypeHandlerFactory.name,
            'Info log Type is not supported '
          );
        case LogType.Warn:
          throw new InvalidLogType(
            LogTypeHandlerFactory.name,
            'Warn log Type is not supported '
          );
        case LogType.Debug:
          return new logErrorHandler(this.logger);
        default:
          throw new InvalidLogType(
            LogTypeHandlerFactory.name,
            'Invalid Log Type'
          );
      }
    } else {
      result = new logErrorHandler(this.logger);
    }

    return result;
  };
}
