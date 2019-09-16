import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SnackBarService } from '../Snack-Bar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private snackbar: SnackBarService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Intercept Request: ', request);
    //  const token: string = sessionStorage.getItem('token');

    // if (userInfo) {
    //   userId = userInfo.providerContact.id;
    // }
    // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer') });
    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
    // request = request.clone({ headers: request.headers.set('userId', userId) });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event['status']) {
        }
        return event;
      }),
      catchError((error: any) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          this.snackbar.error(errorMessage);
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          this.snackbar.error(errorMessage);
        }
        // window.alert(errorMessage);

        return throwError(errorMessage);
      })
    );
  }
}
