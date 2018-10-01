import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../_model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userId: string = '';
  @Output() close = new EventEmitter();

  edit: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.userId.length > 0) {
      this.edit = true;
    } else {
      /**/
    }
  }

  closeForm() {
    this.close.emit(true);
  }

}
