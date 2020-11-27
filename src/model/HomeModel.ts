export enum HomeType {
  House = "HOUSE",
  Townhome = "TOWNHOME",
  Duplex = "DUPLEX",
  Condo = "CONDO"
}

export class HomeModel {
  private _id: string;
  private _communityId: string;
  private _price: number;
  private _area: number;
  private _type: HomeType;
  constructor(id: string, communityId: string, price: number, area: number, type: HomeType) {
    this._id = id;
    this._communityId = communityId;
    this._price = price;
    this._area = area;
    this._type = type;
  }
  get id(): string {
    return this._id;
  }
  get communityId(): string {
    return this._communityId;
  }
  get price(): number {
    return this._price;
  }
  get area(): number {
    return this._area;
  }
  get type(): HomeType {
    return this._type;
  }
}