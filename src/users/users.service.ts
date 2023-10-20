import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import {compareSync, genSaltSync,hashSync} from "bcrypt";
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

@Injectable()
@QueryService(Users)
export class UsersService extends TypeOrmQueryService<Users> {
  constructor(
    @InjectRepository(Users) 
    private usersRepository: Repository<Users>
  ){

    super(usersRepository, { useSoftDelete: true });
  }

  async createUser(createUserDto: CreateUserDto) {

    const password = createUserDto.password;
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password,salt);
    createUserDto.password = hash;
    return await this.usersRepository.save({...createUserDto});
  }

  async findUserName(value: string){
    return await this.usersRepository.findOneBy({username:value});
  }

  async getAllUser(){
    return await this.usersRepository.find({
      select:{}
    })
  }
  isCheckPass(pass: string, passUser: string){
    return compareSync(pass, passUser); // false

  }
  async getUserByUuid(id: string){
    return await this.usersRepository.findOneBy({id:id})
  }
  async findEmail(value: string){
    return await this.usersRepository.findOneBy({email:value});
  }

  async updateInfoUser(id: string,updateUserDto:UpdateUserDto){
    return await this.usersRepository.update({id: id},{...updateUserDto});
  } 

  async deleteUser(id: string){
    this.usersRepository.update({id: id},{isDeleted:true});
    return await this.usersRepository.softDelete(id);
  } 
}
