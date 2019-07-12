import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-worker-login',
  templateUrl: './worker-login.component.html',
  styleUrls: ['./worker-login.component.scss']
})
export class WorkerLoginComponent implements OnInit {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({ userid: '', password: '' });
  }

  onSubmit(userData) {
    this.loginService.authenticate(userData, 'worker');
    this.loginForm.reset();
  }

  ngOnInit() {}
}
