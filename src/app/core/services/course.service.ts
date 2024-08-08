import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSubject.asObservable();

  private url = "http://127.0.0.1:8000/api/v1/courses/"
  constructor(private _http: HttpClient) { }

  updateCoursesList() { // update list automatiquement
    this.listCourses().subscribe(grades => {
      this.coursesSubject.next(grades);
    });
  }

  listCourses(): Observable<Course[]>  {
    return this._http.get<Course[]>(this.url)
  }

  saveCourse(formData: FormData): Observable<Course> {
    return this._http.post<Course>(this.url, formData, {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    });
  }

  getCourse(id:any){
    return this._http.get<Course>(`${this.url}${id}`)
  }
}
