import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/repo/recipe.service';
import { RecipeNameComponent } from './recipe-name/recipe-name.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: recipe;
  code: string;
  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(queryParams => {
      this.code = queryParams["code"];
      if (this.code != 'new') {
        this.recipe = this.recipeService.getRecipe(this.code)
      }
      else{
        this.recipe = new recipe();
        this.recipe.name = "Nova Receita"        
      }
    })
  }

  onChange(){
    const dialogRef = this.dialog.open(RecipeNameComponent, {
      width: '750px',
      data: this.recipe.name
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {                
        this.recipe.name = result as string;
      }
    });
  }
}
