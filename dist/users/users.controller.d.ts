import { UsersLogsService } from "./users-logs.service";
import { UsersService } from "./users.service";
import { ChangePassword, CreateUserDto, CreateUserLogsDto, CreateUserOrderDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    private readonly usersLogsService;
    constructor(usersService: UsersService, usersLogsService: UsersLogsService);
    create(createUserDto: CreateUserDto): Promise<any>;
    createUser(createUserOrderDto: CreateUserOrderDto): Promise<any>;
    findAll(): Promise<any>;
    findProvince(): Promise<any>;
    findAllLogs(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<any>;
    addLogs(createUserLogsDto: CreateUserLogsDto): Promise<any>;
    changePassword(changePassword: ChangePassword): Promise<any>;
    rememberPassword(req: any): Promise<any>;
    findLogsByUser(user: number): Promise<any>;
}
