import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from '../model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private url = "http://127.0.0.1:8000/api/v1/enrollments/"
  constructor(private _http: HttpClient) { }

  listAll(){
    return this._http.get<Enrollment[]>(this.url)
  }

  ListActivesByIdStudent(id:any){
    return this._http.get<Enrollment[]>(`${this.url}active/student/${id}`)
  }

  ListByIdStudent(id:any){
    return this._http.get<Enrollment[]>(`${this.url}student/${id}`)
  }
}
