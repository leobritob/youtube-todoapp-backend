import { ApiProperty } from '@nestjs/swagger';

export class BadRequestSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string[];

  @ApiProperty()
  error: string;
}
