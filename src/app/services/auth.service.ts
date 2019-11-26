import { Injectable } from '@angular/core';
import { User } from '../components/models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8090/trackingmanager/api/v1/users';

  constructor(private http: HttpClient) { }

  postUser(user) {
    return this.http.post(this.url, user);
  }

  isAuth() {
    return false;
  }
}
