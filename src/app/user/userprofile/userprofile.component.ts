import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public customer: Customer = new Customer(this.authService.user$.getValue().email, "", "");
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const usr = this.authService.user$.getValue();
    return this.authService.getCustomer$(new Customer(usr.email)).subscribe(c => {
      this.customer = c;
    });
  }
}
