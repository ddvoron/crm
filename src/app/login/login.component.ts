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

  constructor(private auth: AuthenticationService,
              private  router: Router) {
  }

  ngOnInit() {
  /*  setTimeout(() => {
      this.auth.getToken('admin', 'admin').subscribe(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.auth.getUserByToken().subscribe(data => {
            if (data) {
              localStorage.setItem('user', JSON.stringify(data));
              this.router.navigate(['/navigation']);
            }
          });
        }
      });
    }, 10000);*/
  }

}
