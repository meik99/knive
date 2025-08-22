import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inventory'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  }
];
