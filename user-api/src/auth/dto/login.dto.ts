import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'zaynab' })
  username: string;

  @ApiProperty({ example: '123456' })
  password: string;
}
