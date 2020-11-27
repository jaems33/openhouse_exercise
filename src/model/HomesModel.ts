import {HomeType} from './HomeModel'
import {currencyFormatter} from '../helpers/currency'

interface Totals {
  totalPrice: number;
  totalSamples: number;
}

interface APIHome {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: HomeType;
}

export class HomesModel {
  private _homes: APIHome[] = [];
  private _totals: Map<string, Totals>;
  constructor(input: APIHome[] = []){
    this._homes = input;
    this._totals = new Map();
    if (this._homes.length > 0){
      this.calculateHouseTotalByCommunity()
    }
  }
  calculateHouseTotalByCommunity(){
    for (const home of this._homes){
      if (this._totals.has(home.communityId)){
        const totals = this._totals.get(home.communityId);
        if (totals !== undefined){
          this._totals.set(home.communityId, {
            totalPrice: totals.totalPrice + home.price, 
            totalSamples: totals.totalSamples + 1
          })}
        }
      else {
        this._totals.set(home.communityId, {
          totalPrice: home.price, 
          totalSamples: 1
        })
      }
    }
  }
  getAverage(id: string): string {
    const price = this._totals.get(id);
    if (price !== undefined){
      return currencyFormatter.format((price.totalPrice / price.totalSamples));
    }
    return currencyFormatter.format(0);
  }
}