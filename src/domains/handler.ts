import { Logger } from '../logger/logger';
import { ParseLogRequest } from '../types';

export interface Handler {
  setNext: (handler: Handler) => Handler;
  handle: (request: ParseLogRequest) => string;
}

export abstract class AbstractHandler implements Handler {
  private nextHandler?: Handler;
  protected logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: ParseLogRequest): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    } else {
      return '';
    }
  }
}
