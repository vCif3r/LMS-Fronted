import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSubject.asObservable();

  private url = "http://localhost:3000/api/courses"
  constructor(private _http: HttpClient) { }

  updateCoursesList() { // update list automatiquement
    this.listCourses().subscribe(grades => {
      this.coursesSubject.next(grades);
    });
  }

  listCourses(): Observable<Course[]>  {
    return this._http.get<Course[]>(this.url)
  }

  saveCourse(course: Course): Observable<Course>{
    return this._http.post<Course>(this.url, course)
  }

  getCourse(id:any){
    return this._http.get<Course>(`${this.url}/${id}`)
  }
}
