import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollmentDetail } from '../model/enrollmentDetail';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentDetailService {
  private url = "http://127.0.0.1:8000/api/v1/enrollment-details/"
  constructor(private _http: HttpClient) { }

  listAll(){
    return this._http.get<EnrollmentDetail[]>(this.url)
  }

  ListActivesByIdStudent(id:any){
    return this._http.get<EnrollmentDetail[]>(`${this.url}active/student/${id}`)
  }

  ListByIdStudent(id:any){
    return this._http.get<EnrollmentDetail[]>(`${this.url}student/${id}`)
  }
}
