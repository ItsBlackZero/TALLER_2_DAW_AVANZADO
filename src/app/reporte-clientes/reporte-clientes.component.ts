import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';
import { DatosCompartidosService } from '../datos-compartidos.service';
import { ActualizarUsuarioComponent } from '../actualizar-usuario/actualizar-usuario.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.css']  // Cambié styleUrl a styleUrls
})
export class ReporteClientesComponent {

  userData: any;

  constructor(private datosCompartidos: DatosCompartidosService,  private snackBar: MatSnackBar,) {}

  ngOnInit(): void {

    this.datosCompartidos.userData$.subscribe(data => {
      if (data) {
        const newId = this.ReporteCliente.length > 0 ? Math.max(...this.ReporteCliente.map(c => c.id)) + 1 : 1;
        this.ReporteCliente = [...this.ReporteCliente, { id: newId, ...data }];
      }
    });
  }
  
  readonly dialog = inject(MatDialog);
  ReporteCliente = [
    { id: 1, name: 'Juan', edad: 22, genero: 'Masculino', email: 'juan@email.com', telefono: '0958842174',servicio_prestado: 'Medicina general', fecha_registro: '2024-01-10' },
    { id: 2, name: 'Miguel', edad: 22, genero: 'Masculino', email: 'miguel@email.com', telefono: '0923852674',servicio_prestado: 'Pediatria', fecha_registro: '2023-12-20' },
    { id: 3, name: 'Sebastian', edad: 25, genero: 'Masculino', email: 'sebastian@email.com', telefono: '0958142189',servicio_prestado: 'Ginecologia', fecha_registro: '2024-02-15' }
  ];

  displayedColumns: string[] = ['name', 'edad', 'genero', 'email', 'telefono','servicio_prestado', 'fecha_registro', 'acciones'];

  registrarUsuario(){
    const dialogRef= this.dialog.open(RegistrarUsuarioComponent, {width: "400px"});
  }

  editar(element: any) {
    const dialogRef = this.dialog.open(ActualizarUsuarioComponent, {
      width: '400px',
      data: element  // Pasamos el cliente seleccionado como datos
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.ReporteCliente.findIndex(c => c.id === element.id);
        if (index !== -1) {
          // Crear un nuevo array para que Angular detecte el cambio
          this.ReporteCliente = [
            ...this.ReporteCliente.slice(0, index),
            { ...this.ReporteCliente[index], ...result },
            ...this.ReporteCliente.slice(index + 1)
          ];
        }
      }
    });
  }
  eliminar(id: number) {
    if (confirm("Está a punto de eliminar el registro")) {
      // Actualizar el array para eliminar el usuario por id
      this.ReporteCliente = this.ReporteCliente.filter(c => c.id !== id);
      this.snackBar.open('Registro eliminado con éxito', 'Cerrar', { duration: 1000 });
    }
  }  
}