import { Component, NgModule, Type } from '@angular/core';
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
import { ViewGuard } from './guards/view.guard';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { RequestsComponent } from './requests/requests.component';
//import { Type } from '@angular/compiler';


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
        component: RegistrationComponentComponent, // child route component that the router renders
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
  
  },
  {
    path: 'settings',
     component:NavSideComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        component: getSettingsComponent(), // child route component that the router renders
      }
    ]
  
  },
  {
    path: 'requests',
     component:NavSideComponent,
     canActivate: [AuthGuard],
     children: [
      {
        path: '', // child route path
        canActivate: [ViewGuard],
        component: RequestsComponent, // child route component that the router renders
      }
    ]
  
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function getSettingsComponent(): Type<Component> {

  if(ViewGuard.prototype.canActivate()){

    return <Type<Component>>AdminSettingsComponent;

  }else{

    return <Type<Component>>SettingsComponent;

  }


}

