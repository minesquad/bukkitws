import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mine-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  private _stats: any;

  get stats(): any {
    return this._stats;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._stats = this.route.snapshot.data['stats'];
  }

}
