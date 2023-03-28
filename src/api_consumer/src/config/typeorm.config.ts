import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleAsyncOptions> => {
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: __dirname + '/../database/migrations',
            },
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            synchronize: false,
            logging: true,
        } as TypeOrmModuleAsyncOptions;
    },
};

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/../database/migrations',
    },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    synchronize: false,
    logging: true,
} as TypeOrmModuleOptions;


export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrationsTableName: 'migrations',
    entities: [__dirname + '/../**/entities/*.entity{.ts,.js}',],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/../database/migrations',
    },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    synchronize: false,
    logging: true,


} as DataSourceOptions)