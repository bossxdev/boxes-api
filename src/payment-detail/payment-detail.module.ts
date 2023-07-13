import { Module } from "@nestjs/common";
import { PaymentDetailService } from "./payment-detail.service";
import { PaymentDetailController } from "./payment-detail.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentDetail } from "./entities/payment-detail.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PaymentDetail])],
  controllers: [PaymentDetailController],
  providers: [PaymentDetailService],
})
export class PaymentDetailModule {}
