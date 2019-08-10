import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Tab, TabContentDirective, TabSetComponent, TabTitleDirective} from 'src/app/common/ui-components/tabset/tab-set.component';
import {PaginatorComponent} from 'src/app/common/ui-components/paginator/paginator.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    TabSetComponent,
    Tab,
    TabTitleDirective,
    TabContentDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    PaginatorComponent,
    TabSetComponent,
    Tab,
    TabTitleDirective,
    TabContentDirective,
  ],
  providers: [],
  bootstrap: []
})
export class CommonUiModule {
}
