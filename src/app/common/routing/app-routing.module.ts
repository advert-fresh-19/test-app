import {NgModule} from '@angular/core';
import {PreloadingStrategy, Route, RouterModule, Routes} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {flatMap} from 'rxjs/operators';

export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(150).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/adverts',
    pathMatch: 'full'
  },
  {
    path: 'adverts',
    loadChildren: 'src/app/system/board/bulletin-board/bulletin-board.module#BulletinBoardModule',
  },
  {
    path: 'authenticate',
    loadChildren: 'src/app/system/authenticate/authenticate.module#AuthenticateModule',
    data: {preload: false, delay: false},
  },
  {
    path: 'users',
    loadChildren: 'src/app/system/board/users-board/users-board.module#UsersBoardModule',
    data: {preload: true, delay: false},
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: AppPreloadingStrategy})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
