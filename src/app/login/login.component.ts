import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('register') register: ElementRef;
  @ViewChild('login') login: ElementRef;
  idtoregister: string = 'toregister';
  idlogin: string = 'tologin';
  href: any = this.idtoregister;
  formLogin = new FormGroup( {
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    logincheck: new FormControl(false)
  });
  formRegister = new FormGroup({
    usernameReg: new FormControl(null, Validators.required),
    emailReg: new FormControl(null, Validators.required),
    passwordReg: new FormControl(null, Validators.required),
    passRegConf: new FormControl(null, Validators.required),
  });
  constructor(public renderer: Renderer2, public service: LoginService) { }

  ngOnInit() {
  }
  getLogin(event: any) {
    let usuario: any = this.formLogin.value;
    console.log(usuario.logincheck);
    let user = {email: usuario.email, password: usuario.password};
    this.service.login(user, usuario.logincheck)
    .subscribe(res => {
      console.log(res);
    });
  }

  toregister() {
    this.renderer.addClass(this.register.nativeElement, 'toregister');
    this.renderer.addClass(this.login.nativeElement, 'tologin');
    this.renderer.setAttribute(this.login.nativeElement, 'hidden', 'hidden');
  }
  tologin() {
    this.renderer.removeClass(this.register.nativeElement, 'toregister');
    this.renderer.removeClass(this.login.nativeElement, 'tologin');
    this.renderer.removeAttribute(this.login.nativeElement , 'hidden');
  }
  registerUser(event: any) {
    let usuario: any = this.formRegister.value;
    let user = {
      nombre: usuario.usernameReg,
      email: usuario.emailReg,
      password: usuario.passwordReg
    };
    this.service.registerUsuario(user)
    .subscribe(res => {
      console.log(res);
    });
  }
}
