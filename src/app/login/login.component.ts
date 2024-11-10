import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { PublicVarService } from '../publicvar.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrarLoginComponent } from '../registrar-login/registrar-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  hide = signal(true);
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly clave = new FormControl('', [Validators.required]);
  errorMessage = signal('');

  constructor(private router: Router, private miServicioEjecutor: PublicVarService, private dialogRef: MatDialogRef<LoginComponent>) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  CerarDialogo(): void {
    this.dialogRef.close();
  }

  togglePasswordVisibility() {
    this.hide.set(!this.hide());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Ingresa un email');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email no válido');
    } else {
      this.errorMessage.set('');
    }
  }

  iniciarsesion() {
    alert(`Presionando sobre el botón aceptar ${this.email.value}`);
    this.miServicioEjecutor.logeado$.next(true);
    console.log('Navegando a /Registrar');
    this.router.navigateByUrl('/Registrar');
    this.dialogRef.close();
  }
  readonly dialog = inject(MatDialog);

  Registrar() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegistrarLoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }
}