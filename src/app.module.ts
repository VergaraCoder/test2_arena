import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TournamentsPlayersModule } from './tournaments-players/tournaments-players.module';
import { PendingGamesModule } from './pending-games/pending-games.module';
import { ChampionModule } from './champion/champion.module';
import { PositionsModule } from './positions/positions.module';
import { AuthModule } from './auth/auth.module';
import { ResultsModule } from './results/results.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    PlayersModule,
    TournamentsModule,
    TournamentsPlayersModule,
    PendingGamesModule,
    ChampionModule,
    PositionsModule,
    AuthModule,
    ResultsModule,
    UserModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
