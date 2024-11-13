import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';

@Component({
  selector: 'app-reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.css']  // Cambié styleUrl a styleUrls
})
export class ReporteClientesComponent {

  readonly dialog = inject(MatDialog);
  // Datos de ejemplo para la tabla
  ReporteCliente = [
    { id: 1, name: 'Juan', edad: 22, genero: 'Masculino', email: 'juan@email.com', telefono: '0958842174',servicio_prestado: 'Medicina general', fecha_registro: '2024-01-10' },
    { id: 2, name: 'Miguel', edad: 22, genero: 'Masculino', email: 'miguel@email.com', telefono: '0923852674',servicio_prestado: 'Pediatria', fecha_registro: '2023-12-20' },
    { id: 3, name: 'Sebastian', edad: 25, genero: 'Masculino', email: 'sebastian@email.com', telefono: '0958142189',servicio_prestado: 'Ginecologia', fecha_registro: '2024-02-15' }
  ];

  // Columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['id', 'name', 'edad', 'genero', 'email', 'telefono','servicio_prestado', 'fecha_registro'];

  registrarUsuario(){
    const dialogRef= this.dialog.open(RegistrarUsuarioComponent, {width: "400px"});
  }
}