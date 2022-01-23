import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    name: string
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    password: string

}
