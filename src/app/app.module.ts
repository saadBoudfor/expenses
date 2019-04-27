import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ExpensesModule} from "./expenses/expenses.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
