import { Injectable } from '@angular/core';
import { MINECRAFT_ENTITITES, MinecraftEntity } from './entities.model';
import { MINECRAFT_ITEMS, MinecraftItem } from './items.model';


@Injectable()
export class MinecraftService {

  public getEntity(key: string): MinecraftEntity {
    key = this.toUnderScoreCase(key);
    const entity = MINECRAFT_ENTITITES[key];
    console.log(key);

    return <MinecraftEntity>{
      key: key,
      type: entity.type,
      meta: entity.meta,
      name: entity.name,
      image: '/assets/minecraft/entities/' + entity.type + '.png',
    };
  }

  public getItem(key: string): MinecraftItem {
    key = this.toUnderScoreCase(key);
    const item = MINECRAFT_ITEMS[key];

    return <MinecraftItem>{
      key: key,
      type: item.type,
      meta: item.meta,
      name: item.name,
      image: '/assets/minecraft/items/' + item.type + '-' + item.meta + '.png',
    };
  }

  private toUnderScoreCase(string: string): string {
    return string.replace(/\.?([A-Z]+)/g, function (x, y) {
      return `_${y.toLowerCase()}`;
    }).replace(/^_/, '');
  }

}
