import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepo.findOne({
      where: { username },
      select: ['id', 'firstName', 'lastName', 'age', 'username', 'password'],
    });
  }

  async create(dto: RegisterDto): Promise<User> {
    const user = this.usersRepo.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      age: dto.age,
      username: dto.username,
      password: dto.password,
    });

    return this.usersRepo.save(user);
  }
}
