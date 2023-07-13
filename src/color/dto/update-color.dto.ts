import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class UpdateColorDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  name: string;
}
