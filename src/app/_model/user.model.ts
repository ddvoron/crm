import {Department} from "./department.model";
import {Authority} from "./authority.model";
export class User {

  public id: string;
  public password: string;
  public name: string;
  public surname: string;
  public patronymic: string;
  public email: string;
  public phone: string;
  public enabled: boolean;
  public birthDate: Date;
  public lastPasswordResetDate: Date;
  public departments: Department[];
  public authorities: Authority[];
  public created: Date;
  public updated: Date;

  constructor() {
  }
}
