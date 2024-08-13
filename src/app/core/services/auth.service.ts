import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://127.0.0.1:8000/api/v1"
  private userSubject = new BehaviorSubject<any>(null);
  user$: Observable<any> = this.userSubject.asObservable();

  constructor(private _http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this._http.post<any>(`${this.url}/login/`, credentials).pipe(
      map(response => {
        if (response && response.access) {
          localStorage.setItem('token', response.access);
          this.userSubject.next(response.access);
        }
        return response;
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodedToken: any = jwtDecode(token);
    return decodedToken.exp > Date.now() / 1000;
  }

  getToken():any{
    return localStorage.getItem('token')
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  getRole(): any {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role;
    }
    return null;
  }

  getEmailUser():any{
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.email;
    }
    return null;
  }

  getFullnameUser():any{
    const token = localStorage.getItem('token');
    if(token){
      const user:any = jwtDecode(token)
      return user.fullname
    }
    return null;
  }

  getIdUser():any{
    const token = localStorage.getItem('token');
    if(token){
      const user:any = jwtDecode(token)
      return user.user_id
    }
    return null;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload()
    this.userSubject.next(null);
  }

}
