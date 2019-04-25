import {Component, OnInit, Input} from '@angular/core';
import {TaskView} from "./TaskView";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  public task: TaskView;

  constructor() {
  }

  ngOnInit() {
    if (this.task) {
      const diff = new Date().getTime() - this.task.date.getTime();
      const deadLine = new Date(diff).getDay();
      this.task.deadLine = (diff < 0) ? (deadLine * -1) : deadLine;
      console.log(diff);
      console.log(this.task.date);
    }
  }

  onChecked(isChecked: boolean) {
    this.task.isChecked = isChecked;
  }


}
