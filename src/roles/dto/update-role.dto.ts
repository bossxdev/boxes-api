import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsString, IsNotEmpty } from "class-validator";
@Exclude()
export class UpdateRoleDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  name: string;
}
