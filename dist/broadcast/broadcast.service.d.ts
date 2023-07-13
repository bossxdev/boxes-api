import { Repository } from "typeorm";
import { CreateBroadcastDto } from "./dto/create-broadcast.dto";
import { UpdateBroadcastDto } from "./dto/update-broadcast.dto";
import { Broadcast } from "./entities/broadcast.entity";
export declare class BroadcastService {
    private broadcastRepo;
    constructor(broadcastRepo: Repository<Broadcast>);
    create(createBroadcastDto: CreateBroadcastDto): Promise<object>;
    findAll(): Promise<object>;
    findOne(id: number): Promise<object>;
    update(id: number, updateBroadcastDto: UpdateBroadcastDto): Promise<object>;
    remove(id: number): Promise<object>;
    sendBroadcast(id: any): Promise<object>;
}
