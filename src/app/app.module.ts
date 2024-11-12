import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegistrarLoginComponent } from "./registrar-login/registrar-login.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { ReporteClientesComponent } from "./reporte-clientes/reporte-clientes.component";

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PiePaginaComponent,
        PaginainicialComponent,
        LoginComponent,
        RegistrarLoginComponent,
        ReporteClientesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, // Cambiado para habilitar animaciones
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
        MatTableModule
    ],
    providers: [
        PublicVarService,
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
