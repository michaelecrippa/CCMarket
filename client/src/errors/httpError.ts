import { BaseError } from './baseError';

export class HttpError extends BaseError{
    constructor(public response: Response, public body: any ){
        super('HttpError', body?.message ||
         (typeof body === 'string' ? body : undefined) ||
          `Unexpected error occured`);
    }
}