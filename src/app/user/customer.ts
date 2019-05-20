export class Customer {
    //constructor
    constructor(
        private _email: string,
        private _lastname ?: string ,
        private _firstname ?: string
    ) {}
  
  
    //methods
    toJSON(): any {
      return {
        email: this._email,
        lastname: this._lastname,
        firstname: this._firstname
      };
    }

    static fromJSON(json: any): Customer {
        const customer = new Customer(
            json.email,
            json.lastName,
            json.firstName
          );
          return customer;
      }
  
    //getters
    get email(){
        return this._email;
    }

     get lastname(){
       return this._lastname;
     }

     get firstname(){
       return this._firstname;
     }
  }