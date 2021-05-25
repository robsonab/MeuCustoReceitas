import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  recipeName: string;

  constructor(private dialog: MatDialog,    
    public dialogRef: MatDialogRef<NewRecipeComponent>) { }

  ngOnInit(): void {}
  
  onClick(){
    var errors: string[] =[];

    if(!this.recipeName){
      errors.push("Informe o nome da receita");
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
      this.dialogRef.close(this.recipeName);
    }
  }
}
