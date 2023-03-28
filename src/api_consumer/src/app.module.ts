import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '@config/typeorm.config';


@Module({
  imports: [
    ConfigModule.forRoot(),//Configura as variáveis de ambiente 
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),//Instancia o Typorm e inicia a conexão com  o banco 
    ClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
