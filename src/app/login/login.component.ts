import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  username = '';
  password = '';
  helloTime = 2400;
  user = '';

  constructor(private auth: AuthenticationService,
              private  router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.getToken(this.username, this.password).subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.auth.getUserByToken().subscribe(data => {
          if (data) {
            localStorage.setItem('user', JSON.stringify(data));
            this.user = data.name + ' ' + data.surname;
            this.isLoggedIn = true;
            setTimeout(() => {
              this.router.navigate(['/navigation']);
            }, this.helloTime);
          }
        });
      }
    });
  }

}
