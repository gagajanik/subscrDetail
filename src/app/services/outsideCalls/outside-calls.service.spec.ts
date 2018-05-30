import { TestBed, inject } from '@angular/core/testing';

import { OutsideCallsService } from './outside-calls.service';

describe('OutsideCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutsideCallsService]
    });
  });

  it('should be created', inject([OutsideCallsService], (service: OutsideCallsService) => {
    expect(service).toBeTruthy();
  }));
});
