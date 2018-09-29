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
  public created: Date;
  public updated: Date;

  constructor() {
  }
}
