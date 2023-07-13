import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

@Exclude()
export class UpdateUserDto {
  @IsNotEmpty()
  @Expose()
  name?: string;

  @IsNotEmpty()
  @Expose()
  lastname?: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  role: any;
}
