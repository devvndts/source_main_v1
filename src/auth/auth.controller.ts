import { Controller, Post, Request,UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
    constructor(private readonly userService:UsersService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async signIn(@Request() req) {
        return req.user;
    }

}
