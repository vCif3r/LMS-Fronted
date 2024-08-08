import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teacher } from '../model/teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachersSubject = new BehaviorSubject<Teacher[]>([]);
  teachers$ = this.teachersSubject.asObservable();

  private url = "http://127.0.0.1:8000/api/v1/teachers/"

  constructor(private _http: HttpClient) { }

  updateTeachersList() { // update list automatiquement
    this.findAll().subscribe(teachers => {
      this.teachersSubject.next(teachers);
    });
  }

  findAll(): Observable<Teacher[]>{
    return this._http.get<Teacher[]>(this.url)
  }

  saveteacher(student: Teacher): Observable<Teacher>{
    return this._http.post<Teacher>(this.url, student)
  }
}
