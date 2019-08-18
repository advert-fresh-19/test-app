import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Tab, TabContentDirective, TabSetComponent, TabTitleDirective} from 'src/app/common/ui-components/tabset/tab-set.component';
import {PaginatorComponent} from 'src/app/common/ui-components/paginator/paginator.component';
import {InputRestrictDirective} from 'src/app/common/ui-components/directives/input-restrict.directive';
import {LoginForbiddenValidator} from 'src/app/common/ui-components/directives/login-forbidden.directive';
import {EmailForbiddenDirective} from 'src/app/common/ui-components/directives/email-forbidden.directive';

@NgModule({
  declarations: [
    PaginatorComponent,
    TabSetComponent,
    Tab,
    TabTitleDirective,
    TabContentDirective,
    InputRestrictDirective,
    LoginForbiddenValidator,
    EmailForbiddenDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputRestrictDirective,
    LoginForbiddenValidator,
    EmailForbiddenDirective,
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
