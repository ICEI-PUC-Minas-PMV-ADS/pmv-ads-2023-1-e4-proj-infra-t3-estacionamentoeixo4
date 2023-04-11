import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsString()
  @MaxLength(8)
  name: string;

  @IsString()
  @MaxLength(50)
  email: string;

  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
}
