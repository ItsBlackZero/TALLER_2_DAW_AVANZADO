import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-login',
  templateUrl: './registrar-login.component.html',
  styleUrls: ['./registrar-login.component.css']
})
export class RegistrarLoginComponent {
  hideClave = true;  // Control para ocultar/mostrar la clave
  hideConfirmClave = true; // Control para ocultar/mostrar confirmar clave
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly clave = new FormControl('', [Validators.required, Validators.minLength(6)]);
  readonly confirmarClave = new FormControl('', [Validators.required]);
  errorMessage = '';  // Mensaje de error de email
  claveCoincideError = '';  // Error si las claves no coinciden

  constructor(private router: Router) {
    // Observador que se activa cuando el usuario cambia el campo "Repite tu contraseña"
    this.confirmarClave.valueChanges.subscribe(() => this.verificarClaveCoincide());
  }

  // Método para volver a la página principal
  Volver() {
    this.router.navigateByUrl('');
  }

  // Verifica que las claves coincidan
  verificarClaveCoincide() {
    if (this.clave.value !== this.confirmarClave.value) {
      this.claveCoincideError = 'Las claves no coinciden';
    } else {
      this.claveCoincideError = '';
    }
  }

  registrarUsuario() {
    if (this.email.valid && this.clave.valid && this.confirmarClave.valid && this.clave.value === this.confirmarClave.value) {
      console.log('Registrando usuario:', this.email.value);
      this.router.navigateByUrl(''); 
    } else {
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
      this.errorMessage = 'Ingresa un email';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Email no válido';
    } else {
      this.errorMessage = '';
    }
  }
}
