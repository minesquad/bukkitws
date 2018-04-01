import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from './shared/user.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'mine-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private _users: UserModel[];
  private _dataSource: MatTableDataSource<UserModel>;

  get users(): UserModel[] {
    return this._users;
  }

  get dataSource(): MatTableDataSource<UserModel> {
    return this._dataSource;
  }

  displayedColumns = ['name', 'stats', 'advancements'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._users = this.route.snapshot.data['users'];
    this._dataSource = new MatTableDataSource(this._users);
  }
}
