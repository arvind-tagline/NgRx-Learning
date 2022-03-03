import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, Observable } from 'rxjs';
import * as userActions from './user.actions'
import { UserService } from './user.service';



@Injectable()
export class UserEffects {



  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.getData().pipe(
        map(users => (new userActions.LoadUsersSuccess({ data: users }))),
        catchError(err => of(new userActions.LoadUsersFailure({ error: err })))
      )
    )
  )
}
