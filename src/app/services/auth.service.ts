import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8090/trackingmanager/api/v1';
  apiUser = this.url  + '/users';
  headers = {
    authorization: localStorage.getItem('authorization')
  };

  constructor(private http: HttpClient) { }

  postUser(user) {
    return this.http.post(this.apiUser, user);
  }

  singIn(credential) {
    return this.http.post(`${this.apiUser}/login`, credential, {observe: 'response'});
  }

  validateAuth() {
    return this.http.get(`${this.apiUser}/auth`, {headers: this.headers});
  }

  isAuth() {
    if (localStorage.getItem('authorization')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('authorization');
    localStorage.removeItem('scuser');
  }
}
