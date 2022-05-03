import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepo: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<UsersEntity> {
    return await this.userRepo.findOne(id);
  }

  async create(user: UsersEntity): Promise<UsersEntity> {
    return await this.userRepo.save(user);
  }

  async update(user: UsersEntity): Promise<UpdateResult> {
    return await this.userRepo.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepo.delete(id);
  }
}
