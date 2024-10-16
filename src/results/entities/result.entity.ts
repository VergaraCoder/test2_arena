import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('results')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winnerId: number;

  @Column()
  lossedId: number;

  @Column()
  pendingGameId: number;
}
