import { OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
export declare class OrderDetailController {
    private readonly orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<any>;
    remove(id: string): Promise<any>;
}
