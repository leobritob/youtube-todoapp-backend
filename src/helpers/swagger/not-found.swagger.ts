import { ApiProperty } from '@nestjs/swagger';

export class NotFoundSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
