import {NgModule} from "@angular/core";
import {TargetDisplayComponent} from "./target-displayer/target-display.component";
import {CommonModule} from "@angular/common";
import { AmountComponent } from './amount/amount.component';
import { BButtonComponent } from './b-button/b-button.component';

@NgModule({
  declarations: [
  TargetDisplayComponent,
  AmountComponent,
  BButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TargetDisplayComponent,
    AmountComponent,
    BButtonComponent
  ]
})
export class GlobalModule {
}
