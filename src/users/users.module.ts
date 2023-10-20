import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { IsUsernameUnique } from './validators/IsUsernameUnique';
import { IsEmailUniqe } from './validators/IsEmailUniqe';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService,IsUsernameUnique,IsEmailUniqe],
  exports: [TypeOrmModule,UsersService]
})
export class UsersModule {}
