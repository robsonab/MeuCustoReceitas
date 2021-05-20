import { Injectable } from '@angular/core';
import * as data from "../../assets/products.json";
import { product } from '../model/product';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private key = "products"
  private products: product[];

  constructor(private storageService: StorageService) {
    this.products = this.getAll();
  }

  getAll(): product[] {
    if (!this.products) {
      this.products = this.storageService.getData(this.key);
      if (!this.products) {
        this.storageService.setData(this.key, (data as any).default);
        this.products = this.storageService.getData(this.key);
      }
    }
    return this.products;
  }

  getProduct(code: string): product {
    if (!code) { return null; }
    return this.products.find(c => c.code == code);
  }

  private updateProduct(product: product, updProduct: product): void {
    updProduct.pricePack = product.pricePack
    updProduct.qtyPack = product.qtyPack
    updProduct.unit = product.unit
    updProduct.name = product.name
  }

  update(product: product) {
    var updProduct = this.getProduct(product.code)
    if (updProduct) {
      this.updateProduct(product, updProduct);
      this.save();
    }
  }

  addOrUpdate(product: product) {
    console.log("add")
    var updProduct = this.getProduct(product.code)
    if (updProduct) {
      this.updateProduct(product, updProduct);
    }
    else {
      this.products.push(product)
    }
    this.save();
  }

  private save(): void {
    this.storageService.setData(this.key, this.products);
  }
}
