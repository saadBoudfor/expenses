/**
 * Created by sboudfor on 25/04/2019.
 */

export class Task {
  public icon: string;
  public title: string;
  public quantity: string;
  public date: string;
  public get deadLine(): string {
    return '';
  }
  public checked: boolean;
}
