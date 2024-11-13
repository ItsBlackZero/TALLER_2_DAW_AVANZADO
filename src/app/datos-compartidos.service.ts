import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  private userDataSource = new BehaviorSubject<any>(null);
  userData$ = this.userDataSource.asObservable();
  setUserData(data: any) {
    this.userDataSource.next(data);
  }
  constructor() { }
}
