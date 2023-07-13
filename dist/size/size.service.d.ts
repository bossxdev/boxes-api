import { Size } from "./entities/size.entity";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeActiveDto, UpdateSizeDto } from "./dto/update-size.dto";
import { Repository } from "typeorm";
export declare class SizeService {
    private sizeRepo;
    constructor(sizeRepo: Repository<Size>);
    create(createSizeDto: CreateSizeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateSizeDto: UpdateSizeDto): Promise<any>;
    updaetActive(id: number, active: UpdateSizeActiveDto): Promise<any>;
    remove(id: number): Promise<any>;
}
