import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../_global/global';
import {User} from "../_model/user.model";
import {Authority} from "../_model/authority.model";
import {Department} from "../_model/department.model";
import {forEach} from "@angular/router/src/utils/collection";
@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private global: Globals) {
  }

  save(user: User, authorities: Authority[], departments: Department[]) {
    return this.http.post<any>(`${this.global.apiUrl}/users`,
      '{' + '"person": ' + JSON.stringify(user) + ', "authorities": ' + JSON.stringify(authorities) + ', "departments": ' + JSON.stringify(departments) + '}',
      this.httpOptions);
  }

  getUsersByPage(page: number, size: number, column: string, dir: string, searchTerm: string) {
    if (searchTerm.length > 0 && column.length > 0) {
      return this.http.get<any>(`${this.global.apiUrl}/users?page=` + page + '&size=' + size + '&sort=' + column + ',' + dir + '&searchTerm=' + searchTerm, this.httpOptions);
    } else if (searchTerm.length > 0 && column.length === 0) {
      return this.http.get<any>(`${this.global.apiUrl}/users?page=` + page + '&size=' + size + '&searchTerm=' + searchTerm, this.httpOptions);
    } else if (searchTerm.length === 0 && column.length > 0) {
      return this.http.get<any>(`${this.global.apiUrl}/users?page=` + page + '&size=' + size + '&sort=' + column + ',' + dir, this.httpOptions);
    } else {
      return this.http.get<any>(`${this.global.apiUrl}/users?page=` + page + '&size=' + size, this.httpOptions);
    }
  }

  getUserById(id: string) {
    return this.http.get<any>(`${this.global.apiUrl}/users` + '/' + id);
  }

}
