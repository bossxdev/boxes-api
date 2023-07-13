import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  role: any;
}

export class CreateUserOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsOptional()
  lastname?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  thumbon: string;

  @ApiProperty()
  @IsNotEmpty()
  ampher: string;

  @ApiProperty()
  @IsNumber()
  province: any;

  @ApiProperty()
  @IsNotEmpty()
  zipcode: number;

  @ApiProperty()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty()
  @IsOptional()
  fax: string;

  @ApiProperty()
  @IsOptional()
  lineid: any;

  @ApiProperty()
  @IsOptional()
  company: string;

  @ApiProperty()
  @IsOptional()
  bill_address: string;

  @ApiProperty()
  @IsOptional()
  bill_address_status: boolean;

  @ApiProperty()
  @IsOptional()
  bill_ampher: string;

  @ApiProperty()
  @IsOptional()
  bill_company: string;

  @ApiProperty()
  @IsOptional()
  bill_thumbon: string;

  @ApiProperty()
  @IsOptional()
  bill_zipcode: number;

  @ApiProperty()
  @IsOptional()
  bill_province: any;

  role: any;
}

export class CreateUserLogsDto {
  @IsNotEmpty()
  user: any;

  @IsNotEmpty()
  description: string;
}

export class ChangePassword {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  new_password: string;

  @IsNotEmpty()
  new_password_again: string;
}

export class RemeberPassword {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
