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
import { OrderDetailService } from "./order-detail.service";
import {
  CreateOrderDetailDto,
  CreateOrderDetailOtherDto,
} from "./dto/create-order-detail.dto";
import {
  UpdateOrderDetailDto,
  UpdateOrderDetailOtherDto,
} from "./dto/update-order-detail.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";

@ApiBearerAuth()
@ApiTags("order detail")
@Controller("api/order-detail")
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Roles("User")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post("type_normal")
  @UsePipes(new ValidationPipe())
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.create(createOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.orderDetailService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.orderDetailService.findOne(+id);
  }

  @Roles("Admin")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put("type_normal/:id")
  @UsePipes(new ValidationPipe())
  update(
    @Param("id") id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto
  ) {
    return this.orderDetailService.update(+id, updateOrderDetailDto);
  }

  @Roles("Admin")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderDetailService.remove(+id);
  }
}
