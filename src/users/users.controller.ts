// import { Users } from './entities/user.entity';
import { UsersLogsService } from "./users-logs.service";
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  UseGuards,
  Req,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import {
  ChangePassword,
  CreateUserDto,
  CreateUserLogsDto,
  CreateUserOrderDto,
  RemeberPassword,
} from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("users")
@Controller("api/users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersLogsService: UsersLogsService
  ) {}

  @Post()
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post("create")
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserOrderDto: CreateUserOrderDto) {
    return this.usersService.createUser(createUserOrderDto);
  }

  @Get()
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get("province")
  findProvince() {
    return this.usersService.findProvince();
  }

  @Get("userlogs")
  @UseGuards(JwtAuthGuard)
  findAllLogs() {
    return this.usersLogsService.findAll();
  }

  @Get(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @Post("userlogs")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  addLogs(@Body() createUserLogsDto: CreateUserLogsDto) {
    return this.usersLogsService.create(createUserLogsDto);
  }

  @Post("change_password")
  @UseGuards(JwtAuthGuard)
  changePassword(@Body() changePassword: ChangePassword) {
    return this.usersService.changePassword(changePassword);
  }

  @Post("remember_password")
  @UseGuards(JwtAuthGuard)
  rememberPassword(@Req() req) {
    return this.usersService.rememberPassword(req.user.email);
  }

  @Get("userlogs/:user")
  @UseGuards(JwtAuthGuard)
  findLogsByUser(@Param("user") user: number) {
    return this.usersLogsService.findByUser(user);
  }
}
