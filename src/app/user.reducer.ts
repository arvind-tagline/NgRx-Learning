import { Action } from '@ngrx/store';
import { User } from './InterFace/user';
import { UserActions, UserActionTypes } from './user.actions';


export const userFeatureKey = 'usersState';

export interface State {
  users: User[],
  error: string
}

export const initialState: State = {
  users: [],
  error: ''
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state
      }

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }

    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }

    default:
      return state;
  }
}
