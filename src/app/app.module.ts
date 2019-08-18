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
  ],
  providers: [AppPreloadingStrategy, RouteNavigationService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
