import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  @Input()
  public value: number;

  @Input()
  public currency: string;

  @Input()
  public animated: boolean = false;

  public before: string;
  public after: string;

  constructor() {
  }

  ngOnInit() {
    if (this.animated) {
      let number = 0;
      this._initVariables(number);
      const interval = setInterval(() => {
        this._initVariables(number);
        if (number >= this.value) {
          clearInterval(interval);
        }
        number++;
      }, 0.9)
    }
    this._initVariables(this.value);
  }

  private _initVariables(value: number) {
    let amountArray = ['0', '0'];
    try {
      amountArray = value.toString().split('.');
    } catch (error) {
      amountArray = ['0', '0'];
    }
    switch (amountArray.length) {
      case 1:
        this.before = amountArray[0];
        this.after = '0';
        break;
      case 2:
        this.before = amountArray[0];
        this.after = amountArray[1];
        break;
      default:
        this.before = '0';
        this.after = '0';
    }
    this.before = this._formatNumber(this.before);
    this.after = this._formatNumber(this.after);

  }

  private _formatNumber(value: string): string {
    let formatted: string = value;
    if (value && value.length === 1) {
      formatted = '0' + value;
    }
    return formatted;
  }

}
