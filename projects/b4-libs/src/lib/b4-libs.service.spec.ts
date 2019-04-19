import { TestBed } from '@angular/core/testing';

import { B4LibsService } from './b4-libs.service';

describe('B4LibsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: B4LibsService = TestBed.get(B4LibsService);
    expect(service).toBeTruthy();
  });
});
