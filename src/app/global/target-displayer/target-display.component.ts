import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'target-display',
  templateUrl: './target-display.component.html',
  styleUrls: ['./target-display.component.scss']
})
/**
 *  Target display component.
 *  Show the current and target expense in a pie chart.
 *  @author: boudfor saad
 *  @version: 1.0
 *  @date: 17/04/2019
 *  @Input: target amount, current amount
 *  @Output: no input.
 */
export class TargetDisplayComponent {
  @Input()
  public target: number = 0;

  @Input()
  public current: number = 0;

  get progress(): string {
    return Math.round(this.current * 100 / this.target) + '%';
  }

}
