import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'b4-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit() {
  }

}
