import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {User, UserService} from 'src/app/common/services/user.service';

@Directive({
  selector: '[forbiddenEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => EmailForbiddenDirective), multi: true }]
})
export class EmailForbiddenDirective implements AsyncValidator {

  constructor(private userService: UserService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    return timer(1000).pipe(
      switchMap(() => {
        if (!control.value || control.invalid) {
          return of(null);
        }
        return this.userService.getUserByEmail(control.value);
      }),
      map((user: User) => user ? { forbiddenEmail: true } : null)
    );
  }
}
