import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ingredient } from 'src/app/model/ingredient';
import { IngredientService } from '../ingredient.service';

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

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.ingredients);
  }

  getCost(ingredient: ingredient): number {
    return this.ingredientService.getCost(ingredient);
  }

  public getTotalCost(): number {
    return this.ingredients.map(t => this.ingredientService.getCost(t)).reduce((acc, value) => acc + value, 0)
  }

  onEnter(){
    
  }
}
