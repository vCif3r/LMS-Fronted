import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../model/grade';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private gradesSubject = new BehaviorSubject<Grade[]>([]);
  grades$ = this.gradesSubject.asObservable();

  private url = "http://localhost:3000/api/grades"

  constructor(private _http: HttpClient) { }

  updateGradesList() { // update list automatiquement
    this.findAll().subscribe(grades => {
      this.gradesSubject.next(grades);
    });
  }

  findAll(): Observable<Grade[]>{
    return this._http.get<Grade[]>(this.url)
  }

  save(grade: Grade): Observable<Grade>{
    return this._http.post<Grade>(this.url, grade)
  }

}
