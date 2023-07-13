import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDhlTrackingDto {
  @ApiProperty()
  @IsNotEmpty()
  messageDateTime: string;

  @ApiProperty()
  @IsNotEmpty()
  shipmentID: string;

  @ApiProperty()
  @IsNotEmpty()
  deliveryConfirmationNo: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  shipmentPieceID: string;
}
