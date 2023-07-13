import { Users } from "./entities/user.entity";
import { ChangePassword, CreateUserDto, CreateUserOrderDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Province } from "./entities/province.entity";
export declare class UsersService {
    private usersRepo;
    private provinceRepo;
    private jwtService;
    constructor(usersRepo: Repository<Users>, provinceRepo: Repository<Province>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<any>;
    createUser(createUserOrderDto: CreateUserOrderDto): Promise<any>;
    findProvince(): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<any>;
    findOneByEmail(email: string): Promise<any>;
    hashPassword(password: string): string;
    validatePassword(inputPassword: string, password: string): Promise<boolean>;
    changePassword(changePassword: ChangePassword): Promise<any>;
    rememberPassword(email: string): Promise<any>;
    saveNewPassword(email: string, password: string): Promise<any>;
    tokenUpdate(id: any, token: any): Promise<boolean>;
    checkJwtToken(id: any, token: string): Promise<any>;
}
