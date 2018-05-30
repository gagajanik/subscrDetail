import { TestBed, inject } from '@angular/core/testing';

import { InsideCallsService } from './inside-calls.service';

describe('InsideCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsideCallsService]
    });
  });

  it('should be created', inject([InsideCallsService], (service: InsideCallsService) => {
    expect(service).toBeTruthy();
  }));
});
