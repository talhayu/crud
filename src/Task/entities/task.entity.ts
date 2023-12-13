import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class TaskEntities{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string
}