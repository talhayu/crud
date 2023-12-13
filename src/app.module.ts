import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './Task/task.module';
import { TaskEntities } from './Task/entities/task.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'talha',
      database: 'practice',
      entities: [TaskEntities],
      synchronize: true,
    }),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
}
)
export class AppModule {}
