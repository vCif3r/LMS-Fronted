import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<User[]>([]);
  students$ = this.studentsSubject.asObservable();

  private url = "http://127.0.0.1:8000/api/v1/students/"

  constructor(private _http: HttpClient) { }

  updateStudentsList() { // update list automatiquement
    this.findAll().subscribe(students => {
      this.studentsSubject.next(students);
    });
  }

  findAll(): Observable<User[]>{
    return this._http.get<User[]>(this.url)
  }

  saveStudent(student: User): Observable<User>{
    return this._http.post<User>(this.url, student)
  }

  getStudentbyID(id: any){
    return this._http.get<User>(`${this.url}/${id}`)
  }
}
