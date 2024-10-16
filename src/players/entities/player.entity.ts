import { PendingGame } from 'src/pending-games/entities/pending-game.entity';
import { TournamentsPlayer } from 'src/tournaments-players/entities/tournaments-player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickName: string;

  @Column()
  age: number;

  @Column()
  country: string;

  @OneToMany(
    () => TournamentsPlayer,
    (tournamentsPlayer) => tournamentsPlayer.player,
  )
  tournamentPlayer: TournamentsPlayer[];

  @OneToMany(() => PendingGame, (pendingGame) => pendingGame.playerId1)
  pendingGame1: PendingGame[];

  @OneToMany(() => PendingGame, (pendingGame) => pendingGame.playerId2)
  pendingGame2: PendingGame[];
}
