import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './view/home/home.component';
import {GlobalModule} from "../global/global.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [HomeComponent]
})
export class ExpensesModule {
}
