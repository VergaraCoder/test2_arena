import { Module } from '@nestjs/common';
import { TournamentsPlayersService } from './tournaments-players.service';
import { TournamentsPlayersController } from './tournaments-players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsPlayer } from './entities/tournaments-player.entity';
import { PlayersModule } from 'src/players/players.module';
import { TournamentsModule } from 'src/tournaments/tournaments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TournamentsPlayer]),
    PlayersModule,
    TournamentsModule,
  ],
  controllers: [TournamentsPlayersController],
  providers: [TournamentsPlayersService],
  exports: [TypeOrmModule],
})
export class TournamentsPlayersModule {}
