import { TestBed } from '@angular/core/testing';

import { CaritoServiceService } from './carito-service.service';

describe('CaritoServiceService', () => {
  let service: CaritoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaritoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
