import { LogFormatHandler } from '../../domains/handlers/logFormatHnadler';
import { LogType } from '../../enums';
import { Logger } from '../../logger/logger';
import { TestLogger } from '../../logger/testLogger';
import { BasicLogModel } from '../../types';

let logger: Logger;
let logFormatHandler: LogFormatHandler;
beforeEach(() => {
  logger = new TestLogger();
  logFormatHandler = new LogFormatHandler(logger);
});

describe('logForamt', () => {
  it('should have LogFormatHandler', () => {
    expect(typeof LogFormatHandler).toBe('function');
  });

  it('should reutrn basicLogModel array with 12 records', () => {
    const res = logFormatHandler.handle(
      './src/tests/mock_data/logwith1error.log'
    );
    const basicLogs: BasicLogModel[] = JSON.parse(res);
    const errorLogs: BasicLogModel[] = basicLogs.filter(
      (x) => x.logLevel === LogType.Error
    );
    expect(basicLogs.length).toBe(12);
    expect(errorLogs.length).toBe(1);
  });
  it('should return basicLogModel array with 11 records', () => {
    const res = logFormatHandler.handle(
      './src/tests/mock_data/logwithouterror.log'
    );
    const basicLogs: BasicLogModel[] = JSON.parse(res);
    const errorLogs: BasicLogModel[] = basicLogs.filter(
      (x) => x.logLevel === LogType.Error
    );
    expect(basicLogs.length).toBe(11);
    expect(errorLogs.length).toBe(0);
  });
});
