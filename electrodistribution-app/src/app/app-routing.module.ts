import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "registration",
    component: RegistrationComponentComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
