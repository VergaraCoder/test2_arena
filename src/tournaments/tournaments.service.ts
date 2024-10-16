import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';
import { manageErrors } from 'src/common/errors/custom/err.custom';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepository: Repository<Tournament>,
  ) {}
  async create(createTournamentDto: CreateTournamentDto) {
    const data = this.tournamentRepository.create(createTournamentDto);
    await this.tournamentRepository.save(data);
    return data;
  }

  async findAll() {
    try {
      const find = await this.tournamentRepository.find();
      if (find.length == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'DOES THERE ARE NOT TOURNAMENTS .',
        });
      }
      return find;
    } catch (err: any) {
      throw manageErrors.signatureError(err.message);
    }
  }

  async findOne(id: number) {
    try {
      const findOne = await this.tournamentRepository.findOne({
        where: { id: id },
      });
      if (!findOne) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'DOES THERE ARE NOT THAT TOURNAMENT .',
        });
      }
      return findOne;
    } catch (err: any) {
      throw manageErrors.signatureError(err.message);
    }
  }

  async update(id: number, updateTournamentDto: UpdateTournamentDto) {
    try {
      const { affected } = await this.tournamentRepository.update(
        id,
        updateTournamentDto,
      );
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILED TO UPDATED .',
        });
      }
      return 'Perfectly updated .';
    } catch (err: any) {
      throw manageErrors.signatureError(err.message);
    }
  }

  async remove(id: number) {
    try {
      const { affected } = await this.tournamentRepository.delete(id);
      if (affected == 0) {
        throw new manageErrors({
          type: 'NOT_FOUND',
          message: 'FAILED TO DELETED .',
        });
      }
      return 'Perfectly deleted .';
    } catch (err: any) {
      throw manageErrors.signatureError(err.message);
    }
  }
}
