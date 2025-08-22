import { TestBed } from '@angular/core/testing';

import { InventoryLocalService } from './inventory-local.service';

describe('InventoryLocalService', () => {
  let service: InventoryLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
