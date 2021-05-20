import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';
import { MatButtonModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { IngredientListComponent } from './recipe/ingredient-list/ingredient-list.component';
import { IngredientComponent } from './recipe/ingredient-list/ingredient/ingredient.component';
import { NewIngredientComponent } from './recipe/ingredient-list/new-ingredient/new-ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    RecipeListComponent,
    IngredientListComponent,
    IngredientComponent,
    RecipeComponent,
    NewIngredientComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,     
  ],
  exports:[
    RecipeListComponent
  ]
})
export class RecipeListModule { }
