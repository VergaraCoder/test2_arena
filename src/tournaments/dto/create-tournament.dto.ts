import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentDto {
  @IsNotEmpty()
  @IsString()
  nameTournament: string;

  @IsNotEmpty()
  @IsInt()
  totalNumbersPlayers: number;

  @IsNotEmpty()
  @IsInt()
  currentNumberPlayers: number;

  @IsNotEmpty()
  @IsString()
  endDateIncription: Date;

  @IsNotEmpty()
  @IsString()
  startTournament: Date;
}
