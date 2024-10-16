import { Module } from '@nestjs/common';
import { PendingGamesService } from './pending-games.service';
import { PendingGamesController } from './pending-games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PendingGame } from './entities/pending-game.entity';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [TypeOrmModule.forFeature([PendingGame]), PlayersModule],
  controllers: [PendingGamesController],
  providers: [PendingGamesService],
  exports: [TypeOrmModule],
})
export class PendingGamesModule {}
