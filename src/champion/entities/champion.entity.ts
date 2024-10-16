import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('champions')
export class Champion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playerId: number;

  @Column()
  tournamentId: number;
}
