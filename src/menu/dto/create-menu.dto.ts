import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMenuDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  page: number;

  sort: number;
}
