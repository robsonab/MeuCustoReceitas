import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe-list/recipe/recipe.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
 {
   path: 'recipe/:code',
   component: RecipeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
