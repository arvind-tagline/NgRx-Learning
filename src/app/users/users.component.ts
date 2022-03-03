import { Component, OnInit } from '@angular/core';
import { User } from '../InterFace/user';
import { UserService } from '../user.service';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as fromUser from '../user.selectors';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public apiData!: User[];
  public erroeMessage!: string;
  public data: boolean = false;

  constructor(private userService: UserService, private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(new UserActions.LoadUsers());//actions dispatch
    this.store.pipe(select(fromUser.getUser)).subscribe(
      (res: User[]) => {
        this.apiData = res;
        // this.data = true;
      }
    );

    this.store.pipe(select(fromUser.getError)).subscribe(
      (err: any) => {
        this.erroeMessage = err.message;
      }
    );

    // this.userService.getData().subscribe({
    //   next: (res: any) => {
    //     this.apiData = res;
    //   },
    //   error: (err: any) => {
    //     console.log('err', err);
    //   }
    // });
  }

}
