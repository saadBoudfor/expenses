import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  public size: number;
  @Input()
  public align: string;


  public leftSideClass: string;
  public middleSideClass: string;
  public RightSideClass: string;

  ngOnInit() {
    this.leftSideClass = '';
    this.middleSideClass = '';
    this.RightSideClass = '';

    if (this.size > 0 && this.size <= 12) {
      const otherContentSize = 12 - this.size;
      switch (this.align) {
        case 'left':
          this.leftSideClass = 'hide';
          this.middleSideClass = this._getClassName(otherContentSize);
          this.RightSideClass = 'col-' + otherContentSize + '-sm';
          break;
        case 'right':
          this.RightSideClass = 'hide';
          this.leftSideClass = this._getClassName(otherContentSize);
          this.middleSideClass = this._getClassName(this.size);
          break;
        case 'middle':
          this.RightSideClass = this._getClassName(otherContentSize / 2);
          this.leftSideClass = this._getClassName(otherContentSize / 2);
          this.middleSideClass = this._getClassName(this.size);
          break;
      }
    } else {
      throw new Error("size incorrect: " + this.size);
    }
  }

  private _getClassName(columnSize: number): string {
    return 'col-' + columnSize + '-sm';
  }

}
