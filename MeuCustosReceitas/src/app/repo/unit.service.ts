import { Injectable } from '@angular/core';
import * as data from "../../assets/units.json";
import { unit } from '../model/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private units: unit[]
  
  constructor() { }

  getAll(): unit[]{
    if(!this.units){
      this.units = (data as any).default
      this.units = this.units.sort((a, b) => a.code > b.code ? 1 : -1)
    }
    return this.units;
  }
}
