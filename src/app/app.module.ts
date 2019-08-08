import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './system/authenticate/signin/signin.component';
import { ProfileComponent } from './system/authenticate/profile/profile.component';
import { BulletinBoardComponent } from './system/board/bulletin-board/bulletin-board.component';
import { UsersBoardComponent } from './system/board/users-board/users-board.component';
import { AdvertComponent } from './system/board/bulletin-board/advert/advert.component';
import { UserInfoComponent } from './system/board/users-board/user-info/user-info.component';
import { DetailsMenuComponent } from './system/details-menu/details-menu.component';
import { PaginatorComponent } from './system/paginator/paginator.component';

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
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
