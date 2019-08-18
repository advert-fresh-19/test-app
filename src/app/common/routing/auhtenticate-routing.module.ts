import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SigninComponent} from 'src/app/system/authenticate/signin/signin.component';
import {ProfileComponent} from 'src/app/system/authenticate/profile/profile.component';

const authenticateRoutes: Routes = [
  {
    path: '', children: [
      {path: 'signup', component: ProfileComponent},
      {path: 'serviceLogin', component: SigninComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(authenticateRoutes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule {
}

