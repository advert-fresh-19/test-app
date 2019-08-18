import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SigninComponent} from 'src/app/system/authenticate/signin/signin.component';
import {ProfileComponent} from 'src/app/system/authenticate/profile/profile.component';
import {UserService} from 'src/app/common/services/user.service';
import {AuthenticateRoutingModule} from 'src/app/common/routing/auhtenticate-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticateRoutingModule,
  ],
  providers: [UserService],
  bootstrap: []
})
export class AuthenticateModule {
}
