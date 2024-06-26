import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDetail } from '../model/courseDetail';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  private url = "http://localhost:3000/api/course-detail"
  constructor(private _http: HttpClient) { }

  listCourses(){
    return this._http.get<CourseDetail[]>(this.url)
  }

  getCourse(id:any){
    return this._http.get<CourseDetail>(`${this.url}/${id}`)
  }
}
