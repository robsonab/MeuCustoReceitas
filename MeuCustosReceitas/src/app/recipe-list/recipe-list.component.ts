import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ingredient } from '../model/ingredient';
import { recipe } from '../model/recipe';
import { IngredientService } from './ingredient.service';
import { RecipeComponent } from './recipe/recipe.component';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: recipe[];
  
  urlToJson = 'assets/receitas.json';

  @ViewChild('recipe') 
  recipe: RecipeComponent[];
  
  dataSource: MatTableDataSource<ingredient>;

  total: number;
  constructor(private http: HttpClient,
      private ingredientService: IngredientService) { }

  ngOnInit() {
    this.http.get<recipe[]>(this.urlToJson).subscribe(response => {
      this.recipes = response;         
      
    });
  }

  getCost(ingredient: ingredient): number{    
    return this.ingredientService.getCost(ingredient);
  }

  public getTotal(recipe: recipe) : number{    
    return recipe.ingredients.map(t => this.ingredientService.getCost(t)).reduce((acc, value) => acc + value, 0)
}

  onClick(){
    console.log(this.recipe);    
  }
}
