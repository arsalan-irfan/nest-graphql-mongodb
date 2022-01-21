import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(1)
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
}
