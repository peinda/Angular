import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
  public baseUrl = 'https://127.0.0.1:8000';
  public reftUrl = '/api/admin/referentiels';
  helpers: any;
  constructor(private http: HttpClient) {}
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };
  // tslint:disable-next-line:typedef
  getReferentiel(){
    return this.http.get<any>( this.baseUrl + this.reftUrl , this.httpOption);
  }
}
