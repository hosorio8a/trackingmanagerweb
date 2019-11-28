import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ChartColor, ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
  @Input() item;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['XXXXXX'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1.9900], label: 'SL', backgroundColor: '#d53a4b' },
    { data: [1.9999], label: 'Price', backgroundColor: '#6970d5'},
    { data: [2.0076], label: 'TP1', backgroundColor: '#f38b4a' },
    { data: [2.0100], label: 'TP2', backgroundColor: '#56d798' }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.item);
    this.barChartLabels = [this.item.symbol];
    this.barChartData = [
      { data: [this.item.stoploss], label: 'SL', backgroundColor: '#d53a4b' },
      { data: [this.item.price], label: 'Price', backgroundColor: '#6970d5'},
      { data: [this.item.takeprofit1], label: 'TP1', backgroundColor: '#f38b4a' },
      { data: [this.item.takeprofit2], label: 'TP2', backgroundColor: '#56d798' }
    ];
  }

}
