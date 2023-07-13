import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("roles")
@Controller("api/roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async create(@Body() createRole: CreateRoleDto) {
    return await this.rolesService.create(createRole);
  }

  @Get()
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @Put("active/:id")
  @UseGuards(JwtAuthGuard)
  updateActive(@Param("id") id: string, @Body() res: any) {
    return this.rolesService.updaetActive(+id, res);
  }

  @Put(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
