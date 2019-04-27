import { Injectable } from '@angular/core';
import {Status} from "../../model/Status";
import {Task} from "../../model/Task";
import {ListItem} from "../../../global/list-item/ListItem";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public toListItemList(taskList: Task[]): ListItem[] {
    const listItemList: ListItem[] = [];
    taskList.forEach(task => listItemList.push(this.toListItem(task)));
    return listItemList;
  }

  public toListItem(task: Task): ListItem {
    return {
      icon: task.icon,
      title: task.title,
      subTitle: task.quantity,
      additionalInformation: [task.date.toLocaleDateString(), 'reste: ' + (new Date().getDay() - task.date.getDay()) + 'j'],
      checked: task.status === Status.DONE
    }
  }
}
