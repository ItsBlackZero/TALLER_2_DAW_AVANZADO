import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface PeriodicElement{
    cedula: string;
    nombres: string;
    apellidos: string;
    edad: number;
    correo: string;
    departamento: string;

}

@Injectable()
export class PublicVarService{
    data_incial: PeriodicElement = { cedula: "1", nombres: "1", apellidos: "1", edad:0 , correo:"1", departamento:"1" }
    public logeado$ = new BehaviorSubject<boolean>(false);
    public datosRegistro$ = new  BehaviorSubject<PeriodicElement>(this.data_incial);

    constructor(){
        
    }
}
