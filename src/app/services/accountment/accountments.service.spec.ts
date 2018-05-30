import { TestBed, inject } from '@angular/core/testing';

import { AccountmentsService } from './accountments.service';

describe('AccountmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountmentsService]
    });
  });

  it('should be created', inject([AccountmentsService], (service: AccountmentsService) => {
    expect(service).toBeTruthy();
  }));
});
