import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ingredient } from 'src/app/model/ingredient';
import { product } from 'src/app/model/product';
import { ProductService } from 'src/app/repo/product.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { NewProductComponent } from './new-product/new-product.component';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {

  ingredient: ingredient;
  products: product[];
  
  @ViewChild("newIngredient", {static: true})
  newIngredient: IngredientComponent;
  
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<IngredientComponent>
  ) { }

  ngOnInit(): void {
    this.ingredient = new ingredient();
    this.products = this.productService.getAll().sort((a, b) => a.name > b.name ? 1 : -1);
  }

  onChanged(code: any){
    if(code){
      this.ingredient.product = this.products.find(c=> c.code == code) 
      this.ingredient.productCode = this.ingredient.product.code;
      this.newIngredient.refresh();
    }
  }

  newProduct(){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {        
        var product = result as product;
        this.productService.addOrUpdate(product);
        this.ingredient.product = product;
        this.ingredient.productCode = this.ingredient.product.code;    
        this.newIngredient.focus();
      }
    });
  }

  add(){
    var errors: string[] =[];

    if(!this.ingredient.productCode){
      errors.push("Selecione um ingrediente")      
    }

    if(this.ingredient.qty == 0){
      errors.push("Informe a quantidade utilizada")
    }

    if(errors.length){
      const dialogRef = this.dialog.open(AlertComponent, {
        width: '400px',
        data: {
          title: 'Aviso',
          body: "",
          list: errors
        },
      });
    }
    else{
      this.dialogRef.close(this.ingredient);
    }
  }

}

