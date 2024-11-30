import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Cita, CitasService } from '../citas.service';


@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrl: './gestionar-citas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestionarCitasComponent {
  citas: Cita[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(): void {
    this.citasService.getCitas().subscribe(data => {
      this.citas = data;
    });
  }

  cancelarCita(id: number): void {
    this.citasService.eliminarCita(id).subscribe(() => {
      this.obtenerCitas();
      alert('Cita cancelada');
    });
  }

  reprogramarCita(id: number): void {
    const nuevaFecha = prompt('Nueva fecha (YYYY-MM-DD):');
    const nuevaHora = prompt('Nueva hora (HH:MM):');
    if (nuevaFecha && nuevaHora) {
      this.citasService.reprogramarCita(id, { fecha: nuevaFecha, hora: nuevaHora }).subscribe(() => {
        this.obtenerCitas();
        alert('Cita reprogramada');
      });
    }
  }
}
