import { Component, inject, OnInit } from '@angular/core';
import { PublicVarService } from '../publicvar.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  logeado = false;

  constructor(private router: Router, private miServicioEjecutor: PublicVarService) {}

  ngOnInit() {
    this.miServicioEjecutor.logeado$.subscribe(data => {
      console.log(`Esta logeado?: ${data}`);
      this.logeado = data;
    });
    if(this.logeado !=false){

    }
  }

  cerrarsesion() {
    this.miServicioEjecutor.logeado$.next(false);
    this.logeado = false;
    this.router.navigate(['/']);
  }

  readonly dialog = inject(MatDialog);

  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  openDialogReportes(){
    this.router.navigateByUrl('/ReporteCliente');

  }

  openCitas() {
    this.router.navigateByUrl('/citas');
  }
}