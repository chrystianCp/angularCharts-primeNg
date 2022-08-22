import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar'; 

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#6665A8', hoverBackgroundColor: '#F56EDC' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#EBF57B', hoverBackgroundColor: '#A84396'},
      { data: [ 18, 78, 30, 63, 82, 29, 10 ], label: 'Series C', backgroundColor: '#8887F5', hoverBackgroundColor: '#F56EDC' },
    ]
  };
  public barChartLegend = true;

  constructor() { }

 

  randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
    ]  

    this.chart?.update();
  }

}
