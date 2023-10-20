import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsersService } from 'src/users/users.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUsernameUnique', async: true })
@Injectable()
export class IsUsernameUnique implements ValidatorConstraintInterface {
    constructor(private readonly userService:UsersService){}
    validate = async (value: any): Promise<boolean> => {
      console.log(this.userService);
      return !await this.userService.findUserName((value));  
 
  }
  defaultMessage(args: ValidationArguments) {
    return 'Tên đăng nhập đã tồn tại'; 
  }
}