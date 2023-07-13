import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSizeDto {
  @ApiProperty()
  @IsNotEmpty()
  width: number;

  @ApiProperty()
  @IsNotEmpty()
  height: number;

  @ApiProperty()
  @IsNotEmpty()
  length: number;
}
