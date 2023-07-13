import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { EstimateSettingService } from "./estimate-setting.service";
import { CreateEstimateSettingDto } from "./dto/create-estimate-setting.dto";
import { UpdateEstimateSettingDto } from "./dto/update-estimate-setting.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";

@Controller("api/estimate-setting")
@ApiTags("Estimate setting")
export class EstimateSettingController {
  constructor(
    private readonly estimateSettingService: EstimateSettingService
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createEstimateSettingDto: CreateEstimateSettingDto) {
    return this.estimateSettingService.create(createEstimateSettingDto);
  }

  @Get()
  findAll() {
    return this.estimateSettingService.findAll();
  }

  @Get(":id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.estimateSettingService.findOne(+id);
  }

  @Patch(":id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param("id") id: string,
    @Body() updateEstimateSettingDto: UpdateEstimateSettingDto
  ) {
    return this.estimateSettingService.update(+id, updateEstimateSettingDto);
  }

  @Patch("active/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  updateActive(@Param("id") id: string, @Body() res: any) {
    return this.estimateSettingService.updateActive(+id, res);
  }

  @Delete(":id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.estimateSettingService.remove(+id);
  }
}
