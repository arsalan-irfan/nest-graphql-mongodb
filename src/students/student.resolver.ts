import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Mutation((returns) => StudentType)
  async createStudent(@Args("createStudentInput") createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
  @Query(returns=>[StudentType])
  async getStudents():Promise<Student[]>{
      return this.studentService.getStudents();
  }
  @Query(returns=>StudentType)
  async getStudentById(@Args('id') id:string):Promise<Student>{
      return this.studentService.getStudentById(id);
  }
}
