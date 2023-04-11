import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RedisClientOptions } from 'redis';
import { configRedisCache } from '@config/redis.config';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<RedisClientOptions>(configRedisCache),
    AuthModule,
    ClienteModule,
    PrismaModule,
    VeiculoModule,
  ],
})
export class AppModule {}
