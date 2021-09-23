import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { URL_SERVICE } from '../config/config';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A ocurrido un error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend devuelve el codigo ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.');
  }
  getCategoria(): Observable<any> {
    return this.http.get(URL_SERVICE + '/categoria')
    .pipe(map((res: any) => {
      if (res.ok) {
        // console.log(res);
        return res.categoria;
      }
      return res.message;
    }),
    catchError(this.handleError));
  }
}
