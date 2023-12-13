import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDtos{
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string
}