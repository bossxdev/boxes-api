import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { SizeService } from "./size.service";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeActiveDto, UpdateSizeDto } from "./dto/update-size.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
@ApiBearerAuth()
@ApiTags("size")
@Controller("api/size")
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizeService.create(createSizeDto);
  }

  @Get()
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sizeService.findOne(+id);
  }

  @Put("active/:id")
  @UseGuards(JwtAuthGuard)
  updateActive(@Param("id") id: string, @Body() res: UpdateSizeActiveDto) {
    return this.sizeService.updaetActive(+id, res);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param("id") id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizeService.update(+id, updateSizeDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.sizeService.remove(+id);
  }
}
