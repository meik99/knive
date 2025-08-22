import { Place } from "../place/Place";

export class Item {
  name: string = "";
  amount: number = 0;
  unit: string = "";
  place?: Place;

  constructor(args?: Partial<Item>) {
    if (args) {
      Object.assign(this, args)
    }
  }
}
