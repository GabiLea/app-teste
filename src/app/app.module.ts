import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertComponent } from './shared/components/modal/alert/alert.component';
import { ConfirmComponent } from './shared/components/modal/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent,
    TransactionsComponent,
    HeaderComponent,
    MenuComponent,
    AlertComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  entryComponents: [ ConfirmComponent, AlertComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
