///<reference path="exported-components/input/input.component.ts"/>

import {NgModule} from "@angular/core";
import {InputComponent} from "./exported-components/input/input.component";
import {ButtonComponent} from "./exported-components/button/button.component";
import {ContainerComponent} from "./exported-components/container/container.component";
import {RowComponent} from "./exported-components/row/row.component";
import {TitleComponent} from "./exported-components/title/title.component";
import {CommonModule} from "@angular/common";
import {InputWithIconComponent} from "./internal-components/inputs-components/input-with-icon/input-with-icon.component";
import {SimpleInputComponent} from "./internal-components/inputs-components/simple-input/simple-input.component";

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    RowComponent,
    TitleComponent,
    SimpleInputComponent,
    InputWithIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    RowComponent,
    TitleComponent
  ]
})
export class GlobalModule {
}
