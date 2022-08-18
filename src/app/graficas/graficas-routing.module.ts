import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoubleComponent } from './pages/barras-double/barras-double.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bars', component: BarrasComponent },
      { path: 'double-barchart', component: BarrasDoubleComponent },
      { path: 'doughnut', component: DoughnutComponent },
      { path: 'doughnut-http', component: DoughnutHttpComponent },
      { path: 'barchart', component: BarChartComponent },
      { path: '**', redirectTo: 'bars' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
