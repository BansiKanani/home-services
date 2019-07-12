import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userid;
  password;
  constructor() {}

  authenticate(userData, userType) {
    console.log('checking with server!', userData, userType);
  }

}
