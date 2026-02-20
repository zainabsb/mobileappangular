import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface UsersState {
  users: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (s) => ({ ...s, loading: true, error: null })),
  on(UsersActions.loadUsersSuccess, (s, { users }) => ({ ...s, users, loading: false })),
  on(UsersActions.loadUsersFailure, (s, { error }) => ({ ...s, error, loading: false })),
);
