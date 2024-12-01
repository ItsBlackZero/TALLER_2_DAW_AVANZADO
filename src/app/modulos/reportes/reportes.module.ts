import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';  
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';  
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReporteUsuariosComponent } from './reporte-usuarios/reporte-usuarios.component';


@NgModule({
  declarations: [
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    ReporteUsuariosComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    ReporteUsuariosComponent
  ]
})
export class ReportesModule { }
