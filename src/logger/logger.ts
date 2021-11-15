import { BaseError } from '../exeptions';

export interface Logger {
  error: (error: BaseError) => void;
  info: (message: string) => void;
}
