import { TestBed } from '@angular/core/testing';

import { PlaceLocalService } from './place-local.service';

describe('PlaceLocalService', () => {
  let service: PlaceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
