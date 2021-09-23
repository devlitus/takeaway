import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public usuario: User;
  public email: string;
  constructor(public http: HttpClient, public router: Router) { this.cargarStorage(); }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A ocurrido un error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend devuelve el codigo ${error.status}, ` +
        `body was: ${JSON.stringify(error.error.message)}`);
        // swal('Disculpen las molestias', 'No se puede mostrar el contenido de la base de datos!', 'error');
      }
      // return an observable with a user-facing error message
      return throwError(
      'Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.');
  }

  login(user: any, recordar: boolean = false): Observable<any> {
    if (recordar) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    return this.http.post(URL_SERVICE + '/login', user)
    .pipe(map((res: any) => {
      if (res.ok) {
        this.guardarStorage(res.cliente.email, res.cliente);
        this.router.navigate(['/home']);
        return res;
      }
      catchError(this.handleError);
    }));
  }
  guardarStorage(email: string, user: User) {
    localStorage.setItem('email', email);
    localStorage.setItem('usuario', JSON.stringify(user));
    this.usuario = user;
    this.email = email;
  }
  cargarStorage() {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.email = '';
      this.usuario = null;
    }
  }
  logout() {
    this.usuario = null;
    this.email = '';
    localStorage.removeItem('email');
    localStorage.removeItem('usuario');
  }
  registerUsuario(usuario: any) {
    console.log(usuario);
    return this.http.post(URL_SERVICE + '/cliente', usuario)
    .pipe(map((res: any) => {
      if (res.ok) {
        swal('!!!Enorabuena', `${res.message}`, 'success');
        this.router.navigate(['/login']);
        return res;
      }
      swal('!!!Hoooppss', `${res.message}`, 'error');
      catchError(this.handleError);
    }));
  }
}
