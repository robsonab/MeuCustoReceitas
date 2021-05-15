import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ingredient } from 'src/app/model/ingredient';
import { product } from 'src/app/model/product';
import { IngredientService } from '../../../ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  @Output()
  onEnter = new EventEmitter();

  @Input()
  ingredient: ingredient;

  pricePack: string;
  qtyPack: string;
  qty: string;

  changePricePack() {
    this.ingredient.product.pricePack = Number(this.pricePack.replace(",", "."));
  }

  changeQtyPack() {
    this.ingredient.product.qtyPack = Number(this.qtyPack.replace(",", "."));
  }

  changeQty() {
    this.ingredient.qty = Number(this.qty.replace(",", "."));
  }

  ngOnInit() {
    if (!this.ingredient.product) {
      this.ingredient.product = new product();
    }
    this.pricePack = this.ingredient.product.pricePack.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    this.qtyPack = this.ingredient.product.qtyPack.toString();
    this.qty = this.ingredient.qty.toString();
  }

  @Output()
  getPriceCost() {
    return this.ingredientService.getCost(this.ingredient);
  }

  onKeyDown(e: any) {
    if ((e.which == 13 || e.keyCode == 13)) {
      e.preventDefault();
      this.onEnter.emit();
    }
  }
}
