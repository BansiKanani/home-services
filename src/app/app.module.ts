import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerIndexComponent } from './customers/customer-index/customer-index.component';
import { CustomerLoginComponent } from './logins/customer-login/customer-login.component';
import { WorkerLoginComponent } from './logins/worker-login/worker-login.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './logins/forget-password/forget-password.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerIndexComponent,
    CustomerLoginComponent,
    WorkerLoginComponent,
    AdminLoginComponent,
    ForgetPasswordComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
