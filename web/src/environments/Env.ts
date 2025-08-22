import { InventoryLocalService } from "../app/inventory/service/inventory-local.service";
import { PlaceLocalService } from "../app/place/service/place-local.service";

export class Env {
  PLACE_SERVICE = PlaceLocalService
  INVENTORY_SERVICE = InventoryLocalService

  constructor(args?: Partial<Env>) {
    if(args) {
      Object.assign(this, args);
    }
  }
}
