import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerIndexComponent } from './customers/customer-index/customer-index.component';
import { CustomerLoginComponent } from './logins/customer-login/customer-login.component';
import { ForgetPasswordComponent } from './logins/forget-password/forget-password.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { WorkerLoginComponent } from './logins/worker-login/worker-login.component';
import { AddServicesComponent } from './admins/add-services/add-services.component';
import { ExistingWorkersComponent } from './admins/existing-workers/existing-workers.component';
import { NewWorkersComponent } from './admins/new-workers/new-workers.component';
import { ServicesListComponent } from './admins/services-list/services-list.component';
import { WorkerDetailsComponent } from './admins/worker-details/worker-details.component';
import { ServiceRequestComponent } from './customers/service-request/service-request.component';
import { WorkerIndexComponent } from './workers/worker-index/worker-index.component';
import { WorkerNextComponent } from './workers/worker-next/worker-next.component';
import { WorkerRegistrationComponent } from './workers/worker-registration/worker-registration.component';
import { CustomerRegistrationComponent } from './customers/customer-registration/customer-registration.component';



const routes: Routes = [
  { path: '', component: CustomerLoginComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: CustomerIndexComponent },
  { path: 'login/customer', component: CustomerLoginComponent },
  { path: 'login/worker', component: WorkerLoginComponent },
  { path: 'login/admin', component: AdminLoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },

  { path: 'admin/add_service', component: AddServicesComponent },
  { path: 'admin/existing_workers', component: ExistingWorkersComponent },
  { path: 'admin/new_workers', component: NewWorkersComponent },
  { path: 'admin/services_list', component: ServicesListComponent},
  { path: 'admin/worker_details', component: WorkerDetailsComponent},

  { path: 'user/service_request', component: ServiceRequestComponent},
  { path: 'user/registration', component: CustomerRegistrationComponent},

  { path: 'worker/registration', component: WorkerRegistrationComponent},
  { path: 'worker/index', component: WorkerIndexComponent },
  { path: 'worker/next', component: WorkerNextComponent}
  // { path: '/admin/assignments', component: WorkerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
