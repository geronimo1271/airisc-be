interface IErrorObject {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data: any;
}

export interface IError {
  error: IErrorObject;
}
