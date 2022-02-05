import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './decorators/user.decorator';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserResponseInterface } from './types/use.response';
import { UserEntity } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.signUp(authCredentialsDto);
    console.log(user);

    return this.authService.buildUserResponse(user);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.authService.buildUserResponse(user);
  }
}
