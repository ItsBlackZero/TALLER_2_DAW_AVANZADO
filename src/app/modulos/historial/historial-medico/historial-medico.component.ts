import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface HistorialMedico {
  id: number;
  nombrePaciente: string;
  diagnostico: string;
  fechaConsulta: string;
}

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.css'
})

export class HistorialMedicoComponent {
  historialForm: FormGroup;
  historiales: HistorialMedico[] = [];
  editar: boolean = false;
  historialEditar: HistorialMedico | null = null;

  // Variable para controlar la visibilidad del componente
  isVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.historialForm = this.fb.group({
      nombrePaciente: ['', [Validators.required]],
      diagnostico: ['', [Validators.required]],
      fechaConsulta: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Cargar datos de ejemplo al inicializar (simula un servicio)
    this.historiales = [
      { id: 1, nombrePaciente: 'Juan Pérez', diagnostico: 'Gripe', fechaConsulta: '2024-01-15' },
      { id: 2, nombrePaciente: 'Ana Gómez', diagnostico: 'Dolor de cabeza', fechaConsulta: '2024-02-10' },
    ];
  }

  // Método para agregar un nuevo historial
  agregarHistorial(): void {
    if (this.historialForm.valid) {
      const nuevoHistorial: HistorialMedico = {
        id: this.historiales.length + 1,  // Asigna un ID secuencial
        ...this.historialForm.value
      };
      this.historiales.push(nuevoHistorial);
      this.historialForm.reset();
    }
  }

  // Método para editar un historial
  editarHistorial(historial: HistorialMedico): void {
    this.editar = true;
    this.historialEditar = historial;
    this.historialForm.setValue({
      nombrePaciente: historial.nombrePaciente,
      diagnostico: historial.diagnostico,
      fechaConsulta: historial.fechaConsulta
    });
  }

  // Método para actualizar un historial editado
  actualizarHistorial(): void {
    if (this.historialForm.valid && this.historialEditar) {
      const index = this.historiales.findIndex(h => h.id === this.historialEditar?.id);
      if (index !== -1) {
        this.historiales[index] = { ...this.historialForm.value, id: this.historialEditar.id };
      }
      this.cancelarEdicion();
    }
  }

  // Método para eliminar un historial
  eliminarHistorial(id: number): void {
    this.historiales = this.historiales.filter(h => h.id !== id);
  }

  // Método para cancelar la edición
  cancelarEdicion(): void {
    this.editar = false;
    this.historialForm.reset();
  }

  // Método para alternar la visibilidad del componente
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
