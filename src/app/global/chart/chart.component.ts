import {Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;
  chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Line Dataset',
            fill: false,
            borderColor: '#808080',
            data: [25, 25, 25, 25],
            type: 'line'
          }, {
            label: 'Bar Dataset',
            backgroundColor: '#5EA8A7',
            data: [10, 20, 30, 40],
          },
        ],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
