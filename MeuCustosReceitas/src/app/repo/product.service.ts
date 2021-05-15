import { Injectable } from '@angular/core';
import * as data from "../../assets/products.json";
import { product } from '../model/product';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private key = "products"

  constructor(private storageService: StorageService) { }
  
  getAll() : product[] {        
    var products = this.storageService.getData(this.key);
    if(!products){
      this.storageService.setData(this.key, (data as any).default);  
      products = this.storageService.getData(this.key);
    }
    return products;
  }

  update(product: product){
    var products = this.getAll();       
    var updProduct = products.find(c=> c.code == product.code);
    updProduct.pricePack = product.pricePack
    updProduct.qtyPack = product.qtyPack
    updProduct.unit = product.unit
    updProduct.name = product.name
    
    this.storageService.setData(this.key, products);
  }

}
