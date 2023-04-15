import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsInt()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
