import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { ReporteClientesComponent } from "./reporte-clientes/reporte-clientes.component";


const routes:Routes=[
    {path:"",component:PaginainicialComponent},
    { path: 'PaginaInicial', component: PaginainicialComponent }, 
    { path: 'ReporteCliente', component: ReporteClientesComponent }, 


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }