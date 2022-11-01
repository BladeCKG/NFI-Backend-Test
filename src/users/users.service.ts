import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { ResultWithError } from 'src/common/types/common';
import { Logger } from 'winston';
import { CreateUserDto } from './dto/create-user.dto';
import { DepositUserDto } from './dto/deposit.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { WithdrawUserDto } from './dto/withdraw.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: EntityRepository<User>,
    @Inject('winston') private readonly logger: Logger,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ResultWithError> {
    let result: ResultWithError;
    try {
      this.logger.info(`Registering new user [name: ${createUserDto.name}, email: ${createUserDto.email}]`);

      // const newUser = new User();
      // newUser.name = createUserDto.name;
      // newUser.email = createUserDto.email;
      const createdUser: User = this.userRepo.create(createUserDto);
      await this.userRepo.persistAndFlush(createdUser);
  
      result = new ResultWithError(null, createdUser);
    } catch (error) {
      this.logger.error(`Error in registering new user [name: ${createUserDto.name}, email: ${createUserDto.email}]: ${error}`);
      result = new ResultWithError(error, null);
    } finally {
      return result;
    }
    // return 'This action adds a new user';
  }

  async deposit(depositUserDto: DepositUserDto): Promise<ResultWithError> {
    let result: ResultWithError;
    try {
      this.logger.info(`Depositing user [id: ${depositUserDto.id}, amount: ${depositUserDto.amount}]`);

      const user: User = await this.userRepo.findOneOrFail({id: depositUserDto.id});
      user.balance += depositUserDto.amount;

      await this.userRepo.persistAndFlush(user);
      result = new ResultWithError(null, user)
    } catch (error) {
      this.logger.error(`Error in depositing user [id: ${depositUserDto.id}, amount: ${depositUserDto.amount}]: ${error}`);
      result = new ResultWithError(error, null)
    } finally {
      return result;
    }
    // return 'This action adds a new user';
  }

  async withdraw(withdrawUserDto: WithdrawUserDto): Promise<ResultWithError> {
    let result: ResultWithError;
    try {
      this.logger.info(`Depositing user [id: ${withdrawUserDto.id}, amount: ${withdrawUserDto.amount}]`);

      const user: User = await this.userRepo.findOneOrFail({id: withdrawUserDto.id});
      if (user.balance < withdrawUserDto.amount) {
        result = new ResultWithError("Withdraw amount must be less than balance", user)
      }else {
        user.balance -= withdrawUserDto.amount;

        await this.userRepo.persistAndFlush(user);
        result = new ResultWithError(null, user)
      }
    } catch (error) {
      this.logger.error(`Error in depositing user [id: ${withdrawUserDto.id}, amount: ${withdrawUserDto.amount}]: ${error}`);
      result = new ResultWithError(error, null)
    } finally {
      return result;
    }
    // return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    let result: ResultWithError;
    try {
      this.logger.info(`Finding user [id: ${id}]`);

      const user: User = await this.userRepo.findOneOrFail({id});
      result = new ResultWithError(null, user)
    } catch (error) {
      this.logger.error(`Finding user [id: ${id}]: ${error}`);
      result = new ResultWithError(error, null)
    } finally {
      return result;
    }
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
