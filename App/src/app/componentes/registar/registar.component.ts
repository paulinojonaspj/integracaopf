import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  registoForm!: FormGroup;


  onSubmit() {
    // Implemente a lógica de autenticação aqui
    if (this.registoForm.invalid || this.password.value != this.cpassword.value) {
      return;
    }

  }
  constructor() { }

  ngOnInit(): void {
    this.registoForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required)
    });
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
