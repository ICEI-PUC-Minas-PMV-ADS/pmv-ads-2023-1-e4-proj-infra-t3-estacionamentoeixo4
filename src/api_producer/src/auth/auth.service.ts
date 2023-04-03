import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/prisma/prisma.service';
import { SigninDto } from './dto/signin-dto';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }


    signinLocal(client: SigninDto) {

        
     }

    logout() { }

    refreshToken() { }

}
