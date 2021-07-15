import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ingredient } from 'src/app/model/ingredient';
import { recipe } from 'src/app/model/recipe';
import { ProductService } from 'src/app/repo/product.service';
import { RecipeService } from 'src/app/repo/recipe.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { IngredientService } from '../../ingredient.service';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IngredientListComponent implements OnInit {

  @Input()
  recipe: recipe = new recipe();

  displayedColumns: string[] = ['name', 'cost'];
  dataSource: MatTableDataSource<ingredient>;
  expandedElement: ingredient | null;

  constructor(private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private productService: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.recipe.ingredients);    
  }

  getCost(ingredient: ingredient): number {
    return this.ingredientService.getCost(ingredient);
  }

  public getTotalCost(): number {
    return this.recipe.ingredients.map(t => this.ingredientService.getCost(t)).reduce((acc, value) => acc + value, 0)
  }

  onDelete(ingredient: ingredient) {    
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'Tem certeza que deseja remover o ingrediente?',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var index = this.recipe.ingredients.indexOf(ingredient);
        if (index !== -1) {
          this.recipe.ingredients.splice(index, 1);
        }
        this.recipeService.update(this.recipe);
      }
    });   
  }

  newIngredient() {
    const dialogRef = this.dialog.open(NewIngredientComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {        
        var newIngredient = result as ingredient;

        var exists = this.recipe.ingredients.find(c=> c.product.name == newIngredient.product.name);
        if(exists){
          var errors: string[] =[];
          errors.push("Produto já cadastrado na receita");
          const dialogRef = this.dialog.open(AlertComponent, {
            width: '400px',
            data: {
              title: 'Aviso',
              body: "",
              list: errors
            },
          });
          return;
        }

        if (!newIngredient.product.code) {
          newIngredient.product.code = "prod" + this.recipe.ingredients.length.toString()
          newIngredient.productCode = newIngredient.product.code
        }
        
        this.recipe.ingredients.push(newIngredient);
        this.productService.addOrUpdate(newIngredient.product)      
        this.recipeService.addOrUpdate(this.recipe);
      }
    });
  }

  ingredientChanged(){
    this.recipeService.addOrUpdate(this.recipe);
  }
}
