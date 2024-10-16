import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Champion } from './entities/champion.entity';
import { PlayersModule } from 'src/players/players.module';
import { TournamentsModule } from 'src/tournaments/tournaments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Champion]),
    PlayersModule,
    TournamentsModule,
  ],
  controllers: [ChampionController],
  providers: [ChampionService],
  exports: [TypeOrmModule],
})
export class ChampionModule {}
