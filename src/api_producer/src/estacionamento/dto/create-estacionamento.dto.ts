import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsInt,
  IsDecimal,
} from 'class-validator';

export class CreateEstacionamentoDto {
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

  @IsInt()
  @IsNotEmpty()
  administrador_id: number;
}
