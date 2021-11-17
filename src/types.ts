import { LogType } from './enums';

export interface BasicLogModel {
  logLevel: string;
  timeStamp: Date;
  details: string;
}

export interface ErrorLogModel {
  logLevel: string;
  timeStamp: number;
  err: string;
  transactionId: string;
}

export interface LogDetails {
  transactionId: string;
  details: string;
  userId: number;
  err?: string;
}

export interface ErrorLogDetails extends LogDetails {
  err?: string;
}

export interface HandlerRequest {
  outputFileName: string;
}

export interface LogHandlerRequest extends HandlerRequest {
  logType?: string;
}

export interface LogFormatHandlerRequest extends LogHandlerRequest {
  inputFileName: string;
}

export interface LogTypeHnadlerRequest extends LogHandlerRequest {
  logs: BasicLogModel[];
}

export interface OutputHandlerRequest extends HandlerRequest {
  jsonLogs: string;
}
