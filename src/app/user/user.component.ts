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

  edit: boolean = false;

  constructor(private authorityService: AuthorityService,
              private departmentService: DepartmentService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.getDepartments();
    this.getAuthorities();
    if (this.userId.length > 0) {
      this.edit = true;
    } else {
      /**/
    }
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    })
  }

  getAuthorities() {
    this.authorityService.getAuthorities().subscribe(data => {
      this.authorities = data;
    })
  }

  closeForm() {
    this.close.emit(true);
  }

}
