import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from './shared/user.model';

@Component({
  selector: 'mine-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private _users: UserModel[];

  get users(): UserModel[] {
    return this._users;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._users = this.route.snapshot.data['users'];
    console.log('this._users', this._users);
  }

}
