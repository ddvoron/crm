import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../_global/global';
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

}