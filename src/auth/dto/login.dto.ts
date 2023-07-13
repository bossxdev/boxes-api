import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
export class LoginDto {
  @ApiProperty({ default: "inpangxm@gmail.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ default: "12345678" })
  @IsNotEmpty()
  password: string;
}
