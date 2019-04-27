import {Payment} from "./Payment";
import {Amount} from "./Amount";
/**
 * Created by sboudfor on 27/04/2019.
 */

export interface Expense {
  icon?: string;
  payment?: Payment;
  name?: string;
  date?: Date;
  price?: Amount;
}
