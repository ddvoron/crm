import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../_global/global';
import {Login} from "../_model/login.model";
import {pipe} from "rxjs/index";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private global: Globals) {
  }

  getToken(username: string, password: string) {
    let login: Login = new Login();
    login.username = username;
    login.password = password;
    return this.http.post<any>(`${this.global.apiUrl}/auth`, JSON.stringify(login), this.httpOptions);
  }

  getUserByToken() {
    return this.http.get<any>(`${this.global.apiUrl}/user`, this.httpOptions);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
}
