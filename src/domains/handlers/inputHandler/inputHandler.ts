import { Logger } from '../../../logger/logger';
import { AbstractHandler } from '../../handler';

export abstract class InputHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
}
