import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-modal',
  standalone: true,
  imports: [],
  templateUrl: './registro-modal.component.html',
  styleUrl: './registro-modal.component.css'
})
export class RegistroModalComponent {

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroModalComponent>
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      diagnostico: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      console.log('Formulario de registro:', this.registroForm.value);
      // Aquí puedes manejar la lógica para guardar el registro
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
