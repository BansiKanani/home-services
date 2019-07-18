import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './../../models/customer';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  login = false;
  customerObj;
  loginForm;

  constructor(private cookie: CookieService, private http: HttpClient) {}

  onLogIn() {
    this.login = true;
    this.http
      .get('http://localhost:3000/api/customers')
      .subscribe(
        user => {
          this.cookie.set('customer', JSON.stringify(user[0]));
          // console.log(JSON.parse(this.cookie.get('customer')));
        },
        err => console.error(err)
      );
  }

  onLogOut() {
    this.cookie.delete('customer');
    this.login = false;
  }
}
