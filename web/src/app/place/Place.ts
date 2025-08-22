export class Place {
  name: string = ""
  icon: string = ""

  constructor(args?: Partial<Place>) {
    if (args) {
      Object.assign(this, args);
    }
  }
}
