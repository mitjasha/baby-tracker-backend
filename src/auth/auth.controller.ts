import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './decorators/user.decorator';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserResponseInterface } from './types/use.response';
import { UserEntity } from './user.entity';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('users/signup')
  async signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.signUp(authCredentialsDto);

    return this.authService.buildUserResponse(user);
  }

  @Post('users/login')
  async login(@Body() loginDto: LoginUserDto): Promise<UserResponseInterface> {
    const user = await this.authService.login(loginDto);
    return this.authService.buildUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.authService.buildUserResponse(user);
  }
}
