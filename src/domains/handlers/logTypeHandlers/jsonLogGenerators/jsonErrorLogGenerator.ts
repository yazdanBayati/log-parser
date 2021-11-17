import { LogType } from '../../../../enums';
import { InvalidFileFormatError } from '../../../../exeptions';
import { Logger } from '../../../../logger/logger';
import { BasicLogModel, ErrorLogModel, LogDetails } from '../../../../types';
import { JsonLogGenerator } from './josnLogGenerator';

export class JsonErrorLogGenerator extends JsonLogGenerator {
  constructor(logger: Logger) {
    super(logger);
  }
  run = (basicLogModels: BasicLogModel[]): string => {
    const errors: ErrorLogModel[] = [];
    basicLogModels.forEach((log, index) => {
      const errorLogModel = this.convertToErrorLogModel(log, index);
      if (errorLogModel) {
        errors.push(errorLogModel);
      }
    });

    return JSON.stringify(errors);
  };

  private convertToErrorLogModel = (log: BasicLogModel, lineNumber: number) => {
    if (log.logLevel === LogType.Error) {
      try {
        const logDetails: LogDetails = JSON.parse(log.details);

        if (!log.timeStamp) {
          throw new InvalidFileFormatError(
            JsonErrorLogGenerator.name,
            ' timeStamp is invalid'
          );
        }
        if (!logDetails.err) {
          throw new InvalidFileFormatError(
            JsonErrorLogGenerator.name,
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
}
