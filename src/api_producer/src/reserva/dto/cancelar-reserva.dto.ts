import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CanceledReservaDto {
  @IsNumber()
  @ApiProperty({
    description: 'Id Cliente',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  id_cliente: number;

  @IsNumber()
  @ApiProperty({
    description: 'Id Estacionamento',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  id_estacionamento: number;

  @IsDateString()
  @ApiProperty({
    description: 'Cancelar  reserva',
    // default: '2023-04-23T18:50:29.190Z',
    type: 'string',
  })
  @IsNotEmpty()
  canceledAt: string;
}
