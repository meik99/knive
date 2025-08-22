import { Injectable } from "@angular/core";
import { InventoryService } from "./inventory.service";
import { Item } from "../Item";
import { Observable, of } from "rxjs";
import { Place } from "../../place/Place";

@Injectable({
  providedIn: "root",
})
export class InventoryLocalService extends InventoryService {
  private _items: Item[] = [
    new Item({
      name: "Karotten",
      amount: 4
    }),
    new Item({
      name: "Nutella",
      amount: 500,
      unit: "g",
      place: new Place({
        name: "Fridge"
      })
    })
  ];

  constructor() {
    super()

    this.save(this._items);
    this._items = this.load()
  }

  override async findAll(): Promise<Observable<Item[]>> {
    return of(this._items);
  }

  private load(): Item[] {
    const itemsRaw = localStorage.getItem("items")

    if (!itemsRaw) {
      return [];
    }

    try {
      const itemArray = JSON.parse(itemsRaw)

      if (!itemArray || !itemArray.length) {
        localStorage.removeItem("items")
        return [];
      }

      return itemArray.map((entry: any) => new Item(entry))
    } catch {
      localStorage.removeItem("items")
    }

    return []
  }

  private save(items: Item[]) {
    localStorage.setItem("items", JSON.stringify(items))
  }
}
