import { CacheModule, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { ManagerModule } from './manager/manager.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RedisClientOptions } from 'redis';
import { configRedisCache } from '@config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<RedisClientOptions>(configRedisCache),
    AuthModule,
    ClienteModule,
    ManagerModule,
    PrismaModule,
  ],
})
export class AppModule {}
