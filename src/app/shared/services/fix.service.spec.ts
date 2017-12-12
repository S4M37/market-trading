import { TestBed, inject } from '@angular/core/testing';

import { FixService } from './fix.service';

describe('FixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixService]
    });
  });

  it('should be created', inject([FixService], (service: FixService) => {
    expect(service).toBeTruthy();
  }));
});
