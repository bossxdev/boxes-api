import { Repository } from "typeorm";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";
export declare class StatusesService {
    private status;
    constructor(status: Repository<Status>);
    create(createStatusDto: CreateStatusDto): string;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateStatusDto: UpdateStatusDto): string;
    remove(id: number): string;
}
