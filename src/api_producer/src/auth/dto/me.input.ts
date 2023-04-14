import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AuthInput {
  @IsInt()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
