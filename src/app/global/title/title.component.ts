import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'b-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input()
  public icon: string;

  constructor() {
  }

  ngOnInit() {
  }

}
