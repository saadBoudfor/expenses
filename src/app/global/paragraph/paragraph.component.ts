import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input()
  public style: string;

  constructor() { }

  ngOnInit() {
  }

}
