import { PlayerModel } from './player.model';

export interface EventModel {
  type: string
  player: PlayerModel
  data?: any
}
