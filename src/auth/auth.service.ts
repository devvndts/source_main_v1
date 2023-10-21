import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {
    
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserName(username);
    if(user){
        const checkPassword = this.usersService.isCheckPass(pass,user.password);
        if (checkPassword === true) {
          return {
            id: user.id,
            username: user.username
          };
        }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}