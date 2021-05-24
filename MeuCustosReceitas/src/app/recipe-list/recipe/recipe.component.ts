import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  @Input()
  recipe: recipe;

  ngOnInit() {
  }

}
