import { TournamentsPlayer } from 'src/tournaments-players/entities/tournaments-player.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tournamentPlayerId: number;

  @Column()
  score: number;

  @ManyToOne(
    () => TournamentsPlayer,
    (tournamentPlayer) => tournamentPlayer.position,
  )
  tournamentPlayer: TournamentsPlayer;
}
