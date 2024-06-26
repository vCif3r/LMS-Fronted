import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Enrollement } from '../model/enrollement';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private url = "http://localhost:3000/api/enrollments"
  constructor(private _http: HttpClient) { }

  listAll(){
    return this._http.get<Course[]>(this.url)
  }

  ListActivesByIdStudent(id:any){
    return this._http.get<Enrollement[]>(`${this.url}/active/student/${id}`)
  }

  ListByIdStudent(id:any){
    return this._http.get<Enrollement[]>(`${this.url}/student/${id}`)
  }
}
