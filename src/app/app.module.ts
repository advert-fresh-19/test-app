import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SigninComponent} from './system/authenticate/signin/signin.component';
import {ProfileComponent} from './system/authenticate/profile/profile.component';
import {BulletinBoardComponent} from './system/board/bulletin-board/bulletin-board.component';
import {UsersBoardComponent} from './system/board/users-board/users-board.component';
import {AdvertComponent} from './system/board/bulletin-board/advert/advert.component';
import {UserInfoComponent} from './system/board/users-board/user-info/user-info.component';
import {DetailsMenuComponent} from './system/details-menu/details-menu.component';
import {CommonUiModule} from 'src/app/common/ui-components/common-ui.module';
import {UserService} from 'src/app/common/services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProfileComponent,
    BulletinBoardComponent,
    UsersBoardComponent,
    AdvertComponent,
    UserInfoComponent,
    DetailsMenuComponent,
    DetailsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUiModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
