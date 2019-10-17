import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RouteNavigationService {

  constructor(private router: Router) {
  }

  public toAdverts(): Promise<boolean> {
    return this.router.navigate(['/adverts']);
  }

  public toNewAdvert(): Promise<boolean> {
    return this.router.navigate(['/new-advert']);
  }

  public toSignIn(): Promise<boolean> {
    return this.router.navigate(['authenticate', 'serviceLogin']);
  }

  public toSignup(): any {
    return this.router.navigate(['authenticate', 'signup']);
  }
}
