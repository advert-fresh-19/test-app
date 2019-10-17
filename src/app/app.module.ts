import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppPreloadingStrategy, AppRoutingModule} from "./common/routing/app-routing.module";
import {ProfileService} from "./common/services/profile.service";
import {DetailsMenuComponent} from "./system/details-menu/details-menu.component";
import {RouteNavigationService} from "./common/routing/route-navigation.service";

@NgModule({
  declarations: [
    AppComponent,
    DetailsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProfileService, RouteNavigationService, AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
