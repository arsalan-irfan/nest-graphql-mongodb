import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from 'src/students/student.module';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]),StudentsModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
