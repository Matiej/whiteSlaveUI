import { Injectable } from '@angular/core';
import { DataError } from './../model/dataError';
import {

    HttpEvent,

    HttpInterceptor,

    HttpHandler,

    HttpRequest,

    HttpResponse,

    HttpErrorResponse

} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError, map } from 'rxjs/operators';
import { ErrorDialogService } from '../service/errordialog.service';

@Injectable()
export class HttpErrorExceptionInterceptor implements HttpInterceptor {

    constructor(private errorService: ErrorDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            retry(2),
            catchError((error: HttpErrorResponse) => {
                let data: DataError;
                data = {
                    message: error && error.error && error.error.message ? error.error.message : 'Unknown error', 
                    reason: error && error.error && error.error.details ? error.error.details : 'Unknown error',
                    status: error.status.toString()
                };
                this.errorService.openDialog(data);
                return throwError(error);
            }));
    }

    //     return next.handle(request)
    //         .pipe(

    //             retry(3),

    //             catchError((error: HttpErrorResponse) => {
    //                 console.log('asdsadsadsadas EROOROR');
    //                 console.log(error);
    //                 console.log(error.message);
    //                 console.log(error.status);
    //                 console.log(error.name);
    //                 console.log(error.statusText);
    //                 console.log(error.url);
    //                 console.log(error.type);
    //                 console.log(error.error)

    //                 let errorMessage = "";

    //                 if (error.error instanceof ErrorEvent) {
    //                     errorMessage = `Error ${error.error.message}`
    //                 } else {
    //                     errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    //                 }
    //                 window.alert(errorMessage);
    //                 return throwError(errorMessage);
    //             })
    //         );


}