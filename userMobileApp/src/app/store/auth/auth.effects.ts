import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ username, password }) =>
        this.api.login({ username, password }).pipe(
          map((res) => AuthActions.loginSuccess({ token: res.token })),
          catchError((err) =>
            of(
              AuthActions.loginFailure({
                error: err?.error?.message || 'Login failed',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
