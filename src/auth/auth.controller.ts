import { AuthService } from "./../auth/auth.service";
import { LocalAuthGuard } from "../auth/guard/local-auth.guard";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";

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
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LoginDto } from "./dto/login.dto";

@ApiTags("auth")
@Controller("api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Body() req: LoginDto) {
    return this.authService.login(req);
  }
}
