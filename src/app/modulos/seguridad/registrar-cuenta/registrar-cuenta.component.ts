import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cuenta',
  templateUrl: './registrar-cuenta.component.html',
  styleUrl: './registrar-cuenta.component.css'
})
export class RegistrarCuentaComponent {
  hideClave = true;
  hideConfirmClave = true;
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly clave = new FormControl('', [Validators.required, Validators.minLength(6)]);
  readonly confirmarClave = new FormControl('', [Validators.required]);
  errorMessage = '';
  claveCoincideError = '';

  constructor(private router: Router,private dialogRef: MatDialogRef<RegistrarCuentaComponent>) {
    this.confirmarClave.valueChanges.subscribe(() => this.verificarClaveCoincide());
  }

  Volver() {
    this.dialogRef.close();
    this.router.navigateByUrl('/PaginaInicial');
  }

  verificarClaveCoincide() {
    if (this.clave.value !== this.confirmarClave.value) {
      this.claveCoincideError = 'Las contraseñas no coinciden';
    } else {
      this.claveCoincideError = '';
    }
  }

  registrarUsuario() {
    if (this.email.valid && this.clave.valid && this.confirmarClave.valid && this.clave.value === this.confirmarClave.value) {
      console.log('Registrando usuario:', this.email.value);
      this.dialogRef.close();
      this.router.navigateByUrl("PaginaInicial"); 
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }

  toggleClaveVisibility() {
    this.hideClave = !this.hideClave;
  }

  toggleConfirmClaveVisibility() {
    this.hideConfirmClave = !this.hideConfirmClave;
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'El correo electrónico es obligatorio';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Formato de correo electrónico no válido';
    } else {
      this.errorMessage = '';
    }
  }
}