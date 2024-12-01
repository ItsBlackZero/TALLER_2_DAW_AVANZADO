import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  private reporteDataSource = new BehaviorSubject<any>(null);
  reporteData$ = this.reporteDataSource.asObservable();

  private citaDataSource = new BehaviorSubject<any>(null);
  citaData$ = this.citaDataSource.asObservable();

  setReporteData(data: any) {
    this.reporteDataSource.next(data);
  }

  setCitaData(data: any) {
    this.citaDataSource.next(data);
  }
  
  constructor() { }
}
