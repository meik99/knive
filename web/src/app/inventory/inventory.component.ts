import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { InventoryService } from './service/inventory.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryAddItemFabComponent } from './inventory-add-item-fab/inventory-add-item-fab.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    SearchBarComponent,
    InventoryTableComponent,
    InventoryAddItemFabComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

}
