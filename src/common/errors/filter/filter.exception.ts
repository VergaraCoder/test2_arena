import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class errorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse();

    const ifExist = exception.message.split(' :: ');
    const ifExist2 = exception.response;
    let message;
    let status;

    if (ifExist2 && ifExist2.message) {
      message = ifExist2 ? ifExist2 : ifExist2.message;
      status = ifExist2.statusCode ? ifExist2.statusCode : 400;
    } else if (ifExist && ifExist.length == 2) {
      message = ifExist[0];
      status = HttpStatus[ifExist[1]];
    } else {
      message = 'INTERNAL SERVER ERROR';
      status = 500;
    }

    response.status(status).json({
      status: status,
      timeStamp: new Date(),
      method: request.method,
      path: request.url,
      message: message,
    });
  }
}
