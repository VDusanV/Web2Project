import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [
  {
    path: "",
    component: NavBarComponent
  },
  {
    path: 'home', component:NavBarComponent,
    children: [
      {
        path: '', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'dashboard', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'registration',
        component: RegistrationComponentComponent, // another child route component that the router renders
      },
    ]
  },
  {
    path: "incidents",
    component: IncidentsComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
