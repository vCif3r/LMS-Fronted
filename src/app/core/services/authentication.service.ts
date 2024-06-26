import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = "http://localhost:3000/api/auth"

  constructor(private _http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this._http.post<any>(`${this.url}/login`, credentials).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
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

  getUser():any{
    const token = localStorage.getItem('token');
    if(token){
      const user:any = jwtDecode(token)
      return user 
    }
    return null;
  }

  getIdUser():any{
    const token = localStorage.getItem('token');
    if(token){
      const user:any = jwtDecode(token)
      return user._id
    }
    return null;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload()
  }

}
