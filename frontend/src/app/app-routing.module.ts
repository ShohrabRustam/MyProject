import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes : Routes =[
  {
    path: 'login',
    component : SignupComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'logout',
    component : LogoutComponent
  },
  {
    path: 'request-password-reset',
    component : RequestResetComponent
  },
  {
    path: 'response-password-reset',
    component : ResponseResetComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppRoutingModule { }
