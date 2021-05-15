import { Injectable } from '@angular/core';
import * as data from "../../assets/recipes.json";
import { recipe } from '../model/recipe';
import { StorageService } from '../services/storage.service';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private key = "recipes";

  constructor(
    private storageService: StorageService,
    private productService: ProductService) { }

  getAll(): recipe[] {
    var products = this.productService.getAll();
    var recipes = this.storageService.getData(this.key) || (data as any).default;

    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredient.product = products.find(p => p.code == ingredient.productCode)
      });
    })
    return recipes;
  }

  saveChanges(){
    var data = this.getAll();    
    this.storageService.setData(this.key, data);
  }

}