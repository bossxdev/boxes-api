"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const role_entity_1 = require("./entities/role.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RolesService = class RolesService {
    constructor(rolesRepo) {
        this.rolesRepo = rolesRepo;
    }
    async create(createRoleDto) {
        const checkname = await this.rolesRepo.findOne({
            name: createRoleDto.name,
        });
        if (checkname)
            throw new common_1.NotFoundException("Dupicate data.");
        const newRole = await this.rolesRepo.create(createRoleDto);
        const result = await this.rolesRepo.save(newRole);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { statusCode: "200", message: "", data: result };
    }
    async findAll() {
        const result = await this.rolesRepo.find({
            order: {
                id: "DESC",
            },
        });
        return { statusCode: "200", message: "", data: result };
    }
    async findOne(id) {
        const result = await this.rolesRepo.findOne(id);
        if (!result)
            throw new common_1.NotFoundException("not found data.");
        else
            return { statusCode: "200", message: "", data: result };
    }
    async update(id, updateRoleDto) {
        let getData = await this.rolesRepo.findOne(id);
        if (!getData)
            throw new common_1.NotFoundException("not found data.");
        const role = {
            name: updateRoleDto.name,
        };
        const result = await this.rolesRepo.update(id, role);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        getData = await this.rolesRepo.findOne(id);
        if (result)
            return { statusCode: "200", message: "", data: getData };
    }
    async updaetActive(id, active) {
        const checkData = await this.rolesRepo.findOne(+id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.rolesRepo.update(+id, active);
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { result };
    }
    async remove(id) {
        const checkData = await this.rolesRepo.findOne(id);
        if (!checkData || !checkData.is_active)
            throw new common_1.NotFoundException("not found data.");
        const result = await this.rolesRepo.delete(id);
        if (!result)
            throw new common_1.NotFoundException("cannot save data.");
        else
            return { statusCode: "200", message: "", data: [] };
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map