import { TestBed } from '@angular/core/testing';

import { SlickConfigService } from './slick-config.service';

describe('SlickConfigService', () => {
  let service: SlickConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlickConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
