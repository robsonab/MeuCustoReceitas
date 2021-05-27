import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MessageComponent,
    AlertComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent,
    AlertComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
