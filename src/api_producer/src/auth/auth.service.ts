import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto/signin-dto';
import { PrismaService } from '@src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }


    signinLocal(client: SigninDto) {

        
     }

    logout() { }

    refreshToken() { }

}
