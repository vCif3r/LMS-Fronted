import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  private url = "http://localhost:3000/api/students"

  constructor(private _http: HttpClient) { }

  updateStudentsList() { // update list automatiquement
    this.findAll().subscribe(students => {
      this.studentsSubject.next(students);
    });
  }

  findAll(): Observable<Student[]>{
    return this._http.get<Student[]>(this.url)
  }

  saveStudent(student: Student): Observable<Student>{
    return this._http.post<Student>(this.url, student)
  }

  getStudentbyID(id: any){
    return this._http.get<Student>(`${this.url}/${id}`)
  }
}
