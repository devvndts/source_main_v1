import { IsEmail, IsNotEmpty,IsString,IsDate,IsBoolean,MinLength,Validate } from 'class-validator';
import { IsUsernameUnique } from '../validators/IsUsernameUnique';
import { IsEmailUniqe } from '../validators/IsEmailUniqe';
export class CreateUserDto {


    @IsNotEmpty()
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    @Validate(IsUsernameUnique)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @Validate(IsEmailUniqe)
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    phone: string;

    birthday: string;
    
    gender: boolean;

    isActive: boolean;
}
