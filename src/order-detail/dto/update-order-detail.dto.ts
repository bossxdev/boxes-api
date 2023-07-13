import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class UpdateOrderStyleDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  size_type: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  material: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  print_finish: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  print_side: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  per_unit: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  sub_total: number;

  @Expose()
  custom_width: number;

  @Expose()
  custom_lenght: number;

  @Expose()
  custom_height: number;
}
@Exclude()
export class UpdateOrderStyleOtherDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  order_detail: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  volume: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  color: any;
}
@Exclude()
export class UpdateOrderDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  order: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  product: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  paper_type: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  print_pattern: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  coating_pattern: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  special_technic: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  quantity_of_product: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  price_per_item: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  email: string;
}

@Exclude()
export class UpdateOrderDetailOtherDto extends UpdateOrderStyleOtherDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  user: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  category_type: any;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  style_type: any;
}
