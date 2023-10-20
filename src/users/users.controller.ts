import { Controller, Get, Query,Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModule } from './users.module';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @Get(':id')
  getUserByUuid(@Param('id') id: string) {
    return this.usersService.getUserByUuid(id);
  }

  @Patch(':id')
  updateInfoUser(@Param('id') id: string,@Body() updateUserDto: UpdateUserDto){
    return this.usersService.updateInfoUser(id,updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.usersService.deleteUser(id);
  }


}
