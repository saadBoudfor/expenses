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
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ListItemComponent } from './list-item/list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CircularButtonComponent } from './circular-button/circular-button.component';
import { TitleComponent } from './title/title.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  TargetDisplayComponent,
  AmountComponent,
  BButtonComponent,
  LayoutComponent,
  ParagraphComponent,
  CardComponent,
  BLinkComponent,
  ChartComponent,
  CheckboxComponent,
  ListItemComponent,
  NavBarComponent,
  CircularButtonComponent,
  TitleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TargetDisplayComponent,
    AmountComponent,
    BButtonComponent,
    LayoutComponent,
    ParagraphComponent,
    CardComponent,
    BLinkComponent,
    ChartComponent,
    CheckboxComponent,
    ListItemComponent,
    NavBarComponent,
    CircularButtonComponent,
    TitleComponent
  ]
})
export class GlobalModule {
}
