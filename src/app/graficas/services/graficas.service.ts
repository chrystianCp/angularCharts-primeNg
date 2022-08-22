import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  baseUrl: string = 'http://localhost:3000';

  constructor(  private http: HttpClient  ) { }

  getuUsersSM(){
    return this.http.get( `${this.baseUrl}/grafica`)
            .pipe(
              map( data => {
                const labels = Object.keys(data);
                const values =  [{data:Object.values(data)}];
                return  {labels, values};
              })
            );            
  }

}
