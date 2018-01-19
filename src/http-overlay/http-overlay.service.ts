import { Injectable } from '@angular/core';

export type HttpOverlayCallBack = () => void;

@Injectable()
export class HttpOverlayService {

    before: HttpOverlayCallBack;
    after: HttpOverlayCallBack;

    public setOverlayCallBacks(before: HttpOverlayCallBack, after: HttpOverlayCallBack) {
        this.before = before;
        this.after = after;
    }

    public callBefore() {
        if (!!this.before) {
            this.before();
        }
    }

    public callAfter() {
        if (!!this.after) {
            this.after();
        }
    }

}