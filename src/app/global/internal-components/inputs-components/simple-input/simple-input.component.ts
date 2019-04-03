import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'b4-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss']
})
export class SimpleInputComponent implements OnInit {

  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error('Name attribute is missing');
    }
  }
}
