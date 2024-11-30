import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { CitasDashboardComponent } from './citas-dashboard/citas-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CitasDashboardComponent,
    children: [
      { path: 'gestionar-citas', component: GestionarCitasComponent },
      { path: 'solicitar-cita', component: SolicitarCitaComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
