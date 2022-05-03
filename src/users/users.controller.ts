import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<UsersEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Post()
  create(@Body() user: UsersEntity) {
    return this.userService.create(user);
  }

  @Put()
  update(@Body() user: UsersEntity) {
    return this.userService.update(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.userService.delete(params.id);
  }
}
