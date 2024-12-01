import { Component, inject } from '@angular/core';
import { DatosCompartidosService } from '../../../datos-compartidos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolicitarCitaComponent } from '../solicitar-cita/solicitar-cita.component';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarCitasComponent } from '../actualizar-citas/actualizar-citas.component';


@Component({
  selector: 'app-citas-dashboard',
  templateUrl: './citas-dashboard.component.html',
  styleUrl: './citas-dashboard.component.css'
})
export class CitasDashboardComponent {

  constructor(private datosCompartidos: DatosCompartidosService,  private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.datosCompartidos.citaData$.subscribe(data => {
      if (data) {
        const newId = this.Cita.length > 0 ? Math.max(...this.Cita.map(c => c.id)) + 1 : 1;
        this.Cita = [...this.Cita, { id: newId, ...data }];
      }
    });
  }  
  
  readonly dialog = inject(MatDialog);
  Cita = [
    { id: 1, doctor: 'Dr. Juan Perez García', especialidad: 'Medicina general', fecha: '2024-12-01', hora: '10:00' },
    { id: 2, doctor: 'Dra. María Salazar Villamar', especialidad: 'Ginecología', fecha: '2024-12-03', hora: '02:00' },
    { id: 3, doctor: 'Dr. Marcos Torres Baque', especialidad: 'Pediatría', fecha: '2024-12-05', hora: '09:00' }
  ];  

  displayedColumns: string[] = ['doctor', 'especialidad', 'fecha', 'hora', 'acciones'];

  solicitarCita(){
    const dialogRef= this.dialog.open(SolicitarCitaComponent, {width: "400px"});
  }

  editar(element: any) {
    const dialogRef = this.dialog.open(ActualizarCitasComponent, {
      width: '400px',
      data: element
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.Cita.findIndex(c => c.id === element.id);
        if (index !== -1) {
          this.Cita = [
            ...this.Cita.slice(0, index),
            { ...this.Cita[index], ...result },
            ...this.Cita.slice(index + 1)
          ];
        }
      }
    });
  }
  eliminar(id: number) {
    if (confirm("Está a punto de eliminar el registro")) {
      this.Cita = this.Cita.filter(c => c.id !== id);
      this.snackBar.open('Registro eliminado con éxito', 'Cerrar', { duration: 1000 });
    }
  }  
}
