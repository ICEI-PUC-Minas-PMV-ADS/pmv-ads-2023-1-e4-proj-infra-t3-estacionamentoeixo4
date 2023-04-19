import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CanceledReservaDto {
  @IsNumber()
  @ApiProperty({
    description: 'Id da reserva',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  id_reserva: number;
}
