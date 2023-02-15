import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistarComponent } from './componentes/registar/registar.component';

const routes: Routes = [
 {path:'', component:LoginComponent},
 {path:'registar', component:RegistarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
