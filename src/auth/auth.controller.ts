import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth-guard.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        return this.authService.sign(req.user);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    profile(@Request() req) {
        return req.user;
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto) {
        return this.authService.registerUser(createUserDto);
    }
}
