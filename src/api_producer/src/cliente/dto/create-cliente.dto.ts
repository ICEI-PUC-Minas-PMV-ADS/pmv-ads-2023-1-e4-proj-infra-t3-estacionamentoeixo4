import { IsString, MinLength, MaxLength } from "class-validator"; //Lib de validação pronta pra usar 
//Classe onde definimos o type da entráda do método createUser(@Body userDTO:CreateUserDto)
export class CreateClienteDto {
    @IsString()
    @MinLength(8)
    // @ApiProperty() Caso tenha documentação no swagger, ainda vamos implementar
    name: string;

    @IsString()
    @MinLength(8)
    email: string;

    @IsString()
    @MinLength(11)
    @MaxLength(11)
    cpf: string
}
