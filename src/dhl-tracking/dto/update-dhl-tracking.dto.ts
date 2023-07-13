import { PartialType } from "@nestjs/swagger";
import { CreateDhlTrackingDto } from "./create-dhl-tracking.dto";

export class UpdateDhlTrackingDto extends PartialType(CreateDhlTrackingDto) {}
