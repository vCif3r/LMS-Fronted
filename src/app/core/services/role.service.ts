import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private url = "http://127.0.0.1:8000/api/v1/roles/"

  constructor(private _http: HttpClient) { }


  findAll(): Observable<Role[]>{
    return this._http.get<Role[]>(this.url)
  }

  save(student: Role): Observable<Role>{
    return this._http.post<Role>(this.url, student)
  }

  getRoleID(id: any){
    return this._http.get<Role>(`${this.url}${id}`)
  }
}
