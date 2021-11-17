import { BaseError } from '../exeptions';
import { Logger } from './logger';

export class TestLogger implements Logger {
  error = (error: BaseError): void => {};
  info = (message: string): void => {};
}
