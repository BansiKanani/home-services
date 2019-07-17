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
  { path: 'admin/worker_details', component: WorkerDetailsComponent}
  // { path: '/admin/assignments', component: WorkerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
