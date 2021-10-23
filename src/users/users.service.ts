import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.UserRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update({id: id, User})
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
