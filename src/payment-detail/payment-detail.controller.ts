import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PaymentDetailService } from "./payment-detail.service";
import { CreatePaymentDetailDto } from "./dto/create-payment-detail.dto";
import { UpdatePaymentDetailDto } from "./dto/update-payment-detail.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PendingPaymentMail } from "src/utils/order-status/send-mail";

@ApiBearerAuth()
@ApiTags("payment detail")
@Controller("api/payment-detail")
export class PaymentDetailController {
  constructor(private readonly paymentDetailService: PaymentDetailService) {}

  @Post()
  async create(
    @Body() createPaymentDetailDto: CreatePaymentDetailDto
  ): Promise<any> {
    await PendingPaymentMail(createPaymentDetailDto.Email);
    return this.paymentDetailService.create(createPaymentDetailDto);
  }

  @Get()
  findAll() {
    return this.paymentDetailService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentDetailService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePaymentDetailDto: UpdatePaymentDetailDto
  ) {
    return this.paymentDetailService.update(+id, updatePaymentDetailDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentDetailService.remove(+id);
  }
}
