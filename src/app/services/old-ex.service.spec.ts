import { TestBed } from '@angular/core/testing';

import { OldExService } from './old-ex.service';

describe('OldExService', () => {
  let service: OldExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
