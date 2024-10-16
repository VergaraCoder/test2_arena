import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { manageErrors } from 'src/common/errors/custom/err.custom';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const dataPlayer = this.playerRepository.create(createPlayerDto);
    await this.playerRepository.save(dataPlayer);
    return dataPlayer;
  }

  async findAll() {
    try {
      const find = await this.playerRepository.find();
      if (find.length == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'DOES THERE ARE NOT PLAYERS .',
        });
      }
      return find;
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async findOne(id: number) {
    try {
      const findOne = await this.playerRepository.findOne({
        where: { id: id },
      });
      if (!findOne) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'THAT ID PLAYER NOT FOUND .',
        });
      }
      return findOne;
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    try {
      const { affected } = await this.playerRepository.update(
        id,
        updatePlayerDto,
      );
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILED TO UPDATE .',
        });
      }
      return 'PERFECTLY UPDATED .';
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async remove(id: number) {
    try {
      const { affected } = await this.playerRepository.delete(id);
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILTED TO DELETED .',
        });
      }
      return 'Perfectly deleted .';
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }
}
