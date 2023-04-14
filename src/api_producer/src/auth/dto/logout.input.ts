import { IsEmpty, IsString } from 'class-validator';

export class LogoutInput {
  @IsString()
  @IsEmpty()
  token: string;
}
