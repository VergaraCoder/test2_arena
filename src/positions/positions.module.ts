import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { TournamentsPlayersModule } from 'src/tournaments-players/tournaments-players.module';

@Module({
  imports: [TypeOrmModule.forFeature([Position]), TournamentsPlayersModule],
  controllers: [PositionsController],
  providers: [PositionsService],
  exports: [TypeOrmModule],
})
export class PositionsModule {}
