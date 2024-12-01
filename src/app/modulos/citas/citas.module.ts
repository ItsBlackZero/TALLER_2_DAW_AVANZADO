import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CitasDashboardComponent } from './citas-dashboard/citas-dashboard.component'; 
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { ActualizarCitasComponent } from './actualizar-citas/actualizar-citas.component';



@NgModule({
  declarations: [
    SolicitarCitaComponent,
    CitasDashboardComponent,
    ActualizarCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [
  ],
  exports: [
    ActualizarCitasComponent,
    CitasDashboardComponent,
    SolicitarCitaComponent
  ]
})
export class CitasModule { }
