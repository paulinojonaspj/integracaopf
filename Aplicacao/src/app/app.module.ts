import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './componentes/login/login.component';
import { RegistarComponent } from './componentes/registar/registar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApostarComponent } from './componentes/apostar/apostar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistarComponent,
    ApostarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
