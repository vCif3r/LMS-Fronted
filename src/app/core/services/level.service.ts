import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Level } from '../model/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private levelsSubject = new BehaviorSubject<Level[]>([]);
  levels$ = this.levelsSubject.asObservable();

  private url = "http://127.0.0.1:8000/api/v1/levels/"

  constructor(private _http: HttpClient) { }

  updateLevelsList() { // update list automatiquement
    this.findAll().subscribe(grades => {
      this.levelsSubject.next(grades);
    });
  }

  findAll(): Observable<Level[]>{
    return this._http.get<Level[]>(this.url)
  }

  save(grade: Level): Observable<Level>{
    return this._http.post<Level>(this.url, grade)
  }

}
