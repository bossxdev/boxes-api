import { SizeService } from "./size.service";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeActiveDto, UpdateSizeDto } from "./dto/update-size.dto";
export declare class SizeController {
    private readonly sizeService;
    constructor(sizeService: SizeService);
    create(createSizeDto: CreateSizeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateActive(id: string, res: UpdateSizeActiveDto): Promise<any>;
    update(id: string, updateSizeDto: UpdateSizeDto): Promise<any>;
    remove(id: string): Promise<any>;
}
