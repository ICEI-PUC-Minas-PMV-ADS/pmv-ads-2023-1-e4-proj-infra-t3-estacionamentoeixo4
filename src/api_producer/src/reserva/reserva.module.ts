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
            groupId: 'reserva-consumer-group',
          },
        },
      },
    ]),
  ],
  controllers: [ReservaController],
})
export class ReservaModule {}
