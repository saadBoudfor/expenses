import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public isChecked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onChecked(isChecked: boolean) {
    this.isChecked = isChecked;
  }


}
