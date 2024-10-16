import { IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePendingGameDto {
  @IsNotEmpty()
  @IsInt()
  playerId1: number;

  @IsNotEmpty()
  @IsInt()
  playerId2: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}
