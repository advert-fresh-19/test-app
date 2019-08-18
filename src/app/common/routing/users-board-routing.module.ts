import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {UsersBoardComponent} from 'src/app/system/board/users-board/users-board.component';

const usersBoardRoutes: Routes = [
  {
    path: '',
    component: UsersBoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(usersBoardRoutes)],
  exports: [RouterModule]
})
export class UsersBoardRoutingModule {
}
