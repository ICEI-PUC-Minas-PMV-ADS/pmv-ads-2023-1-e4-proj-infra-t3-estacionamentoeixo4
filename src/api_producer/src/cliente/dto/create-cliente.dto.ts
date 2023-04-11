import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator'; //Lib de validação pronta pra usar
//Classe onde definimos o type da entráda do método createUser(@Body userDTO:CreateUserDto)
export class CreateClienteDto {
  @IsString()
  @MaxLength(8)
  name: string;

  @IsString()
  @MaxLength(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
}
