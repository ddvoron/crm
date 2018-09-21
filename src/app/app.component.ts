import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./_service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private auth: AuthenticationService) {
  }


  ngOnInit() {
    this.auth.getToken('admin', 'admin').subscribe(data => {
      if(data.token) {
        localStorage.setItem('token', data.token);
        this.auth.getUserByToken().subscribe(data => {
          if(data) {
            localStorage.setItem('user', JSON.stringify(data));
          }
        })
      }
    });
  }
}
