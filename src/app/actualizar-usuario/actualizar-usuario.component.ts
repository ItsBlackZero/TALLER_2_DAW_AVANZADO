import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosCompartidosService } from '../datos-compartidos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PublicVarService } from '../publicvar.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private form: FormBuilder,
    private datosCompartidos: DatosCompartidosService, 
    private dialogRef: MatDialogRef<ActualizarUsuarioComponent>, 
    private router: Router, private miServicioEjecutor: PublicVarService,     
    @Inject(MAT_DIALOG_DATA) public data: any//recibir datos
) {
    this.usuarioForm = this.form.group({
      name: [data.name],
      edad: [data.edad],
      genero: [data.genero],
      email: [data.email],
      telefono: [data.telefono],
      servicio_prestado: [data.servicio_prestado],
      fecha_registro: [data.fecha_registro]
    });
  }

  guardar() {
    if (this.usuarioForm.valid) {
      this.dialogRef.close(this.usuarioForm.value);  // Devolvemos el formulario actualizado
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

}
