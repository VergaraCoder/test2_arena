import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Champion } from 'src/champion/entities/champion.entity';
import { PendingGame } from 'src/pending-games/entities/pending-game.entity';
import { Player } from 'src/players/entities/player.entity';
import { Position } from 'src/positions/entities/position.entity';
import { Result } from 'src/results/entities/result.entity';
import { Role } from 'src/role/entities/role.entity';
import { TournamentsPlayer } from 'src/tournaments-players/entities/tournaments-player.entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CredentialsOrm implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: +this.configService.get<string>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      entities: [
        User,
        Role,
        Tournament,
        TournamentsPlayer,
        Result,
        Position,
        PendingGame,
        Player,
        Champion,
      ],
      synchronize: true,
    };
  }
}
