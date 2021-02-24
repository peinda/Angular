import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ListProfilService {
  public baseUrl = 'https://127.0.0.1:8000';
  public profilUrl = '/api/admin/profils';
  public userprofilUrl = '/api/admin/profils/';
  helpers: any;

  constructor(private http: HttpClient) {}
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };
  // tslint:disable-next-line:typedef
  decodeToken(token: any){
    this.helpers = new JwtHelperService();
    return this.helpers.decodeToken(token);
  }
  // tslint:disable-next-line:typedef
  getAllProfil(){
    return this.http.get<any>( this.baseUrl + this.profilUrl , this.httpOption);
  }
  // tslint:disable-next-line:typedef
  getUserProfilbyId(id: any, user: string){
    // @ts-ignore
    return this.http.get<any>( this.baseUrl + this.userprofilUrl + id + '/users');
  }
  // tslint:disable-next-line:typedef
  archivedProfil(id: any){
    return this.http.delete(this.baseUrl + this.userprofilUrl + id);
  }
}
