import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistarComponent } from './componentes/registar/registar.component';
import { ApostarComponent } from './componentes/apostar/apostar.component';

const routes: Routes = [
  { path: '', component: ApostarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registar', component: RegistarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
