import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePaymentDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  Amount: string;

  @ApiProperty()
  @IsNotEmpty()
  TransactionId: string;

  @ApiProperty()
  @IsNotEmpty()
  OrderNo: string;

  @ApiProperty()
  @IsNotEmpty()
  CustomerId: string;

  @ApiProperty()
  @IsNotEmpty()
  BankCode: string;

  @ApiProperty()
  @IsNotEmpty()
  PlaymentDate: string;

  @ApiProperty()
  @IsNotEmpty()
  PaymentStatus: number;

  @ApiProperty()
  @IsNotEmpty()
  BankRefCode: number;

  @ApiProperty()
  @IsNotEmpty()
  CurrentDate: number;

  @ApiProperty()
  @IsNotEmpty()
  CurrentTime: number;

  @ApiProperty()
  @IsNotEmpty()
  PaymentDescription: string;

  @ApiProperty()
  CreditCardToken: string;

  @ApiProperty()
  @IsNotEmpty()
  Currency: number;

  @ApiProperty()
  @IsNotEmpty()
  CustomerName: string;

  @ApiProperty()
  @IsNotEmpty()
  CheckSum: string;

  @ApiProperty()
  @IsNotEmpty()
  Email: string;
}
