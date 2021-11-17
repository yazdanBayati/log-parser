import { InputHandler } from '../domains/handlers/inputHandler/inputHandler';
import { OutputHandler } from '../domains/handlers/outputHandler/outputHandler';
import { Logger } from '../logger/logger';

export abstract class EnvManager {
  protected logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  abstract buildInputHandler: () => InputHandler;
  abstract buildOutpuHandler: () => OutputHandler;
  abstract exit: () => void;
}
