import { TournamentsPlayer } from 'src/tournaments-players/entities/tournaments-player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameTournament: string;

  @Column()
  totalNumbersPlayers: number;

  @Column()
  currentNumberPlayers: number;

  @Column()
  endDateIncription: Date;

  @Column()
  startTournament: Date;

  @OneToMany(() => TournamentsPlayer, (tourPlayer) => tourPlayer.tournament)
  tournamentPlayer: TournamentsPlayer[];
}
