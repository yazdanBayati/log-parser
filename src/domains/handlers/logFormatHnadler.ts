import { AbstractHandler } from '../handler';
const lineByLine = require('n-readlines');
import {
  InvalidFileFormatError,
  NullHandlerRequestError,
} from '../../exeptions';
import {
  BasicLogModel,
  LogFormatHandlerRequest,
  LogTypeHnadlerRequest,
} from '../../types';
import { Logger } from '../../logger/logger';

export class LogFormatHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  public handle = (request?: LogFormatHandlerRequest): string => {
    if (request) {
      const liner = new lineByLine(request?.inputFileName);
      let line;
      const logs: BasicLogModel[] = [];

      let lineNumber = 1;
      while ((line = liner.next())) {
        const log: BasicLogModel | null = this.ConvertToLogModel(
          line,
          lineNumber
        );
        if (log) {
          logs.push(log);
        }
      }

      const res: LogTypeHnadlerRequest = {
        logs: logs,
        outputFileName: request?.outputFileName,
        logType: request?.logType,
      };

      return super.handle(res);
    } else {
      throw new NullHandlerRequestError(
        LogFormatHandler.name,
        'request can not be null'
      );
    }
  };

  private ConvertToLogModel(line: Buffer, lineNumber: number) {
    const lineStr = line.toString();
    try {
      const items = lineStr.split(' - ');
      if (items.length != 3) {
        throw new InvalidFileFormatError(
          LogFormatHandler.name,
          'invalid file format'
        );
      } else {
        const log: BasicLogModel = {
          timeStamp: new Date(items[0]),
          logLevel: items[1],
          details: items[2],
        };
        return log;
      }
    } catch (e: any) {
      this.logger.error(e);
      this.logger.info(`skipped line : ${lineNumber} ================`);
      return null;
    }
  }
}
