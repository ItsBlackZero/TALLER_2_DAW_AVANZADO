import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';

const routes: Routes = [
  {
    path: '', component: HistorialMedicoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
