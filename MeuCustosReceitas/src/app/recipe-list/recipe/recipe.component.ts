import { Component, Input, OnInit, Output } from '@angular/core';
import { ingredient } from 'src/app/model/ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  @Input()
  ingredient: ingredient;

  pricePack: string; 
  qtyPack: string;
  qty: string;

  changePricePack(){
    this.ingredient.pricePack = Number(this.pricePack.replace(",", "."));
  }

  changeQtyPack(){
    this.ingredient.qtyPack = Number(this.qtyPack.replace(",", "."));
  }

  changeQty(){
    this.ingredient.qty = Number(this.qty.replace(",", "."));
  }

  ngOnInit() {
    this.pricePack = this.ingredient.pricePack.toLocaleString('pt-BR', {minimumFractionDigits: 2})    
    this.qtyPack = this.ingredient.qtyPack.toString();
    this.qty = this.ingredient.qty.toString();
  }

  @Output()
  getPriceCost() {
    return this.ingredientService.getCost(this.ingredient);
  }
}
