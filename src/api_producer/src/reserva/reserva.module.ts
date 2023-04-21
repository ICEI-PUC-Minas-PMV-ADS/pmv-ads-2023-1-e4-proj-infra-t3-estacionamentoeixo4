import { Module } from '@nestjs/common';
import { ReservaController } from './reserva.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_CONSUMER_RESERVA',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['host.docker.internal:9094'],
          },
          producer: {
            createPartitioner: Partitioners.DefaultPartitioner,
          },
          consumer: {
            readUncommitted: false,
            groupId: 'reserva',
          },
        },
      },
    ]),
  ],
  controllers: [ReservaController],
})
export class ReservaModule {}
