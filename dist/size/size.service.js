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
exports.SizeService = void 0;
const size_entity_1 = require("./entities/size.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SizeService = class SizeService {
    constructor(sizeRepo) {
        this.sizeRepo = sizeRepo;
    }
    async create(createSizeDto) {
        const newData = await this.sizeRepo.create(createSizeDto);
        const result = await this.sizeRepo.save(newData);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async findAll() {
        const result = await this.sizeRepo.find({
            order: {
                id: "DESC",
            },
        });
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async findOne(id) {
        const result = await this.sizeRepo.findOne(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async update(id, updateSizeDto) {
        const newData = await this.sizeRepo.create(updateSizeDto);
        const result = await this.sizeRepo.update(id, newData);
        const data = await this.sizeRepo.findOne(id);
        if (result)
            return { data: data };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async updaetActive(id, active) {
        const checkData = await this.sizeRepo.findOne(+id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.sizeRepo.update(+id, {
            is_active: active.is_active,
        });
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { result };
    }
    async remove(id) {
        const check = await this.sizeRepo.findOne(id);
        if (!check)
            throw new common_1.NotFoundException("not found data.");
        const result = await this.sizeRepo.delete(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
};
SizeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(size_entity_1.Size)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SizeService);
exports.SizeService = SizeService;
//# sourceMappingURL=size.service.js.map