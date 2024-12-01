import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PublicVarService } from '../../../publicvar.service';
import { RegistrarCuentaComponent } from '../registrar-cuenta/registrar-cuenta.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
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
    if (this.email.value !== '' && this.clave.value !== '') {
    this.miServicioEjecutor.logeado$.next(true);
      this.router.navigateByUrl('/PaginaInicial');
      this.dialogRef.close();
      console.log('entro');
  }
  }
  readonly dialog = inject(MatDialog);

  Registrar() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegistrarCuentaComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }
}
