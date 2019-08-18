import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {BulletinBoardComponent} from 'src/app/system/board/bulletin-board/bulletin-board.component';

const bulletinBoardRoutes: Routes = [
  {
    path: '',
    component: BulletinBoardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(bulletinBoardRoutes)],
  exports: [RouterModule]
})
export class BulletinBoardRoutingModule {
}
