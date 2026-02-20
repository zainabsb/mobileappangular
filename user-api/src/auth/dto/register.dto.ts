import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Zaynab' })
  firstName: string;

  @ApiProperty({ example: 'Sbeity' })
  lastName: string;

  @ApiProperty({ example: 25 })
  age: number;

  @ApiProperty({ example: 'zaynab' })
  username: string;

  @ApiProperty({ example: '123456' })
  password: string;
}
