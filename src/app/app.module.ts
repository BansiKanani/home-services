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
import { ServiceRequestComponent } from './customers/service-request/service-request.component';
import { WorkerHeaderComponent } from './workers/worker-header/worker-header.component';
import { WorkerIndexComponent } from './workers/worker-index/worker-index.component';
import { WorkerNextComponent } from './workers/worker-next/worker-next.component';
import { WorkerRegistrationComponent } from './workers/worker-registration/worker-registration.component';
import { CustomerRegistrationComponent } from './customers/customer-registration/customer-registration.component';
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
    WorkerDetailsComponent,
    ServiceRequestComponent,
    WorkerHeaderComponent,
    WorkerIndexComponent,
    WorkerNextComponent,
    WorkerRegistrationComponent,
    CustomerRegistrationComponent
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
