import { PartialType } from "@nestjs/swagger";
import { CreateEstimateSettingDto } from "./create-estimate-setting.dto";

export class UpdateEstimateSettingDto extends PartialType(
  CreateEstimateSettingDto
) {}
