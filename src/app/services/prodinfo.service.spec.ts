import { TestBed } from '@angular/core/testing';

import { ProdinfoService } from './prodinfo.service';

describe('ProdinfoService', () => {
  let service: ProdinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
