import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ByBarcodeComponent } from './add-product/by-barcode/by-barcode.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inventory'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'inventory/add',
    component: AddProductComponent
  },
  {
    path: 'inventory/add/barcode',
    component: ByBarcodeComponent
  }
];
