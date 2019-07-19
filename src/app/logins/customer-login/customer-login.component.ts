import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  constructor(private cookie: CookieService, private http: HttpClient) {}

  onLogIn() {
    this.http.get('https://home-services-api.herokuapp.com/api/customers').subscribe(
      user => {
        this.cookie.set('customer', JSON.stringify(user[0]));
        console.log(JSON.parse(this.cookie.get('customer')));
      },
      err => console.error(err)
    );
  }

  onLogOut() {
    this.cookie.delete('customer');
  }
}
