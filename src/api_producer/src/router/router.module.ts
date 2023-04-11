import { Module } from '@nestjs/common';
import { AuthModule } from '@src/auth/auth.module';
import { ClienteModule } from '@src/cliente/cliente.module';
import { EstacionamentoModule } from '@src/estacionamento/estacionamento.module';
import { ManagerModule } from '@src/manager/manager.module';
import { PrismaModule } from '@src/prisma/prisma.module';
import { VeiculoModule } from '@src/veiculo/veiculo.module';

const routes = [
  AuthModule,
  ClienteModule,
  VeiculoModule,
  PrismaModule,
  EstacionamentoModule,
  ManagerModule,
];
@Module({
  imports: [...routes],
  exports: [...routes],
})
export class RouterModule {}
