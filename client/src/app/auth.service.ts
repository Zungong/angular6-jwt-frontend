import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>('/api/auth/login', {email: username, password: password}, {headers: {'Authorization':''}})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.data.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
