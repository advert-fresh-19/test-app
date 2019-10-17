import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

import {CustomValidators} from 'src/app/common/validators/custom-validators';
import {UserService} from 'src/app/common/services/user.service';
import {ProfileService} from 'src/app/common/services/profile.service';
import {RouteNavigationService} from 'src/app/common/routing/route-navigation.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private showValidationsFields = false;

  public passwordControl: FormControl;
  public loginControl: FormControl;

  constructor(private userService: UserService,
              private profileService: ProfileService,
              private routeNavigationService: RouteNavigationService) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.loginControl = new FormControl();
    this.loginControl.setValidators([CustomValidators.required, CustomValidators.length(4, 30)]);
    this.passwordControl = new FormControl();
    this.passwordControl.setValidators([CustomValidators.required, CustomValidators.length(6, 20)]);
  }

  public login(): void {
    this.showValidationsFields = true;
    if (this.loginControl.invalid || this.passwordControl.invalid) {
      return;
    }
    forkJoin(this.userService.getUserByEmail(this.loginControl.value), this.userService.getUserByLogin(this.loginControl.value))
      .pipe(
        map((data) => {
          return data.filter((el) => el !== null);
        })
      )
      .pipe(
        map((users) => users.length ? users[0] : null)
      )
      .subscribe((user) => {
        if (user) {
          if (user.password === this.passwordControl.value) {
            this.profileService.userProfile = user;
            this.routeNavigationService.toAdverts();
            alert('Всё ОК!');
          } else {
            alert('Вы ввели не верный пароль пользователя для данной системы!');
          }
        } else {
          alert('Пользователя с таким Логином или email нет в системе!');
        }
      });
  }

  public checkedControlValidations(control: FormControl): boolean {
    return control.invalid && control.touched ||
      this.showValidationsFields && control.invalid;
  }

  public toSignup(): void {
    this.routeNavigationService.toSignup();
  }
}
