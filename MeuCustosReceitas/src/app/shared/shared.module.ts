import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    MessageComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent,
    AlertComponent
  ]

})
export class SharedModule { }
