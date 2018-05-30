import { TestBed, inject } from '@angular/core/testing';

import { LocalCallsService } from './local-calls.service';

describe('LocalCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalCallsService]
    });
  });

  it('should be created', inject([LocalCallsService], (service: LocalCallsService) => {
    expect(service).toBeTruthy();
  }));
});
