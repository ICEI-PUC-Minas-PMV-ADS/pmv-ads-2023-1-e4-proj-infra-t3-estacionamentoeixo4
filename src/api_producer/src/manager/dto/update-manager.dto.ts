import { IsString, MinLength } from 'class-validator';

export class UpdateManagerDto {
  @IsString()
  @MinLength(1)
  nome: string;

  @IsString()
  @MinLength(1)
  email: string;
}
