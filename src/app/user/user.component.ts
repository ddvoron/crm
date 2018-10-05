import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../_model/user.model";
import {Department} from "../_model/department.model";
import {Authority} from "../_model/authority.model";
import {AuthorityService} from "../_service/authority.service";
import {DepartmentService} from "../_service/department.service";
import {UserService} from "../_service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userId: string = '';
  @Output() close = new EventEmitter();

  departments: Department[] = [];
  selectedDepartments: Department[] = [];
  authorities: Authority[] = [];
  selectedAuthorities: Authority[] = [];
  user: User = new User();

  edit: boolean = false;

  constructor(private authorityService: AuthorityService,
              private departmentService: DepartmentService,
              private userService: UserService) {
    this.resetUser();
  }

  ngOnInit() {
    this.getDepartments();
    this.getAuthorities();
    if (this.userId.length > 0) {
      this.edit = true;
      this.getUser();
    }
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  getAuthorities() {
    this.authorityService.getAuthorities().subscribe(data => {
      this.authorities = data;
    });
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
      this.user.birthDate = new Date(data.birthDate);
      this.selectedAuthorities = data.authorities;
      this.selectedDepartments = data.departments;
    });
  }

  compareFn(a1: any, a2: any): boolean {
    if (a1 && a2) {
      return a1.id === a2.id;
    } else {
      return a1 === a2;
    }
  }


  save() {
    this.userService.save(this.user, this.selectedAuthorities, this.selectedDepartments).subscribe(data => {

    });
  }

  closeForm() {
    this.close.emit(true);
  }

  resetUser() {
    this.user.id = '';
    this.user.name = '';
    this.user.surname = '';
    this.user.patronymic = '';
    this.user.email = '';
    this.user.password = '';
    this.user.phone = '';
    this.user.enabled = true;
    this.user.birthDate = null;
    this.user.created = null;
    this.user.updated = null;
    this.user.lastPasswordResetDate = null;
  }
}
