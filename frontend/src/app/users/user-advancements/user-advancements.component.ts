import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mine-user-advancements',
  templateUrl: './user-advancements.component.html',
  styleUrls: ['./user-advancements.component.scss']
})
export class UserAdvancementsComponent implements OnInit {

  private _advancements: any;

  get advancements(): any {
    return this._advancements;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._advancements = this.route.snapshot.data['advancements'];
    console.log('this._advancements', this._advancements);
  }

}
