import { BasicLogModel, LogDetails } from '../../../types';
import { AbstractHandler } from '../../handler';

export abstract class LogTypeHandler extends AbstractHandler {
  protected parseToBasicLogModel = (logs: string): BasicLogModel[] => {
    return JSON.parse(logs);
  };
  protected parseToLogDetails = (details: string): LogDetails => {
    return JSON.parse(details);
  };
}
