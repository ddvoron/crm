import {Component, ElementRef, OnInit, Renderer, Renderer2, ViewChild} from '@angular/core';
import {User} from "../_model/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
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
    setTimeout(()=> {
      this.onResize();
    }, 10);
  }

  onResize(e?: any) {
    for(let i = 0; i < this.elRef.nativeElement.querySelector('#table-c').getElementsByTagName('tr')[0].getElementsByTagName('td').length; i++) {
      this.renderer.setStyle(this.elRef.nativeElement.querySelector('#table-h').getElementsByTagName('th')[i], 'width', this.elRef.nativeElement.querySelector('#table-c').getElementsByTagName('tr')[0].getElementsByTagName('td')[i].offsetWidth + 'px');
    }
  }

}
