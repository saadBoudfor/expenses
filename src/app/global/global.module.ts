import {NgModule} from "@angular/core";
import {TargetDisplayComponent} from "./target-displayer/target-display.component";
import {CommonModule} from "@angular/common";
import { AmountComponent } from './amount/amount.component';
import { BButtonComponent } from './b-button/b-button.component';
import { LayoutComponent } from './layout/layout.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CardComponent } from './card/card.component';
import { BLinkComponent } from './b-link/b-link.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
  TargetDisplayComponent,
  AmountComponent,
  BButtonComponent,
  LayoutComponent,
  ParagraphComponent,
  CardComponent,
  BLinkComponent,
  ChartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TargetDisplayComponent,
    AmountComponent,
    BButtonComponent,
    LayoutComponent,
    ParagraphComponent,
    CardComponent,
    BLinkComponent,
    ChartComponent
  ]
})
export class GlobalModule {
}
