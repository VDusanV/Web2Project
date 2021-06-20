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
import { SafetyDocumentsPageComponent } from './safety-documents-page/safety-documents-page.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { HistoryOfStateChangesComponent } from './history-of-state-changes/history-of-state-changes.component';
import { NewSafetyDocumentComponent } from './new-safety-document/new-safety-document.component';
import { NavbarSpComponent } from './switching-plan/navbar-sp/navbar-sp.component';
import { MultimediaSpComponent } from './switching-plan/multimedia-sp/multimedia-sp.component';
import { BasicInfoSpComponent } from './switching-plan/basic-info-sp/basic-info-sp.component';
import { HistorySpComponent } from './switching-plan/history-sp/history-sp.component';
import { EquipmentSpComponent } from './switching-plan/equipment-sp/equipment-sp.component';
import { InstructionsSpComponent } from './switching-plan/instructions-sp/instructions-sp.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { EquipmentWrComponent } from './work-requests/equipment-wr/equipment-wr.component';
import { MultimediaWrComponent } from './work-requests/multimedia-wr/multimedia-wr.component';
import { HistoryWrComponent } from './work-requests/history-wr/history-wr.component';
import { BasicInfWrComponent } from './work-requests/basic-inf-wr/basic-inf-wr.component';
import { NavbarWrComponent } from './work-requests/navbar-wr/navbar-wr.component';
import { MultimediaAttachmentsComponent } from './multimedia-attachments/multimedia-attachments.component';
import { DevicesComponent } from './devices/devices.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { CrewComponent } from './crew/crew.component';
import { SwitchingPlanComponent } from './switching-plan/switching-plan.component';
import { ConsumersComponent } from './consumer/consumers/consumers.component';
import { NewConsumerComponent } from './consumer/new-consumer/new-consumer.component';
import { ModifyConsumerComponent } from './consumer/modify-consumer/modify-consumer.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { IncidentsBasicInfoComponent } from './incidents-basic-info/incidents-basic-info.component';
import { IncidentsDevicesComponent } from './incidents-devices/incidents-devices.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { CallsComponent } from './calls/calls.component';
import { IncidentsCrewComponent } from './incidents-crew/incidents-crew.component';
import { IncidentsMultimediaAttachmentsComponent } from './incidents-multimedia-attachments/incidents-multimedia-attachments.component';
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
        component: MapComponent, // child route component that the router renders
        }
      ]
  
  },
  {
    path: 'register',
     component:RegistrationComponentComponent,
  },
  {
    path: 'crew',
     component:NavSideComponent,
     children: [
      {
        path: '', // child route path
      component: CrewComponent, // child route component that the router renders
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
      component: IncidentsComponent,
      children: [{
        path: 'new',
        component: NewIncidentComponent,
        children: [
          {
            path: 'basic-info',
            component: IncidentsBasicInfoComponent
          },
          {
            path: 'incident-devices',
            component: IncidentsDevicesComponent
          }
          ,
          {
            path: 'resolution',
            component: ResolutionComponent
          }
          ,
          {
            path: 'calls',
            component: CallsComponent
          }
          ,
          {
            path: 'incident-crew',
            component: IncidentsCrewComponent
          }
          ,
          {
            path: 'incident-multimedia-attachments',
            component: IncidentsMultimediaAttachmentsComponent
          }
        ]
      }
      ] // child route component that the router renders
      }
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
  
  },
  {
    path: 'safety-documents',
     component:NavSideComponent,
   //  canActivate: [AuthGuard],
      children: [
        {
          path: '', // child route path
        component: SafetyDocumentsPageComponent,
        children: [{
          path: 'new',
          component: NewSafetyDocumentComponent,
          children: [
            {
              path: 'basic-info',
              component: BasicInformationComponent
            },
            {
              path: 'history-of-state-changes',
              component: HistoryOfStateChangesComponent
            }
            ,
            {
              path: 'multimedia-attachments',
              component: MultimediaAttachmentsComponent
            }
            ,
            {
              path: 'document-devices',
              component: DevicesComponent
            }
            ,
            {
              path: 'checklist',
              component: ChecklistComponent
            }
          ]
        }
        ] // child route component that the router renders
        }
      ]
  
  },
  {
    path: 'work-requests',
    component:NavSideComponent,
    canActivate: [AuthGuard],
     children: [
       {
         path: '', // child route path
         component: WorkRequestsComponent, // child route component that the router renders
       },
       {
            path: 'new',
            component: NavbarWrComponent,
            children:[
              {
                path:'basic-info',
                component: BasicInfWrComponent
              },
              {
                path:'history',
                component:HistoryWrComponent
              },
              {
                path:'multimedia',
                component:MultimediaWrComponent
              },
              {
                path:'equipment',
                component:EquipmentWrComponent
              }

            ]
        }
      ]
  },
  {
    path: 'switching-plans',
    component:NavSideComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SwitchingPlanComponent,
        canActivate: [AuthGuard],
      },
         {
           path: 'new', // child route path
           canActivate: [AuthGuard],
           component: NavbarSpComponent, // child route component that the router renders
           children: [
             {
               path: 'basic-info',
               canActivate: [AuthGuard],
               component: BasicInfoSpComponent
             },
             {
               path: 'history-state',
               canActivate: [AuthGuard],
               component: HistorySpComponent
             },
             {
               path: 'multimedia',
               canActivate: [AuthGuard],
               component: MultimediaSpComponent
             },
             {
               path: 'equipment',
               canActivate: [AuthGuard],
               component: EquipmentSpComponent
             },
             {
               path: 'instructions',
               canActivate: [AuthGuard],
               component: InstructionsSpComponent
             }
           ]
         }
   
 
   ]
 
 },
 {

   path: 'consumers',
    component:NavSideComponent,
    canActivate: [AuthGuard],
    children: [
     {
       path: '', // child route path
       canActivate: [AuthGuard],
       component: ConsumersComponent, // child route component that the router renders
     }
   ]
 },
 {

   path: 'newConsumer',
    component:NavSideComponent,
    canActivate: [AuthGuard],
    children: [
     {
       path: '', // child route path
       canActivate: [AuthGuard],
       component: NewConsumerComponent, // child route component that the router renders
     }
   ]
 },
 {

     path: 'modifyConsumer',
      component:NavSideComponent,
      canActivate: [AuthGuard],
      children: [
       {
         path: '', // child route path
         canActivate: [AuthGuard],
         component: ModifyConsumerComponent, // child route component that the router renders
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

