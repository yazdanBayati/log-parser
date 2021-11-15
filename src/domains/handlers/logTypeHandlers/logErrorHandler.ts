import { LogType } from '../../../enums';
import { InvalidFileFormat } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { BasicLogModel, ErrorLogModel, LogDetails } from '../../../types';
import { LogTypeHandler } from './logTypeHandler';

export class logErrorHandler extends LogTypeHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  public handle = (request: string) => {
    const logs = this.parseToBasicLogModel(request);
    const errors: ErrorLogModel[] = [];
    logs.forEach((log, index) => {
      const errorLogModel = this.convertToErrorLogModel(log, index);
      if (errorLogModel) {
        errors.push(errorLogModel);
      }
    });
    super.handle(JSON.stringify(errors));
  };

  private convertToErrorLogModel = (log: BasicLogModel, lineNumber: number) => {
    console.log(`line number ${lineNumber}`);
    if (log.logLevel === LogType.Error) {
      try {
        const logDetails = this.parseToLogDetails(log.details);

        if (!log.timeStamp) {
          throw new InvalidFileFormat(
            logErrorHandler.name,
            ' timeStamp is invalid'
          );
        }
        if (!logDetails.err) {
          throw new InvalidFileFormat(
            logErrorHandler.name,
            'error section is missing'
          );
        }

        const error: ErrorLogModel = {
          timeStamp: new Date(log.timeStamp).getTime(),
          logLevel: LogType.Error,
          transactionId: logDetails.transactionId,
          err: logDetails.err,
        };
        return error;
      } catch (e: any) {
        this.printError(e, lineNumber);
        return null;
      }
    }
  };

  private printError = (e: any, lineNumber: number) => {
    this.logger.error(e);
    this.logger.info(`skipped line : ${lineNumber + 1}`);
  };
}
