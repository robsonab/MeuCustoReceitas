import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ingredient } from 'src/app/model/ingredient';
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
  ingredients: ingredient[] = [];

  displayedColumns: string[] = ['name', 'cost'];
  dataSource: MatTableDataSource<ingredient>;
  expandedElement: ingredient | null;

  constructor(private ingredientService: IngredientService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.ingredients);
  }

  getCost(ingredient: ingredient): number {
    return this.ingredientService.getCost(ingredient);
  }

  public getTotalCost(): number {
    return this.ingredients.map(t => this.ingredientService.getCost(t)).reduce((acc, value) => acc + value, 0)
  }

  onDelete(ingredient: ingredient) {
    var index = this.ingredients.indexOf(ingredient);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
  }

  newIngredient(){
    const dialogRef = this.dialog.open(NewIngredientComponent, {
      width: '250px',
      data: {name: "", animal: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.ingredients.push(result);
      }
    });
  }

}
