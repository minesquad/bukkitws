import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAdvancementModel } from '../shared/user-advancement.model';

@Component({
  selector: 'mine-user-advancements',
  templateUrl: './user-advancements.component.html',
  styleUrls: ['./user-advancements.component.scss']
})
export class UserAdvancementsComponent implements OnInit {

  private _advancements: UserAdvancementModel[];

  get advancements(): UserAdvancementModel[] {
    return this._advancements;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._advancements = this.route.snapshot.data['advancements'];
  }

}
