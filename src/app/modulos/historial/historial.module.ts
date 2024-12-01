import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';


@NgModule({
  declarations: [
    HistorialMedicoComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HistorialMedicoComponent
  ]
})
export class HistorialModule { }
