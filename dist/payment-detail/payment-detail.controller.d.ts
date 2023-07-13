import { PaymentDetailService } from "./payment-detail.service";
import { CreatePaymentDetailDto } from "./dto/create-payment-detail.dto";
import { UpdatePaymentDetailDto } from "./dto/update-payment-detail.dto";
export declare class PaymentDetailController {
    private readonly paymentDetailService;
    constructor(paymentDetailService: PaymentDetailService);
    create(createPaymentDetailDto: CreatePaymentDetailDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<import("./entities/payment-detail.entity").PaymentDetail>;
    update(id: string, updatePaymentDetailDto: UpdatePaymentDetailDto): Promise<import("./entities/payment-detail.entity").PaymentDetail>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
