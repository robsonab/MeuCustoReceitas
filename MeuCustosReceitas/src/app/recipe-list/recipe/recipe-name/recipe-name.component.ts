import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recipe-name',
  templateUrl: './recipe-name.component.html',
  styleUrls: ['./recipe-name.component.css']
})
export class RecipeNameComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RecipeNameComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string) { }


  ngOnInit(): void {
  }

  onClick(){
    this.dialogRef.close(this.name);
  }
}
