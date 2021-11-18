import { CommandLineInputHandler } from '../domains/handlers/inputHandler/commandLineInputHandler';
import { InputHandler } from '../domains/handlers/inputHandler/inputHandler';
import { FileOutputHandler } from '../domains/handlers/outputHandler/fileOutputHandler';
import { OutputHandler } from '../domains/handlers/outputHandler/outputHandler';
import { Logger } from '../logger/logger';
import { EnvManager } from './evnManager';

export class CommandLineEnvManager extends EnvManager {
  constructor(logger: Logger) {
    super(logger);
  }
  buildInputHandler = (): InputHandler => {
    return new CommandLineInputHandler(this.logger);
  };
  buildOutpuHandler = (): OutputHandler => {
    return new FileOutputHandler(this.logger);
  };

  exit = (): void => {
    process.exit(1);
  };
}
