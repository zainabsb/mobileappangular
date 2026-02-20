import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        this.api.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((err) =>
            of(
              UsersActions.loadUsersFailure({
                error: err?.error?.message || 'Failed to load users',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
