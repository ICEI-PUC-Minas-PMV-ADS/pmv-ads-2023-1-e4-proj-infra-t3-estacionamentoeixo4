import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisClientOptions } from 'redis';
import { configRedisCache } from '@config/redis.config';
import { RouterModule } from './router/router.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<RedisClientOptions>(configRedisCache),
    RouterModule,
  ],
})
export class AppModule {}
