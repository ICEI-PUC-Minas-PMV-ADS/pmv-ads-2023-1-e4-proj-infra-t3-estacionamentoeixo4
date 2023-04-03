import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SigninDto {
    @IsNumber()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}