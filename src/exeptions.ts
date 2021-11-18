export abstract class BaseError extends Error {
  type: string;
  date: Date;
  constructor(type: string, message?: string) {
    super(message);
    this.type = type;
    this.date = new Date();
  }
}
export class InvalidFileFormatError extends BaseError {
  constructor(type: string, message: string) {
    super(type, message);
  }
}

export class FailedToPrintFileError extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}

export class InvalidLogTypeError extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}

export class InvalidInputError extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}

export class NullRefreanceError extends BaseError {
  constructor(type: string, message?: string) {
    super(type, message);
  }
}
