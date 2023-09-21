import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm=this.formBuilder.group({
    email: ['nelson@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService) {

  }
  get email() { return this.loginForm.controls.email; }

  get password() { return this.loginForm.controls.password; }

  login() {
    if (this.loginForm.valid) {
      console.log("validando datos");
      this.loginService.login(this.loginForm.value)
      
    }
    else {

      alert('Error: Por favor, corrige los campos del formulario.');
    }
  }
  ngOnInit(): void {

  }


}
