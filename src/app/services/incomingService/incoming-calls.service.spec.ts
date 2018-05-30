import { TestBed, inject } from '@angular/core/testing';

import { IncomingCallsService } from './incoming-calls.service';

describe('IncomingCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomingCallsService]
    });
  });

  it('should be created', inject([IncomingCallsService], (service: IncomingCallsService) => {
    expect(service).toBeTruthy();
  }));
});
