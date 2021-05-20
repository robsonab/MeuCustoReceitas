import { Injectable } from '@angular/core';
import * as data from "../../assets/recipes.json";
import { product } from '../model/product';
import { recipe } from '../model/recipe';
import { StorageService } from '../services/storage.service';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private key = "recipes";
  private recipes: recipe[];

  constructor(
    private storageService: StorageService,
    private productService: ProductService) {
    this.recipes = this.getAll();
  }

  getAll(): recipe[] {
    if (!this.recipes) {
      var products = this.productService.getAll();
      this.recipes = this.storageService.getData(this.key) || (data as any).default;
      if (!this.recipes) {
        this.storageService.setData(this.key, (data as any).default);
        this.recipes = this.storageService.getData(this.key);
      }
      this.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          ingredient.product = products.find(p => p.code == ingredient.productCode)
        });
      })
    }
    return this.recipes;
  }

  getRecipe(code: string): recipe{
    if (!code) { return null; }
    return this.recipes.find(c => c.code == code);
  }

  private updateRecipe(recipe: recipe, updRecipe: recipe): void {
    updRecipe.name = recipe.name
  }

  update(recipe: recipe) {
    var updRecipe = this.getRecipe(recipe.code)
    if (updRecipe) {
      this.updateRecipe(recipe, updRecipe);
      this.save();
    }
  }

  addOrUpdate(recipe: recipe) {    
    var updRecipe = this.getRecipe(recipe.code)
    if (updRecipe) {
      this.updateRecipe(recipe, updRecipe);
    }
    else {
      this.recipes.push(recipe)
    }
    this.save();
  }

  private save(): void {
    this.storageService.setData(this.key, this.recipes);
  }

}