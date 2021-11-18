import { BaseError } from '../exeptions';
import { Logger } from './logger';

export class TestLogger implements Logger {
  error = (error: BaseError): void => {
    console.error(error.message);
  };
  info = (message: string): void => {};
}
