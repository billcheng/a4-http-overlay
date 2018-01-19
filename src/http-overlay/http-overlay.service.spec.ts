/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpOverlayService } from './http-overlay.service';

describe('Service: HttpOverlay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpOverlayService]
    });
  });

  it('should ...', inject([HttpOverlayService], (service: HttpOverlayService) => {
    expect(service).toBeTruthy();
  }));
});