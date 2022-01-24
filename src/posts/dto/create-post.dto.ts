import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreatePostDto {
    @MinLength(2)
    @IsNotEmpty()
    @IsString()
    title: string

    @MinLength(2)
    @IsNotEmpty()
    @IsString()
    body: string

    categories: string[]
}
