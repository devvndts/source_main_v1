import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
    
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
}