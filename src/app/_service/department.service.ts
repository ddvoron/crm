import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../_global/global';
@Injectable()
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private global: Globals) {
  }

  getDepartments() {
    return this.http.get<any>(`${this.global.apiUrl}/departments`, this.httpOptions);
  }

}
