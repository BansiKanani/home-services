import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers;
  body;
  rootUrl;
  // rootUrl = 'https://home-services-api.herokuapp.com/api/login';

  constructor(private http: HttpClient, private cookie: CookieService) {}

  authenticate(userData, userType): any {
    // this.setUrl(userType);
    this.rootUrl = 'https://home-services-api.herokuapp.com/api/login';
    console.log(userData);

    this.body = { mobile: userData.userid, password: userData.password };
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl, this.body, { headers: this.headers });
  }

  setUser(userid, userType) {
    this.cookie.set('userId', userid);
    this.cookie.set('userType', userType);
  }

  removeUser() {
    this.cookie.delete('userId');
    this.cookie.delete('userType');
  }

  // setUrl(userType) {
  //   if (userType === 'customer') {
  //     this.rootUrl = `https://home-services-api-customers.herokuapp.com/api/login`;
  //   } else if (userType === 'worker') {
  //     this.rootUrl =
  //       'https://home-services-api-workers.herokuapp.com/api/login';
  //   } else {
  //     this.rootUrl = 'https://home-services-api.herokuapp.com/api/login';
  //   }
  // }
}
