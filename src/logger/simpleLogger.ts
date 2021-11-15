import { BaseError } from '../exeptions';
import { Logger } from './logger';

export class SimpleLogger implements Logger {
  error = (error: BaseError): void => {
    console.error(error.name);
    console.error(error.type);
    console.error(error.message);
    console.error(error.stack);
  };
  info = (message: string): void => {
    console.log(message);
  };
}
