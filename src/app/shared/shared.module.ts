import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/modal/alert/alert.component';
import { ConfirmComponent } from './components/modal/confirm/confirm.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, ConfirmComponent],
  exports:
    [
      HeaderComponent,
      MenuComponent
    ],
  entryComponents:
    [
      AlertComponent,
      ConfirmComponent
    ]
})

export class SharedModule { }
