import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderStyleDto {
  @ApiProperty()
  @IsNotEmpty()
  size_type: any;

  @ApiProperty()
  @IsNotEmpty()
  material: any;

  @ApiProperty()
  @IsNotEmpty()
  print_finish: any;

  @ApiProperty()
  @IsNotEmpty()
  print_side: any;

  @ApiProperty()
  @IsNotEmpty()
  per_unit: number;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  sub_total: number;

  @ApiProperty()
  custom_width: number;

  @ApiProperty()
  custom_lenght: number;

  @ApiProperty()
  custom_height: number;
}

export class CreateOrderStyleOtherDto {
  @ApiProperty()
  @IsNotEmpty()
  order_detail: any;

  @ApiProperty()
  @IsNotEmpty()
  volume: any;

  @ApiProperty()
  @IsNotEmpty()
  color: any;
}

export class CreateOrderDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  order: any;

  @ApiProperty()
  @IsNotEmpty()
  product: any;

  @ApiProperty()
  @IsNotEmpty()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  paper_type: any;

  @ApiProperty()
  @IsNotEmpty()
  print_pattern: any;

  @ApiProperty()
  @IsNotEmpty()
  coating_pattern: any;

  @ApiProperty()
  @IsNotEmpty()
  special_technic: any;

  @ApiProperty()
  @IsNotEmpty()
  quantity_of_product: number;

  @ApiProperty()
  @IsNotEmpty()
  price_per_item: number;

  @ApiProperty()
  @IsNotEmpty()
  email: string;
}

export class CreateOrderDetailOtherDto extends CreateOrderStyleOtherDto {
  @ApiProperty()
  @IsNotEmpty()
  user: any;

  @ApiProperty()
  @IsNotEmpty()
  category_type: any;

  @ApiProperty()
  @IsNotEmpty()
  style_type: any;
}
