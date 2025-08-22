import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss'
})
export class InventoryTableComponent implements OnInit {
  items: Item[] = []

  constructor(
    private inventoryService: InventoryService
  ) {}

  async ngOnInit(): Promise<void> {
    (await this.inventoryService.findAll()).subscribe(
      items => this.items = items
    )
  }
}
