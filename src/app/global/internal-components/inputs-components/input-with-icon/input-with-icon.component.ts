import {Component, OnInit, Input} from '@angular/core';
import {SimpleInputComponent} from "../simple-input/simple-input.component";

@Component({
  selector: 'b4-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.scss']
})
export class InputWithIconComponent extends SimpleInputComponent implements OnInit {

  @Input() icon: string;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.icon) {
      throw new Error('Icon is required for input with icon component: ' + this.name);
    }
  }

}
