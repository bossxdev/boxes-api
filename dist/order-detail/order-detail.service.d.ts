import { OrderDetail } from "./entities/order-detail.entity";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { Repository } from "typeorm";
export declare class OrderDetailService {
    private orderDetailRepo;
    constructor(orderDetailRepo: Repository<OrderDetail>);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    processingMsg(): Promise<void>;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<any>;
    remove(id: number): Promise<any>;
}
