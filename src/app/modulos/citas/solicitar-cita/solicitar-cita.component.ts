import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../../../datos-compartidos.service';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrl: './solicitar-cita.component.css'
})
export class SolicitarCitaComponent {
  citaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SolicitarCitaComponent>,
    private router: Router,
    private datosCompartidos: DatosCompartidosService
  ) {
    this.citaForm = this.fb.group({
      doctor: [null, Validators.required],
      especialidad: [null, Validators.required],
      fecha: [null, Validators.required],
      hora: ['', Validators.required],
    });
  }

  agendarCita() {
    if (this.citaForm.valid) {
      const fecha = this.formatFecha(this.citaForm.value.fecha);
  
      const citaData = {
        doctor: this.citaForm.value.doctor,
        especialidad: this.citaForm.value.especialidad,
        fecha: `${fecha}`,
        hora: this.citaForm.value.hora
      };
  
      this.datosCompartidos.setCitaData(citaData);
      this.dialogRef.close();
    } else {
      console.log("Formulario inválido");
    }
  }
  

  cancelar() {
    this.dialogRef.close();
  }
  
  formatFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${anio}-${mes}-${dia}`;
  }
}
