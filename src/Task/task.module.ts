import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntities } from "./entities/task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TaskEntities])],
    controllers: [TaskController],
    providers: [TaskService],

})
export class TaskModule{}