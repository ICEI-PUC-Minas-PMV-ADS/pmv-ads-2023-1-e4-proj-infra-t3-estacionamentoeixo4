import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { CanceledReservaDto } from './dto/cancelar-reserva.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Reserva')
@Controller('reserva')
export class ReservaController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_CONSUMER_RESERVA') private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.clientKafka.connect();
    this.clientKafka.subscribeToResponseOf('reservar_vaga');
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Reserva criada com sucesso!',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: [CreateReservaDto] })
  async create(@Body() createReservaDto: CreateReservaDto) {
    //Envia os dados para o kafka e espera a resposta
    this.clientKafka
      .send('reservar_vaga', JSON.stringify(createReservaDto))
      .subscribe({
        next: (reply: any) => {
          console.log(reply);
        },
      });
  }

  @Patch(':id_reserva')
  @ApiResponse({
    status: 200,
    description: 'Reserva cancelada com sucesso!',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CanceledReservaDto, description: 'Reserva cancelada' })
  update(
    @Param('id_reserva') id: string,
    @Body() ReservaCanceledDto: CanceledReservaDto,
  ) {
    this.clientKafka
      .send('cancelar_reserva', JSON.stringify(ReservaCanceledDto))
      .subscribe({
        next: (replay: any) => {
          console.log(replay);
        },
      });
  }
}
