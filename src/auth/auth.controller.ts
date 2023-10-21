import { AuthService } from './auth.service';
import { Controller, Post, Request,UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService:UsersService,
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async signIn(@Request() req) {
        return this.authService.login(req.user);
    }

}
