import { Repository } from "typeorm";
import { CreatePaymentDetailDto } from "./dto/create-payment-detail.dto";
import { UpdatePaymentDetailDto } from "./dto/update-payment-detail.dto";
import { PaymentDetail } from "./entities/payment-detail.entity";
export declare class PaymentDetailService {
    private paymentDetailRepo;
    constructor(paymentDetailRepo: Repository<PaymentDetail>);
    create(createPaymentDetailDto: CreatePaymentDetailDto): Promise<PaymentDetail>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<PaymentDetail>;
    update(id: number, updatePaymentDetailDto: UpdatePaymentDetailDto): Promise<PaymentDetail>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
