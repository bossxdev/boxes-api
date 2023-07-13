import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
