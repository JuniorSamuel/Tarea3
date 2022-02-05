import { TestBed } from '@angular/core/testing';

import { TranslateNumService } from './translate-num.service';

describe('TranslateNumService', () => {
  let service: TranslateNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
