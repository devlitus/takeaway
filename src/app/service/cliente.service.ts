import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http: HttpClient) { }

  getClientes(): Observable<any> {
    return this._http.get(URL_SERVICE + '/cliente')
    .pipe(map((res: any) => {
      console.log(res);
    }));
  }
}
