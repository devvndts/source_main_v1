import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsersService } from '../users.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsEmailUniqe', async: true })
@Injectable()
export class IsEmailUniqe implements ValidatorConstraintInterface {
    constructor(private readonly userService:UsersService){}

    validate = async (value: any): Promise<boolean> => {
        return !await this.userService.findEmail((value));  
  }
  defaultMessage(args: ValidationArguments) {
    return 'Email đã tồn tại'; 
  }
}