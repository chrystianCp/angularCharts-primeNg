import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

   // Doughnut
   public doughnutChartType: ChartType = 'doughnut';
   public doughnutChartLabels: string[] = [];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: [],
     datasets: []
   };

  constructor( private gs: GraficasService ) { }

  ngOnInit(): void {
    this.gs.getuUsersSM()
        .subscribe( ({labels, values}) => {
          this.doughnutChartData.labels = labels;
          this.doughnutChartData.datasets = values;
        });             
  }   
}