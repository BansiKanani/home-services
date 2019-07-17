import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerIndexComponent } from './customers/customer-index/customer-index.component';
import { CustomerLoginComponent } from './logins/customer-login/customer-login.component';
import { WorkerLoginComponent } from './logins/worker-login/worker-login.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './logins/forget-password/forget-password.component';
import { AddServicesComponent } from './admins/add-services/add-services.component';
import { ExistingWorkersComponent } from './admins/existing-workers/existing-workers.component';
import { HeaderComponent } from './admins/header/header.component';
import { NewWorkersComponent } from './admins/new-workers/new-workers.component';
import { ServicesListComponent } from './admins/services-list/services-list.component';
import { SidebarComponent } from './admins/sidebar/sidebar.component';
import { WorkerDetailsComponent } from './admins/worker-details/worker-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerIndexComponent,
    CustomerLoginComponent,
    WorkerLoginComponent,
    AdminLoginComponent,
    ForgetPasswordComponent,
    AddServicesComponent,
    ExistingWorkersComponent,
    HeaderComponent,
    NewWorkersComponent,
    ServicesListComponent,
    SidebarComponent,
    WorkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
