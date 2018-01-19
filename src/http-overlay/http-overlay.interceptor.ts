import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpOverlayService } from './http-overlay.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpOverlayInterceptor implements HttpInterceptor {

  constructor(private HttpOverlayService: HttpOverlayService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.HttpOverlayService.callBefore();

    return next
      .handle(req)
      .catch((e, caught) => {
        this.HttpOverlayService.callAfter();
        return Observable.throw(e);
      })
      .do(event => {
        if (event instanceof HttpResponse) {
          this.HttpOverlayService.callAfter();
        }
      })
  }
}
