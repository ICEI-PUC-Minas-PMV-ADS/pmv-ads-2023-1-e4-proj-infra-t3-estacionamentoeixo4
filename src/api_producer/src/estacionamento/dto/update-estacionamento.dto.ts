import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsInt,
  IsDecimal,
} from 'class-validator';
import { CreateEstacionamentoDto } from './create-estacionamento.dto';

export class UpdateEstacionamentoDto extends PartialType(
  CreateEstacionamentoDto,
) {
  @IsDecimal()
  preco: number;

  @IsInt()
  vagas_preferenciais: number;

  @IsInt()
  vagas_gerais: number;

  @IsString()
  @MaxLength(255)
  razao_social: string;

  @IsString()
  @MinLength(14)
  @MaxLength(14)
  cnpj: string;
}
