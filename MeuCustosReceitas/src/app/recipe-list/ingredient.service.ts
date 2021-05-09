import { Injectable } from '@angular/core';
import { ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getCost(ingredient: ingredient){
    return (ingredient.pricePack / ingredient.qtyPack) * ingredient.qty;
  }
}
