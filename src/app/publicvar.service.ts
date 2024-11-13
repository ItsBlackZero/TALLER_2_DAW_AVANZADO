import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface PeriodicElement{
    name: string;
    edad: number;
    genero: string;
    email: string;
    telefono: string;
    servicio_prestado: string;
    fecha_registro: string;
}

@Injectable()
export class PublicVarService{
    data_incial: PeriodicElement = { name: "*", edad: 0, genero: "*", email:"*" , telefono:"*", servicio_prestado:"*", fecha_registro:"*" }
    public logeado$ = new BehaviorSubject<boolean>(false);
    public datosActualizar$ = new  BehaviorSubject<PeriodicElement>(this.data_incial);

    constructor(){
        
    }
}
