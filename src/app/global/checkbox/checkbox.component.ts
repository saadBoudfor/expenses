import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input()
  public size: string;

  constructor() {
  }

  ngOnInit() {
  }

}
