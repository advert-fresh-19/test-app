import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from 'src/app/common/services/user.service';
import {BulletinBoardComponent} from 'src/app/system/board/bulletin-board/bulletin-board.component';
import {AdvertComponent} from 'src/app/system/board/bulletin-board/advert/advert.component';
import {BulletinBoardRoutingModule} from 'src/app/common/routing/bulletin-board-routing.module';
import {CommonUiModule} from 'src/app/common/ui-components/common-ui.module';

@NgModule({
  declarations: [
    BulletinBoardComponent,
    AdvertComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    BulletinBoardRoutingModule,
  ],
  providers: [UserService],
})
export class BulletinBoardModule {
}
