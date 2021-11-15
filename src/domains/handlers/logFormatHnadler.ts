import { AbstractHandler } from '../handler';
import lineByLine = require('n-readlines');
import { InvalidFileFormat } from '../../exeptions';
import { BasicLogModel } from '../../types';
import { Logger } from '../../logger/logger';

export class LogFormatHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
  public handle = (request: string) => {
    const liner = new lineByLine(request);
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

    super.handle(JSON.stringify(logs));
  };

  private ConvertToLogModel(line: Buffer, lineNumber: number) {
    const lineStr = line.toString();
    try {
      const items = lineStr.split(' - ');
      if (items.length != 3) {
        throw new InvalidFileFormat(
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
      this.logger.info(`skipped line : ${lineNumber}`);
      return null;
    }
  }
}
