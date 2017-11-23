import { TestBed, inject } from '@angular/core/testing';

import { PalmaresService } from './palmares.service';

describe('PalmaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalmaresService]
    });
  });

  it('should be created', inject([PalmaresService], (service: PalmaresService) => {
    expect(service).toBeTruthy();
  }));
});
