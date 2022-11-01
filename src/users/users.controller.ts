import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DepositUserDto } from './dto/deposit.dto';
import { WithdrawUserDto } from './dto/withdraw.dto';
import { ResultWithError } from 'src/common/types/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const result: ResultWithError = await this.usersService.create(createUserDto);
    if (result.error !== null) {
      throw new HttpException(result.error, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return result.data;
  }

  @Post('deposit')
  async deposit(@Body() data: DepositUserDto) {

    const result: ResultWithError = await this.usersService.deposit(data);
    if (result.error !== null) {
      throw new HttpException(result.error, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return result.data;
  }
  
  @Post('withdraw')
  async withdraw(@Body() data: WithdrawUserDto) {

    const result: ResultWithError = await this.usersService.withdraw(data);
    if (result.error != null) {
      console.log(result.error);
      throw new HttpException(result.error, HttpStatus.BAD_REQUEST)
    }

    return result.data;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    const result: ResultWithError = await this.usersService.findOne(+id);
    if (result.error != null) {
      console.log(result.error);
      throw new HttpException(result.error, HttpStatus.BAD_REQUEST)
    }

    return result.data;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
