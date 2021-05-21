import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  product: product = new product();

  ngOnInit(): void {
    
  }

}
