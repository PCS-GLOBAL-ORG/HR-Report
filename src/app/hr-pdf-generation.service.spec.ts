import { TestBed } from '@angular/core/testing';

import { HRPDFGenerationService } from './hr-pdf-generation.service';

describe('HRPDFGenerationService', () => {
  let service: HRPDFGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HRPDFGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
