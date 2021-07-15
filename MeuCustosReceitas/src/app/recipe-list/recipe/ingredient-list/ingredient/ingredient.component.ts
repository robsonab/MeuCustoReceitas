import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/model/ingredient';
import { product } from 'src/app/model/product';
import { ProductService } from 'src/app/repo/product.service';
import { IngredientService } from '../../../ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService,
          private productService: ProductService) { }

  @Output()
  onEnter = new EventEmitter();

  @Output()
  onChange = new EventEmitter();

  @Input()
  ingredient: ingredient;

  @ViewChild("pricePackTextBox", {static : true})
  pricePackTextBox: ElementRef;

  pricePack: string;
  qtyPack: string;
  qty: string;

  changePricePack() {
    this.ingredient.product.pricePack = Number(this.pricePack.replace(",", "."));
    this.productService.update(this.ingredient.product);
    this.onChange.emit();
  }

  changeQtyPack() {
    this.ingredient.product.qtyPack = Number(this.qtyPack.replace(",", "."));
    this.productService.update(this.ingredient.product);
    this.onChange.emit();
  }

  changeQty() {
    this.ingredient.qty = Number(this.qty.replace(",", "."));
    this.onChange.emit();
  }

  refresh(){
    this.pricePack = this.ingredient.product.pricePack.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    this.qtyPack = this.ingredient.product.qtyPack.toString();
    this.qty = this.ingredient.qty.toString();
  }

  ngOnInit() {
    if (!this.ingredient.product) {
      this.ingredient.product = new product();
    }
    this.refresh();
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

  focus(){
    this.pricePackTextBox.nativeElement.focus();
    this.pricePackTextBox.nativeElement.select();
  }
}
