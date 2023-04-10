import { IsString, MinLength } from 'class-validator';

export class UpdatedManagerDto {
  @IsString()
  @MinLength(1)
  nome: string;

  @IsString()
  @MinLength(1)
  email: string;

  id_estacionamento: number;
}
