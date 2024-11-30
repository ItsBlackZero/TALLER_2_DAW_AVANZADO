import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Cita {
    id: number;
    fecha: string;
    hora: string;
}

@Injectable()
export class CitasService {
  private citas = [
    { id: 1, fecha: '2024-12-01', hora: '10:00 AM' },
    { id: 2, fecha: '2024-12-02', hora: '02:00 PM' },
  ];

  constructor() {}

  // Obtener todas las citas
  getCitas(): Observable<Cita[]> {
    return of([...this.citas]);
  }

  // Agregar una cita nueva
  agregarCita(cita: Partial<Cita>): Observable<Cita> {
    const nuevaCita: Cita = {
      id: this.citas.length + 1,
      fecha: cita.fecha || '',
      hora: cita.hora || '',
    };
    this.citas.push(nuevaCita);
    return of(nuevaCita);
  }

  // Eliminar una cita
  eliminarCita(id: number): Observable<void> {
    this.citas = this.citas.filter(cita => cita.id !== id);
    return of();
  }

  // Reprogramar una cita
  reprogramarCita(id: number, nuevaCita: Partial<Cita>): Observable<Cita> {
    const index = this.citas.findIndex(cita => cita.id === id);
    if (index !== -1) {
      this.citas[index] = { ...this.citas[index], ...nuevaCita };
    }
    return of(this.citas[index]);
  }
}
