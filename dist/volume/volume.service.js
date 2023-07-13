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
exports.VolumeService = void 0;
const volume_entity_1 = require("./entities/volume.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let VolumeService = class VolumeService {
    constructor(volumeRepo) {
        this.volumeRepo = volumeRepo;
    }
    async create(createVolumeDto) {
        const checkname = await this.volumeRepo.findOne({
            name: createVolumeDto.name,
            is_active: true,
        });
        if (checkname)
            throw new common_1.NotFoundException("Dupicate");
        const newData = await this.volumeRepo.create(createVolumeDto);
        const result = await this.volumeRepo.save(newData);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async findAll() {
        const result = await this.volumeRepo.find({
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
        const result = await this.volumeRepo.findOne(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async update(id, updateVolumeDto) {
        const newData = await this.volumeRepo.create(updateVolumeDto);
        const result = await this.volumeRepo.update(id, newData);
        const data = await this.volumeRepo.findOne(id);
        if (result)
            return { data: data };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
    async updaetActive(id, active) {
        const checkData = await this.volumeRepo.findOne(+id);
        if (!checkData)
            throw new common_1.NotFoundException("Not found");
        const result = await this.volumeRepo.update(+id, active);
        if (!result)
            throw new common_1.NotFoundException("cannot update");
        return { result };
    }
    async remove(id) {
        const check = await this.volumeRepo.findOne(id);
        if (!check)
            throw new common_1.NotFoundException("Not found data.");
        const result = await this.volumeRepo.delete(id);
        if (result)
            return { data: result };
        else
            throw new common_1.NotFoundException("cannot save data.");
    }
};
VolumeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(volume_entity_1.Volume)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VolumeService);
exports.VolumeService = VolumeService;
//# sourceMappingURL=volume.service.js.map