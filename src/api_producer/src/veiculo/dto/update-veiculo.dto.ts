import { PartialType } from '@nestjs/mapped-types';
import { CreateVeiculoDto } from './create-veiculo.dto';
import {
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  IsNotEmpty,
} from 'class-validator';

export class UpdateVeiculoDto extends PartialType(CreateVeiculoDto) {
  @IsString()
  @MaxLength(10)
  placa: string;

  @IsString()
  @MaxLength(20)
  modelo: string;

  @IsInt()
  @IsNotEmpty()
  id_cliente: string;
}
