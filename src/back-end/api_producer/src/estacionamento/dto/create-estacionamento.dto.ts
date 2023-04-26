import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  IsDecimal,
  IsNotEmpty,
} from 'class-validator';

export class CreateEstacionamentoDto {
  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty({
    type: 'decimal',
    minimum: 6,
    default: 12340,
  })
  preco: Prisma.Decimal;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: 'number',
    default: 12,
  })
  vagas_preferenciais: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: 'number',
    default: 24,
  })
  vagas_gerais: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    default: 'JhoDoeSJW',
  })
  @MaxLength(255)
  razao_social: string;

  @IsString()
  @MinLength(14)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string'
  })
  @MaxLength(14)
  cnpj: string;
}
