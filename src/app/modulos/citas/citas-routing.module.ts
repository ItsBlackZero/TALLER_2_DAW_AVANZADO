import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasDashboardComponent } from './citas-dashboard/citas-dashboard.component';

const routes: Routes = [
  {
    path: '', component: CitasDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
