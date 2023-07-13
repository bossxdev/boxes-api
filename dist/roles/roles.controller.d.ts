import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRole: CreateRoleDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateActive(id: string, res: any): Promise<any>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<any>;
    remove(id: string): Promise<any>;
}
