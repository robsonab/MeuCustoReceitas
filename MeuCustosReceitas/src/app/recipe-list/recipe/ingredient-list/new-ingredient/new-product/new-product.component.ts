import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY } from '@angular/cdk/overlay/typings/overlay-directives';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { product } from 'src/app/model/product';
import { unit } from 'src/app/model/unit';
import { UnitService } from 'src/app/repo/unit.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  units: unit[]
  product: product = new product();

  constructor(private unitService: UnitService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<NewProductComponent>) { }

  ngOnInit(): void {
    this.units = this.unitService.getAll();    
  }

  onClick(){
    var errors: string[] =[];

    if(!this.product.name){
      errors.push("Informe o nome do produto");
    }

    if(!this.product.unit){
      errors.push("Selecione uma unidade de medida")      
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
      this.dialogRef.close(this.product);
    }
  }
}
