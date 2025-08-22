import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddItemFabComponent } from './inventory-add-item-fab.component';

describe('InventoryAddItemFabComponent', () => {
  let component: InventoryAddItemFabComponent;
  let fixture: ComponentFixture<InventoryAddItemFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAddItemFabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddItemFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
