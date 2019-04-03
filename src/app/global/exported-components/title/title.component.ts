import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'b4-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() public underline: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
