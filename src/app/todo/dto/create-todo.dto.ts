import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty()
  @IsIn([0, 1])
  @ApiPropertyOptional()
  isDone: number;
}
