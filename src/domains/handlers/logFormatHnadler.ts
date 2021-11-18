import { AbstractHandler } from '../handler';
const lineByLine = require('n-readlines');
import { InvalidFileFormatError, NullRefreanceError } from '../../exeptions';
import { BasicLogModel, ParseLogRequest } from '../../types';
import { Logger } from '../../logger/logger';

export class LogFormatHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  public handle = (request: ParseLogRequest): string => {
    if (request.input) {
      const liner = new lineByLine(request.input.inputFileName);
      let line;
      const logs: BasicLogModel[] = [];

      let lineNumber = 1;
      while ((line = liner.next())) {
        const log: BasicLogModel | undefined = this.ConvertToLogModel(
          line,
          lineNumber
        );
        if (log) {
          logs.push(log);
        }
      }

      request.basicFormatLog = logs;
      return super.handle(request);
    } else {
      throw new NullRefreanceError(
        LogFormatHandler.name,
        'input can not be null'
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
      return undefined;
    }
  }
}
