import { Component, OnInit } from '@angular/core';
import {ListItem} from "../../../global/list-item/ListItem";
import {Task} from "../../model/Task";
import {Status} from "../../model/Status";
import {Expense} from "../../model/Expense";
import {TaskService} from "../../services/task/task.service";
import {ExpenseService} from "../../services/expense/expense.service";

@Component({
  selector: 'expenses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listItemList: ListItem[];
  public expensesItemList: ListItem[];

  constructor(private _taskService: TaskService, private _expenseService: ExpenseService) { }

  ngOnInit() {
    const taskList: Task[] = [
      {
        icon: 'shopping_basket',
        title: 'Coca cola zero',
        date: new Date(2019, 3, 24),
        quantity: '33cl',
        status: Status.DONE
      },
      {
        icon: 'shopping_basket',
        title: 'Bannanes',
        date: new Date(2019, 3, 26),
        quantity: '4p',
        status: Status.TODO
      },
      {
        icon: 'shopping_basket',
        title: 'Menth',
        date: new Date(2019, 3, 22),
        quantity: '1p',
        status: Status.DONE
      },
      {
        icon: 'shopping_basket',
        title: 'balais',
        date: new Date(2019, 3, 29),
        quantity: '1p',
        status: Status.TODO
      },
      {
        icon: 'shopping_basket',
        title: 'Poele',
        date: new Date(2019, 4, 5),
        quantity: '1p',
        status: Status.DONE
      }
    ];
    const expenseList: Expense[] = [
      {
        icon: 'fas fa-couch',
        payment: {icon: 'fas fa-credit-card', name: 'carte de crédit'},
        name: 'meubles cuisines',
        date: new Date(2019, 4, 2),
        price: {currency: 'euros', amount: 22.59}
      },
      {
        icon: 'fas fa-utensils',
        payment: {icon: 'fab fa-cc-paypal', name: 'paypal'},
        name: 'fourniture burreau',
        date: new Date(2019, 2, 6),
        price: {currency: 'euros', amount: 11.63}
      },
      {
        icon: 'fas fa-carrot',
        payment: {icon: 'fas fa-money-bill', name: 'espèces'},
        name: 'nourriture ramadan',
        date: new Date(2019, 3, 10),
        price: {currency: 'euros', amount: 11.63}
      }
    ];
    this.listItemList = this._taskService.toListItemList(taskList);
    this.expensesItemList = this._expenseService.toListItems(expenseList);
  }

}
