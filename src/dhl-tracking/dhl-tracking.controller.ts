import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { DhlTrackingService } from "./dhl-tracking.service";
import { CreateDhlTrackingDto } from "./dto/create-dhl-tracking.dto";
import { UpdateDhlTrackingDto } from "./dto/update-dhl-tracking.dto";

@Controller("api/dhl-tracking")
@ApiBearerAuth()
@ApiTags("dhl tracking")
export class DhlTrackingController {
  constructor(private readonly dhlTrackingService: DhlTrackingService) {}

  @Post()
  create(@Body() createDhlTrackingDto: CreateDhlTrackingDto) {
    return this.dhlTrackingService.create(createDhlTrackingDto);
  }

  @Get()
  findAll() {
    return this.dhlTrackingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.dhlTrackingService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDhlTrackingDto: UpdateDhlTrackingDto
  ) {
    return this.dhlTrackingService.update(+id, updateDhlTrackingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.dhlTrackingService.remove(+id);
  }
}
