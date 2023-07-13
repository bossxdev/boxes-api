import { Roles } from "./entities/role.entity";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { Repository } from "typeorm";
export declare class RolesService {
    private rolesRepo;
    constructor(rolesRepo: Repository<Roles>);
    create(createRoleDto: CreateRoleDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<any>;
    updaetActive(id: number, active: any): Promise<any>;
    remove(id: number): Promise<any>;
}
