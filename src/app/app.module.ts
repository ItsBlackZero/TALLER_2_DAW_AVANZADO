import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";  // Solo aquí, en AppModule
import { RouterOutlet } from "@angular/router";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicVarService } from "./publicvar.service";
import { MatToolbarModule } from "@angular/material/toolbar";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SeguridadModule } from "./modulos/seguridad/seguridad.module";
import { CitasModule } from "./modulos/citas/citas.module";
import { HistorialModule } from "./modulos/historial/historial.module";
import { ReportesModule } from "./modulos/reportes/reportes.module";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PiePaginaComponent,
        PaginainicialComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        RouterOutlet,
        AppRoutingModule,
        SeguridadModule,
        CitasModule,
        HistorialModule,
        ReportesModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [
        PublicVarService,
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
