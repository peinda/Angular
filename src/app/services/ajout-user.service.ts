import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutUserService {
  public baseUrl = 'https://127.0.0.1:8000';
  public ajoutuserUrl = '/api/admin/users';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  addUser(data: any){
    return this.http.post<any>(this.baseUrl + this.ajoutuserUrl, data);

  }
}
