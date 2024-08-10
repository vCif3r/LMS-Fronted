import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachersSubject = new BehaviorSubject<User[]>([]);
  teachers$ = this.teachersSubject.asObservable();

  private url = "http://127.0.0.1:8000/api/v1/teachers/"

  constructor(private _http: HttpClient) { }

  updateTeachersList() { // update list automatiquement
    this.findAll().subscribe(teachers => {
      this.teachersSubject.next(teachers);
    });
  }

  findAll(): Observable<User[]>{
    return this._http.get<User[]>(this.url)
  }

  saveteacher(student: User): Observable<User>{
    return this._http.post<User>(this.url, student)
  }
}
