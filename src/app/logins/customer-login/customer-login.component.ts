import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit, OnDestroy {
  loginForm;
  loginSub;
  loginpass = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({ userid: '', password: '' });
  }

  onSubmit(userData) {
    this.loginSub = this.loginService.authenticate(userData, 'customer');
    this.loginForm.reset();

    this.loginSub.subscribe(
      value => {
        this.loginpass = true;
        this.loginService.setUser(value.user, 'customer');
      },
      err => console.error(err)
    );
  }
  ngOnInit() {}

  ngOnDestroy() {
    this.loginSub.unsubscribe();
  }

  onLogOut() {
    this.loginService.removeUser();
  }
}
