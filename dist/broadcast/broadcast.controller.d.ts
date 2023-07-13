import { BroadcastService } from "./broadcast.service";
import { CreateBroadcastDto } from "./dto/create-broadcast.dto";
import { UpdateBroadcastDto } from "./dto/update-broadcast.dto";
export declare class BroadcastController {
    private readonly broadcastService;
    constructor(broadcastService: BroadcastService);
    create(createBroadcastDto: CreateBroadcastDto): Promise<object>;
    findAll(): Promise<object>;
    findOne(id: string): Promise<object>;
    update(id: string, updateBroadcastDto: UpdateBroadcastDto): Promise<object>;
    remove(id: string): Promise<object>;
}
