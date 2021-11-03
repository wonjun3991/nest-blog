import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.UserRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update({ id: id }, updateUserDto);
  }

  remove(id: number) {
    return this.UserRepository.delete({ id: id });
  }
}
