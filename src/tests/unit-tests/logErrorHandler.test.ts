import { LogFormatHandler } from '../../domains/handlers/logFormatHnadler';
import { LogTypeHandler } from '../../domains/handlers/logTypeHandlers/logTypeHandler';
import { LogType } from '../../enums';
import { Logger } from '../../logger/logger';
import { SimpleLogger } from '../../logger/simpleLogger';
import { TestLogger } from '../../logger/testLogger';
import { ErrorLogModel } from '../../types';

let logger: Logger;
let logErrorHandler: LogTypeHandler;
let logFormatHandler: LogFormatHandler;
beforeEach(() => {
  logger = new TestLogger();
  logErrorHandler = new LogTypeHandler(logger);
  logFormatHandler = new LogFormatHandler(logger);
  logFormatHandler.setNext(logErrorHandler);
});

describe('logError', () => {
  it('should have LogErrorHandler', () => {
    expect(typeof LogTypeHandler).toBe('function');
  });

  it('should reutrn 1 error log', () => {
    const res = logFormatHandler.handle(
      './src/tests/unit-tests/mock_data/logwith1error.log'
    );
    const errors: ErrorLogModel[] = JSON.parse(res);
    expect(errors.length).toBe(1);
    const error = errors[0];
    expect(error.logLevel).toBe(LogType.Error);
    expect(error.timeStamp).toBe(
      new Date('2021-08-09T02:12:51.259Z').getTime()
    );
    expect(error.transactionId).toBe('9abc55b2-807b-4361-9dbe-aa88b1b2e978');
    expect(error.err).toBe('Not found');
  });
  it('shoud return 0 error log', () => {
    const res = logFormatHandler.handle(
      './src/tests/unit-tests/mock_data/wrongformatlog.log'
    );
    const errors: ErrorLogModel[] = JSON.parse(res);
    expect(errors.length).toBe(0);
  });
});
