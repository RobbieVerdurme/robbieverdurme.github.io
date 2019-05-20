import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './User';
import { Customer } from './customer';
import { Router } from '@angular/router';


function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //var
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<User>;
  public redirectUrl: string;
  
//constructor
  constructor(private http: HttpClient, private router: Router) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<User>(parsedToken && parsedToken.unique_name);
  }

  //methods
  login(username:string, email: string, password: string): Observable<boolean> {
    return this.http
      .post(`https://projectwebivbackend20190519035639.azurewebsites.net/api/account`,{email, username, password },{ responseType: 'text' })
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            let parsedToken = parseJwt(token);
            this._user$.next(new User(username, email, parsedToken.roles));
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      this._user$.next(null);
      this.router.navigate(['/post/list']);
    }
  }

  register(username: string,firstname: string,lastname: string,email: string,password: string): Observable<boolean> {
    return this.http.post(`https://projectwebivbackend20190519035639.azurewebsites.net/api/account/register`,
      {
          username,
          firstname,
          lastname,
          email,
          password,
          passwordConfirmation: password
        },{ responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            let parsedToken = parseJwt(token);
            this._user$.next(new User(username, email, parsedToken.roles));
            return true;
          } else {
            return false;
          }
        })
      );
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(`https://projectwebivbackend20190519035639.azurewebsites.net/api/account/checkusername`,{params: { email }});
  };

  //get
  get user$(): BehaviorSubject<User> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    if(localToken){
      let parsedToken = parseJwt(localToken);
      this._user$.next(new User(parsedToken.sub, parsedToken.unique_name, parsedToken.roles));
      return localToken;
    }
    return '';
  }

  getCustomer$(customer : Customer): Observable<Customer>{
    return this.http.get(`https://projectwebivbackend20190519035639.azurewebsites.net/api/account/${customer.email}`)
    .pipe(
      map((p: any): Customer => Customer.fromJSON(p))
    );
  }

  isAdmin(): boolean{
    if(this._user$.getValue()){
      return this._user$.getValue().role === 'Admin' ? true : false;
    }
    return false;
  }
}