import { TestBed } from '@angular/core/testing';

import { BaristaService } from './barista.service';

describe('BaristaService', () => {
  let service: BaristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
