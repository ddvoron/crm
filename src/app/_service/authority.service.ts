import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../_global/global';
@Injectable()
export class AuthorityService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private global: Globals) {
  }

  getAuthorities() {
    return this.http.get<any>(`${this.global.apiUrl}/authorities`, this.httpOptions);
  }

}
