import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-citas',
  templateUrl: './actualizar-citas.component.html',
  styleUrl: './actualizar-citas.component.css'
})
export class ActualizarCitasComponent {
  citaForm: FormGroup;

  constructor(private form: FormBuilder,
    private dialogRef: MatDialogRef<ActualizarCitasComponent>, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
) {
    this.citaForm = this.form.group({
      doctor: [data.doctor],
      especialidad: [data.especialidad],
      fecha: [data.fecha],
      hora: [data.hora]
    });
  }

  guardar() {
    if (this.citaForm.valid) {
      this.dialogRef.close(this.citaForm.value); 
      this.router.navigate(['/citas']);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
