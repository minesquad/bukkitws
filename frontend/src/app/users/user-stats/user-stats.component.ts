import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStatModel } from '../shared/user-stat.model';

@Component({
  selector: 'mine-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  private _stats: UserStatModel[];

  get stats(): UserStatModel[] {
    return this._stats;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._stats = this.route.snapshot.data['stats'];
  }

}
