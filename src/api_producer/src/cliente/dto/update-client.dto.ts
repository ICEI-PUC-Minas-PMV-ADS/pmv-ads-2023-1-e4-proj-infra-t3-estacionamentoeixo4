import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsString()
  @MinLength(8)
  // @ApiProperty() Caso tenha documentação no swagger, ainda vamos implementar
  name: string;

  @IsString()
  @MinLength(8)
  email: string;

  @IsString()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
}
