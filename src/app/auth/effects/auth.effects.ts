import { User } from './../../core/models/user';
import { filter, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../actions/auth.actions';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationEffects {
  Authorized$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AUTHORIZE),
      switchMap(() => this.authService.authorized()),
      filter((data) => data.error !== 'unauthenticated'),
      map(() => this.authActions.loginSuccess())
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authActions: AuthActions
  ) {}
}
