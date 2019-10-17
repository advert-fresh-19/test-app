import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {User, UserService} from 'src/app/common/services/user.service';
import {CustomValidators} from 'src/app/common/validators/custom-validators';
import {RouteNavigationService} from "../../../common/routing/route-navigation.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public static readonly CHANGE_PROFILE_MODE: string = 'CHANGE_PROFILE';

  private showValidationsFields = false;
  private subscription: Subscription = new Subscription();

  public form: FormGroup;
  public isChangeProfile = false;

  constructor(private userService: UserService,  private routeNavigationService: RouteNavigationService) {
    // this.isChangeProfile = route.snapshot.data['mode'] === RegistrationComponent.CHANGE_PROFILE_MODE;
  }

  ngOnInit() {
    if (this.isChangeProfile) {
      // const user: User = this.profileService.userProfile;
      // this.createProfileForm(user);
    } else {
      this.createSignUpForm();
    }
  }

  // TODO: Add custom email validator
  // TODO: Update custom phone validator
  private createSignUpForm(): void {
    this.form = new FormGroup({
      'login': new FormControl('', [CustomValidators.required, CustomValidators.length(4, 20)]),
      'firstName': new FormControl('', [CustomValidators.required, CustomValidators.length(2, 20)]),
      'lastName': new FormControl('', [CustomValidators.required, CustomValidators.length(2, 20)]),
      'email': new FormControl('', [CustomValidators.required, CustomValidators.length(3, 30), Validators.email]),
      'confirmEmail': new FormControl('', [CustomValidators.required, CustomValidators.compareValidator('email')]),
      'phone': new FormControl('', [CustomValidators.required, CustomValidators.phoneValidator]),
      'password': new FormControl('', [CustomValidators.required, CustomValidators.length(6, 20)]),
      'confirmPassword': new FormControl('', [CustomValidators.required, CustomValidators.compareValidator('password')]),
    });
  }

  private createProfileForm(user: User): void {
    this.form = new FormGroup({
      'login': new FormControl(user.login, [CustomValidators.required, CustomValidators.length(20, 4)]),
      'firstName': new FormControl(user.firstname, [CustomValidators.required, CustomValidators.length(20, 2)]),
      'lastName': new FormControl(user.lastname, [CustomValidators.required, CustomValidators.length(20, 2)]),
      'email': new FormControl(user.email, [CustomValidators.required, CustomValidators.length(30, 3), Validators.email]),
      'phone': new FormControl(user.phone, [CustomValidators.required]),
      'password': new FormControl(user.password, [CustomValidators.required, CustomValidators.length(null, 6)]),
      'confirmPassword': new FormControl(user.password, [CustomValidators.required, CustomValidators.compareValidator('password')]),
    });
  }

  public action(): void {
    // const titleForm = this.isChangeProfile ? 'Форма изменения личных данных' : 'Форма регистрации';
    this.showValidationsFields = true;
    if (this.form.invalid) {
      return;
    }

    const user: User = {...this.form.value};
    if (this.isChangeProfile) {
      // this.subscription = this.userService.changeUserData(this.profileService.userProfile.objectId, user)
      //   .subscribe((changedUserData) => {
      //     this.profileService.userProfile = changedUserData;
      //     const dialogRef = this.mws.openModalWindow(
      //       titleForm,
      //       'Учётная запись в данной системе  успешно изменена!',
      //       [{label: 'Ok'}]);
      //     dialogRef.afterClosed()
      //       .subscribe(() => {
      //         this.routeNavigationService.toAdverts();
      //       });
      //   });
    } else {
      this.subscription = this.userService.createNewUser(user).subscribe((data) => {
        alert(data);
        // const dialogRef = this.mws.openModalWindow(
        //   titleForm,
        //   'Учётная запись успешно зарегистрированна в данной системе!',
        //   [{label: 'Ok'}]);
        // dialogRef.afterClosed()
        //   .subscribe(() => {
        //     this.routeNavigationService.toSignIn();
        //   });
      });
    }
  }

  public checkedControlValidations(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control.invalid && control.touched ||
      this.showValidationsFields && control.invalid;
  }

  public toSignin(): void {
    this.routeNavigationService.toSignIn();
  }
}
