import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerDetailComponent } from './manager-detail/manager-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // App routes goes here here
  { 
    path: '',
    component: DashboardComponent, 
    children: [
      { path: 'payments', component: PaymentListComponent },
      { path: '', redirectTo: 'managers', pathMatch: 'full' },
      { path: 'managers', component: ManagerListComponent },
      { path: 'manager/:id', component: ManagerDetailComponent }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: 'managers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
