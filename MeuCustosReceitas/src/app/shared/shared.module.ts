import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    MessageComponent,
    AlertComponent,
    HeaderComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MessageComponent,
    AlertComponent,
    HeaderComponent,
    ConfirmationDialogComponent
  ]

})
export class SharedModule { }
