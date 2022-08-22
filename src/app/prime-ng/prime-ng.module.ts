import { NgModule } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';





@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
