import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //var

  //constructor
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  //methods
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (this.authService.user$.getValue()) {
      return true;
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
