import { Userlogs } from "./entities/user.entity";
import { CreateUserLogsDto } from "./dto/create-user.dto";
import { Repository } from "typeorm";
export declare class UsersLogsService {
    private logsRepo;
    constructor(logsRepo: Repository<Userlogs>);
    create(createUserLogsDto: CreateUserLogsDto): Promise<any>;
    findAll(): Promise<any>;
    findByUser(id: number): Promise<any>;
}
