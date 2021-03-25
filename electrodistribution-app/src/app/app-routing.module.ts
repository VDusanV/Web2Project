import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [

  {
    path: "registration",
    component: RegistrationComponentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
