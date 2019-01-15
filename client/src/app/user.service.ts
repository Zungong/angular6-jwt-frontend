import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('/api/facilities_managers');
  }

  getUser(id: string) {
    return this.http.get<any>('/api/facilities_managers/' + id);
  }
}
