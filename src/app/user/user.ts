export class User {
  //constructor
  constructor(
      private _name: string,
      private _email: string,
      private _role: string
  ) {}


  //methods
  toJSON(): any {
    return {
      email: this._email
    };
  }

  //getters
  get email(){
    return this._email;
  }

  get role() {
    return this._role;
  }
}