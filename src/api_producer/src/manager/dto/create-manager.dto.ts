import { IsString, MinLength } from 'class-validator';

export class CreateManagerDto {
  @IsString()
  @MinLength(1)
  nome: string;

  @IsString()
  @MinLength(1)
  email: string;

  id_estacionamento: number;

  @MinLength(8)
  senha: string;
}
