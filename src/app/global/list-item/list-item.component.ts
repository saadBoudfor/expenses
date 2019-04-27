import {Component, Input, OnInit} from '@angular/core';
import {ListItem} from "../model/ListItem";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit{
  @Input()
  public listItem: ListItem;

  @Input()
  public type: string = 'simple-with-checkbox';

  ngOnInit(): void {
    this.listItem.title = this.listItem.title.toCapitalize();
  }

  onChecked(isChecked: boolean) {
    this.listItem.checked = isChecked;
    console.log(this.listItem);
  }


}
