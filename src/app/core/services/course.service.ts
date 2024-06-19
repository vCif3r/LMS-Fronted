import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url = "http://localhost:3000/courses"
  constructor(private _http: HttpClient) { }

  listCourses(){
    return this._http.get<Course[]>(this.url)
  }

  getCourse(id:any){
    return this._http.get<Course>(`${this.url}/${id}`)
  }
}
