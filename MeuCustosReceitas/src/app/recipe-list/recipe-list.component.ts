import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ingredient } from '../model/ingredient';
import { recipe } from '../model/recipe';
import { IngredientService } from './ingredient.service';
import { RecipeService } from '../repo/recipe.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  recipes: recipe[];
  
  dataSource: MatTableDataSource<ingredient>;

  total: number;
  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog,
    private ingredientService: IngredientService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAll();        
  }

  getCost(ingredient: ingredient): number {
    return this.ingredientService.getCost(ingredient);
  }

  public getTotal(recipe: recipe): number {
    return recipe.ingredients.map(t => this.ingredientService.getCost(t)).reduce((acc, value) => acc + value, 0)
  }

  newRecipe(){
    const dialogRef = this.dialog.open(NewRecipeComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {        
        var newRecipe = new recipe();
        newRecipe.name = result
        this.recipeService.addOrUpdate(newRecipe);    
        this.recipes = this.recipeService.getAll();
      }
    });
  }

  onDelete(recipe: recipe) {
    this.recipeService.delete(recipe);
  }

}
