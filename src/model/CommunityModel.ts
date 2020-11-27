export class CommunityModel {
  private _id: string;
  private _name: string;
  private _imgUrl: string;
  private _group: string;
  constructor(id: string, name: string, imgUrl: string, group: string) {
    this._id = id;
    this._name = name;
    this._imgUrl = imgUrl;
    this._group = group;
  }
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get imgUrl(): string {
    return this._imgUrl;
  }
  get group(): string {
    return this._group;
  }
}