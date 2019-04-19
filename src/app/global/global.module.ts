import {NgModule} from "@angular/core";
import {TargetDisplayComponent} from "./target-displayer/target-display.component";
import {CommonModule} from "@angular/common";
import { AmountComponent } from './amount/amount.component';

@NgModule({
  declarations: [
  TargetDisplayComponent,
  AmountComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TargetDisplayComponent,
    AmountComponent
  ]
})
export class GlobalModule {
}
