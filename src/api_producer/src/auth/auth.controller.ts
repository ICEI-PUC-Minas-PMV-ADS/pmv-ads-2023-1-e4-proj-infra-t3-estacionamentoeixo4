import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signin')
  signinLocal(@Body() inputSignin: SigninDto) {
    this.authService.signinLocal(inputSignin);
  }

  @Post('/local/logout')
  logout() {
    this.authService.logout();
  }

  @Post('/local/refresh')
  refreshToken() {
    this.authService.refreshToken();
  }
}
