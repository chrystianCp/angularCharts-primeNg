import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoubleComponent } from './pages/barras-double/barras-double.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoubleComponent,
    DoughnutComponent,
    DoughnutHttpComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
