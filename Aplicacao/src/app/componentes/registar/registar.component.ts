import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicosService } from 'src/app/servicos.service';
@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  registoForm!: FormGroup;

  constructor(private servicos: ServicosService,private http: HttpClient) { }



  ngOnInit(): void {
    this.registoForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    // Implemente a lógica de autenticação aqui
    if (this.registoForm.invalid || this.password.value != this.cpassword.value) {
      return;
    }
    const url = 'http://localhost:3004/clientes';
    const dados = {
      "nome": this.nome,
      "email": this.email,
      "password": this.password
    }
    this.http.post<any>(url, dados);
    console.log("registado");
  }

  get nome() {
    return this.registoForm.get("nome")!;
  }

  get email() {
    return this.registoForm.get("email")!;
  }

  get password() {
    return this.registoForm.get("password")!;
  }
  get cpassword() {
    return this.registoForm.get("cpassword")!;
  }

}
