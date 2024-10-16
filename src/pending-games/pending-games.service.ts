import { Injectable } from '@nestjs/common';
import { CreatePendingGameDto } from './dto/create-pending-game.dto';
import { UpdatePendingGameDto } from './dto/update-pending-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PendingGame } from './entities/pending-game.entity';
import { Repository } from 'typeorm';
import { manageErrors } from 'src/common/errors/custom/err.custom';

@Injectable()
export class PendingGamesService {
  constructor(
    @InjectRepository(PendingGame)
    private pendingGameRepository: Repository<PendingGame>,
  ) {}

  async create(createPendingGameDto: CreatePendingGameDto) {
    const data = this.pendingGameRepository.create(createPendingGameDto);
    await this.pendingGameRepository.save(data);
    return data;
  }

  async findAll() {
    try {
      const find = await this.pendingGameRepository.find();
      if (find.length == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'DOES THERE ARE NOT PENDING GAMES .',
        });
      }
      return find;
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async findOne(id: number) {
    try {
      const findOne = await this.pendingGameRepository.findOne({
        where: { id: id },
      });
      if (!findOne) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'DOES THERE ARE NOT PENDING GAMES .',
        });
      }
      return findOne;
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async update(id: number, updatePendingGameDto: UpdatePendingGameDto) {
    try {
      const { affected } = await this.pendingGameRepository.update(
        id,
        updatePendingGameDto,
      );
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILED TO UPDATED .',
        });
      }
      return 'Perfectly updated .';
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }

  async remove(id: number) {
    try {
      const { affected } = await this.pendingGameRepository.delete(id);
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILED TO DELETED .',
        });
      }
      return 'Perfectly deleted .';
    } catch (err: any) {
      throw new manageErrors.signatureError(err.message);
    }
  }
}
