import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = "http://127.0.0.1:8000/api/v1/users/"

  constructor(private _http: HttpClient) { }

  getUserbyID(id: any){
    return this._http.get<User>(`${this.url}profile/${id}/`)
  }
}
