import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CitasService } from './citas.service';
import { CitasDashboardComponent } from './citas-dashboard/citas-dashboard.component'; 
import {MatCardModule} from '@angular/material/card';
 

@NgModule({
  declarations: [
    SolicitarCitaComponent,
    GestionarCitasComponent,
    CitasDashboardComponent
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
    MatCardModule

  ],
  providers: [
    CitasService
],
})
export class CitasModule { }
