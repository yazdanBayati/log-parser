export interface ParseLogRequest {
  input?: inputModel;
  basicFormatLog?: BasicLogModel[];
  jsonFormatLog?: string;
}

export interface inputModel {
  inputFileName: string;
  outputFileName: string;
  logType?: string;
}
export interface BasicLogModel {
  logLevel: string;
  timeStamp: Date;
  details: string;
}

export interface JsonLogModel {
  logLevel: string;
  timeStamp: number;
  transactionId: string;
}
export interface JsonErrorLogModel extends JsonLogModel {
  err: string;
}

export interface LogDetails {
  transactionId: string;
  details: string;
  userId: number;
  err?: string;
}
