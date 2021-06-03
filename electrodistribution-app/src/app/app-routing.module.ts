import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSideComponent } from './nav-side/nav-side.component'
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { ElementsPageComponent } from './elements-page/elements-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegistrationVerificationComponent } from './registration-verification/registration-verification.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: 'home',
     component:NavSideComponent,
     canActivate: [AuthGuard]
  
  },
  {
    path: 'profile',
     component:NavSideComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: ProfileComponent, // child route component that the router renders
      }
    ]
  
  },
  {
    path: 'map',
     component:NavSideComponent,
     canActivate: [AuthGuard],
      children: [
        {
          path: '', // child route path
        component: MapComponent, // child route component that the router renders
        }
      ]
  
  },
  {
    path: 'register',
     component:NavSideComponent,
     canActivate: [AuthGuard],
      children: [
        {
          path: '', // child route path
        component: RegistrationVerificationComponent, // child route component that the router renders
        }
      ]
  
  },
  {

    path: "incidents",
    component: NavSideComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // child route path
        component: IncidentsComponent, // child route component that the router renders
      },
      {
        path: 'table', // child route path
        component: IncidentsComponent, // child route component that the router renders
      },
    ]
    
  },
  {
    path: 'devices',
     component:NavSideComponent,
   //  canActivate: [AuthGuard],
      children: [
        {
          path: '', // child route path
        component: ElementsPageComponent, // child route component that the router renders
        }
      ]
  
  },
  {
    path: 'notifications',
     component:NavSideComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: NotificationsComponent, // child route component that the router renders
      }
    ]
  
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
