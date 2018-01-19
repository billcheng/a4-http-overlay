import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpOverlayInterceptor } from './http-overlay.interceptor';

import { HttpOverlayService } from './http-overlay.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpOverlayInterceptor,
    multi: true,
  },
    HttpOverlayService],
})
export class HttpOverlayModule { }