import { Logger } from '../logger/logger';

export interface Handler {
  setNext: (handler: Handler) => Handler;
  handle: (request: string) => void;
}

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler = {} as Handler;
  protected logger: Logger;

  /**
   *
   */
  constructor(logger: Logger) {
    this.logger = logger;
  }

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): void {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
  }
}
