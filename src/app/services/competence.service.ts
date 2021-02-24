import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  public baseUrl = 'https://127.0.0.1:8000';
  public competUrl = '/api/admin/competences';
  public grcompetUrl = '/api/admin/grpecompetences';
  helpers: any;

  constructor(private http: HttpClient) {}
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };
  // tslint:disable-next-line:typedef
  getCompetence(){
    return this.http.get<any>( this.baseUrl + this.competUrl , this.httpOption);
  }
  // tslint:disable-next-line:typedef
  getGrpCompetence(){
    return this.http.get<any>( this.baseUrl + this.grcompetUrl , this.httpOption);
  }
  // tslint:disable-next-line:typedef
  addCompetence(comp: any){
    return this.http.post<any>( this.baseUrl + this.competUrl , comp, this.httpOption);
  }
  // tslint:disable-next-line:typedef
  addgrpCompetence(grpcomp: any){
    return this.http.post<any>( this.baseUrl + this.grcompetUrl , grpcomp, this.httpOption);
  }
}
