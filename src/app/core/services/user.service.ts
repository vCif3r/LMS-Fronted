import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/users"

  constructor(private _http: HttpClient) { }

  getStudentbyID(id:any){
    return this._http.get<User>(`${this.url}/student/${id}`)
  }
}
