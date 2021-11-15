export abstract class BaseError extends Error {
  type: string;
  date: Date;
  constructor(type: string, message?: string) {
    super(message);
    this.type = type;
    this.date = new Date();
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}
export class InvalidFileFormat extends BaseError {
  constructor(type: string, message: string) {
    super(type, message);
  }
}

export class FailedToPrintFile extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}

export class InvalidLogType extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}

export class InvalidInput extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}
