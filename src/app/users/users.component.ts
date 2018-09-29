import {Component, OnInit} from '@angular/core';
import {User} from "../_model/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor() {


  }

  ngOnInit() {
    for (let i = 0; i < 19; i++) {
      let user = new User();
      user.name = 'name ' + i;
      user.patronymic = 'patronymic';
      user.surname = 'surname';
      user.patronymic = 'patronymic';
      user.email = 'email';
      user.phone = '+375 29 888-88-88';
      user.enabled = true;
      user.birthDate = new Date;
      user.lastPasswordResetDate = new Date;
      user.created = new Date;
      this.users.push(user);
    }
  }

}
