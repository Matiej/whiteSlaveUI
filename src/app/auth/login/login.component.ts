import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'matiej';
  password: string = 'test123';
  inputLoginPlaceHolder: string = 'wpisz login';
  inputPasswordPlaceHolder: string = 'wpisz haslo';
  loginFormular: FormGroup;
  invalidLogin: boolean = false;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.loginFormular = new FormGroup({
      inputUserLogin: new FormControl(null, Validators.required),
      inputPassword: new FormControl(null, Validators.required),
    });
  }

  submitLoginForm(): void {
    const login: string = this.loginFormular.value.inputUserLogin;
    const password: string = this.loginFormular.value.inputPassword;
    this.checkLogin(login, password);
  }

  private checkLogin(login: string, password: string) {
    if (this.authService.authenticate(login, password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }



}
