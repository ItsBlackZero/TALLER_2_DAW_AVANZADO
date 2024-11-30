import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";  // Solo aquí, en AppModule
import { RouterOutlet } from "@angular/router";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Solo una vez aquí
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { PublicVarService } from "./publicvar.service";
import { MatDialogModule } from "@angular/material/dialog";
import { LoginComponent } from "./login/login.component";
import { MatTableModule } from "@angular/material/table";
import { RegistrarLoginComponent } from "./registrar-login/registrar-login.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { ReporteClientesComponent } from "./reporte-clientes/reporte-clientes.component";
import { RegistrarUsuarioComponent } from "./registrar-usuario/registrar-usuario.component";
import { MatSelectModule }  from '@angular/material/select';
import { ActualizarUsuarioComponent } from "./actualizar-usuario/actualizar-usuario.component";
import { HistorialMedicoComponent } from "./historial-medico/historial-medico.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PiePaginaComponent,
        PaginainicialComponent,
        LoginComponent,
        RegistrarLoginComponent,
        ReporteClientesComponent,
        RegistrarUsuarioComponent,
        ActualizarUsuarioComponent,
        HistorialMedicoComponent
    ],
    imports: [
        BrowserModule,  // Solo aquí en AppModule
        BrowserAnimationsModule,  // Sólo una vez, no duplicado
        RouterOutlet,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule, 
        MatDialogModule,
        MatTableModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule,
        MatListModule,
    ],
    providers: [
        PublicVarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
