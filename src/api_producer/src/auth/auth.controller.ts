import {
  Controller,
  CacheInterceptor,
  UseInterceptors,
  Body,
  Post,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/me.input';
import { RefreshTokenGuard } from '@src/common/guards/refreshToken.guard';
import { Request } from 'express';
import { AccessTokenGuard } from '@src/common/guards/accessToken.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseInterceptors(CacheInterceptor)
  @Post('me')
  me(@Body() auth: AuthDTO) {
    return this.authService.me(auth);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }
}
