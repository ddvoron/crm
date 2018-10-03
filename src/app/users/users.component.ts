import {Component, ElementRef, OnInit, Renderer, Renderer2, ViewChild} from '@angular/core';
import {User} from "../_model/user.model";
import {UserService} from "../_service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  total = 0;
  page = 0;
  size = 10;
  column = '';
  dir = '';
  searchTerm = '';
  userEdit = false;
  showForm = false;
  userId = '';

  private users: User[] = [];

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  paginator(e: any) {
    this.size = e.pageSize;
    this.page = e.pageIndex;
    this.getUsers();
  }

  sort(column: string) {
    if (this.column === column) {
      switch (this.dir) {
        case '':
          this.dir = 'asc';
          break;
        case 'asc':
          this.dir = 'desc';
          break;
        default:
          this.dir = '';
          this.column = '';
      }
    } else {
      this.dir = 'asc';
      this.column = column;
    }

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersByPage(this.page, this.size, this.column, this.dir, this.searchTerm).subscribe(data => {
        this.total = data.totalElements;
        this.users = data.content;
      },
      error => {

      });
  }

  openUserForm(userId: string) {
    this.userId = userId;
    this.userEdit = true;
    setTimeout(() => {
      this.showForm = true;
    }, 1000)

  }

  closeForm(e: any) {
    this.showForm = false;
    this.userEdit = false;
    this.userId = '';
  }

  onResize(e?: any) {
    for (let i = 0; i < this.elRef.nativeElement.querySelector('#table-c').getElementsByTagName('tr')[0].getElementsByTagName('td').length; i++) {
      this.renderer.setStyle(this.elRef.nativeElement.querySelector('#table-h').getElementsByTagName('th')[i],
        'width', this.elRef.nativeElement.querySelector('#table-c').getElementsByTagName('tr')[0].getElementsByTagName('td')[i].offsetWidth + 'px');
    }
  }

}
