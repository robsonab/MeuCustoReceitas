import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {

  ingredient: ingredient;

  constructor() { }

  ngOnInit(): void {
    this.ingredient = new ingredient();    
  }

}
