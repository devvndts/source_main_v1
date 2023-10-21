import { AuthService } from './auth.service';
import { Controller, Post,Get, Request,UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from 'src/decorator/custom.decorator';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService:UsersService,
        private authService: AuthService
    ){}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async signIn(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
