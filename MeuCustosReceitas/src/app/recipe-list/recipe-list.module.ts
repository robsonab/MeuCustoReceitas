import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';
import { MatButtonModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { IngredientListComponent } from './recipe/ingredient-list/ingredient-list.component';
import { IngredientComponent } from './recipe/ingredient-list/ingredient/ingredient.component';
import { NewIngredientComponent } from './recipe/ingredient-list/new-ingredient/new-ingredient.component';
import { NewProductComponent } from './recipe/ingredient-list/new-ingredient/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


@NgModule({
  declarations: [
    RecipeListComponent,
    IngredientListComponent,
    IngredientComponent,    
    NewIngredientComponent,
    NewProductComponent,
    NewRecipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,     
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    SharedModule
  ],
  exports:[
    RecipeListComponent
  ]
})
export class RecipeListModule { }
