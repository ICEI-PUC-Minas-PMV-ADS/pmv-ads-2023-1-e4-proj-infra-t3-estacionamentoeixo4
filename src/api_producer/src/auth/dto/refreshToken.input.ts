import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshInput {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
