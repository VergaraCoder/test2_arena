import { Player } from 'src/players/entities/player.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pendigGames')
export class PendingGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  playerId1: number;

  @Column()
  playerId2: number;

  @ManyToOne(() => Player, (player1) => player1.pendingGame1)
  player1: Player;

  @ManyToOne(() => Player, (player2) => player2.pendingGame2)
  player2: Player;
}
