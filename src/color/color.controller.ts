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
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { ColorService } from "./color.service";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
@ApiBearerAuth()
@ApiTags("color")
@Controller("api/color")
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createColorDto: CreateColorDto) {
    return this.colorService.create(createColorDto);
  }

  @Get()
  findAll() {
    return this.colorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.colorService.findOne(+id);
  }

  @Put("active/:id")
  @UseGuards(JwtAuthGuard)
  updateActive(@Param("id") id: string, @Body() res: any) {
    return this.colorService.updaetActive(+id, res);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param("id") id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.colorService.update(+id, updateColorDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.colorService.remove(+id);
  }
}
