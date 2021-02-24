import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helpers: any;
  public baseUrl = 'https://127.0.0.1:8000';
  public authentifUrl = '/api/login_check';
  public getUserUrl = '/api/admin/users?profil.libelle!=APPRENANT';
  public deleteUserUrl = '/api/admin/users/';
  constructor(private http: HttpClient) { }
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };
  // tslint:disable-next-line:typedef
  authentif(user: any){
    return this.http.post<any>(this.baseUrl + this.authentifUrl, user, this.httpOption);
  }
  // tslint:disable-next-line:typedef
  decodeToken(token: any){
    this.helpers = new JwtHelperService();
    return this.helpers.decodeToken(token);
  }
// tslint:disable-next-line:typedef
  getAllUser() {
  return this.http.get<any>(this.baseUrl + this.getUserUrl );
}
  // tslint:disable-next-line:typedef
  getTokenOnLocalStorage(){
    return  localStorage.getItem('token');
  }
  // tslint:disable-next-line:typedef
  archivedUser(id: any){
    return this.http.delete(this.baseUrl + this.deleteUserUrl + id);
}
  // tslint:disable-next-line:typedef
  putUserById(user: any, id: any){
    // @ts-ignore
    return this.http.post( this.baseUrl + this.deleteUserUrl + id, user);
  }
  // tslint:disable-next-line:typedef
  getUserbyId(id: any, user: string){
    // @ts-ignore
    return this.http.get<any>( this.baseUrl + this.deleteUserUrl + id);
  }
}
