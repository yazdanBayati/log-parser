import { MockInputHandler } from '../../domains/handlers/inputHandler/mockInputHandler';
import { LogFormatHandler } from '../../domains/handlers/logFormatHnadler';
import { LogTypeHandler } from '../../domains/handlers/logTypeHandlers/logTypeHandler';
import { LogType } from '../../enums';
import { Logger } from '../../logger/logger';
import { TestLogger } from '../../logger/testLogger';
import { JsonErrorLogModel, ParseLogRequest } from '../../types';

let logger: Logger;
let logErrorHandler: LogTypeHandler;
let logFormatHandler: LogFormatHandler;
beforeEach(() => {
  logger = new TestLogger();
  logErrorHandler = new LogTypeHandler(logger);
  logFormatHandler = new LogFormatHandler(logger);
});

describe('logTypeHanler', () => {
  it('should have logTypeHandler', () => {
    expect(typeof LogTypeHandler).toBe('function');
  });

  it('should reutrn 1 error log', () => {
    const inputHander = new MockInputHandler(
      './src/tests/mock_data/logwith1error.log',
      'error.json',
      undefined,
      logger
    );

    inputHander.setNext(logFormatHandler).setNext(logErrorHandler);
    const request: ParseLogRequest = {};
    inputHander.handle(request);
    //expect(request.jsonFormatLog).toEqual(expect.any(Function));
    const errors: JsonErrorLogModel[] = request.jsonFormatLog
      ? JSON.parse(request?.jsonFormatLog)
      : [];
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
    const inputHander = new MockInputHandler(
      './src/tests/mock_data/wrongformatlog.log',
      'error.json',
      undefined,
      logger
    );

    inputHander.setNext(logFormatHandler).setNext(logErrorHandler);
    const request: ParseLogRequest = {};
    inputHander.handle(request);
    //expect(request.jsonFormatLog).toEqual(expect.any(Function));
    const errors: JsonErrorLogModel[] = request.jsonFormatLog
      ? JSON.parse(request?.jsonFormatLog)
      : [];
    expect(errors.length).toBe(0);
  });
  it('should reutrn input', () => {
    const inputHander = new MockInputHandler(
      './src/tests/mock_data/logwith1error.log',
      'error.json',
      undefined,
      logger
    );
    const request: ParseLogRequest = {};
    inputHander.handle(request);
    expect(request.input).toEqual({
      inputFileName: './src/tests/mock_data/logwith1error.log',
      logType: undefined,
      outputFileName: 'error.json',
    });
  });
});
