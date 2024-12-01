import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ReporteUsuariosComponent } from './reporte-usuarios/reporte-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path: 'actualizar-usuario', component: ActualizarUsuarioComponent},
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent},
  {path: '', component: ReporteUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
