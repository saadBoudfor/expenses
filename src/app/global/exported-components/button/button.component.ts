import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'b4-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
