import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersBoardComponent} from 'src/app/system/board/users-board/users-board.component';
import {UserInfoComponent} from 'src/app/system/board/users-board/user-info/user-info.component';
import {UsersBoardRoutingModule} from 'src/app/common/routing/users-board-routing.module';
import {UserService} from 'src/app/common/services/user.service';

@NgModule({
  declarations: [
    UsersBoardComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    UsersBoardRoutingModule,
  ],
  providers: [UserService],
})
export class UsersBoardModule {
}
