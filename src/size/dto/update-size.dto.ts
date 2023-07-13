import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class UpdateSizeDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  width: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  height: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  length: number;
}

export class UpdateSizeActiveDto {
  @ApiProperty()
  @IsNotEmpty()
  is_active: boolean;
}
