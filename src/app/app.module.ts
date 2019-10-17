import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DetailsMenuComponent} from './system/details-menu/details-menu.component';
import {CommonUiModule} from 'src/app/common/ui-components/common-ui.module';
import {AppPreloadingStrategy, AppRoutingModule} from 'src/app/common/routing/app-routing.module';
import {ProfileService} from 'src/app/common/services/profile.service';
import {RouteNavigationService} from 'src/app/common/routing/route-navigation.service';
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
import { Tab, TabContentDirective, TabsetComponent, TabTitleDirective } from './system/board/bulletin-board/tabset/tabset.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetailsMenuComponent,
    DetailsMenuComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonUiModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppPreloadingStrategy, RouteNavigationService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
