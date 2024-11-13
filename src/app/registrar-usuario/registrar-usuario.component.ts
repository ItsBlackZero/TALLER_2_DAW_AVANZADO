import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../datos-compartidos.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private form: FormBuilder,private datosCompartidos: DatosCompartidosService, private dialogRef: MatDialogRef<RegistrarUsuarioComponent>, private router: Router) {
    this.usuarioForm = this.form.group({
      name: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      genero: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      servicioPrestado: ['', Validators.required],
      fechaRegistro: ['', Validators.required]
    });
  }
  enviar() {
      
      if (this.usuarioForm.valid) {
        this.datosCompartidos.setUserData(this.usuarioForm.value);
        this.dialogRef.close();
        this.router.navigate(['/ReporteCliente']);
      }
    }
}
