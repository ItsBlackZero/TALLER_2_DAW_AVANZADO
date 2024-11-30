import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrl: './solicitar-cita.component.css'
})
export class SolicitarCitaComponent {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private citasService: CitasService) {
    this.citaForm = this.fb.group({
      fecha: [null, Validators.required],
      hora: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
    this.citaForm = this.fb.group({
      fecha: [null, Validators.required],
      hora: ['', Validators.required],
    });
  }

  agendarCita(): void {
    if (this.citaForm.valid) {
      this.citasService.agregarCita(this.citaForm.value).subscribe({
        next: () => alert('Cita agendada correctamente'),
        error: () => alert('Error al agendar la cita'),
      });
    }
  }
}
