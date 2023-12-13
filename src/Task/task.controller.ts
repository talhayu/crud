import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskEntities } from "./entities/task.entity";
import { CreateTaskDtos } from "./dtos/createtask.dto";

@Controller('task')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Get()
    findTask () : Promise<TaskEntities[]>{
        return this.taskService.findAll()
    }

    @Post()
    createTask (@Body() CreateTaskDtos: CreateTaskDtos) : Promise<TaskEntities>{
        return this.taskService.CreateTask(CreateTaskDtos)
    }

}