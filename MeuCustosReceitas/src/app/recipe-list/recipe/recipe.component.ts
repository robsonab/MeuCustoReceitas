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
 

  ngOnInit() {
  }

  @Output()
  getPriceCost() {
    return this.ingredientService.getCost(this.ingredient);
  }
}
