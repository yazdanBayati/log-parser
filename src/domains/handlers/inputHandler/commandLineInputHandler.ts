import { InvalidInputError } from '../../../exeptions';
import { Logger } from '../../../logger/logger';
import { ParseLogRequest } from '../../../types';
import { InputHandler } from './inputHandler';

export class CommandLineInputHandler extends InputHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  public handle = (request: ParseLogRequest): string => {
    if (process.argv.length < 4) {
      throw new InvalidInputError(
        CommandLineInputHandler.name,
        'Usage: node ' + process.argv[1] + ' wrong input'
      );
    }

    request.input = {
      inputFileName: process.argv[2],
      outputFileName: process.argv[3],
      logType: process.argv.length >= 5 ? process.argv[4] : '',
    };

    return super.handle(request);
  };
}
