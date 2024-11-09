import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";
import { RegistrarLoginComponent } from "./registrar-login/registrar-login.component";


const routes:Routes=[
    {path:"",component:PaginainicialComponent},
    { path: 'Registrar', component: RegistrarLoginComponent }, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }