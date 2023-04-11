import { Module } from '@nestjs/common';
import { AuthModule } from '@src/auth/auth.module';
import { ClienteModule } from '@src/cliente/cliente.module';
import { EstacionamentoModule } from '@src/estacionamento/estacionamento.module';
import { PrismaModule } from '@src/prisma/prisma.module';

const routes = [
    AuthModule,
    ClienteModule,
    PrismaModule,
    EstacionamentoModule
]
@Module({
    imports: [
        ...routes
    ],
    exports: [
        ...routes
    ]
})
export class RouterModule {}
