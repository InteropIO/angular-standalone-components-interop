import { TestBed } from '@angular/core/testing';

import { InteropService } from './interop.service';

describe('InteropService', () => {
  let service: InteropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
