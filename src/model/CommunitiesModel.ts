import { CommunityModel } from './CommunityModel';
import { SORT_GREATER_THAN, SORT_LESS_THAN } from '../constants/algorithms'

export interface APICommunity {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export enum SortDirection {
  ASC = "Ascending",
  DES = "Descening"
}

export class CommunitiesModel {
  private _communities: Array<CommunityModel> = [];

  constructor(input: APICommunity[] = []) {
    this.populate(input);
  }
  populate(input: APICommunity[]) {
    this._communities = input.map((element: APICommunity) => new CommunityModel(
      element.id,
      element.name,
      element.imgUrl,
      element.group)
    );
  }
  sortByName(direction: SortDirection = SortDirection.ASC) {
    const sortValue = direction === SortDirection.ASC ? SORT_GREATER_THAN : SORT_LESS_THAN;

    function compareByName(a: CommunityModel, b: CommunityModel) {
      if (a.name < b.name) return -sortValue;
      else if (a.name > b.name) return sortValue;
      return 0;
    }

    this._communities.sort(compareByName);
  }
  get entries(): Array<CommunityModel> {
    return this._communities;
  }
}