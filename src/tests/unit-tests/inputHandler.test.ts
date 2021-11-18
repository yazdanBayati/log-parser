import { InputHandler } from '../../domains/handlers/inputHandler/inputHandler';
import { MockInputHandler } from '../../domains/handlers/inputHandler/mockInputHandler';
import { Logger } from '../../logger/logger';
import { TestLogger } from '../../logger/testLogger';
import { ParseLogRequest } from '../../types';

let logger: Logger;

beforeEach(() => {
  logger = new TestLogger();
});

describe('input handler', () => {
  it('should have InputHandler', () => {
    expect(typeof InputHandler).toBe('function');
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
