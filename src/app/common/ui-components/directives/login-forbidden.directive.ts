import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable, of, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {User, UserService} from 'src/app/common/services/user.service';

@Directive({
  selector: '[forbiddenLogin]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => LoginForbiddenValidator), multi: true}]
})
export class LoginForbiddenValidator implements AsyncValidator {

  constructor(private userService: UserService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    return timer(1000).pipe(
      switchMap(() => {
        if (!control.value || control.invalid) {
          return of(null);
        }
        return this.userService.getUserByLogin(control.value);
      }),
      map((user: User) => user ? {forbiddenLogin: true} : null)
    );
  }
}
