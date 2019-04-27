import {Injectable} from '@angular/core';
import {ListItem} from "../../../global/list-item/ListItem";
import {Expense} from "../../model/Expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() {
  }

  public toListItems(expenses: Expense[]): ListItem[] {
    const listItems: ListItem[] = [];
    expenses.forEach(expense => {
      listItems.push(this.toListItem(expense));
    });
    return listItems;
  }

  public toListItem(expense: Expense): ListItem {
    return {
      icon: expense.icon,
      title: expense.name,
      subTitle: expense.date.toLocaleDateString(),
      additionalInformation: [expense.payment.icon]
    }
  }
}
