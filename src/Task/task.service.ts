import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntities } from "./entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskDtos } from "./dtos/createtask.dto";

@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(TaskEntities)
        private taskRepository: Repository<TaskEntities>
    ){}

    async findAll(): Promise<TaskEntities[]>{
        return await this.taskRepository.find()
    }

    async CreateTask(@Body() createTaskDtos: CreateTaskDtos) : Promise<TaskEntities>{
        const task = this.taskRepository.create(createTaskDtos)
        return await this.taskRepository.save(task)
    }
    
        
}