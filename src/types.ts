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
