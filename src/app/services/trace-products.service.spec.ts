import { TestBed } from '@angular/core/testing';

import { TraceProductsService } from './trace-products.service';

describe('TraceProductsService', () => {
  let service: TraceProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraceProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
