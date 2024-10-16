import { Tournament } from './../../tournaments/entities/tournament.entity';
import { Player } from 'src/players/entities/player.entity';
import { Position } from 'src/positions/entities/position.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tournamentPlayers')
export class TournamentsPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tournamentId: number;

  @Column()
  playerId: number;

  @ManyToOne(() => Player, (player) => player.tournamentPlayer)
  player: Player;

  @ManyToOne(() => Tournament, (tournament) => tournament.tournamentPlayer)
  tournament: Tournament;

  @OneToMany(() => Position, (position) => position)
  position: Position[];
}
