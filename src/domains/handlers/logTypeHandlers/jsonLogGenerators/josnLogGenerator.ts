import { Logger } from '../../../../logger/logger';
import { BasicLogModel } from '../../../../types';

export abstract class JsonLogGenerator {
  protected logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  abstract run: (basicLogModels: BasicLogModel[]) => string;
  protected printError = (e: any, lineNumber: number) => {
    this.logger.error(e);
    this.logger.info(`skipped line : ${lineNumber + 1} ===========`);
  };
}
