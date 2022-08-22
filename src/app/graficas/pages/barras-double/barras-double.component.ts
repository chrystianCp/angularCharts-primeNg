import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-double',
  templateUrl: './barras-double.component.html',
  styles: [
  ]
})
export class BarrasDoubleComponent implements OnInit {
  
  
  
  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [100,200,300,400,500], label: 'Vendedor A' },
      { data: [50,250,30,450,200], label: 'Vendedor B' },
    ]
  };
  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: '#1EA865' },
    ]
  };
  
  
  
    
  ngOnInit(): void {
   
  }
}
