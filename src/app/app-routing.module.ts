import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerIndexComponent } from './customers/customer-index/customer-index.component';
import { CustomerLoginComponent } from './logins/customer-login/customer-login.component';
import { ForgetPasswordComponent } from './logins/forget-password/forget-password.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { WorkerLoginComponent } from './logins/worker-login/worker-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: CustomerIndexComponent },
  { path: 'login/customer', component: CustomerLoginComponent },
  { path: 'login/worker', component: WorkerLoginComponent },
  { path: 'login/admin', component: AdminLoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
