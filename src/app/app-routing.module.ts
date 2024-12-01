import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";


const routes:Routes=[
    {path:"",component:PaginainicialComponent},
    { path: 'PaginaInicial', component: PaginainicialComponent }, 
    { path: 'reportes', loadChildren: () => import('./modulos/reportes/reportes.module').then(m => m.ReportesModule) },
    { path: 'citas', loadChildren: () => import('./modulos/citas/citas.module').then(m => m.CitasModule) },
    { path: 'seguridad', loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule) },
    { path: 'historial-medico', loadChildren: () => import('./modulos/historial/historial.module').then(m => m.HistorialModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }