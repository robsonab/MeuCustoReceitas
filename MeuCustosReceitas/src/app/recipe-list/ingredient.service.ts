import { Injectable } from '@angular/core';
import { ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getCost(ingredient: ingredient) {
    if (ingredient.product) {
      return (ingredient.product.pricePack / ingredient.product.qtyPack) * ingredient.qty;
    }
    else{
      return 0;
    }
  }
}
