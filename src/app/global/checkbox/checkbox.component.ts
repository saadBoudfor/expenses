import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input()
  public size: string;

  @Input()
  public isChecked: string;

  @Output()
  public checked = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  checkValue(event: any) {
    this.checked.emit(event);
  }
}
