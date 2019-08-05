import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BulletinBoardComponent} from 'src/app/system/board/bulletin-board/bulletin-board.component';
import {UsersBoardComponent} from 'src/app/system/board/users-board/users-board.component';
import {SigninComponent} from 'src/app/system/authenticate/signin/signin.component';
import {ProfileComponent} from 'src/app/system/authenticate/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/adverts', pathMatch: 'full' },
  { path: 'adverts', component: BulletinBoardComponent },
  { path: 'users', component: UsersBoardComponent },
  { path: 'serviceLogin', component: SigninComponent },
  { path: 'signup', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
