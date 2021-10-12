import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { URL_SERVICE } from "../config/config";
import { Dish, Dishes } from "../models/platos";

declare var swal: any;
@Injectable({
  providedIn: "root",
})
export class PlatoService {
  public checkoutPlato: Array<any> = [];
  constructor(public http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("A ocurrido un error:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend devuelve el codigo ${error.status}, ` +
          `body was: ${JSON.stringify(error.error.message)}`
      );
      swal(
        "Disculpen las molestias",
        "No se puede mostrar el contenido de la base de datos!",
        "error"
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      "Algo malo sucedio; Por favor, inténtelo de nuevo más tarde."
    );
  }

  getPlatos(): Observable<Dish[]> {
    return this.http.get(`${URL_SERVICE}/dishes/list`).pipe(
      map((res: Dishes) => {
        if(res.ok) return res.dishes;
      }),
      catchError(this.handleError)
    );
  }
  checkout(plato: Dish) {
    if (plato !== undefined) {
      return this.checkoutPlato.push(plato);
    }
  }
}
