import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEstimateSettingDto {
  @IsNotEmpty()
  @ApiProperty({ default: "" })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ default: "" })
  size: string;

  @IsOptional()
  @ApiProperty({ default: "" })
  unit: string;

  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  price100: number;

  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  price500: number;

  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  price1000: number;
}
