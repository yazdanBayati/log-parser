import { AbstractHandler } from '../../handler';
import { Logger } from '../../../logger/logger';

export abstract class OutputHandler extends AbstractHandler {
  constructor(logger: Logger) {
    super(logger);
  }
}
