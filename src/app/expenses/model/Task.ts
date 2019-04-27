import {Status} from "./Status";
/**
 * Created by sboudfor on 25/04/2019.
 */

export interface Task {
  icon: string;
  title: string;
  quantity: string;
  date: Date;
  status: Status;
}
