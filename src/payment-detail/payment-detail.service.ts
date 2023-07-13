import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePaymentDetailDto } from "./dto/create-payment-detail.dto";
import { UpdatePaymentDetailDto } from "./dto/update-payment-detail.dto";
import { PaymentDetail } from "./entities/payment-detail.entity";

@Injectable()
export class PaymentDetailService {
  constructor(
    @InjectRepository(PaymentDetail)
    private paymentDetailRepo: Repository<PaymentDetail>
  ) {}
  create(createPaymentDetailDto: CreatePaymentDetailDto) {
    const create = this.paymentDetailRepo.create(createPaymentDetailDto);
    return this.paymentDetailRepo.save(create);
  }

  async findAll(): Promise<any> {
    return this.paymentDetailRepo.find();
  }

  async findOne(id: number): Promise<PaymentDetail> {
    return this.paymentDetailRepo.findOne(id);
  }

  async update(
    id: number,
    updatePaymentDetailDto: UpdatePaymentDetailDto
  ): Promise<PaymentDetail> {
    await this.paymentDetailRepo.update(id, updatePaymentDetailDto);
    return this.paymentDetailRepo.findOne(id);
  }

  remove(id: number) {
    return this.paymentDetailRepo.delete(id);
  }
}
