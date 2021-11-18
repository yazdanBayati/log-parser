import { MockInputHandler } from '../../domains/handlers/inputHandler/mockInputHandler';
import { LogFormatHandler } from '../../domains/handlers/logFormatHnadler';
import { LogType } from '../../enums';
import { Logger } from '../../logger/logger';
import { TestLogger } from '../../logger/testLogger';
import { BasicLogModel, ParseLogRequest } from '../../types';

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
    const inputHander = new MockInputHandler(
      './src/tests/mock_data/logwith1error.log',
      'error.json',
      undefined,
      logger
    );
    inputHander.setNext(logFormatHandler);
    const request: ParseLogRequest = {};
    inputHander.handle(request);
    const errorLogs: BasicLogModel[] = request.basicFormatLog
      ? request.basicFormatLog?.filter((x) => x.logLevel === LogType.Error)
      : [];
    expect(request.basicFormatLog?.length).toBe(12);
    expect(errorLogs.length).toBe(1);
  });
  it('should return basicLogModel array with 11 records', () => {
    const inputHander = new MockInputHandler(
      './src/tests/mock_data/logwithouterror.log',
      'error.json',
      undefined,
      logger
    );
    inputHander.setNext(logFormatHandler);
    const request: ParseLogRequest = {};
    inputHander.handle(request);
    const errorLogs: BasicLogModel[] = request.basicFormatLog
      ? request.basicFormatLog?.filter((x) => x.logLevel === LogType.Error)
      : [];
    expect(request.basicFormatLog?.length).toBe(11);
    expect(errorLogs.length).toBe(0);
  });
});
