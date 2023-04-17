import {
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  IsNotEmpty,
} from 'class-validator';

export class CreateVeiculoDto {
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
