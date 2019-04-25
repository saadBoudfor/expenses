import {Component, OnInit} from '@angular/core';
import {TaskView} from "./global/list-item/TaskView";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  taskList: TaskView[];

  ngOnInit(): void {
    this.taskList = [
      {
        icon: 'shopping_basket',
        title: 'Coca cola zero',
        date: new Date(2019, 3, 24),
        quantity: '33cl',
        isChecked: false
      },
      {
        icon: 'shopping_basket',
        title: 'Bannanes',
        date: new Date(2019, 3, 26),
        quantity: '4p',
        isChecked: false
      },
      {
        icon: 'shopping_basket',
        title: 'Menth',
        date: new Date(2019, 3, 22),
        quantity: '1p',
        isChecked: false
      },
      {
        icon: 'shopping_basket',
        title: 'balais',
        date: new Date(2019, 3, 29),
        quantity: '1p',
        isChecked: true
      },
      {
        icon: 'shopping_basket',
        title: 'Poele',
        date: new Date(2019, 4, 5),
        quantity: '1p',
        isChecked: false
      }
    ];
  }
}
