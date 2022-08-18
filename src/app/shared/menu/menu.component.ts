import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Charts', 
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          {label: 'Bars', icon: 'pi pi-fw pi-download', routerLink: 'charts/bars' },
          {label: 'Double bars', icon: 'pi pi-fw pi-caret-up', routerLink: 'charts/double-barchart' },
          {label: 'Doughnut', icon: 'pi pi-fw pi-circle', routerLink: 'charts/doughnut' },
          {label: 'Http doughnut', icon: 'pi pi-fw pi-cloud-download', routerLink: 'charts/doughnut-http'},
        ]
      },
  ];
  }

}
