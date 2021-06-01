import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/repo/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: recipe;
  constructor(private activatedRoute: ActivatedRoute,
      private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(queryParams => {
      this.recipe = this.recipeService.getRecipe(queryParams["code"])
    })
  }

}
