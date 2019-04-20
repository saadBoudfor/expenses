import {NgModule} from "@angular/core";
import {TargetDisplayComponent} from "./target-displayer/target-display.component";
import {CommonModule} from "@angular/common";
import { AmountComponent } from './amount/amount.component';
import { BButtonComponent } from './b-button/b-button.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
  TargetDisplayComponent,
  AmountComponent,
  BButtonComponent,
  LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TargetDisplayComponent,
    AmountComponent,
    BButtonComponent,
    LayoutComponent
  ]
})
export class GlobalModule {
}
