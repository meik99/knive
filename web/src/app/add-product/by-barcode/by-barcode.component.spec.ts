import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBarcodeComponent } from './by-barcode.component';

describe('ByBarcodeComponent', () => {
  let component: ByBarcodeComponent;
  let fixture: ComponentFixture<ByBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByBarcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
