import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTaskDtos{
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string
}