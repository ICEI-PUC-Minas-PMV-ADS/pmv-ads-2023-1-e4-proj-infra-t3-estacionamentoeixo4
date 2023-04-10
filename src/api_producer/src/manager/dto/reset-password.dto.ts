import { MinLength } from 'class-validator';

export class UpdateManagerPasswordDto {
  @MinLength(8)
  senha: string;
}
