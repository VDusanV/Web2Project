import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavSideComponent } from './nav-side/nav-side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { IncidentsComponent } from './incidents/incidents.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { ElementsPageComponent } from './elements-page/elements-page.component';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateElementComponent } from './create-element/create-element.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { NotificationsFilterPipe } from './pipes/notifications-filter.pipe';
import { RegistrationVerificationComponent } from './registration-verification/registration-verification.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequestsComponent } from './requests/requests.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SafetyDocumentsPageComponent } from './safety-documents-page/safety-documents-page.component';
import { NewSafetyDocumentComponent } from './new-safety-document/new-safety-document.component';
import { HistoryOfStateChangesComponent } from './history-of-state-changes/history-of-state-changes.component';
import { SwitchingPlanComponent } from './switching-plan/switching-plan.component';
import { NewSpComponent } from './switching-plan/new-sp/new-sp.component';
import { BasicInfoSpComponent } from './switching-plan/basic-info-sp/basic-info-sp.component';
import { HistorySpComponent } from './switching-plan/history-sp/history-sp.component';
import { MultimediaSpComponent } from './switching-plan/multimedia-sp/multimedia-sp.component';
import { EquipmentSpComponent } from './switching-plan/equipment-sp/equipment-sp.component';
import { InstructionsSpComponent } from './switching-plan/instructions-sp/instructions-sp.component';
import { NavbarSpComponent } from './switching-plan/navbar-sp/navbar-sp.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BasicInfWrComponent } from './work-requests/basic-inf-wr/basic-inf-wr.component';
import { EquipmentWrComponent } from './work-requests/equipment-wr/equipment-wr.component';
import { HistoryWrComponent } from './work-requests/history-wr/history-wr.component';
import { MultimediaWrComponent } from './work-requests/multimedia-wr/multimedia-wr.component';
import { NavbarWrComponent } from './work-requests/navbar-wr/navbar-wr.component';
import { MultimediaAttachmentsComponent } from './multimedia-attachments/multimedia-attachments.component';
import { DevicesComponent } from './devices/devices.component';
import { ChecklistComponent } from './checklist/checklist.component';
export function getToken() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [				
    AppComponent,
    NavBarComponent,
      RegistrationComponentComponent,
      DashboardComponent,
      NavSideComponent,
      HomeComponent,
      IncidentsComponent,
      LoginComponent,
      MapComponent,
      ProfileComponent,
      ElementsPageComponent,
      TableFilterPipe,
      NotificationsComponent,
      CreateElementComponent,
      NotificationsFilterPipe,
      RegistrationVerificationComponent,
      SettingsComponent,
      AdminSettingsComponent,
      RequestsComponent,
      BasicInformationComponent,
      SafetyDocumentsPageComponent,
      NewSafetyDocumentComponent,
      HistoryOfStateChangesComponent,
      SwitchingPlanComponent,
      NewSpComponent,
      BasicInfoSpComponent,
      HistorySpComponent,
      MultimediaSpComponent,
      EquipmentSpComponent,
      InstructionsSpComponent,
      NavbarSpComponent,
      WorkRequestsComponent,
      BasicInfWrComponent,
      EquipmentWrComponent,
      HistoryWrComponent,
      MultimediaWrComponent,
      NavbarWrComponent,
      MultimediaAttachmentsComponent,
      DevicesComponent,
      ChecklistComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken, 
        allowedDomains: ["localhost:44364"],
        disallowedRoutes: []
      }
    }),
    MatSortModule,
    MatCheckboxModule
  ],
  providers: [
    DatePipe,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
